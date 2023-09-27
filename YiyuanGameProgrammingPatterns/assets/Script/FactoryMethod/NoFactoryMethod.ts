export namespace NoFactoryMethod {
    export class Enemy {
        constructor(type: string) {
            if (type === "Zombie") {
                // 创建僵尸敌人
                this.initZombie();
            } else if (type === "Skeleton") {
                // 创建骷髅敌人
                this.initSkeleton();
            } else if (type === "Alien") {
                // 创建外星人敌人
                this.initAlien();
            }
        }

        private initZombie() {
            // 初始化僵尸敌人的属性和行为
            cc.log("初始化僵尸敌人的属性和行为");
        }

        private initSkeleton() {
            // 初始化骷髅敌人的属性和行为
            cc.log("初始化骷髅敌人的属性和行为");
        }

        private initAlien() {
            // 初始化外星人敌人的属性和行为
            cc.log("初始化外星人敌人的属性和行为");
        }
    }
}
