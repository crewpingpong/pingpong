package com.pingpong.project.message.model.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

/*
 * 	"MESSAGE_NO"	NUMBER		NOT NULL,
	"MESSAGE_CONTENT"	VARCHAR2(3000)		NOT NULL,
	"SEND_DATE"	DATE	DEFAULT SYSDATE	NOT NULL,
	"SEND_MEMBER"	NUMBER		NOT NULL,
	"RECEIVED_MEMBER"	NUMBER		NOT NULL
 * 
 * */

@NoArgsConstructor
@Getter
@Setter
@ToString
public class Message {
	private int messageNo; // 메세지 번호
	private String messageContent; // 메세지 내용
	private String sendDate; // 메세지 보낸 날짜
	private int sendMember; // 보낸 회원
	private int receivedMember; // 받은 회원
}
