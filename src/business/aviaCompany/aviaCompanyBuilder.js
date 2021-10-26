const AviaCompany = require ('./aviaCompany');

class AviaCompanyBuilder{
    constructor(){
        this.aviaCompany = new AviaCompany();
    }
    addPassengerPlane(passPlane){
        this.aviaCompany.passengersPlanePool.push(passPlane);
        return this;
    }
    addCargoPlane(cargoPlane){
        this.aviaCompany.cargoPlanePool.push(cargoPlane);
        return this;
    }
    addPassPlanePool(passPlanes){
        this.aviaCompany.passengersPlanePool = [...this.passengersPlanePool, ...passPlanes];
        return this;
    }
    addCargoPlanePool(cargoPlanes){
        this.aviaCompany.cargoPlanePool = [...this.cargoPlanePool,...cargoPlanes];
        return this;
    }
    build(){
        return this.aviaCompany;
    }
}
module.exports = AviaCompanyBuilder;