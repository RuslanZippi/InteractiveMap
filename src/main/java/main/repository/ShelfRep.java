package main.repository;

import main.model.Shelf;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ShelfRep extends CrudRepository<Shelf, Long> {
}
