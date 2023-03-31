const functionA=()=>{
    setTimeout(() => {
        
        console.log('function A data run..');
    }, 3000);
};

const functionB=()=>{
    console.log('function B data run..')
};

functionA();
functionB();


const functionC=( name,callback)=>{
    console.log("timer is done")
    setTimeout(() => {
          console.log(`my name is ${name}`)
        callback()
    }, 4000);
}

const functionD=()=>{
    console.log("function D data run..")
};

functionC("Kanaram",functionD);