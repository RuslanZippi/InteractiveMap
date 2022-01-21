package main.repository;

import main.model.Stand;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StandRep extends CrudRepository<Stand,Long> {
}
