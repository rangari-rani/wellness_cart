package com.wellnesscart.backend.model;

import com.wellnesscart.backend.entity.OrderAggregate.OrderStatus;
import com.wellnesscart.backend.entity.OrderAggregate.ShippingAddress;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Data
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class OrderResponse {
    private Integer id;
    private String basketId;
    private ShippingAddress shippingAddress;
    private Long subTotal;
    private Long deliveryFee;
    private Double total;
    private LocalDateTime orderDate;
    private OrderStatus orderStatus;
}