class ScoreStat {
    constructor( madeShots = 0, totalShots = 0) {
        this.made = madeShots;
        this.total = totalShots;
    }

    addMadeShot() {
        this.made++;
        this.total++;
    }

    addMissedShot() {
        this.total++;
    }

    getPercentage() {
        return this.total === 0 ? '-' : this.made / this.total * 100;
    }

    toString() {
        return this.total === 0 ? '-' : this.made + '/' +  this.total;
    }
}

export default ScoreStat;