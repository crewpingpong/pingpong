package com.pingpong.project.message.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.SessionAttribute;
import org.springframework.web.bind.annotation.SessionAttributes;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

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
	
	// 답장 보내기
	@PostMapping("/resend")
	@ResponseBody
	public int resendMessage(
			@RequestBody Message message
			,@SessionAttribute("loginMember") Member loginMember
			) {
		message.setSendMember(loginMember.getMemberNo());
		return service.resendMessage(message);
	}
	
	
//	// 메세지 삭제
//	@DeleteMapping("/messageDel")
//	@ResponseBody
//	public int delmessage(@RequestBody int deletMmessageNo){
//		
//		return service.delmessage(delNo);
////		return service.delSendmessage(delNo);
//		
//	}
	

	// 메세지 삭제
	@DeleteMapping("/messageDel")
	@ResponseBody
	public int delMessage(@RequestBody Map<String, String> request) {
	    int deletMessageNo = Integer.parseInt(request.get("deletMessageNo"));
	    int MessageBoxType = Integer.parseInt(request.get("MessageBoxType"));
	    
	    if(MessageBoxType==1) { // 받은 메세지함 메세지 삭제
	    	return service.delmessage(deletMessageNo);	    	
	    } else if(MessageBoxType==2) { // 보낸 메세지함 메세지 삭제
			return service.delSendmessage(deletMessageNo);	    	
	    } else {
	    	return 0; // 실패
	    }

	}
	
	
	
	
	
	// 메세지 보내기
	@PostMapping("/send")
	@ResponseBody
	public int resendMessage(
			@SessionAttribute("loginMember") Member loginMember
			, RedirectAttributes ra
			, String messageContent
			, Message message
			) {
		message.setSendMember(loginMember.getMemberNo());
		message.setMessageContent(messageContent);
		
		// 프로필 보고 있는 회원 번호 가져와서 보내기
		return service.sendMessage(message);
	}
	

}
