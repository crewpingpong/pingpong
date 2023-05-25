package com.pingpong.project.mypage.model.dto;

import java.util.List;

import com.pingpong.project.board.model.dto.BoardImage;
import com.pingpong.project.board.model.dto.Comment;
import com.pingpong.project.board.model.dto.Like;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@NoArgsConstructor
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
	private String memberCertificate;
	private String oneLiner;
	
	private String memberUrl;
	private String techImg;
	private String snsImg;
	private String snsAddress;
	
	private List<Tech> techList;
	private List<Interests> interestList;
	private List<SNS> snsList;

}
