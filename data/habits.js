
// add this import at the top
import fetch from 'node-fetch';

const HabitService = {

  getHabits() {
    return fetch('', options)
      .then(res => res.json())
      .then(res => {
        return habits
      });
  },
};

export { HabitService };
