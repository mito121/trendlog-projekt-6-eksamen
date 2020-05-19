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

   // Expand resource drop down menu
   $scope.expandResourceDropDown = function (resource) {

      let item = $('#drop-down' + resource);
      item.toggleClass("expand-resource");

      $('.mobile-resource-dropdown').not(item).removeClass("expand-resource");
      setTimeout(function () {
         // Scroll to selected item
         $('html, body').animate({
            scrollTop: $('#mobile-resource' + resource).offset().top - 50
         }, 250);
      }, 450);
      clearTimeout();

   };


   // Service layout options
   $scope.serviceLayoutOptions = [
      {id: '1', name: 'Cards'},
      {id: '2', name: 'Lists'}
   ];

   // Resource data
   $scope.resourceData = [
      {id: '1', name: 'ID'},
      {id: '2', name: 'Name'},
      {id: '3', name: 'Type'},
      {id: '4', name: 'Group'},
      {id: '5', name: 'Enabled'},
      {id: '6', name: 'Last service'},
      {id: '7', name: 'Next service'}
   ];

   // Resource groups
   $scope.resourceGroups = [
      {id: '0', name: 'All'},
      {id: '1', name: 'Machine'},
      {id: '2', name: 'Car'},
      {id: '3', name: 'Rødbedemaskine'},
      {id: '4', name: 'Ugle'}
   ];

   // Service items
   $scope.resources = [
      {id: '1', enabled: 'true', name: 'Rødbederenser', group: 'Machine', type: 'Preventive', nextService: '20-04-4020', lastService: '17-05-2020'},
      {id: '2', enabled: 'true', name: 'Rødbederusker', group: 'Machine', type: 'Predictive', nextService: '15-12-2020', lastService: '23-12-2018'},
      {id: '3', enabled: 'true', name: 'Rødbedevasker', group: 'Machine', type: 'Preventive', nextService: '15-12-2020', lastService: '23-12-2018'},
      {id: '4', enabled: 'true', name: 'Rødbedeskrubber', group: 'Machine', type: 'Preventive', nextService: '15-12-2020', lastService: '23-12-2018'},
      {id: '5', enabled: 'true', name: 'Rødbedefejer', group: 'Machine', type: 'Predictive', nextService: '15-12-2020', lastService: '23-12-2018'},
      {id: '6', enabled: 'false', name: 'Rødbederasler', group: 'Machine', type: 'Preventive', nextService: '21-01-2022', lastService: '16-03-2020'},
      {id: '7', enabled: 'true', name: 'Rødbededusker', group: 'Machine', type: 'Preventive', nextService: '18-04-2021', lastService: '04-04-2024'},
      {id: '8', enabled: 'true', name: 'Rødbederuller', group: 'Machine', type: 'Predictive', nextService: '24-06-2021', lastService: '02-04-2024'},
      {id: '9', enabled: 'true', name: 'Rødbedehakker', group: 'Machine', type: 'Predictive', nextService: '31-09-2021', lastService: '08-07-2024'},
      {id: '10', enabled: 'true', name: 'Rødbederetter', group: 'Machine', type: 'Preventive', nextService: '28-01-2021', lastService: '06-08-2024'}
   ];

   // Preselect 'Sort by'
   $scope.sortEntries = $scope.resourceData[0];
   // Preselect 'Group'
   $scope.groupEntries = $scope.resourceGroups[0];
   // Preselect 'Entry layout'
   $scope.layoutEntries = $scope.serviceLayoutOptions[0];

});
