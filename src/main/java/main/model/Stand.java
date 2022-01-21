package main.model;

import lombok.Data;

import javax.persistence.*;
import java.util.List;

@Entity
@Data
@Table(name = "stand")
public class Stand {

    @Id
    private int id;

    private String name;

    @OneToMany(mappedBy = "stand")
    private List<ShelfStand> shelfStands;

}
