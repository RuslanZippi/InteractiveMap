package main.model;

import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Entity
@Data
@Table(name = "storage")
public class Storage {

    @Id
    private int id;

    private String name;

    @ManyToMany
    private List<Product> productList;
}
