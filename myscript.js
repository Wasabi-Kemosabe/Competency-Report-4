class Character {
    constructor(name, health, attack) {
        this.name = name;
        this.health = health;
        this.attack = attack;
    }
    atk(opponent, item) {
        let newHealth = opponent.health - item.attackPointsItem;
        document.getElementById('console').innerHTML = `<p>${this.name} Attacking with <br><br> ${item.img}</p>`;
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

function Item(name, attackPointsItem, img) {
    this.name = name;
    this.attackPointsItem = attackPointsItem;
    this.img = img;
}

const item1 = new Item('Goomba', 20, '<img src="goomba.png" alt="goomba" class="item">');
const item2 = new Item('Blue Shell', 10, '<img src="blue_shell.png" alt="blue shell" class="item">');
const item3 = new Item('Banana', 5, '<img src="banana.png" alt="banana" class="item">');
const item4 = new Item('Spinies', 15, '<img src="spinies.png" alt="spinies" class="item">');
const item5 = new Item('Boo', 25, '<img src="boo.png" alt="boo" class="item">');

const items = [item1, item2, item3, item4, item5];

function selectItem() {
    let x = Math.floor(Math.random() * items.length);
    return items[x];
}
