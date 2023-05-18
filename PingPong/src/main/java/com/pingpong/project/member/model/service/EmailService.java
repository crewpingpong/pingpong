package com.pingpong.project.member.model.service;

import java.util.Map;

public interface EmailService {
    
	int signUp(String email, String title);
	
    String createAuthKey();

	int checkAuthKey(Map<String, Object> paramMap);

	int pwSearchCertNum(String email, String title);
}
