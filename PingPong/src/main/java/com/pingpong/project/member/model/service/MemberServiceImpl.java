package com.pingpong.project.member.model.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.pingpong.project.member.model.dao.MemberDAO;
import com.pingpong.project.member.model.dto.Member;

@Service
public class MemberServiceImpl implements MemberService{

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

}