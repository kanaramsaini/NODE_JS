

function text(fn){

    return fn();
    // console.log(fn);
}; 

var hendal=()=>{
    function x(){
        console.log("hello my name is kanaram saini")
    }
    return x()
}

text(hendal);