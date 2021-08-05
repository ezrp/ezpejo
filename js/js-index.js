$(document).ready(function(){
    $("a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 1500, function(){
                window.location.hash = hash;});
      }
    });
});

function mouseOver(){
    document.getElementById('change-letter').className='changeLetter';
    document.getElementById('canvas').style.borderColor='rgba(207, 207, 207,.9)';
    document.getElementById('eye').style.color = 'rgb(0, 128, 128)';
    document.getElementById('book').style.color = 'rgb(233, 198, 0)';
    document.getElementById('fire').style.color = 'rgb(206, 7, 156)';
}

function mouseOut(){
    document.getElementById('change-letter').className='unchangeLetter';
    document.getElementById('canvas').style.borderColor='#555';
    document.getElementById('eye').style.color = 'rgba(207, 207, 207,.9)';
    document.getElementById('book').style.color = 'rgba(207, 207, 207,.9)';
    document.getElementById('fire').style.color = 'rgba(207, 207, 207,.9)';
}
