package com.pingpong.project.board.model.service;


import java.util.Map;

import com.pingpong.project.board.model.dto.Board;


public interface BoardService {

	/** 게시글 상세 조회
	 * @param boardCode
	 * @return board
	 */
//	Board selectBoard(int boardCode);

	/** 좋아요 여부 확인
	 * @param map
	 * @return result
	 */
//	int boardLikeCheck(Map<String, Object> map);

	/** 게시글 상세 조회 (AJAX)
	 * @param boardNo
	 * @return board
	 */
	Board select(int boardNo);
	
    /** 좋아요 처리 서비스 (AJAX)
     * @param paramMap
     * @return count
     */
    int like(Map<String, Integer> paramMap);

	/** 북마크 처리 서비스 (AJAX)
	 * @param paramMap
	 * @return count
	 */
    int boardMarkup(Map<String, Integer> paramMap);

}
