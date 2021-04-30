class Card {
    constructor(name, cost) {
        this.name = name,
        this.cost = cost
    }
}

class Unit extends Card {
    constructor(name, cost, power, res) {
        super(name, cost);
        this.power = power;
        this.res = res;
    }
    attack(target) {
        if (target instanceof Unit) {
            // reduce target res by power
            target.res -= this.power;
            console.log(`${this.name} attacked ${target.name}! ${target.name}'s resilience went down by ${this.power}.`)
        }
        else {
            throw new Error("Target must be a unit!")
        }
    }
}

class Effect extends Card {
    constructor(name, cost, text, magnitude, stat, amount) {
        super(name, cost);
        this.text = text; // card text
        this.magnitude = magnitude // Raise or Lower
        this.stat = stat // Resilience or Power
        this.amount = amount // by how much?
    }
    play(target) {
        if (target instanceof Unit ) {
            if (this.stat == "Resilience") {
                if (this.magnitude == "Raise") {
                    target.res += this.amount;
                    console.log(`Raised ${target.name} Resilience by ${this.amount}!`)
                }
                else if (this.magnitude == "Lower") {
                    target.res -= this.amount;
                    console.log(`Lowered ${target.name} Resilience by ${this.amount}!`)
                }
            } 
            else if (this.stat == "Power") {
                if (this.magnitude == "Raise") {
                    target.power += this.amount;
                    console.log(`Raised ${target.name} Power by ${this.amount}!`)
                }
                else if (this.magnitude = "Lower") {
                    target.power -= this.amount;
                    console.log(`Lowered ${target.name} Power by ${this.amount}!`)
                }
            }
        }
        else {
            throw new Error("Target must be a unit!")
        }
    }
}

//turn 1

const redBeltNinja = new Unit("Red Belt Ninja", 3, 3, 4);
const hardAlgo = new Effect("Hard Algorithm", 2, "Increase target's resilience by 3", "Raise", "Resilience", 3);
hardAlgo.play(redBeltNinja);

// turn 2
const blackBeltNinja = new Unit("Black Belt Ninja", 4, 5, 4);
const promiseRej = new Effect("Unhanded Promise Rejection", 1, "Reduce target's resilience by 2", "Lower", "Resilience", 2);
promiseRej.play(redBeltNinja);

//turn 3
const pairPro = new Effect("Pair Programming", 3, "Increase target's power by 2", "Raise", "Power", 2);
pairPro.play(redBeltNinja);

redBeltNinja.attack(blackBeltNinja);