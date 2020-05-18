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

   // Navbar profile dropdown (desktop)
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
   

   // Service items
   $scope.resources = [
      {id: '1', enabled: 'true', name: 'Rødbederesner', group: 'Machine', type: '1', nextService: '20-04-4020', lastService: '17-05-2020'},
      {id: '2', enabled: 'true', name: 'Rødbederusker', group: 'Machine', type: '1', nextService: '15-12-2020', lastService: '23-12-2018'},
      {id: '3', enabled: 'true', name: 'Rødbedevasker', group: 'Machine', type: '1', nextService: '15-12-2020', lastService: '23-12-2018'},
      {id: '4', enabled: 'true', name: 'Rødbedeskrubber', group: 'Machine', type: '2', nextService: '15-12-2020', lastService: '23-12-2018'},
      {id: '5', enabled: 'true', name: 'Rødbedefejer', group: 'Machine', type: '1', nextService: '15-12-2020', lastService: '23-12-2018'},
      {id: '6', enabled: 'false', name: 'Rødbederasler', group: 'Machine', type: '2', nextService: '21-01-2022', lastService: '16-03-2020'},
      {id: '7', enabled: 'true', name: 'Rødbededusker', group: 'Machine', type: '1', nextService: '18-04-2021', lastService: '04-04-2024'},
      {id: '8', enabled: 'true', name: 'Rødbederuller', group: 'Machine', type: '1', nextService: '24-06-2021', lastService: '02-04-2024'},
      {id: '9', enabled: 'true', name: 'Rødbedehakker', group: 'Machine', type: '1', nextService: '31-09-2021', lastService: '08-07-2024'},
      {id: '10', enabled: 'true', name: 'Rødbederetter', group: 'Machine', type: '1', nextService: '28-01-2021', lastService: '06-08-2024'}
   ];

});
