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

/**
 * Created by employee on 12/6/16.
 */

@RestController
@RequestMapping(value = "/api/employee")

public class EmployeeController {
    @Autowired
    private EmployeeServiceImpl service;

    @ResponseBody
    @RequestMapping(value = "/getAll", method = RequestMethod.GET)
    public List<Employee> getAll() {
        return service.getAll();
    }

    @ResponseBody
    @RequestMapping(value = "/add/name/{name}/lastName/{lastname}/depId/{depId}",
            method = RequestMethod.POST)
    public void add(@PathVariable("name") String name,
                    @PathVariable("lastname") String lastName,
                    @PathVariable("depId") Integer depId) {

        service.add(new Employee(name,lastName,depId));
    }

    @ResponseBody
    @RequestMapping(value = {"/delete/{id}"}, method = RequestMethod.DELETE)
    public void delete(@PathVariable("id") Integer id) {
        service.delete(id);
    }

}