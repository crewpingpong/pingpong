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
	
	// 1:1 문의 
	@PostMapping("/Send")
	public String qna1To1(
			Inquiry inquiry // 커맨드 객체 (필드에 파라미터 담겨있음)
			,@SessionAttribute("loginMember") Member loginMember // 로그인한 회원 정보 세션 등록
			,@RequestParam(value="chooseFile",required = false) List<MultipartFile> images 
			/* List<MultipartFile>
			 * - 업로드된 이미지가 없어서 List에 요소 MultipartFile 객체가 추가됨
			 * 
			 * - 단, 업로드된 이미지가 없는 MultipartFile 객체는
			 *	 파일크기(size)가 0 또는 파일명(getOriginalFileName())이
			 * 
			 * */
			,HttpSession session
			) throws IllegalStateException, IOException {
		
		// 1. 로그인한 회원 번호를 얻어와 inquiry에 세팅
		inquiry.setMemberNo(loginMember.getMemberNo());
		
		//  업로드된 이미지 서버에 실제로 저장되는 경로
		//		+ 웹에서 요청 시 이미지를 볼수 있는 경로( 웹 접근 경로)
		String webPath = "/resources/images/inquiry/";
		String filePath = session.getServletContext().getRealPath(webPath);
		
		// 게시글 삽입 서비스 호출 후 삽입된 게시글 번호 반환 받기
		int inquiryNo = service.inquiryInsert(inquiry,images,webPath,filePath);
		
		// 수행 후 QnA 홈으로 이동
		return "/qna/QnAHome";
	}
	
	
	
}
