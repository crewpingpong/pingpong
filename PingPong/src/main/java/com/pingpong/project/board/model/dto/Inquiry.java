package com.pingpong.project.board.model.dto;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class Inquiry {

	private int inquiryNo;
	private String memberUrl;
	private String inquiryContent;
	private String memberEmail;
	
}
