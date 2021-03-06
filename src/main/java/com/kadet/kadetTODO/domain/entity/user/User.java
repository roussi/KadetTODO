package com.kadet.kadetTODO.domain.entity.user;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * @author Alex Soroka
 */
@Entity
@Table(name = "user")
public class User {

    @Id
    @GeneratedValue
    private Long id;

    private String username;
    private String password;

    private String name;
    private String surname;

    public Long getId () {
        return id;
    }

    public void setId (Long id) {
        this.id = id;
    }

    public String getUsername () {
        return username;
    }

    public void setUsername (String username) {
        this.username = username;
    }

    public String getPassword () {
        return password;
    }

    public void setPassword (String password) {
        this.password = password;
    }

    public String getName () {
        return name;
    }

    public void setName (String name) {
        this.name = name;
    }

    public String getSurname () {
        return surname;
    }

    public void setSurname (String surname) {
        this.surname = surname;
    }
}
