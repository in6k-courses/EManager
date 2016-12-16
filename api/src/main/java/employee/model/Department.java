package employee.model;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by employee on 12/13/16.
 */
@Entity
@Table(name = "departments", catalog = "employeemanager")
public class Department {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", unique = true, nullable = false)
    Integer id;

    @Column(name = "name")
    String name;

    @Transient
    List<Employee> employees = new ArrayList<>();
    @Transient
    int rewCounter;

    public Integer getRewCount() {
        return rewCounter;
    }
    public void setRewCount(int a) {
        this.rewCounter = this.rewCounter+a;
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

    //!!!!!!!!!!!!!!!!!! not bean get/set
    public void addEmp(Employee employee){
        employees.add(employee);
    }

    public List<Employee> getEmp(){
        return employees;
    }



}
