package com.pingpong.project.mypage.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@RequestMapping("/mypage")
@Controller
public class MypageController {

	@GetMapping("/")
	public String personal() {
		return "personal/post";
	}
	
    // 내 정보 수정으로 이동
    @GetMapping("/myPageModi")
    public String myPageModi() {
       return "personal/myPageModi"; 
    }
    
    @PostMapping("/background")
    public String background() {
    	return null;
    }
	   
}
