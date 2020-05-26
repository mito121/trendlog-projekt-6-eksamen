// Remove preload class from body
function loaded() {
   document.body.classList.remove("preload");
}

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


   // Add attachment (Mobile settings)
   var attachmentList = "";
   $('.file-upload-attach').children("input").bind('change', function () {
      var fileName = '';
      fileName = $(this).val().split("\\").slice(-1)[0];

      if (fileName.length > 0) {
         attachmentList += "<div class='todoItem'><div>" + fileName + "</div> <div><img src='assets/icons/delete-icon-grey.svg' alt='Delete checkbox'></div></div>";

         // Output attachment list to html
         $('#uploaded-attachments').html(attachmentList);
      }
   });


   // Add attachment (Mobile add new)
   var addnewAttachmentList = "";
   $('.addnew-file-upload-attach').children("input").bind('change', function () {
      var fileName = '';
      fileName = $(this).val().split("\\").slice(-1)[0];

      if (fileName.length > 0) {
         addnewAttachmentList += "<div class='todoItem'><div>" + fileName + "</div> <div><img src='assets/icons/delete-icon-grey.svg' alt='Delete checkbox'></div></div>";

         // Output attachment list to html
         $('#addnew-uploaded-attachments').html(addnewAttachmentList);
      }
   });


   // Add attachment (Desktop settings)
   var desktopAttachmentList = "";
   $('.desktop-file-upload-attach').children("input").bind('change', function () {
      var fileName = '';
      fileName = $(this).val().split("\\").slice(-1)[0];

      if (fileName.length > 0) {
         desktopAttachmentList += "<div class='todoItem'><div>" + fileName + "</div> <div><img src='assets/icons/delete-icon-grey.svg' alt='Delete checkbox'></div></div>";

         // Output attachment list to html
         $('#desktop-uploaded-attachments').html(desktopAttachmentList);
      }
   });


   // Add attachment (Desktop add new)
   var addnewDesktopAttachmentList = "";
   $('.addnew-desktop-file-upload-attach').children("input").bind('change', function () {
      var fileName = '';
      fileName = $(this).val().split("\\").slice(-1)[0];

      if (fileName.length > 0) {
         addnewDesktopAttachmentList += "<div class='todoItem'><div>" + fileName + "</div> <div><img src='assets/icons/delete-icon-grey.svg' alt='Delete checkbox'></div></div>";

         // Output attachment list to html
         $('#addnew-desktop-uploaded-attachments').html(addnewDesktopAttachmentList);
      }
   });
});

// Info popovers

// Close popover
$('.closePopover').click(function () {
   $('.popover').removeClass("d-block");
});

$('#popover1').click(function () {
   $('#popover-1').toggleClass("d-block");
});

// prevent event bubbling
function doNothing(e) {
   e.stopPropagation();
}

/* **** Modals **** */

// Desktop add new resource modal
var addnewModal = document.getElementById("desktop-add-new");

function openDesktopAddNew() {
   addnewModal.style.display = "block";

   // Disable scroll på baggrund når modal er åbnet
   $('html body').css("overflow", "hidden");
}


//"DELETE" modal
var deleteModal = document.getElementById("deleteModal");
//"COPY" modal
var copyModal = document.getElementById("copyModal");
//"QR" modal
var qrkodeModal = document.getElementById("qrkodeModal");

// klik på knap, åben modal
function triggerDeleteModal() {
   deleteModal.style.display = "block";

   // Disable scroll på baggrund når modal er åbnet
   $('html body').css("overflow", "hidden");
}
function triggerCopyModal() {
   copyModal.style.display = "block";

   // Disable scroll på baggrund når modal er åbnet
   $('html body').css("overflow", "hidden");
}
function triggerQrkodeModal() {
   qrkodeModal.style.display = "block";

   // Disable scroll på baggrund når modal er åbnet
   $('html body').css("overflow", "hidden");
}

//luk modal
function closeModals() {
   deleteModal.style.display = "none";
   copyModal.style.display = "none";
   qrkodeModal.style.display = "none";
   addnewModal.style.display = "none";

   // Enable scroll på baggrund når igen modal lukkes
   $('html body').css("overflow", "auto");
}
// Når man klikker uden for modalet - luk!
window.onclick = function (event) {
   if (event.target == deleteModal || event.target == copyModal || event.target == qrkodeModal || event.target == addnewModal) {
      deleteModal.style.display = "none";
      copyModal.style.display = "none";
      qrkodeModal.style.display = "none";
      addnewModal.style.display = "none";

      // Enable scroll på baggrund når igen modal lukkes
      $('html body').css("overflow", "auto");
   }
};
