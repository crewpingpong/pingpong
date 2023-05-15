package com.pingpong.project.board.dto;

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
	
	// member join
	private int memberNo;
	private int authority;
	private String memberUrl;

}
