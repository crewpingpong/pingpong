package com.pingpong.project.member.controller;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

import com.pingpong.project.member.model.dto.Member;
import com.pingpong.project.member.model.service.AjaxService;
import com.pingpong.project.search.model.dto.SearchTag;
//최근태
@Controller
public class AjaxController {
	
	@Autowired
	private AjaxService service;
	
	// 이메일 중복 검사
	@GetMapping("/dupCheck/email")
	@ResponseBody
	public int checkEmail(String email) {
		return service.checkEmail(email); 
	}
	
	// 닉네임 중복 검사
	@GetMapping("/dupCheck/nickname")
	@ResponseBody
	public int checkNickname(String nickname) {
		return service.checkNickname(nickname); 
	}
	
	// URL 중복 검사
	@GetMapping("/dupCheck/URL")
	@ResponseBody
	public int checkUrl(String URL) {
		return service.checkUrl(URL); 
	}
	
	// 이메일로 회원 정보 조회
	@PostMapping(value = "/selectMember", produces = "application/json; charset=UTF-8")
	@ResponseBody
	public Member selectMember(@RequestBody Map<String, Object> paramMap) {
		
		String email = (String)paramMap.get("email");
		
		return service.selectMember(email);
	}
	
	// 닉네임이 일부라도 일치하는 모든 회원 조회 (40명)
	@PostMapping(value = "/selectAllNickname", produces = "application/json; charset=UTF-8")
	@ResponseBody
	public List<Member> selectAllNickname(@RequestBody String headerOpenSearchBox1){
		
		return service.selectAllNickname(headerOpenSearchBox1);
	};
	// 태그가 일부라도 일치하는 모든 태그 조회 (40명)
		@PostMapping(value = "/selectAllTag", produces = "application/json; charset=UTF-8")
		@ResponseBody
		public List<SearchTag> selectAllTag(@RequestBody String headerOpenSearchBox1){
			
			return service.selectAllTag(headerOpenSearchBox1);
	};
}
