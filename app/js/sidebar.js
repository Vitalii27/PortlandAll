$(document).ready(function() {
    $('.burger__sort').on('click', function(e) {
        e.preventDefault();
        $('.sidebar').toggleClass('sidebar-active');
    })
});