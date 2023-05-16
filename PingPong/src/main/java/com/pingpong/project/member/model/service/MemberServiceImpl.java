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

	@Autowired
	private BCryptPasswordEncoder bcrypt;

	@Override
	public Member login(Member inputMember) {

		Member loginMember = dao.login(inputMember);
//		System.out.println("암호화 확인 : " + bcrypt.encode(inputMember.getMemberPw()));

		if (loginMember != null) { // 아이디가 일치하는 회원이 조회된 경우

			// 입력한 PW, 암호화된 PW 같은지 확인
			if (bcrypt.matches(inputMember.getMemberPw(), loginMember.getMemberPw())) {

				// 비밀번호를 유지하지 않기 위해서 로그인 정보에서 제거
				loginMember.setMemberPw(null);

			} else { // 다를 경우
				loginMember = null; // 로그인 실패처럼 만듦
			}
		}
		return loginMember;
	}

	// 회원 가입 서비스
	@Transactional(rollbackFor = { Exception.class })
	// 예외 발생 시 rollback
	// 발생 안하면 서비스 종료 시 commit
	@Override
	public int signupInfo(Member inputMember) {
		// 비밀번호를 BCrypt를 이용하여 암호화 후 다시 inputMember에 세팅
		String encPw = bcrypt.encode(inputMember.getMemberPw());
		inputMember.setMemberPw(encPw);

		// DAO 호출
		int result = dao.signupInfo(inputMember);

		return result;
	}

	// 비번찾기 이메일 검사
	@Override
	public int emailSearch(String memberEmail) {
		return dao.emailSearch(memberEmail);
	}

}