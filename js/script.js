// Tabs Action
const tabLink = document.querySelectorAll(".tab-menu-link");
const tabContent = document.querySelectorAll(".tab-bar-content");

tabLink.forEach((el) => {
  el.addEventListener("click", activeTab);
});

function activeTab(el) {
  const btnTarget = el.currentTarget;
  const content = btnTarget.dataset.content;

  tabContent.forEach((el) => {
    el.classList.remove("active");
  });

  tabLink.forEach((el) => {
    el.classList.remove("active");
  });

  document.querySelector("#" + content).classList.add("active");
  btnTarget.classList.add("active");
}

$(document).ready(function(){
  $("#menu").on("click","a", function (event) {
      event.preventDefault();
      var activeLink = $(".menu__link-active");
      activeLink.removeClass('menu__link-active');
      $(this).addClass('menu__link-active');
      var id  = $(this).attr('href'),
          top = $(id).offset().top;
      $('body,html').animate({scrollTop: top}, 1500);
  });
  $("#footer__menu").on("click","a", function (event){
    event.preventDefault();
    var id = $(this).attr('href'),
    top = $(id).offset().top;
    $('body, html').animate({scrollTop: top}, 1500);
  });
});

var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});

new WOW().init();