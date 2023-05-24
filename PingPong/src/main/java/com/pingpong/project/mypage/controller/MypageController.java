package com.pingpong.project.mypage.controller;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletResponse;

import java.io.IOException;
import java.util.HashMap;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Map;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;

import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.SessionAttribute;
import org.springframework.web.bind.annotation.SessionAttributes;
import org.springframework.web.bind.support.SessionStatus;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.pingpong.project.board.model.dto.Board;
import com.pingpong.project.common.utility.Util;
import com.pingpong.project.member.model.dto.Member;
import com.pingpong.project.message.model.dto.Follow;
import com.pingpong.project.message.model.service.AlarmService;
import com.pingpong.project.mypage.model.dto.Interests;
import com.pingpong.project.mypage.model.dto.MyPage;
import com.pingpong.project.mypage.model.dto.SNS;
import com.pingpong.project.mypage.model.dto.Tech;
import com.pingpong.project.mypage.model.service.MypageService;


@SessionAttributes({"loginMember", "mypage"})
@RequestMapping("/mypage")
@Controller
public class MypageController {
	
	@Autowired
	private MypageService service;
	
	@Autowired
	private AlarmService alarmService;
	
	// 프로필 조회
	@GetMapping("/{memberNo}")
	public String personal(
			@PathVariable("memberNo") int memberNo
			, Model model
			, @SessionAttribute("loginMember") Member loginMember) {
		
		
		MyPage mypage = service.selectMemberProfile(memberNo);  // 멤버 프로필 회원의 정보
		List<Board> boardList = service.selectBoardList(memberNo);  // 게시글 목록
		List<Board> boardMarkList = service.selectBoardMarkList(memberNo);  // 북마크한 게시글 목록
		List<Board> boardLikeList = service.selectBoardLikeList(memberNo);  // 좋아요한 게시글 목록
		
		// memberNo == 현재 보고 있는 페이지의 멤버 번호
		Map<String, Integer> follow = new HashMap<>();
		follow.put("memberNo", memberNo);
		follow.put("followerNo", loginMember.getMemberNo());
		int followCheck = alarmService.followCheck(follow); // 팔로우 여부 체크 0 == 안함 / 1 == 함
		List<Follow> myfollowList = alarmService.myfollowList(follow); // 내가 팔로우 하는 사람들
		List<Follow> mefollowList = alarmService.mefollowList(follow); // 나를 팔로우 하는 사람들
		
		
		model.addAttribute("memberNo", memberNo);
		model.addAttribute("mypage", mypage);
		model.addAttribute("boardList", boardList);
		model.addAttribute("markList", boardMarkList);
		model.addAttribute("likeList", boardLikeList);
		
		model.addAttribute("followCheck", followCheck);
		model.addAttribute("myfollowList", myfollowList);
		model.addAttribute("mefollowList", mefollowList);
		
		
		// 선택한 techImgList 조회 (아이콘)
		List<Tech> checkTechImgList = service.seletCheckTechImgList(loginMember.getMemberNo());
		  
		List<String> techImgList = new ArrayList<>();
		
		for (Tech tech : checkTechImgList) {
		    techImgList.add(tech.getTechImg());
		}
		model.addAttribute("techImgList", techImgList);
		
//		System.out.println(techImgList);
		
		
		
		// 선택한 snsImgList 조회 (아이콘)
		List<SNS> checkSNSImgList = service.selectCheckSNSImgList(loginMember.getMemberNo());
		  
		List<String> snsImgList = new ArrayList<>();
		
		for (SNS sns : checkSNSImgList) {
			snsImgList.add(sns.getSnsImg());
		}
		model.addAttribute("snsImgList", snsImgList);
		
//		System.out.println(snsImgList);
	      
	      
		return "personal/post";
	}
	
