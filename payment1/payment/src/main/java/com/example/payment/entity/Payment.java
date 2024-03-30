package com.example.payment.entity;

import jakarta.persistence.*;



@Entity
@Table(name = "Payments")
public class Payment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "payment_id")
    private int paymentId;

    @Column(name = "member_id")
    private Long memberId;

    @Column(name = "time_phase")
    private String timePhase;

    @Column(name = "membership_type")
    private String membershipType;

    @Lob
    @Column(name = "payment_slip")
    private byte[] paymentSlip;

    // Constructors, getters, and setters

    // Constructor
    public Payment() {
    }

    // Getters and setters
    public int getPaymentId() {
        return paymentId;
    }

    public void setPaymentId(int paymentId) {
        this.paymentId = paymentId;
    }

    public Long getMemberId() {
        return memberId;
    }

    public void setMemberId(Long memberId) {
        this.memberId = memberId;
    }

    public String getTimePhase() {
        return timePhase;
    }

    public void setTimePhase(String timePhase) {
        this.timePhase = timePhase;
    }

    public String getMembershipType() {
        return membershipType;
    }

    public void setMembershipType(String membershipType) {
        this.membershipType = membershipType;
    }

    public byte[] getPaymentSlip() {
        return paymentSlip;
    }

    public void setPaymentSlip(byte[] paymentSlip) {
        this.paymentSlip = paymentSlip;
    }
}
