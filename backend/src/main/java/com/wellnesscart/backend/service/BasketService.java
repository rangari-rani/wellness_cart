package com.wellnesscart.backend.service;


import com.wellnesscart.backend.entity.Basket;
import com.wellnesscart.backend.model.BasketResponse;

import java.util.List;

public interface BasketService {
    List<BasketResponse> getAllBaskets();
    BasketResponse getBasketById(String basketId);
    void deleteBasketById(String basketId);
    BasketResponse createBasket(Basket basket);
}