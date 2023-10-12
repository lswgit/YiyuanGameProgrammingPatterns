import { ArmorDecorator, Character, WeaponDecorator } from "./Decorator";

const { ccclass, property } = cc._decorator;

@ccclass
export default class DecoratorTest extends cc.Component {
    start() {
        const character = new Character();
        const characterWithWeapon = new WeaponDecorator(character);
        const characterWithArmor = new ArmorDecorator(character);

        character.draw(); // 输出：绘制角色
        characterWithWeapon.draw(); // 输出：绘制角色 添加武器
        characterWithArmor.draw(); // 输出：绘制角色 添加装甲
    }
}
