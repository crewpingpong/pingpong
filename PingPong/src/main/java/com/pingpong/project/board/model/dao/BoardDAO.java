package com.pingpong.project.board.model.dao;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.pingpong.project.board.model.dto.Board;

@Repository
public class BoardDAO {
	
	@Autowired
	private SqlSessionTemplate sqlSession;
	
	/** 게시글 상세 조회 (AJAX)
	 * @param boardNo
	 * @return board
	 */
	public Board select(int boardNo) {
		return sqlSession.selectOne("boardMapper.selectBoard", boardNo);
	}

}
