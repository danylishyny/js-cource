// Ex.1 Rewrite function with Class syntax
function createCar(brand, model, speed) {
	return {
        brand,
        model, 
		speed,
		accelerate: function(amount) {
			console.log(this.speed += amount);
		},
		brake: function(amount) {
			console.log(this.speed -= amount);
		},

		status: function() {
			return console.log(this.brand + this.model + " running at " + this.speed + " km/h");
		}
    }
};
let car = createCar("Renault","Scenic",60);
console.log(car);
   


// Create a Car object using the class syntax
class Car {

    constructor (brand, model, speed) {
        this.brand = brand;
        this.model = model;
        this.speed = speed;
    }
		accelerate (amount) {
			console.log(this.speed += amount);
		};

		brake (amount) {
			console.log(this.speed -= amount);
		};

		status () { 
			return this.brand + this.model + " running at " + this.speed + " km/h";
             
		};
	}; 

 const car = new Car("Renault", "Scenic", 60); // should dispay new object

console.log(car); // Should return new object
console.log(car.status()); // Renault Scenic running at 60 km/h 


// Ex.2 Create additinal class CarColor, exteds it from the Car class and add new method carColor() into this class
// Then return brand model and car color

class CarColor extends Car {
   constructor (brand, model,color) {

    super(brand, model)

    this.color = color
   }
   carColor(){
       console.log(`${this.brand} ${this.model} has ${this.color} color` )
   }
}

const carColor = new CarColor("Renault", "Scenic", "Red");

console.log(carColor); // should display new object
console.log(carColor.carColor()); // Should display string "Renault Scenic has Red color"