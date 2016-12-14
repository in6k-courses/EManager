package employee.services;

import employee.model.Department;
import employee.repositories.DepartmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * Created by employee on 12/14/16.
 */
@Service
@Transactional
public class DepartmentServiceImpl {

    @Autowired
    DepartmentRepository rewardRepository;

    public List<Department> getAll(){
        return rewardRepository.findAll();
    }


    public Department add(Department reward){

        return rewardRepository.save(reward);
    }
}
