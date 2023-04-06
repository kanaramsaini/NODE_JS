

const promiseObje=new Promise((resolve,rejects)=>{
    setTimeout(() => {
        let RollNo=[1,2,3,4,5,6,7,];
        resolve(RollNo);
    }, 2000);
});
  
const getData=(indexdata)=>{
    return new Promise((resolve,rejects)=>{

        setTimeout((indexdata) => {
            let object={
                Name:'KANARAM SAINI',
                Age:19
            }
            resolve(`MY ROLL NO IS '${indexdata}'MY  NAME IS '${object.Name}' AND I AM '${object.Age}'years old`)
        }, 2000, indexdata);

    })
};

promiseObje.then((rollno)=>{
    console.log(rollno);
    return getData(rollno[2]).then((output)=>{
        console.log(output);
    })
}).catch((eerro)=>console.log(eerro));
