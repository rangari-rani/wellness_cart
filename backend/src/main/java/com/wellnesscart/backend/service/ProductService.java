package com.wellnesscart.backend.service;

import com.wellnesscart.backend.model.ProductResponse;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;

public interface ProductService {
    ProductResponse getProductById(Integer productId);
    Page<ProductResponse> getProducts(Pageable pageable, Integer brandId, Integer typeId, String keyword);
}

