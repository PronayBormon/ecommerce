$(document).ready(function(){
    // a link 
    var selector = '.a_link';
    $(selector).on('click', function(){
        $(selector).removeClass('active');
        $(this).addClass('active');
    });
    // b link 
    var selectors = '.b_link';
    $(selectors).on('click', function(){
        $(selectors).removeClass('active');
        $(this).addClass('active');
    });
  })