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
		
		board.setBoardContent(Util.XSSHandling(board.getBoardContent()));
		
		int boardNo = dao.boardInsert(board);
		
		
		if(boardNo > 0) {
			
			
			List<BoardImage> uploadList = new ArrayList<BoardImage>();
			
			for(int i=0;i<images.size();i++) {
				
				if(images.get(i).getSize()>0) {
					
					BoardImage img = new BoardImage();
					
					img.setImgOrder(i+1);
					img.setBoardNo(boardNo);
					
					String fileName = images.get(i).getOriginalFilename(); 
					
					String rename = Util.fileRename(fileName);
					
					img.setImgAddress(webPath + rename);
					
					images.get(i).transferTo(new File(filePath + rename));
					
					uploadList.add(img);
					
					System.out.println(img);
					System.out.println(uploadList);
				}
			}
			
			if(!uploadList.isEmpty()) {
				
				int result = dao.insertImageList(uploadList);
				
				System.out.println(result);
				
				if(result != uploadList.size()) {
					
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
