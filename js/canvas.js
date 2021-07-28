function init(){
    window.requestAnimationFrame(draw);
}

var i = 0;
var op = 0;
function draw(){
    var cn = document.getElementById('canvas-about');
    if(cn.getContext){
        
        if(i<1200){
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
        }   
    window.requestAnimationFrame(draw);    
    } 
}
