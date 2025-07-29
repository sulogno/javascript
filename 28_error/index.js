// Error = An object that is created to represent a problem 
//         that occurs during code execution, such as invalid input 
//         or failed connections.

// try {} = Enclose code that might potentially cause an error.
// catch {} = Catch and handle any thrown error from try {}.
// finally {} = (Optional) Always executes. Used mostly for cleanup.
//              Example: close file, close connection, release resources.

try {
    // console.log("Hello"); // x is not defined – this will throw a ReferenceError
    // Other examples of errors:
    // - Network errors
    // - Promise rejections
    // - Security errors
}
catch (error) {
    // console.log("An error occurred:");
    console.error(error); // Display the error object
}
finally{
    //closeing files
    //closing connection
    //release resoruces
    // console.log("This always executes")
}


// console.log("You have reached the end.");
