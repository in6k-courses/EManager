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
@RequestMapping(value = "/api/reward/")
public class RewardController {

    @Autowired
    RewardServiceImpl service;


    @ResponseBody
    @RequestMapping(value = "", method = RequestMethod.GET)
    public List<Reward> getAll() {

        return service.getAll();
    }


    @ResponseBody
    @RequestMapping(value = "", method = RequestMethod.POST)
    public Reward add(@RequestBody Reward reward) {

        return service.add(reward);
    }

}

