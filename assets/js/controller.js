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

   // ============ Filter menu (mobile) ============ //
   // Open mobile filter menu
   let open = false;
   $('#filter-menu-btn').click(function () {
      if (open == false) {
         $('.filter-menu-overlay').css("display", "block");
         $('html body').css("overflow", "hidden");
         let open = true;
      } else {
         $('.filter-menu-overlay').css("display", "none");
         $('html body').css("overflow", "auto");
         let open = false;
      }
   });

   // Close mobile filter menu on overlay click
   $('.filter-menu-overlay').click(function (e) {
      e.stopPropagation();
      $('.filter-menu-overlay').css("display", "none");
      $('html body').css("overflow", "auto");
      let open = false;
   });

   // Close mobile filter menu on X click
   $('#closeFilterMenu').click(function (e) {
      e.stopPropagation();
      $('.filter-menu-overlay').css("display", "none");
      $('html body').css("overflow", "auto");
      let open = false;
   });


   // ============= Add new resource menu (mobile) ===================== //
   // Open mobile add new menu
   let alsoOpen = false;
   $('#add-new-menu-btn').click(function () {
      if (alsoOpen == false) {
         $('.add-new-menu-overlay').css("display", "block");
         $('html body').css("overflow", "hidden");
         let alsoOpen = true;
      } else {
         $('.add-new-menu-overlay').css("display", "none");
         $('html body').css("overflow", "auto");
         let alsoOpen = false;
      }
   });

// Close mobile add new menu on overlay click
   $('.add-new-menu-overlay').click(function (e) {
      e.stopPropagation();
      $('.add-new-menu-overlay').css("display", "none");
      $('html body').css("overflow", "auto");
      let alsoOpen = false;
   });

// Close mobile add new menu on X click
   $('.add-new-close-btn').click(function (e) {
      e.stopPropagation();
      $('.add-new-menu-overlay').css("display", "none");
      $('html body').css("overflow", "auto");
      let alsoOpen = false;
   });

// Close mobile add new menu on cancel
   $scope.cancelNewResource = function () {
      $('.add-new-menu-overlay').css("display", "none");
      $('html body').css("overflow", "auto");
      let alsoOpen = false;
      $scope.step = 1;
   };

