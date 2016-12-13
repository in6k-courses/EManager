package employee.model;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

/**
 * Created by employee on 12/6/16.
 */
@Entity
@Table(name = "employees", catalog = "employeemanager")
public class Employee {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", unique = true, nullable = false)
    Integer id;

    @Column(name = "name")
    String name;

    @Column(name = "lastName")
    String lastName;

    @Column(name = "depId")
    Integer depId;

    @ManyToMany(cascade = {CascadeType.PERSIST, CascadeType.MERGE})
    @JoinTable(name = "employees_rewards",
            joinColumns = {
                    @JoinColumn(name = "employee_id",
                                referencedColumnName = "id" )
            },
            inverseJoinColumns = {
                    @JoinColumn(name = "reward_id",
                                referencedColumnName = "id" )
            }
    )
    Set<Reward> rewards = new HashSet<>();

    public Employee() {}

    public Employee(String name, String lastName, Integer depId) {
        this.name = name;
        this.lastName = lastName;
        this.depId = depId;
    }


    public Integer getDepId() {
        return depId;
    }

    public void setDepId(Integer depId) {
        this.depId = depId;
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public Set<Reward> getRewards() {
        return rewards;
    }

    public void setRewards(Set<Reward> rewards) {
        this.rewards = rewards;
    }
}
