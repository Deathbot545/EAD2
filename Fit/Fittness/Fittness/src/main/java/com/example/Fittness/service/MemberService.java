package com.example.Fittness.service;

import com.example.Fittness.data.LoginData;
import com.example.Fittness.data.MemberData;
import com.example.Fittness.entity.Member;
import com.example.Fittness.response.loginResponse;


public interface MemberService {
    String addMember(MemberData memberdata);


    loginResponse loginMember(LoginData loginData);
    String generateTokenForUser(Member member);
}