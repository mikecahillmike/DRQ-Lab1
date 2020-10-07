class Vehicle {

    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    }
    Information(){
        console.log('Make: ${this.make}.');
        console.log('Model: ${this.model}.');
        console.log('Year: ${this.year}.');
    }
}

class Car extends Vehicle{
    constructor(make, model, year, doors){
        super(make, model, year);
        this.doors = doors;
    }

    Information(){
        super.Information();
        console.log('Doors: ${this.doors}');
        
    }

}

//let MyVehicle = new Vehicle('VW', 'Golf', 2000);
//MyVehicle.Information();