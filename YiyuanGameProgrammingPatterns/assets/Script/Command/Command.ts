export interface Command {
    execute(): void;
    undo(): void;
}

export class MoveLeftCommand implements Command {
    constructor(private character: cc.Node) { }

    execute() {
        this.character.x -= 10;
        console.log("Move Left");
    }

    undo() {
        this.character.x += 10;
        console.log("Undo Move Left");
    }
}

export class MoveRightCommand implements Command {
    constructor(private character: cc.Node) { }

    execute() {
        this.character.x += 10;
        console.log("Move Right");
    }

    undo() {
        this.character.x -= 10;
        console.log("Undo Move Right");
    }
}

export class JumpCommand implements Command {
    constructor(private character: cc.Node) { }

    execute() {
        this.character.runAction(cc.jumpBy(0.5, 0, 0, 50, 1));
        console.log("Jump");
    }

    undo() {
        // Jump command cannot be undone in this example
    }
}

export class CommandQueue {
    private commands: Command[] = [];

    addCommand(command: Command) {
        this.commands.push(command);
    }

    undoLastCommand() {
        const lastCommand = this.commands.pop();
        if (lastCommand) {
            lastCommand.undo();
        }
    }

    reCommond(index) {
        this.commands[index].execute();
    }
}