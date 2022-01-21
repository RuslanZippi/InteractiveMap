package main.model;

import lombok.Data;

import javax.persistence.*;

@Entity
@Data
@Table(name = "shelf_product_count")
public class ShelfProduct {

    @EmbeddedId
    private ShelfProductS id;


    @ManyToOne
    @MapsId("shelf_id")
    private Shelf shelf;


    @ManyToOne
    @MapsId("product_id")
    private Product product;

    @Column
    private int count;
}
