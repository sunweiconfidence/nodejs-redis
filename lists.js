var client = require('./client');
// client.rpush('testList','aa');
// client.rpush('testList','bb');
// client.rpush('testList',111);
// client.lpush('testList',22);

client.lpop('testList',function(err,v){
  console.log('client.lpop,err,v:',err,v);
})

client.rpop('testList',function(err,v){
    console.log('client.rpop,err,v:',err,v);
})

client.lrange('testList',0,-1,function(err,lists){
    console.log('client.lrange,err,lists:',err,lists);
})
