var events=require('events');
const { registerCustomQueryHandler } = require('puppeteer');
var util=require('util');
var Person=function(name){
    this.name=name;
};
util.inherits(Person,events.EventEmitter);
var james = new Person('james');
var mary = new Person('mary');
var people = [james,mary];
people.forEach(function(person) {
    person.on('speak',function(mssg){
        console.log(person.name+' said:'+mssg);
    });
});
james.emit('speak','hey dudes');
mary.emit('speak','hi');