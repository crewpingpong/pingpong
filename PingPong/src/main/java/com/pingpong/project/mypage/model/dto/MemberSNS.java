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
public class MemberSNS {
	
	private int memberSnsNo;
	private int memberNo;
	private int SNSNo;

}
