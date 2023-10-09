// 抽象角色类
abstract class Character {
    constructor(private weapon: Weapon) { }

    attack() {
        console.log(`Character attacks with ${this.weapon.useWeapon()}`);
    }
}

// 抽象武器类
abstract class Weapon {
    abstract useWeapon(): string;
}

// 具体角色类
export class Knight extends Character {
    constructor(weapon: Weapon) {
        super(weapon);
    }
}

export class Wizard extends Character {
    constructor(weapon: Weapon) {
        super(weapon);
    }
}

// 具体武器类
export class Sword extends Weapon {
    useWeapon(): string {
        return "Sword";
    }
}

export class Staff extends Weapon {
    useWeapon(): string {
        return "Staff";
    }
}
