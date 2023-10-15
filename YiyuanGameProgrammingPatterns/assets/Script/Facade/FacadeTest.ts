import { GameFacade } from "./Facade";

const { ccclass, property } = cc._decorator;

@ccclass
export default class FacadeTest extends cc.Component {
    start() {
        const game = new GameFacade();

        // 启动游戏
        game.startGame();

        // 在游戏中播放音效
        game.playSound('explosion.wav');

        // 加载下一个关卡
        game.loadNextLevel();
    }
}
