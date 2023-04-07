const Events=require('events');

const eventsEmitter=new Events.EventEmitter();

var myEmitter=function(){
    console.log("Hello")
    eventsEmitter.emit('event2');
   
}
eventsEmitter.on('eventfunction',function(msg){
    console.log(msg)
    console.log("hello eventsfunction")
});


var myEmitter2=function(){
    console.log("this is a Emitters")
   
}

var i=0;

eventsEmitter.on('event3',function(){
    console.log(++i);
})

eventsEmitter.on('event1',myEmitter);
eventsEmitter.on('event2',myEmitter2);
eventsEmitter.emit('event1');
eventsEmitter.emit('eventfunction' ,'hiii');
eventsEmitter.emit('event3');
eventsEmitter.emit('event3');
eventsEmitter.emit('event3');