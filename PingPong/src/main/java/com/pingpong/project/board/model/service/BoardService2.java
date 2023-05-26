package com.pingpong.project.board.model.service;

import java.io.IOException;
import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import com.pingpong.project.board.model.dto.Board;
import com.pingpong.project.board.model.dto.Declaration;
import com.pingpong.project.board.model.dto.Hashtag;

public interface BoardService2 {

	/** 게시글 삽입 서비스
	 * @param board
	 * @param images
	 * @param webPath
	 * @param filePath
	 * @return result
	 */
	int boardInsert(Board board, List<MultipartFile> images, String webPath, String filePath) throws IllegalStateException, IOException;

	/** 해시태그 삽입 서비스
	 * @param board
	 */
	void hashInsert(List<Hashtag> hashtags);

	/** 게시글 삭제 서비스
	 * @param boardNo
	 * @return result
	 */
	int deleteBoard(String boardNo);

	/** 게시글 신고 삽입
	 * @param declaration
	 * @return
	 */
	int insertreport(Declaration declaration);


}
