function UpdateClock(){
    const date = new Date();
    const hours =date.getHours().toString().padStart(2,0);
    const minutes = date.getMinutes().toString().padStart(2,0);
    const second = date.getSeconds().toString().padStart(2,0);
    const timestring = `${hours}:${minutes}:${second}`;
    document.getElementById("Clock").textContent = timestring;
}

UpdateClock();

setInterval(UpdateClock,1000);