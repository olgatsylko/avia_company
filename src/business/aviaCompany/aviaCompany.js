class AviaCompany{
    constructor(){
        this.passengersPlanePool = [];
        this.cargoPlanePool = [];
    }

    getPassengersPlanePool(){
        return this.passengersPlanePool;
    }

    getCargoPlanePlool(){
        return this.cargoPlanePool;
    }
    
    toString(){
        return `The company has '${this.planePool}'`
    }
}
module.exports = AviaCompany;