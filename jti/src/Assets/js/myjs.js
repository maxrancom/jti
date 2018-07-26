
const $ = window.$;
$(document).ready(function(){
    $('.form-btn').click(function(){
        $(this).parent('.form-wrap').toggleClass('active');
    });
    $('#MobNavBtn').click(function(){
      $(this).toggleClass('active');
      $('ul.mobile_menu').toggleClass('active');
    });
    $('.login-icon').click(function(){
      $(this).toggleClass('active');
      $('.mobile_login').toggleClass('active');
    });
    console.log('loaded');
    if($('#contactform').length){
        $("#contactform").validate({
            // Specify validation rules
            rules: {
              // The key name on the left side is the name attribute
              // of an input field. Validation rules are defined
              // on the right side
              fullname: "required",
              subject: "required",
              phone: "required",
              textarea:"required",
              email: {
                required: true,
                // Specify that email should be validated
                // by the built-in "email" rule
                email: true
              }
            },
            // Specify validation error messages
            messages: {
                fullname: "Please enter your firstname",
              email: "Please enter a valid email address"
            },
            // Make sure the form is submitted to the destination defined
            // in the "action" attribute of the form when valid
            submitHandler: function(form) {
              form.submit();
            }
          });

    }
 
});
var lastScrollTop = 0;
$(window).on('scroll', function () {
var st = $(this).scrollTop();
if (st > 300) {
$('#BackToTop').addClass('show');
if (!$('header').hasClass('stiky')) {
$('#HeadFix').height($('header').outerHeight());
}
$('header').addClass('stiky');
if (st > lastScrollTop) {
$('header').addClass('sdown');
$('header').removeClass('sup');
} else {
$('header').removeClass('sdown');
$('header').addClass('sup');
}
lastScrollTop = st;
} else {
$('#BackToTop').removeClass('show');
$('header').removeClass('stiky');
$('#HeadFix').height(0);
$('header').removeClass('sup sdown');
}

});

 
