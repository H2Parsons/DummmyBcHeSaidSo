var sl;
var feed = [];
var numFood = 10;

function setup() {
    rectMode(CENTER);
    createCanvas(1024, 768);
    sl = new Sloth();
    
    for(var i = 0; i < numFood; i++) {
        feed.push(new Food(random(width), random(height)));
    }
}

function draw() {
    background('#FFFAED');
    sl.display();
    
    for(var i = 0; i < feed.length; i++) {
        feed[i].display();
    }
    
}

function mousePressed() {
    sl.eat();
}

function Food(x, y) {
    this.x = x;
    this.y = y;
    this.color = color('#088A08');
    this.foodSize = 50;
    
    this.display = function() {
        fill(this.color);
        ellipse(this.x, this.y, this.foodSize, this.foodSize + 20);
        fill('#31B404');
        line(this.x - 25, this.y, this.x + 25, this.y);
    }
    
}

function Sloth() {
    var x = mouseX;
    var y = mouseY;
    var diameter = 200;
    
    this.getDistance = function (other) {
        var dist = Math.sqrt(Math.pow(x - other.x, 2) + Math.pow(y - other.y, 2));
        return dist;
    };
    
    this.eat = function () {
        for(var i = feed.length - 1; i >= 0; i--) {
            var food = feed[i];
            var d = this.getDistance(food);
            var r1 = food.foodSize / 2;
            var r2 = diameter / 2;
            if(r1 + r2 > d) {
                feed.splice(i, 1);
                feed.push(new Food(random(width), random(height)));
            }
        }
    };
    
    this.display = function() {
        x = mouseX;
        y = mouseY;

        //face
        noStroke();
        fill('#895E2D');
        ellipse(x, y, 220, 220);
        fill('#E1B370');
        ellipse(x, y, 200, 200);

        //nose
        fill('#895E2D');
        ellipse(x, y + 30, 64, 50);
        fill('#000000');
        ellipse(x - 10, y + 30, 10, 10);
        ellipse(x + 10, y + 30, 10, 10);

        //eyes
        fill('#895E2D');
        push(); //left ear
        translate(x + 55, y - 20);
        rotate(Math.PI / 10);
        ellipse(0, 0, 105, 45);
        pop();
        push(); //right ear
        translate(x - 55, y - 20);
        rotate(-Math.PI / 10);
        ellipse(0, 0, 105, 45);
        pop();

        fill('#000000');
        ellipse(x + 40, y - 20, 25, 25); //left pupil
        ellipse(x - 40, y - 20, 25, 25); //right pupil

        /*
        //ears
        fill('#52C5DC');
        push(); //left ear
        translate(x - 100, y - 80);
        rotate(Math.PI / 4);
        ellipse(0, 0, 52, 92);
        pop();
        push(); //right ear
        translate(x + 100, y - 80);
        rotate(-Math.PI / 4);
        ellipse(0, 0, 52, 92);
        pop();
        */

        //tongue
        fill('#EE3E36');
        arc(x - 10, y + 85, 30, 70, 0, PI+QUARTER_PI, CHORD);
    };
    
}
