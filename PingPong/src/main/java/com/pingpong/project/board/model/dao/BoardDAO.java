package com.pingpong.project.board.model.dao;


import java.util.Map;

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
	
    /** 좋아요 테이블 삽입
     * @param paramMap
     * @return result
     */
    public int insertBoardLike(Map<String, Integer> paramMap) {
        return sqlSession.insert("boardMapper.insertBoardLike", paramMap);
    }

    /** 좋아요 테이블 삭제
     * @param paramMap
     * @return result
     */
    public int deleteBoardLike(Map<String, Integer> paramMap) {
        return sqlSession.delete("boardMapper.deleteBoardLike", paramMap);
    }

    /** 좋아요 개수 조회
     * @param integer
     * @return count
     */
    public int countBoardLike(Integer boardNo) {
        return sqlSession.selectOne("boardMapper.countBoardLike", boardNo);
    }

	/** 북마크 테이블 삽입
	 * @param paramMap
	 * @return result
	 */
	public int insertBoardMarkup(Map<String, Integer> paramMap) {
		return sqlSession.insert("boardMapper.insertBoardMarkup", paramMap);
	}

	/** 북마크 테이블 삭제
	 * @param paramMap
	 * @return result
	 */
	public int deleteBoardMarkup(Map<String, Integer> paramMap) {
		return sqlSession.delete("boardMapper.deleteBoardMarkup", paramMap);
	}
	

}
