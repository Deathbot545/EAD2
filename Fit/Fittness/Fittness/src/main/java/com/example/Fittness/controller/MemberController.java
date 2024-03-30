package com.example.Fittness.controller;

import com.example.Fittness.data.LoginData;
import com.example.Fittness.data.ProgressData;
import com.example.Fittness.response.loginResponse;
import com.example.Fittness.service.MemberService;
import com.example.Fittness.data.MemberData;
import com.example.Fittness.service.ProgressService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/member")
@CrossOrigin(origins = "http://localhost:3000")
public class MemberController {

    @Autowired
    private MemberService memberService;
    @Autowired
    private ProgressService progressService;

    @PostMapping("/save")
    public ResponseEntity<String> addMember(@RequestBody MemberData memberData) {
        String result = memberService.addMember(memberData);
        return ResponseEntity.ok(result); // Or use appropriate status code
    }

    @PostMapping("/login1")
    public ResponseEntity<loginResponse> loginMember(@RequestBody LoginData loginData) {
        loginResponse response = memberService.loginMember(loginData);
        return ResponseEntity.ok(response);
    }
    @PostMapping("/progress")
    public ResponseEntity<ProgressData> addProgress(@RequestBody ProgressData progressData) {
        ProgressData addedProgress = progressService.addProgress(progressData);
        return ResponseEntity.ok(addedProgress);
    }

    @GetMapping("/progress/{progressId}")
    public ResponseEntity<ProgressData> getProgressById(@PathVariable Long progressId) {
        ProgressData progressData = progressService.getProgressById(progressId);
        if (progressData != null) {
            return ResponseEntity.ok(progressData);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @GetMapping("/progress/member/{memberId}")
    public ResponseEntity<List<ProgressData>> getAllProgressByMemberId(@PathVariable Long memberId) {
        List<ProgressData> progressList = progressService.getAllProgressByMemberId(memberId);
        return ResponseEntity.ok(progressList);
    }

    @PutMapping("/progress/{progressId}")
    public ResponseEntity<ProgressData> updateProgress(@PathVariable Long progressId, @RequestBody ProgressData progressData) {
        ProgressData updatedProgress = progressService.updateProgress(progressId, progressData);
        if (updatedProgress != null) {
            return ResponseEntity.ok(updatedProgress);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

}
