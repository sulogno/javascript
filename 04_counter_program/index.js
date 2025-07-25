const decresebtn = document.getElementById("decrese");
const increse = document.getElementById("increase");
const reset = document.getElementById("reset");
const countlabel = document.getElementById("countlabel");
let count = 0;
increse.onclick = function(){

    count++;
    countlabel.textContent = count;

};

decresebtn.onclick = function(){
    count--;
    countlabel.textContent = count;
}

reset.onclick = function(){
    count = 0;
    countlabel.textContent = count;
}