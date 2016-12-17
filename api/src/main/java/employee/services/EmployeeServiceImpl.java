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

@Service
@Transactional
public class EmployeeServiceImpl {

    @Autowired
    EmployeeRepository employeeRepository;

    public List<Employee> getAll(){
        return employeeRepository.findAll();
    }

    public Employee get (Integer id){ return employeeRepository.findOne(id);}

    public Employee add(Employee employee){
        return employeeRepository.save(employee);
    }

    public Employee update(Employee employee){ return employeeRepository.saveAndFlush(employee);}

    public void delete(Integer id){
        employeeRepository.delete(id);
    }



}