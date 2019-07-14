class Character {
    constructor(name, health, attack) {
        this.name = name;
        this.health = health;
        this.attack = attack;
    }
    atk(opponent) {
        let newHealth = opponent.health - this.attack;
        document.getElementById('console').innerHTML = `<p>${this.name} Attacking....</p>`;
        opponent.health = newHealth;
        update();
        if (opponent.health <= 0) {
            document.getElementById('console').innerHTML = `<p>${this.name} wins!!! <br> Game Over</p>`;
        }
    }
    print() {
        document.getElementById(this.name).innerHTML = `<h3>Name: ${this.name} <br>  Life Points: ${this.health} <br>  Attack Points: ${this.attack}</h3>`
    }
}

function update() {
    mario.print();
    yoshi.print();
}

const mario = new Character('Mario', 100, 20);
const yoshi = new Character('Yoshi', 100, 18);

update();