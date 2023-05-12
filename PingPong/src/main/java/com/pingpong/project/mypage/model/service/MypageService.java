package com.pingpong.project.mypage.model.service;

import org.springframework.web.multipart.MultipartFile;

public interface MypageService {

	int backgroundUpdate(int memberNo, MultipartFile backgroundImage, String webPath, String filePath);

}
