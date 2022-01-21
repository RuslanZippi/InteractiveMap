package main.repository;

import main.model.Product;
import main.model.ShelfProduct;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ShelfProductRep extends CrudRepository<ShelfProduct, Long> {

    List<ShelfProduct> findByShelfId(int shelf_Id);
}
