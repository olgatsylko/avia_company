const AviaCompany = require ('./aviaCompany');
const planes = require ("../../data/planes.json");
const planes2 = require ("../../data/planes2.csv");
const PassengersPlane = require ("../planes/passengersPlane/passengersPlane");
const PlaneFactory = require ('../../business/planes/planeFactory');
//const parse = require('csv-parse');
const fs = require('fs').promises;
const parse = require('csv-parse/lib/sync');
const path = './data/planes2.csv'

class AviaCompanyBuilder{
    #planePool = [];

    constructor(dataFile){
        this.dataFile = dataFile;
        this.aviaCompany = new AviaCompany();
    }
    getPlanePool(){
        return this.#planePool;
    }
    getPlanesData(){
        if (this.dataFile === 'json'){
            this.readJsonFile();
        } else if (this.dataFile === 'csv'){
            this.readCsvFile();
        } else console.log('error');
        return this; 
    } 
    readJsonFile() {
        let obj = new PlaneFactory();
        for (let i = 0; i < planes.length; i++){
            this.#planePool[i] = obj.create(planes[i]);
        }
        this.createPlanePlools();
    }
    async readCsvFile() {
        let records = [];
        const fileContent = await fs.readFile(path);
        records = parse (fileContent, {columns:true});
            
        let objFact = new PlaneFactory();
        for (let i = 0; i < records.length; i++){
            this.#planePool[i] = objFact.create(records[i]);
        }   
        this.createPlanePlools();                
    }
    createPlanePlools(){
        for (let i = 0; i < this.#planePool.length; i++){
            if (this.#planePool[i] instanceof PassengersPlane) {
                this.aviaCompany.getPassengersPlanePool().push(this.#planePool[i]);      
            }
            else {
                this.aviaCompany.getCargoPlanePlool().push(this.#planePool[i]);
            }
        }
        return this;
    }
    addPassPlane(planePass){
        this.aviaCompany.getPassengersPlanePool().push(planePass);
        return this;
    }
    addCargoPlane(planeCargo){
        this.aviaCompany.getCargoPlanePlool().push(planeCargo);
        return this;
    }
    build(){
        return this.aviaCompany;
    }
}

module.exports = AviaCompanyBuilder;