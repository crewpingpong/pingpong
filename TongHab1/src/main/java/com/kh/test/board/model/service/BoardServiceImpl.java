package com.kh.test.board.model.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.kh.test.board.model.dao.BoardDAO;
import com.kh.test.board.model.vo.Board;

@Service
public class BoardServiceImpl implements BoardService{
	@Autowired
	private BoardDAO dao;
	
	@Override
	public List<Board> searchBoardList(String title) {
		return dao.searchBoardList(title);
	}

	
}
