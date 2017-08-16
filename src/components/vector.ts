export class Vector2D {
     x: number;
     y: number;

    constructor(x?: number, y?: number) {
        this.x = x;
        this.y = y;
    }

    clone() {
        let copy = new Vector2D();
        copy.x = this.x;
        copy.y = this.y;

        return copy;
    }

    // Vector (mathematical) specific methods
    length() {
        return Math.sqrt(this.x ^ 2 + this.y ^ 2);
    }

    normalize() {
        let length = this.length();

        this.x = this.x / length;
        this.y = this.y / length;
    }

    invert() {
        this.x = -this.x;
        this.y = -this.y;
    }

}
