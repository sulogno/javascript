// // 📌 Short Note on async and await in JavaScript
// // async: Used to define a function that returns a promise.

// // await: Pauses the execution of an async function until the promise resolves.

// // ✅ Key Points:
// // Makes asynchronous code look like synchronous code.

// // Improves readability over .then() chaining.

// // Only works inside async functions.
// async function doTasks() {
//   try {
//     const result1 = await walkdog();
//     console.log(result1);

//     const result2 = await clean_the_kitchen();
//     console.log(result2);

//     const result3 = await take_out_Trash();
//     console.log(result3);

//     console.log("All tasks finished.");
//   } catch (error) {
//     console.error("Error:", error);
//   }
// }




function walkdog() {
    return new Promise((resolve, reject) => {

        setTimeout(() => {

            const dogwalk = true;
            if(dogwalk){

                resolve("You Walk the Dog");

            }
            else{
                reject("u DID NOT WALK THE DOG WTF MAN!!")
            }
            
        }, 1500);
    });
}

function take_out_Trash() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const trash = true;
            if(trash){

                 resolve("YOU cleaned the trash");

            }
            else{
                reject("YOU DID NOT CLEANED THE TRASH")
            }
           
        }, 500);
    });
}

function clean_the_kitchen() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const kitchen = true;
            if(kitchen){

                resolve("You cleaned the Kitchen");
                
            }
            else{
                reject("YOU DID NOT CLEANED THE KITCHEN")
            }
            
        }, 1500);
    });
}

async function dochoros() {

    const walkdogresult = await walkdog();
    console.log(walkdogresult);


    const take_out_Trash_result = await take_out_Trash();
    console.log(take_out_Trash_result);


    const clean_the_kitchen_result = await clean_the_kitchen();
    console.log(clean_the_kitchen_result);

    console.log("All task done")
}

dochoros();