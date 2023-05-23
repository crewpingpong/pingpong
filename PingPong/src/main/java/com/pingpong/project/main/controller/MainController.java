package com.pingpong.project.main.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import com.pingpong.project.board.model.dto.Board;
import com.pingpong.project.main.model.service.MainService;
import com.pingpong.project.mypage.model.service.MypageService;

@Controller
public class MainController {
   
	@Autowired
	private MainService service;
	
   @RequestMapping(value = "/")
   public String home(Model model) {      
      
	  // 화면에 넣어줄 게시글 가져오기 (최신순)
	  List<Board> boardList = service.selectBoardAll(); 
	  
	  // 슬라이드에 넣어줄 게시글 가져오기 (좋아요 많은 순)
	  List<Board> boardMainList = service.selectMainList(); 
      
	  model.addAttribute("boardList", boardList);
	  model.addAttribute("boardMainList", boardMainList);
	  
      return "common/index";
   }
   
}
