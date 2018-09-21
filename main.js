$(document).ready(function () {

    $('.img1').hover(function () {

        var posx = 200;
        var posy = 200;
        $('.dan-profile').css({
            'position': 'absolute',
                'left': posx + 'px',
                'top': posy + 'px',
                'display': 'block'
        });
    },function(){
        console.log('out');
        $('.dan-profile').hide();
    });
});