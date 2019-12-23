<!-- Main content -->
<template>
<div class="content">
  <div class="row">        
    <div class="col-md-12">
      <div class="box box-info">
        <div class="box-header with-border">
          <div class="alert alert-info alert-dismissible">
            <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
            <h4>Tabel 12 - JUMLAH TENAGA KEPERAWATAN DAN KEBIDANAN DI FASILITAS KESEHATAN</h4>
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
                          <label for="" class="col-sm-6 control-label">Perawat Laki </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="perawatLPpkm()" v-model="PERAWAT_LAKI_PUSKESMAS" name="perawat_laki_puskesmas" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">Perawat Perempuan </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="perawatLPpkm()" v-model="PERAWAT_PEREMPUAN_PUSKESMAS" name="perawat_perempuan_puskesmas" placeholder="">
                          </div>
                        </div>                        
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">Perawat Laki + Perempuan </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="PERAWAT_LAKI_PEREMPUAN_PUSKESMAS" name="perawat_laki_perempuan_puskesmas" placeholder="" disabled="true">
                          </div>
                        </div> 
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">Bidan </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="BIDAN_PUSKESMAS" name="bidan" placeholder="">
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
                          <label for="" class="col-sm-6 control-label">Perawat Laki </label>
                          <div class="col-sm-4"> 
                            <input type="text" class="form-control" id="" v-on:blur="perawatLPrs()" v-model="PERAWAT_LAKI_RUMAH_SAKIT" name="perawat_laki_rumah_sakit" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">Perawat Perempuan </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="perawatLPrs()" v-model="PERAWAT_PEREMPUAN_RUMAH_SAKIT" name="perawat_perempuan_rumah_sakit" placeholder="">
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">Perawat Laki + Perempuan </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="PERAWAT_LAKI_PEREMPUAN_RUMAH_SAKIT" name="perawat_laki_perempuan_rumah_sakit" placeholder="" disabled="true">
                          </div>
                        </div> 
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">Bidan </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="BIDAN_RUMAH_SAKIT" name="bidan" placeholder="">
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
            <router-link to="/table12"><a class="btn btn-success btn-md"><i class="fa fa-fw fa-arrow-left"></i> Kembali</a></router-link>
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
  name: 'Table10',
  data() {
    return {
      USERNAME: '',
      JENIS_RS: '',
      PILIH_BULAN: '1',
      PILIH_TAHUN: '2019',
      PUSKESMAS: '', 
      PERAWAT_LAKI_PUSKESMAS: 0,
      PERAWAT_LAKI_RUMAH_SAKIT: 0,
      PERAWAT_PEREMPUAN_PUSKESMAS: 0,
      PERAWAT_PEREMPUAN_RUMAH_SAKIT: 0,
      PERAWAT_LAKI_PEREMPUAN_PUSKESMAS: 0,
      PERAWAT_LAKI_PEREMPUAN_RUMAH_SAKIT: 0,
      BIDAN_PUSKESMAS: 0,
      BIDAN_RUMAH_SAKIT: 0,

      isUpdate: false  
    }
  },
  methods: {
    initialData: function() {
      return {
        PERAWAT_LAKI_PUSKESMAS: 0,
        PERAWAT_LAKI_RUMAH_SAKIT: 0,
        PERAWAT_PEREMPUAN_PUSKESMAS: 0,
        PERAWAT_PEREMPUAN_RUMAH_SAKIT: 0,
        PERAWAT_LAKI_PEREMPUAN_PUSKESMAS: 0,
        PERAWAT_LAKI_PEREMPUAN_RUMAH_SAKIT: 0,
        BIDAN_PUSKESMAS: 0,
        BIDAN_RUMAH_SAKIT: 0,       
      }
    },        
    perawatLPpkm: function() {      
      this.PERAWAT_LAKI_PEREMPUAN_PUSKESMAS = 
        parseInt((this.PERAWAT_LAKI_PUSKESMAS == '') ? 0 : this.PERAWAT_LAKI_PUSKESMAS)+
        parseInt((this.PERAWAT_PEREMPUAN_PUSKESMAS == '') ? 0 : this.PERAWAT_PEREMPUAN_PUSKESMAS);    
    }, 
    perawatLPrs: function() {      
      this.PERAWAT_LAKI_PEREMPUAN_RUMAH_SAKIT = 
        parseInt((this.PERAWAT_LAKI_RUMAH_SAKIT == '') ? 0 : this.PERAWAT_LAKI_RUMAH_SAKIT)+
        parseInt((this.PERAWAT_PEREMPUAN_RUMAH_SAKIT == '') ? 0 : this.PERAWAT_PEREMPUAN_RUMAH_SAKIT);    
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