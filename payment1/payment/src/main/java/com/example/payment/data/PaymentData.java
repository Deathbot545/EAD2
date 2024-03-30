package com.example.payment.data;

import java.util.Date;

public class PaymentData {
    private int paymentId;
    private Long memberId;
    private String timePhase;
    private String membershipType;
    private byte[] paymentSlip;

    // Constructors, getters, and setters

    public PaymentData() {
    }

    public PaymentData(int paymentId, Long memberId, String timePhase, String membershipType, byte[] paymentSlip) {
        this.paymentId = paymentId;
        this.memberId = memberId;
        this.timePhase = timePhase;
        this.membershipType = membershipType;
        this.paymentSlip = paymentSlip;
    }

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

