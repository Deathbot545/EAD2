package com.example.gym_payment.data;

public class PaymentData {
    private int paymentId;
    private Long memberId;
    private String timePhase;
    private String membershipType;


    // Constructors, getters, and setters

    public PaymentData() {
    }

    public PaymentData(int paymentId, Long memberId, String timePhase, String membershipType) {
        this.paymentId = paymentId;
        this.memberId = memberId;
        this.timePhase = timePhase;
        this.membershipType = membershipType;

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


}
