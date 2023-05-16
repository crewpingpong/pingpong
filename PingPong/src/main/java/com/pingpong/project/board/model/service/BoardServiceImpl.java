package com.pingpong.project.board.model.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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

}
