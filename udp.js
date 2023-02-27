const dgram = require("dgram")

const socket = dgram.createSocket('udp4')

socket.on('message',(msg,info)=> {
    console.log(`server got a msg => ${msg} with info: ${info.address} : ${info.port}`)
})

socket.bind(8081)

// udp running command echo "hi"  | nc -w1 -u 127.0.0.1 8081
// here hi is the message