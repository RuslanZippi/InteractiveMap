CREATE TABLE storage
(
    id   INT          NOT NULL,
    name VARCHAR(255) NULL,
    PRIMARY KEY (id)
);
CREATE TABLE shelf_stand
(
    id       INT NOT NULL,
    stand_id INTEGER,
    shelf_id INTEGER,
    PRIMARY KEY (id),
    FOREIGN KEY (stand_id) REFERENCES stand (id),
    FOREIGN KEY (shelf_id) REFERENCES shelf (id)
);

CREATE TABLE shelf_product_count
(
    id         INT NOT NULL,
    shelf_id   INTEGER,
    product_id INTEGER,
    count      INTEGER,
    PRIMARY KEY (id),
    FOREIGN KEY (shelf_id) REFERENCES shelf (id),
    FOREIGN KEY (product_id) REFERENCES product (id)
);
CREATE TABLE shelf_product
(
    shelf_id   INTEGER,
    product_id INTEGER,
    FOREIGN KEY (shelf_id) REFERENCES shelf (id),
    FOREIGN KEY (product_id) REFERENCES product (id)
);