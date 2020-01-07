 //Contact Us
$("#submit_btn").click(function() {

    var user_name = $('input[name=first_name]').val();
    var user_phone = $('input[name=phone]').val();

    //simple validation at client's end
    var post_data, output;
    var proceed = true;
    if (user_name == "") {
        proceed = false;
    }
    if (user_phone == "") {
        proceed = false;
    }
   // if (user_phone == "") {
        //proceed = false;
   // }

    //everything looks good! proceed...
    if (proceed) {

        //data to be sent to server
        post_data = { 'userName': user_name, 'userPhone': user_phone};

        //Ajax post data to server
        $.post('contact.php', post_data, function(response) {

            //load json data from server and output message
            if (response.type == 'error') {
                output = '<div class="alert-danger" style="padding:10px; margin-bottom:25px;">' + response.text + '</div>';
            } else {
                output = '<div class="alert-success" style="padding:10px; margin-bottom:25px;">' + response.text + '</div>';

                //reset values in all input fields
                $('.getin_form input').val('');
                $('.getin_form textarea').val('');
            }

            $("#result").hide().html(output).slideDown();
        }, 'json');

    }
    else {
           output = '<div class="alert-danger" style="padding:10px; margin-bottom:25px;">Please provide the missing fields.</div>';
           $("#result").hide().html(output).slideDown();
    }

});
$(document).on('contextmenu', function() {
    return false;
  });

  function getvotes() {
    $.getJSON("https://primeforce.pythonanywhere.com/business/1IQOSdev", function(data) {
  
        console.log(data);
        $('.value').text(`Ср. оценка: ${data['rating']}/5`);
        $('.votes').text(`Отзывов: ${data['votes']}`);
        let rating_converted = data['rating']*20;
        $('.fill-ratings').css({'width': `${rating_converted}%`})
    });
  
    var star_rating_width = $('.fill-ratings span').width();
    $('.star-ratings').width(star_rating_width);
  };
function explode(){
        $(document).ready(function(){
          // Show the Modal on load
          $("#callbackModal").modal("show");
        });}
setTimeout(explode, 40000);

function setModalTitle(modalTitle) {
    switch (modalTitle) {
      case 0:
        button = "Заказать";
        title = "Заказ звонка";
        break;
      case 1: 
        button = "Зазать";
        title = "Заказ ремонта";
        break;
      case 2:
        button = "Узнать";
        title = "Узнать стоимость";
        break;
      case 3:
          button = "Получить";
        title = "Получить консультацию";
        break;
     default:
        button = "Заказать";
        title = "Заказ звонка";
        break;
  }
  document.getElementById("modalButton").innerHTML = button;
  document.getElementById("modalTitle").innerHTML = title;
  }
var slideIndex = 1;
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
if (n > slides.length){
  slideIndex = 1
}
if (n < 1){
  slideIndex = slides.length
}
for (i = 0; i < slides.length; i++){
  slides[i].style.display = "none";

}
for (i = 0; i < dots.length; i++){
  dots[i].className = dots[i].className.replace("active","");

}
slides[slideIndex-1].style.display = "block";
dots[slideIndex-1].className += "active";
};


function plusSlides(n){
  showSlides(slideIndex += n);
}


