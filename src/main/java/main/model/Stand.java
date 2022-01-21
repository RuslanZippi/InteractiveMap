package main.model;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Data
@Table(name = "stand")
public class Stand {

    @Id
    private int id;

    private String name;


}
