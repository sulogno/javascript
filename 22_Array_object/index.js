const fruit = [ {name:"apple",colour:"red",chalories:95},
                {name:"orange",colour:"orange",chalories:80},
                {name:"banana",colour:"yello",chalories:200},
                {name:"coconut",colour:"white",chalories:20}
              ]

console.log(fruit[0].name )


const fruits = ["Apple","Banana","Pinaple","Coconut","Orange"]
fruits.sort()
console.log(fruits);


//sorting fruits on chalories

fruit.sort((a,b)=>b.chalories - a.chalories )

console.log(fruit);


//shuffeling the array




function shuffle(array){
    for(let i = array.length - 1; i > 0; i--){
        const random = Math.floor(Math.random() * (i + 1));
        [array[i], array[random]] = [array[random], array[i]];
    }
}


shuffle(fruits);
console.log(fruits);