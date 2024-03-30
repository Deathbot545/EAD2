package com.example.Fittness.entity;

import jakarta.persistence.*;

import java.sql.Date;


@Entity
@Table(name = "member_progress")
public class Progress {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "member_Id")
    private Long memberId;

    @Column(name = "date")
    private java.sql.Date date;

    @Column(name = "calories")
    private Integer calories;


    @Column(name = "gym_working_hours")
    private Float gymWorkingHours;

    @Column(name = "day_specification", length = 255)
    private String daySpecification;

    @Column(name = "drunk_water")
    private Boolean drunkWater;

    @Column(name = "supplements_taken")
    private Boolean supplementsTaken;

    @Column(name = "unusual_pain")
    private Boolean unusualPain;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

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
