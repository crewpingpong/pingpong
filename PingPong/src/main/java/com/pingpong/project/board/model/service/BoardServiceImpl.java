package com.pingpong.project.board.model.service;


import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.pingpong.project.board.model.dao.BoardDAO;
import com.pingpong.project.board.model.dto.Board;

@Service
public class BoardServiceImpl implements BoardService{
	
	@Autowired
	private BoardDAO dao;
	
	// 게시글 상세 조회 (AJAX)
	@Override
	public Board select(int boardNo) {
		System.out.println("여기는?");
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

	@Override
	public int boardMarkup(Map<String, Integer> paramMap) {
		int result = 0;
        if(paramMap.get("check") == 0) {
            result = dao.insertBoardMarkup(paramMap);
        } else {
            result = dao.deleteBoardMarkup(paramMap);
        }
        
        return result;
	}
}
