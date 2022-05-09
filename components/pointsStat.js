class PointsStat {
    constructor( points = 0) {
        this.points = points;
    }

    addPoints( noOfPoints) {
        this.points += noOfPoints;
    }

    toString() {
        return this.points;
    }
}

export default PointsStat;