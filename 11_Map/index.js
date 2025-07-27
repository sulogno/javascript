let array = [1,2,3,4,5,6,7,8,9]

const new_array = array.map(square);

console.log(new_array)
const Cube = array.map(cube);

console.log(Cube);


function square(element){

    return Math.pow(element,2);

}


function cube(element){
    return Math.pow(element,3)
}
