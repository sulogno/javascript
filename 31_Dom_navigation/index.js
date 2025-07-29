// // 📌 DOM Navigation (Quick Note)

// // ✅ Parent/Child/Sibling:
// element.parentElement      // → get parent node
// element.children           // → get all direct children (HTMLCollection)
// element.firstElementChild  // → first child element
// element.lastElementChild   // → last child element

// // ✅ Sibling navigation:
// element.previousElementSibling  // → previous sibling element
// element.nextElementSibling      // → next sibling element

// // ✅ Other useful:
// element.childNodes         // → all child nodes (includes text, comments)
// element.nodeName           // → tag name (e.g., "DIV", "SPAN")
// element.innerHTML          // → get/set HTML inside
// element.textContent        // → get/set only text inside


const element = document.getElementById("fruits");
const firstchild = element.firstElementChild;
firstchild.style.backgroundColor ="yellow";


const ulelement = document.querySelectorAll("ul");
ulelement.forEach(ulelement =>{
    const firstchild =ulelement.firstElementChild;
    firstchild.style.backgroundColor = "yellow"
})


const element2 = document.getElementById("fruits");
const lastchild = element2.lastElementChild;
lastchild.style.backgroundColor ="red";


const lastui = document.querySelectorAll("ul");

lastui.forEach(lastui =>{
    const lastuichild = lastui.lastElementChild;
    lastuichild.style.backgroundColor = "green";
    

})


