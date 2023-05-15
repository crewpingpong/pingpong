package com.pingpong.project.manager.controller;

import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.SessionAttributes;

import com.pingpong.project.manager.service.ManagerService;

@SessionAttributes({"loginMember"})
@RequestMapping("/manager")
@Controller
public class ManagerController {

	@Autowired
	private ManagerService service;
	
	//가입 회원 + 회원 목록 조회
	@GetMapping("/")
	public String managerPage(
			Model model) {
		Map<String, Object> map = service.selectMemberList();
		
		model.addAttribute("map",map);
		
		return "manager/managerExistingMember";
	}
	
	//탈퇴 회원
	@GetMapping("/Secession")
	public String managerSecessionMember(
			Model model
			) {
		Map<String, Object> SecessionList = service.selectSessionList();
		
		model.addAttribute("SecessionList",SecessionList);
		
		return "manager/managerSecessionMember";
	}
	
	//게시글 관리
	@GetMapping("/Post")
	public String managerPost(
			Model model
			) {
		Map<String, Object> boardList = service.selectBoardList();
		
		model.addAttribute("boardList",boardList);
		
		
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
