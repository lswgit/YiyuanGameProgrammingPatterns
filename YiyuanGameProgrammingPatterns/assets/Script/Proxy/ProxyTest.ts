import { ResourceLoaderProxy } from "./Proxy";

const { ccclass, property } = cc._decorator;

@ccclass
export default class ProxyTest extends cc.Component {
    start() {
        // 使用代理加载游戏资源
        const resourceLoader = new ResourceLoaderProxy();

        // 游戏中的某个场景需要加载资源
        resourceLoader.loadResource();
    }
}
