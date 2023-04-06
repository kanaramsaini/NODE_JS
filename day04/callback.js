var data= function(a,b){
    return a+b;
};

function fddata(data){
            console.log(data(200,300))
}
fddata(data);


var localdata=function(name,age){

    return `My Name is ${name} and Age ${age}`;
}

function fullName(localdata){
    console.log(localdata("kanaram",19))
};

fullName(localdata)