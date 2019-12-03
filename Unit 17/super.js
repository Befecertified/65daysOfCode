//ES2015

class Person {
    constructor(firstName, lastName, favoriteColor, favoriteNumber){
        this.firstName = firstName;
        this.lastName = lastName;
        this.favoriteColor = favoriteColor;
        this.favoriteNumber = favoriteNumber;
    }

    multiplyFavoriteNumber(num){
        return num * this.favoriteNumber;
    }
}

class Student extends Person{
    constructor(firstName, lastName, favoriteColor, favoriteNumber){
        super(firstName, lastName, favoriteColor, favoriteNumber)
    }
}

//ES5

function Person(firstName, lastName, favoriteColor, favoriteNumber){
    this.firstName = firstName;
    this.lastName = lastName;
    this.favoriteColor = favoriteColor;
    this.favoriteNumber = favoriteNumber;
}

function Student(){
    Person.apply(this, arguments);
}