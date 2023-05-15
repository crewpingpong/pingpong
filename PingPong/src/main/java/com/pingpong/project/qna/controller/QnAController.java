package com.pingpong.project.qna.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;

@RequestMapping("/qna")
@Controller
public class QnAController {
	
	@GetMapping("/")	
	public String quahome() {      
		return "qna/QnAHome";
	}
	
	@GetMapping("/QnAguide")	
	public String quaGuide() {      
		return "qna/QnAguide";
	}
	
	@GetMapping("/FAQlist")	
	public String quaFAQList() {      
		return "qna/FAQ_list";
	}
}
