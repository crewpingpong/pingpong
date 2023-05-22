package com.pingpong.project.message.model.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

/*
 * 	"NOTICE_NO"	NUMBER		NOT NULL,
	"NOTICE_COMENT"	VARCHAR2(1000)		NOT NULL,
	"ELAPSED_TIME"	DATE	DEFAULT SYSDATE	NOT NULL,
	"MEMBER_NO"	NUMBER		NULL
 * */

@NoArgsConstructor
@Getter
@Setter
@ToString
public class Notice {
	private int noticeNo; // 알림 번호
	private String noticeContent; // 알림 내용
	private String elapsedDate; // 받은 시간
	private int memberNo; // 받은 회원
	
	private int sendNo; // 보낸 회원 번호
	private String sendName; // 보낸 회원 닉네임
	private String sendProfile; // 보낸 회원 이미지
	private String messageContent; // 보낸 메세지 내용
	private int type; // 타입
	
	private int boardNo; // 알림 받은 게시글 번호 (좋아요/댓글)
//	private int follow; // 팔로우 했을 경우만
	
}
