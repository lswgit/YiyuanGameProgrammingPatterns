import { Character, Skill, Skill0, Skill1 } from "./Strategy";

const { ccclass, property } = cc._decorator;

@ccclass
export default class StrategyTest extends cc.Component {
    onLoad() {
        // 初始化玩家角色
        var player = cc.find("Canvas/cocos");
        const label = cc.find("Canvas/label").getComponent(cc.Label);
        label.node.color = cc.Color.RED;
        label.string = "和8年主程一起学习设计模式之\n策略模式";

        let c1 = new Character(player, "State/scenePlayer_0");
        let node1 = new cc.Node();
        node1.addComponent(cc.Sprite);
        player.addChild(node1);
        let skill1 = new Skill0(node1);

        let node2 = new cc.Node();
        node2.addComponent(cc.Sprite);
        player.addChild(node2);
        let skill2 = new Skill1(node2);

        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, (event: cc.Event.EventKeyboard) => {
            switch (event.keyCode) {
                case cc.macro.KEY.q:
                    c1.learnSkill(null);
                    c1.attack();
                    break;
                case cc.macro.KEY.w:
                    c1.learnSkill(skill1);
                    c1.attack();
                    break;
                case cc.macro.KEY.e:
                    c1.learnSkill(skill2);
                    c1.attack();
                    break;
            }
        }, this);
    }
}