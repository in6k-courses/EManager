package employee.services;

import employee.model.Reward;
import employee.repositories.RewardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;

/**
 * Created by employee on 12/13/16.
 */
@Service
@Transactional
public class RewardServiceImpl{

    @Autowired
    RewardRepository rewardRepository;


    public List<Reward> getAll(){
        return rewardRepository.findAll();
    }


    public void add(Reward reward){
        rewardRepository.save(reward);
    }
}
