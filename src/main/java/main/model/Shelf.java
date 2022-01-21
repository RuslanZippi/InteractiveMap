package main.model;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Data
@Table(name = "shelf")
public class Shelf {

    @Id
    private int id;

    private String name;

}
