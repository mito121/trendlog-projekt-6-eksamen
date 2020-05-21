// Remove preload class from body
function loaded() {
   document.body.classList.remove("preload");
}


// Open mobile filter menu
let open = false;
$('#filter-menu-btn').click(function () {
   if (open == false) {
      $('.filter-menu-overlay').css("display", "block");
      $('.filter-menu').css("left", "0");
      let open = true;
   } else {
      $('.filter-menu-overlay').css("display", "none");
      let open = false;
   }
});

// Close mobile filter menu on overlay click
$('.filter-menu-overlay').click(function (e) {
   e.stopPropagation();
   $('.filter-menu-overlay').css("display", "none");
   let open = false;
});

// Close mobile filter menu on X click
$('#closeFilterMenu').click(function (e) {
   e.stopPropagation();
   $('.filter-menu-overlay').css("display", "none");
   let open = false;
});



$(document).ready(function () {
   // Mobile nav toggle
   const menuIcon = document.querySelector(".burger-menu");
   const navbar = document.querySelector(".mobile-nav");

   menuIcon.addEventListener("click", () => {
      navbar.classList.toggle("change");
   });


   // File input
   $('.file-upload').children("input").bind('change', function () {
      var fileName = '';
      fileName = $(this).val().split("\\").slice(-1)[0];

      if (fileName.length > 0) {
         $(this).parent().children("span:nth-child(3)").html(fileName);
      } else {
         $(this).parent().children("span:nth-child(3)").html('No file selected');
      }
   });


   // Add attachment
   var attachmentList = "";
   $('.file-upload-attach').children("input").bind('change', function () {
      var fileName = '';
      fileName = $(this).val().split("\\").slice(-1)[0];
      
      if(fileName.length > 0){
               attachmentList += "<div class='todoItem'>" + fileName + "</div>";
      
      // Output attachment list to html
      $('#uploaded-attachments').html(attachmentList);
      }


   });



});

// prevent event bubbling
function doNothing(e) {
   e.stopPropagation();
}