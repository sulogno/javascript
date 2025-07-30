// // 📌 Keyboard Events (Quick Note)

// // ✅ Add key listener to whole page:
// document.addEventListener("keydown", handler); // key is pressed
// document.addEventListener("keyup", handler);   // key is released

// // ✅ Example:
// document.addEventListener("keydown", (e) => {
//   console.log("Key:", e.key);           // e.g., "a", "Enter", "ArrowUp"
//   console.log("Code:", e.code);         // e.g., "KeyA", "Enter", "ArrowUp"
// });


const box = document.getElementById("mybox");



document.addEventListener("keydown", event => {

    box.textContent = "😞"
    box.style.backgroundColor = "tomato"
  
});

document.addEventListener("keyup", event => {

    box.textContent = "😊"
    box.style.backgroundColor = "lightblue"
})



const moveamount = 10;
let x = 0;
let y = 0;

document.addEventListener("keydown",event =>{

    if(event.key.startsWith("Arrow")){

        switch(event.key){

            case "ArrowUp":
                y -= moveamount;
                break;
            case "ArrowDown":
                y += moveamount;
                break;
            case "ArrowRight":
                x += moveamount;
                break;
            case "ArrowLeft":
                x -= moveamount;
                break;


        }

        box.style.top = `${y}px`
        box.style.left = `${x}px`
        

    }

})