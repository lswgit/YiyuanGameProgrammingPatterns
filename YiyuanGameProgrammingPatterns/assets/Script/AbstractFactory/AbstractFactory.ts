// 游戏单位接口
export interface Unit {
    display(): string;
}

// 武器接口
export interface Weapon {
    attack(): string;
}

// 玩家类
export class Player implements Unit {
    display() {
        return "玩家";
    }
}

// 敌人类
export class Enemy implements Unit {
    display() {
        return "敌人";
    }
}

// 剑类
export class Sword implements Weapon {
    attack() {
        return "挥动剑";
    }
}

// 法杖类
export class Staff implements Weapon {
    attack() {
        return "释放法术";
    }
}

// 游戏工厂接口
export interface GameFactory {
    createUnit(): Unit;
    createWeapon(): Weapon;
}

// 玩家工厂
export class PlayerFactory implements GameFactory {
    createUnit() {
        return new Player();
    }

    createWeapon() {
        return new Sword();
    }
}

// 敌人工厂
export class EnemyFactory implements GameFactory {
    createUnit() {
        return new Enemy();
    }

    createWeapon() {
        return new Staff();
    }
}
