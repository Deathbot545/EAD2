package com.example.payment.controller;

import com.example.payment.service.PaymentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/payments")
@CrossOrigin(origins = "http://localhost:3000")
public class PaymentController {

    @Autowired
    private PaymentService paymentService;

    @PostMapping("/process")
    public String processPayment(@RequestParam Long memberId,
                                 @RequestParam String membershipType,
                                 @RequestParam String timePhase,
                                 @RequestParam("paymentSlip") MultipartFile paymentSlip) {
        return paymentService.processPayment(memberId, membershipType, timePhase, paymentSlip);
    }

}
