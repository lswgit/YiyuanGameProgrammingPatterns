import AbstractFactoryTest from "./AbstractFactory/AbstractFactoryTest";
import BuilderTest from "./Builder/BuilderTest";
import FactoryMethodTest from "./FactoryMethod/FactoryMethodTest";

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
        this.addComponent(BuilderTest);
    }
}
