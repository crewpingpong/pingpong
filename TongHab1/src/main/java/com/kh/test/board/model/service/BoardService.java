package com.kh.test.board.model.service;

import java.util.List;

import com.kh.test.board.model.vo.Board;

public interface BoardService {

	List<Board> searchBoardList(String title);

}
