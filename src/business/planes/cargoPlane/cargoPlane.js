const Plane = require ("../plane");

class CargoPlane extends Plane {
    constructor(model, tailNumber, rangeOfFlight, carryingCapacity){
        super (model, tailNumber, rangeOfFlight);
        this.carryingCapacity = carryingCapacity;
    }
    getCarringCapacity(){
        return this.carryingCapacity;
    }
}

module.exports = CargoPlane;