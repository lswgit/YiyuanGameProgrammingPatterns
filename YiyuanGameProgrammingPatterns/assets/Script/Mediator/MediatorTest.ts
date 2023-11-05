import { Enemy, Player } from "./Mediator";

const { ccclass, property } = cc._decorator;

@ccclass
export default class MediatorTest extends cc.Component {

    private keyDownMap: any = {};

    onLoad() {
        // 初始化玩家角色
        var player = cc.find("Canvas/cocos");
        const label = cc.find("Canvas/label").getComponent(cc.Label);
        label.node.color = cc.Color.RED;
        label.string = "和8年主程一起学习设计模式之\n中介者模式";

        var c1 = new Player(player, "Iterator/monster_0");
        player.x -= 100;

        var enemy = cc.instantiate(player);
        enemy.parent = player.parent;
        enemy.x += 200;
        var c2 = new Enemy(enemy, "State/scenePlayer_0");

        let that = this;
        let checkKeyState = function () {
            if (that.keyDownMap[cc.macro.KEY.d]) {
                c1.chase(c2);
            }
        }

        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, (event: cc.Event.EventKeyboard) => {
            switch (event.keyCode) {
                case cc.macro.KEY.space:
                    c1.attack(c2);
                    break;
                case cc.macro.KEY.d:
                    this.keyDownMap[event.keyCode] = 1;
                    checkKeyState();
                    break;
            }
        }, this);

        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, (event: cc.Event.EventKeyboard) => {
            if (event.keyCode == cc.macro.KEY.d) {
                this.keyDownMap[event.keyCode] = 0;
                c1.Stop(c2);
            }
        }, this);
    }
}