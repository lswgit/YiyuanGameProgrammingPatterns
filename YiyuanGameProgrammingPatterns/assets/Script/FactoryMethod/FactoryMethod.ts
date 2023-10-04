// 定义敌人接口
export interface Enemy {
    init(): void;
}

// 具体的敌人类
export class ZombieEnemy implements Enemy {
    init() {
        console.log("初始化僵尸敌人的属性和行为");
    }
}

export class SkeletonEnemy implements Enemy {
    init() {
        console.log("初始化骷髅敌人的属性和行为");
    }
}

export class AlienEnemy implements Enemy {
    init() {
        console.log("初始化外星人敌人的属性和行为");
    }
}

// 敌人工厂接口
export interface EnemyFactory {
    createEnemy(): Enemy;
}

// 具体的敌人工厂类
export class ZombieEnemyFactory implements EnemyFactory {
    createEnemy(): Enemy {
        return new ZombieEnemy();
    }
}

export class SkeletonEnemyFactory implements EnemyFactory {
    createEnemy(): Enemy {
        return new SkeletonEnemy();
    }
}

export class AlienEnemyFactory implements EnemyFactory {
    createEnemy(): Enemy {
        return new AlienEnemy();
    }
}




