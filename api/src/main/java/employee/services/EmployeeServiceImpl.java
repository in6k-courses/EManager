package employee.services;

/**
 * Created by employee on 12/12/16.
 */
import employee.model.Employee;
import employee.repositories.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * Created by employee on 12/6/16.
 */
@Service
@Transactional
public class EmployeeServiceImpl {

    @Autowired
    EmployeeRepository employeeRepository;


    public List<Employee> getAll(){
        return employeeRepository.findAll();
    }


    public void add(Employee employee){
        employeeRepository.save(employee);
    }


    public void delete(Integer id){
        employeeRepository.delete(id);
    }
}