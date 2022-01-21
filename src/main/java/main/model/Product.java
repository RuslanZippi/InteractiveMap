package main.model;

import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Entity
@Data
@Table(name = "product")
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    private String name;

    private int count;

    private String position;

    private String description;

    @Column(name = "url_photo")
    private String urlPhoto;

    @ManyToMany
    private List<Storage> storageList;

    @ManyToMany
    @JoinTable(name = "shelf_product_count",
    joinColumns = @JoinColumn(name = "product_id"),
    inverseJoinColumns = @JoinColumn(name = "shelf_id"))
    private List<Shelf> shelfList;
}
