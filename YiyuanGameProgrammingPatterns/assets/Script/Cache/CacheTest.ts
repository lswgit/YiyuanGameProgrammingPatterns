import { FlyweightFactory } from "./Cache";

const { ccclass, property } = cc._decorator;

@ccclass
export default class CacheTest extends cc.Component {

    start() {
        const factory = new FlyweightFactory();

        // 创建多个游戏对象，它们共享相同的纹理和模型
        const object1 = factory.getFlyweight("texture1.png", "model1.obj");
        const object2 = factory.getFlyweight("texture1.png", "model1.obj");
        const object3 = factory.getFlyweight("texture2.png", "model2.obj");

        // 在游戏中使用这些对象
        // object1、object2和object3都共享相同的纹理和模型数据
    }
}