	// 내 정보 수정으로 이동
	@GetMapping("/myPageModi")
	public String myPageModi(@SessionAttribute("loginMember") Member loginMember
							, Model model) {
		

		
		// techList 전체 조회
		List<Tech> techList = service.selectTechList();
		model.addAttribute("techList", techList); 
		
		// 선택한 techList 조회
		List<Tech> checkTechList = service.selectCheckTechList(loginMember.getMemberNo());
		model.addAttribute("checkTechList", checkTechList);
		
//		System.out.println("techList" + techList);
//		System.out.println("checkTechList" + checkTechList);
		
		
		
		
		
		// interestList 전체 조회
		List<Interests> interestList = service.selectInterestList();
		model.addAttribute("interestList", interestList);
		
		// 선택한 interestList 조회
		List<Interests> checkInterestList = service.selectCheckInterestList(loginMember.getMemberNo());
		model.addAttribute("checkInterestList", checkInterestList);
		
//		System.out.println("interestList" + interestList);
//		System.out.println("checkInterestList" + checkInterestList);
		
		
		
		
		
		// SNSList 전체 조회
		List<SNS> SNSList = service.selectSNSList();
		model.addAttribute("SNSList", SNSList);
		
		// 선택한 SNSList 조회
		List<SNS> checkSNSList = service.seletCheckSNSList(loginMember.getMemberNo());
		model.addAttribute("checkSNSList", checkSNSList);
		
//		System.out.println("SNSList" + SNSList);
//		System.out.println("checkSNSList" + checkSNSList);
		
		
		
		return "personal/myPageModi"; 
	}
	
	
	
	
	// 내 정보 편집
	@PostMapping("/myPageModi")
	public String updateInfoAndProfile(Member updateMember
									, @RequestParam(value="updateProfile", required=false) MultipartFile profileImage
									, @RequestParam(value="interest", required=false) String[] interestArray
									, @SessionAttribute("loginMember") Member loginMember
									, @SessionAttribute("mypage") MyPage mypage
									, RedirectAttributes ra
									, HttpSession session) throws IllegalStateException, IOException {
		
	    updateMember.setMemberNo(loginMember.getMemberNo());

	    List<String> selectedInterestList = Arrays.asList(interestArray);

	    // 닉네임, url 수정
	    int infoResult = service.updateInfo(updateMember);

	    String webPath = "/resources/images/profileImage/";	    
	    String filePath = session.getServletContext().getRealPath(webPath);

	    String message = null;
	    if (profileImage != null && !profileImage.isEmpty()) {
	        String fileName = profileImage.getOriginalFilename();
	        String reName = Util.fileRename(fileName);
	        
	        // 프로필 이미지 수정
	        int profileResult = service.updateProfile(profileImage, reName, webPath, filePath, loginMember.getMemberNo());

	        if (infoResult > 0 && profileResult > 0) {
	            message = "회원 정보가 수정되었습니다.";

	            // Session에 로그인 된 회원 정보 수정
	            loginMember.setMemberNickname(updateMember.getMemberNickname());
	            loginMember.setMemberUrl(updateMember.getMemberUrl());
	            
	            mypage.setProfileImage(webPath + reName);
	            
	        } else {
	            message = "회원 정보 수정 실패";
	        }
	        
	    } else {
	    	
	        if (infoResult > 0) {
	            message = "회원 정보가 수정되었습니다.";

	            // Session에 로그인 된 회원 정보 수정
	            loginMember.setMemberNickname(updateMember.getMemberNickname());
	            loginMember.setMemberUrl(updateMember.getMemberUrl());
	            
	        } else {
	            message = "회원 정보 수정 실패";
	        }
	    }
	    
	    

	    
	    
		/* *** 관심분야 *** */
		// 선택한 techImgList 조회 전 모두 삭제(체크 해제 구현을 위한)
		int interestListDelete =  service.interestListDeleteAll(loginMember.getMemberNo());
		
		// 체크된 interestList 삽입
		for(String interest : selectedInterestList) {
		 
			 Map<String, Object> interestMap = new HashMap<>();
			 
			 interestMap.put("interestsNo", interest); 
			 interestMap.put("memberNo", loginMember.getMemberNo());
			  
//			 System.out.println("interestMap : " + interestMap);
		 
			 int result = service.insertNewInterestList(interestMap); 
		 }

		 
		

	    ra.addFlashAttribute("message", message);

	    return "redirect:/mypage/" + loginMember.getMemberNo();
	}

	
	
