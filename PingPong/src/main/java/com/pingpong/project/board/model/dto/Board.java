package com.pingpong.project.board.model.dto;

import java.util.List;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class Board {

	private int boardNo;
	private String boardContent;
	private String boardDate;
	private String boardDelFl;
	private int boardCount;
	private String thumbnail;
	
	// member join
	private int memberNo;
	private int authority;
	private String memberUrl;

	private List<BoardImage> imageList;
	
	private List<Comment> commentList;
}
