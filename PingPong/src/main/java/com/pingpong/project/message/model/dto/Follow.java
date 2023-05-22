package com.pingpong.project.message.model.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@NoArgsConstructor
@Getter
@Setter
@ToString
public class Follow {
	private int followNo; // 팔로우 번호
 	private int memberNo; // 회원 번호
	private int followerNo; // 팔로우한 사람 번호
	private int followerName; // 팔로우한 사람 번호
	
	private int check; // 팔로우 X(노란색) : 0, 팔로우 0(하늘색) : 1 
}
