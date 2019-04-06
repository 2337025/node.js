/*
exports.world = function(){
    console.log('Hello World');
}
*/

function Hello(){
    var name;
    this.setName = function(thyName){
        name = thyName;
    }
    this.sayName = function(){
        console.log(name);
    }
}
module.exports = Hello;

