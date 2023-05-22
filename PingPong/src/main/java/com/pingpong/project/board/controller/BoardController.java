package com.pingpong.project.board.controller;


import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.pingpong.project.board.model.dto.Board;
import com.pingpong.project.board.model.dto.Hashtag;
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
    
    // 북마크 처리
    @PostMapping("/board/markup")
    public int boardMarkup(@RequestBody Map<String, Integer> paramMap) {
    	System.out.println(paramMap.get("check"));
    	return service.boardMarkup(paramMap);
    }
    
    //댓글 달기
    @PostMapping("/board/comment")
    public int commentInsert(@RequestBody Map<String, Object> paramMap) {
    	
    	return service.commentInsert(paramMap);
    }
    
    // 게시글 수정
    @PostMapping("/board/editing")
    public int boardEditing(@RequestBody Map<String, Object> paramMap) {
    	
    	return service.boardEditing(paramMap);
    }
    
    // 해시태그 조회
    @PostMapping("/board/hashtag")
    public List<Hashtag> getHashtags(@RequestBody Map<String, String> hashtags) {
    	System.out.println(hashtags);
    	return service.getHashtags(hashtags);
    }

   
}
