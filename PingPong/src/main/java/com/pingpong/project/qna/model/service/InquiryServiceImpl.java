package com.pingpong.project.qna.model.service;

import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import com.pingpong.project.board.model.dto.Inquiry;
import com.pingpong.project.common.utility.Util;
import com.pingpong.project.mypage.model.exception.FileUploadException;
import com.pingpong.project.qna.model.dao.InquiryDAO;
import com.pingpong.project.qna.model.dto.InquiryImage;

@Service
public class InquiryServiceImpl implements InquiryService {

	@Autowired
	private InquiryDAO dao;
	
	// 1:1 문의 등록
	@Transactional(rollbackFor = Exception.class)
	@Override
	public int inquiryInsert(Inquiry inquiry, List<MultipartFile> images, String webPath, String filePath)throws IllegalStateException, IOException {
		
		//XSS 방지 처리
		inquiry.setInquiryContent(Util.XSSHandling(inquiry.getInquiryContent()));
		
		inquiry.setMemberEmail(Util.XSSHandling(inquiry.getInquiryEmail()));
		
		// 1. INQUIRY 테이블 INSERT 하기
				// -> inquiryNo (시퀀스로 생성한 번호) 반환 받기
		int inquiryNo = dao.inquiryInsert(inquiry);
		
		//    게시글 삽입 성공 시
		//	  업로드된 이미지가 있다면 INQUIRY_IMG 테이블에 삽입하는 DAO 호출
		
		if(inquiryNo>0) { // 게시글 삽입 성공시
			
			// List<MultipartFile> images
			// -> 단, 업로드된 파일이 없어도 MultipartFile 객체는 존재
			
			// 실제 업로드된 파일의 정보를 기록할 List
			List<InquiryImage> uploadList = new ArrayList<InquiryImage>();
			
			// images에 담겨있는 파일 중 실제 업로드된 파일만 분류
			for(int i=0; i<images.size(); i++) {
				
				if(images.get(i).getSize() >0) {
						
				InquiryImage img = new InquiryImage();
				
				// img에 파일 정보를 담아서 uploadList에 추가
				img.setInquiryNo(inquiryNo); //게시글 번호
				img.setImageOrder(i); // 이미지 순서
				
				
				String fileName = images.get(i).getOriginalFilename();// 파일 원본명
				
				String rename = Util.fileRename(fileName);
				
				img.setImageAddress(webPath+rename);
				
				images.get(i).transferTo(new File(filePath + rename)); // 이미지 경로 파일로 생성
				
				uploadList.add(img);
				
				}
			}// 분류 for 문 종료
		
		
		// 분류 작업 후 uploadList가 비어 있는 경우
		// == 업로드한 파일이 있다
		if(!uploadList.isEmpty()) {
			
			// INQUIRY_IMG 테이블에 INSERT하는 DAO 호출
			int result = dao.insertImageList(uploadList);
			
				if(result != uploadList.size()) {
					throw new FileUploadException();// 예외 강제 발생 
			}
		}
	}
		return inquiryNo;

}

}