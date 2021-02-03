package com.davec.ECommerce.repository;

import com.davec.ECommerce.model.Order;
import org.springframework.data.repository.CrudRepository;

public interface OrderRepository extends CrudRepository<Order, Long> {
}