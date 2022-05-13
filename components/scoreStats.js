class ScoreStat  {
    constructor( madeShots = 0, attempts = 0) {
        this.made = madeShots;
        this.missed = 0;
        this.total = this.made + this.missed;
    }

    addMadeShot() {
        this.made++;
        this.total++;
    }

    addMissedShot() {
        this.total++;
    }

    setMade( shots ) {
        this.made = parseInt(shots);
        this.updateTotal();
    }

    setMissed( missed ) {
        this.missed = parseInt(missed);
        this.updateTotal();
    }

    updateTotal() {
        console.log(this.missed);
        this.total = this.made + this.missed;
    }

    getPercentage() {
        return this.total === 0 ? '-' : this.made / this.total * 100;
    }

    toString() {
        return this.total === 0 ? '-' : this.made + '/' +  this.total;
    }
}

export default ScoreStat;