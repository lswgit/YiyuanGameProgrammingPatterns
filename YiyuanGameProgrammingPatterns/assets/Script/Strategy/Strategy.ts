import { FrameAnim } from "../State/FrameAnim";

export class Character {
    protected anim: FrameAnim;
    protected skill: Skill;

    constructor(private node: cc.Node, private url: string) {
        this.anim = this.node.addComponent(FrameAnim);
        this.anim.SetUrl(this.url, "stand", 3, true);
    }

    public attack() {
        this.anim.DoFrameAnim("attack", 3, false, () => {
            this.anim.DoFrameAnim("stand", 3, true);
        }, this);
        if (this.skill) {
            this.skill.attack();
        }
    }

    public learnSkill(skill: Skill) {
        this.skill = skill;
    }
}

export class Skill {
    protected anim: FrameAnim;

    constructor(private node: cc.Node, private url: string) {
        this.anim = node.addComponent(FrameAnim);
        this.node.active = false;
        this.anim.SetUrl(this.url, "attack", 3, false);
    }

    public attack() {
        this.node.active = true;
        this.anim.DoFrameAnim("attack", 3, false, () => {
            this.node.active = false;
        }, this);
    }
}

export class Skill0 extends Skill {
    constructor(node: cc.Node) {
        super(node, "Strategy/scenePlayer_0_attack");
    }
}

export class Skill1 extends Skill {
    constructor(node: cc.Node) {
        super(node, "Strategy/scenePlayer_1_attack");
    }
}