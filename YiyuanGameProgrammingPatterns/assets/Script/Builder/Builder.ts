// 游戏角色接口
export interface GameCharacterBuilder {
    getCharacter(): GameCharacter;
    buildCharacterModel(): void;
    buildCharacterStats(): void;
    buildCharacterAbilities(): void;
}

// 具体的游戏角色建造者类
export class WarriorBuilder implements GameCharacterBuilder {
    private character: GameCharacter;

    constructor() {
        this.character = new GameCharacter();
    }

    buildCharacterModel(): void {
        this.character.model = "Warrior";
    }

    buildCharacterStats(): void {
        this.character.strength = 10;
        this.character.agility = 5;
        this.character.intelligence = 2;
    }

    buildCharacterAbilities(): void {
        this.character.abilities.push("Slash", "Shield Block");
    }

    getCharacter(): GameCharacter {
        return this.character;
    }
}

export class MageBuilder implements GameCharacterBuilder {
    private character: GameCharacter;

    constructor() {
        this.character = new GameCharacter();
    }

    buildCharacterModel(): void {
        this.character.model = "Mage";
    }

    buildCharacterStats(): void {
        this.character.strength = 2;
        this.character.agility = 3;
        this.character.intelligence = 10;
    }

    buildCharacterAbilities(): void {
        this.character.abilities.push("Fireball", "Teleport");
    }

    getCharacter(): GameCharacter {
        return this.character;
    }
}

// 游戏角色类
export class GameCharacter {
    public model: string = "";
    public strength: number = 0;
    public agility: number = 0;
    public intelligence: number = 0;
    public abilities: string[] = [];

    public describeCharacter(): void {
        console.log(`Character Model: ${this.model}`);
        console.log(`Strength: ${this.strength}`);
        console.log(`Agility: ${this.agility}`);
        console.log(`Intelligence: ${this.intelligence}`);
        console.log(`Abilities: ${this.abilities.join(", ")}`);
    }
}

// 游戏角色创建指导者
export class CharacterDirector {
    private builder: GameCharacterBuilder;

    constructor(builder: GameCharacterBuilder) {
        this.builder = builder;
    }

    constructCharacter(): void {
        this.builder.buildCharacterModel();
        this.builder.buildCharacterStats();
        this.builder.buildCharacterAbilities();
    }

    getCharacter(): GameCharacter {
        return this.builder.getCharacter();
    }
}

