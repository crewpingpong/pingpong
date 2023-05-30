package com.pingpong.project.board.model.service;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import com.pingpong.project.board.model.dao.BoardDAO2;
import com.pingpong.project.board.model.dto.Board;
import com.pingpong.project.board.model.dto.BoardImage;
import com.pingpong.project.board.model.dto.Declaration;
import com.pingpong.project.board.model.dto.Hashtag;
import com.pingpong.project.common.utility.Util;
import com.pingpong.project.mypage.model.exception.FileUploadException;

@Service
public class BoardServiceImpl2 implements BoardService2 {

	@Autowired
	private BoardDAO2 dao;

	// 게시글 삽입
	@Transactional(rollbackFor = Exception.class)
	@Override
	public int boardInsert(Board board, List<MultipartFile> images, String webPath, String filePath) throws IllegalStateException, IOException {
		// 게시글 XSS 방지 처리
		board.setBoardContent(Util.XSSHandling(board.getBoardContent()));
		
		int boardNo = dao.boardInsert(board);  // DB에 게시글 내용 INSERT 요청
		
		
		if(boardNo > 0) {  // 게시글 삽입 성공 시	
			
			List<BoardImage> uploadList = new ArrayList<BoardImage>();  // 게시글 이미지 배열 생성
			
			for(int i=0;i<images.size();i++) {
				
				if(images.get(i).getSize()>0) {
					
					BoardImage img = new BoardImage();  // 게시글 이미지 객체 생성
					
					img.setImgOrder(i+1);  // 이미지 순서 주기
					img.setBoardNo(boardNo);
					
					String fileName = images.get(i).getOriginalFilename(); 
					
					String rename = Util.fileRename(fileName);  // 이미지 이름 변경
					
					img.setImgAddress(webPath + rename);
					
					images.get(i).transferTo(new File(filePath + rename));  // 이미지 저장
					
					uploadList.add(img);
					
				}
			}
			
			if(!uploadList.isEmpty()) {  // 이미지 배열이 비어있지 않다면
				
				int result = dao.insertImageList(uploadList);  // 게시글 이미지 DB에 INSERT 요청
				
				if(result != uploadList.size()) {  // 이미지 수와 결과 수가 같지 않으면 예외 처리
					
					throw new FileUploadException();
					
				}
				
			}
			
		}
		
		return boardNo;
	}


	// 해시태그 삽입
	@Transactional(rollbackFor = Exception.class)
	@Override
	public void hashInsert(List<Hashtag> hashtags) {
		dao.hashInsert(hashtags);
		
	}

	@Transactional(rollbackFor = Exception.class)
	@Override
	public int deleteBoard(String boardNo) {
		return dao.deleteBoard(boardNo);
	}
	
	// 게시글 신고 삽입
	@Override
	public int insertreport(Declaration declaration) {
		return dao.insertreport(declaration);
	}
	
	
	
}
