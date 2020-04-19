/**
 * 
 *
 * @namespace faker.vegetables
 */
function Vegetables (faker) {

  /**
   *
   *
   */
  this.name = function () {
  
    return faker.random.arrayElement(faker.definitions.vegetables.name);
  };
  

  this.color = function () {
    return faker.random.arrayElement(faker.definitions.vegetables.color);
  };

    this.shape = function () {
      return faker.random.arrayElement(faker.definitions.vegetables.shape);
    };
    
     
  }

  module['exports'] = Vegetables;