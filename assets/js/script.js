// Remove preload class from body
function loaded() {
  document.body.classList.remove("preload");
}




// Open mobile add new menu
let alsoOpen = false;
$('#add-new-menu-btn').click(function() {
  if (alsoOpen == false) {
    $('.add-new-menu-overlay').css("display", "block");
    let alsoOpen = true;
  } else {
    $('.add-new-menu-overlay').css("display", "none");
    let alsoOpen = false;
  }
});

// Close mobile add new menu on overlay click
$('.add-new-menu-overlay').click(function(e) {
  e.stopPropagation();
  $('.add-new-menu-overlay').css("display", "none");
  let alsoOpen = false;
});

// Close mobile add new menu on X click
$('.add-new-close-btn').click(function(e) {
  e.stopPropagation();
  $('.add-new-menu-overlay').css("display", "none");
  let alsoOpen = false;
});




$(document).ready(function() {
  // Mobile nav toggle
  const menuIcon = document.querySelector(".burger-menu");
  const navbar = document.querySelector(".mobile-nav");

  menuIcon.addEventListener("click", () => {
    navbar.classList.toggle("change");
  });


  // File input
  $('.file-upload').children("input").bind('change', function() {
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
  $('.file-upload-attach').children("input").bind('change', function() {
    var fileName = '';
    fileName = $(this).val().split("\\").slice(-1)[0];

    if (fileName.length > 0) {
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


//"DELETE" modal
// Get the modal
var deleteModal = document.getElementById("deleteModal");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// klik på knap, åben modal
function triggerDeleteModal() {
  deleteModal.style.display = "block";
}

function closeModals() {
  deleteModal.style.display = "none";
  copyModal.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == deleteModal || event.target == copyModal) {
    deleteModal.style.display = "none";
    copyModal.style.display = "none";
  }
}
//"COPY" modal
// Get the modal
var copyModal = document.getElementById("copyModal");

// klik på knap, åben modal
function triggerCopyModal() {
  copyModal.style.display = "block";
}
