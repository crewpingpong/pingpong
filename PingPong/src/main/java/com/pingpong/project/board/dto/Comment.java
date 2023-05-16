package com.pingpong.project.board.dto;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class Comment {

	private int commentNo;
	private int boardNo;
	private String commentContent;
	private String memberUrl;
	private String commentDelFl;
}
