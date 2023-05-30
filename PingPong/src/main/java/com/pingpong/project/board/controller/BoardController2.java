package com.pingpong.project.board.controller;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.SessionAttribute;
import org.springframework.web.bind.annotation.SessionAttributes;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.pingpong.project.board.model.dto.Board;
import com.pingpong.project.board.model.dto.Declaration;
import com.pingpong.project.board.model.dto.Hashtag;
import com.pingpong.project.board.model.service.BoardService2;
import com.pingpong.project.member.model.dto.Member;

@SessionAttributes({"loginMember", "mypage"})
@RequestMapping("/board2")
@Controller
public class BoardController2 {

	@Autowired
	private BoardService2 service;
	
	// 게시글 삽입
	@PostMapping("/boardInsert")
	public String boardInsert(
			@SessionAttribute("loginMember") Member loginMember
			, @RequestParam("hashtagLists") String hashtagLists
			, Board board
			, @RequestParam(value="images", required=false) List<MultipartFile> images
			, RedirectAttributes ra
			, HttpSession session
			) throws IllegalStateException, IOException{
		
		board.setMemberNo(loginMember.getMemberNo());  // 로그인 회원의 번호를 게시물 회원의 번호에 대입
		
		String webPath = "/resources/images/boardImage/";  // 저장경로
		
		String filePath = session.getServletContext().getRealPath(webPath);  // 실제 저장 경로
		
    	int boardNo = service.boardInsert(board, images, webPath, filePath);  // 서비스 호출 게시글 INSERT
    	
    	// 해시태그 처리
    	if(!hashtagLists.isEmpty()) {
    		
    		List<Hashtag> hashtags = new ArrayList<Hashtag>();  // 해시태그 리스트 생성
    		
    		String[] hashs = hashtagLists.split(",");  // 파라미터로 가져온 해시태그 "," 구분자로 나눠서 배열로 만듦
    		
    		for(int i=0;i<hashs.length;i++) {  // 해시태그 리스트에 하나씩 담음
    			Hashtag hash = new Hashtag();
    			hash.setHashtagName(hashs[i]);
    			hash.setBoardNo(boardNo);
    			hashtags.add(hash);
    		}

    		service.hashInsert(hashtags);  // 해시태그 DB에 INSERT    		
    		
    	}
    	
    	String message = null;
    	if(boardNo > 0) {
    		message = "게시글이 등록 되었습니다";
    	} else {
    		message = "게시글이 등록에 실패하였습니다";
    	}

    	ra.addFlashAttribute("message", message);
		return "redirect:/mypage/" + loginMember.getMemberNo();
	}
	
	// 게시글 삭제
	@GetMapping("/delete/{boardNo}")
	public String deleteBoard(@PathVariable("boardNo") String boardNo
							, String memberNo
							, RedirectAttributes ra) {
		
		int result = service.deleteBoard(boardNo);  // 게시글 번호로 UPDATE 요청
		
		String message = null;
		if(result>0) {
			message = "게시글이 삭제되었습니다.";
		} else {
			message = "게시글 등록에 실패하였습니다";
		}
		
		ra.addFlashAttribute("message", message);
		
		return "redirect:/mypage/"+memberNo;
	}
	
	//게시글 신고
    @PostMapping("/reportContent")
    public String reportContent(
    		Declaration declaration
    		// @ModelAttribute
    		// - DTO(또는 VO)와 같이 사용하는 어노테이션
    		// - 전달 받은 파라미터의 name 속성 값이
    		//	 같이 사용되는 DTO의 필드명과 같다면
    		//   자동으로 setter를 호출해서 필드에 값을 세팅
    		
    		
    		// *** @ModelAttribute 사용 시 주의사항 ****
    		// - DTO에 기본 생성자가 필수로 존재해야 한다
    		// - DTO에 stter가 필수로 존재해야 한다
    		
    		// *** @ModelAttribute 어노테이션은 생략이 가능하다 ***
    		
    		// *** @ModelAttribute를 이용해 값이 필드에 세팅된 객체를
    		//		"커맨드 객체"라고 한다 ***
    		,@SessionAttribute("loginMember") Member loginMember // 로그인한 멤버 정보를 세션에 등록
    		,@RequestParam(value = "reportTitle") String reportTitle // 제목 가져오기
    		,RedirectAttributes ra // 리다이렉트 시 데이터 전달용 객체
    		,@RequestParam(value = "boardNo") int boardNo // 게시글 번호 가져오기
    		,@RequestParam(value = "indictmentContent") String indictmentContent //신고 내용 가져오기
    		) {
    	
    	// DTO 에 파라미터 값 세팅
    	declaration.setBoardNo(boardNo);
    	declaration.setMemberNo(loginMember.getMemberNo());
    	declaration.setReportTitle(reportTitle);
    	declaration.setIndictmentContent(indictmentContent);
    	
    	int result = service.insertreport(declaration); // 서비스 호출 후 결과값 저장
    	
    	String message = ""; 
    	
    	if(result>0) {
    		message = "신고되었습니다.";
    		ra.addFlashAttribute("message",message);
    	}else {
    		message = "신고에 실패했습니다";
    		ra.addFlashAttribute("message",message); // redirect 되면서 보여줄 메세지
    	}
    	return "redirect:/";
    }
    
}
