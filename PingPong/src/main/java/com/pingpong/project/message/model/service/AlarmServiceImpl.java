package com.pingpong.project.message.model.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.pingpong.project.message.dao.AlarmDAO;

@Service
public class AlarmServiceImpl implements AlarmService{

	@Autowired
	private AlarmDAO dao;
}
