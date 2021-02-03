package com.davec.ECommerce.repository;

import com.davec.ECommerce.model.OrderProduct;
import com.davec.ECommerce.model.OrderProductPK;
import org.springframework.data.repository.CrudRepository;

public interface OrderProductRepository extends CrudRepository<OrderProduct, OrderProductPK> {
}