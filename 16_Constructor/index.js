function car(make,model,year,color){
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
    this.drive = function(){console.log(`You frive this car: ${make} ${model}`)}

}


const car1 = new car("Ford","Mustang",2025,"red");

console.log(car1.color);
console.log(car1.model);
console.log(car1.year);
console.log(car1.make);

console.log(car1.model,car1.make,car1.year,car1.color);

car1.drive()