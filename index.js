function produceDrivingRange(range) {
  return function (street1, street2) {
    let distance = Math.abs(parseInt(street1) - parseInt(street2));
    let difference = Math.abs(range - distance);

    if (distance > range){
      return `${difference} blocks out of range`
    }else{
      return `within range by ${difference}`
    }
  }
}

function produceTipCalculator(percentage) {
  return function (amount) {
    return amount * percentage;
  }
}

function createDriver() {
  let driverId = 0;

  return class {
    constructor(name){
      this.name = name;
      this.id = ++driverId;
    }
  }
}
