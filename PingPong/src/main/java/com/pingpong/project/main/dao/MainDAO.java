package com.pingpong.project.main.dao;

import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.pingpong.project.board.model.dto.Board;

@Repository
public class MainDAO {

	@Autowired
	private SqlSessionTemplate sqlSession;
	
	
	/** 화면에 넣어줄 게시글 가져오기
	 * @return
	 */
	public List<Board> selectBoardAll() {
		return sqlSession.selectList("boardMapper.selectBoardAll");
	}
	
	
	
}
