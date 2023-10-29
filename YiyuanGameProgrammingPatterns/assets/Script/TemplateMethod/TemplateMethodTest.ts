import { BigRCharacter, Character, SmallRCharacter } from "./TemplateMethod";

const { ccclass, property } = cc._decorator;

@ccclass
export default class TemplateMethodTest extends cc.Component {
    onLoad() {
        // 初始化玩家角色
        var player = cc.find("Canvas/cocos");
        const label = cc.find("Canvas/label").getComponent(cc.Label);
        label.node.color = cc.Color.RED;
        label.string = "和8年主程一起学习设计模式之\n模板方法模式";

        var c1 = new Character(player, "Iterator/monster_4");

        var player2 = cc.instantiate(player);
        player2.parent = player.parent;
        player2.x -= 100;
        var c2 = new SmallRCharacter(player2, "State/scenePlayer_0");

        var player3 = cc.instantiate(player);
        player3.parent = player.parent;
        player3.x += 100;
        var c3 = new BigRCharacter(player3, "Iterator/monster_9");

        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, (event: cc.Event.EventKeyboard) => {
            switch (event.keyCode) {
                case cc.macro.KEY.q:
                    c1.attack();
                    break;
                case cc.macro.KEY.w:
                    c2.attack();
                    break;
                case cc.macro.KEY.e:
                    c3.attack();
                    break;
            }
        }, this);
    }
}