package com.pingpong.project.mypage.model.service;


import java.io.IOException;

import org.springframework.web.multipart.MultipartFile;
import com.pingpong.project.member.model.dto.Member;

public interface MypageService {

	/** 회원 정보 수정 서비스
	 * @param updateMember
	 * @return result
	 */
	int updateInfo(Member updateMember);

	/** 비밀번호 변경
	 * @param currentPw
	 * @param newPw
	 * @param memberNo
	 * @return result
	 */
	int changePw(String currentPw, String newPw, int memberNo);

	/** 배경화면 변경 서비스
	 * @param memberNo
	 * @param backgroundImage
	 * @param webPath
	 * @param filePath
	 * @return result
	 */
	int backgroundUpdate(int memberNo, MultipartFile backgroundImage, String webPath, String filePath) throws IllegalStateException, IOException;

}