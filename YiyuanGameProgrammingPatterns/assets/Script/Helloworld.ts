import AbstractFactoryTest from "./AbstractFactory/AbstractFactoryTest";
import AdapterTest from "./Adapter/AdapterTest";
import BridgeTest from "./Bridge/BridgeTest";
import BuilderTest from "./Builder/BuilderTest";
import FactoryMethodTest from "./FactoryMethod/FactoryMethodTest";
import PrototypeTest from "./Prototype/PrototypeTest";
import SingletonTest from "./Singleton/SingletonTest";

const { ccclass, property } = cc._decorator;

@ccclass
export default class Helloworld extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property
    text: string = 'hello';

    start() {
        // init logic
        this.label.string = this.text;

        // this.addComponent(FactoryMethodTest);
        // this.addComponent(AbstractFactoryTest);
        // this.addComponent(BuilderTest);
        // this.addComponent(SingletonTest);
        // this.addComponent(PrototypeTest);
        // this.addComponent(AdapterTest);
        this.addComponent(BridgeTest);
    }
}
