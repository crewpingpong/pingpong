package com.pingpong.project.message.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.SessionAttributes;

import com.pingpong.project.message.model.dto.Notice;
import com.pingpong.project.message.model.service.AlarmService;

@SessionAttributes({"loginMember"})
@RequestMapping("/alarm")
@Controller
public class AlarmController {
	
	@Autowired
	private AlarmService service;
	
	@GetMapping("/send")
	@ResponseBody
	public List<Notice> alarmListget(){
		
		return null;
	}
}
