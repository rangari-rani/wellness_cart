package com.wellnesscart.backend.repository;

import com.wellnesscart.backend.entity.Basket;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface BasketRepository extends CrudRepository<Basket, String> {
}
