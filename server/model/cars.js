const cars = require('./cars.json');

function getCars() {
    return cars;
}

function patchStatus(id, e) {
    const x = cars.find((el) => el.id == id);

    x.status = e.status;

    return { status: 'updated' };
}

function deleteCar(id) {
    const res = cars.filter((el) => el.id != id);

    return { status: 'Deleted', result: res };
}

function addCar(e) {
    let max = 0;
    cars.forEach((el) => {
        if (el.id > max) max = el.id;
    });
    console.log(max);
    e.id = max + 1;

    cars.push(e);

    return { status: 'Added' };
}

module.exports = { getCars, patchStatus, deleteCar, addCar };
