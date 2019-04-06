console.log(__filename);

console.log(__dirname);

function printHello(){
    i++;
    if(i==3){
        clearInterval(ti)
    }
    console.log("Hello,World!");
}
var t = setTimeout(printHello,2000);
clearTimeout(t);

var ti = setInterval(printHello,2000);

var i=0;



