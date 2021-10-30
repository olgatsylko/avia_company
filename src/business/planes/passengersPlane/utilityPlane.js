const PassengersPlane = require ("./passengersPlane");

class UtilityPlane extends PassengersPlane {
    constructor(model, tailNumber, rangeOfFlight, passengerCapacity, owner){
        super (model, tailNumber, rangeOfFlight, passengerCapacity);
        this.owner = owner;
    }
}
module.exports = UtilityPlane;