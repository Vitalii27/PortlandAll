$(function() {
    $('.filters__link').on('click', function(e) {
        e.preventDefault();

        var $this = $(this),
            item = $this.closest('.filters__item'),
            container = $this.closest('.filters__list'),
            items = container.find('.filters__item'),
            content = item.find('.filters-acco'),
            outherContent = container.find('.filters-acco')

        if (!item.hasClass('active-acco')) {
            items.removeClass('active-acco')
            item.addClass('active-acco');
            outherContent.slideUp();
            content.slideDown();
        } else {
            item.removeClass('active-acco')
            content.slideUp()
        }

    })
});