package main.repository;

import main.model.Product;
import org.hibernate.annotations.SQLUpdate;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.util.List;

@Repository
public interface ProductRep  extends CrudRepository<Product, Long>{

    List<Product> findByPosition(String position);

    List<Product> findAll();

    Product findByName(String name);

}
