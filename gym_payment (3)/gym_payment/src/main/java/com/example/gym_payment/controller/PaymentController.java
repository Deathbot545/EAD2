package com.example.gym_payment.controller;

import com.example.gym_payment.data.PaymentData;
import com.example.gym_payment.entity.Payment;
import com.example.gym_payment.service.PaymentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/payments")
@CrossOrigin(origins = "http://localhost:3000")
public class PaymentController {

    @Autowired
    private PaymentService paymentService;

    @PostMapping("/process")
    public String processPayment(@RequestBody PaymentData paymentData) {
        return paymentService.processPayment(paymentData);
    }

    @GetMapping("/member/{memberId}")
    public ResponseEntity<List<Payment>> getPaymentsByMemberId(@PathVariable Long memberId) {
        List<Payment> payments = paymentService.getPaymentsByMemberId(memberId);
        if (payments.isEmpty()) {
            return ResponseEntity.notFound().build();
        } else {
            return ResponseEntity.ok(payments);
        }
    }

    @GetMapping("/list")
    public List<Payment> getAllPayments() {
        return paymentService.getAllPayments();
    }
}
