package com.example.Fittness.repository;

import com.example.Fittness.entity.Member;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;
import java.util.Optional;


@EnableJpaRepositories
@Repository
public interface MemberRepository extends JpaRepository<Member,String> {

    Optional<Member> findOneByEmailAndPassword(String email, String password);
    Member findByEmail(String email) ;

}
