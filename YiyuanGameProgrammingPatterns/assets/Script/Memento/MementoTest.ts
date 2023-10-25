import { FrameAnim } from "../State/FrameAnim";
import { Caretaker, Originator } from "./Memento";

const { ccclass, property } = cc._decorator;

@ccclass
export default class MementoTest extends cc.Component {
    private player: cc.Node;
    private caretaker: Caretaker;
    private offset: cc.Vec2;

    onLoad() {
        // 初始化玩家角色
        this.player = cc.find("Canvas/cocos");
        const label = cc.find("Canvas/label").getComponent(cc.Label);
        label.node.color = cc.Color.RED;
        label.string = "和8年主程一起学习设计模式之\n备忘录模式";

        var anim = this.player.addComponent(FrameAnim);
        anim.SetUrl("Iterator/monster_3", "move", 3, true);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);

        var originator = new Originator(this.player);
        this.caretaker = new Caretaker(originator);

        // 添加鼠标事件监听
        this.node.on(cc.Node.EventType.MOUSE_DOWN, (event) => {
            // 计算鼠标点击位置与精灵中心的偏移
            const spritePosition = this.player.getPosition();
            this.offset = cc.v2(event.getLocationX() - spritePosition.x, event.getLocationY() - spritePosition.y);
        }, this);
        this.node.on(cc.Node.EventType.MOUSE_MOVE, (event) => {
            if (this.offset) {
                // 根据鼠标移动位置来更新精灵位置
                this.player.setPosition(event.getLocationX() - this.offset.x, event.getLocationY() - this.offset.y);
            }
        }, this);
        this.node.on(cc.Node.EventType.MOUSE_UP, () => {
            // 清除偏移值
            this.offset = null;
        }, this);
    }

    onDestroy() {
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
    }

    onKeyDown(event: cc.Event.EventKeyboard) {
        switch (event.keyCode) {
            case cc.macro.KEY.s:
                this.caretaker.save();
                break;
            case cc.macro.KEY.r:
                this.caretaker.restore();
                break;
        }
    }
}