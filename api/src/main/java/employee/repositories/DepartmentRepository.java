package employee.repositories;

import employee.model.Department;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Created by employee on 12/14/16.
 */
public interface DepartmentRepository extends JpaRepository<Department, Integer> {
}
