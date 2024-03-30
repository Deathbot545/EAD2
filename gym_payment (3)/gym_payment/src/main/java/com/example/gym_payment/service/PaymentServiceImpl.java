package com.example.gym_payment.service;

import com.example.gym_payment.data.PaymentData;
import com.example.gym_payment.entity.Payment;
import com.example.gym_payment.repository.PaymentRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PaymentServiceImpl implements PaymentService {

    private final PaymentRepository paymentRepository;

    @Autowired
    public PaymentServiceImpl(PaymentRepository paymentRepository) {
        this.paymentRepository = paymentRepository;
    }

    @Override
    public String processPayment(PaymentData paymentData) {
        // Create a new Payment entity from PaymentData
        Payment payment = new Payment();
        payment.setMemberId(paymentData.getMemberId());
        payment.setMembershipType(paymentData.getMembershipType());
        payment.setTimePhase(paymentData.getTimePhase());

        // Save the Payment entity
        paymentRepository.save(payment);

        return "Payment processed successfully for member ID: " + paymentData.getMemberId();
    }

    @Override
    public List<Payment> getAllPayments() {
        return paymentRepository.findAll();
    }

    public List<Payment> getPaymentsByMemberId(Long memberId) {
        return paymentRepository.findByMemberId(Math.toIntExact(memberId));
    }

}

