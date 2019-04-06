/*
function say(word){
    console.log(word);
}
function execute(someFunction,value){
    someFunction(value);
}
execute(say,'hello');
*/

function execute(Func,value){
    Func(value);
}
execute(function(word){console.log(word);},'hello');


