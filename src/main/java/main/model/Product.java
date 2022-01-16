package main.model;

import lombok.Data;

import javax.persistence.*;

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
}
