import { FrameAnim } from "./FrameAnim";

export interface IPlayerState {
    enter(): void;
    exit(): void;
    update(dt: number): void;
}

export class NormalState implements IPlayerState {
    constructor(private player: cc.Node) {
    }

    enter() {
        // 正常状态下的逻辑
        this.player.getComponent(FrameAnim).DoFrameAnim("stand", 3, true);
    }

    exit() {
        // 退出正常状态时的逻辑
    }

    update(dt: number) {
        // 更新正常状态下的行为
    }
}

export class MoveState implements IPlayerState {
    constructor(private player: cc.Node) {
    }

    enter() {
        // 正常状态下的逻辑
        this.player.getComponent(FrameAnim).DoFrameAnim("move", 3, true);
    }

    exit() {
        // 退出正常状态时的逻辑
    }

    update(dt: number) {
        // 更新正常状态下的行为
    }
}

export class AttackState implements IPlayerState {
    constructor(private player: cc.Node) { }

    enter() {
        // 受伤状态下的逻辑
        this.player.getComponent(FrameAnim).DoFrameAnim("attack", 3, true);
    }

    exit() {
        // 退出受伤状态时的逻辑
    }

    update(dt: number) {
        // 更新受伤状态下的行为
    }
}

export class DeadState implements IPlayerState {
    constructor(private player: cc.Node) { }

    enter() {
        // 死亡状态下的逻辑
        this.player.getComponent(FrameAnim).DoFrameAnim("die", 3);
    }

    exit() {
        // 退出死亡状态时的逻辑
    }

    update(dt: number) {
        // 更新死亡状态下的行为
    }
}
