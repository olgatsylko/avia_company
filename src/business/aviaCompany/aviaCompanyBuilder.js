const AviaCompany = require ('./aviaCompany');
const planes = require ("../../data/planes.json");
const PassengersPlane = require ("../planes/passengersPlane/passengersPlane");
const PlaneFactory = require ('../../business/planes/planeFactory');

class AviaCompanyBuilder{
    #planePool = [];

    constructor(){
       this.aviaCompany = new AviaCompany();
    }
    
    getPlanesData(planes){
        let obj = new PlaneFactory();
        for (let i = 0; i < planes.length; i++){
            this.#planePool[i] = obj.create(planes[i]);
        }
       return this.#planePool;
    }
    
    createPlanePlools(){
        this.getPlanesData(planes);
        for (let i = 0; i < this.#planePool.length; i++){
            if (this.#planePool[i] instanceof PassengersPlane) {
                this.aviaCompany.passengersPlanePool.push(this.#planePool[i]);
            }
            else {
                this.aviaCompany.cargoPlanePool.push(this.#planePool[i]);
            }
        }
        return this;
    }

    build(){
        return this.aviaCompany;
    }
}

module.exports = AviaCompanyBuilder;