package com.pingpong.project.board.model.dao;

import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.pingpong.project.board.model.dto.Board;
import com.pingpong.project.board.model.dto.BoardImage;
import com.pingpong.project.board.model.dto.Hashtag;

@Repository
public class BoardDAO2 {

	@Autowired
	private SqlSessionTemplate sqlSession;

	/** 게시글 삽입
	 * @param board
	 * @return result
	 */
	public int boardInsert(Board board) {
		
		int result = sqlSession.insert("boardMapper.boardInsert", board);
		
		if(result>0) result = board.getBoardNo();
		
		return result; 
	}

	/** 게시글 사진 여러개 삽입
	 * @param uploadList
	 * @return result
	 */
	public int insertImageList(List<BoardImage> uploadList) {
		return sqlSession.insert("boardMapper.insertImageList", uploadList);
	}

	/** 해시태그 여러개 삽입
	 * @param board
	 */
	public void hashInsert(List<Hashtag> hashtags) {
		int result = sqlSession.insert("boardMapper.hashInsert", hashtags);
		int result1 = sqlSession.insert("boardMapper.hashBoardInsert", hashtags);
	}
}
