class Person {
    constructor(name,age,...address){
        this.name = name;
        this.age = age;
        this.address = new Address(...address);

    }
}

class Address{
    constructor(street,city,country){
        this.stree = street;
        this.city = city;
        this.country = country
    }

}


const person1 = new Person("Spongebob",21,"acers lane"
                                              ,"texsus"
                                               ,"USA"
                                            );
console.log(person1.address)                                             
                                            