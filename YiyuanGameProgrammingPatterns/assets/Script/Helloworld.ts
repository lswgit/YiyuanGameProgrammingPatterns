import AbstractFactoryTest from "./AbstractFactory/AbstractFactoryTest";
import AdapterTest from "./Adapter/AdapterTest";
import BridgeTest from "./Bridge/BridgeTest";
import BuilderTest from "./Builder/BuilderTest";
import CacheTest from "./Cache/CacheTest";
import CoRTest from "./CoR/CoRTest";
import CommandTest from "./Command/CommandTest";
import CompositeTest from "./Composite/CompositeTest";
import DecoratorTest from "./Decorator/DecoratorTest";
import FacadeTest from "./Facade/FacadeTest";
import FactoryMethodTest from "./FactoryMethod/FactoryMethodTest";
import IteratorTest from "./Iterator/IteratorTest";
import MementoTest from "./Memento/MementoTest";
import ObserverTest from "./Observer/ObserverTest";
import PrototypeTest from "./Prototype/PrototypeTest";
import ProxyTest from "./Proxy/ProxyTest";
import SingletonTest from "./Singleton/SingletonTest";
import { StateTest } from "./State/StateTest";

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
        // this.addComponent(BridgeTest);
        // this.addComponent(CompositeTest);
        // this.addComponent(DecoratorTest);
        // this.addComponent(FacadeTest);
        // this.addComponent(CacheTest);
        // this.addComponent(ProxyTest);
        // this.addComponent(CoRTest);
        // this.addComponent(CommandTest);
        // this.addComponent(StateTest);
        // this.addComponent(IteratorTest);
        // this.addComponent(MementoTest);
        this.addComponent(ObserverTest);
    }
}
