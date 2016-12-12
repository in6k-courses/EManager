package employee.controller;

/**
 * Created by employee on 12/12/16.
 */
import employee.model.Employee;
import employee.services.EmployeeServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * Created by employee on 12/6/16.
 */
@RestController
@RequestMapping(value = "/api/employees")

public class EmployeeController {
    @Autowired
    private EmployeeServiceImpl service;

    @RequestMapping(value = "/", method = RequestMethod.GET)
    public List<Employee> getAll() {
        return service.getAll();
    }

    @RequestMapping(value = "/add/name/{name}/lastname/{lastname}/depId/{depId}", method = RequestMethod.GET)
    public void add(@PathVariable ("name") String name,
                    @PathVariable ("lastName") String lastName,
                    @PathVariable ("depId") Integer depId) {
    }
}