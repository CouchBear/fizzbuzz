const fizz=3;
const buzz=5;
const bang=7;
for(let i=1;i<=105;i++){
    if (i%(fizz*buzz*bang)===0){
        console.log("fizzbuzzbang");
    }else if(i%(fizz*buzz)===0){
        console.log("fizzbuzz");
    }else if(i%buzz===0){
        console.log("buzz");
    }else if(i%fizz===0){
        console.log("fizz");
    } else{
    console.log(i);
    }
}
