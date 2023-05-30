package com.pingpong.project.manager.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.SessionAttributes;

import com.pingpong.project.board.model.dto.Board;
import com.pingpong.project.board.model.dto.Comment;
import com.pingpong.project.board.model.dto.Declaration;
import com.pingpong.project.board.model.dto.Inquiry;
import com.pingpong.project.manager.service.ManagerService;


//@SessionAttribute("loginMember") Member loginMember
// : Session에서 얻어온 " loginMember"에 해당하는 객체를
// 매개 변수 Member loginMember에 저장
@SessionAttributes({"loginMember"})
@RequestMapping("/manager")// 공통된 주소 앞부분 작성
						   // member로 시작하는 요청은 해당 컨트롤러에서 처리
@Controller
public class ManagerController {

	@Autowired
	private ManagerService service;
	
	//가입 회원 목록 조회 + 페이지 네이션
	@GetMapping("/")
	public String managerPage(
			Model model
			// Model : 데이터 전달용 객체 
			// -> 데이터를 K : V 형식으로 담아서 전달
			// -> 기본적으로 request scope
			// -> @SessionAttributes 어노테이션과 함께 사용 시 Session scope
			,@RequestParam(value="cp", required=false, defaultValue="1") int cp
		    // @RequestParam(value="name", required = "fasle",defaultValue="1")
		    // [속성]
		    // value : 전달 받은 input 태그의 name 속성값
		   
		    // required : 입력된 name 속성값 파라미터 필수 여부 지정(기본값 true)
		    // -> required = true인 파라미터가 존재하지 않는다면 400 Bad Request 에러 발생
		    // -> required = true인 파라미터가 null인 경우에도 400 Bad Request

		    // defaultValue : 파라미터 중 일치하는 name 속성 값이 없을 경우에 대입할 값 지정.
		    // -> required = false인 경우 사용
			, @RequestParam Map<String, Object> paramMap
			) {//검색 input값 select/option + value 가져오기 
		
		if(paramMap.get("key") == null) { //검색창에 입력된 값이 없으면 목록 전체 조회
		Map<String, Object> map = service.selectMemberList(cp); // String,Object 타입 map에 서비스 호출해서 리스트 반환받기(전달할 매개변수는 cp)
		
		model.addAttribute("map",map); // model에 반환된 map 담기
		
		}else {
			
			Map<String, Object> map = service.selectMemberList(paramMap, cp); // 오버로딩
			// String,Object 타입 map에 서비스 호출해서 리스트 반환받기(전달할 매개변수는 cp,paramMap)
			model.addAttribute("map", map);
		}
		
		
		return "manager/managerExistingMember"; // 가입 회원 관리 페이지로 이동
	}
	
	// 체크된 회원 탈퇴 처리
	@PostMapping("/delete")
	public String managerPageDelete(
			@RequestParam(name = "choicebox", required = false) String[] choicebox) {
			// 체크박스가 체크된 목록 파라미터 값 배열로 가져오기 
		for(int i=0; i<choicebox.length;i++) { // choicebox 배열의 길이만큼 반복
			
		 int boardNo = Integer.parseInt(choicebox[i]); // choicebox는 String 배열이기 때문에 int로 형변환
		 int result = service.deleteId(boardNo); // delete , insert 는 성공하면 1 , 실패시 0 반환 이기 때문에 int result로 성공 실패 여부 값 저장
		}
		
		
		return "redirect:/manager/"; // 탈퇴 처리 성공 시 관리자 페이지 첫 화면으로 이동
	}
	

	//탈퇴 회원
	@GetMapping("/Secession")
	public String managerSecessionMember(
			Model model
			,@RequestParam(value="cp", required=false, defaultValue="1") int cp
			, @RequestParam Map<String, Object> paramMap
			) {
		if(paramMap.get("key") == null) {
			
			Map<String, Object> map = service.selectSecessionList(cp);
			
			model.addAttribute("map",map);
		}else {
			
			Map<String, Object> map = service.selectSecessionList(paramMap, cp); // 오버로딩
			
			model.addAttribute("map", map);
			
		}
		
		return "manager/managerSecessionMember";
	}
	
	
	// 체크된 탈퇴 회원 복구
	@PostMapping("/restore")
	public String managerRestoreMember(
			@RequestParam(name = "choicebox", required = false) String[] choicebox) {
		
		for(int i=0; i<choicebox.length;i++) {
			
			 int boardNo = Integer.parseInt(choicebox[i]);
			 int result = service.restoreId(boardNo);
			}
		
		
		return "redirect:/manager/Secession/";
	}
	
