const MagistralPassPlane = require("./passengersPlane/magistralPassPlane");
const UtilityPlane = require ("./passengersPlane/utilityPlane");
const ServicePlane = require ("./cargoPlane/servicePlane");
const TransportPlane = require ("./cargoPlane/transportPlane");

class PlaneFactory{
    create(planeData){
        if (planeData.planType === 'magistralPassPlane'){
            return new MagistralPassPlane (planeData.model, planeData.tailNumber, planeData.rangeOfFlight, planeData.passengerCapacity, planeData['crew']);
        } else if (planeData.planType === 'utilityPlane'){
            return new UtilityPlane (planeData.model, planeData.tailNumber, planeData.rangeOfFlight, planeData.passengerCapacity, planeData.owner);
        } else if (planeData.planType === 'servicePlane'){
            return new ServicePlane (planeData.model, planeData.tailNumber, planeData.rangeOfFlight, planeData.carryingCapacity, planeData.purpose);
        } else if (planeData.planType === 'transportPlane'){
            return new TransportPlane (planeData.model, planeData.tailNumber, planeData.rangeOfFlight, planeData.carryingCapacity, planeData.ramp);
        } else {
            console.log("Wrong data");
        }
    }
}

module.exports = PlaneFactory;