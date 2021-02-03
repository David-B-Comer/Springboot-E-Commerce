package com.davec.ECommerce.repository;

import com.davec.ECommerce.model.Product;
import org.springframework.data.repository.CrudRepository;

public interface ProductRepository extends CrudRepository<Product, Long> {
}
