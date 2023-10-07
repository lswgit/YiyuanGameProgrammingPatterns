import { NewPlayer, OldPlayer, PlayerAdapter } from "./Adapter";

const { ccclass, property } = cc._decorator;

@ccclass
export default class AdapterTest extends cc.Component {
    start() {
        const oldPlayer = new OldPlayer();
        const newPlayer = new NewPlayer();

        const oldPlayerAdapter = new PlayerAdapter(oldPlayer);
        const newPlayerAdapter = new PlayerAdapter(newPlayer);

        oldPlayerAdapter.move();
        oldPlayerAdapter.attack();
        oldPlayerAdapter.takeDamage(10);

        newPlayerAdapter.move();
        newPlayerAdapter.attack();
        newPlayerAdapter.takeDamage(10);
    }
}
