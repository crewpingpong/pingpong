package com.kh.test.board.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

import com.kh.test.board.model.service.BoardService;
import com.kh.test.board.model.vo.Board;

@Controller
public class BoardController {
	@Autowired
	private BoardService service;

	@GetMapping("selectBoard")
	public String searchBoardList(
			String title
			, Model model){
		
		List<Board> boardList = service.searchBoardList(title);
		
		model.addAttribute("boardList",boardList);
		
		String path;		
		
		if(boardList.isEmpty()) {
			path = "searchFail";			
		} else {
			path = "searchSuccess";
		}
		
		return path;
	}
	
}
