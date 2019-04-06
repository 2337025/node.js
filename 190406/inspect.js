var util = require('util');

function Person(){
    this.name = 'byvoid';
    this.toString = function(){
        return this.name;
    }
}
var obj = new Person();
// 是一个将任意对象转换 为字符串的方法
console.log(util.inspect(obj));
console.log(util.inspect(obj,true));


//util.isArray
console.log(util.isArray([]));
console.log(util.isArray(new Array));
console.log(util.isArray({}));

//util.isRegExp
console.log(util.isRegExp(/some regexp/));
console.log(util.isRegExp(new RegExp('another regexp')));
console.log(util.isRegExp({}));

//util.isDate
console.log(util.isDate(new Date()));
console.log(util.isDate(Date()));
console.log(util.isDate('2019-04-06'));

//util.isError
console.log(util.isError(new Error()));
console.log(util.isError(new TypeError()));
console.log(util.isError({name:'error'}));









