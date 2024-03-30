package com.example.Fittness.service;

import com.example.Fittness.data.LoginData;
import com.example.Fittness.data.MemberData;
import com.example.Fittness.entity.Member;
import com.example.Fittness.repository.MemberRepository;
import com.example.Fittness.response.loginResponse;


import io.jsonwebtoken.Jws;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.security.Keys;
import io.micrometer.common.util.StringUtils;
import jakarta.persistence.EntityNotFoundException;
import org.jetbrains.annotations.NotNull;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Date;
import io.jsonwebtoken.SignatureAlgorithm;

import javax.crypto.SecretKey;
import java.util.Optional;


@Service
public class MemberServiceImp  implements MemberService {

    @Autowired
    private MemberRepository memberRepository;
    @Autowired
    private PasswordEncoder passwordEncoder;


    @Override
    public String addMember(@NotNull MemberData memberData) {
        // Encode the password before saving
        String encodedPassword = passwordEncoder.encode(memberData.getPassword());

        Member member = new Member(
                memberData.getEmail(),
                encodedPassword, // Store the encoded password
                memberData.getFirstname(),
                memberData.getLastname(),
                memberData.getGender(),
                memberData.getAge(),
                memberData.getWeight(),
                memberData.getHeight()
        );

        memberRepository.save(member);
        return member.getFirstname();
    }
    @Override
    public loginResponse loginMember(LoginData loginData) {
        try {
            Member member = memberRepository.findByEmail(loginData.getEmail());
            if (member != null) {
                String password = loginData.getPassword();
                String encodedPassword = member.getPassword();
                if (!StringUtils.isEmpty(encodedPassword)) {
                    if (passwordEncoder.matches(password, encodedPassword)) {
                        // Token generation is added here
                        String token = generateTokenForUser(member);
                        // Now return the login response including the token
                        return new loginResponse("Login Success", true, token);
                    } else {
                        // Password does not match
                        return new loginResponse("Password not Match", false, null);
                    }
                } else {
                    // Password not set for some reason
                    return new loginResponse("Password not Set", false, null);
                }
            } else {
                // Email does not exist in the database
                return new loginResponse("Email not exists", false, null);
            }
        } catch (Exception e) {
            // Log the exception for debugging purposes
            e.printStackTrace();
            // Return a generic error response
            return new loginResponse("An unexpected error occurred", false, null);
        }
    }


    public String generateTokenForUser(Member member) {
        Date now = new Date();
        Date expiryDate = new Date(now.getTime() + 604800000); // 1 week

        // Securely generate a key for HS512
        SecretKey key = Keys.secretKeyFor(SignatureAlgorithm.HS512);

        return Jwts.builder()
                .setSubject(String.valueOf(member.getId()))
                .claim("firstname", member.getFirstname()) // Use claims for additional information
                .claim("email", member.getEmail())
                .setIssuedAt(now)
                .setExpiration(expiryDate)
                .signWith(key)
                .compact();
    }


    public Member updateMemberInstructor(Long memberId, Long instructorId) {
        Optional<Member> memberOptional = memberRepository.findById(String.valueOf(memberId)); // Directly use Long type
        if (memberOptional.isPresent()) {
            Member member = memberOptional.get();
            member.setInstructorId(instructorId);
            return memberRepository.save(member);
        } else {
            throw new EntityNotFoundException("Member not found with ID: " + memberId);
        }
    }


        public Optional<Member> getMemberById(Long memberId) {
            return memberRepository.findById(String.valueOf(memberId));
        }



}
