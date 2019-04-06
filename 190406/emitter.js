var events = require('events');

var eventEmitter = new events.EventEmitter();

/*
eventEmitter.on('sumit',function(){
    console.log('事件触发');
});

setTimeout(function(){
    eventEmitter.emit('sumit');
},1000);

eventEmitter.on('someEvent',function(arg1,arg2){
    console.log('listener1',arg1,arg2);
});
eventEmitter.on('someEvent',function(arg1,arg2){
    console.log('listener2',arg1,arg2);
});
eventEmitter.emit('someEvent','arg1参数','arg2参数');


var listener1 = function listener1(){
    console.log('监听器 listener1执行。');
}
var listener2 = function listener2(){
    console.log('监听器 listener2执行。');
}

eventEmitter.addListener('connection',listener1);
eventEmitter.on('connection',listener2);

var eventListeners = eventEmitter.listenerCount('connection');
console.log(eventListeners+"个监听");

eventEmitter.emit('connection');

eventEmitter.removeListener('connection',listener1)
console.log('listener1不再受监听');

eventEmitter.emit('connection');

eventListeners = eventEmitter.listenerCount('connection');
console.log(eventListeners+'个监听');
*/
eventEmitter.emit('error');











