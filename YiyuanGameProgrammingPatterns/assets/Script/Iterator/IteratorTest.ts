import { FrameAnim } from "../State/FrameAnim";
import { Character, CharacterIterator } from "./Iterator";

const { ccclass, property } = cc._decorator;

@ccclass
export default class IteratorTest extends cc.Component {
    private player: cc.Node;
    private characterIterator: CharacterIterator;

    onLoad() {
        // 初始化玩家角色
        this.player = cc.find("Canvas/cocos");
        const label = cc.find("Canvas/label").getComponent(cc.Label);
        label.node.color = cc.Color.RED;
        label.string = "和8年主程一起学习设计模式之\n迭代器模式";

        this.player.addComponent(FrameAnim);
        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);

        let characters = [];
        for (let i = 0; i < 10; i++) {
            characters.push(new Character(i, "Iterator/monster_" + i));
        }

        this.characterIterator = new CharacterIterator(characters);
    }

    onDestroy() {
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
    }

    onKeyDown(event: cc.Event.EventKeyboard) {
        switch (event.keyCode) {
            case cc.macro.KEY.space:
                if (this.characterIterator.hasNext()) {
                    var character = this.characterIterator.next();
                    this.player.getComponent(FrameAnim).SetUrl(character.imagePath, "move", 3, true);
                }
                break;
        }
    }
}
