import { AlienEnemyFactory, SkeletonEnemyFactory, ZombieEnemyFactory } from "./FactoryMethod";
import { NoFactoryMethod } from "./NoFactoryMethod";

const { ccclass, property } = cc._decorator;

@ccclass
export default class FactoryMethodTest extends cc.Component {

    start() {

        // const zombie = new NoFactoryMethod.Enemy("Zombie");
        // const skeleton = new NoFactoryMethod.Enemy("Skeleton");
        // const alien = new NoFactoryMethod.Enemy("Alien");

        // 使用不同的工厂创建不同类型的敌人
        const zombieFactory = new ZombieEnemyFactory();
        const zombie = zombieFactory.createEnemy();
        zombie.init();
        const skeletonFactory = new SkeletonEnemyFactory();
        const skeleton = skeletonFactory.createEnemy();
        skeleton.init();
        const alienFactory = new AlienEnemyFactory();
        const alien = alienFactory.createEnemy();
        alien.init();
    }
}
