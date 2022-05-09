import ScoreStat from "./scoreStats";
import PointsStat from "./pointsStat";

class Stats {
    constructor() {
        this.freeThrows = new ScoreStat();
        this.score2 = new ScoreStat();
        this.score3 = new ScoreStat();
        this.points = new PointsStat();
    }

    updateStat(statValue, statName, statType) {
        if(statType === 'points') {
            let scoreStat;
            switch (statName) {
                case 'free-throw':
                    scoreStat = this.freeThrows;
                    break;
                case '3points':
                    scoreStat = this.score3;
                    break;
                default:
                    scoreStat = this.score2
            }

            if(statValue === 0) {
                scoreStat.addMissedShot();
            } else {
                scoreStat.addMadeShot();
                this.points.addPoints(statValue);
            }
        }
    }

    getStat(statName) {
        switch(statName) {
            case 'score3':
                return this.score3.toString();
            case 'score2':
                return this.score2.toString();
            case 'free-throw':
                return this.freeThrows.toString();
            case 'points':
                return this.points.toString();
        }
    }

    getStatPercentage(statName) {
        switch(statName) {
            case 'score3':
                return this.score3.getPercentage();
            case 'score2':
                return this.score2.getPercentage();
            case 'free-throw':
                return this.freeThrows.getPercentage();
        }
    }
}

export default Stats;