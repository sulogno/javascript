const display = document.getElementById("display");

function AppendToDisplay(input) {
    // Optional: Only allow valid characters (digits, operators, dot)
    const allowed = /^[0-9+\-*/.]+$/;

    if (allowed.test(input)) {
        display.value += input;
    } else {
        console.warn("Invalid input:", input);
    }
}

function cleardisplay(){

    display.value = "";
    
}

function calculate(){

    try{

        display.value = eval(display.value);

    }
    catch(error){
        display.value = "error"
    }
    
}