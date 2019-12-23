<!-- Main content -->
<template>
<div class="content">
  <div class="row">        
    <div class="col-md-12">
      <div class="box box-info">
        <div class="box-header with-border">
          <div class="alert alert-info alert-dismissible">
            <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
            <h4>Tabel 7 - ANGKA KEMATIAN PASIEN DI RUMAH SAKIT</h4>
            <h5> Tombol <strong><span class="badge bg-white"><i class="fa fa-fw fa-refresh"></i></span> reset</strong> digunakan untuk mengosongkan isian </h5>
            <h5> Tombol <strong><span class="badge bg-blue"><i class="fa fa-fw fa-recycle"></i></span> proses</strong> digunakan untuk menambah data setiap desa ke database </h5>
            <h5> Tombol <strong><span class="badge bg-purple"><i class="fa fa-fw fa-arrow-left"></i></span> kembali</strong>  digunakan untuk kembali ke halaman sebelumnya (view tabel) </h5>
                                     
          </div>
        </div>
        <!-- /.box-header -->
        <!-- form start -->
        <form class="form-horizontal">
          <div class="box-body">
            <div class="col-md-6">
              <div class="form-group">
                <label for="" class="col-sm-6 control-label">Pilih Bulan</label>
                <div class="col-sm-4">
                  <select v-model="PILIH_BULAN" class="form-control">
                    <option selected="selected">Pilih Bulan</option>
                    <option value="1">Januari</option>
                    <option value="2">Februari</option>
                    <option value="3">Maret</option>
                    <option value="4">April</option>
                    <option value="5">Mei</option>
                    <option value="6">Juni</option>
                    <option value="7">Juli</option>
                    <option value="8">Agustus</option>
                    <option value="9">September</option>
                    <option value="10">Oktober</option>
                    <option value="11">November</option>
                    <option value="12">Desember</option>
                  </select>
                </div>
              </div>
              <div class="form-group">
                <label for="" class="col-sm-6 control-label">Pilih Tahun</label>
                <div class="col-sm-4">
                  <select @click="onChangeHandle()" v-model="PILIH_TAHUN" class="form-control">
                    <option selected="selected">Pilih Tahun</option>
                    <option value="2019">2019</option>
                    <option value="2020">2020</option>
                    <option value="2021">2021</option>
                  </select>
                </div>
              </div>
              <div class="form-group">
                <label for="" class="col-sm-6 control-label">Nama Rumah Sakit</label>
                <div class="col-sm-4">
                  <input v-model="NAMA_RUMAH_SAKIT" type="text" class="form-control" id="" name="" placeholder="">
                </div>
              </div>             
              <div class="form-group">
                <label for="" class="col-sm-6 control-label">Jumlah Tempat Tidur</label>
                <div class="col-sm-4">
                  <input v-model="JUMLAH_TEMPAT_TIDUR" type="text" class="form-control" id="" name="jumlah_tempat_tidur" placeholder="">
                </div>
              </div>
              <div class="form-group">
                <label for="" class="col-sm-6 control-label">Pasien Keluar (Hidup + Mati) Laki</label>
                <div class="col-sm-4">
                  <input v-model="PASIEN_KELUAR_HIDUP_MATI_LAKI" type="text" class="form-control" id="" name="pasien_keluar_hidup_mati_laki" placeholder="" v-on:blur="jmlPasienKeluarHidupMatiLP()">
                </div>
              </div>
              <div class="form-group">
                <label for="" class="col-sm-6 control-label">Pasien Keluar (Hidup + Mati) Perempuan</label>
                <div class="col-sm-4">
                  <input v-model="PASIEN_KELUAR_HIDUP_MATI_PEREMPUAN" type="text" class="form-control" id="" name="pasien_keluar_hidup_mati_perempuan" placeholder="" v-on:blur="jmlPasienKeluarHidupMatiLP()">
                </div>
              </div>
              <div class="form-group">
                <label for="" class="col-sm-6 control-label">Pasien Keluar (Hidup + Mati) Laki+Perempuan</label>
                <div class="col-sm-4">
                  <input v-model="PASIEN_KELUAR_HIDUP_MATI_LAKI_PEREMPUAN" type="text" class="form-control" id="" name="pasien_keluar_hidup_mati_laki_perempuan" placeholder="" disabled="">
                </div>
              </div>
              <div class="form-group">
                <label for="" class="col-sm-6 control-label">Pasien Keluar Mati Laki</label>
                <div class="col-sm-4">
                  <input v-model="PASIEN_KELUAR_MATI_LAKI" type="text" class="form-control" id="" name="pasien_keluar_mati_laki" placeholder="" v-on:blur="jmlPasienKeluarMati()">
                </div>
              </div>
              <div class="form-group">
                <label for="" class="col-sm-6 control-label">Pasien Keluar Mati Perempuan</label>
                <div class="col-sm-4">
                  <input v-model="PASIEN_KELUAR_MATI_PEREMPUAN" type="text" class="form-control" id="" name="pasien_keluar_mati_perempuan" placeholder="" v-on:blur="jmlPasienKeluarMati()">
                </div>
              </div>
              <div class="form-group">
                <label for="" class="col-sm-6 control-label">Pasien Keluar Mati Laki+Perempuan</label>
                <div class="col-sm-4">
                  <input v-model="PASIEN_KELUAR_MATI_LAKI_PEREMPUAN" type="text" class="form-control" id="" name="pasien_keluar_mati_laki_perempuan" placeholder="" disabled="">
                </div>
              </div>                  
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label for="" class="col-sm-6 control-label">Pasien Keluar Mati >= 48 Jam Dirawat Laki</label>
                <div class="col-sm-4">
                  <input v-model="PASIEN_KELUAR_MATI_LEBIH_DARI_48_JAM_DIRAWAT_LAKI" type="text" class="form-control" id="" name="pasien_keluar_mati_lebih_dari_48_jam_dirawat_laki" placeholder="" v-on:blur="jmlPasienKeluarMatiJam()">
                </div>
              </div>
              <div class="form-group">
                <label for="" class="col-sm-6 control-label">Pasien Keluar Mati >= 48 Jam Dirawat Perempuan</label>
                <div class="col-sm-4">
                  <input v-model="PASIEN_KELUAR_MATI_LEBIH_DARI_48_JAM_DIRAWAT_PEREMPUAN" type="text" class="form-control" id="" name="pasien_keluar_mati_lebih_dari_48_jam_dirawat_perempuan" placeholder="" v-on:blur="jmlPasienKeluarMatiJam()">
                </div>
              </div>
              <div class="form-group">
                <label for="" class="col-sm-6 control-label">Pasien Keluar Mati >= 48 Jam Dirawat Laki+Perempuan</label>
                <div class="col-sm-4">
                  <input v-model="PASIEN_KELUAR_MATI_LEBIH_DARI_48_JAM_DIRAWAT_LAKI_PEREMPUAN" type="text" class="form-control" id="" name="pasien_keluar_mati_lebih_dari_48_jam_dirawat_laki_perempuan" placeholder="" disabled="">
                </div>
              </div>                  
              <div class="form-group">
                <label for="" class="col-sm-6 control-label">Gross Death Rate Laki</label>
                <div class="col-sm-4">
                  <input v-model="GROSS_DEATH_RATE_LAKI" type="text" class="form-control" id="" name="gross_death_rate_laki" placeholder="" disabled="">
                </div>
              </div>
              <div class="form-group">
                <label for="" class="col-sm-6 control-label">Gross Death Rate Perempuan</label>
                <div class="col-sm-4">
                  <input v-model="GROSS_DEATH_RATE_PEREMPUAN" type="text" class="form-control" id="" name="gross_death_rate_perempuan" placeholder="" disabled="">
                </div>
              </div>
              <div class="form-group">
                <label for="" class="col-sm-6 control-label">Gross Death Rate Laki+Perempuan</label>
                <div class="col-sm-4">
                  <input v-model="GROSS_DEATH_RATE_LAKI_PEREMPUAN" type="text" class="form-control" id="" name="gross_death_rate_laki_perempuan" placeholder="" disabled="">
                </div>
              </div>
              <div class="form-group">
                <label for="" class="col-sm-6 control-label">Net Death Rate Laki</label>
                <div class="col-sm-4">
                  <input v-model="NET_DEATH_RATE_LAKI" type="text" class="form-control" id="" name="net_death_rate_laki" placeholder="" disabled="">
                </div>
              </div>
              <div class="form-group">
                <label for="" class="col-sm-6 control-label">Net Death Rate Perempuan</label>
                <div class="col-sm-4">
                  <input v-model="NET_DEATH_RATE_PEREMPUAN" type="text" class="form-control" id="" name="net_death_rate_perempuan" placeholder="" disabled="">
                </div>
              </div>
              <div class="form-group">
                <label for="" class="col-sm-6 control-label">Net Death Rate Laki+Perempuan</label>
                <div class="col-sm-4">
                  <input v-model="NET_DEATH_RATE_LAKI_PEREMPUAN" type="text" class="form-control" id="" name="net_death_rate_laki_perempuan" placeholder="" disabled="">
                </div>
              </div>                                     
            </div>                
          </div>
          <!-- /.box-body -->
          <div class="box-footer">
            <button type="reset" @click="reset()" class="btn btn-default"><i class="fa fa-fw fa-refresh"></i> Reset</button>
            <button type="button" class="btn btn-primary" @click="proses()"><i class="fa fa-fw fa-recycle"></i>
            Proses
            </button>                
            <router-link to="/table7"><a class="btn btn-success btn-md"><i class="fa fa-fw fa-arrow-left"></i> Kembali</a></router-link>
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
  name: 'Table7',
  data() {
    return {
      USERNAME: '',
      JENIS_RS: '',
      PILIH_BULAN: '1',
      PILIH_TAHUN: '2019',
      NAMA_RUMAH_SAKIT: '', 
      JUMLAH_TEMPAT_TIDUR: 0,
      PASIEN_KELUAR_HIDUP_MATI_LAKI: 0,
      PASIEN_KELUAR_HIDUP_MATI_PEREMPUAN: 0,
      PASIEN_KELUAR_HIDUP_MATI_LAKI_PEREMPUAN: 0,
      PASIEN_KELUAR_MATI_LAKI: 0,
      PASIEN_KELUAR_MATI_PEREMPUAN: 0,
      PASIEN_KELUAR_MATI_LAKI_PEREMPUAN: 0,
      PASIEN_KELUAR_MATI_LEBIH_DARI_48_JAM_DIRAWAT_LAKI: 0,
      PASIEN_KELUAR_MATI_LEBIH_DARI_48_JAM_DIRAWAT_PEREMPUAN: 0,
      PASIEN_KELUAR_MATI_LEBIH_DARI_48_JAM_DIRAWAT_LAKI_PEREMPUAN: 0,
      GROSS_DEATH_RATE_LAKI: 0,
      GROSS_DEATH_RATE_PEREMPUAN: 0,
      GROSS_DEATH_RATE_LAKI_PEREMPUAN: 0,
      NET_DEATH_RATE_LAKI: 0,
      NET_DEATH_RATE_PEREMPUAN: 0,
      NET_DEATH_RATE_LAKI_PEREMPUAN: 0,              
      isUpdate: false  
    }
  },
  methods: {
    initialData: function() {
      return {
        JUMLAH_TEMPAT_TIDUR: 0,
        PASIEN_KELUAR_HIDUP_MATI_LAKI: 0,
        PASIEN_KELUAR_HIDUP_MATI_PEREMPUAN: 0,
        PASIEN_KELUAR_HIDUP_MATI_LAKI_PEREMPUAN: 0,
        PASIEN_KELUAR_MATI_LAKI: 0,
        PASIEN_KELUAR_MATI_PEREMPUAN: 0,
        PASIEN_KELUAR_MATI_LAKI_PEREMPUAN: 0,
        PASIEN_KELUAR_MATI_LEBIH_DARI_48_JAM_DIRAWAT_LAKI: 0,
        PASIEN_KELUAR_MATI_LEBIH_DARI_48_JAM_DIRAWAT_PEREMPUAN: 0,
        PASIEN_KELUAR_MATI_LEBIH_DARI_48_JAM_DIRAWAT_LAKI_PEREMPUAN: 0,
        GROSS_DEATH_RATE_LAKI: 0,
        GROSS_DEATH_RATE_PEREMPUAN: 0,
        GROSS_DEATH_RATE_LAKI_PEREMPUAN: 0,
        NET_DEATH_RATE_LAKI: 0,
        NET_DEATH_RATE_PEREMPUAN: 0,
        NET_DEATH_RATE_LAKI_PEREMPUAN: 0,        
      }
    },
    jmlPasienKeluarHidupMatiLP: function() {
      this.PASIEN_KELUAR_HIDUP_MATI_LAKI_PEREMPUAN =
        parseInt((this.PASIEN_KELUAR_HIDUP_MATI_LAKI == '') ? 0 : this.PASIEN_KELUAR_HIDUP_MATI_LAKI) + 
        parseInt((this.PASIEN_KELUAR_HIDUP_MATI_PEREMPUAN == '') ? 0 : this.PASIEN_KELUAR_HIDUP_MATI_PEREMPUAN)
    },
    onChangeHandle: function() {
      this.checkData(this.$data);
    },
    jmlPasienKeluarMati: function() {
      this.PASIEN_KELUAR_MATI_LAKI_PEREMPUAN =
        parseInt((this.PASIEN_KELUAR_MATI_LAKI == '') ? 0 : this.PASIEN_KELUAR_MATI_LAKI) + 
        parseInt((this.PASIEN_KELUAR_MATI_PEREMPUAN == '') ? 0 : this.PASIEN_KELUAR_MATI_PEREMPUAN)   

      this.GROSS_DEATH_RATE_LAKI =
        parseInt((this.PASIEN_KELUAR_MATI_LAKI == '') ? 0 : this.PASIEN_KELUAR_MATI_LAKI) /
        parseInt((this.PASIEN_KELUAR_HIDUP_MATI_LAKI == '') ? 0 : this.PASIEN_KELUAR_HIDUP_MATI_LAKI) * 100  

      this.GROSS_DEATH_RATE_PEREMPUAN =
        parseInt((this.PASIEN_KELUAR_MATI_PEREMPUAN == '') ? 0 : this.PASIEN_KELUAR_MATI_PEREMPUAN) /
        parseInt((this.PASIEN_KELUAR_HIDUP_MATI_PEREMPUAN == '') ? 0 : this.PASIEN_KELUAR_HIDUP_MATI_PEREMPUAN) * 100 

      this.GROSS_DEATH_RATE_LAKI_PEREMPUAN =
        parseInt((this.PASIEN_KELUAR_MATI_LAKI_PEREMPUAN == '') ? 0 : this.PASIEN_KELUAR_MATI_LAKI_PEREMPUAN) /
        parseInt((this.PASIEN_KELUAR_HIDUP_MATI_LAKI_PEREMPUAN == '') ? 0 : this.PASIEN_KELUAR_HIDUP_MATI_LAKI_PEREMPUAN) * 100  
    },
    jmlPasienKeluarMatiJam: function() {
      this.PASIEN_KELUAR_MATI_LEBIH_DARI_48_JAM_DIRAWAT_LAKI_PEREMPUAN =
        parseInt((this.PASIEN_KELUAR_MATI_LEBIH_DARI_48_JAM_DIRAWAT_LAKI == '') ? 0 : this.PASIEN_KELUAR_MATI_LEBIH_DARI_48_JAM_DIRAWAT_LAKI) + 
        parseInt((this.PASIEN_KELUAR_MATI_LEBIH_DARI_48_JAM_DIRAWAT_PEREMPUAN == '') ? 0 : this.PASIEN_KELUAR_MATI_LEBIH_DARI_48_JAM_DIRAWAT_PEREMPUAN)      

      this.NET_DEATH_RATE_LAKI =
        parseInt((this.PASIEN_KELUAR_MATI_LEBIH_DARI_48_JAM_DIRAWAT_LAKI == '') ? 0 : this.PASIEN_KELUAR_MATI_LEBIH_DARI_48_JAM_DIRAWAT_LAKI) /
        parseInt((this.PASIEN_KELUAR_HIDUP_MATI_LAKI == '') ? 0 : this.PASIEN_KELUAR_HIDUP_MATI_LAKI) * 100

      this.NET_DEATH_RATE_PEREMPUAN =
        parseInt((this.PASIEN_KELUAR_MATI_LEBIH_DARI_48_JAM_DIRAWAT_PEREMPUAN == '') ? 0 : this.PASIEN_KELUAR_MATI_LEBIH_DARI_48_JAM_DIRAWAT_PEREMPUAN) /
        parseInt((this.PASIEN_KELUAR_HIDUP_MATI_PEREMPUAN == '') ? 0 : this.PASIEN_KELUAR_HIDUP_MATI_PEREMPUAN) * 100
    
      this.NET_DEATH_RATE_LAKI_PEREMPUAN =
        parseInt((this.PASIEN_KELUAR_MATI_LEBIH_DARI_48_JAM_DIRAWAT_LAKI_PEREMPUAN == '') ? 0 : this.PASIEN_KELUAR_MATI_LEBIH_DARI_48_JAM_DIRAWAT_LAKI_PEREMPUAN) /
        parseInt((this.PASIEN_KELUAR_HIDUP_MATI_LAKI_PEREMPUAN == '') ? 0 : this.PASIEN_KELUAR_HIDUP_MATI_LAKI_PEREMPUAN) * 100
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
            } else {
              // Reset All Data
              Object.assign(this.$data, this.initialData());
              this.isUpdate = false;
            }
          }).then(() => {
            if(this.JUMLAH_TEMPAT_TIDUR != 0) {
              this.isUpdate = true;
            }                
          })             
          .catch(function (error) {
            console.log(error);
          });

      }
    }        
  },
  components: {},
  beforeCreate() {
    // Object.assign(this.$data, this.initialData());
  },
  created() {
    var user = JSON.parse(this.$session.get('dataLogin'));
    this.NAMA_RUMAH_SAKIT = user.NAMA_RS;    
    this.USERNAME = user.username;    
    this.checkData(this.$data);
  }
}
</script>