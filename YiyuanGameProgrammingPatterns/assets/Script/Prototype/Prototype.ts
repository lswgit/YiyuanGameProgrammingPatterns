export class EnemyPrototype {
    constructor(public name: string, public health: number) { }

    clone(): EnemyPrototype {
        // 使用 Object.create() 来创建一个新对象，并将原型链设置为当前对象
        const clone = Object.create(this);
        clone.name = this.name;
        clone.health = this.health;
        return clone;
    }

    attack() {
        console.log(`${this.name} is attacking!`);
    }
}

export class PrototypeManager {
    private prototypes: { [key: string]: EnemyPrototype } = {};

    registerPrototype(name: string, prototype: EnemyPrototype) {
        this.prototypes[name] = prototype;
    }

    createClone(name: string): EnemyPrototype | null {
        const prototype = this.prototypes[name];
        if (prototype) {
            return prototype.clone();
        } else {
            return null;
        }
    }
}
