package main.repository;

import main.model.Product;
import org.hibernate.annotations.SQLUpdate;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRep  extends CrudRepository<Product, Long> {

    List<Product> findByPosition(String position);

    Product findAllById(int id);

    Product findByName(String name);

    @Modifying
    @Query("UPDATE Product p SET p.count = :count WHERE p.name = :name")
    void update(@Param("count") int count, @Param("name") String name);
}
