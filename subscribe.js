var client = require('./client')
client.subscribe('PublishMessage');

client.on('message',function(channel,msg){
    console.log('client.on message,channel:',channel,'message:',msg);
})