class Animal{
    Alive = true;

    eat(){
        console.log(`This ${this.name} is eating`)
    }
    sleep(){
        console.log(`This ${this.name} is sleeping`)
    }
}

class rabbit extends Animal{
    name = "rabbit";
    
}

class hen extends Animal{
    name = "hen";

}

class hawk extends Animal{
    name = "hawk";
}


const rabbit_rhit = new rabbit();
const hen2 = new hen();
const hawk1 = new hawk();

console.log(rabbit_rhit.Alive);

console.log(hawk1.Alive);

hawk1.Alive = false;

console.log(`Oh noo the ${hawk1.name} is Alive : ${hawk1.Alive}`)

rabbit_rhit.eat();
rabbit_rhit.sleep();