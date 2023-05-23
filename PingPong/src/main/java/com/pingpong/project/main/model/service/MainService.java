package com.pingpong.project.main.model.service;

import java.util.List;

import com.pingpong.project.board.model.dto.Board;

public interface MainService {

	/** 화면에 넣어줄 게시글 가져오기
	 * @return
	 */
	List<Board> selectBoardAll();

}
