function UpdateClock() {
    const date = new Date();
    let hours = date.getHours(); // use let here
    const meridium = hours >= 12 ? "PM" : "AM";
    hours = hours % 12 || 12;
    const minutes = date.getMinutes().toString().padStart(2, "0");
    const second = date.getSeconds().toString().padStart(2, "0");
    const timestring = `${hours.toString().padStart(2, "0")}:${minutes}:${second} ${meridium}`;
    document.getElementById("Clock").textContent = timestring;
}

UpdateClock();
setInterval(UpdateClock, 1000);
