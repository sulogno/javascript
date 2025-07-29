//Synchronus code excutes like by line

//Asynchronus code

//using call back
function fun1(callback){
    setTimeout(() => {console.log("Task 1");
                      callback()},3000);
}

function fun2(){
    console.log("Task 2")
    console.log("Task 3")
    console.log("Task 4")
}

fun1(fun2);