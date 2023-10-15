// 接口定义资源加载方法
interface ResourceLoader {
    loadResource(): void;
}

// 游戏资源加载类
class GameResourceLoader implements ResourceLoader {
    loadResource() {
        console.log("加载游戏资源...");
        // 实际的资源加载逻辑
    }
}

// 代理类
export class ResourceLoaderProxy implements ResourceLoader {
    private resourceLoader: ResourceLoader;

    constructor() {
        // 在代理类中，延迟实例化真正的资源加载类
        this.resourceLoader = new GameResourceLoader();
    }

    loadResource() {
        // 代理类可以在必要时创建资源加载类的实例
        this.resourceLoader.loadResource();
    }
}