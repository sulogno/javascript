class Animal {
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    move(speed){
        console.log(`${this.name} can move at ${speed}`)
    }

}

class Rabbit extends Animal{
    constructor(name,age,runspeed){

        super(name,age);
        this.runspeed = runspeed

    }
    run(){
        super.move(this.runspeed);
    }
}
class Fish extends Animal{
    constructor(name,age,swimspeed){
        super(name,age);
        this.swimspeed = swimspeed;
    }
    swim(){
    super.move(this.swimspeed);
    }
}
class Hawk extends Animal{
    constructor(name,age,flyspeed){
        super(name,age);
        this.flyspeed = flyspeed;

    }
    fly(){
    super.move(this.flyspeed);
    }
}


const rabbit = new Rabbit("rabbit",5,25);
const fish = new Fish("FIsshy",2,12);
const hawk = new Hawk("hawky",2,50);

console.log(`${rabbit.name} whos age is ${rabbit.age} can run at ${rabbit.runspeed} km/h`)
console.log(`${fish.name}whose age is ${fish.age} can sqim at ${fish.swimspeed} km/h`)
console.log(`${hawk.name}whose age is ${hawk.age} can fly at ${hawk.flyspeed} km/h`)



rabbit.run();
fish.swim();
hawk.fly();


