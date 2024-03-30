package com.example.Fittness.service;

import com.example.Fittness.data.LoginData;
import com.example.Fittness.data.MemberData;
import com.example.Fittness.entity.Member;
import com.example.Fittness.response.loginResponse;

import java.util.Optional;


public interface MemberService {
    String addMember(MemberData memberdata);


    loginResponse loginMember(LoginData loginData);
    String generateTokenForUser(Member member);
    public Member updateMemberInstructor(Long memberId, Long instructorId);

    public Optional<Member> getMemberById(Long memberId);
}