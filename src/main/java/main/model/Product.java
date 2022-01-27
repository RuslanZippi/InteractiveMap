package main.model;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.util.List;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "product")
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
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