// Close mobile add new menu on finish
   $scope.createNewResource = function () {
      $('.add-new-menu-overlay').css("display", "none");
      $('html body').css("overflow", "auto");
      let alsoOpen = false;
      $scope.step = 1;
   };

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
      $('html body').css("overflow", "auto");
      $scope.tab = 1;
      window.scrollTo(0, 0);
   };
   // Go to history tab
   $scope.historyTab = function () {
      $('.mobile-resource-dropdown').removeClass("expand-resource");
      $('html body').css("overflow", "auto");
      $scope.tab = 2;
      window.scrollTo(0, 0);
   };
   // Go to settings tab
   $scope.settingsTab = function () {
      $('.mobile-resource-dropdown').removeClass("expand-resource");
      $('html body').css("overflow", "auto");
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
      {id: '1', enabled: 'true', name: 'Rødbederenser', group: 'Washer', type: 'Preventive', nextService: '25-05-2020', lastService: '17-05-2020', percent: '112'},
      {id: '2', enabled: 'true', name: 'Rødbederiver', group: 'Machine', type: 'Predictive', nextService: '25-05-2020', lastService: '23-12-2018', percent: '112'},
      {id: '3', enabled: 'true', name: 'Rødbedeudhuler', group: 'Machine', type: 'Predictive', nextService: '17-06-2020', lastService: '23-12-2018', percent: '100'},
      {id: '4', enabled: 'true', name: 'Rødbedegraver', group: 'Machine', type: 'Predictive', nextService: '17-06-2020', lastService: '23-12-2018', percent: '100'},
      {id: '5', enabled: 'false', name: 'Rødbedevasker', group: 'Washer', type: 'Preventive', nextService: '15-12-2020', lastService: '23-12-2018', percent: '83'},
      {id: '6', enabled: 'true', name: 'Rødbedeskrubber', group: 'Washer', type: 'Preventive', nextService: '15-12-2020', lastService: '23-12-2018', percent: '71'},
      {id: '7', enabled: 'true', name: 'Rødbedefejer', group: 'Machine', type: 'Predictive', nextService: '15-12-2020', lastService: '23-12-2018', percent: '64'},
      {id: '8', enabled: 'false', name: 'Rødbederasler', group: 'Machine', type: 'Preventive', nextService: '21-01-2022', lastService: '16-03-2020', percent: '58'},
      {id: '9', enabled: 'true', name: 'Rødbedehænger', group: 'Machine', type: 'Preventive', nextService: '18-04-2021', lastService: '04-04-2024', percent: '44'},
      {id: '10', enabled: 'true', name: 'Rødbederuller', group: 'Machine', type: 'Predictive', nextService: '24-06-2021', lastService: '02-04-2024', percent: '33'},
      {id: '11', enabled: 'false', name: 'Rødbedehakker', group: 'Machine', type: 'Predictive', nextService: '31-09-2021', lastService: '08-07-2024', percent: '21'},
      {id: '12', enabled: 'false', name: 'Rødbedelytter', group: 'Machine', type: 'Predictive', nextService: '12-11-2021', lastService: '08-07-2004', percent: '13'},
      {id: '13', enabled: 'true', name: 'Rødbederetter', group: 'Machine', type: 'Preventive', nextService: '28-01-2021', lastService: '06-08-2024', percent: '6'},
      {id: '14', enabled: 'true', name: 'Rødbedemobilen', group: 'Car', type: 'Predictive', nextService: '28-01-1995', lastService: '06-18-2018', percent: '54'},
      {id: '15', enabled: 'false', name: 'Rødbedevogn', group: 'Car', type: 'Preventive', nextService: '28-01-1988', lastService: '06-08-2016', percent: '33'}
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



   //// Desktop select resource

   $scope.selected = 0;
   $scope.selectRes = function (id) {
      let item = $('#desktop-resource-' + id);
      item.addClass("selected-resource");
      $('.desktop-resource').not(item).removeClass("selected-resource");
      $scope.selected = 1;
   };

   $(document).ready(function () {
      //// Desktop open service checklist
      $('.desktop-resource').dblclick(function () {
         alert("Resource checklist triggered!");
      });
   });




   // Resource settings service

   // Calculate next service
   $(function () {
      $("#settings-resource-ls").datepicker();
   });

   //// Mobile
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

   //// Desktop

   // Calculate next service
   $(function () {
      $("#desktop-settings-resource-ls").datepicker();
   });

   $scope.desktopNextServiceCalc = function () {
      let lastService = new Date($scope.desktopServiceLastService);
      let serviceInterval = $scope.desktopServiceInterval;
      let serviceIntervalUnit = $scope.desktopServiceUnit;

      if ($scope.desktopServiceInterval !== undefined && $scope.desktopServiceUnit !== undefined) {
         // If unit is days
         if (serviceIntervalUnit.id == 1) {
            var nextService = moment(lastService, "MM-DD-YYYY").add(serviceInterval, 'days').calendar();
            $scope.desktopNextService = nextService;
         }
         // If unit is weeks
         if (serviceIntervalUnit.id == 2) {
            var nextService = moment(lastService, "MM-DD-YYYY").add(serviceInterval, 'weeks').calendar();
            $scope.desktopNextService = nextService;
         }
         // If unit is months
         if (serviceIntervalUnit.id == 3) {
            var nextService = moment(lastService, "MM-DD-YYYY").add(serviceInterval, 'months').calendar();
            $scope.desktopNextService = nextService;
         }
         // If unit is years
         if (serviceIntervalUnit.id == 4) {
            var nextService = moment(lastService, "MM-DD-YYYY").add(serviceInterval, 'years').calendar();
            $scope.desktopNextService = nextService;
         }
      } else {
         $scope.desktopNextService = '';
      }

   };

   // Mobile Add new calculate next service

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

   // Dasktop Add new calculate next service

   $(function () {
      $("#addnew-desktop-settings-resource-ls").datepicker();

//      $("#addnew-desktop-settings-resource-ls").datepicker({
//              dateFormat: 'dd-mm-yy'
//           });
   });

   $scope.addnewDesktopAddNewNextServiceCalc = function () {
      let lastService = new Date($scope.addnewDesktopServiceLastService);
      let serviceInterval = $scope.addnewDesktopServiceInterval;
      let serviceIntervalUnit = $scope.addnewDesktopServiceUnit;

      if ($scope.addnewDesktopServiceInterval !== undefined && $scope.addnewDesktopServiceUnit !== undefined) {
         // If unit is days
         if (serviceIntervalUnit.id == 1) {
            var nextService = moment(lastService, "MM-DD-YYYY").add(serviceInterval, 'days').calendar();
            $scope.addnewDesktopNextService = nextService;
         }
         // If unit is weeks
         if (serviceIntervalUnit.id == 2) {
            var nextService = moment(lastService, "MM-DD-YYYY").add(serviceInterval, 'weeks').calendar();
            $scope.addnewDesktopNextService = nextService;
         }
         // If unit is months
         if (serviceIntervalUnit.id == 3) {
            var nextService = moment(lastService, "MM-DD-YYYY").add(serviceInterval, 'months').calendar();
            $scope.addnewDesktopNextService = nextService;
         }
         // If unit is years
         if (serviceIntervalUnit.id == 4) {
            var nextService = moment(lastService, "MM-DD-YYYY").add(serviceInterval, 'years').calendar();
            $scope.addnewDesktopNextService = nextService;
         }
      } else {
         $scope.addnewDesktopNextService = '';
      }

   };


   // Resource settings checklist

   // Mobile add new
   $scope.addnewTodoList = [];

   let addnewTodoIndex = 0;

   $scope.todoAdd = function () {
      $scope.addnewTodoList.push({i: addnewTodoIndex, todoText: $scope.addnewTodoInput});
      $scope.addnewTodoInput = "";
      document.getElementById("addnewTodoInput").focus();
      addnewTodoIndex++;
   };


   // Desktop settings
   $scope.desktopAddnewTodoList = [];

   let dekstopAddnewTodoIndex = 0;

   $scope.desktopTodoAdd = function () {
      $scope.desktopAddnewTodoList.push({i: dekstopAddnewTodoIndex, todoText: $scope.desktopAddnewTodoInput});
      $scope.desktopAddnewTodoInput = "";
      document.getElementById("desktopAddnewTodoInput").focus();
      dekstopAddnewTodoIndex++;
   };


   // Desktop add new
   $scope.addnewDesktopAddnewTodoList = [];

   let addnewDekstopAddnewTodoIndex = 0;

   $scope.addnewDesktopTodoAdd = function () {
      $scope.addnewDesktopAddnewTodoList.push({i: addnewDekstopAddnewTodoIndex, todoText: $scope.addnewDesktopAddnewTodoInput});
      $scope.addnewDesktopAddnewTodoInput = "";
      document.getElementById("addnewDesktopAddnewTodoInput").focus();
      addnewDekstopAddnewTodoIndex++;
   };
   
   
   //// Show service report
   $scope.showServiceReport = function(){
      $scope.serviceReportView = 1;
   };
   //// Hide service report
   $scope.hideServiceReport = function(){
      $scope.serviceReportView = 0;
   };
   
   //// Show service report
   $scope.showRepairLog = function(){
      $scope.serviceReportView = 2;
   };


   //Reload page when 1366px screen width is passed (for resetting global variables)
   var ww = $(window).width();
   var limit = 1366;

   function refresh() {
      ww = $(window).width();
      var w = ww < limit ? (location.reload(true)) : (ww > limit ? (location.reload(true)) : ww = limit);
   }

   $(window).resize(function () {
      var resW = $(window).width();
      if ((ww > limit && resW < limit) || (ww < limit && resW > limit)) {
         refresh();
      }
   });

});
