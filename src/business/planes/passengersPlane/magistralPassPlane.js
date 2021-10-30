const PassengersPlane = require ("./passengersPlane")

class MagistralPassPlane extends PassengersPlane {
    constructor(model, tailNumber, rangeOfFlight, passengerCapacity, crew){
        super (model, tailNumber, rangeOfFlight, passengerCapacity);
        this.crew = crew;
    }
}

module.exports = MagistralPassPlane;