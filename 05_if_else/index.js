let subcribe = document.getElementById("mycheckbox");
let visa = document.getElementById("visa");
let ruypay = document.getElementById("ruypay");
let mastercard = document.getElementById("mastercard");
let submit = document.getElementById("mybtn");
let result1 = document.getElementById("h1");
let result2 = document.getElementById("h2");
submit.onclick = function(){

    if(subcribe.checked){

        result1.textContent = `You Are Subcribed`;
    }
    else{
        result1.textContent = `You are Not subcribed`;
    }
    if(visa.checked){
        result2.textContent = `Your are paying with visa`;

    }

    else if(ruypay.checked){
        result2.textContent = `You are paying with Rupay`;
    }

    else if(mastercard.checked){
        result2.textContent = `you are paying with Mastercard`;
    }
    else{
        result2.textContent = `You must Selcect a button`;
    }

}

