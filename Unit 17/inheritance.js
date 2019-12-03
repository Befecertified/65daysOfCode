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

}

//ES5

function Person(firstName, lastName, favoriteColor, favoriteNumber){
    this.firstName = firstName;
    this.lastName = lastName;
    this.favoriteColor = favoriteColor;
    this.favoriteNumber = favoriteNumber;
}

Person.prototype.multiplyFavoriteNumber = function(num){
    return num * this.favoriteNumber;
}

function Student(firstName, lastName, favoriteColor, favoriteNumber){
    this.firstName = firstName;
    this.lastName = lastName;
    this.favoriteColor = favoriteColor;
    this.favoriteNumber = favoriteNumber;
}

Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;