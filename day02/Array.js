const Array=["kanaram saini",19,true,];

console.log(Array);

for(let arr of Array){
    console.log(arr);
};
// mapArray 

const mapArray=["kanaram",19,true,{Name:"Ram sharma"}];

console.log(mapArray.map(arr=>"happy " + arr));
// map string value Array 
const ArrayString=["Rahul","Rohan","Rakesh","Ramesh","kamlesh"];
console.log(ArrayString.map(arr => arr+ " Saini"));
// number to 0 string add 
const count=[1,2,3,4,5,6,7,8,9,10];

const print=(count.map(i => i* 2));

console.log(print);

const count1=[1,2,3,4,5,6,7,8,9,10];

const print1=(count1.map(Number=>Number+"0"));
console.log(print1);


const pushdata=[1,2];
console.log(pushdata);
// push method use Elements add
pushdata.push(3,4,5,6,7,8,9);
console.log(pushdata);

// Rest 

const toAarry=(... args)=>{
            return (args);
}
console.log(toAarry("kanaram","Rahul", 19,"BCA"));


//distrchering Array 

const distArray=["kanaram",19, ];

const[name,age]=distArray;

console.log(name,age);

//distrchering object

const distObject={
    fullName:"kanaram",
    Age:19,
    course:"fullstack Doveloper"
};
const{fullName,Age,course}=distObject;
console.log(name,age,course);

