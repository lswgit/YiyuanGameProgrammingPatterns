// 基本处理器类
abstract class Handler {
    private nextHandler: Handler | null = null;

    setNext(handler: Handler): Handler {
        this.nextHandler = handler;
        return handler;
    }

    // 处理请求的方法，具体逻辑由子类实现
    abstract handleRequest(request: any): void;

    // 尝试将请求传递给下一个处理器
    passRequest(request: any) {
        if (this.nextHandler) {
            this.nextHandler.handleRequest(request);
        }
    }
}

// 具体处理器1
export class ConcreteHandler1 extends Handler {
    handleRequest(request: any) {
        if (true/* 条件满足 */) {
            // 处理请求的逻辑
        } else {
            // 将请求传递给下一个处理器
            this.passRequest(request);
        }
    }
}

// 具体处理器2
export class ConcreteHandler2 extends Handler {
    handleRequest(request: any) {
        if (true/* 条件满足 */) {
            // 处理请求的逻辑
        } else {
            // 将请求传递给下一个处理器
            this.passRequest(request);
        }
    }
}