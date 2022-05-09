import Stats from "./stats";
import stats from "./stats";

class Player {
    constructor(id, name, number, stats = []) {
        this.id = id;
        this.name = name;
        this.number = number;
        this.stats = new Stats();
    }

    updateStat(statValue, statName, statType) {
        this.stats.updateStat(statValue, statName, statType);
    }
}

export default Player;