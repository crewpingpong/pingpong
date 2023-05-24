package com.pingpong.project.board.model.service;


import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.pingpong.project.board.model.dao.BoardDAO;
import com.pingpong.project.board.model.dto.Board;
import com.pingpong.project.board.model.dto.Comment;
import com.pingpong.project.board.model.dto.Hashtag;

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
    public int like(Map<String, Integer> paramMap) {
        int result = 0;
        if(paramMap.get("check") == 0) {
            result = dao.insertBoardLike(paramMap);
        } else {
            result = dao.deleteBoardLike(paramMap);
        }
        
        if(result == 0) return -1;
        
        int count = dao.countBoardLike(paramMap.get("boardNo"));
        return count;
    }

    // 북마크 테이블 삽입/삭제
	@Override
	public int boardMarkup(Map<String, Integer> paramMap) {
		int result = 0;
        if(paramMap.get("check") == 0) {
            result = dao.insertBoardMarkup(paramMap);
            System.out.println("테이블 삽입");
        } else {
            result = dao.deleteBoardMarkup(paramMap);
            System.out.println("테이블 삭제");
        }
        return result;
	}

	// 댓글 테이블 삽입
	@Override
	public Comment commentInsert(Comment comment) {
		return dao.commentInsert(comment); 
	}
	
	// 게시글 수정
	@Override
	public int boardEditing(Map<String, Object> paramMap) {
		return dao.boardEditing(paramMap);
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
	

	
}
