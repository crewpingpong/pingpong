package com.pingpong.project.member.model.dto;

import java.util.List;

import com.pingpong.project.mypage.model.dto.Tech;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@NoArgsConstructor
@Getter
@Setter
@ToString
public class Member {

   private int memberNo;
   private String memberEmail;
   private String memberPw;
   private String memberNickname;
   private String memberUrl;
   private String enrollDate;
   private String memberDeleteFlag;
   private int Authority;
   
   private String profileImage; 
   
   private List<Tech> techList;
   
	/*
	 * 
	 * private String backgroundImage;
	 */
   private String oneLiner;
   
   private int memberTechNo;
   private int techNo;
   private String techName;
   private String techImg;
   
   private String snsAddress;
   
   private String memberInfo;
   private String memberCareer;
   private String memberCertificate;
}