function calculateFoodOrder(numAnimals, avgFood) {
  // IMPLEMENT THIS FUNCTION!
  //Convert params into number
  numAnimals = Number(numAnimals);
  avgFood = Number(avgFood);

  //Error handling.  Condition if operation above return NaN (Not a Number)
  if (isNaN(numAnimals) || isNaN(avgFood)) {
    //return -1 if numAnimals or avgFood is not a number
    return -1;
  } 
  else {
    //return factor of both params
    return numAnimals * avgFood;
  }
}
//I have made changes here

function mostPopularDays(week) {
  // IMPLEMENT THIS FUNCTION!
  //create obj to help of comparator condition below
  let obj = { 
    name: "", 
    traffic: 0 
  };
  //Error Handling. Condition if param is null, undefined or empty
  if (week === null || week === undefined || week.length < 1) {
    return null;
  } 
  else {
    //arr to store days with same traffic
    let arr = [];
    week.forEach((day) => {
      //condition if 2 days have same traffic
      if (obj.traffic <= day.traffic) {
        /**
         * Ternary operator to check if a traffic is strictly superior or equal
         * if it's strictly superior, object comparator become my current day
         * else, push into our array both days
         */
        obj.traffic < day.traffic ? (obj = day) : arr.push(obj.name, day.name);
      }
    });
    //if our array contains days, return name of those days, else only the one with bigest traffic
    return arr.length > 0 ? arr : obj.name;
  }
}


function createAnimalObjects(names, types, breeds) {
  // IMPLEMENT THIS FUNCTION!
  //error handling. Condition to check if params follows requirements
  if (
    names === null ||
    names.length === 0 ||
    types === null ||
    types.length === 0 ||
    breeds === null ||
    breeds.length === 0
  ) {
    return [];

    //error handling. Condition to check if params follows requirements
  } else if (names.length !== types.length || names.length !== breeds.length) {
    return [];
  } else {
    //Loop into one arrays and push into a new array animal object
    for (let index = 0; index < names.length; index++) {
      const animal = names[index];
      let obj = { name: "", 
      type: "", 
      breed: "" 
    };
      obj = { name: names[index], type: types[index], breed: breeds[index] };
      animalData.push(obj);
    }
    return animalData;
  }
}

/////////////////////////////////////////////////////////////////
//
//  no changes any code below here!
//
/////////////////////////////////////////////////////////////////

/**
 * A prototype to create Weekday objects
 */
function Weekday(name, traffic) {
  this.name = name;
  this.traffic = traffic;
}

/**
 * A prototype to create Item objects
 */
function Item(name, barcode, sellingPrice, buyingPrice) {
  this.name = name;
  this.barcode = barcode;
  this.sellingPrice = sellingPrice;
  this.buyingPrice = buyingPrice;
}
/**
 * A prototype to create Animal objects
 */
function Animal(name, type, breed) {
  this.name = name;
  this.type = type;
  this.breed = breed;
}