	//게시글 관리
	@GetMapping("/Post")
	public String managerPost(
			Model model
			,@RequestParam(value="cp", required=false, defaultValue="1") int cp
			, @RequestParam Map<String, Object> paramMap
			) {
		
		if(paramMap.get("key") == null) {
		
		Map<String, Object> boardList = service.selectBoardList(cp);
		
		model.addAttribute("boardList",boardList);
		
		}else {
			
		Map<String, Object> boardList = service.selectBoardList(paramMap, cp);
		
		model.addAttribute("boardList",boardList);
		}

		return "manager/managerPost";
	}
	
	// 게시글 삭제 
	@PostMapping("/postdelete")
	public String PostDelete(
			@RequestParam(name = "choicebox", required = false) String[] choicebox) {
		
		for(int i=0; i<choicebox.length;i++) {
			
			 int boardNo = Integer.parseInt(choicebox[i]);
			 int result = service.deletePost(boardNo);
			}
		
		return "redirect:/manager/Post";
	}
	
	//게시글 복구
	@PostMapping("/postrestore")
	public String PostRestore(
			@RequestParam(name = "choicebox", required = false) String[] choicebox) {
		
		for(int i=0; i<choicebox.length;i++) {
			
			 int boardNo = Integer.parseInt(choicebox[i]);
			 int result = service.restorePost(boardNo);
			}
		
		return "redirect:/manager/Post";
	}
	
	//댓글 관리
	@GetMapping("/Comment")
	public String managerComment(
			Model model
			,@RequestParam(value="cp", required=false, defaultValue="1") int cp
			, @RequestParam Map<String, Object> paramMap
			) {
		if(paramMap.get("key") == null) {
		
		Map<String, Object> CommentList = service.selectCommentList(cp);
		
		model.addAttribute("CommentList",CommentList);
		
		}else {
			
		Map<String, Object> CommentList = service.selectCommentList(paramMap, cp);
		
		model.addAttribute("CommentList",CommentList);
		
		}
		
		return "manager/managerComment";
	}
	
	//댓글 삭제
	@PostMapping("/commentdel")
	public String CommentDel(
			@RequestParam(name = "choicebox", required = false) String[] choicebox) {
	
		for(int i=0; i<choicebox.length;i++) {
			
			 int commentNo = Integer.parseInt(choicebox[i]);
			 int result = service.commentdel(commentNo);
			}
		
		return "redirect:/manager/Comment";
	}
	
	//댓글 복구
	@PostMapping("/commentrestore")
	public String CommentRe(
			@RequestParam(name = "choicebox", required = false) String[] choicebox) {
		
		for(int i=0; i<choicebox.length;i++) {
			
			 int commentNo = Integer.parseInt(choicebox[i]);
			 int result = service.commentRe(commentNo);
			}
		
		return "redirect:/manager/Comment";
	}
	
	//1:1문의
	@GetMapping("/1To1inquiry")
	public String manager1To1inquiry(
			Model model
			,@RequestParam(value="cp", required=false, defaultValue="1") int cp
			, @RequestParam Map<String, Object> paramMap
			) {
		
		if(paramMap.get("key") == null) {
		
			Map<String, Object> InquiryList = service.selectInquiryList(cp);
		
			model.addAttribute("InquiryList",InquiryList);
		
		}else {
			
			Map<String, Object> InquiryList = service.selectInquiryList(paramMap, cp);
			
			model.addAttribute("InquiryList",InquiryList);
			
		}
		
		return "manager/manager1To1Inquiry";
	}
	// 1:1 문의 상세 내용 조회
		@GetMapping("/1to1Content")
		public String manager1To1Content(
				@RequestParam("inquiryNo") int inquiryNo
				,Model model
				) {
			Inquiry inquiry = service.selectInquiry(inquiryNo);
			
			model.addAttribute("inquiry",inquiry);
			
			
			return "manager/manager1To1Content";
		}
	
	//신고함
	@GetMapping("/Report")
	public String managerReport(
			Model model
			,@RequestParam(value="cp", required=false, defaultValue="1") int cp
			, @RequestParam Map<String, Object> paramMap
			) {
		
		if(paramMap.get("key") == null) {
		
			Map<String, Object> declarationList = service.selectDeclarationList(cp);
		
			model.addAttribute("DeclarationList",declarationList);
		
		}else {
			
			Map<String, Object> declarationList = service.selectDeclarationList(cp,paramMap);
			
			model.addAttribute("DeclarationList",declarationList);
			
		}
		
		return "manager/managerReport";
	}
	
	// 신고함 상세 내역 조회
	@GetMapping("/ReportContent")
	public String managerReportContent(
			Model model
			,@RequestParam("indictmentNo") int indictmentNo
			) {
	
		Declaration declaration = service.DeclarationContentList(indictmentNo);
		
		model.addAttribute("declaration",declaration);
		
		return "manager/managerReportContent";
	}
}
