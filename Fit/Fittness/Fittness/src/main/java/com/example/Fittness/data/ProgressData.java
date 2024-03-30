package com.example.Fittness.data;

import java.sql.Date;

public class ProgressData {

    private Long memberId;
    private Date date;
    private Integer calories;
    private Float gymWorkingHours;
    private String daySpecification;
    private Boolean drunkWater;
    private Boolean supplementsTaken;
    private Boolean unusualPain;


    public ProgressData(Long memberId, Date date, Integer calories, Float gymWorkingHours, String daySpecification, Boolean drunkWater, Boolean supplementsTaken, Boolean unusualPain) {
        this.memberId = memberId;
        this.date = date;
        this.calories = calories;
        this.gymWorkingHours = gymWorkingHours;
        this.daySpecification = daySpecification;
        this.drunkWater = drunkWater;
        this.supplementsTaken = supplementsTaken;
        this.unusualPain = unusualPain;
    }


    // Getters and setters
    public Long getMemberId() {
        return memberId;
    }

    public void setMemberId(Long memberId) {
        this.memberId = memberId;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public Integer getCalories() {
        return calories;
    }

    public void setCalories(Integer calories) {
        this.calories = calories;
    }

    public Float getGymWorkingHours() {
        return gymWorkingHours;
    }

    public void setGymWorkingHours(Float gymWorkingHours) {
        this.gymWorkingHours = gymWorkingHours;
    }

    public String getDaySpecification() {
        return daySpecification;
    }

    public void setDaySpecification(String daySpecification) {
        this.daySpecification = daySpecification;
    }

    public Boolean getDrunkWater() {
        return drunkWater;
    }

    public void setDrunkWater(Boolean drunkWater) {
        this.drunkWater = drunkWater;
    }

    public Boolean getSupplementsTaken() {
        return supplementsTaken;
    }

    public void setSupplementsTaken(Boolean supplementsTaken) {
        this.supplementsTaken = supplementsTaken;
    }

    public Boolean getUnusualPain() {
        return unusualPain;
    }

    public void setUnusualPain(Boolean unusualPain) {
        this.unusualPain = unusualPain;
    }


}

