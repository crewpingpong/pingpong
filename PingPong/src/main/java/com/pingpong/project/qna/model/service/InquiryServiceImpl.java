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
		
		inquiry.setInquiryContent(Util.XSSHandling(inquiry.getInquiryContent()));
		
		inquiry.setMemberEmail(Util.XSSHandling(inquiry.getInquiryEmail()));
		
		int inquiryNo = dao.inquiryInsert(inquiry);
		
		if(inquiryNo>0) {
			
			List<InquiryImage> uploadList = new ArrayList<InquiryImage>();
			
			for(int i=0; i<images.size(); i++) {
				
				if(images.get(i).getSize() >0) {
					
				InquiryImage img = new InquiryImage();
				
				img.setImagePath(webPath); // 웹 접근 경로
				img.setInquiryNo(inquiryNo); //게시글 번호
				img.setImageOrder(i); // 이미지 순서
				
				String fileName = images.get(i).getOriginalFilename();
				
				img.setImageOriginal(fileName);
				
				img.setImageReName(Util.fileRename(fileName));
				
				uploadList.add(img);
				
				}
			}// 분류 for 문 종료
		
		
		if(!uploadList.isEmpty()) {
			
			int result = dao.insertImageList(uploadList);
			
			if(result == uploadList.size()) {
				
				for(int i=0; i< uploadList.size(); i++) {
					
					int index = uploadList.get(i).getImageOrder();
					
					String rename = uploadList.get(i).getImageReName();
					
					images.get(index).transferTo(new File(filePath+rename));
				}
			}else {
				throw new FileUploadException();
			}
		}
		
	}
		return inquiryNo;

}

}