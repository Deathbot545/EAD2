package com.example.payment.service;

import com.example.payment.entity.Payment;
import com.example.payment.repository.PaymentRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.lang.reflect.Member;

@Service // Make sure to annotate with @Service to mark it as a Spring-managed bean
public class PaymentServiceImpl implements PaymentService {
    private final PaymentRepository paymentRepository;
    @Autowired
    public PaymentServiceImpl(PaymentRepository paymentRepository) {
        this.paymentRepository = paymentRepository;

    }

    @Override // This annotation indicates that this method overrides the method in the interface
    @Transactional
    public String processPayment(Long memberId, String membershipType, String timePhase, MultipartFile paymentSlip) {
        try {
            // Process payment
            Payment payment = new Payment();
            payment.setMemberId(memberId);
            payment.setMembershipType(membershipType);
            payment.setTimePhase(timePhase);
            payment.setPaymentSlip(paymentSlip.getBytes()); // Store payment slip as byte array
            paymentRepository.save(payment);

            return "Payment processed successfully for member ID: " + memberId;
        } catch (IOException e) {
            e.printStackTrace();
            return "Failed to process payment: " + e.getMessage();
        }
    }

}
