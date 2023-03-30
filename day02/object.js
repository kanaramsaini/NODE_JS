const person={
    Name:"kanaram saini",
    Age:19,
    greet:function(){
        console.log(`Hello sir! My Name is "${this.Name}"`);
}
    
}
person.greet();

const myDetails={
    Name:"Ram sharma",
    Age:35,
    MobileNo:8209044325,
    Address:"Achrol Jaipur",
    Print:function(){
        console.log(`Hello sir! My Name is ="${this.Name} "and Age "${this.Age}"
        No="${this.MobileNo}"
         My Address ="${this.Address}"
        `)
    }
}
myDetails.Print();

const myDetails1={
    print:function(Name,Age){
        console.log(`my name is ${Name} and Age ${Age}`);
    }
}
myDetails1.print("kanaram",19)