package com.pingpong.project.member.model.dto;

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
}