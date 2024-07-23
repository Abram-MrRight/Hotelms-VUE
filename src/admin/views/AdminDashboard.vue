<template>
    <div class="container-scroller">
    <!-- partial:partials/_sidebar -->
<nav class="sidebar sidebar-offcanvas" id="sidebar">
  <ul class="nav">
    <li class="nav-item nav-profile border-bottom">
      <a href="#" class="nav-link flex-column">
        <div class="nav-profile-image">
          <img src="/assets/images/faces/face1.jpg" alt="profile" />
          <!--change to offline or busy as needed-->
        </div>
        <div class="nav-profile-text d-flex ml-0 mb-3 flex-column">
          <span class="font-weight-semibold mb-1 mt-2 text-center">Antonio Olson</span>
          <span class="text-secondary icon-sm text-center">$3499.00</span>
        </div>
      </a>
    </li>
    <li class="nav-item pt-3">
      <a class="nav-link d-block" href="#">
        <img class="sidebar-brand-logo" src="/assets/images/logo.svg" alt="" />
        <img class="sidebar-brand-logomini" src="/assets/images/logo-mini.svg" alt="" />
        <div class="small font-weight-light pt-1">Hotel Management System</div>
      </a>
      <form class="d-flex align-items-center" action="#">
        <div class="input-group">
          <div class="input-group-prepend">
            <i class="input-group-text border-0 mdi mdi-magnify"></i>
          </div>
          <input type="text" class="form-control border-0" placeholder="Search" />
        </div>
      </form>
    </li>
    <li class="pt-2 pb-1">
      <span class="nav-item-head">Management Pages</span>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">
        <i class="mdi mdi-compass-outline menu-icon"></i>
        <span class="menu-title">Dashboard</span>
      </a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">
        <i class="mdi mdi-account-multiple menu-icon"></i>
        <span class="menu-title">Users</span>
      </a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">
        <i class="mdi mdi-hotel menu-icon"></i>
        <span class="menu-title">Rooms</span>
      </a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">
        <i class="mdi mdi-calendar-check menu-icon"></i>
        <span class="menu-title">Reservations</span>
      </a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">
        <i class="mdi mdi-chart-bar menu-icon"></i>
        <span class="menu-title">Analytics</span>
      </a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="#">
        <i class="mdi mdi-bell menu-icon"></i>
        <span class="menu-title">Notifications</span>
      </a>
    </li>
    <li class="nav-item pt-3">
      <a class="nav-link" href="#" target="_blank">
        <i class="mdi mdi-file-document-box menu-icon"></i>
        <span class="menu-title">Documentation</span>
      </a>
    </li>
  </ul>
</nav>

    <!-- partial -->
    <div class="container-fluid page-body-wrapper">
   <!-- partial:partials/_settings-panel -->
<div id="settings-trigger"><i class="mdi mdi-settings"></i></div>
<div id="theme-settings" class="settings-panel">
  <i class="settings-close mdi mdi-close"></i>
  <p class="settings-heading">SIDEBAR SKINS</p>
  <div class="sidebar-bg-options selected" id="sidebar-default-theme">
    <div class="img-ss rounded-circle bg-light border mr-3"></div>Default
  </div>
  <div class="sidebar-bg-options" id="sidebar-dark-theme">
    <div class="img-ss rounded-circle bg-dark border mr-3"></div>Dark
  </div>
  <p class="settings-heading mt-2">HEADER SKINS</p>
  <div class="color-tiles mx-0 px-4">
    <div class="tiles default primary"></div>
    <div class="tiles success"></div>
    <div class="tiles warning"></div>
    <div class="tiles danger"></div>
    <div class="tiles info"></div>
    <div class="tiles dark"></div>
    <div class="tiles light"></div>
  </div>
