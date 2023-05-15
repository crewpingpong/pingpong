package com.pingpong.project.mypage.model.dto;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class MyPage {
	int memberNo;
	String profileImage;
	String backgroundImage;
	String memberInfo;
	String memberCareer;
	String memberTech;
	int certificateNo;
	
}
