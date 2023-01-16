
const task={3:"fizz",5:"buzz",7:"bang",11:"boing"};

for(let i=1;i<=105;i++){
    let str="";
    for(let key in task){
        if(i%key===0){
            str+=task[key];
        }

    }
   str?console.log(str):console.log(i);

    
}