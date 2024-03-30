package com.example.Fittness.repository;

import com.example.Fittness.entity.Progress;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProgressRepository extends JpaRepository<Progress, Long> {
    // Custom query to find all progress entries for a specific member ID
    List<Progress> findAllByMemberId(Long memberId);

    // Custom query to find all progress entries where the gym working hours exceed a certain threshold
    @Query("SELECT p FROM Progress p WHERE p.gymWorkingHours > :threshold")
    List<Progress> findAllByGymWorkingHoursGreaterThan(Float threshold);

    // Custom query to find the latest progress entry for a specific member ID
    @Query("SELECT p FROM Progress p WHERE p.memberId = :memberId ORDER BY p.date DESC")
    Progress findLatestProgressByMemberId(Long memberId);
}
