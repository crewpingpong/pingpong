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
import com.pingpong.project.board.model.dto.Comment;
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
    public Comment commentInsert(@RequestBody Map<String, Object> paramMap) {
    	Comment comment = new Comment();
    	comment.setCommentContent((String)paramMap.get("commentContent"));
    	comment.setMemberNo((Integer)paramMap.get("memberNo"));
    	comment.setBoardNo((Integer)paramMap.get("boardNo"));
    	comment.setParentNo(((Integer)paramMap.get("parentNo")).intValue());
    	System.out.println(comment);
    	return service.commentInsert(comment);
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

    // 댓글 삭제
    @PostMapping("/board/deleteComment")
    public int commentDelete(@RequestBody String commentNo1) {
    	int commentNo = Integer.parseInt(commentNo1);
    	return service.commentDelete(commentNo);
    }
    
    // 댓댓글 삭제
    @PostMapping("/board/deleteChildComment")
    public int childCommentDelete(@RequestBody String commentNo1) {
    	
    	System.out.println(commentNo1);
    	
    	int commentNo = Integer.parseInt(commentNo1);
    	return service.childCommentDelete(commentNo);
    }
   
}
