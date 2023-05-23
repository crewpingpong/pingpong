package com.pingpong.project.main.model.service;

import java.util.List;

import com.pingpong.project.board.model.dto.Board;

public interface MainService {

	/** 화면에 넣어줄 게시글 가져오기
	 * @return
	 */
	List<Board> selectBoardAll();

	/** 슬라이드에 넣어줄 게시글 가져오기 (좋아요 많은 순)
	 * @return
	 */
	List<Board> selectMainList();

}
