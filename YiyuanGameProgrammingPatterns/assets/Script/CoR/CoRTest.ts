import { ConcreteHandler1, ConcreteHandler2 } from "./CoR";

const { ccclass, property } = cc._decorator;

@ccclass
export default class CoRTest extends cc.Component {
    start() {
        // 创建处理器对象
        const handler1 = new ConcreteHandler1();
        const handler2 = new ConcreteHandler2();

        // 构建责任链
        handler1.setNext(handler2);

        // 处理请求
        const request = ""/* 游戏事件或输入 */;
        handler1.handleRequest(request);
    }
}
