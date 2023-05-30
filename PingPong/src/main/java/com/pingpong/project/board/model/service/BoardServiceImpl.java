package com.pingpong.project.board.model.service;


import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.pingpong.project.board.model.dao.BoardDAO;
import com.pingpong.project.board.model.dto.Board;
import com.pingpong.project.board.model.dto.Comment;
import com.pingpong.project.board.model.dto.Declaration;
import com.pingpong.project.board.model.dto.Hashtag;
import com.pingpong.project.common.utility.Util;

@Service
public class BoardServiceImpl implements BoardService{
	
	@Autowired
	private BoardDAO dao;
	
	// 게시글 상세 조회 (AJAX)
	@Override
	public Board select(int boardNo) {
		return dao.select(boardNo);
	}
	
    // 좋아요 처리 서비스
    @Transactional(rollbackFor = Exception.class)
    @Override
    public Board like(Map<String, Integer> paramMap) {
        int result = 0;
        if(paramMap.get("check") == 0) {  // 좋아요를 하지 않았다면
            result = dao.insertBoardLike(paramMap);  // INSERT 요청
        } else {  // 좋아요를 했다면
            result = dao.deleteBoardLike(paramMap);  // DELETE 요청
        }
        
        if(result == 0) return null;
        Board board = dao.select(paramMap.get("boardNo"));
        return board;
    }

    // 북마크 테이블 삽입/삭제
	@Override
	public Board boardMarkup(Map<String, Integer> paramMap) {
		int result = 0;
        if(paramMap.get("check") == 0) {  // 북마크를 하지 않았다면
            result = dao.insertBoardMarkup(paramMap);  // INSERT 요청
        } else {  // 북마크를 했다면
            result = dao.deleteBoardMarkup(paramMap);  // DELETE 요청
        }
        
        if(result == 0) return null;
        Board board = dao.select(paramMap.get("boardNo"));
        
        return board;
	}

	// 댓글 테이블 삽입
	@Override
	public Comment commentInsert(Comment comment) {
		return dao.commentInsert(comment); 
	}
	
	// 게시글 수정
	@Override
	public Board boardEditing(Map<String, Object> paramMap) {
		// 수정 게시글 XSS 방지 처리
		String newContent = Util.XSSHandling((String)paramMap.get("boardContent"));
		paramMap.put("boardContent", newContent);
		
		int result = dao.boardEditing(paramMap);
		Board board = null;
		if(result>0) {
			board = dao.select((Integer)paramMap.get("boardNo"));
		}
		
		return board;
	}

	// 댓글 삭제
	@Override
	public int commentDelete(int commentNo) {
		return dao.commentDelete(commentNo);
	}

	// 댓댓글 삭제
	@Override
	public int childCommentDelete(int commentNo) {
		return dao.childCommentDelete(commentNo);
	}

	// 해시태그 리스트 반환
	@Override
	public List<Hashtag> getHashtags(String hashtagName) {
		return dao.getHashtags(hashtagName);
	}

	// 해시태그 삭제
	@Override
	public int deleteHash(Map<String, Object> paramMap) {
		return dao.deleteHash(paramMap);
	}


	
}
