package com.pingpong.project.mypage.controller;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.SessionAttribute;
import org.springframework.web.bind.annotation.SessionAttributes;
import org.springframework.web.bind.support.SessionStatus;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.pingpong.project.member.model.dto.Member;
import com.pingpong.project.mypage.model.service.MypageService;


@SessionAttributes({"loginMember"})
@RequestMapping("/mypage")
@Controller
public class MypageController {
	
	@Autowired
	private MypageService service;

	@GetMapping("/")
	public String personal() {
		return "personal/post";
	}
	
	// 내 정보 수정으로 이동
	@GetMapping("/myPageModi")
	public String myPageModi() {
		return "personal/myPageModi"; 
	}
	
	
	// 회원 정보 수정
	@PostMapping("/myPageModi")
	public String updateInfo(Member updateMember
						, @SessionAttribute("loginMember") Member loginMember
						, RedirectAttributes ra) {
		
		updateMember.setMemberNo(loginMember.getMemberNo()); // 로그인한 회원의 번호를 updateMember에 추가
		
//		System.out.println(updateMember.getMemberNickname());
//		System.out.println(updateMember.getMemberUrl());
//		System.out.println(updateMember.getMemberNo());
		
		int result = service.updateInfo(updateMember);

//		System.out.println("result : " + result);
		String message = null;
		
		if(result > 0) { // 성공	
			message = "회원 정보가 수정되었습니다.";
			
			// Session에 로그인 된 회원 정보 수정
			loginMember.setMemberNickname(updateMember.getMemberNickname());
			loginMember.setMemberUrl(updateMember.getMemberUrl());
			
		}else { // 실패		
			message = "회원 정보 수정 실패";		
		}
		
		System.out.println(message);
		
		ra.addFlashAttribute("message", message);
		
		return "redirect:myPageModi";
	}
	
	
	// 비밀번호 수정
	@PostMapping("/changePw")
	public String changePw(String currentPw, String newPw
						, @SessionAttribute("loginMember") Member loginMember
						, RedirectAttributes ra) {
		
		int memberNo = loginMember.getMemberNo();
		
		int result = service.changePw(currentPw, newPw, memberNo);
		
		String path = "redirect:";
		String message = null;
		
		if(result > 0) {
			message = "비밀번호가 변경되었습니다.";
			path += "info";
		
		}else {
			message = "현재 비밀번호가 일치하지 않습니다.";
			path += "changePw";
		}
		
		ra.addFlashAttribute("message", message);
		
		return path;
	}
	
	
	// 회원 탈퇴
	@PostMapping("/secession")
	public String secession(String memberPw
						, @SessionAttribute("loginMember") Member loginMember
						, SessionStatus status
						, HttpServletResponse resp
						, RedirectAttributes ra) {
		
		// 로그인한 회원의 회원 번호 얻어오기
		int memberNo = loginMember.getMemberNo();
		
		// 회원 탈퇴 서비스 호출
		int result = service.secession(memberPw, memberNo);
		
		String path = "redirect:";
		String message = null;
		
		// 탈퇴 성공
		if(result > 0) {
			message = "탈퇴되었습니다";
			path += "/";
			status.setComplete(); // 로그아웃
			
			// 쿠키 삭제
//			Cookie cookie = new Cookie("saveId", "");
//			cookie.setMaxAge(0);
//			cookie.setPath("/");
		}		

		// 탈퇴 실패
		else {
			message = "현재 비밀번호가 일치하지 않습니다";
			path += "myPageModi";
		}
		
		ra.addFlashAttribute("message", message);
		
		return path;
	}
	
	
	
	
    
    // 배경화면 변경
    @PostMapping("/background")
    public String background(
    		@RequestParam(value="backgroundImage", required=false) MultipartFile backgroundImage
    		,@SessionAttribute("loginMember") Member loginMember
    		, RedirectAttributes ra
    		, HttpSession session
    		) {
    	
    	String webPath = "/resources/images/myProfile/";
		
		String filePath = session.getServletContext().getRealPath(webPath);
    	
    	int result = service.backgroundUpdate(loginMember.getMemberNo(), backgroundImage, webPath, filePath);
    	    	
    	String message = null;
		if(result > 0) {  // 성공 시
			message = "배경화면이 변경되었습니다";
		} else {
			message = "배경화면 변경 실패......";
		}
		ra.addFlashAttribute("message", message);
		
		return "redirect:mypage";
    }	   
}
