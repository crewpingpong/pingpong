package com.pingpong.project.message.model.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

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
	
	
}
