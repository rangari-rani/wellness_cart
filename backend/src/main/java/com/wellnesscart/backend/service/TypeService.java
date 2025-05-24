package com.wellnesscart.backend.service;

import com.wellnesscart.backend.model.TypeResponse;

import java.util.List;

public interface TypeService {
    List<TypeResponse> getAllTypes();
}