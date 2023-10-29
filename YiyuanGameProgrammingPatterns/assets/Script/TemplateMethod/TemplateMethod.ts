import { FrameAnim } from "../State/FrameAnim";

export class Character {
    protected anim: FrameAnim;
    constructor(private node: cc.Node, private url: string) {
        this.anim = node.addComponent(FrameAnim);
        this.anim.SetUrl(url, "stand", 3, true);
    }

    public attack() {
        this.anim.DoFrameAnim("attack", 3, false, () => {
            this.anim.DoFrameAnim("stand", 3, true);
        }, this);
    }
}

export class SmallRCharacter extends Character {

    public attack() {
        this.anim.DoFrameAnim("move", 3, false, () => {
            this.anim.DoFrameAnim("attack", 3, false, () => {
                this.anim.DoFrameAnim("die", 3, false);
            }, this);
        }, this);
    }
}

export class BigRCharacter extends Character {

    public attack() {
        this.anim.DoFrameAnim("move", 3, false, () => {
            this.anim.DoFrameAnim("attack", 3, false, () => {
                this.anim.DoFrameAnim("stand", 3, true);
            }, this);
        }, this);
    }
}