$(function () {

  // ========================
  // アコーディオン
  // ========================
  $('.accordion-header').on('click', function () {
    $(this)
      .toggleClass('active')
      .next('.accordion-content')
      .slideToggle();
  });


  // ========================
  // ハンバーガーメニュー & SPメニュー
  // ========================
  const $btn  = $('.btn-trigger');
  const $menu = $('.header__nav');
  const $body = $('body');
  const $logo = $('.header__logo-link img');

  // ロゴパス定義（可読性向上）
  const LOGO_WHITE = 'img/tetote-logo-white 1.png';
  const LOGO_BLACK = 'img/Group 18.png';


  // ------------------------
  // メニューを開く
  // ------------------------
  function openMenu() {
    $btn.addClass('active').attr('aria-expanded', 'true');
    $menu.addClass('is-active');
    $body.addClass('is-fixed');
    $logo.attr('src', LOGO_BLACK);
  }

  // ------------------------
  // メニューを閉じる
  // ------------------------
  function closeMenu() {
    $btn.removeClass('active').attr('aria-expanded', 'false');
    $menu.removeClass('is-active');
    $body.removeClass('is-fixed');
    $logo.attr('src', LOGO_WHITE);
  }

  // ------------------------
  // トグル処理
  // ------------------------
  function toggleMenu() {
    if ($btn.hasClass('active')) {
      closeMenu();
    } else {
      openMenu();
    }
  }

  // イベント登録
  $btn.on('click', toggleMenu);
  $menu.on('click', '.sp-menu__link', closeMenu);

  // ========================
// FV スライダー（JS版）
// ========================
const $slides = $('.fv__slider-item');
const slideCount = $slides.length;

let currentIndex = 0;
const slideInterval = 5000; // 5秒ごとに切替

// 初期表示
$slides.eq(currentIndex).addClass('is-active');

setInterval(function () {

  // 現在のスライドを非表示
  $slides.eq(currentIndex).removeClass('is-active');

  // 次のスライド番号
  currentIndex = (currentIndex + 1) % slideCount;

  // 次のスライドを表示
  $slides.eq(currentIndex).addClass('is-active');

}, slideInterval);

});