	// 프로필 편집 memberInfo, memberCareer, memberCertificate
	@PostMapping("/profile")
	public String updateProfileInfo(MyPage updateMyPage
			, @RequestParam(value="tech", required=false) String[] techArray
			, @RequestParam(value="SNS", required=false) String[] SNSArray
			, @SessionAttribute("mypage") MyPage mypage
			, @SessionAttribute("loginMember") Member loginMember
			, RedirectAttributes ra
			, HttpSession session) {
		
		
		
		List<String> selectedtechList = Arrays.asList(techArray);
		List<String> selectedSnsList = Arrays.asList(SNSArray);
		
		
		updateMyPage.setMemberNo(mypage.getMemberNo());
		
		// 자기소개, 커리어, 자격증 수정
		int profileInfoResult = service.updateProfileInfo(updateMyPage);
		
//		System.out.println(profileInfoResult);
//		System.out.println(updateMyPage);
		
		String message = null;
		if(profileInfoResult > 0) {
			
			message = "회원 프로필 정보가 수정되었습니다";
			
			mypage.setMemberInfo(updateMyPage.getMemberInfo());
			mypage.setMemberCareer(updateMyPage.getMemberCareer());
			mypage.setMemberCertificate(updateMyPage.getMemberCertificate());
			
//			System.out.println(updateMyPage.getMemberInfo());
//			System.out.println(updateMyPage.getMemberCareer());
//			System.out.println(updateMyPage.getMemberCertificate());
			
		}else {
			message = "회원 프로필 정보 수정 실패";
		}
		
		
		
		/* *** 지식/기술 리스트 *** */
		// 선택한 techImgList 조회 전 모두 삭제(체크 해제 구현을 위한)
		int techListDelete =  service.techListDeleteAll(loginMember.getMemberNo());
				
		
		// 체크된 techList 삽입
		for(String tech : selectedtechList) {	
			
			Map<String, Object> techMap = new HashMap<>();
			
			techMap.put("techNo", tech);
			techMap.put("memberNo", loginMember.getMemberNo());
			
//			System.out.println("techMap : " + techMap);
			
			int result = service.insertNewTechList(techMap);
		}
		
		
		
		/* *** SNS 리스트 *** */
		// 선택한 SNSImgList 조회 전 모두 삭제(체크 해제 구현을 위한)
		int snsListDelete =  service.snsListDeleteAll(loginMember.getMemberNo());
				
		
		// 체크된 snsList 삽입
		for(String sns : selectedSnsList) {	
			
			Map<String, Object> snsMap = new HashMap<>();
			
			snsMap.put("snsNo", sns);
			snsMap.put("memberNo", loginMember.getMemberNo());
			
//			System.out.println("snsMap : " + snsMap);
			
			int result = service.insertNewSnsList(snsMap);
		}

		
		
		ra.addFlashAttribute("message", message);
		
		return "redirect:/mypage/" + mypage.getMemberNo(); // mypage로 redirect
	}

	
	// 비밀번호 변경
	@PostMapping("/changePw")
	public String changePw(String currentPw, String newPw
						, @SessionAttribute("loginMember") Member loginMember
						, RedirectAttributes ra) {
		
		int memberNo = loginMember.getMemberNo();
		
		int result = service.changePw(currentPw, newPw, memberNo);
		
		String path = "redirect:";
		String message = null;
		
		if(result > 0) {
			message = "비밀번호가 변경되었습니다.";
			path += "myPageModi";
		
		}else {
			message = "현재 비밀번호가 일치하지 않습니다.";
			path += "changePw";
		}
		
		ra.addFlashAttribute("message", message);
		
		return path;
	}
	
	
	// 회원 탈퇴
	@PostMapping("/secession")
	public String secession(String memberPw
						, @SessionAttribute("loginMember") Member loginMember
						, SessionStatus status
						, HttpServletResponse resp
						, RedirectAttributes ra) {
		
		// 로그인한 회원의 회원 번호 얻어오기
		int memberNo = loginMember.getMemberNo();
		
		// 회원 탈퇴 서비스 호출
		int result = service.secession(memberPw, memberNo);
		
		String path = "redirect:";
		String message = null;
		
		// 탈퇴 성공
		if(result > 0) {
			message = "탈퇴되었습니다";
			path += "/";
			status.setComplete(); // 로그아웃
			
			// 쿠키 삭제
			Cookie cookie = new Cookie("saveId", "");
			cookie.setMaxAge(0);
			cookie.setPath("/");
			resp.addCookie(cookie);
		}		

		// 탈퇴 실패
		else {
			message = "현재 비밀번호가 일치하지 않습니다";
			path += "changePw";
		}
		
		ra.addFlashAttribute("message", message);
		
		return path;
	}
	
	
    // 배경화면 변경
    @PostMapping("/background/insert")
    public String background(
    		@RequestParam(value="backgroundImage", required=false) MultipartFile backgroundImage // 배경화면 이미지
    		,@SessionAttribute("loginMember") Member loginMember  // 회원 번호 확인용
    		, RedirectAttributes ra  // 메시지 전달용
    		, HttpSession session  //
    		) throws IllegalStateException, IOException{
    	
    	String webPath = "/resources/images/mypage/";  // 저장경로
		
		String filePath = session.getServletContext().getRealPath(webPath);
    	int result = service.backgroundUpdate(loginMember.getMemberNo(), backgroundImage, webPath, filePath);

    	String message = null;
		if(result > 0) {  // 성공 시
			message = "배경화면이 변경되었습니다";
		} else {

			message = "배경화면 등록 실패......";
		}
		ra.addFlashAttribute("message", message);

		return "redirect:/mypage/" + loginMember.getMemberNo();
    }

}