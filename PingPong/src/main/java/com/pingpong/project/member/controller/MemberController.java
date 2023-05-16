package com.pingpong.project.member.controller;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.SessionAttributes;
import org.springframework.web.bind.support.SessionStatus;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.pingpong.project.member.model.dto.Member;
import com.pingpong.project.member.model.service.MemberService;

@Controller
@RequestMapping("/member")
@SessionAttributes({ "loginMember" })
public class MemberController {

	@Autowired
	private MemberService service;

	// 로그인 전용 화면 이동
	@GetMapping("/login")
	public String login() {
		return "member/login";
	}

	@PostMapping("/login")
	public String login(Member inputMember, Model model
						, @RequestHeader(value = "referer") String referer
						, @RequestParam(value = "saveId", required = false) String saveId
						, HttpServletResponse resp
						, RedirectAttributes ra) {
		
		Member loginMember = service.login(inputMember);
		
//		Member loginMember = new Member();
//		loginMember.setMemberEmail("pingpong@kh.or.kr");
//		loginMember.setMemberNo(1);
		
		String path = "redirect:";
		
		if(loginMember != null) { 
			
			if(loginMember.getAuthority() == 2) { // 관리자 로그인 시 관리자페이지 이동
				path += "/manager";
			}
			
			path += "/";
			model.addAttribute("loginMember", loginMember);
			Cookie cookie = new Cookie("saveId", loginMember.getMemberEmail());
			
			if(saveId != null) { // 체크 되었을 때
				cookie.setMaxAge(60*60*24*30); // 초 단위
			}else {
				cookie.setMaxAge(0);
			}
					
			cookie.setPath("/"); 
			resp.addCookie(cookie);
		}else { // 로그인 실패 시
			path += referer;
			ra.addFlashAttribute("message", "아이디 또는 비밀번호가 일치하지 않습니다.");
		}
		return path;
	}

	@GetMapping("/logout")
	public String logout(SessionStatus status, HttpSession session) {
		status.setComplete();
		return "redirect:/";
	}
	
	// 비밀번호 찾기 이동
	@GetMapping("/pwSearch")
	public String pwSearch() {

		return "member/pwSearch";
	}
	// 비밀번호 인증키 이동
	@GetMapping("/pwSearchCertNum")
	public String pwSearchCertNum() {

		return "member/pwSearchCertNum";
	}
	// 비밀번호 변경 이동
	@GetMapping("/pwReset")
	public String pwReset() {

		return "member/pwReset";
	}

	// 회원 가입 첫번째 페이지로 이동
	@RequestMapping("/signup")
	public String signup() {

		return "member/signup";
	}

	// 회원 가입 두번째 페이지로 이동
	@GetMapping("/signupInfo")
	public String signupInfo() {

		return "member/signupInfo";
	}
	// 비번찾기 이메일 검사
	@PostMapping("/pwSearch")
	public String pwSearch(@RequestParam("memberEmail") String memberEmail,
			HttpSession session,
			RedirectAttributes ra) {
		
		int result = service.emailSearch(memberEmail);
		
		String path = "redirect:";
		String message = "일치하는 이메일이 없습니다.";
		
		if(result > 0) {
			session.setAttribute("memberEmail", memberEmail);
			path += "pwSearchCertNum";
		}else {
			path += "pwSearch";
			ra.addFlashAttribute("message", message);
		}
		return path;
	}
	
	
	// 회원 가입 진행
	@PostMapping("/signup")
	public String signup(@RequestParam("memberEmail") String memberEmail, @RequestParam("memberPw") String memberPw,
			HttpSession session, Member inputMember) {
		
		session.setAttribute("memberEmail", memberEmail);
		session.setAttribute("memberPw", memberPw);

		return "member/signupInfo";
	}

	@PostMapping("/signupInfo")
	public String signupInfo(
			HttpSession session, RedirectAttributes ra, Member inputMember) {
		
		String memberEmail = (String) session.getAttribute("memberEmail");
		String memberPw = (String) session.getAttribute("memberPw");
		
		inputMember.setMemberEmail(memberEmail);
		inputMember.setMemberPw(memberPw);
		

		// 가입 성공 여부에 따라 주소 변경
		String path = "redirect:";
		String message = null;

		// 회원 가입 서비스 호출
		// DB에 DML 수행 시 성공 행의 개수 (int형) 반환
		int result = service.signupInfo(inputMember);

		System.out.println("getMemberNickname" + inputMember.getMemberNickname());
		if (result > 0) {
			path += "/member/login"; // 메인페이지
			
			message = inputMember.getMemberNickname() + "님의 가입을 환영합니다.";

			session.removeAttribute("memberEmail");
			session.removeAttribute("memberPw");

		} else {
			// path += "/member/signUp"; // 절대 경로
			path += "signup"; // 상대 경로
			message = "회원 가입 실패";
		}
		// 리다이렉트 시 session에 잠깐 올라갔다 내려오도록 세팅
		ra.addFlashAttribute("message", message);

		return path;
	}

}