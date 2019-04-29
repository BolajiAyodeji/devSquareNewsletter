$(document).ready(function() {
  // Initialize timeout
  var timeout;

  resetTimer = function() {
      clearTimeout(timeout);
      timeout = setTimeout(function() {
          $("#pop-up").fadeIn("slow");
      }, 300000);
  }

  document.onmousemove = resetTimer;
  document.onclick = resetTimer;
  document.onscroll = resetTimer;


  $(".show-drop-down").click(function(e) {
      var drop_down_element = $(this).data('drop-down-id');
      if (drop_down_element !== null) {
          $(".full-nav-holder").fadeOut('fast');
          $(".show-drop-down").removeClass('active');
          if (!$('#' + drop_down_element).is(':visible')) {
              $(this).addClass('active');
              $('#' + drop_down_element).fadeIn('fast');
          } else {
              $(this).removeClass('active');
              $('#' + drop_down_element).fadeOut('fast');
          }
      }
      e.stopPropagation();
  });

  $(document).click(function(e) {
      var dropdown = $(".full-nav-holder");
      if (!dropdown.is(e.target) && dropdown.has(e.target).length === 0) {
          $(".full-nav-holder").fadeOut('fast');
          $(".show-drop-down").removeClass('active');
      }
  });
});
