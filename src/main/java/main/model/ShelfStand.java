package main.model;


import lombok.Data;

import javax.persistence.*;

@Entity
@Data
@Table(name = "shelf_stand")
public class ShelfStand {

    @EmbeddedId
    private ShelfStandS id;

    @ManyToOne
    @MapsId("shelfId")
    private Shelf shelf;


    @ManyToOne
    @MapsId("standId")
    private Stand stand;
}
