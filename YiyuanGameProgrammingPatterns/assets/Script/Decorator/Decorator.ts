export class Character {
    draw() {
        console.log("绘制角色");
    }
}

export class WeaponDecorator {
    constructor(private character: Character) { }

    draw() {
        this.character.draw();
        console.log("添加武器");
    }
}

export class ArmorDecorator {
    constructor(private character: Character) { }

    draw() {
        this.character.draw();
        console.log("添加装甲");
    }
}
