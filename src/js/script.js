// window.addEventListener('DOMContentLoaded', () => {
//     const menu = document.querySelector('.menu'),
//     menuItem = document.querySelectorAll('.menu_item'),
//     hamburger = document.querySelector('.hamburger');

//     hamburger.addEventListener('click', () => {
//         hamburger.classList.toggle('hamburger_active');
//         menu.classList.toggle('menu_active');
//     });

//     menuItem.forEach(item => {
//         item.addEventListener('click', () => {
//             hamburger.classList.toggle('hamburger_active');
//             menu.classList.toggle('menu_active');
//         })
//     })
// })

// $(document).ready(function () {
//     $(".owl-carousel").owlCarousel();
// }); <img src="../img/chevron.png" alt="">

$(document).ready(function () {

    $('.carousel__inner').slick({
        prevArrow: '<button type="button" class="slick-prev"><img src="img/chevron.png" alt=""></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="img/chevron.png" alt=""></button>'
    });

    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function () {
        $(this)
            .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
            .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });

    // $('.catalog-item__link').each(function (i) {
    //     $(this).on('click', function (e) {
    //         e.preventDefault();
    //         $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
    //         $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
    //     })
    // })

    // $('.catalog-item__back').each(function (i) {
    //     $(this).on('click', function (e) {
    //         e.preventDefault();
    //         $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
    //         $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
    //     })
    // })

    function toggleClass(item) {
        $(item).each(function (i) {
            $(this).on('click', function (e) {
                e.preventDefault();
                $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
                $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');
            })
        })
    }

    toggleClass('.catalog-item__link');
    toggleClass('.catalog-item__back');

});

