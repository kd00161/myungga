// sub 1-1.js

// 2단계 메뉴
$(function () {
  $('#gnb > .depth1 > li').hover(
      function () {
          $('.depth2')
              .stop().slideDown(300);
      },
      function () {
          $('.depth2')
              .stop().slideUp(300);
      }
  )
})

// hamburger
$(function(){
  $('.hamburger_icon').click(function(){
      $('.hamburger_list').slideToggle();
  })   
});