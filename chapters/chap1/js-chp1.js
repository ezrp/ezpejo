var cn = document.getElementById('canvas1');
var ctx = cn.getContext('2d');

var x = cn.width/12
var y = cn.height/10
var vx = 1;
var vy = 1;

function drawBall(){
    ctx.beginPath();
    ctx.arc(x,y,10,0,Math.PI*2);
    ctx.fillStyle = 'black';
    ctx.fill();
    ctx.closePath();
}

function moveFree(){
    function draw(){
        ctx.clearRect(0,0,cn.width,cn.height);
        drawBall();
        x+=vx;
        y+=vy;
        console.log(x);
        if (x==230){
            location.reload();
            
        }
    }
    setInterval(draw,10);
    
    
}


var x2 = cn.width/12
var y2 = cn.height/10

function moveLimits(){
    function drawBall2(){
        ctx.beginPath();
        ctx.arc(x2,y2,10,0,Math.PI*2);
        ctx.fillStyle = 'black';
        ctx.fill();
        ctx.closePath();
    }

    function draw2(){
        ctx.clearRect(0,0,cn.width,cn.height);
        drawBall2();

        if(x2 + vx > cn.width-10 || x2 + vx < 10){
            vx = -vx;
        }
        if(y2 + vy > cn.height-10 || y2 + vy < 10){
            vy = -vy;
        }

        x2+=vx;
        y2+=vy;
    }
    setInterval(draw2,10);
}


