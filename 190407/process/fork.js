const fs = require('fs');
const child_process = require('child_process');

const sd = require('silly-datetime');

for(var i=0; i<3; i++) {
    var worker_process = child_process.fork("support.js", [i]);

    worker_process.on('close', function (code) {
        console.log(sd.format(new Date(), 'YYYY-MM-DD HH:mm:ss')+':子进程已退出，退出码 ' + code);
    });
}