package com.pingpong.project.manager.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@RequestMapping("/manager")
@Controller
public class ManagerController {

	//가입 회원
	@GetMapping("/")
	public String managerPage() {
		
		return "manager/managerExistingMember";
	}
	
	//탈퇴 회원
	@GetMapping("/Secession")
	public String managerSecessionMember() {
		
		return "manager/managerSecessionMember";
	}
	
	//게시글 관리
	@GetMapping("/Post")
	public String managerPost() {
		
		return "manager/managerPost";
	}
	//댓글 관리
	@GetMapping("/Comment")
	public String managerComment() {
		
		return "manager/managerComment";
	}
	//1:1문의
	@GetMapping("/1To1inquiry")
	public String manager1To1inquiry() {
		
		return "manager/manager1To1Inquiry";
	}
	//신고함
	@GetMapping("/Report")
	public String manager1To1Content() {
		
		return "manager/managerReport";
	}
}
