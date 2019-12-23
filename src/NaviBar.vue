<template>
  <header class="main-header">
    <!-- Logo -->
    <a href="index2.html" class="logo">
      <!-- mini logo for sidebar mini 50x50 pixels -->
      <span class="logo-mini"><b>e</b>Profil 4.0</span>
      <!-- logo for regular state and mobile devices -->
      <span class="logo-lg"><b>eProfil</b> 4.0</span>
    </a>

    <!-- Header Navbar: style can be found in header.less -->
    <nav class="navbar navbar-static-top">
      <!-- Sidebar toggle button-->
      <a href="#" class="sidebar-toggle" data-toggle="push-menu" role="button">
        <span class="sr-only">Toggle navigation</span>
      </a>
      <!-- Navbar Right Menu -->
      <div class="navbar-custom-menu">
        <ul class="nav navbar-nav">

          <!-- User Account: style can be found in dropdown.less -->
          <li class="dropdown user user-menu">
            <a href="#" class="dropdown-toggle" data-toggle="dropdown">
              <img src="~admin-lte/dist/img/user2-160x160.jpg" class="user-image" alt="User Image">
              <span class="hidden-xs">{{ NAMA_RUMAH_SAKIT }}</span>
            </a>
            <ul class="dropdown-menu">
              <!-- User image -->
              <li class="user-header">
                <img src="~admin-lte/dist/img/user2-160x160.jpg" class="img-circle" alt="User Image">

                <p>
                  {{ NAMA_RUMAH_SAKIT }}
                  <small>{{ alamat }}</small>
                </p>
              </li>
              <!-- Menu Body -->
              <!-- Menu Footer-->
              <li class="user-footer">
                <div class="pull-left">
                  <a href="#" class="btn btn-default btn-flat">Profile</a>
                </div>
                <div class="pull-right">
                  <a @click="logout()" style="cursor: pointer;" class="btn btn-default btn-flat">Sign out</a>
                </div>
              </li>
            </ul>
          </li>
          <!-- Control Sidebar Toggle Button -->
          <li>
            <a href="#" data-toggle="control-sidebar"><i class="fa fa-gears"></i></a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'va-navibar',
  data() {
    return {
      username: 'Septian',
      alamat: 'asdasd',
      NAMA_RUMAH_SAKIT: ''
    }
  },
  computed: {
    ...mapGetters([
      'unreadMessagesCount',
      'unreadNotificationsCount',
      'remainTasksCount',
      'currentUser'
    ])
  },
  methods: {
    logout: function() {
      this.$session.destroy()
      this.$router.push('/')           
      location.reload();
    }
  },
  created() {
    var user = JSON.parse(this.$session.get('dataLogin'));
    // console.log(user.username);
    this.username = user.username;
    this.NAMA_RUMAH_SAKIT = user.NAMA_RS;  
    this.alamat = user.ALAMAT;
  }
}

</script>
