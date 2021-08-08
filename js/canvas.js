function init(){
    window.requestAnimationFrame(draw);
}

var i = 0;
var op = 0;
function draw(){
    var cn = document.getElementById('canvas-about');
    if(cn.getContext){
        
        if(i<1400){
            var ctx = cn.getContext('2d');
            var x = Math.random()*272;
            var y = Math.random()*140;
            
            var red = Math.random()*400;
            var green = Math.random()*400;
            var blue = Math.random()*400;
            
            ctx.fillStyle = 'rgba('+red+','+green+','+blue+',.8)'
            ctx.fillRect(x,y,30,15);
            ctx.fillStyle = 'rgba('+red+',300,300,1)'
            ctx.font = 'normal 14px Segoe UI';
            ctx.fillText('E',x+12,y+13);

            i+=1; 

            if (i==1400){

                ctx.fillStyle = 'rgba(0,0,30,.8)'
                ctx.fillRect(20,15,260,122);
                ctx.fillStyle = 'rgb(250,300,300)';
                ctx.font = 'normal 50px Segoe UI';
                ctx.fillText('E',140,90);

                
            }
        }   
    window.requestAnimationFrame(draw);    
    } 
}

function colors(){
    document.getElementById('about-paragraph').style.color = 'rgb(235, 235, 235)';
    
}

function no_colors(){
    document.getElementById('about-paragraph').style.color = 'rgba(207, 207, 207,.9)';
}
