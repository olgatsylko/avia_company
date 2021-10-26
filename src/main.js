// Авиакомпания. Определить иерархию самолетов. Создать авиакомпанию. Посчитать общую вместимость и грузоподъемность.
// Провести сортировку самолетов компании по дальности полета.
// Найти самолет в компании, соответствующий заданному диапазону параметров.

const prompt = require('prompt-promise');
const AviaBuild = require('./aviaCompanyBuilder');

let aviaCompany = new AviaCompanyBuilder()
    .addPassPlanePool(planes)
    .addCargoPlanePool(cargo)
    .build();