var events = require('events');

var eventEmitter = new events.EventEmitter();

//3、执行
function connected(){
    console.log('连接成功。');
    //4、触发
    eventEmitter.emit('data_received');
}

//2、绑定
eventEmitter.on('connect',connected);

//5、绑定
eventEmitter.on('data_received',function(){
    console.log('数据接收成功。');
});

//1、触发
eventEmitter.emit('connect');

//6、完毕
console.log('程序执行完毕');