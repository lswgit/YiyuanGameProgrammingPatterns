import { FrameAnim } from "../State/FrameAnim";

export class Subject {
    /**
     * @type {number} 为了简单起见，Subject的状态（对所有订阅者都很重要）存储在这个变量中。
     */
    public state: number;

    /**
     * @type {Observer[]} 订阅者列表。在现实生活中，订阅者列表可以更全面地存储（按事件类型分类等）。
     */
    private observers: Observer[] = [];

    /**
     * 订阅管理方法。
     */
    public attach(observer: Observer): void {
        const isExist = this.observers.includes(observer);
        if (isExist) {
            return console.log('Subject: Observer已经附加过了。');
        }

        console.log('Subject: 附加了一个观察者。');
        this.observers.push(observer);
    }

    public detach(observer: Observer): void {
        const observerIndex = this.observers.indexOf(observer);
        if (observerIndex === -1) {
            return console.log('Subject: 不存在的观察者。');
        }

        this.observers.splice(observerIndex, 1);
        console.log('Subject: 分离了一个观察者。');
    }

    /**
     * 在每个订阅者中触发一个更新。
     */
    public notify(): void {
        console.log('Subject: 正在通知观察者...');
        for (const observer of this.observers) {
            observer.update(this);
        }
    }

    /**
     * 通常，订阅逻辑只是Subject真正能做的一小部分。Subject通常会持有一些重要的业务逻辑，每当有重要的事情即将发生（或之后）时，就会触发一个通知方法。
     */
    public someBusinessLogic(state: number): void {
        console.log('Subject: 我正在做一些重要的事情。');
        this.state = state;

        console.log(`Subject: 我的状态刚刚变为：${this.state}`);
        this.notify();
    }
}

/**
 * Observer对由它们所附加的主题发布的更新做出反应。
 */
export class Observer implements Observer {
    constructor(private state: number, private player: cc.Node) {

    }
    public update(subject: Subject): void {
        if (subject.state == this.state) {
            this.player.getComponent(FrameAnim).DoFrameAnim("attack", 3, false, () => {
                this.player.getComponent(FrameAnim).DoFrameAnim("stand", 3, true);
            }, this);
        }
    }
}
