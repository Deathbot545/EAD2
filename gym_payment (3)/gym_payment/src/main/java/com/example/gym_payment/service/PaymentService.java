package com.example.gym_payment.service;

import com.example.gym_payment.data.PaymentData;
import com.example.gym_payment.entity.Payment;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

public interface PaymentService {


    String processPayment(PaymentData paymentData);

    List<Payment> getAllPayments();

    public List<Payment> getPaymentsByMemberId(Long memberId);
}


