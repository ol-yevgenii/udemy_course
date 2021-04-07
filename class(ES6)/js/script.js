'use strict';

class Rectangle {
    constructor (height, widht) {
        this.height = height;
        this.widht = widht;
    }

    calcArea() {
        return this.height * this.widht;
    }

}

class ColoredRectangleWithText extends Rectangle {
    constructor(height, widht, text, bgColor) {
        super(height, widht);
        this.text = text;
        this.bgColor = bgColor;
    }

    showMyProps() {
        console.log(`Текс: ${this.text}, цвет: ${this.bgColor}`);
    }

}

const div = new ColoredRectangleWithText(25, 10, "Hello World", "red");

div.showMyProps();
console.log(div.calcArea());

// const squeare = new Rectangle(10, 10);
// const long = new Rectangle(20, 100);

// console.log(squeare.calcArea());
// console.log(long.calcArea());