import { Knight, Staff, Sword, Wizard } from "./Bridge";

const { ccclass, property } = cc._decorator;

@ccclass
export default class BridgeTest extends cc.Component {
    start() {
        // 创建角色和武器
        const knight = new Knight(new Sword());
        const wizard = new Wizard(new Staff());

        // 角色攻击
        knight.attack(); // Output: Character attacks with Sword
        wizard.attack(); // Output: Character attacks with Staff
    }
}
