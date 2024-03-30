package com.example.Fittness.entity;

import jakarta.persistence.*;

@Entity
public class Target {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private int legDays;
    private int armDays;
    private int chestDays;

    @Column(nullable = false)
    private Long memberId; // Assuming memberId is a Long to match Member's ID type

    // Constructors, Getters, and Setters
    public Target() {}

    public Target(int legDays, int armDays, int chestDays, Long memberId) {
        this.legDays = legDays;
        this.armDays = armDays;
        this.chestDays = chestDays;
        this.memberId = memberId;
    }

    // getters and setters for memberId
    public Long getMemberId() {
        return memberId;
    }

    public void setMemberId(Long memberId) {
        this.memberId = memberId;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public int getLegDays() {
        return legDays;
    }

    public void setLegDays(int legDays) {
        this.legDays = legDays;
    }

    public int getArmDays() {
        return armDays;
    }

    public void setArmDays(int armDays) {
        this.armDays = armDays;
    }

    public int getChestDays() {
        return chestDays;
    }

    public void setChestDays(int chestDays) {
        this.chestDays = chestDays;
    }

}
