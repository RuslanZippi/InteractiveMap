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

    @OneToMany(mappedBy = "shelf")
    private List<ShelfStand> shelfStands;

    @OneToMany(mappedBy = "shelf")
    private List<ShelfProduct> shelfProductList;
}
