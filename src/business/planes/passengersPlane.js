class PassengersPlane extends Plane {
    constructor(model, tailNumber, rangeOfFlight, passengerCapacity){
        super (model, tailNumber, rangeOfFlight);
        this.passengerCapacity = passengerCapacity;
    }
    getPassCapacity(){
        return this.passengerCapacity;
    }
}
module.exports = PassengersPlane;