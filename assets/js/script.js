/* Remove preload class from body */
function loaded() {
   document.body.classList.remove("preload");
}

// Mobile nav toggle
$(document).ready(function () {
   $('#mobile-toggle').click(function () {
      $(this).toggleClass('open');

   });
});