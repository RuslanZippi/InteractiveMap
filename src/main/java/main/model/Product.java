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

    @OneToMany(mappedBy = "product")
    private List<ShelfProduct> shelfProductList;
}
