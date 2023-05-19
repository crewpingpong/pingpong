package com.pingpong.project.mypage.model.dto;

import java.util.List;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class MyPage {
	private int memberNo;
	private String memberNickname;
	private String profileImage;
	private String backgroundImage;
	private String memberInfo;
	private String memberCareer;
	private String oneLiner;
	
	private List<Tech> techList;
	private List<Career> careerList;
	
}
