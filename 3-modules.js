// CommonJS, every file is a module (by default)
// Modules - Encapuslated Code (only share minumum)
const { john, peter } = require('./4-names');
const sayHi = require('./5-utils');
const { items, singlePerson } = require('./6-alt-flavor');
require('./7-mind-grenade');

sayHi('susan');
sayHi(john);
sayHi(peter);