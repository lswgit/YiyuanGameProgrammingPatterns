import { CharacterDirector, MageBuilder, WarriorBuilder } from "./Builder";

const { ccclass, property } = cc._decorator;

@ccclass
export default class BuilderTest extends cc.Component {

    start() {
        const warriorBuilder = new WarriorBuilder();
        const warriorDirector = new CharacterDirector(warriorBuilder);

        const mageBuilder = new MageBuilder();
        const mageDirector = new CharacterDirector(mageBuilder);

        console.log("Creating a Warrior character:");
        warriorDirector.constructCharacter();
        const warriorCharacter = warriorDirector.getCharacter();
        warriorCharacter.describeCharacter();

        console.log("\nCreating a Mage character:");
        mageDirector.constructCharacter();
        const mageCharacter = mageDirector.getCharacter();
        mageCharacter.describeCharacter();
    }
}
