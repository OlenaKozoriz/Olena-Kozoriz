const car1 = {
    brand: 'Mercedes',
    model: 'Vito Kombi W447',
    year: 2014
};

const car2 = {
    brand: 'Mercedes',
    model: 'AMG GT C190', //matches the property of the first object; will be printed in the joint object since it has been defined later than 'model' property of the first object
    owner: 2018
};

const car3 = { ...car1, ...car2 };
console.log(car3);
