package com.pingpong.project.message.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.SessionAttribute;
import org.springframework.web.bind.annotation.SessionAttributes;

import com.pingpong.project.member.model.dto.Member;
import com.pingpong.project.message.model.dto.Message;
import com.pingpong.project.message.model.service.MessageService;

@SessionAttributes({"loginMember"})
@RequestMapping("/message")
@Controller
public class MessageController {
	
	@Autowired
	private MessageService service;
	
	// 받은 메세지 조회
	@GetMapping(value="/receive", produces = "application/json; charset=UTF-8")
	@ResponseBody
	public List<Message> messageList(
			@SessionAttribute("loginMember") Member loginMember
			) {
		
		int memberNo = loginMember.getMemberNo();
		
		return service.messageList(memberNo);
		
	}
	
	// 보낸 메세지 조회
	@GetMapping(value="/send", produces = "application/json; charset=UTF-8")
	@ResponseBody
	public List<Message> sendmessageList(
			@SessionAttribute("loginMember") Member loginMember
			) {
		
		int memberNo = loginMember.getMemberNo();
		
		return service.sendmessageList(memberNo);
		
	}
	
	
}
