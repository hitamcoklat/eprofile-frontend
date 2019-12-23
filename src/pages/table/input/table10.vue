<!-- Main content -->
<template>
<div class="content">
  <div class="row">        
    <div class="col-md-12">
      <div class="box box-info">
        <div class="box-header with-border">
          <div class="alert alert-info alert-dismissible">
            <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
            <h4>Tabel 10 - JUMLAH POSYANDU DAN POSBINDU PTM</h4>
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
              </div>
              <div class="form-group">
                <label for="" class="col-sm-6 control-label">Pilih Tahun</label>
                <div class="col-sm-4">
                  <select class="form-control">
                    <option selected="">Pilih Tahun</option>
                    <option>2019</option>
                    <option>2020</option>
                    <option>2021</option>
                  </select>
                </div>
              </div>
              <div class="form-group">
                <label for="" class="col-sm-6 control-label">Nama Desa</label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" id="" name="" placeholder="">
                </div>
              </div>
              <div class="form-group">
                <label for="" class="col-sm-6 control-label">Nama Puskesmas</label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" id="" name="" placeholder="">
                </div>
              </div>
              <div class="form-group">
                <label for="" class="col-sm-6 control-label">Jumlah Strata Posyandu Pratama </label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" id="" v-on:blur="jmlStrataPosy()" v-model="STRATA_POSYANDU_PRATAMA_JUMLAH" name="strata_posyandu_pratama_jumlah" placeholder="">
                </div>
              </div>
              <div class="form-group">
                <label for="" class="col-sm-6 control-label">Jumlah Strata Posyandu Madya </label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" id="" v-on:blur="jmlStrataPosy()" v-model="STRATA_POSYANDU_MADYA_JUMLAH" name="strata_posyandu_madya_jumlah" placeholder="">
                </div>
              </div>                  
              <div class="form-group">
                <label for="" class="col-sm-6 control-label">Jumlah Strata Posyandu Purnama </label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" id="" v-on:blur="jmlStrataPosy()" v-model="STRATA_POSYANDU_PURNAMA_JUMLAH" name="strata_posyandu_purnama_jumlah" placeholder="">
                </div>
              </div>
              <div class="form-group">
                <label for="" class="col-sm-6 control-label">Jumlah Strata Posyandu Mandiri </label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" id="" v-on:blur="jmlStrataPosy()" v-model="STRATA_POSYANDU_MANDIRI_JUMLAH" name="strata_posyandu_mandiri_jumlah" placeholder="">
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label for="" class="col-sm-6 control-label">Jumlah Strata Posyandu </label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" id="" v-on:blur="posyAktifPersen()" v-model="STRATA_POSYANDU_JUMLAH" name="strata_posyandu_jumlah" placeholder="">
                </div>
              </div>
              <div class="form-group">
                <label for="" class="col-sm-6 control-label">Persen Strata Posyandu Pratama </label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" id="" v-model="STRATA_POSYANDU_PRATAMA_PERSEN" name="strata_posyandu_pratama_persen" placeholder="">
                </div>
              </div>
              <div class="form-group">
                <label for="" class="col-sm-6 control-label">Persen Strata Posyandu Madya </label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" id="" v-model="STRATA_POSYANDU_MADYA_PERSEN" name="strata_posyandu_madya_persen" placeholder="">
                </div>
              </div>
              <div class="form-group">
                <label for="" class="col-sm-6 control-label">Persen Strata Posyandu Purnama </label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" id="" v-model="STRATA_POSYANDU_PURNAMA_PERSEN" name="strata_posyandu_purnama_persen" placeholder="">
                </div>
              </div>                                                                 
              <div class="form-group">
                <label for="" class="col-sm-6 control-label">Persen Strata Posyandu Mandiri </label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" id="" v-model="STRATA_POSYANDU_MANDIRI_PERSEN" name="strata_posyandu_mandiri_persen" placeholder="">
                </div>
              </div>
              <div class="form-group">
                <label for="" class="col-sm-6 control-label">Jumlah Posyandu Aktif </label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" id="" v-on:blur="posyAktifPersen()" v-model="POSYANDU_AKTIF_JUMLAH" name="posyandu_aktif_jumlah" placeholder="">
                </div>
              </div>
              <div class="form-group">
                <label for="" class="col-sm-6 control-label">Persen Posyandu Aktif </label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" id="" v-model="POSYANDU_AKTIF_PERSEN" name="posyandu_aktif_persen" placeholder="">
                </div>
              </div>
              <!--div class="form-group">
                <label for="" class="col-sm-6 control-label">Jumlah Posbindu PTM </label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" id="" name="jumlah_posbindu_ptm" placeholder="">
                </div>
              </div-->
            </div>                
          </div>
          <!-- /.box-body -->
          <div class="box-footer">
            <button type="reset" class="btn btn-default"><i class="fa fa-fw fa-refresh"></i> Reset</button>
            <button type="button" class="btn btn-primary" @click="proses()"><i class="fa fa-fw fa-recycle"></i>
            Proses
            </button>                
            <router-link to="/table10"><a class="btn btn-success btn-md"><i class="fa fa-fw fa-arrow-left"></i> Kembali</a></router-link>
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
      NAMA_PKM: '', 
      STRATA_POSYANDU_PRATAMA_JUMLAH: 0,
      STRATA_POSYANDU_PRATAMA_PERSEN: 0,
      STRATA_POSYANDU_MADYA_JUMLAH: 0,
      STRATA_POSYANDU_MADYA_PERSEN: 0,
      STRATA_POSYANDU_PURNAMA_JUMLAH: 0,
      STRATA_POSYANDU_PURNAMA_PERSEN: 0,
      STRATA_POSYANDU_MANDIRI_JUMLAH: 0,
      STRATA_POSYANDU_MANDIRI_PERSEN: 0,
      STRATA_POSYANDU_JUMLAH: 0,
      POSYANDU_AKTIF_JUMLAH: 0,
      POSYANDU_AKTIF_PERSEN: 0,

      isUpdate: false  
    }
  },
  methods: {
    initialData: function() {
      return {
        STRATA_POSYANDU_PRATAMA_JUMLAH: 0,
        STRATA_POSYANDU_PRATAMA_PERSEN: 0,
        STRATA_POSYANDU_MADYA_JUMLAH: 0,
        STRATA_POSYANDU_MADYA_PERSEN: 0,
        STRATA_POSYANDU_PURNAMA_JUMLAH: 0,
        STRATA_POSYANDU_PURNAMA_PERSEN: 0,
        STRATA_POSYANDU_MANDIRI_JUMLAH: 0,
        STRATA_POSYANDU_MANDIRI_PERSEN: 0,
        STRATA_POSYANDU_JUMLAH: 0,
        POSYANDU_AKTIF_JUMLAH: 0,
        POSYANDU_AKTIF_PERSEN: 0,       
      }
    },        
    jmlStrataPosy: function() {
      this.STRATA_POSYANDU_JUMLAH = 
        parseInt((this.STRATA_POSYANDU_PRATAMA_JUMLAH == '') ? 0 : this.STRATA_POSYANDU_PRATAMA_JUMLAH) +
        parseInt((this.STRATA_POSYANDU_MADYA_JUMLAH == '') ? 0 : this.STRATA_POSYANDU_MADYA_JUMLAH) +
        parseInt((this.STRATA_POSYANDU_PURNAMA_JUMLAH == '') ? 0 : this.STRATA_POSYANDU_PURNAMA_JUMLAH) +
        parseInt((this.STRATA_POSYANDU_MANDIRI_JUMLAH == '') ? 0 : this.STRATA_POSYANDU_MANDIRI_JUMLAH) ;
      
      this.STRATA_POSYANDU_PRATAMA_PERSEN = 
        parseInt((this.STRATA_POSYANDU_PRATAMA_JUMLAH == '') ? 0 : this.STRATA_POSYANDU_PRATAMA_JUMLAH) /
        parseInt((this.STRATA_POSYANDU_JUMLAH == '') ? 0 : this.STRATA_POSYANDU_JUMLAH) * 100;

      this.STRATA_POSYANDU_MADYA_PERSEN = 
        parseInt((this.STRATA_POSYANDU_MADYA_JUMLAH == '') ? 0 : this.STRATA_POSYANDU_MADYA_JUMLAH) /
        parseInt((this.STRATA_POSYANDU_JUMLAH == '') ? 0 : this.STRATA_POSYANDU_JUMLAH) * 100;

      this.STRATA_POSYANDU_PURNAMA_PERSEN = 
        parseInt((this.STRATA_POSYANDU_PURNAMA_JUMLAH == '') ? 0 : this.STRATA_POSYANDU_PURNAMA_JUMLAH) /
        parseInt((this.STRATA_POSYANDU_JUMLAH == '') ? 0 : this.STRATA_POSYANDU_JUMLAH) * 100; 

      this.STRATA_POSYANDU_MANDIRI_PERSEN = 
        parseInt((this.STRATA_POSYANDU_MANDIRI_JUMLAH == '') ? 0 : this.STRATA_POSYANDU_MANDIRI_JUMLAH) /
        parseInt((this.STRATA_POSYANDU_JUMLAH == '') ? 0 : this.STRATA_POSYANDU_JUMLAH) * 100;
      
      this.POSYANDU_AKTIF_JUMLAH = 
        parseInt((this.STRATA_POSYANDU_PURNAMA_JUMLAH == '') ? 0 : this.STRATA_POSYANDU_PURNAMA_JUMLAH) +
        parseInt((this.STRATA_POSYANDU_MANDIRI_JUMLAH == '') ? 0 : this.STRATA_POSYANDU_MANDIRI_JUMLAH);    
    },
    posyAktifPersen: function() {
      this.POSYANDU_AKTIF_PERSEN = 
        parseInt((this.POSYANDU_AKTIF_JUMLAH == '') ? 0 : this.POSYANDU_AKTIF_JUMLAH) /
        parseInt((this.STRATA_POSYANDU_JUMLAH == '') ? 0 : this.STRATA_POSYANDU_JUMLAH) * 100;
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