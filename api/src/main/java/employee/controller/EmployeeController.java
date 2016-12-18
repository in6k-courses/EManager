package employee.controller;

/**
 * Created by employee on 12/12/16.
 */
import employee.model.Employee;
import employee.services.EmployeeServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(value = "/api/employee/")

public class EmployeeController {
    @Autowired
    private EmployeeServiceImpl service;

    @ResponseBody
    @RequestMapping(value = "", method = RequestMethod.GET)
    public List<Employee> getAll() {

        return service.getAll();
    }

    @ResponseBody
    @RequestMapping(value = {"/{id}"}, method = RequestMethod.GET)
    public Employee get(@PathVariable("id") Integer id) {

        return service.get(id);
    }

    @ResponseBody
    @RequestMapping(value = "", method = RequestMethod.POST)
    public Employee add(@RequestBody Employee employee ) {

        return service.add(employee);
    }

    @ResponseBody
    @RequestMapping(value = {"/{id}"}, method = RequestMethod.DELETE)
    public void delete(@PathVariable("id") Integer id) {

        service.delete(id);
    }

    @ResponseBody
    @RequestMapping(value = "", method = RequestMethod.PUT)
    public Employee update(@RequestBody Employee employee ) {
        return service.update(employee);
    }



}