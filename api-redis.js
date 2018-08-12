var redis = require('redis');
var client = redis.createClient(6379,'localhost',{});


client.on("connect",function(err){
    console.log("connect...");
});
client.on("error",function(error){
    console.log(error);
})

client.set('hello',"3");
client.get('hello',function(err,v){
    console.log('redis get hello err,v:',err,v,typeof v);
})