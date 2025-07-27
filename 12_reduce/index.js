let number = [1,2,3,4,5,5,5,4,5,6,6,5,5,4,52,22,5,85,2,2,22,5,5,2222,5,20,2,22,0,2,2,20]

let Total = number.reduce(total)

console.log(Total);

function total(accumulator,element){

    return accumulator+element
}