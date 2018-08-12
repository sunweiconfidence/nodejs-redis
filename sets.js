var client = require('./client');

client.sadd('testSet',11);
client.sadd('testSet','abc');
client.sadd('testSet','ddd');

client.smembers('testSet',function(err,v){
    console.log('client smembers err,v:',err,v);
});
//not allow duplicate value be inserted into it