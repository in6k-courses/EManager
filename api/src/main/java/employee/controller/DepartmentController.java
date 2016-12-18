package employee.controller;

import employee.model.Department;
import employee.services.DepartmentServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Set;

/**
 * Created by employee on 12/14/16.
 */

@RestController
@RequestMapping(value = "/api/department/")
public class DepartmentController {

    @Autowired
    DepartmentServiceImpl service;


    @ResponseBody
    @RequestMapping(value = "", method = RequestMethod.GET)
    public List<Department> getAll() {

        return service.getAll();
    }

    @ResponseBody
    @RequestMapping(value = "best", method = RequestMethod.GET)
    public List<Department> getTop() {

        return service.getTopRewarded();
    }


    @ResponseBody
    @RequestMapping(value = "", method = RequestMethod.POST)
    public Department add(@RequestBody Department reward) {

        return service.add(reward);
    }


}
