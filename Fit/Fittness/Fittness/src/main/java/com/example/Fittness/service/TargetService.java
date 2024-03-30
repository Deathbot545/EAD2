package com.example.Fittness.service;


import com.example.Fittness.entity.Target;
import com.example.Fittness.repository.TargetRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class TargetService implements TargetServiceImpl{

    private final TargetRepository targetRepository;

    @Autowired
    public TargetService(TargetRepository targetRepository) {
        this.targetRepository = targetRepository;
    }

    public Target saveTarget(Target target) {
        return targetRepository.save(target);
    }

    // Other business logic as needed
}
