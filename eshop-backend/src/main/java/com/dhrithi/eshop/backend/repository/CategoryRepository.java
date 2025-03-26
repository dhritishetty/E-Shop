package com.dhrithi.eshop.backend.repository;

import com.dhrithi.eshop.backend.entity.Category;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CategoryRepository extends JpaRepository<Category, Long> {
}
