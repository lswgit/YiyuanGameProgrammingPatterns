// 第三方物理引擎库的接口
export class ThirdPartyPhysicsEngine {
    constructor() { }

    simulatePhysics() {
        // 实现物理模拟逻辑
    }
}

// Cocos Creator的物理引擎适配器
export class CocosPhysicsAdapter {
    private physicsEngine: ThirdPartyPhysicsEngine;

    constructor() {
        this.physicsEngine = new ThirdPartyPhysicsEngine();
    }

    simulate() {
        // 使用适配器将Cocos Creator的接口转换成第三方库的接口
        this.physicsEngine.simulatePhysics();
    }
}


export interface PlatformAdapter {
    playBackgroundMusic(audioPath: string): void;
    pauseBackgroundMusic(): void;
}

export class WebPlatformAdapter implements PlatformAdapter {
    playBackgroundMusic(audioPath: string) {
        // 在Web平台上播放背景音乐的实现
    }

    pauseBackgroundMusic() {
        // 在Web平台上暂停背景音乐的实现
    }
}

export class iOSPlatformAdapter implements PlatformAdapter {
    playBackgroundMusic(audioPath: string) {
        // 在iOS平台上播放背景音乐的实现
    }

    pauseBackgroundMusic() {
        // 在iOS平台上暂停背景音乐的实现
    }
}

export class CameraAdapter {
    private cameraComponent: cc.Camera;

    constructor(cameraComponent: cc.Camera) {
        this.cameraComponent = cameraComponent;
    }

    // 设置相机的位置
    public setPosition(x: number, y: number, z: number) {
        this.cameraComponent.node.setPosition(x, y, z);
    }

    // 获取相机的位置
    public getPosition(): cc.Vec3 {
        return this.cameraComponent.node.position;
    }
}

export class OldPlayer {
    receiveDamage(damage: number) {
        cc.log("OldPlayer receiveDamage " + damage);
    }
    attackEnemy() {
        cc.log("OldPlayer attackEnemy");
    }
    movePlayer() {
        cc.log("OldPlayer movePlayer");
    }
}

export class NewPlayer {
    attack() {
        cc.log("NewPlayer attack");
    }
    run() {
        cc.log("NewPlayer run");
    }
    takeDamage(damage: number) {
        cc.log("NewPlayer takeDamage " + damage);
    }
}

export interface Player {
    move(): void;
    attack(): void;
    takeDamage(damage: number): void;
}

export class PlayerAdapter implements Player {
    private player: OldPlayer | NewPlayer;

    constructor(player: OldPlayer | NewPlayer) {
        this.player = player;
    }

    move() {
        if (this.player instanceof OldPlayer) {
            this.player.movePlayer();
        } else {
            this.player.run();
        }
    }

    attack() {
        if (this.player instanceof OldPlayer) {
            this.player.attackEnemy();
        } else {
            this.player.attack();
        }
    }

    takeDamage(damage: number) {
        if (this.player instanceof OldPlayer) {
            this.player.receiveDamage(damage);
        } else {
            this.player.takeDamage(damage);
        }
    }
}


