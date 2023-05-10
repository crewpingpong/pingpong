package com.pingpong.project.member.controller;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.SessionAttributes;
import org.springframework.web.bind.support.SessionStatus;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;

import com.pingpong.project.member.model.dto.Member;
import com.pingpong.project.member.model.service.MemberService;

@Controller
@RequestMapping("/member")
@SessionAttributes({"loginMember"})
public class MemberController {

   @Autowired
   private MemberService service;
   
   // 로그인 전용 화면 이동
   @GetMapping("/login")
   public String login() {   
      return "member/login";
   }
   
   @GetMapping("/signUp")
   public String signUp() {
      return "member/signUp";
   }
   
   @PostMapping("/login")
   public String login(
         Member inputMember, Model model
         , @RequestHeader(value="referer") String referer
         , @RequestParam(value="saveId", required=false) String saveId
         , HttpServletResponse resp
         , RedirectAttributes ra
         ) {
      System.out.println(inputMember.getMemberEmail());
	   
      Member loginMember = service.login(inputMember);
      
      System.out.println(loginMember.getMemberNickname());
      
      String path = "redirect:";

      if(loginMember != null) {
         path += "/";
         
         model.addAttribute("loginMember", loginMember);

         Cookie cookie = new Cookie("saveId", loginMember.getMemberEmail());
         
         if(saveId!=null) {
            cookie.setMaxAge(60*60*24*30);
         } else {
            cookie.setMaxAge(0);
         }
         cookie.setPath("/");
         resp.addCookie(cookie);
      } else {
         path += referer;
         ra.addFlashAttribute("message", "아이디 또는 비밀번호가 일치하지 않습니다.");
      }
      return path;
   }
   
   @GetMapping("/logout")
   public String logout(SessionStatus status, HttpSession session) {
      status.setComplete();
      return "redirect:/";
   }
   
   
}