function hello(callback){
    console.log("hello");
    callback();
}

function goodbye(callback){
    console.log("goodye");
    callback();
}

function goodafternoon(callback){
    console.log("goodafternoon");
    callback();
}

function goodevening(){
    console.log("goodevening");
}

// Proper chaining
hello(() => 
    goodbye(() => 
        goodafternoon(() => 
            goodevening()
        )
    )
);


hello(()=>
    goodafternoon);