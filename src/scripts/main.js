var btnHeader = document.querySelector('.navbar__btn');
btnHeader.addEventListener('click', function () {
    var menu = document.querySelector('.nav__menu');
    menu.classList.toggle('open__menu');
});
function videoplay() {
    var btnVideo = document.querySelector('.btn__video');
    btnVideo.addEventListener('click', function () {
        var close = document.querySelector('.video__info');
        close.classList.toggle('closeSection');
        var video = document.getElementById('video__gallery');
        video.play()
    });
}
videoplay();
setTimeout(function() {$('.more__info').addClass('animated slideInDown'); }, 3000);


// var btnVideo = document.querySelector('.btn__video');
// btnVideo.addEventListener('click', function () {
//     var close = document.querySelector('.video__info');
//     close.classList.toggle('closeSection');
// });
// function vidplay() {
//     var video = document.getElementById('video__gallery');
//     var btnVideo = document.querySelector('.btn__video');
//     btnVideo.addEventListener('click', function () {
//         video.play()
//     })
// }
// vidplay();