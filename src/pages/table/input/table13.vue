<!-- Main content -->
<template>
<div class="content">
  <div class="row">        
    <div class="col-md-12">
      <div class="box box-info">
        <div class="box-header with-border">
          <div class="alert alert-info alert-dismissible">
            <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
            <h4>Tabel 13 - JUMLAH TENAGA KESEHATAN MASYARAKAT, KESEHATAN LINGKUNGAN DAN GIZI DI FASILITAS KESEHATAN</h4>
            <h5> Tombol <strong><span class="badge bg-white"><i class="fa fa-fw fa-refresh"></i></span> reset</strong> digunakan untuk mengosongkan isian </h5>
            <h5> Tombol <strong><span class="badge bg-blue"><i class="fa fa-fw fa-recycle"></i></span> proses</strong> digunakan untuk menambah data setiap desa ke database </h5>
            <h5> Tombol <strong><span class="badge bg-purple"><i class="fa fa-fw fa-arrow-left"></i></span> kembali</strong>  digunakan untuk kembali ke halaman sebelumnya (view tabel) </h5>                   
          </div>
        </div>
        <!-- /.box-header -->
        <!-- form start -->
        <form class="form-horizontal">
          <div class="box-body">
            <div class="col-md-12">
              <div class="form-group">
                <label for="" class="col-sm-3 control-label">Pilih Bulan</label>
                <div class="col-sm-2">
                  <select class="form-control">
                    <option selected="">Pilih Bulan</option>
                    <option>Januari</option>
                    <option>Februari</option>
                    <option>Maret</option>
                    <option>April</option>
                    <option>Mei</option>
                    <option>Juni</option>
                    <option>Juli</option>
                    <option>Agustus</option>
                    <option>September</option>
                    <option>Oktober</option>
                    <option>November</option>
                    <option>Desember</option>
                  </select>
                </div>              
                <label for="" class="col-sm-3 control-label">Pilih Tahun</label>
                <div class="col-sm-2">
                  <select class="form-control">
                    <option selected="">Pilih Tahun</option>
                    <option>2019</option>
                    <option>2020</option>
                    <option>2021</option>
                  </select>
                </div>
              </div>
              <div class="nav-tabs-custom">                
                <ul class="nav nav-tabs">
                  <li class="active"><a href="#tab_1" data-toggle="tab">Puskesmas </a></li>
                  <li><a href="#tab_2" data-toggle="tab"> Rumah Sakit</a></li>
                </ul>
                <div class="tab-content">
                  <div class="tab-pane active" id="tab_1">
                    <div class="box-body">
                      <div class="col-md-6">
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">Puskesmas</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" name="" placeholder="">
                          </div>
                        </div>                  
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">Kesehatan Masyarakat Laki </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="kesmasLPpkm()" v-model="KESEHATAN_MASYARAKAT_LAKI_PUSKESMAS" name="kesehatan_masyarakat_laki_puskesmas" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">Kesehatan Masyarakat Perempuan </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="kesmasLPpkm()" v-model="KESEHATAN_MASYARAKAT_PEREMPUAN_PUSKESMAS" name="kesehatan_masyarakat_perempuan_puskesmas" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">Kesehatan Masyarakat Laki + Perempuan </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="KESEHATAN_MASYARAKAT_LAKI_PEREMPUAN_PUSKESMAS" name="kesehatan_masyarakat_laki_perempuan_puskesmas" placeholder="" disabled="true">
                          </div>
                        </div> 
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">Kesehatan Lingkungan Laki </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="keslingLPpkm()" v-model="KESEHATAN_LINGKUNGAN_LAKI_PUSKESMAS" name="kesehatan_lingkungan_laki_puskesmas" placeholder="">
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">Kesehatan Lingkungan Perempuan </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="keslingLPpkm()" v-model="KESEHATAN_LINGKUNGAN_PEREMPUAN_PUSKESMAS" name="kesehatan_lingkungan_perempuan_puskesmas" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">Kesehatan Lingkungan Laki + Perempuan </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="KESEHATAN_LINGKUNGAN_LAKI_PEREMPUAN_PUSKESMAS" name="kesehatan_lingkungan_laki_perempuan_puskesmas" placeholder="" disabled="true">
                          </div>
                        </div> 
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">Gizi Laki </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="giziLPpkm()" v-model="GIZI_LAKI_PUSKESMAS" name="gizi_laki_puskesmas" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">Gizi Perempuan </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="giziLPpkm()" v-model="GIZI_PEREMPUAN_PUSKESMAS" name="gizi_perempuan_puskesmas" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">Gizi Laki + Perempuan </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="GIZI_LAKI_PEREMPUAN_PUSKESMAS" name="gizi_laki_perempuan_puskesmas" placeholder="" disabled="true">
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> 
                  <div class="tab-pane" id="tab_2">
                    <div class="box-body">
                      <div class="col-md-6">
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">Rumah Sakit</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" name="" placeholder="">
                          </div>
                        </div>                  
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">Kesehatan Masyarakat Laki </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="kesmasLPrs()" v-model="KESEHATAN_MASYARAKAT_LAKI_RUMAH_SAKIT" name="kesehatan_masyarakat_laki_rumah_sakit" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">Kesehatan Masyarakat Perempuan </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="kesmasLPrs()" v-model="KESEHATAN_MASYARAKAT_PEREMPUAN_RUMAH_SAKIT" name="kesehatan_masyarakat_perempuan_rumah_sakit" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">Kesehatan Masyarakat Laki + Perempuan </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="KESEHATAN_MASYARAKAT_LAKI_PEREMPUAN_RUMAH_SAKIT" name="kesehatan_masyarakat_laki_perempuan_rumah_sakit" placeholder="" disabled="true">
                          </div>
                        </div> 
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">Kesehatan Lingkungan Laki </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="keslingLPrs()" v-model="KESEHATAN_LINGKUNGAN_LAKI_RUMAH_SAKIT" name="kesehatan_lingkungan_laki_rumah_sakit" placeholder="">
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">Kesehatan Lingkungan Perempuan </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="keslingLPrs()" v-model="KESEHATAN_LINGKUNGAN_PEREMPUAN_RUMAH_SAKIT" name="kesehatan_lingkungan_perempuan_rumah_sakit" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">Kesehatan Lingkungan Laki + Perempuan </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="KESEHATAN_LINGKUNGAN_LAKI_PEREMPUAN_RUMAH_SAKIT" name="kesehatan_lingkungan_laki_perempuan_rumah_sakit" placeholder="" disabled="true">
                          </div>
                        </div> 
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">Gizi Laki </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="giziLPrs()" v-model="GIZI_LAKI_RUMAH_SAKIT" name="gizi_laki_rumah_sakit" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">Gizi Perempuan </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="giziLPrs()" v-model="GIZI_PEREMPUAN_RUMAH_SAKIT" name="gizi_perempuan_rumah_sakit" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">Gizi Laki + Perempuan </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="GIZI_LAKI_PEREMPUAN_RUMAH_SAKIT" name="gizi_laki_perempuan_rumah_sakit" placeholder="" disabled="true">
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>  
                </div>
              </div>            
            </div>                                          
          </div>
          <!-- /.box-body -->
          <div class="box-footer">
            <button type="reset" class="btn btn-default"><i class="fa fa-fw fa-refresh"></i> Reset</button>
            <button type="button" class="btn btn-primary" @click="proses()"><i class="fa fa-fw fa-recycle"></i>
            Proses
            </button>                
            <router-link to="/table13"><a class="btn btn-success btn-md"><i class="fa fa-fw fa-arrow-left"></i> Kembali</a></router-link>
          </div>
          <!-- /.box-footer -->
        </form>            
    <!-- /.modal -->
      </div>
    </div>
  </div>      
