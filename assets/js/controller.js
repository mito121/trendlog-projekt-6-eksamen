app.controller("mainCtrl", function ($scope, $http) {

   // Redirect to index.html when logo is clicked
   $('.nav-logo').click(function (e) {
      e.preventDefault();
      window.location.replace('index.html');
   });

   // Kill dead things
   $('.doNothing').click(function (e) {
      e.preventDefault();
   });

   // Navbar profile dropdown
   var n = 0;
   $('#profile-dropdown-btn').click(function () {
      if (n === 0) {
         $('#nav-profile-dropdown').addClass("block");
         n = 1;
      } else {
         $('#nav-profile-dropdown').removeClass("block");
         n = 0;
      }
   });
   // Close dropdown on click
   $('#nav-profile-list').click(function () {
      $('#nav-profile-dropdown').removeClass("block");
      n = 0;
   });


});