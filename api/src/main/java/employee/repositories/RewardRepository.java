package employee.repositories;

import employee.model.Reward;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Created by employee on 12/13/16.
 */
public interface RewardRepository extends JpaRepository<Reward, Integer> {

}
