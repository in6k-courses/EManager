package employee.services;

import employee.model.Reward;

import java.util.List;

/**
 * Created by employee on 12/13/16.
 */
public interface RewardService {

    public List<Reward> getAll();


    public void add(Reward reward);
}
