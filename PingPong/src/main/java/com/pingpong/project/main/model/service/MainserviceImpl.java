package com.pingpong.project.main.model.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pingpong.project.board.model.dto.Board;
import com.pingpong.project.main.dao.MainDAO;

@Service
public class MainserviceImpl implements MainService{

	@Autowired
	private MainDAO dao;
	
	// 화면에 넣어줄 게시글 가져오기
	@Override
	public List<Board> selectBoardAll() {
		return dao.selectBoardAll();
	}

	// 슬라이드에 넣어줄 게시글 가져오기 (좋아요 많은 순)
	@Override
	public List<Board> selectMainList() {
		return dao.selectMainList();
	}
	
	
	
	
}
