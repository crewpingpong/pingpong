package com.pingpong.project.member.model.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.pingpong.project.member.model.dao.MemberDAO;
import com.pingpong.project.member.model.dto.Member;
//최근태
@Service
public class MemberServiceImpl implements MemberService {

	@Autowired
	private MemberDAO dao;

	@Autowired
	private BCryptPasswordEncoder bcrypt;

	@Override
	public Member login(Member inputMember) {

		Member loginMember = dao.login(inputMember);
		System.out.println("암호화 확인 : " + bcrypt.encode(inputMember.getMemberPw()));

		if (loginMember != null) {

			if (bcrypt.matches(inputMember.getMemberPw(), loginMember.getMemberPw())) {

				loginMember.setMemberPw(null);

			} else { // 다를 경우
				loginMember = null;
			}
		}
		return loginMember;
	}

	@Transactional(rollbackFor = { Exception.class })
	@Override
	public int signupInfo(Member inputMember) {
		
		String encPw = bcrypt.encode(inputMember.getMemberPw());
		inputMember.setMemberPw(encPw);

		int result = dao.signupInfo(inputMember);

		return result;
	}

	// 비번찾기 이메일 검사
	@Override
	public int emailSearch(String memberEmail) {
		return dao.emailSearch(memberEmail);
	}
	
	// 비번 변경
	@Transactional(rollbackFor = Exception.class) 
	@Override
	public int changePw(String memberEmail, String newMemberPw) {
		return dao.changePw(bcrypt.encode(newMemberPw) , memberEmail);
	}

}