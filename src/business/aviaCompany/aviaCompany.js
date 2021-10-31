class AviaCompany{
    #passengersPlanePool;
    #cargoPlanePool;
    #totalPool;

    constructor(){
        this.#passengersPlanePool = [];
        this.#cargoPlanePool = [];
        this.#totalPool = [];
    }
    getPassengersPlanePool(){
        return this.#passengersPlanePool;
    }
    getCargoPlanePlool(){
        return this.#cargoPlanePool;
    }
    getTotalPool(){
        return this.#totalPool = [...this.#passengersPlanePool, ...this.#cargoPlanePool];
    }
    getTotalCarringCapacity(){
        let count = 0;
        this.#cargoPlanePool.forEach(element => { 
            count += element.getCarringCapacity(); 
        })
        return count;
    }
    getTotalPassCapacity(){
        let count = 0;
        this.#passengersPlanePool.forEach(element => { 
            count += element.getPassCapacity(); 
        })
        return count;
    }
    sortByRangeOfFlight(array) {
        array.sort((a,b) => {
            return (b.getRangeOfFlight() - a.getRangeOfFlight())
        })
        return array;
    }
    getMaxRange(array){
        array.sort((a,b) => {
            return (b.getRangeOfFlight() - a.getRangeOfFlight())
        })
        return array[0].getRangeOfFlight();
    }
    getMaxCarringCap(array){
        array.sort ((a,b) => {
            return (b.getCarringCapacity() - a.getCarringCapacity())
        })
        return array[0].getCarringCapacity();
    }
    getMaxPassCap(array){
        array.sort ((a,b) => {
            return (b.getPassCapacity() - a.getPassCapacity())
        })
        return array[0].getPassCapacity();
    }
    toString(){
        return `The company has: passenger planes - '${this.passengersPlanePool}' and cargo planes - '${this.cargoPlanePool}'`
    }
}
module.exports = AviaCompany;