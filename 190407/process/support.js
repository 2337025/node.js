const sd = require('silly-datetime');
// var curr_time = sd.format(new Date(), 'YYYY-MM-DD HH:mm:ss');

console.log(sd.format(new Date(), 'YYYY-MM-DD HH:mm:ss')+":进程 " + process.argv[2] + " 执行。" );

setTimeout(function(){
    console.log(sd.format(new Date(), 'YYYY-MM-DD HH:mm:ss')+":进程"+ process.argv[2] + "已在"+process.argv[2]*2+"秒后结束");
},process.argv[2]*2000);