function orderRectangles(arr) {
    let rectangles = [];
    for (let i = 0; i < arr.length; i++) {
        let width = Number(arr[i][0]);
        let height = Number(arr[i][1]);

        let rectangle = {
            width,
            height,
            area: function () {
                return this.width * this.height;
            },
            compareTo: function (other) {
                let result = other.area() - this.area();
                return result || (other.width - this.width);
            }
        };
        rectangles.push(rectangle);
    }
    return rectangles.sort((a, b) => a.compareTo(b));
}

console.log(orderRectangles([[10, 5], [5, 12]]));
console.log(orderRectangles([[10, 5], [3, 20], [5, 12]]));