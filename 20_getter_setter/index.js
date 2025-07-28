class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;  
    }
    set width(newWidth){
        if(newWidth>0){
        this._width = newWidth
        }
        else{
            console.error("The Value must be integer and greater than 0")
        }
    }
    set height(newHeight){
        if(newHeight>0){
            this._height = newHeight
        }
        else{
            console.error("The Value must be integer and greater than 0")
        }

    }

    get height(){
        return `${this._height.toFixed(1)} cm`
    }
    get width(){
        return `${this._width.toFixed(1)} cm`
    }

    get area(){
        return `${(this._height * this._width.toFixed(1))} cm`
    }
}

const rectangle = new Rectangle(52, 5);

rectangle.height = 6;
rectangle.width = 99;



console.log(rectangle.height,rectangle.width);  

console.log(rectangle.area)
