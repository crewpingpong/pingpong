package com.pingpong.project.member.model.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.pingpong.project.member.model.dao.MemberDAO;
import com.pingpong.project.member.model.dto.Member;

@Service
public class MemberServiceImpl implements MemberService {

	@Autowired
	private MemberDAO dao;

//   @Autowired
//   private BCryptPasswordEncoder bcrypt;

	@Override
	public Member login(Member inputMember) {

		Member loginMember = dao.login(inputMember);

//      if(loginMember != null) {
//         
//         if(bcrypt.matches(inputMember.getMemberPw(), loginMember.getMemberPw())) {
//            loginMember.setMemberPw(null);
//         } else {
//            loginMember = null;
//         }
//         if(inputMember.getMemberPw().equals(loginMember.getMemberPw())) {
//        	 loginMember.setMemberPw(null);
//         } else {
//        	 loginMember = null;
//         }
//      }
		return loginMember;
	}
	
	
	// 회원 가입 서비스
	@Transactional(rollbackFor = {Exception.class})
	// 예외 발생 시 rollback
	// 발생 안하면 서비스 종료 시 commit
	@Override
	public int signupInfo(Member inputMember) {
		// 비밀번호를 BCrypt를 이용하여 암호화 후 다시 inputMember에 세팅
		String encPw = /*bcrypt.encode*/inputMember.getMemberPw();
		inputMember.setMemberPw(encPw);
		
		
		// DAO 호출
		int result = dao.signupInfo(inputMember);
		
		return result;
	}

}