package com.pingpong.project.mypage.model.service;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.pingpong.project.common.utility.Util;
import com.pingpong.project.mypage.model.dao.MypageDAO;

@Service
public class MypageServiceImpl implements MypageService{
	
	@Autowired
	private MypageDAO dao;

	@Override
	public int backgroundUpdate(int memberNo, MultipartFile backgroundImage, String webPath, String filePath) {
		
		Map<String, Object> map = new HashMap<>();
		
		map.put("memberNo", memberNo);
		
		String fileName = Util.fileRename(backgroundImage.getOriginalFilename());
		
		map.put("backgroundImage", webPath+fileName);
		
		
		int result = dao.backgroundUpdate(map);
		
		System.out.println("123");
//		if(result == 0) {
//			result = dao.backgroundInsert(map);
//		}
		return result;
	}

}
