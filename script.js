let Circle = function (radius, color) {
    this.radius = radius;
    this.color = color;

    this.getRadius = function () {
        return this.radius;
    };
    this.getColor = function () {
        return this.color;
    };

    this.getArea = function () {
        return Math.PI * radius * radius;
    };

};
let circle = new Circle(3, 555);
let radius = circle.getRadius();
let color = circle.getColor();
let area = circle.getArea();
alert("radius: " + radius + "; area: " + area + "; color: " + color);