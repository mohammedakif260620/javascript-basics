
function reduceCarSpeed() {
    car.currentSpeed = car.currentSpeed - 10;
  }
  
  const car = {
    // Properties
    name: 'BWM',
    year: 2022,
    isRunning: false,
    currentSpeed: 0,
  
    // Methods ()
    startEngine: function () {
      car.isRunning = true;
    },
    stopEngine: () => {
      car.isRunning = false;
    },
    increaseSpeed: () => {
      car.currentSpeed = car.currentSpeed + 10;
    },
    decreaseSpeed: reduceCarSpeed,
  
    printDetails: () => {
      console.log(`
        Car Detail info 
        ----------------------------
        Name: ${car.name}
        Year: ${car.year}
        Running: ${car.isRunning}
        Speed: ${car.currentSpeed}
    `)
    }
  }
  
  console.log(`Car Details`, car);
  car.printDetails();
  
  car.startEngine();
  car['printDetails']();
  
  car.increaseSpeed();
  car.increaseSpeed();
  car.increaseSpeed();
  car.printDetails();
  
  car.decreaseSpeed()
  car.decreaseSpeed();
  car['printDetails']();
  
  console.log(`Car Current Speed is ${car['currentSpeed']}`);


//----------------below- shown-output----------------
/*
$ node 012-object-properties-and-methods.js 
Car Details {
  name: 'BWM',
  year: 2022,
  isRunning: false,
  currentSpeed: 0,
  startEngine: [Function: startEngine],
  stopEngine: [Function: stopEngine],
  increaseSpeed: [Function: increaseSpeed],
  decreaseSpeed: [Function: reduceCarSpeed],
  printDetails: [Function: printDetails]
}

        Car Detail info
        ----------------------------
        Name: BWM
        Year: 2022
        Running: false
        Speed: 0


        Car Detail info
        ----------------------------
        Name: BWM
        Year: 2022
        Running: true
        Speed: 0


        Car Detail info
        ----------------------------
        Name: BWM
        Year: 2022
        Running: true
        Speed: 30


        Car Detail info
        ----------------------------
        Name: BWM
        Year: 2022
        Running: true
        Speed: 10

Car Current Speed is 10
*/