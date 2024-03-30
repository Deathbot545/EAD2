package com.example.gym_payment.entity;

import jakarta.persistence.*;

@Entity
@Table(name = "Payments")
public class Payment {


        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        @Column(name = "payment_id")
        private int paymentId;

        @Column(name = "member_ID")
        private Long memberId;

        @Column(name = "time_phase")
        private String timePhase;

        @Column(name = "membership_type")
        private String membershipType;



        public Payment() {
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
