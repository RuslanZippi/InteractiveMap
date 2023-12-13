package main.repository;

import main.model.Product;
import main.model.Tool;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ToolRep extends CrudRepository<Tool, Long> {
}
