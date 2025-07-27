// const person ={
//     firstname : "Spongebob",
//     Lastname : "Squarepants",
//     age :30,
//     isemployeed:true,
//     sayhello : function(){
//         console.log("HEy i am spongebob");
//     },
// }

// console.log(person.firstname)
// person.sayhello();

//THis method explianed below

const person ={
    firstname : "Spongebob",
    Lastname : "Squarepants",
    age :30,
    isemployeed:true,
    sayhello : function(){
        console.log(`Hey i am ${this.firstname+this.Lastname}`);
    },


}


person.sayhello();