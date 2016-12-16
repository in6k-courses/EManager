package employee.services;

import employee.model.Department;
import employee.model.Employee;
import employee.model.Reward;
import employee.repositories.DepartmentRepository;
import employee.repositories.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.criteria.CriteriaBuilder;
import java.util.*;
import java.util.stream.Collectors;

/**
 * Created by employee on 12/14/16.
 */
@Service
@Transactional
public class DepartmentServiceImpl {

    @Autowired
    DepartmentRepository departmentRepository;

    @Autowired
    EmployeeRepository employeeRepository;

    public List<Department> getAll(){
        return departmentRepository.findAll();
    }


    public Department add(Department reward){

        return departmentRepository.save(reward);
    }

    public List<Department> getTopRewarded(){

    List<Department> res = new ArrayList<>();

    List<Department> allDeps =  getAll();
    List<Employee> allEmps =  employeeRepository.findAll();
        for (Department d:
             allDeps) {
            System.out.println("d"+d);
        }

        for (Employee e:
                allEmps) {
            System.out.println("e"+e);
        }

     for (Department d: allDeps) {
        for (Employee e: allEmps) {
            if (e.getDepId() == d.getId()) {
                d.addEmp(e);
           }

        }
      }

    for(Department d: allDeps){
        List<Employee> list = new ArrayList<>();
        list = d.getEmp();
        for(Employee employee: list){
            d.setRewCount(1);
      }
    }

    ArrayList<Integer> listCount = new ArrayList<Integer>();

    for(Department d: allDeps){
        listCount.add(d.getRewCount());

    }

    Collections.sort(listCount);

    listCount.forEach(e -> System.out.println(e));

    for(Department d: allDeps){

        if(d.getRewCount() == listCount.get(listCount.size()-1)){
            if(!res.contains(d)){res.add(d);}

        }
        if(d.getRewCount() == listCount.get(listCount.size()-2)){
            if(!res.contains(d)){res.add(d);}
        }
        if(d.getRewCount() == listCount.get(listCount.size()-3)){
            if(!res.contains(d)){res.add(d);}
        }
    }

    return res;}
}
