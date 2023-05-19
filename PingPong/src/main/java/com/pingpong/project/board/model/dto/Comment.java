package com.pingpong.project.board.model.dto;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class Comment {

	private int commentNo;

	private String commentContent;
	private String commentDate;
	private int memberNo;
	private int boardNo;

	private String memberUrl;
	private String commentDelFl;


	private String memberNickname;
	private String profileImg;
	private int parentNo;
	private String childCheck;

}
