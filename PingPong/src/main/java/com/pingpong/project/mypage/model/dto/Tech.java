package com.pingpong.project.mypage.model.dto;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class Tech {

	private int techNo;
	private String techName;
	private String techImg;
	
	private int memberNo; 
}
