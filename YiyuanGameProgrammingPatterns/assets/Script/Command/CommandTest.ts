import { Command, CommandQueue, JumpCommand, MoveLeftCommand, MoveRightCommand } from "./Command";

const { ccclass, property } = cc._decorator;

@ccclass
export default class CommandTest extends cc.Component {
    @property(cc.Node)
    player: cc.Node = null;

    private commandQueue: CommandQueue = new CommandQueue();
    private commandTime: number[] = [];
    private reCommanding: boolean = false;
    private reCommandIndex: number = 0;

    onLoad() {
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
        this.player = cc.find("Canvas/cocos");
        const label = cc.find("Canvas/label").getComponent(cc.Label);
        label.node.color = cc.Color.RED;
        label.string = "和8年主程一起学习设计模式之\n命令模式";
    }

    onDestroy() {
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
    }

    onKeyDown(event: cc.Event.EventKeyboard) {
        if (this.reCommanding) return;
        switch (event.keyCode) {
            case cc.macro.KEY.a:
                this.executeCommand(new MoveLeftCommand(this.player));
                break;
            case cc.macro.KEY.d:
                this.executeCommand(new MoveRightCommand(this.player));
                break;
            case cc.macro.KEY.space:
                this.executeCommand(new JumpCommand(this.player));
                break;
            case cc.macro.KEY.r:
                this.reComand();
                break;
        }
    }

    executeCommand(command: Command) {
        command.execute();
        this.commandQueue.addCommand(command);
        this.commandTime.push(new Date().getTime());
    }

    undoLastCommand() {
        this.commandQueue.undoLastCommand();
    }

    reComand() {
        if (this.commandTime.length > 0) {
            this.player.x = 0;
            this.player.y = 50;
            let timestamp = new Date().getTime();
            let timeDiff = timestamp - this.commandTime[0];
            for (let i = 0; i < this.commandTime.length; i++) {
                this.commandTime[i] += timeDiff;
            }
            this.reCommandIndex = 0;
            this.reCommanding = true;
        }
    }

    update() {
        if (this.reCommanding) {
            let timestamp = new Date().getTime();
            if (timestamp >= this.commandTime[this.reCommandIndex]) {
                this.commandQueue.reCommond(this.reCommandIndex);
                if (++this.reCommandIndex >= this.commandTime.length) {
                    this.reCommanding = false;
                }
            }
        }
    }
}


