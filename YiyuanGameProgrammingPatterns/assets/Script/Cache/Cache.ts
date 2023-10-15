class SharedData {
    private texture: string;
    private model: string;

    constructor(texture: string, model: string) {
        this.texture = texture;
        this.model = model;
    }

    getTexture(): string {
        return this.texture;
    }

    getModel(): string {
        return this.model;
    }
}

export class FlyweightFactory {
    private flyweights: { [key: string]: SharedData } = {};

    getFlyweight(texture: string, model: string): SharedData {
        const key = `${texture}-${model}`;
        if (!this.flyweights[key]) {
            this.flyweights[key] = new SharedData(texture, model);
        }
        return this.flyweights[key];
    }
}