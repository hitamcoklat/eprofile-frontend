<template>
  <div class="login-box">
    <div class="login-logo">
      <a href=""><b>eProfil</b> 4.0</a>
    </div>
    <!-- /.login-logo -->
    <div class="login-box-body">
      <div v-show="this.errorLogin" class="alert alert-danger">
        Username dan password yang anda masukan salah!
      </div>
      <div v-show="this.loginSuccess" class="alert alert-success">
        Login berhasil, mohon tunggu sebentar.
      </div>
      <p class="login-box-msg">Silahkan masukan username dan password anda.</p>
        <div class="form-group has-feedback">
          <input v-model="username" type="text" class="form-control" placeholder="Username">
          <span class="glyphicon glyphicon-envelope form-control-feedback"></span>
        </div>
        <div class="form-group has-feedback">
          <input v-model="password" type="password" class="form-control" placeholder="Password">
          <span class="glyphicon glyphicon-lock form-control-feedback"></span>
        </div>
        <div class="form-group has-feedback">
          <select v-model="jenis_login" class="form-control">
            <option value="puskesmas">Login Puskesmas</option>
            <option value="rs">Login Rumah Sakit</option>
            <option value="kabkot">Login Kabupaten/Kota</option>
            <option value="prov">Login Provinsi</option>
          </select>
        </div>        
        <div class="row">
          <div class="col-xs-8">
            <div style="margin-left: 20px;" class="checkbox icheck">
              <label>
                <input type="checkbox"> Remember Me
              </label>
            </div>
          </div>
          <!-- /.col -->
          <div class="col-xs-4">
            <button v-on:click="login()" class="btn btn-primary btn-block btn-flat">Sign In</button>
          </div>
          <!-- /.col -->
        </div>
      <!-- /.social-auth-links -->
    </div>
    <!-- /.login-box-body -->
  </div>
</template>
<script>
export default {
  name: 'Login',
  data() {
    return {
      username: '',
      password: '',
      jenis_login: 'puskesmas',
      errorLogin: false,
      loginSuccess: false
    }
  },
  methods: {
    login: function() {
      console.log('Tombol Login di pencet');
      const qs = require('qs')

      var dataKirim = {
        password: this.password,
        username: this.username,
        jenisLogin: this.jenis_login
      };

      this.$http.post(this.$urlPHPServer + '/Api/loginJson', qs.stringify(dataKirim))
      .then((response) => {
        console.log(response);
          if(response.status == 200) {
            // console.log(response.data.data.length);
            if (response.data.data === undefined || response.data.data.length == 0) {
              // array empty or does not exist
              this.errorLogin = true;
            } else {
              this.loginSuccess = true;
              this.errorLogin = false;
              this.$session.start();
              this.$session.set('dataLogin', JSON.stringify(response.data.data));
              this.$store.dispatch('simpanUser', response.data.data)
                .then(() => {
                  setTimeout(() => {
                    this.$router.push({name: 'RDashboard', params: {'source': 'login'}})                
                  }, 1000);
                })
            }       
          }
          else {
              this.errorLogin = true;
            }  
        }, (err) => {
          console.log('err', err)
      })        
    }
  },
  beforeCreate () {
    if(this.$session.exists()) {
      this.$router.push('dashboard')
    } else {
      this.$router.push('login')
    }
  },
  created() {

  }
}
</script>