package com.example.payment.service;

import org.springframework.web.multipart.MultipartFile;

public interface PaymentService {
    String processPayment(Long memberId, String membershipType, String timePhase, MultipartFile paymentSlip);
}
