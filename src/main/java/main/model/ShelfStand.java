package main.model;


import lombok.Data;

import javax.persistence.*;

@Entity
@Data
@Table(name = "shelf_product_count")
public class ShelfStand {

    @Id
    private int id;

    @ManyToOne
    @JoinColumn(name = "shelf_id")
    private Shelf shelf;

    @ManyToOne
    @JoinColumn(name = "stand_id")
    private Stand stand;
}
