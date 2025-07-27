let fruits = ["apple","banana","coconut","apple","watermelon"];

fruits.forEach(upercase);
fruits.forEach(display);





function upercase(element,index,array){

    array[index] = element.toUpperCase();


};

function display(element){
    console.log(element)
}