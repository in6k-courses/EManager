package employee.model;

import javax.persistence.*;

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
}
