package com.pingpong.project.message.model.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.pingpong.project.common.utility.Util;
import com.pingpong.project.message.dao.MessageDAO;
import com.pingpong.project.message.model.dto.Message;

@Service
public class MessageServiceImpl implements MessageService{
	
	@Autowired
	private MessageDAO dao;

	// 받은 메세지 조회
	@Override
	public List<Message> messageList(int memberNo) {
		return dao.messageList(memberNo);
	}

	// 보낸 메세지 조회
	@Override
	public List<Message> sendmessageList(int memberNo) {
		return dao.sendmessageList(memberNo);
	}

	// 답장 보내기
	@Transactional(rollbackFor = Exception.class)
	@Override
	public int resendMessage(Message message) {
		message.setMessageContent(Util.XSSHandling(message.getMessageContent()));
		return dao.resendMessage(message);
	}

	// 보낸 메세지 삭제
	@Override
	public int delmessage(int delNo) {
		return dao.delmessage(delNo);
	}
	
	// 받은 메세지 삭제
	@Override
	public int delSendmessage(int delNo) {
		return dao.delSendmessage(delNo);
	}

	// 메세지 보내기
	@Transactional(rollbackFor = Exception.class)
	@Override
	public int sendMessage(Message message) {
		return dao.sendMessage(message);
	}
	
}
