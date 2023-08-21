$(document).ready(function(){

    // login popup 
  $(".login_popup_show").on("click", function(){
    $(".login_popup").fadeIn();
  })
  $(".close_login").on("click", function(){
    
    $(".login_popup").fadeOut();
  })
})