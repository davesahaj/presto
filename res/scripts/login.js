/* Scripts for css grid dashboard */
function afterPageLoad(){
  setSidenavListeners();
  setUserDropdownListener();
}

// User avatar dropdown functionality
function setUserDropdownListener() {
  const userAvatar1 = document.getElementsByClassName("header__avatar");

  userAvatar1[0].addEventListener("click", function() {
    const dropdown1 = this.children;
    dropdown1[0].classList.toggle("dropdown--active");
  });
}
/*function setUserDropdownListener() {
  const userAvatar = $(".header__avatar");
  userAvatar.on("click", function (e) {
    const dropdown = $(this).children(".dropdown");
    console.log("hi");
    console.log(dropdown);
    toggleClass(dropdown, "dropdown--active");
  });
}*/

// Sidenav list sliding functionality

function setSidenavListeners() {
  const subHeadings1 = document.getElementsByClassName("navList__subheading");
  var j;

  for (j = 0; j < subHeadings1.length; j++) {
  subHeadings1[j].addEventListener("click", function() {
    const subList1 = this.nextElementSibling;
    if(this){
        this.classList.toggle("navList__subheading--open");
    }
    if(subList1){
        subList1.classList.toggle("subList--hidden");
    }
  });
  }
}
/*function setSidenavListeners() {
  const subHeadings = $(".navList__subheading");
  const SUBHEADING_OPEN_CLASS = "navList__subheading--open";
  const SUBLIST_HIDDEN_CLASS = "subList--hidden";


  subHeadings.each((i, subHeadingEl) => {
    $(subHeadingEl).on("click", (e) => {
      const subListEl = $(subHeadingEl).siblings();

      // Add/remove selected styles to list category heading
      if (subHeadingEl) {
        toggleClass($(subHeadingEl), SUBHEADING_OPEN_CLASS);
      }

      // Reveal/hide the sublist
      if (subListEl && subListEl.length === 1) {
        toggleClass($(subListEl), SUBLIST_HIDDEN_CLASS);
      }
    });
  });
}*/

/*$(document).ready(() => {
  addResizeListeners();
  renderChart();
  setMenuClickListener();
  setSidenavCloseListener();
});

// Set constants and grab needed elements
const sidenavEl = $(".sidenav");
const gridEl = $(".grid");
const SIDENAV_ACTIVE_CLASS = "sidenav--active";
const GRID_NO_SCROLL_CLASS = "grid--noscroll";

function toggleClass(el, className) {
  if (el.hasClass(className)) {
    el.removeClass(className);
  } else {
    el.addClass(className);
  }
}





// Draw the chart
function renderChart() {
  const chart = AmCharts.makeChart("chartdiv", {
    type: "serial",
    theme: "light",
    dataProvider: [
      {
        month: "Jan",
        visits: 2025,
      },
      {
        month: "Feb",
        visits: 1882,
      },
      {
        month: "Mar",
        visits: 1809,
      },
      {
        month: "Apr",
        visits: 1322,
      },
      {
        month: "May",
        visits: 1122,
      },
      {
        month: "Jun",
        visits: 1114,
      },
      {
        month: "Jul",
        visits: 984,
      },
      {
        month: "Aug",
        visits: 711,
      },
      {
        month: "Sept",
        visits: 665,
      },
      {
        month: "Oct",
        visits: 580,
      },
    ],
    valueAxes: [
      {
        gridColor: "#FFFFFF",
        gridAlpha: 0.2,
        dashLength: 0,
      },
    ],
    gridAboveGraphs: true,
    startDuration: 1,
    graphs: [
      {
        balloonText: "[[category]]: <b>[[value]]</b>",
        fillAlphas: 0.8,
        lineAlpha: 0.2,
        type: "column",
        valueField: "visits",
      },
    ],
    chartCursor: {
      categoryBalloonEnabled: false,
      cursorAlpha: 0,
      zoomable: false,
    },
    categoryField: "month",
    categoryAxis: {
      gridPosition: "start",
      gridAlpha: 0,
      tickPosition: "start",
      tickLength: 20,
    },
    export: {
      enabled: false,
    },
  });
}

function toggleClass(el, className) {
  if (el.hasClass(className)) {
    el.removeClass(className);
  } else {
    el.addClass(className);
  }
}

// If user opens the menu and then expands the viewport from mobile size without closing the menu,
// make sure scrolling is enabled again and that sidenav active class is removed
function addResizeListeners() {
  $(window).resize(function (e) {
    const width = window.innerWidth;
    console.log("width: ", width);

    if (width > 750) {
      sidenavEl.removeClass(SIDENAV_ACTIVE_CLASS);
      gridEl.removeClass(GRID_NO_SCROLL_CLASS);
    }
  });
}

// Menu open sidenav icon, shown only on mobile
function setMenuClickListener() {
  $(".header__menu").on("click", function (e) {
    console.log("clicked menu icon");
    toggleClass(sidenavEl, SIDENAV_ACTIVE_CLASS);
    toggleClass(gridEl, GRID_NO_SCROLL_CLASS);
  });
}

// Sidenav close icon
function setSidenavCloseListener() {
  $(".sidenav__brand-close").on("click", function (e) {
    toggleClass(sidenavEl, SIDENAV_ACTIVE_CLASS);
    toggleClass(gridEl, GRID_NO_SCROLL_CLASS);
  });
}*/
