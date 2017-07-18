$(document).ready(function() {
    $('.header__burger').on('click', function(e) {
        e.preventDefault();
        $('.mobile').slideToggle(300);
    })
});