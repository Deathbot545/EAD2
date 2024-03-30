package com.example.Fittness.controller;

import com.example.Fittness.entity.Target;
import com.example.Fittness.service.TargetService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/target")
@CrossOrigin(origins = "http://localhost:3000")
public class TargetController {

    private final TargetService targetService;

    @Autowired
    public TargetController(TargetService targetService) {
        this.targetService = targetService;
    }

    @PostMapping
    public ResponseEntity<Target> setTarget(@RequestBody Target target) {
        System.out.println("Received target: " + target);
        Target savedTarget = targetService.saveTarget(target);
        return ResponseEntity.ok(savedTarget);
    }

    // Other endpoints as needed
}

