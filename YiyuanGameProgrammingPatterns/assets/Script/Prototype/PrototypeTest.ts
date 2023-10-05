import { EnemyPrototype, PrototypeManager } from "./Prototype";

const { ccclass, property } = cc._decorator;

@ccclass
export default class PrototypeTest extends cc.Component {

    start() {

        const manager = new PrototypeManager();

        // 注册不同类型的敌人原型
        manager.registerPrototype("Zombie", new EnemyPrototype("Zombie", 100));
        manager.registerPrototype("Skeleton", new EnemyPrototype("Skeleton", 80));

        // 创建敌人的副本
        const zombiePrototype = manager.createClone("Zombie");
        const skeletonPrototype = manager.createClone("Skeleton");

        if (zombiePrototype && skeletonPrototype) {
            zombiePrototype.attack(); // 输出：Zombie is attacking!
            skeletonPrototype.attack(); // 输出：Skeleton is attacking!
        }

    }
}