</div>
<!-- partial -->
<!-- partial:partials/_navbar -->
<nav class="navbar default-layout-navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
  <div class="navbar-menu-wrapper d-flex align-items-stretch">
    <button class="navbar-toggler navbar-toggler align-self-center" type="button" data-toggle="minimize">
      <span class="mdi mdi-chevron-double-left"></span>
    </button>
    <div class="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
      <a class="navbar-brand brand-logo-mini" href="#"><img src="/assets/images/logo-mini.svg" alt="logo" /></a>
    </div>
    <ul class="navbar-nav">
      <li class="nav-item dropdown">
        <a class="nav-link" id="messageDropdown" href="#" data-toggle="dropdown" aria-expanded="false">
          <i class="mdi mdi-email-outline"></i>
        </a>
        <div class="dropdown-menu dropdown-menu-left navbar-dropdown preview-list" aria-labelledby="messageDropdown">
          <h6 class="p-3 mb-0 font-weight-semibold">Messages</h6>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item preview-item">
            <div class="preview-thumbnail">
              <img src="/assets/images/faces/face1.jpg" alt="image" class="profile-pic">
            </div>
            <div class="preview-item-content d-flex align-items-start flex-column justify-content-center">
              <h6 class="preview-subject ellipsis mb-1 font-weight-normal">Mark sent you a message</h6>
              <p class="text-gray mb-0">1 Minute ago</p>
            </div>
          </a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item preview-item">
            <div class="preview-thumbnail">
              <img src="/assets/images/faces/face6.jpg" alt="image" class="profile-pic">
            </div>
            <div class="preview-item-content d-flex align-items-start flex-column justify-content-center">
              <h6 class="preview-subject ellipsis mb-1 font-weight-normal">Cregh sent you a message</h6>
              <p class="text-gray mb-0">15 Minutes ago</p>
            </div>
          </a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item preview-item">
            <div class="preview-thumbnail">
              <img src="/assets/images/faces/face7.jpg" alt="image" class="profile-pic">
            </div>
            <div class="preview-item-content d-flex align-items-start flex-column justify-content-center">
              <h6 class="preview-subject ellipsis mb-1 font-weight-normal">Profile picture updated</h6>
              <p class="text-gray mb-0">18 Minutes ago</p>
            </div>
          </a>
          <div class="dropdown-divider"></div>
          <h6 class="p-3 mb-0 text-center text-primary font-13">4 new messages</h6>
        </div>
      </li>
      <li class="nav-item dropdown ml-3">
        <a class="nav-link" id="notificationDropdown" href="#" data-toggle="dropdown">
          <i class="mdi mdi-bell-outline"></i>
        </a>
        <div class="dropdown-menu dropdown-menu-left navbar-dropdown preview-list" aria-labelledby="notificationDropdown">
          <h6 class="px-3 py-3 font-weight-semibold mb-0">Notifications</h6>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item preview-item">
            <div class="preview-thumbnail">
              <div class="preview-icon bg-success">
                <i class="mdi mdi-calendar"></i>
              </div>
            </div>
            <div class="preview-item-content d-flex align-items-start flex-column justify-content-center">
              <h6 class="preview-subject font-weight-normal mb-0">New reservation received</h6>
              <p class="text-gray ellipsis mb-0">45 sec ago</p>
            </div>
          </a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item preview-item">
            <div class="preview-thumbnail">
              <div class="preview-icon bg-warning">
                <i class="mdi mdi-settings"></i>
              </div>
            </div>
            <div class="preview-item-content d-flex align-items-start flex-column justify-content-center">
              <h6 class="preview-subject font-weight-normal mb-0">Server limit reached</h6>
              <p class="text-gray ellipsis mb-0">55 sec ago</p>
            </div>
          </a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item preview-item">
            <div class="preview-thumbnail">
              <div class="preview-icon bg-info">
                <i class="mdi mdi-link-variant"></i>
              </div>
            </div>
            <div class="preview-item-content d-flex align-items-start flex-column justify-content-center">
              <h6 class="preview-subject font-weight-normal mb-0">Kevin Karvelle</h6>
              <p class="text-gray ellipsis mb-0">11:09 PM</p>
            </div>
          </a>
          <div class="dropdown-divider"></div>
          <h6 class="p-3 font-13 mb-0 text-primary text-center">View all notifications</h6>
        </div>
      </li>
    </ul>
    <ul class="navbar-nav navbar-nav-right">
      <li class="nav-item nav-logout d-none d-md-block mr-3">
        <a class="nav-link" href="#">Status</a>
      </li>
      <li class="nav-item nav-logout d-none d-md-block">
        <button class="btn btn-sm btn-danger">Trailing</button>
      </li>
      <li class="nav-item nav-profile dropdown d-none d-md-block">
        <a class="nav-link dropdown-toggle" id="profileDropdown" href="#" data-toggle="dropdown" aria-expanded="false">
          <div class="nav-profile-text">English </div>
        </a>
        <div class="dropdown-menu center navbar-dropdown" aria-labelledby="profileDropdown">
          <a class="dropdown-item" href="#">
            <i class="flag-icon flag-icon-bl mr-3"></i> French
          </a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">
            <i class="flag-icon flag-icon-cn mr-3"></i> Chinese
          </a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">
            <i class="flag-icon flag-icon-de mr-3"></i> German
          </a>
          <div class="dropdown-divider"></div>
          <a class="dropdown-item" href="#">
            <i class="flag-icon flag-icon-ru mr-3"></i>Russian
          </a>
        </div>
      </li>
      <li class="nav-item nav-logout d-none d-lg-block">
        <a class="nav-link" href="#">
          <i class="mdi mdi-home-circle"></i>
        </a>
      </li>
    </ul>
    <button class="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" data-toggle="offcanvas">
      <span class="mdi mdi-menu"></span>
    </button>
  </div>
