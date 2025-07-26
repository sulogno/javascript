const textbox = document.getElementById("textbox");
const tofarnheit = document.getElementById("tofarnheit");
const tocelsius = document.getElementById("tocelsius");
const result = document.getElementById("Result");

let temp;




function convert(){

    if(tofarnheit.checked){

        temp = Number(textbox.value);
        temp = temp * 9 / 5 + 32;
        result.textContent = `You Selected Celsius to Farenheit Answer is ${temp}🔥°F`;
    
    }
    else if(tocelsius.checked){

        temp = Number(textbox.value);
        temp = (temp - 32) * 5 / 9;
        result.textContent = `You Selected Celsius to Farenheit Answer is ${temp}🔥°C`; 

    }
    else{
        result.textContent = `Please select a unit`; 
    }

}