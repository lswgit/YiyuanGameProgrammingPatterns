export class Memento {
    public posX: number;
    public posY: number;
    constructor(posX: number, posY: number) {
        this.posX = posX;
        this.posY = posY;
    }
}

export class Caretaker {
    private mementos: Memento[] = [];
    private originator: Originator;

    constructor(originator: Originator) {
        this.originator = originator;
        this.save();
    }

    save() {
        this.mementos.push(this.originator.save());
    }

    restore() {
        if (!this.mementos.length) {
            return;
        }
        const memento = this.mementos.pop();
        this.originator.restore(memento);
    }
}

export class Originator {
    public player: cc.Node

    constructor(player: cc.Node) {
        this.player = player;
    }

    public save(): Memento {
        return new Memento(this.player.x, this.player.y);
    }

    public restore(memento: Memento): void {
        this.player.x = memento.posX;
        this.player.y = memento.posY;
    }
}
