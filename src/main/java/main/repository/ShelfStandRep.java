package main.repository;

import main.model.ShelfStand;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ShelfStandRep extends CrudRepository<ShelfStand,Long> {
}
