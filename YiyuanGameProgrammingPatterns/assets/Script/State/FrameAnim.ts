const { ccclass, property } = cc._decorator;

@ccclass
export class FrameAnim extends cc.Component {

    @property
    url: string = 'State/scenePlayer_0';

    private sprite: cc.Sprite = null;
    private spriteFrame: cc.SpriteFrame;
    private curAnim: string;
    private curDir: number;
    private curFrame: number = 0;
    private startFrame: number;
    private endFrame: number;
    private frameData: any = null;
    private frameResData: any;
    private frameInternal: number = 1 / 8;
    private frameTick: number = 0;
    private loop: boolean;

    onLoad() {
        this.sprite = this.getComponent(cc.Sprite);
        cc.resources.load(this.url, cc.SpriteFrame, (err, spriteFrame) => {
            if (!err) {
                this.spriteFrame = spriteFrame;
                cc.resources.load(this.url, cc.JsonAsset, (err, jsonAsset) => {
                    if (!err) {
                        var jsonData = jsonAsset.json;
                        this.frameData = jsonData.mc.data;
                        this.frameResData = jsonData.res;
                        this.DoFrameAnim(this.curAnim, this.curDir, this.loop);
                    } else {
                        console.error("Error loading json asset: " + err);
                    }
                });
            } else {
                console.error("Error loading sprite frame: " + err);
            }
        });
    }

    update(dt: number) {
        if (this.curFrame > 0) {
            this.frameTick += dt;
            if (this.frameTick >= this.frameInternal) {
                this.frameTick = 0;
                var resKey = this.frameData.frames[this.curFrame - 1].res;
                var res = this.frameResData[resKey];
                var rect = cc.rect(res.x, res.y, res.w, res.h);
                this.sprite.spriteFrame = new cc.SpriteFrame(this.spriteFrame.getTexture(), rect);
                this.curFrame++;
                if (this.curFrame > this.endFrame) {
                    this.curFrame = this.loop ? this.startFrame : 0;
                }
            }
        }
    }

    public DoFrameAnim(anim: string, dir: number, loop = false) {
        this.curAnim = anim;
        this.curDir = dir;
        this.loop = loop;
        var anim = anim + "_" + dir;
        if (!this.spriteFrame || !this.frameData) return;
        for (let i = 0; i < this.frameData.labels.length; i++) {
            if (this.frameData.labels[i].name == anim) {
                this.startFrame = this.frameData.labels[i].frame;
                this.endFrame = this.frameData.labels[i].end;
                this.frameTick = this.frameInternal;
                this.curFrame = this.startFrame;
                break;
            }
        }
    }
}