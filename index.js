const object = require('./information.js');
var cowsay = require("cowsay");

console.log(cowsay.say({
	text : `hello, i'm ${object.name} from ${object.campus} campus`,
	e : "oO",
	T : "U "
}));

