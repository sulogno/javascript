class Person {
    constructor(firstname, lastname, age) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
    }

    // Setter for firstname
    set firstname(newfirstname) {
        if (typeof newfirstname === "string" && newfirstname.length > 0) {
            this._firstname = newfirstname;
        } else {
            console.error("First name must be a non-empty string");
        }
    }

    // Setter for lastname
    set lastname(newlastname) {
        if (typeof newlastname === "string" && newlastname.length > 0) {
            this._lastname = newlastname;
        } else {
            console.error("Last name must be a non-empty string");
        }
    }

    // Setter for age
    set age(newage) {
        if (typeof newage === "number" && newage >= 0) {
            this._age = newage;
        } else {
            console.error("Age must be a positive number");
        }
    }

    // Getters
    get firstname() {
        return this._firstname;
    }

    get lastname() {
        return this._lastname;
    }

    get age() {
        return this._age;
    }
}

// Create object
const rhit = new Person("rhit", "Sarkar", 21);

// Access properties
console.log(rhit.firstname);  // rhit
console.log(rhit.lastname);   // Sarkar
console.log(rhit.age);        // 21
