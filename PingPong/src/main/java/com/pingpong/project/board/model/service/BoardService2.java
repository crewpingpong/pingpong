package com.pingpong.project.board.model.service;

import java.io.IOException;
import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import com.pingpong.project.board.model.dto.Board;

public interface BoardService2 {

	/** 게시글 삽입 서비스
	 * @param board
	 * @param images
	 * @param webPath
	 * @param filePath
	 * @return result
	 */
	int boardInsert(Board board, List<MultipartFile> images, String webPath, String filePath) throws IllegalStateException, IOException;

}
