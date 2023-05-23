package com.pingpong.project.message.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.SessionAttribute;
import org.springframework.web.bind.annotation.SessionAttributes;

import com.pingpong.project.member.model.dto.Member;
import com.pingpong.project.message.model.dto.Follow;
import com.pingpong.project.message.model.service.AlarmService;

@SessionAttributes({"loginMember"})
@RequestMapping("/alarm")
@Controller
public class AlarmController {
	
	@Autowired
	private AlarmService service;
	
	// 팔로우 삽입
	@PostMapping("/follow")
	@ResponseBody
	public int followFL(@RequestBody Follow follow
			,@SessionAttribute(value="loginMember", required=false) Member loginMember
//			, Model model
			){
		int result = 0;
		
		Map<String, Integer> followChk = new HashMap<>();
		followChk.put("memberNo", follow.getMemberNo());
		followChk.put("followerNo", loginMember.getMemberNo());
		
		// 팔로우 여부 0 이면 안함 / 1이면 함
		follow.setCheck(service.followCheck(followChk)); 
//		if(check>0) model.addAttribute("likeCheck","on");
		 
		if(loginMember != null) { // 로그인 상태인 경우
			if(loginMember.getMemberNo() != follow.getMemberNo()) { // 자기 자신 X				
				result = service.followFL(follow);
				System.out.println(result);
			}
		}
		return result;
	}
	

}
