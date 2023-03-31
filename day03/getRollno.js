 const getRollNo = () => {
       setTimeout(() => {
               console.log('Roll No. found.');
         let roll_no = [1, 2, 3, 4, 5];
         console.log(roll_no);

         setTimeout((roll_no) => {
             const data = {
                 name: 'Ram',
                 age: 30
             }
             console.log(`My roll no is ${roll_no}. My name is ${data.name} and I am ${data.age} years old.`)
            
             setTimeout((name) => {
                 data.gender = 'male';
                 console.log(`My roll no is ${roll_no}. My name is ${data.name} and I am ${data.age} years old. I am ${data.gender}`)
             }, 2000, data.name);
            
         }, 2000, roll_no[2]);
        
     }, 2000);
 }
 getRollNo();