package br.com.javaweb.model;

import javax.persistence.Column;
import javax.persistence.Entity;

@Entity
public class State extends BaseModel {

    @Column(length = 2, nullable = false)
    private String uf;

    @Column(length = 50, nullable = false)
    private String name;

    public String getUf() {
        return uf;
    }

    public void setUf(String uf) {
        this.uf = uf;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
