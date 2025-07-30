const myButton = document.getElementById("mybutton");
const myImg = document.getElementById("myimg");

myButton. addEventListener("click", event => {
    if(myImg.style.display === "none"){
        myImg.style.display = "block";
        myButton. textContent = "Hide";
    }
    else{
        myImg.style.display = "none";
        myButton. textContent = "Show";
    }
})