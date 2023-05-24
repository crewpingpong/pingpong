package com.pingpong.project.qna.model.service;

import java.io.IOException;
import java.util.List;

import org.springframework.web.multipart.MultipartFile;

import com.pingpong.project.board.model.dto.Inquiry;

public interface InquiryService {

	/** 1:1 문의 등록
	 * @param inquiry
	 * @param images
	 * @param webPath
	 * @param filePath
	 * @return inquiryNo
	 * @throws IOException 
	 * @throws IllegalStateException 
	 */
	int inquiryInsert(Inquiry inquiry, List<MultipartFile> images, String webPath, String filePath) throws IllegalStateException, IOException;

}
