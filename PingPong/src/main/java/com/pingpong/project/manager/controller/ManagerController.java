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
	
	//가입 회원 + 회원 목록 조회
	@GetMapping("/")
	public String managerPage(
			Model model
			) {
		Map<String, Object> map = service.selectMemberList();
		
		model.addAttribute("map",map);
		
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
			) {
		Map<String, Object> SecessionList = service.selectSessionList();
		
		model.addAttribute("SecessionList",SecessionList);
		
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
			) {
		List<Board> boardList = service.selectBoardList();
		
		model.addAttribute("boardList",boardList);
		

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
			) {
		List<Comment> CommentList = service.selectCommentList();
		
		model.addAttribute("CommentList",CommentList);
		
		return "manager/managerComment";
	}
	//1:1문의
	@GetMapping("/1To1inquiry")
	public String manager1To1inquiry(
			Model model
			) {
		
		List<Inquiry> InquiryList = service.selectInquiryList();
		
		model.addAttribute("InquiryList",InquiryList);
		
		
		return "manager/manager1To1Inquiry";
	}
	//신고함
	@GetMapping("/Report")
	public String manager1To1Content(
			Model model
			) {
		List<Declaration> declarationList = service.selectDeclarationList();
		
		model.addAttribute("DeclarationList",declarationList);
		
		return "manager/managerReport";
	}
	
}
