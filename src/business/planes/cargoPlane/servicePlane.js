const CargoPlane = require ("./cargoPlane");

class ServicePlane extends CargoPlane {
    constructor(model, tailNumber, rangeOfFlight, carryingCapacity, purpose){
        super (model, tailNumber, rangeOfFlight, carryingCapacity);
        this.purpose = purpose;
    }
}
module.exports = ServicePlane;
