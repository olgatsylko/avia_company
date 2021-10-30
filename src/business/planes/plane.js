class Plane {
    constructor (model, tailNumber, rangeOfFlight){
        this.model = model;
        this.tailNumber = tailNumber;
        this.rangeOfFlight = rangeOfFlight
    }
    getModel(){
        return this.model;
    }
    getTailNumber(){
        return this.tailNumber;
    }
    getRangeOfFlight(){
        return this.rangeOfFlight;
    }
}

module.exports = Plane;