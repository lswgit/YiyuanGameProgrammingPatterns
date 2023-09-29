import { EnemyFactory, PlayerFactory } from "./AbstractFactory";

const { ccclass, property } = cc._decorator;

@ccclass
export default class AbstractFactoryTest extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;

    @property
    text: string = 'hello';

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {}

    start() {
        // 使用玩家工厂创建玩家和剑
        const playerFactory = new PlayerFactory();
        const player = playerFactory.createUnit();
        const playerWeapon = playerFactory.createWeapon();

        console.log(`玩家类型: ${player.display()}`);
        console.log(`玩家攻击: ${playerWeapon.attack()}`);

        // 使用敌人工厂创建敌人和法杖
        const enemyFactory = new EnemyFactory();
        const enemy = enemyFactory.createUnit();
        const enemyWeapon = enemyFactory.createWeapon();

        console.log(`敌人类型: ${enemy.display()}`);
        console.log(`敌人攻击: ${enemyWeapon.attack()}`);
    }
}
