// // 📌 Create & Insert Element (Quick Note)

// // ✅ Create element:
// const el = document.createElement("tag");  // e.g. "h1", "div"

// // ✅ Set content, ID, style:
// el.textContent = "Hello";
// el.id = "myId";
// el.style.color = "tomato";

// // ✅ Insert into DOM:
// parent.append(el);              // Add to end of parent
// parent.prepend(el);             // Add to start of parent
// parent.insertBefore(el, ref);   // Insert before reference node
// parent.replaceChild(el, old);   // Replace existing element



const newh1 = document.createElement("h1");

newh1.textContent = "i Like pizza";

newh1.id = "myh1"
newh1.style.color = "tomato";
newh1.style.textAlign = "center";

// document.body.append(newh1)
// document.body.prepend(newh1)

// document.getElementById("box1").append(newh1)
// document.getElementById("box1").prepend(newh1)

// const box3 = document.getElementById("box3");
// document.body.insertBefore(newh1,box3)


const boxes = document.querySelectorAll(".box");
document.body.insertBefore(newh1,boxes[4])