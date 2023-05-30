package com.kh.test.board.model.dao;

import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.kh.test.board.model.vo.Board;

@Repository
public class BoardDAO {

	@Autowired
	private SqlSessionTemplate sqlSession;
	
	public List<Board> searchBoardList(String title) {
		return sqlSession.selectList("boardMapper.searchBoardList",title);
	}

}
