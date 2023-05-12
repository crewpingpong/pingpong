package com.pingpong.project.mypage.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.SessionAttribute;
import org.springframework.web.bind.annotation.SessionAttributes;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.pingpong.project.member.model.dto.Member;
import com.pingpong.project.mypage.model.service.MypageService;

@SessionAttributes({"loginMember"}) // ???????????????????????
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
	
    
    @PostMapping("/background")
    public String background() {
    	return null;
    }
	   
}
