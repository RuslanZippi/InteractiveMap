package main.model;

import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Entity
@Data
@Table(name = "shelf")
public class Shelf {

    @Id
    private int id;

    private String name;

    @ManyToOne
    private Stand stand;

    @ManyToMany
    @JoinTable(name = "shelf_product_count",
    joinColumns = @JoinColumn(name = "shelf_id"),
    inverseJoinColumns = @JoinColumn(name = "product_id"))
    private List<Product> productList;

}
