//Closue


// function Outer(){


//     let message = "hello"
//     function inner(){

//         console.log(message);

//     }

//     inner();
// }

// Outer();


function CreateCounter() {
    let count = 0;

    function Increment() {
        count++;
        console.log(`count increases to ${count}`);
    }
    function getcount(){
        return count
    }

    return {Increment , getcount};
}

const counter = CreateCounter();
counter.Increment(); 
counter.Increment();  
counter.Increment();  
console.log(`total count is ${counter.getcount()}`)