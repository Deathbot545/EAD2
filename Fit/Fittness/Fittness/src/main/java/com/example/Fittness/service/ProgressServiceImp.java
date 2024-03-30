package com.example.Fittness.service;

import com.example.Fittness.data.ProgressData;
import com.example.Fittness.entity.Progress;
import com.example.Fittness.repository.ProgressRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class ProgressServiceImp implements ProgressService {

    private final ProgressRepository progressRepository;

    @Autowired
    public ProgressServiceImp(ProgressRepository progressRepository) {
        this.progressRepository = progressRepository;
    }

    @Override
    public ProgressData addProgress(ProgressData progressData) {
        try {
            Progress progress = new Progress();
            progress.setMemberId(progressData.getMemberId());
            progress.setDate(progressData.getDate());
            progress.setCalories(progressData.getCalories());
            progress.setGymWorkingHours(progressData.getGymWorkingHours());
            progress.setDaySpecification(progressData.getDaySpecification());
            progress.setDrunkWater(progressData.getDrunkWater());
            progress.setSupplementsTaken(progressData.getSupplementsTaken());
            progress.setUnusualPain(progressData.getUnusualPain());

            progressRepository.save(progress);
            return progressData; // Return the same ProgressData object
        } catch (Exception e) {
            e.printStackTrace();
            return null;
        }
    }

    @Override
    public ProgressData getProgressById(Long progressId) {
        Optional<Progress> optionalProgress = progressRepository.findById(progressId);
        if (optionalProgress.isPresent()) {
            Progress progress = optionalProgress.get();
            return new ProgressData(
                    progress.getMemberId(),
                    progress.getDate(),
                    progress.getCalories(),
                    progress.getGymWorkingHours(),
                    progress.getDaySpecification(),
                    progress.getDrunkWater(),
                    progress.getSupplementsTaken(),
                    progress.getUnusualPain()
            );
        } else {
            return null;
        }
    }

    @Override
    public List<ProgressData> getAllProgressByMemberId(Long memberId) {
        List<Progress> progressList = progressRepository.findAllByMemberId(memberId);
        List<ProgressData> progressDataList = new ArrayList<>();
        for (Progress progress : progressList) {
            ProgressData progressData = new ProgressData(
                    progress.getMemberId(),
                    progress.getDate(),
                    progress.getCalories(),
                    progress.getGymWorkingHours(),
                    progress.getDaySpecification(),
                    progress.getDrunkWater(),
                    progress.getSupplementsTaken(),
                    progress.getUnusualPain()
            );
            progressDataList.add(progressData);
        }
        return progressDataList;
    }

    @Override
    public ProgressData updateProgress(Long progressId, ProgressData progressData) {
        Optional<Progress> optionalProgress = progressRepository.findById(progressId);
        if (optionalProgress.isPresent()) {
            Progress progress = optionalProgress.get();
            progress.setMemberId(progressData.getMemberId());
            progress.setDate(progressData.getDate());
            progress.setCalories(progressData.getCalories());
            progress.setGymWorkingHours(progressData.getGymWorkingHours());
            progress.setDaySpecification(progressData.getDaySpecification());
            progress.setDrunkWater(progressData.getDrunkWater());
            progress.setSupplementsTaken(progressData.getSupplementsTaken());
            progress.setUnusualPain(progressData.getUnusualPain());
            progressRepository.save(progress);
            return progressData;
        } else {
            return null;
        }
    }
}

