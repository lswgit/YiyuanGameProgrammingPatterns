export class Character {
    public name: string;
    public imagePath: string;
    constructor(name, imagePath) {
        this.name = name;
        this.imagePath = imagePath;
    }
}

export class CharacterIterator {
    private characters: Character[];
    private index: number;
    constructor(characters) {
        this.characters = characters;
        this.index = 0;
    }

    hasNext() {
        return this.index < this.characters.length;
    }

    next() {
        if (!this.hasNext()) {
            throw new Error("No more characters");
        }
        const character = this.characters[this.index];
        this.index++;
        return character;
    }
}

