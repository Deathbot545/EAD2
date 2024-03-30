package com.example.projectdemo.data;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface InstructorRepository extends JpaRepository<Instructor, Integer> {

    // Find instructor by name
    Instructor findInstructorByName(String name);

    // Delete instructor by name
    void deleteInstructorByName(String name);

    // Find instructors by specialization
    List<Instructor> findInstructorsBySpecialization(String specialization);

    // Find instructors by age
    List<Instructor> findInstructorsByAge(int age);

    // Find instructors by name and age
    List<Instructor> findInstructorsByNameAndAge(String name, int age);


}
