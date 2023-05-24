package com.pingpong.project.qna.controller;

import java.io.IOException;
import java.util.List;

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

import com.pingpong.project.board.model.dto.Inquiry;
import com.pingpong.project.member.model.dto.Member;
import com.pingpong.project.qna.model.service.InquiryService;

@Controller
@RequestMapping("/qna")
@SessionAttributes({"loginMember"})
public class QnAController {
	
	@Autowired
	private InquiryService service;
	
	@GetMapping("/")	
	public String qnahome() {      
		return "qna/QnAHome";
	}
	
	@GetMapping("/QnAguide")	
	public String qnaGuide() {      
		return "qna/QnAguide";
	}
	
	@GetMapping("/FAQlist")	
	public String qnaFAQList() {      
		return "qna/FAQ_list";
	}
	
	@PostMapping("/Send")
	public String qna1To1(
			Inquiry inquiry
			,@SessionAttribute("loginMember") Member loginMember
			,@RequestParam(value="chooseFile",required = false) List<MultipartFile> images
			,RedirectAttributes ra
			,HttpSession session
			) throws IllegalStateException, IOException {
		
		inquiry.setMemberNo(loginMember.getMemberNo());
		System.out.println("11111");
		
		String webPath = "/resources/images/inquiry";
		System.out.println("22222");
		String filePath = session.getServletContext().getRealPath(webPath);
		System.out.println("33333");
		
		int inquiryNo = service.inquiryInsert(inquiry,images,webPath,filePath);
		System.out.println("44444");
		
		String message = null;
		System.out.println("55555");
		
		if(inquiryNo >0) { // 성공 시
			message = "1:1문의가 등록 되었습니다";
		}else {
			message = "1:1문의 등록 실패";
		}
		
		ra.addFlashAttribute("message",message);
		
		return "/qna/QnAHome";
	}
	
	
	
}
