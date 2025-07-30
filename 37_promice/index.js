// 🔁 States of a Promise:
// Pending – The initial state, operation not yet completed.

// Fulfilled – The operation completed successfully.

// Rejected – The operation failed

// let promise = new Promise((resolve, reject) => {
//     if (true) {
//         resolve("Success");
//     } else {
//         reject("Error");
//     }
// });

// promise
//   .then(result => console.log(result))  // handles success
//   .catch(error => console.log(error));  // handles error

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

// Chain the promises properly
walkdog()
    .then(value => {
        console.log(value);
        return clean_the_kitchen();
    })
    .then(value => {
        console.log(value);
        return take_out_Trash();
    })
    .then(value => {
        console.log(value);
        console.log("All tasks finished.");
    })
    .catch(error => {
        console.error("Something went wrong:", error);
    });
