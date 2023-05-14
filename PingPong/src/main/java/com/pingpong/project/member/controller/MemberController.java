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
	public String login(Member inputMember, Model model, @RequestHeader(value = "referer") String referer,
			@RequestParam(value = "saveId", required = false) String saveId, HttpServletResponse resp,
			RedirectAttributes ra) {
		System.out.println(inputMember.getMemberEmail());

		//Member loginMember = service.login(inputMember);
		Member loginMember = new Member();
		loginMember.setMemberEmail("pingpong@kh.or.kr");
		loginMember.setMemberNo(1);

		System.out.println(loginMember.getMemberNickname());

		String path = "redirect:";

		if (loginMember != null) {
			path += "/";

			model.addAttribute("loginMember", loginMember);

			Cookie cookie = new Cookie("saveId", loginMember.getMemberEmail());

			if (saveId != null) {
				cookie.setMaxAge(60 * 60 * 24 * 30);
			} else {
				cookie.setMaxAge(0);
			}
			cookie.setPath("/");
			resp.addCookie(cookie);
		} else {
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

		if (result > 0) {
			path += "/"; // 메인페이지

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