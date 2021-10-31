// Авиакомпания. Определить иерархию самолетов. Создать авиакомпанию. Посчитать общую вместимость и грузоподъемность.
// Провести сортировку самолетов компании по дальности полета.
// Найти самолет в компании, соответствующий заданному диапазону параметров.

const prompt = require('prompt-promise');
const AviaCompanyBuilder = require('./business/aviaCompany/aviaCompanyBuilder');
const PassengersPlane = require('./business/planes/passengersPlane/passengersPlane');
const MagistralPassPlane = require ('./business/planes/passengersPlane/magistralPassPlane');

let aviaCompany = new AviaCompanyBuilder('csv')
.getPlanesData()
.build();

(async () => {
    const planeType = parseInt (await prompt ('Press 1 for magistralPass Plane; Press to 2 for utility Plane: Press 3 for service Plane; Press 4 for transport Plane '));
    if(planeType >= 1 && planeType <= 4){      
   
        if (planeType === 1 || planeType === 2){
            const numbPass = parseInt (await prompt ('How many pass capacity do you need? '));
            if (numbPass > aviaCompany.getMaxPassCap(aviaCompany.getPassengersPlanePool())) {
                console.log('No such capacity');
            } else {
                let targCap = aviaCompany.getPassengersPlanePool().find(el =>{
                    return el.getPassCapacity() >= numbPass;
                })
            console.log(targCap);
            }  
        }

        if (planeType === 3 || planeType === 4){
            const numbCarrCap = parseInt (await prompt ('What carring capacity do you need? '));
            if (numbCarrCap > aviaCompany.getMaxCarringCap(aviaCompany.getCargoPlanePlool())) {
                console.log('No such capacity');
            } else {
                let targCarrCap = aviaCompany.getCargoPlanePlool().find(el =>{
                    return (el.getCarringCapacity() >= numbCarrCap);  
                })
            console.log(targCarrCap);
            }
        }

        const range = parseInt (await prompt ('What range of flight do you need? '));
        if (range > aviaCompany.getMaxRange(aviaCompany.getTotalPool())){
            console.log('No such range');
        } else {
            let targRange = aviaCompany.getTotalPool().find(el =>{
                return el.getRangeOfFlight() >= range;
            })
            console.log(targRange);
        }
    } else console.log('Invalid plain type, try again');

    console.log('Total Passengers Capacity is: ' + aviaCompany.getTotalPassCapacity()); 
    console.log('Total Carring Capacity is: ' + aviaCompany.getTotalCarringCapacity());
    console.log(aviaCompany.sortByRangeOfFlight(aviaCompany.getTotalPool()));

    prompt.finish();
})();
 

    