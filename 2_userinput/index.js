// let username ;
// username = window.prompt(`What is your username`);
// console.log(username);
let username;
document.getElementById("mysubmit").onclick = function(){

    username = document.getElementById("text").value;
    console.log(username)
    document.getElementById("h1").textContent = `Hello ${username}`

}