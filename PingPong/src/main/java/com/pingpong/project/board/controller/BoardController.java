package com.pingpong.project.board.controller;


import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.pingpong.project.board.model.dto.Board;
import com.pingpong.project.board.model.service.BoardService;

@RestController
@Controller
public class BoardController {
	
	@Autowired
	private BoardService service;
	
	// 게시글 조회
	@ResponseBody
	@GetMapping(value="/boardDetail", produces="application/json; charset=UTF-8")
	public Board select(int boardNo) {
		return service.select(boardNo);
	}
	
    // 좋아요 처리
    @PostMapping("/board/like")
    public int like(@RequestBody Map<String, Integer> paramMap) {
        return service.like(paramMap);
    }
}
