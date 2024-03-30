package com.example.projectdemo.controller;

import com.example.projectdemo.data.Instructor;
import com.example.projectdemo.service.InstructorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/instructors")
@CrossOrigin(origins = "http://localhost:3000")
public class InstructorController {

    @Autowired
    private InstructorService instructorService;

    // Get all instructors
    @GetMapping
    public List<Instructor> getAllInstructors() {
        return instructorService.getAllInstructors();
    }

    // Get instructor by name
    @GetMapping("/name/{name}")
    public Instructor getInstructorByName(@PathVariable String name) {
        return instructorService.getInstructorByName(name);
    }

    // Delete instructor by name
    @DeleteMapping("/delete/{name}")
    public void deleteInstructorByName(@PathVariable String name) {
        instructorService.deleteInstructorByName(name);
    }

    // Find instructors by specialization
    @GetMapping("/specialization/{specialization}")
    public List<Instructor> findInstructorsBySpecialization(@PathVariable String specialization) {
        return instructorService.findInstructorsBySpecialization(specialization);
    }

    // Find instructors by age
    @GetMapping("/age/{age}")
    public List<Instructor> findInstructorsByAge(@PathVariable int age) {
        return instructorService.findInstructorsByAge(age);
    }

    // Find instructors by name and age
    @GetMapping("/search")
    public List<Instructor> findInstructorsByNameAndAge(@RequestParam String name, @RequestParam int age) {
        return instructorService.findInstructorsByNameAndAge(name, age);
    }
}