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
	private int type; // 타입
	
	private int boardNo;
	
}
