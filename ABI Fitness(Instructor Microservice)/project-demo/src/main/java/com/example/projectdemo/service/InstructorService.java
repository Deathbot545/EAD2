package com.example.projectdemo.service;

import com.example.projectdemo.data.Instructor;
import com.example.projectdemo.data.InstructorRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class InstructorService {

    @Autowired
    private InstructorRepository instructorRepository;

    // Get all instructors
    public List<Instructor> getAllInstructors() {
        return instructorRepository.findAll();
    }

    public Optional<Instructor> getInstructorById(Long id) {
        return instructorRepository.findById(Math.toIntExact(id));
    }
    // Get instructor by Name
    public Instructor getInstructorByName(String name) {
        return instructorRepository.findInstructorByName(name);
    }

    // Delete instructor by Name
    public void deleteInstructorByName(String name) {
        instructorRepository.deleteInstructorByName(name);
    }

    // Find instructors by specialization
    public List<Instructor> findInstructorsBySpecialization(String specialization) {
        return instructorRepository.findInstructorsBySpecialization(specialization);
    }

    // Find instructors by age
    public List<Instructor> findInstructorsByAge(int age) {
        return instructorRepository.findInstructorsByAge(age);
    }

    // Find instructors by name and age
    public List<Instructor> findInstructorsByNameAndAge(String name, int age) {
        return instructorRepository.findInstructorsByNameAndAge(name, age);
    }
}
