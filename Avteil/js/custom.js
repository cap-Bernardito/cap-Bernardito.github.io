$(document).ready(() => {
  let openMenu = false;

  function changeRowForm(flag) {
    if (flag === true) {
      $('#contacts__form-1 textarea').attr('rows', 12);
    } else {
      $('#contacts__form-1 textarea').attr('rows', 9);
    }
  }

  function fixedMenu(flag, load) {
    const $fwrap = $('#fixed-wrap');
    const $fwrapHeigth = $('#fixed-wrap').outerHeight();
    const $menu = $('#main-nav');
    const $header = $('#header');
    const $fpadd = $('#fixed-padding');

    if (flag === true) {
      $fpadd.outerHeight(load === 'load' ? 100 : $fwrapHeigth);
      $fwrap.addClass('fixed-wrap');
      $menu.addClass('main-nav-scroll');
      $header.addClass('header-scroll');
    } else {
      $fwrap.removeClass('fixed-wrap');
      $menu.removeClass('main-nav-scroll');
      $header.removeClass('header-scroll');
      $fpadd.outerHeight(0);
    }
  }

  function insertMenu(flag) {
    if (flag === true) {
      $('#header').append($('#footer'));
    } else {
      $('body').append($('#footer'));
    }
  }

  function insertCatTopNav(flag) {
    if (flag !== true) {
      $('#catalog-top-nav').append($('#nav-catalog'));
    } else {
      $('#header .wrapper .row').append($('#nav-catalog'));
    }
  }

  function restroyFooter(flag) {
    if (flag === true && openMenu === false) {
      $('#foot-nav-2').prepend($('#li-1'));
      $('#foot-nav-3').prepend($('#li-4, #li-5, #li-6'));
    } else if (flag === false && openMenu === false) {
      $('#foot-nav-1').append($('#li-1'));
      $('#foot-nav-2').append($('#li-4, #li-5, #li-6'));
    }

    if (openMenu === true) {
      $('#foot-nav-2').append($('#li-1'));
    } else {
      $('#foot-nav-1').append($('#li-1'));
    }
  }

  function router(load) {
    let sizeWindow;
    let scrollWindow;

    if ($(window).scrollTop() > 1 || window.innerWidth < 1100) { scrollWindow = 'onScroll'; }

    if (window.innerWidth > 1100) { sizeWindow = 'full'; } else { sizeWindow = 'lg'; }

    switch (sizeWindow) {
      case 'lg':
        restroyFooter(false);
        changeRowForm(false);
        insertCatTopNav(false);
        break;
      default:
        insertMenu(false);
        restroyFooter(true);
        changeRowForm(true);
        insertCatTopNav(true);
    }

    switch (scrollWindow) {
      case 'onScroll':
        fixedMenu(true, load);
        insertCatTopNav(true);
        break;
      default:
        fixedMenu(false);
        insertCatTopNav(false);
    }
  }

  router('load');

  $(window).on('resize', () => {
    router();
  });

  $(window).on('scroll', () => {
    router();
  });


  /* Toggle main menu */
  $('#menu-toggle').on('click', function () {
    const $that = $(this);
    const $footer = $('#footer');
    const $wrapHide = $('#wrap-hide');

    $that.toggleClass('active');

    if ($that.hasClass('active')) {
      $('body').attr('style', 'overflow: scroll;');
      insertMenu(true);
      openMenu = true;
      restroyFooter();
      $wrapHide.fadeOut();
    }

    $footer.slideToggle(300, function () {
      if ($(this).css('display') === 'none') {
        $(this).removeAttr('style');
        $('body').removeAttr('style');
        $wrapHide.fadeIn();

        if (!$that.hasClass('active')) {
          openMenu = false;
          restroyFooter();
          insertMenu(false);
        }
      }
    });
  });

  $('.main-nav__item-list').on('click', () => {
// $(this).toggleClass('main-nav__item-active');
    $('.main-nav__item-list .main-nav__list-v1').slideToggle(300, function () {
      if ($(this).css('display') === 'none') {
        $(this).removeAttr('style');
      }
    });
  });
});
