import { FrameAnim } from "./FrameAnim";
import { AttackState, DeadState, IPlayerState, MoveState, NormalState } from "./State";

const { ccclass, property } = cc._decorator;

@ccclass
export class StateTest extends cc.Component {
    private currentState: IPlayerState;
    private player: cc.Node;

    onLoad() {
        // 初始化玩家角色
        this.player = cc.find("Canvas/cocos");
        const label = cc.find("Canvas/label").getComponent(cc.Label);
        label.node.color = cc.Color.RED;
        label.string = "和8年主程一起学习设计模式之\n状态模式";

        this.player.addComponent(FrameAnim).SetUrl("State/scenePlayer_0", "stand", 3, true);
        this.currentState = new NormalState(this.player);
        this.currentState.enter();

        cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
    }

    onDestroy() {
        cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
    }

    onKeyDown(event: cc.Event.EventKeyboard) {
        switch (event.keyCode) {
            case cc.macro.KEY.q:
                this.switchToNormalState();
                break;
            case cc.macro.KEY.w:
                this.switchToMoveState();
                break;
            case cc.macro.KEY.e:
                this.switchToAttackState();
                break;
            case cc.macro.KEY.r:
                this.switchToDeadState();
                break;
        }
    }

    switchToNormalState() {
        this.currentState.exit();
        this.currentState = new NormalState(this.player);
        this.currentState.enter();
    }

    switchToMoveState() {
        this.currentState.exit();
        this.currentState = new MoveState(this.player);
        this.currentState.enter();
    }

    switchToAttackState() {
        this.currentState.exit();
        this.currentState = new AttackState(this.player);
        this.currentState.enter();
    }

    switchToDeadState() {
        this.currentState.exit();
        this.currentState = new DeadState(this.player);
        this.currentState.enter();
    }

    update(dt: number) {
        this.currentState.update(dt);
    }
}
