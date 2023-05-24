package com.pingpong.project.qna.model.dao;

import java.util.List;

import org.mybatis.spring.SqlSessionTemplate;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import com.pingpong.project.board.model.dto.Inquiry;
import com.pingpong.project.qna.model.dto.InquiryImage;

@Repository
public class InquiryDAO {

	@Autowired
	private SqlSessionTemplate sqlSession;

	/** 1:1 문의 등록
	 * @param inquiry
	 * @return inquiryNo
	 */
	public int inquiryInsert(Inquiry inquiry) {
		
		int result = sqlSession.insert("inquiryMapper.inquiryInsert",inquiry);
		
		if(result>0) result = inquiry.getInquiryNo();
		
		return result;
	}

	/** 이미지 리스트(여러개) 삽입
	 * @param uploadList
	 * @return
	 */
	public int insertImageList(List<InquiryImage> uploadList) {
		return sqlSession.insert("inquiryMapper.insertImageList",uploadList);
	}
}
