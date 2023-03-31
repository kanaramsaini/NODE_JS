


// var box="Data Download Done!!..";
// const Funcdata1= (callback)=>{
//     setTimeout( ()=>{
//                    callback(box);
//     },1000*5);
    
// };



//     setTimeout(()=>{
//             console.log('timer is done');
//             Funcdata1((data)=>{
//                 console.log(data);
//                 console.log('output message 6 run....')
//             });
//     },6000);


// console.log('output message 3 run....');
// console.log('output message 4 run....');
// console.log('output message 5 run....,');



 

 const timerData=()=>{
     const promises= new Promise((resolve,rejects)=>{
         setTimeout(()=>{
             resolve('data download done ');
             rejects('dada downloding error')
      },6000);
        
    });
        return promises
};
 setTimeout(()=>{
    console.log("timer is done");

    timerData().then((text)=>{
        console.log(text);
        return timerData();
    }).then((text2)=>{
        console.log(text2);

    }).catch((error)=>console.log(error))
 },1000*9);




console.log("Hello");
 console.log("Hi!!!");