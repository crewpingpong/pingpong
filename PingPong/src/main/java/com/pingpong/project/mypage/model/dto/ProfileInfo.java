package com.pingpong.project.mypage.model.dto;

import java.util.List;
import java.util.Map;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class ProfileInfo { 
    private String introduce;           // 자기소개    
    private String career;              // 경력 
    private String certificate;         // 자격증
    
    private List<Tech> techList;        // 지식/기술 (아이콘)
    private Map<String, Object> snsMap; // SNS (아이콘)
}
