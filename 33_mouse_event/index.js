


const mybox = document.getElementById("mybox");

// function changecolour(event){

//     event.target.style.backgroundColor = "tomato";
//     event.target.textContent = "OUCHH!😣";

// }


mybox.addEventListener("click",event =>{
    event.target.style.backgroundColor = "tomato";
    event.target.textContent = "OUCHH!😣";

})


mybox.addEventListener("mouseover",event =>{

        event.target.style.backgroundColor = "yellow";
    event.target.textContent = "Dont do it!😞";

}
)

mybox.addEventListener("mouseout",event =>{

        event.target.style.backgroundColor = "lightgreen";
    event.target.textContent = "Click me 😊";

}
)