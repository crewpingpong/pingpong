package com.pingpong.project.mypage.controller;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.SessionAttribute;
import org.springframework.web.bind.annotation.SessionAttributes;
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
			message = "게시글 등록 실패......";
		}
		ra.addFlashAttribute("message", message);
		
		return "redirect:mypage";
    }
	   
}