</nav>

     <!-- partial -->
<div class="main-panel">
  <div class="content-wrapper pb-0">
    <div class="page-header flex-wrap">
      <div class="header-right d-flex flex-wrap mt-2 mt-sm-0">
        <div class="d-flex align-items-center">
          <a href="#">
            <p class="m-0 pr-3">Dashboard</p>
          </a>
          <a class="pl-3 mr-4" href="#">
            <p class="m-0">HOTEL-12345</p>
          </a>
        </div>
        <button type="button" class="btn btn-primary mt-2 mt-sm-0 btn-icon-text">
          <i class="mdi mdi-plus-circle"></i> Add Room </button>
      </div>
    </div>
    <!-- first row starts here -->
    <div class="row">
      <div class="col-xl-9 stretch-card grid-margin">
        <div class="card">
          <div class="card-body">
            <div class="d-flex justify-content-between flex-wrap">
              <div>
                <div class="card-title mb-0">Total Revenue</div>
                <h3 class="font-weight-bold mb-0">$45,390</h3>
              </div>
              <div>
                <div class="d-flex flex-wrap pt-2 justify-content-between sales-header-right">
                  <div class="d-flex mr-5">
                    <button type="button" class="btn btn-social-icon btn-outline-sales">
                      <i class="mdi mdi-inbox-arrow-down"></i>
                    </button>
                    <div class="pl-2">
                      <h4 class="mb-0 font-weight-semibold head-count"> $12,345 </h4>
                      <span class="font-10 font-weight-semibold text-muted">TOTAL BOOKINGS</span>
                    </div>
                  </div>
                  <div class="d-flex mr-3 mt-2 mt-sm-0">
                    <button type="button" class="btn btn-social-icon btn-outline-sales profit">
                      <i class="mdi mdi-cash text-info"></i>
                    </button>
                    <div class="pl-2">
                      <h4 class="mb-0 font-weight-semibold head-count"> 3,210 </h4>
                      <span class="font-10 font-weight-semibold text-muted">TOTAL PROFIT</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p class="text-muted font-13 mt-2 mt-sm-0"> Your hotel management dashboard template. <a class="text-muted font-13" href="#"><u>Learn more</u></a>
            </p>
            <div class="flot-chart-wrapper">
              <div id="flotChart" class="flot-chart">
                <canvas class="flot-base"></canvas>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- chart row starts here -->
    <div class="row">
      <div class="col-sm-6 stretch-card grid-margin">
        <div class="card">
          <div class="card-body">
            <div class="d-flex justify-content-between">
              <div class="card-title"> Reservations <small class="d-block text-muted">July 01 - July 31</small>
              </div>
              <div class="d-flex text-muted font-20">
                <i class="mdi mdi-printer mouse-pointer"></i>
                <i class="mdi mdi-help-circle-outline ml-2 mouse-pointer"></i>
              </div>
            </div>
            <h3 class="font-weight-bold mb-0"> 1,210 <span class="text-success h5">5%<i class="mdi mdi-arrow-up"></i></span>
            </h3>
            <span class="text-muted font-13">Avg reservations/Day</span>
            <div class="line-chart-wrapper">
              <canvas id="linechart" height="80"></canvas>
            </div>
          </div>
        </div>
      </div>
      <div class="col-sm-6 stretch-card grid-margin">
        <div class="card">
          <div class="card-body">
            <div class="d-flex justify-content-between">
              <div class="card-title"> Room Occupancy <small class="d-block text-muted">July 01 - July 31</small>
              </div>
              <div class="d-flex text-muted font-20">
                <i class="mdi mdi-printer mouse-pointer"></i>
                <i class="mdi mdi-help-circle-outline ml-2 mouse-pointer"></i>
              </div>
            </div>
            <h3 class="font-weight-bold mb-0"> 75% <span class="text-success h5">3%<i class="mdi mdi-arrow-up"></i></span>
            </h3>
            <span class="text-muted font-13">Avg occupancy rate</span>
            <div class="bar-chart-wrapper">
              <canvas id="barchart" height="80"></canvas>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- image card row starts here -->
    <div class="row">
      <div class="col-sm-4 stretch-card grid-margin">
        <div class="card">
          <div class="card-body p-0">
            <img class="img-fluid w-100" src="/assets/images/dashboard/hotel_1.jpg" alt="" />
          </div>
          <div class="card-body px-3 text-dark">
            <div class="d-flex justify-content-between">
              <p class="text-muted font-13 mb-0">DELUXE ROOM</p>
              <i class="mdi mdi-heart-outline"></i>
            </div>
            <h5 class="font-weight-semibold"> Luxury Room with Sea View </h5>
            <div class="d-flex justify-content-between font-weight-semibold">
              <p class="mb-0">
                <i class="mdi mdi-star star-color pr-1"></i>4.8 (50) </p>
              <p class="mb-0">$400/night</p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-sm-4 stretch-card grid-margin">
        <div class="card">
          <div class="card-body p-0">
            <img class="img-fluid w-100" src="/assets/images/dashboard/hotel_2.jpg" alt="" />
          </div>
          <div class="card-body px-3 text-dark">
            <div class="d-flex justify-content-between">
              <p class="text-muted font-13 mb-0">SUITE</p>
              <i class="mdi mdi-heart-outline"></i>
            </div>
            <h5 class="font-weight-semibold"> Presidential Suite </h5>
            <div class="d-flex justify-content-between font-weight-semibold">
              <p class="mb-0">
                <i class="mdi mdi-star star-color pr-1"></i>4.9 (30) </p>
              <p class="mb-0">$1,200/night</p>
            </div>
          </div>
        </div>
      </div>
      <div class="col-sm-4 stretch-card grid-margin">
        <div class="card">
          <div class="card-body p-0">
            <img class="img-fluid w-100" src="/assets/images/dashboard/hotel_3.jpg" alt="" />
          </div>
          <div class="card-body px-3 text-dark">
            <div class="d-flex justify-content-between">
              <p class="text-muted font-13 mb-0">STANDARD ROOM</p>
              <i class="mdi mdi-heart-outline"></i>
            </div>
            <h5 class="font-weight-semibold"> Standard Room </h5>
            <div class="d-flex justify-content-between font-weight-semibold">
              <p class="mb-0">
                <i class="mdi mdi-star star-color pr-1"></i>4.5 (40) </p>
              <p class="mb-0">$150/night</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- table row starts here -->
    <div class="row">
      <div class="col-md-12 grid-margin">
        <div class="card">
          <div class="card-body">
            <div class="d-flex justify-content-between">
              <div class="card-title"> Users </div>
              <div class="search-field d-none d-md-block">
                <form class="d-flex align-items-center h-100" action="#">
                  <div class="input-group">
                    <div class="input-group-prepend bg-transparent">
                      <i class="input-group-text border-0 mdi mdi-magnify"></i>
                    </div>
                    <input type="text" class="form-control bg-transparent border-0" placeholder="Search users">
                  </div>
                </form>
              </div>
            </div>
            <p class="text-muted font-13 mb-3"> List of users registered in the hotel management system. </p>
            <div class="table-responsive">
              <table class="table table-striped">
                <thead>
                  <tr>
                    <th> User ID </th>
                    <th> Name </th>
                    <th> Email </th>
                    <th> Phone </th>
                    <th> Status </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td> U123 </td>
                    <td> John Doe </td>
                    <td> john.doe@example.com </td>
                    <td> +1 123 456 7890 </td>
                    <td>
                      <label class="badge badge-success"> Active </label>
                    </td>
                  </tr>
                  <tr>
                    <td> U124 </td>
                    <td> Jane Smith </td>
                    <td> jane.smith@example.com </td>
                    <td> +1 987 654 3210 </td>
                    <td>
                      <label class="badge badge-warning"> Pending </label>
                    </td>
                  </tr>
                  <tr>
                    <td> U125 </td>
                    <td> Bob Johnson </td>
                    <td> bob.johnson@example.com </td>
                    <td> +1 456 789 0123 </td>
                    <td>
                      <label class="badge badge-danger"> Inactive </label>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- notifications row starts here -->
    <div class="row">
      <div class="col-md-4">
        <div class="card border-0">
          <div class="card-body">
            <div class="card-title">Notifications</div>
            <div class="d-flex flex-wrap">
              <div class="doughnut-wrapper w-50">
                <canvas id="doughnutChart1" width="100" height="100"></canvas>
              </div>
              <div id="doughnut-chart-legend" class="pl-lg-3 rounded-legend align-self-center flex-grow legend-vertical legend-bottom-left"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card border-0">
          <div class="card-body">
            <div class="card-title">Analytics</div>
            <div class="d-flex flex-wrap">
              <div class="doughnut-wrapper w-50">
                <canvas id="doughnutChart2" width="100" height="100"></canvas>
              </div>
              <div id="doughnut-chart-legend" class="pl-lg-3 rounded-legend align-self-center flex-grow legend-vertical legend-bottom-left"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-md-4">
        <div class="card border-0">
          <div class="card-body">
            <div class="card-title">Feedback</div>
            <div class="d-flex flex-wrap">
              <div class="doughnut-wrapper w-50">
                <canvas id="doughnutChart3" width="100" height="100"></canvas>
              </div>
              <div id="doughnut-chart-legend" class="pl-lg-3 rounded-legend align-self-center flex-grow legend-vertical legend-bottom-left"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- last row starts here -->
    <div class="row">
      <div class="col-xl-4 grid-margin">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Todo List</h4>
            <ul class="bullet-line-list">
              <li>
                <h6>Room Maintenance</h6>
                <p class="text-muted">Due Date: 23 Sep 2024</p>
                <div class="d-flex justify-content-between">
                  <div>
                    <button type="button" class="btn btn-success btn-xs">Completed</button>
                  </div>
                  <div>
                    <i class="mdi mdi-delete-forever"></i>
                  </div>
                </div>
              </li>
              <li>
                <h6>Staff Meeting</h6>
                <p class="text-muted">Due Date: 29 Sep 2024</p>
                <div class="d-flex justify-content-between">
                  <div>
                    <button type="button" class="btn btn-warning btn-xs">In Progress</button>
                  </div>
                  <div>
                    <i class="mdi mdi-delete-forever"></i>
                  </div>
                </div>
              </li>
              <li>
                <h6>Guest Feedback Review</h6>
                <p class="text-muted">Due Date: 5 Oct 2024</p>
                <div class="d-flex justify-content-between">
                  <div>
                    <button type="button" class="btn btn-danger btn-xs">Pending</button>
                  </div>
                  <div>
                    <i class="mdi mdi-delete-forever"></i>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col-xl-4 grid-margin">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">Recent Updates</h4>
            <div class="d-flex py-2 border-bottom">
              <div class="wrapper">
                <small class="text-muted">19 Sep 2024</small>
                <p class="font-weight-semibold text-dark">Room 101 Renovation Completed</p>
              </div>
              <small class="text-muted ml-auto">08:45 AM</small>
            </div>
            <div class="d-flex py-2 border-bottom">
              <div class="wrapper">
                <small class="text-muted">20 Sep 2024</small>
                <p class="font-weight-semibold text-dark">New Chef Hired</p>
              </div>
              <small class="text-muted ml-auto">12:30 PM</small>
            </div>
            <div class="d-flex py-2 border-bottom">
              <div class="wrapper">
                <small class="text-muted">21 Sep 2024</small>
                <p class="font-weight-semibold text-dark">Monthly Staff Meeting Scheduled</p>
              </div>
              <small class="text-muted ml-auto">04:15 PM</small>
            </div>
          </div>
        </div>
      </div>
      <div class="col-xl-4 grid-margin">
        <div class="card">
          <div class="card-body">
            <h4 class="card-title">User Reviews</h4>
            <div class="d-flex py-2 border-bottom">
              <div class="wrapper">
                <small class="text-muted">18 Sep 2024</small>
                <p class="font-weight-semibold text-dark">"Excellent service!" - John Doe</p>
              </div>
              <small class="text-muted ml-auto">10:00 AM</small>
            </div>
            <div class="d-flex py-2 border-bottom">
              <div class="wrapper">
                <small class="text-muted">19 Sep 2024</small>
                <p class="font-weight-semibold text-dark">"Loved the new decor!" - Jane Smith</p>
              </div>
              <small class="text-muted ml-auto">01:30 PM</small>
            </div>
            <div class="d-flex py-2 border-bottom">
              <div class="wrapper">
                <small class="text-muted">20 Sep 2024</small>
                <p class="font-weight-semibold text-dark">"Friendly staff and clean rooms." - Bob Johnson</p>
              </div>
              <small class="text-muted ml-auto">03:45 PM</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

      <!-- main-panel ends -->
    </div>
    <!-- page-body-wrapper ends -->
  </div>
  <!-- container-scroller -->
  </template>
  <script>
  export default {
   
    
  }
  </script>