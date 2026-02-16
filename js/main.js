$(function () {
  // ========================
  // ハンバーガーメニュー & SPメニュー
  // ========================
  const btn  = $('.btn-trigger');
  const menu = $('.sp-menu-wrapper');
  const body = $('body');
  
  // 開閉処理
  function toggleMenu() {
    const isOpen = btn.hasClass('active');
  
    btn.toggleClass('active')
        .attr('aria-expanded', String(!isOpen));
  
    menu.toggleClass('is-active');
    body.toggleClass('is-fixed');
  }
  
  // 閉じる処理
  function closeMenu() {
    btn.removeClass('active')
        .attr('aria-expanded', 'false');
  
    menu.removeClass('is-active');
    body.removeClass('is-fixed');
  }
  
  // ボタンクリック
  btn.on('click', toggleMenu);
  
  // メニューリンククリック
  menu.on('click', '.sp-menu__link', closeMenu);

  // ========================
  // モーダル開閉
  // ========================
  $('.js-open').on('click', function () {
    const item = $(this).closest('.modal-wrapper');
    item.find('.js-modal, .js-mask')
      .removeClass('hidden')
      .addClass('is-active');
    $('body').addClass('is-fixed');
  });
  
  $('.js-close, .js-mask').on('click', function () {
    const item = $(this).closest('.modal-wrapper');
    item.find('.js-modal, .js-mask')
      .removeClass('is-active');
  
    setTimeout(function () {
      item.find('.js-modal, .js-mask')
        .addClass('hidden');
    }, 400);
  
    $('body').removeClass('is-fixed');
  });
  
  // ========================
  // アコーディオン
  // ========================
  $('.accordion-header').click(function() {
    $(this).next('.accordion-content').slideToggle();
    $(this).toggleClass('active');
  });
  // ========================
  // slickスライダー
  // ========================
  $('.slider').slick({
    speed: 2000,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: 'ease',
    arrows: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          variableWidth: false
        }
      }
    ]
  });
  
});