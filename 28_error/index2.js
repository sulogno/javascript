try {
    const dividend = parseFloat(prompt("Enter a dividend:"));
    const divisor = parseFloat(prompt("Enter a divisor:"));

    if (divisor == 0){
        throw new Error("ypu cant divide by zero")
    }

    if(isNaN(divisor) || isNaN(dividend)){
        throw new Error("IT must be number")
    }


    const result = dividend / divisor;



    console.log(`Result: ${result}`);
}
catch (error) {
    console.error("Caught error:", error.message);
}
finally {
    console.log("You have reached the end.");
}
