

export default class Character {
    /*eslint no-unused-vars: ["error", { "args": "none" }]*/
    constructor(name, type, health, level, attack, defence) {
        if (typeof name == 'number' || name.length < 2 || name.length > 4) {
            throw new Error("Кол-во символов в name от 2 до 4!")
        }
        if (!['Bowman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'].includes(type)) {
            throw new Error("Данные введены некорректно!")
        }
        this.name = name;
        this.type = type;
        this.health = 100;
        this.level = 1;

        switch (type) {
            case 'Bowman':
                this.attack = 25;
                this.defence = 25;
                break
            case 'Swordsman':
                this.attack = 40;
                this.defence = 10;
                break
            case 'Magician':
                this.attack = 10;
                this.defence = 40;
                break
            case 'Daemon':
                this.attack = 10;
                this.defence = 40;
                break
            case 'Undead':
                this.attack = 25;
                this.defence = 25;
                break
            case 'Zombie':
                this.attack = 40;
                this.defence = 10;
                break
        }
    }

    levelUp() {
        if (this.health === 0) {
            throw new Error("нельзя повысить левел умершего!")
        }
        this.level ++;
        this.attack *= 1.20;
        this.defence *= 1.20;
        if (this.health < 100) {
            this.health = 100; 
        }
    }

    damage(points) {
        this.health -= points * (1 - this.defence / 100);
        if (this.health < 0) {
            this.health = 0;
        }
    }
}