</div>
<!-- /.content -->
</template>
<script>
export default {
  name: 'Table13',
  data() {
    return {
      USERNAME: '',
      JENIS_RS: '',
      PILIH_BULAN: '1',
      PILIH_TAHUN: '2019',
      PUSKESMAS: '', 
      KESEHATAN_MASYARAKAT_LAKI_PUSKESMAS: 0,
      KESEHATAN_MASYARAKAT_LAKI_RUMAH_SAKIT: 0,
      KESEHATAN_MASYARAKAT_PEREMPUAN_PUSKESMAS: 0,
      KESEHATAN_MASYARAKAT_PEREMPUAN_RUMAH_SAKIT: 0,
      KESEHATAN_MASYARAKAT_LAKI_PEREMPUAN_PUSKESMAS: 0,
      KESEHATAN_MASYARAKAT_LAKI_PEREMPUAN_RUMAH_SAKIT: 0,
      KESEHATAN_LINGKUNGAN_LAKI_PUSKESMAS: 0,
      KESEHATAN_LINGKUNGAN_LAKI_RUMAH_SAKIT: 0,
      KESEHATAN_LINGKUNGAN_PEREMPUAN_PUSKESMAS: 0,
      KESEHATAN_LINGKUNGAN_PEREMPUAN_RUMAH_SAKIT: 0,
      KESEHATAN_LINGKUNGAN_LAKI_PEREMPUAN_PUSKESMAS: 0,
      KESEHATAN_LINGKUNGAN_LAKI_PEREMPUAN_RUMAH_SAKIT: 0,
      GIZI_LAKI_PUSKESMAS: 0,
      GIZI_LAKI_RUMAH_SAKIT: 0,
      GIZI_PEREMPUAN_PUSKESMAS: 0,
      GIZI_PEREMPUAN_RUMAH_SAKIT: 0,
      GIZI_LAKI_PEREMPUAN_PUSKESMAS: 0,
      GIZI_LAKI_PEREMPUAN_RUMAH_SAKIT: 0,     

      isUpdate: false  
    }
  },
  methods: {
    initialData: function() {
      return {
        KESEHATAN_MASYARAKAT_LAKI_PUSKESMAS: 0,
        KESEHATAN_MASYARAKAT_LAKI_RUMAH_SAKIT: 0,
        KESEHATAN_MASYARAKAT_PEREMPUAN_PUSKESMAS: 0,
        KESEHATAN_MASYARAKAT_PEREMPUAN_RUMAH_SAKIT: 0,
        KESEHATAN_MASYARAKAT_LAKI_PEREMPUAN_PUSKESMAS: 0,
        KESEHATAN_MASYARAKAT_LAKI_PEREMPUAN_RUMAH_SAKIT: 0,
        KESEHATAN_LINGKUNGAN_LAKI_PUSKESMAS: 0,
        KESEHATAN_LINGKUNGAN_LAKI_RUMAH_SAKIT: 0,
        KESEHATAN_LINGKUNGAN_PEREMPUAN_PUSKESMAS: 0,
        KESEHATAN_LINGKUNGAN_PEREMPUAN_RUMAH_SAKIT: 0,
        KESEHATAN_LINGKUNGAN_LAKI_PEREMPUAN_PUSKESMAS: 0,
        KESEHATAN_LINGKUNGAN_LAKI_PEREMPUAN_RUMAH_SAKIT: 0,
        GIZI_LAKI_PUSKESMAS: 0,
        GIZI_LAKI_RUMAH_SAKIT: 0,
        GIZI_PEREMPUAN_PUSKESMAS: 0,
        GIZI_PEREMPUAN_RUMAH_SAKIT: 0,
        GIZI_LAKI_PEREMPUAN_PUSKESMAS: 0,
        GIZI_LAKI_PEREMPUAN_RUMAH_SAKIT: 0,       
      }
    },        
    kesmasLPpkm: function() {      
      this.KESEHATAN_MASYARAKAT_LAKI_PEREMPUAN_PUSKESMAS = 
        parseInt((this.KESEHATAN_MASYARAKAT_LAKI_PUSKESMAS == '') ? 0 : this.KESEHATAN_MASYARAKAT_LAKI_PUSKESMAS)+
        parseInt((this.KESEHATAN_MASYARAKAT_PEREMPUAN_PUSKESMAS == '') ? 0 : this.KESEHATAN_MASYARAKAT_PEREMPUAN_PUSKESMAS);    
    }, 
    kesmasLPrs: function() {      
      this.KESEHATAN_MASYARAKAT_LAKI_PEREMPUAN_RUMAH_SAKIT = 
        parseInt((this.KESEHATAN_MASYARAKAT_LAKI_RUMAH_SAKIT == '') ? 0 : this.KESEHATAN_MASYARAKAT_LAKI_RUMAH_SAKIT)+
        parseInt((this.KESEHATAN_MASYARAKAT_PEREMPUAN_RUMAH_SAKIT == '') ? 0 : this.KESEHATAN_MASYARAKAT_PEREMPUAN_RUMAH_SAKIT);    
    },
    keslingLPpkm: function() {      
      this.KESEHATAN_LINGKUNGAN_LAKI_PEREMPUAN_PUSKESMAS = 
        parseInt((this.KESEHATAN_LINGKUNGAN_LAKI_PUSKESMAS == '') ? 0 : this.KESEHATAN_LINGKUNGAN_LAKI_PUSKESMAS)+
        parseInt((this.KESEHATAN_LINGKUNGAN_PEREMPUAN_PUSKESMAS == '') ? 0 : this.KESEHATAN_LINGKUNGAN_PEREMPUAN_PUSKESMAS);    
    },
    keslingLPrs: function() {      
      this.KESEHATAN_LINGKUNGAN_LAKI_PEREMPUAN_RUMAH_SAKIT = 
        parseInt((this.KESEHATAN_LINGKUNGAN_LAKI_RUMAH_SAKIT == '') ? 0 : this.KESEHATAN_LINGKUNGAN_LAKI_RUMAH_SAKIT)+
        parseInt((this.KESEHATAN_LINGKUNGAN_PEREMPUAN_RUMAH_SAKIT == '') ? 0 : this.KESEHATAN_LINGKUNGAN_PEREMPUAN_RUMAH_SAKIT);    
    },  
    giziLPpkm: function() {      
      this.GIZI_LAKI_PEREMPUAN_PUSKESMAS = 
        parseInt((this.GIZI_LAKI_PUSKESMAS == '') ? 0 : this.GIZI_LAKI_PUSKESMAS)+
        parseInt((this.GIZI_PEREMPUAN_PUSKESMAS == '') ? 0 : this.GIZI_PEREMPUAN_PUSKESMAS);    
    }, 
    giziLPrs: function() {      
      this.GIZI_LAKI_PEREMPUAN_RUMAH_SAKIT = 
        parseInt((this.GIZI_LAKI_RUMAH_SAKIT == '') ? 0 : this.GIZI_LAKI_RUMAH_SAKIT)+
        parseInt((this.GIZI_PEREMPUAN_RUMAH_SAKIT == '') ? 0 : this.GIZI_PEREMPUAN_RUMAH_SAKIT);    
    },    
    kirimData: function(data) {
      console.log(data)
      var user = JSON.parse(this.$session.get('dataLogin'));
      var username = user.username;
      for (var key in data) {
        
        var URL_DATA = (this.isUpdate == true) ? this.$urlNode + '/table/update?var='+key+'&thn='+this.PILIH_TAHUN+'&bln=' + this.PILIH_BULAN + '&username=' + this.USERNAME : this.$urlNode + '/table/input';

        var dataKirim = {
          'NAMA_FIELD' : key,
          'VALUE' : data[key],
          'USERNAME' : username,
          'ID_DAERAH' : username.substr(0, 4),
          'TAHUN' : data.PILIH_TAHUN,
          'BULAN' : data.PILIH_BULAN,
          'STATUS_VERIFIKASI' : 'rs'
        };

        this.$http.post(URL_DATA, dataKirim)
          .then(function (response) {
            console.log(response);
            this.isUpdate = true;
          })
          .catch(function (error) {
            console.log(error);
          });

      } 
      this.$dialogs.confirm('Data berhasil di proses', {title: 'Info', size: 'sm'})
    },
    reset: function() {
      this.$dialogs.confirm('Apakah anda yakin ingin menghapus data?', 
      {title: 'Info', size: 'sm'})
      .then(res => {
        console.log(res) // {ok: true|false|undefined}
        if(res.ok == true) {
          for (var key in this.$data) {
            this.$http.get(this.$urlNode + '/table/delete?var='+key+'&thn='+this.PILIH_TAHUN+'&bln=' + this.PILIH_BULAN + '&username=' + this.USERNAME)
              .then(function (response) {
                // console.log(response);
                this.isUpdate = true;
              })
              .catch(function (error) {
                // console.log(error);
                return false;
              });
          }          
        }
      })      
    },
    proses: function() {
      this.kirimData(this.$data);
    },
    checkData: function(data) {

      for (var key in data) {

        this.$http.get(this.$urlNode + '/table/getField?var=' + key + '&thn='+this.PILIH_TAHUN+'&bln=' + this.PILIH_BULAN + '&username=' + this.USERNAME)
          .then((response) => {
            console.log(response)
            if(response.data.length > 0) {
              // Read All Data
              this[response.data[0].NAMA_FIELD] = response.data[0].VALUE;
              this.isUpdate = true;
            } else {
              // Reset All Data
              Object.assign(this.$data, this.initialData());
            }
          })
          .catch(function (error) {
            console.log(error);
          });

      }
    }

  },
  components: {},
  created() {

  },
  created() {
    var user = JSON.parse(this.$session.get('dataLogin'));
    this.NAMA_RUMAH_SAKIT = user.NAMA_RS;    
    this.USERNAME = user.username;    
    this.checkData(this.$data);
  }
}
</script>