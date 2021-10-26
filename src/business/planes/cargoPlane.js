class CargoPlane extends Plane {
    constructor(model, tailNumber, rangeOfFlight, carryingCapacity){
        super (model, tailNumber, rangeOfFlight);
        this.carryingCapacity = carryingCapacity;
    }
    getCapacity(){
        return this.carryingCapacity;
    }
}

module.exports = CargoPlane;