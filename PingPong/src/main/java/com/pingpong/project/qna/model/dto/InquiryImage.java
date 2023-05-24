package com.pingpong.project.qna.model.dto;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class InquiryImage {

	private int imageNo;
	private int imageOrder;
	private String imageAddress;
	private int inquiryNo;
	private String imagePath;
	private String imageReName;
	private String imageOriginal;
}
