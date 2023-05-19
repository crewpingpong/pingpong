package com.pingpong.project.board.controller;

import java.io.IOException;
import java.util.List;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.SessionAttribute;
import org.springframework.web.bind.annotation.SessionAttributes;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.pingpong.project.board.model.dto.Board;
import com.pingpong.project.board.model.service.BoardService2;
import com.pingpong.project.member.model.dto.Member;

@SessionAttributes({"loginMember", "mypage"})
@RequestMapping("/board2")
@Controller
public class BoardController2 {

	@Autowired
	private BoardService2 service;
	
	
	@PostMapping("/boardInsert")
	public String boardInsert(
			@SessionAttribute("loginMember") Member loginMember
			, Board board
			, @RequestParam(value="images", required=false) List<MultipartFile> images
			, RedirectAttributes ra
			, HttpSession session
			) throws IllegalStateException, IOException{
		
		board.setMemberNo(loginMember.getMemberNo());
		
		String webPath = "/resources/images/boardImage/";  // 저장경로
		
		String filePath = session.getServletContext().getRealPath(webPath);
		
    	int boardNo = service.boardInsert(board, images, webPath, filePath);
    	
    	String message = null;
    	if(boardNo > 0) {
    		message = "게시글이 등록 되었습니다";
    	} else {
    		message = "게시글이 등록에 실패하였습니다";
    	}

    	ra.addFlashAttribute("message", message);
		return "redirect:/mypage/" + loginMember.getMemberNo();
	}
	
}
