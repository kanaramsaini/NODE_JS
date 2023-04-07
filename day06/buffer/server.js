const { buffer } = require("stream/consumers");


const buf=Buffer.from("Welcome home page in node js server")
console.log(buf.toString());

const buf2=Buffer.alloc(30);
buf2.write("hello sir my name is kanaram")
console.log(buf2.toString())