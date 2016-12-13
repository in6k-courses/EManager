package employee.controller;

import employee.model.Reward;
import employee.services.RewardServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Created by employee on 12/13/16.
 */

@RestController
@RequestMapping(value = "/api/reward")

public class RewardController {

    @Autowired
    RewardServiceImpl service;


    @ResponseBody
    @RequestMapping(value = "/getAll", method = RequestMethod.GET)
    public List<Reward> getAll() {

        return service.getAll();
    }


    @ResponseBody
    @RequestMapping(value = "/add/name/{name}",       method = RequestMethod.POST)
    public void add(@PathVariable("name") String name) {

        service.add(new Reward(name));
    }

}

