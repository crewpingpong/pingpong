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
			,HttpSession session
			) throws IllegalStateException, IOException {
		
		inquiry.setMemberNo(loginMember.getMemberNo());
		
		String webPath = "/resources/images/inquiry/";
		String filePath = session.getServletContext().getRealPath(webPath);
		
		int inquiryNo = service.inquiryInsert(inquiry,images,webPath,filePath);
		
		
		return "/qna/QnAHome";
	}
	
	
	
}
