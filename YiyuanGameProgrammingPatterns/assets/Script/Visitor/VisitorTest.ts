import { ConcreteGameObjectA, ConcreteGameObjectB, ConcreteVisitor } from "./Visitor";

const { ccclass, property } = cc._decorator;

@ccclass
export default class VisitorTest extends cc.Component {

    private keyDownMap: any = {};

    onLoad() {
        // 初始化玩家角色
        var player = cc.find("Canvas/cocos");
        const label = cc.find("Canvas/label").getComponent(cc.Label);
        label.node.color = cc.Color.RED;
        label.string = "和8年主程一起学习设计模式之\n访问者模式";

        var c1 = new ConcreteGameObjectA(player, "Iterator/monster_6");
        player.x -= 100;

        var player2 = cc.instantiate(player);
        player2.parent = player.parent;
        player2.x += 200;
        player2.scaleX = -1;
        var c2 = new ConcreteGameObjectB(player2, "Iterator/monster_8");

        const visitor = new ConcreteVisitor();

        player.on(cc.Node.EventType.TOUCH_END, () => {
            c1.accept(visitor);
        }, this);

        player2.on(cc.Node.EventType.TOUCH_END, () => {
            c2.accept(visitor);
        }, this);
    }
}