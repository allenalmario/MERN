class Ninja {
    constructor(name, health, speed=3, strength=3) {
        this.name = name;
        this.health = health;
        this.speed = speed;
        this.strength = strength;
    }
    sayName() {
        console.log(this.name);
    }
    showStats() {
        console.log('Ninja Stats');
        console.log(`Name: ${this.name}`);
        console.log(`Strength: ${this.strength}`);
        console.log(`Speed: ${this.speed}`);
        console.log(`Health: ${this.health}`);
    }
    drinkSake() {
        console.log(`You drank Sake`)
        this.health += 10
        console.log('Your health grew by 10 points!')
    }
}

const myNinja = new Ninja('Joji', 70);
console.log(myNinja.health);
myNinja.drinkSake();
myNinja.drinkSake();
myNinja.drinkSake();
console.log(myNinja.health)
myNinja.showStats()

class Sensei extends Ninja { // extends keyword define classes that inherit from existing classes
    constructor(name, health=200, speed=10, strength=10, wisdom=10) {
        super (name, health, speed, strength); // super keyword function that allows us to call the constructor of the parent class, pass the arguements
        this.wisdom = wisdom;
    }
    speakWisdom() {
        super.drinkSake() //super keyword can call parent methods
        console.log("Pain does not exist in this dojo!")
    }
}

const mySensei = new Sensei('Johnny');
mySensei.speakWisdom();