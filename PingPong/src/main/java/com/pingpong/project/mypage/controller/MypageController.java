package com.pingpong.project.mypage.controller;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletResponse;

import java.io.IOException;
import java.util.List;

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
import com.pingpong.project.member.model.dto.Member;
import com.pingpong.project.mypage.model.dto.MyPage;
import com.pingpong.project.mypage.model.service.MypageService;


@SessionAttributes({"loginMember"})
@RequestMapping("/mypage")
@Controller
public class MypageController {
	
	@Autowired
	private MypageService service;
	
	// 프로필 조회
	@GetMapping("/{memberNo}")
	public String personal(
			@PathVariable("memberNo") int memberNo
			, Model model) {
		
		
		MyPage mypage = service.selectMemberProfile(memberNo);
		List<Board> boardList = service.selectBoardList(memberNo);
		List<Board> boardMarkList = service.selectBoardMarkList(memberNo);
		List<Board> boardLikeList = service.selectBoardLikeList(memberNo);
		
		model.addAttribute("mypage", mypage);
		model.addAttribute("boardList", boardList);
		model.addAttribute("markList", boardMarkList);
		model.addAttribute("likeList", boardLikeList);
		
		return "personal/post";
	}
	
	// 내 정보 수정으로 이동
	@GetMapping("/myPageModi")
	public String myPageModi(@SessionAttribute("loginMember") Member loginMember, Model model) {
		
		
		
		return "personal/myPageModi"; 
	}
	
	
	// 회원 정보 수정
	@PostMapping("/myPageModi")
	public String updateInfo(Member updateMember
						, @SessionAttribute("loginMember") Member loginMember
						, RedirectAttributes ra) {
		
		updateMember.setMemberNo(loginMember.getMemberNo()); // 로그인한 회원의 번호를 updateMember에 추가
		
//		System.out.println(updateMember.getMemberNickname());
//		System.out.println(updateMember.getMemberUrl());
//		System.out.println(updateMember.getMemberNo());
		
		int result = service.updateInfo(updateMember);

//		System.out.println("result : " + result);
		String message = null;
		
		if(result > 0) { // 성공	
			message = "회원 정보가 수정되었습니다.";
			
			// Session에 로그인 된 회원 정보 수정
			loginMember.setMemberNickname(updateMember.getMemberNickname());
			loginMember.setMemberUrl(updateMember.getMemberUrl());
			
		}else { // 실패		
			message = "회원 정보 수정 실패";		
		}
		
		System.out.println(message);
		
		ra.addFlashAttribute("message", message);
		
		return "redirect:myPageModi";
	}
	
	
	// 비밀번호 수정
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
			path += "info";
		
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
//			Cookie cookie = new Cookie("saveId", "");
//			cookie.setMaxAge(0);
//			cookie.setPath("/");
		}		

		// 탈퇴 실패
		else {
			message = "현재 비밀번호가 일치하지 않습니다";
			path += "myPageModi";
		}
		
		ra.addFlashAttribute("message", message);
		
		return path;
	}
	
	
	// 프로필 이미지 수정
	@PostMapping("/profile")
	public String updateProfile(@RequestParam(value="profileImage", required=false) MultipartFile profileImage 
							, @SessionAttribute("loginMember") Member loginMember
							, RedirectAttributes ra 
							, HttpSession session
							) throws IllegalStateException, IOException{
		
		// 웹 접근 경로
		String webPath = "/resources/images/member/";
		
		// 실제로 이미지 파일이 저장되어야 하는 서버 컴퓨터 경로
		String filePath = session.getServletContext().getRealPath(webPath);
		
		// 프로필 이미지 수정 서비스 호출
		int result = service.updateProfile(profileImage, webPath, filePath, loginMember.getMemberNo());
		
		String message = null;
		if(result > 0) message = "프로필 이미지가 변경되었습니다";
		else		   message = "프로필 변경 실패";
		
		ra.addFlashAttribute("message", message);
		
		return "redirect:profile";
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
