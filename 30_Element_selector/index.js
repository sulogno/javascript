// 📌 Element Selectors (Quick Note)
// Used to access HTML elements via DOM.

// ✅ Common Selectors:
// document.getElementById()       // → by ID (returns one element)
// document.getElementsByClassName() // → by class (HTMLCollection)
// document.getElementsByTagName()   // → by tag name (HTMLCollection)
// document.querySelector()       // → first match (CSS-style selector)
// document.querySelectorAll()    // → all matches (NodeList)

// 💡 Tip:
// - getElementById → one element
// - getElementsByX → collection (HTMLCollection)
// - querySelector → first match
// - querySelectorAll → all matches

const myheading = document.getElementById("myheading");


myheading.style.backgroundColor = "yellow";
myheading.style.textAlign = "center";


const fruits = document.getElementsByClassName("fruits")

fruits[0].style.backgroundColor = "red";
fruits[1].style.backgroundColor = "yellow";
fruits[2].style.backgroundColor = "orange";

