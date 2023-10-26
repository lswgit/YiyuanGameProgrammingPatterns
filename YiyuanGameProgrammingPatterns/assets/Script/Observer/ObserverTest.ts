import { FrameAnim } from "../State/FrameAnim";
import { Observer, Subject } from "./Observer";

const { ccclass, property } = cc._decorator;

@ccclass
export default class ObserverTest extends cc.Component {
    private subject: Subject;
    onLoad() {
        // 初始化玩家角色
        var player = cc.find("Canvas/cocos");
        const label = cc.find("Canvas/label").getComponent(cc.Label);
        label.node.color = cc.Color.RED;
        label.string = "和8年主程一起学习设计模式之\n观察者模式";

        // player.addComponent(FrameAnim).SetUrl("Iterator/monster_3", "stand", 3, true);
        // var player2 = cc.instantiate(player);
        // player2.parent = player.parent;
        // player2.x -= 100;
        // player2.getComponent(FrameAnim).SetUrl("Iterator/monster_1", "stand", 3, true);
        // var player3 = cc.instantiate(player);
        // player3.parent = player.parent;
        // player3.x += 100;
        // player3.getComponent(FrameAnim).SetUrl("Iterator/monster_2", "stand", 3, true);

        this.subject = new Subject();

        player.addComponent(FrameAnim).SetUrl("Iterator/monster_3", "stand", 3, true);
        this.subject.attach(new Observer(1, player));

        var player2 = cc.instantiate(player);
        player2.parent = player.parent;
        player2.x -= 100;
        player2.getComponent(FrameAnim).SetUrl("Iterator/monster_1", "stand", 3, true);
        this.subject.attach(new Observer(2, player2));

        var player3 = cc.instantiate(player);
        player3.parent = player.parent;
        player3.x += 100;
        player3.getComponent(FrameAnim).SetUrl("Iterator/monster_2", "stand", 3, true);
        this.subject.attach(new Observer(3, player3));

        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, (event: cc.Event.EventKeyboard) => {
            switch (event.keyCode) {
                case cc.macro.KEY.space:
                    // var players = [player, player2, player3];
                    // var randomPlayer = players[Math.floor(Math.random() * 3)];
                    // randomPlayer.getComponent(FrameAnim).DoFrameAnim("attack", 3, false, () => {
                    //     randomPlayer.getComponent(FrameAnim).DoFrameAnim("stand", 3, true);
                    // }, this);
                    this.subject.someBusinessLogic(Math.floor(Math.random() * 3) + 1);
                    break;
            }
        }, this);
    }
}