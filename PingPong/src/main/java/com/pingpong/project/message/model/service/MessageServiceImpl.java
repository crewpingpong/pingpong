package com.pingpong.project.message.model.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pingpong.project.message.dao.MessageDAO;

@Service
public class MessageServiceImpl implements MessageService{
	
	@Autowired
	private MessageDAO dao;
}
