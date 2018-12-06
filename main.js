var sl;
var feed = [];
var numFood;

function setup() {
    createCanvas(640, 480);
    sl = new Sloth();
    
    for(var i = 0; i < numFood; i++) {
        feed.push(new Food(random(width), random(height)));
    }
}

function draw() {
    background('#FFFAED');
    
}

function Sloth() {
    
    
    
    this.display = function() {
        var x = mouseX;
        var y = mouseY;

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
    }
    
}
