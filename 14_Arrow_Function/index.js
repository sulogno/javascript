//Arrow Fucntion 


const number = [1,2,3,5,5,4,5,8,4,5,2,24,40]


const hello = (name,age) => {console.log(`Hello ${name}`);
                         console.log("YOU Can Do it"); 
                         console.log(`You are ${age} years old`)  
}

setTimeout(hello,3000);




const square = number.map((elemnt) => Math.pow(elemnt,2));  

console.log(square)


const cube = number.map((elemnt) => Math.pow(elemnt,3));
console.log(cube)

const even = number.filter((element) => element%2 === 0);
console.log(even)

const odd = number.filter((element) => element%2 !==0);
console.log(odd)

const total = number.reduce((accumulator,element)=> accumulator+element);
console.log(total)


