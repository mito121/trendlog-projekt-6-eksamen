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


   // Open mobile filter menu
   let open = false;
   $('#filter-menu-btn').click(function () {
      if (open == false) {
         $('.filter-menu-overlay').css("display", "block");
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


   // Toggle mobile calendar view
   $scope.calendarView = function () {
      $('.mobile-resource-dropdown').removeClass("expand-resource");
      $scope.mobileView = 2;
      $('.filter-menu-overlay').css("display", "none");
      let open = false;
   };


   // Go to history tab
   $scope.serviceTab = function () {
      $('.mobile-resource-dropdown').removeClass("expand-resource");
      $scope.tab = 1;
      window.scrollTo(0, 0);
   };
   // Go to history tab
   $scope.historyTab = function () {
      $('.mobile-resource-dropdown').removeClass("expand-resource");
      $scope.tab = 2;
      window.scrollTo(0, 0);
   };
   // Go to settings tab
   $scope.settingsTab = function () {
      $('.mobile-resource-dropdown').removeClass("expand-resource");
      $scope.tab = 3;
      window.scrollTo(0, 0);
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
      {id: '3', name: 'Washer'}
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

   // Mobile resource settings service units
   $scope.resourceServiceUnits = [
      {id: 1, name: 'Days'},
      {id: 2, name: 'Weeks'},
      {id: 3, name: 'Months'},
      {id: 4, name: 'Years'}
   ];

   // Preselect 'Sort by'
   $scope.sortEntries = $scope.resourceData[0];
   // Preselect 'Group'
   $scope.groupEntries = $scope.resourceGroups[0];
   // Preselect 'Entry layout'
   $scope.layoutEntries = $scope.serviceLayoutOptions[0];

   // Preselect resource settings service unit
   $scope.mobileServiceUnit = $scope.resourceServiceUnits[0];


   // Resource settings service
   // Calculate next service
   $(function () {
      $("#settings-resource-ls").datepicker();
   });

   $scope.nextServiceCalc = function () {
      let lastService = new Date($scope.mobileServiceLastService);
      let serviceInterval = $scope.mobileServiceInterval;
      let serviceIntervalUnit = $scope.mobileServiceUnit;

      if ($scope.mobileServiceInterval !== undefined && $scope.mobileServiceUnit !== undefined) {
         // If unit is days
         if (serviceIntervalUnit.id == 1) {
            var nextService = moment(lastService, "MM-DD-YYYY").add(serviceInterval, 'days').calendar();
            $scope.mobileNextService = nextService;
         }
         // If unit is weeks
         if (serviceIntervalUnit.id == 2) {
            var nextService = moment(lastService, "MM-DD-YYYY").add(serviceInterval, 'weeks').calendar();
            $scope.mobileNextService = nextService;
         }
         // If unit is months
         if (serviceIntervalUnit.id == 3) {
            var nextService = moment(lastService, "MM-DD-YYYY").add(serviceInterval, 'months').calendar();
            $scope.mobileNextService = nextService;
         }
         // If unit is years
         if (serviceIntervalUnit.id == 4) {
            var nextService = moment(lastService, "MM-DD-YYYY").add(serviceInterval, 'years').calendar();
            $scope.mobileNextService = nextService;
         }
      } else {
         $scope.mobileNextService = '';
      }

   };

   // Add new calculate next service

   $(function () {
      $("#step-2b-ls").datepicker();
   });

   $scope.addNewNextServiceCalc = function () {
      let lastService = new Date($scope.addNew2bLastService);
      let serviceInterval = $scope.addNewServiceInterval;
      let serviceIntervalUnit = $scope.addNewServiceUnit;

      if ($scope.addNewServiceInterval !== undefined && $scope.addNewServiceUnit !== undefined) {
         // If unit is days
         if (serviceIntervalUnit.id == 1) {
            var nextService = moment(lastService, "MM-DD-YYYY").add(serviceInterval, 'days').calendar();
            $scope.addNewNextService = nextService;
         }
         // If unit is weeks
         if (serviceIntervalUnit.id == 2) {
            var nextService = moment(lastService, "MM-DD-YYYY").add(serviceInterval, 'weeks').calendar();
            $scope.addNewNextService = nextService;
         }
         // If unit is months
         if (serviceIntervalUnit.id == 3) {
            var nextService = moment(lastService, "MM-DD-YYYY").add(serviceInterval, 'months').calendar();
            $scope.addNewNextService = nextService;
         }
         // If unit is years
         if (serviceIntervalUnit.id == 4) {
            var nextService = moment(lastService, "MM-DD-YYYY").add(serviceInterval, 'years').calendar();
            $scope.addNewNextService = nextService;
         }
      } else {
         $scope.addNewNextService = '';
      }

   };


   // Resource settings checklist
   $scope.todoList = [];

   let todoIndex = 0;

   $scope.todoAdd = function () {
      $scope.todoList.push({i: todoIndex, todoText: $scope.todoInput});
      $scope.todoInput = "";
      document.getElementById("todoInput").focus();
      todoIndex++;
   };

   $scope.removeTodo = function (i) {
      $scope.todoList = $scope.todoList.splice(i, 1);
   };



//   $scope.sortableOptions = {
//      update: function (e, ui) {
//         var logEntry = tmpList.map(function (i) {
//            return i.value;
//         }).join(', ');
//         $scope.sortingLog.push('Update: ' + logEntry);
//      },
//      stop: function (e, ui) {
//         // this callback has the changed model
//         var logEntry = tmpList.map(function (i) {
//            return i.value;
//         }).join(', ');
//         $scope.sortingLog.push('Stop: ' + logEntry);
//      }
//   };

});
