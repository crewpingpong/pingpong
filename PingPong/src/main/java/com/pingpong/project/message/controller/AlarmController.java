package com.pingpong.project.message.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.SessionAttribute;
import org.springframework.web.bind.annotation.SessionAttributes;

import com.pingpong.project.member.model.dto.Member;
import com.pingpong.project.message.model.dto.Follow;
import com.pingpong.project.message.model.dto.Notice;
import com.pingpong.project.message.model.service.AlarmService;

@SessionAttributes({"loginMember"})
@RequestMapping("/alarm")
@Controller
public class AlarmController {
	
	@Autowired
	private AlarmService service;
	
	// 최근 알람 20개 조회
	@GetMapping(value="/send", produces = "application/json; charset=UTF-8")
	@ResponseBody
	public List<Notice> alarmList(@SessionAttribute("loginMember") Member loginMember){
		List<Notice> alarmList = service.alarmList(loginMember.getMemberNo());
//		System.out.println(alarmList);
		return alarmList;
	}
	
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
		 
		if(loginMember != null) { // 로그인 상태인 경우
			if(loginMember.getMemberNo() != follow.getMemberNo()) { // 자기 자신 X				
				result = service.followFL(follow);
				System.out.println(result);
			}
		}
		return result;
	}
	
	// 내가 팔로우 하는 사람들 조회
	@GetMapping(value="/myFollowList", produces = "application/json; charset=UTF-8")
	@ResponseBody
	public List<Follow> myFollowList(@SessionAttribute("loginMember") Member loginMember){

		List<Follow> myFollowList = service.myfollowList(loginMember.getMemberNo());
//		System.out.println(myFollowList);
		return myFollowList;
	}
	
	// 나를 팔로우 하는 사람들 조회
	@GetMapping(value="/meFollowList", produces = "application/json; charset=UTF-8")
	@ResponseBody
	public List<Follow> meFollowList(@SessionAttribute("loginMember") Member loginMember){
		
		List<Follow> meFollowList = service.mefollowList(loginMember.getMemberNo());
//		System.out.println(meFollowList);
		return meFollowList;
	}
	
	// 내가 팔로우 하는 사람 팔로우 취소
	@DeleteMapping("/unFollow")
	@ResponseBody
	public int unFollow(@SessionAttribute("loginMember") Member loginMember
			,@RequestBody Follow follow){
		

		follow.setMemberNo(loginMember.getMemberNo());
		
		return service.unfollow2(follow);
		 
	}
	
	// 나를 팔로우 하는 사람 팔로우 취소 처리
	@DeleteMapping("/followCancel")
	@ResponseBody
	public int followCancel(@SessionAttribute("loginMember") Member loginMember
			,@RequestBody Follow follow){
		
		follow.setFollowerNo(loginMember.getMemberNo());
		
		return service.unfollow2(follow);
		
	}
	
}
