package com.pingpong.project.board.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.SessionAttributes;

import com.pingpong.project.board.model.dto.Board;
import com.pingpong.project.board.model.service.BoardService;

@SessionAttributes({"loginMember"})
@RestController
@Controller
public class BoardController {
	
	@Autowired
	private BoardService service;
	
	@ResponseBody
	@GetMapping(value="/boardDetail", produces="application/json; charset=UTF-8")
	public Board select(int boardNo) {
		System.out.println("여기로 왔나?");
		return service.select(boardNo);
	}

}
