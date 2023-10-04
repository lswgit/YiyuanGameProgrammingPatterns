import { Singleton } from "./Singleton";

const { ccclass, property } = cc._decorator;

@ccclass
export default class FactoryMethodTest extends cc.Component {

    start() {

        const s1 = Singleton.getInstance();
        const s2 = Singleton.getInstance();

        if (s1 === s2) {
            console.log('Singleton works, both variables contain the same instance.');

            // 在这里可以调用单例的业务逻辑方法
            s1.someBusinessLogic();
        } else {
            console.log('Singleton failed, variables contain different instances.');
        }
    }
}
