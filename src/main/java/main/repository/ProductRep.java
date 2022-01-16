package main.repository;

import main.model.Product;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRep extends CrudRepository<Product, Long> {

    List<Product> findByPosition(String position);
    Product findAllById(int id);
}
