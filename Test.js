var Faker = require('./lib');
var faker = new Faker({ locales: require('./lib/locales') });
module['exports'] = faker;

faker.locale = "en";

console.log(faker.fake('{{vegetables.name}} {{vegetables.color}}{{vegetables.shape}}'));


