package com.pingpong.project.board.model.dto;

import java.util.List;

import com.pingpong.project.qna.model.dto.InquiryImage;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class Inquiry {

	private int inquiryNo;
	private String inquiryEmail;
	private String memberUrl;
	private String inquiryContent;
	private String memberEmail;
	private int memberNo;
	
	private List<InquiryImage> imageList;
}
