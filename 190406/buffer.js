/*
buf = Buffer.alloc(11);

len = buf.write('hello world');
console.log("写入字节数:"+len);

console.log(buf.toString('utf8',0));
console.log(buf.toJSON('utf8',0));


const buf = Buffer.from([0x1,0x2,0x3,0x4,0x5]);
const json = JSON.stringify(buf);
console.log(json);

const copy =  JSON.parse(json,(key,value)=>{
    return value && value.type === 'Buffer'?
        Buffer.from(value.data):
        value;
});
console.log(copy);
*/
/*
var buffer1 = Buffer.from(('学习'));
var buffer2 = Buffer.from(('study'));
var buffer3 = Buffer.concat([buffer1,buffer2]);
console.log("合并："+buffer3.toString());
console.log("合并："+buffer3.toJSON());
*/

var buffer1 = Buffer.from('ABCDEF99');
var buffer2 = Buffer.from('ABCDEF98765');
var result = buffer1.compare(buffer2);
if(result <0){
    console.log(buffer1+"在"+buffer2+"之前");
}else if(result ==0){
    console.log(buffer1+"与"+buffer2+"相同");
}else{
    console.log(buffer1+"在"+buffer2+"之后");
}





















