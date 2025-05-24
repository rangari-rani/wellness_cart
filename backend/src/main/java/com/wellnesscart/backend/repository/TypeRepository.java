package com.wellnesscart.backend.repository;


import com.wellnesscart.backend.entity.Type;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface TypeRepository extends JpaRepository<Type, Integer> {
}
