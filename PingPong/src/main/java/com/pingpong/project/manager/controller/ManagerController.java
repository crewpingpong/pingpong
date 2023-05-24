package com.pingpong.project.manager.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.SessionAttributes;

import com.pingpong.project.board.model.dto.Board;
import com.pingpong.project.board.model.dto.Comment;
import com.pingpong.project.board.model.dto.Declaration;
import com.pingpong.project.board.model.dto.Inquiry;
import com.pingpong.project.manager.service.ManagerService;

@SessionAttributes({"loginMember"})
@RequestMapping("/manager")
@Controller
public class ManagerController {

	@Autowired
	private ManagerService service;
	
	//가입 회원 목록 조회 + 페이지 네이션
	@GetMapping("/")
	public String managerPage(
			Model model
			,@RequestParam(value="cp", required=false, defaultValue="1") int cp
			, @RequestParam Map<String, Object> paramMap
			) {
		
		if(paramMap.get("key") == null) {
		Map<String, Object> map = service.selectMemberList(cp);
		
		model.addAttribute("map",map);
		
		}else {
			
			Map<String, Object> map = service.selectMemberList(paramMap, cp); // 오버로딩
			
			model.addAttribute("map", map);
		}
		
		
		return "manager/managerExistingMember";
	}
	
	// 체크된 회원 탈퇴 처리
	@PostMapping("/delete")
	public String managerPageDelete(
			@RequestParam(name = "choicebox", required = false) String[] choicebox) {
		
		for(int i=0; i<choicebox.length;i++) {
			
		 int boardNo = Integer.parseInt(choicebox[i]);
		 int result = service.deleteId(boardNo);
		}
		
		
		return "redirect:/manager/";
	}
	

	//탈퇴 회원
	@GetMapping("/Secession")
	public String managerSecessionMember(
			Model model
			,@RequestParam(value="cp", required=false, defaultValue="1") int cp
			, @RequestParam Map<String, Object> paramMap
			) {
		if(paramMap.get("key") == null) {
			
			Map<String, Object> map = service.selectSecessionList(cp);
			
			model.addAttribute("map",map);
		}else {
			
			Map<String, Object> map = service.selectSecessionList(paramMap, cp); // 오버로딩
			
			model.addAttribute("map", map);
			
		}
		
		return "manager/managerSecessionMember";
	}
	
	
	// 체크된 탈퇴 회원 복구
	@PostMapping("/restore")
	public String managerRestoreMember(
			@RequestParam(name = "choicebox", required = false) String[] choicebox) {
		
		for(int i=0; i<choicebox.length;i++) {
			
			 int boardNo = Integer.parseInt(choicebox[i]);
			 int result = service.restoreId(boardNo);
			}
		
		
		return "redirect:/manager/Secession/";
	}
	
	//게시글 관리
	@GetMapping("/Post")
	public String managerPost(
			Model model
			,@RequestParam(value="cp", required=false, defaultValue="1") int cp
			, @RequestParam Map<String, Object> paramMap
			) {
		
		if(paramMap.get("key") == null) {
		
		Map<String, Object> boardList = service.selectBoardList(cp);
		
		model.addAttribute("boardList",boardList);
		
		}else {
			
		Map<String, Object> boardList = service.selectBoardList(paramMap, cp);
		
		model.addAttribute("boardList",boardList);
		}

		return "manager/managerPost";
	}
	
	// 게시글 삭제 
	@PostMapping("/postdelete")
	public String PostDelete(
			@RequestParam(name = "choicebox", required = false) String[] choicebox) {
		
		for(int i=0; i<choicebox.length;i++) {
			
			 int boardNo = Integer.parseInt(choicebox[i]);
			 int result = service.deletePost(boardNo);
			}
		
		return "redirect:/manager/Post";
	}
	
	//게시글 복구
	@PostMapping("/postrestore")
	public String PostRestore(
			@RequestParam(name = "choicebox", required = false) String[] choicebox) {
		
		for(int i=0; i<choicebox.length;i++) {
			
			 int boardNo = Integer.parseInt(choicebox[i]);
			 int result = service.restorePost(boardNo);
			}
		
		return "redirect:/manager/Post";
	}
	
	//댓글 관리
	@GetMapping("/Comment")
	public String managerComment(
			Model model
			,@RequestParam(value="cp", required=false, defaultValue="1") int cp
			, @RequestParam Map<String, Object> paramMap
			) {
		if(paramMap.get("key") == null) {
		
		Map<String, Object> CommentList = service.selectCommentList(cp);
		
		model.addAttribute("CommentList",CommentList);
		
		}else {
			
		Map<String, Object> CommentList = service.selectCommentList(paramMap, cp);
		
		model.addAttribute("CommentList",CommentList);
		
		}
		
		return "manager/managerComment";
	}
	
	//댓글 삭제
	@PostMapping("/commentdel")
	public String CommentDel(
			@RequestParam(name = "choicebox", required = false) String[] choicebox) {
	
		for(int i=0; i<choicebox.length;i++) {
			
			 int commentNo = Integer.parseInt(choicebox[i]);
			 int result = service.commentdel(commentNo);
			}
		
		return "redirect:/manager/Comment";
	}
	
	//댓글 복구
	@PostMapping("/commentrestore")
	public String CommentRe(
			@RequestParam(name = "choicebox", required = false) String[] choicebox) {
		
		for(int i=0; i<choicebox.length;i++) {
			
			 int commentNo = Integer.parseInt(choicebox[i]);
			 int result = service.commentRe(commentNo);
			}
		
		return "redirect:/manager/Comment";
	}
	
	//1:1문의
	@GetMapping("/1To1inquiry")
	public String manager1To1inquiry(
			Model model
			,@RequestParam(value="cp", required=false, defaultValue="1") int cp
			, @RequestParam Map<String, Object> paramMap
			) {
		
		if(paramMap.get("key") == null) {
		
			Map<String, Object> InquiryList = service.selectInquiryList(cp);
		
			model.addAttribute("InquiryList",InquiryList);
		
		}else {
			
			Map<String, Object> InquiryList = service.selectInquiryList(paramMap, cp);
			
			model.addAttribute("InquiryList",InquiryList);
			
		}
		
		return "manager/manager1To1Inquiry";
	}
	//신고함
	@GetMapping("/Report")
	public String manager1To1Content(
			Model model
			,@RequestParam(value="cp", required=false, defaultValue="1") int cp
			, @RequestParam Map<String, Object> paramMap
			) {
		
		if(paramMap.get("key") == null) {
		
			Map<String, Object> declarationList = service.selectDeclarationList(cp);
		
			model.addAttribute("DeclarationList",declarationList);
		
		}else {
			
			Map<String, Object> declarationList = service.selectDeclarationList(cp,paramMap);
			
			model.addAttribute("DeclarationList",declarationList);
			
		}
		
		return "manager/managerReport";
	}
	
}
