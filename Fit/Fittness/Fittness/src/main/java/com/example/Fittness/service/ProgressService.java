package com.example.Fittness.service;

import com.example.Fittness.data.ProgressData;

import java.util.List;

public interface ProgressService {

        ProgressData addProgress(ProgressData progressData);
        ProgressData getProgressById(Long progressId);
        List<ProgressData> getAllProgressByMemberId(Long memberId);
        ProgressData updateProgress(Long progressId, ProgressData progressData);

}
