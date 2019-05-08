// JS Goes here - ES6 supported
/*const mySiema = new Siema({
  selector: '.gallery-carousel',
  duration: 200,
  easing: 'ease',
  perPage: 1,
  startIndex: 0,
  draggable: true,
  threshold: 20,
  loop: true
});

document.querySelector('.prev').addEventListener('click', () => mySiema.prev());
document.querySelector('.next').addEventListener('click', () => mySiema.next());*/

$(function() {
  if(!$.cookie("samenbieke")){
    $('.sidebar-nav').remove();
    $('.homepage-content').remove();
    $('.container form.bevestigen').remove();
  } else {
    $('.homepage-login').remove();
  }

  $('.homepage-btn.login').on('click', function(e) {
      e.preventDefault();
      if($('.login-sb').val() == "29052019"){
        $.cookie("samenbieke", "ingelogd");
        window.location.href = "/";
      } else {
        $('.error').addClass('visible');
        $('.login-sb').addClass('error');
      }

  });

});