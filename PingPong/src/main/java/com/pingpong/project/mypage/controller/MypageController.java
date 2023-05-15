package com.pingpong.project.mypage.controller;


import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletResponse;

import java.io.IOException;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.SessionAttribute;
import org.springframework.web.bind.annotation.SessionAttributes;
import org.springframework.web.bind.support.SessionStatus;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.pingpong.project.board.dto.Board;
import com.pingpong.project.member.model.dto.Member;
import com.pingpong.project.mypage.model.dto.MyPage;
import com.pingpong.project.mypage.model.service.MypageService;


@SessionAttributes({"loginMember", "memberProfile"})
@RequestMapping("/mypage")
@Controller
public class MypageController {
	
	@Autowired
	private MypageService service;
	
	
	@GetMapping("/")
	public String personal() {
		return "personal/post";
	}

	
	@GetMapping("/self")  // 마이페이지로 넘어오면 각 회원의 정보를 가져와서 보여줘야 함 
	public String personal(
				@SessionAttribute("loginMember") Member loginMember
				, Model model
				, RedirectAttributes ra
				) {
		
		System.out.println("화면들어오나");
		MyPage memberProfile = service.selectMemberProfile(loginMember.getMemberNo());
//		Board board = service.selectBoard(memberNo);
		
		System.out.println(memberProfile);
		
		model.addAttribute("memberProfile", memberProfile);
		
		return "personal/post";
	}
	
	// 내 정보 수정으로 이동
	@GetMapping("/myPageModi")
	public String myPageModi() {
		return "personal/myPageModi"; 
	}
	
	
	// 회원 정보 수정
	@PostMapping("/info")
	public String updateInfo(Member updateMember
						, @SessionAttribute("loginMember") Member loginMember
						, RedirectAttributes ra) {
		
		updateMember.setMemberNo(loginMember.getMemberNo()); // 로그인한 회원의 번호를 updateMember에 추가
		
		int result = service.updateInfo(updateMember);
		
		String message = null;
		
		if(result > 0) { // 성공
			
			message = "회원 정보가 수정되었습니다.";
			
			// Session에 로그인 된 회원 정보도 수정(동기화)
			loginMember.setMemberNickname(updateMember.getMemberNickname());
			loginMember.setMemberUrl(updateMember.getMemberUrl());
			
		}else { // 실패
			
			message = "회원 정보 수정 실패";
			
		}
		
		ra.addFlashAttribute("message", message);
		
		return "redirect:info";
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
		
		// 1. 로그인한 회원의 회원 번호 얻어오기
		int memberNo = loginMember.getMemberNo();
		
		// 2. 회원 탈퇴 서비스 호출
		//	- 비밀번호가 일치하면 MEMBER_DEL_FL -> 'Y'로 바꾸고 1 반환
		//	- 비밀번호가 일치하지 않으면 -> 0 반환
		int result = service.secession(memberPw, memberNo);
		
		String path = "redirect:";
		String message = null;
		
		// 3. 탈퇴 성공 시
		if(result > 0) {
			//	- message : 탈퇴되었습니다
			message = "탈퇴되었습니다";
			//	- 메인 페이지로 리다이렉트
			path += "/";
			//	- 로그아웃
			status.setComplete();
			//	+ 쿠키 삭제
			Cookie cookie = new Cookie("saveId", "");
			cookie.setMaxAge(0);
			cookie.setPath("/");
			resp.addCookie(cookie);
			
		}		

		// 4. 탈퇴 실패 시
		else {
			//	- message : 현재 비밀번호가 일치하지 않습니다
			message = "현재 비밀번호가 일치하지 않습니다";
			//	- 회원 탈퇴 페이지로 리다이렉트
			path += "secession";
			
		}
		
		ra.addFlashAttribute("message", message);
		
		return path;
	}
	
	
	
	
    
    // 배경화면 변경
    @PostMapping("/background")
    public String background(
    		@RequestParam(value="backgroundImage", required=false) MultipartFile backgroundImage // 배경화면 이미지
    		,@SessionAttribute("loginMember") Member loginMember  // 회원 번호 확인용
    		, RedirectAttributes ra  // 메시지 전달용
    		, HttpSession session  //
    		, Model model
    		) throws IllegalStateException, IOException{
    	
    	String webPath = "/resources/images/mypage/";  // 저장경로
		
		String filePath = session.getServletContext().getRealPath(webPath);
    	
    	int result = service.backgroundUpdate(loginMember.getMemberNo(), backgroundImage, webPath, filePath);
    	
    	String message = null;
		if(result > 0) {  // 성공 시
			message = "배경화면이 변경되었습니다";
		} else {
			message = "게시글 등록 실패......";
		}
		ra.addFlashAttribute("message", message);
		
		return "redirect:/mypage/";
    }
	   
}
