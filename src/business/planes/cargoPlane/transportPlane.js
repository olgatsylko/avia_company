const CargoPlane = require ("./cargoPlane");

class TransportPlane extends CargoPlane {
    constructor(model, tailNumber, rangeOfFlight, carryingCapacity, ramp){
        super (model, tailNumber, rangeOfFlight, carryingCapacity);
        this.ramp = ramp;
    }
}
module.exports = TransportPlane;