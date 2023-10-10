const { ccclass, property } = cc._decorator;

@ccclass
export default class CompositeTest extends cc.Component {
    start() {
        // 创建一个场景
        const gameScene = new cc.Scene();

        // 添加精灵到场景
        const playerSprite = new cc.Node();
        playerSprite.addComponent(cc.Sprite);
        gameScene.addChild(playerSprite);

        // 切换到游戏场景
        cc.director.loadScene('GameScene');

        // 创建一个父游戏对象
        const player = new cc.Node();

        // 添加子游戏对象
        const weapon = new cc.Node();
        weapon.addComponent(cc.Sprite);
        player.addChild(weapon);

        // 移除子游戏对象
        player.removeChild(weapon);

        // 创建一个UI容器
        const menu = new cc.Node();

        // 添加按钮到容器
        const startButton = new cc.Node();
        startButton.addComponent(cc.Button);
        menu.addChild(startButton);

        // 处理按钮点击事件
        startButton.on('click', () => {
            // 启动游戏
        });

        // 创建一个粒子系统
        const explosion = new cc.Node();
        explosion.addComponent(cc.ParticleSystem);

        // 将粒子系统添加到游戏对象
        const enemy = new cc.Node();
        enemy.addChild(explosion);

        // 创建一个精灵
        const characterSprite = new cc.Node();
        characterSprite.addComponent(cc.Sprite);

        // 添加动画组件

        const animation = characterSprite.addComponent(cc.Animation);

        // 添加动画帧
        const attackAnimationClip = new cc.AnimationClip();
        animation.addClip(attackAnimationClip);

        // 播放动画
        animation.play('attack');
    }
}
