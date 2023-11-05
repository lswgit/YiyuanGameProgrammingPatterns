import { FrameAnim } from "../State/FrameAnim";

export class Character {
    protected anim: FrameAnim;
    constructor(private node: cc.Node, private url: string) {
        this.anim = node.addComponent(FrameAnim);
        this.anim.SetUrl(url, "stand", 2, true);
    }

    Anim() {
        return this.anim;
    }
}

export class Player extends Character {
    // 发送请求给中介者
    attack(target: Enemy) {
        Mediator.handleAttack(this, target);
    }

    chase(target: Enemy) {
        Mediator.handleChase(this, target);
    }

    Stop(target: Enemy) {
        Mediator.handleStop(this, target);
    }
}

export class Enemy extends Character {
    // 发送请求给中介者
    takeDamage(attacker: Player, damage: number) {
        Mediator.handleDamage(this, attacker, damage);
    }

    escape(attacker: Player) {
        Mediator.handleEscape(attacker, this);
    }
}

export class Mediator {
    static instance: Mediator;

    onLoad() {
        Mediator.instance = this;
    }

    // 处理玩家攻击敌人的请求
    static handleAttack(player: Player, enemy: Enemy) {
        // 处理攻击逻辑，例如计算伤害
        const damage = 10; // 假设固定伤害
        player.Anim().DoFrameAnim("attack", 2, false, () => {
            player.Anim().DoFrameAnim("stand", 2, true);
            enemy.takeDamage(player, damage);
        }, this);
    }

    // 处理敌人受伤的请求
    static handleDamage(enemy: Enemy, attacker: Player, damage: number) {
        // 处理受伤逻辑，例如减少敌人的生命值
        const currentHealth = 100; // 假设初始生命值
        const newHealth = currentHealth - damage;
        // 更新敌人生命值等逻辑
        enemy.Anim().DoFrameAnim("die", 2, false, () => {
        }, this);
    }

    static handleChase(player: Player, enemy: Enemy) {
        enemy.escape(player);
        player.Anim().DoFrameAnim("move", 2, true);
    }

    static handleEscape(player: Player, enemy: Enemy) {
        enemy.Anim().DoFrameAnim("move", 2, true);
    }

    static handleStop(player: Player, enemy: Enemy) {
        player.Anim().DoFrameAnim("stand", 2, true);
        enemy.Anim().DoFrameAnim("stand", 2, true);
    }
}
