package com.pingpong.project.mypage.model.dto;

import java.util.List;
import java.util.Map;

import com.pingpong.project.board.model.dto.BoardImage;
import com.pingpong.project.board.model.dto.Comment;
import com.pingpong.project.board.model.dto.Like;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@NoArgsConstructor
@Getter
@Setter
@ToString
public class ProfileInfo { 
    private String introduce;      // 자기소개    
    private String career;         // 경력 
    private String certificate;    // 자격증 (아이콘)
    private List<Tech> techList;   // 지식/기술
    private List<SNS> snsList;     // SNS
}
