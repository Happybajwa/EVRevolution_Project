//will hide the cusrrent class and show a message to user
$(document).ready(function (){
    $("#hide").click(function (){
      $(".feedback").hide(3000);
      $("#thankyou").delay(4000).text("Thank you for your feedback");
      $("#thankyou").css("margin-top","40px");
    });
  });

//will hide the cusrrent class and show a message to user
  $(document).ready(function (){
    $("#hidefine").click(function (){
      $(".feedback").hide(3000);
      $("#thankyou").text("Thank you for your feedback");
      $("#thankyou").css("margin","40px");
    });
  });