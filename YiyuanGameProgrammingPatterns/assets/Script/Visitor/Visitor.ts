import { FrameAnim } from "../State/FrameAnim";

class GameObject {
    accept(visitor: Visitor): void {
        throw new Error("Method 'accept()' must be implemented.");
    }

    protected anim: FrameAnim;
    constructor(private node: cc.Node, private url: string) {
        this.anim = node.addComponent(FrameAnim);
        this.anim.SetUrl(url, "stand", 2, true);
    }

    attack() {
        this.anim.DoFrameAnim("attack", 2, false, () => {
            this.anim.DoFrameAnim("stand", 2, true);
        }, this);
    }
}

export class ConcreteGameObjectA extends GameObject {
    accept(visitor: Visitor): void {
        visitor.visitConcreteGameObjectA(this);
        this.attack();
    }
}

export class ConcreteGameObjectB extends GameObject {
    accept(visitor: Visitor): void {
        visitor.visitConcreteGameObjectB(this);
        this.attack();
    }
}


interface Visitor {
    visitConcreteGameObjectA(gameObjectA: ConcreteGameObjectA): void;
    visitConcreteGameObjectB(gameObjectB: ConcreteGameObjectB): void;
}

export class ConcreteVisitor implements Visitor {
    visitConcreteGameObjectA(gameObjectA: ConcreteGameObjectA): void {
        console.log("访问者访问了游戏对象A");
    }

    visitConcreteGameObjectB(gameObjectB: ConcreteGameObjectB): void {
        console.log("访问者访问了游戏对象B");
    }
}
