<!-- Main content -->
<template>
  <div class="content">
    <div class="row">
      <div class="col-md-12">
        <div class="box box-info">
          <div class="box-header with-border">
            <div class="alert alert-info alert-dismissible">
              <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
              <h4>Tabel 1 - LUAS WILAYAH, JUMLAH DESA/KELURAHAN, JUMLAH PENDUDUK, JUMLAH RUMAH TANGGA DAN KEPADATAN PENDUDUK</h4>
              <h5> Tombol <strong><span class="badge bg-white"><i class="fa fa-fw fa-refresh"></i></span> reset</strong> digunakan untuk mengosongkan isian </h5>
              <h5> Tombol <strong><span class="badge bg-blue"><i class="fa fa-fw fa-recycle"></i></span> proses</strong> digunakan untuk menambah data setiap desa ke database </h5>
              <h5> Tombol <strong><span class="badge bg-purple"><i class="fa fa-fw fa-arrow-left"></i></span> kembali</strong> digunakan untuk kembali ke halaman sebelumnya (view tabel) </h5>
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
                  <select @click="onChangeHandle()" v-model="PILIH_BULAN" class="form-control">
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
                <label for="" class="col-sm-6 control-label">Desa</label>
                <div class="col-sm-4">
                  <select @click="onChangeHandle()" v-model="ID_DESA" class="form-control">
                    <option v-bind:key="item._id" v-for="(item) in listDesa" :value="item._id">
                      {{item.NAMA_DESA}}
                    </option>
                  </select>
                </div>
              </div>
                <div class="form-group">
                  <label for="" class="col-sm-6 control-label">Nama Puskesmas</label>
                  <div class="col-sm-4">
                    <input type="text" class="form-control" id="" name="" placeholder="">
                  </div>
                </div>
                <div class="form-group">
                  <label for="" class="col-sm-6 control-label">Luas Wilayah</label>
                  <div class="col-sm-4">
                    <input type="text" class="form-control" id="" v-on:blur="jmlDesaKel()" v-model="LUAS_WILAYAH" name="luas_wilayah" placeholder="">
                  </div>
                </div>
                <div class="form-group">
                  <label for="" class="col-sm-6 control-label">Jumlah Desa</label>
                  <div class="col-sm-4">
                    <input type="text" class="form-control" id="" v-on:blur="jmlDesaKel()" v-model="JUMLAH_DESA" name="jumlah_desa" placeholder="">
                  </div>
                </div>
              </div>
              <div class="col-md-6">
                <div class="form-group">
                  <label for="" class="col-sm-6 control-label">Jumlah Kelurahan</label>
                  <div class="col-sm-4">
                    <input type="text" class="form-control" id="" v-on:blur="jmlDesaKel()" v-model="JUMLAH_KELURAHAN" name="jumlah_kelurahan" placeholder="">
                  </div>
                </div>
                <div class="form-group">
                  <label for="" class="col-sm-6 control-label">Jumlah Desa + Kelurahan</label>
                  <div class="col-sm-4">
                    <input type="text" class="form-control" id="" v-model="JUMLAH_DESA_KELURAHAN" name="jumlah_desa_kelurahan" placeholder="" disabled="">
                  </div>
                </div>
                <div class="form-group">
                  <label for="" class="col-sm-6 control-label">Jumlah Penduduk</label>
                  <div class="col-sm-4">
                    <input type="text" class="form-control" id="" v-on:blur="rataJiwa_RT()" v-model="JUMLAH_PENDUDUK" name="jumlah_penduduk" placeholder="">
                  </div>
                </div>
                <div class="form-group">
                  <label for="" class="col-sm-6 control-label">Jumlah Rumah Tangga</label>
                  <div class="col-sm-4">
                    <input type="text" class="form-control" id="" v-on:blur="rataJiwa_RT()" v-model="JUMLAH_RUMAH_TANGGA" name="jumlah_rumah_tangga" placeholder="">
                  </div>
                </div>
                <div class="form-group">
                  <label for="" class="col-sm-6 control-label">Rata - Rata Jiwa / Rumah Tangga</label>
                  <div class="col-sm-4">
                    <input type="text" class="form-control" id="" v-model="RATA_RATA_JIWA_RUMAH_TANGGA" name="rata_rata_jiwa_rumah_tangga" placeholder="" disabled="">
                  </div>
                </div>
                <div class="form-group">
                  <label for="" class="col-sm-6 control-label">Kepadatan Penduduk</label>
                  <div class="col-sm-4">
                    <input type="text" class="form-control" id="" v-model="KEPADATAN_PENDUDUK" name="kepadatan_penduduk" placeholder="" disabled="">
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
              <router-link to="/table1"><a class="btn btn-success btn-md"><i class="fa fa-fw fa-arrow-left"></i> Kembali</a></router-link>
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
import { mapGetters, mapActions } from 'vuex'
export default {
  computed: {
    ...mapGetters([
      'currentUser'
    ])
  },    
  data() {
    return {
      USERNAME: '',
      PILIH_BULAN: '1',
      PILIH_TAHUN: '2019',
      LEVEL: '',
      NAMA_PKM: '',
      ID_PUSKESMAS: '',
      ID_DESA: '',
      listDesa: [],
      LUAS_WILAYAH: 0,
      JUMLAH_DESA: 0,
      JUMLAH_KELURAHAN: 0,
      JUMLAH_DESA_KELURAHAN: 0,
      JUMLAH_PENDUDUK: 0,
      JUMLAH_RUMAH_TANGGA: 0,
      RATA_RATA_JIWA_RUMAH_TANGGA: 0,
      KEPADATAN_PENDUDUK: 0,
      isUpdate: false
    }
  },  
  name: 'Table64',
  components: {},
  methods: {
    initialData: function() {
      return {
        LUAS_WILAYAH: 0,
        JUMLAH_DESA: 0,
        JUMLAH_KELURAHAN: 0,
        JUMLAH_DESA_KELURAHAN: 0,
        JUMLAH_PENDUDUK: 0,
        JUMLAH_RUMAH_TANGGA: 0,
        RATA_RATA_JIWA_RUMAH_TANGGA: 0,
        KEPADATAN_PENDUDUK: 0,          
      }
    },
    masuk: function() {
        console.log('tombol masuk ditekan')
    },
    jmlDesaKel: function () {
      this.JUMLAH_DESA_KELURAHAN = 
        parseInt((this.JUMLAH_DESA == '') ? 0 : this.JUMLAH_DESA) +
        parseInt((this.JUMLAH_KELURAHAN == '') ? 0 : this.JUMLAH_KELURAHAN);
    },   
    rataJiwa_RT: function () {
      this.RATA_RATA_JIWA_RUMAH_TANGGA = 
        parseInt((this.JUMLAH_PENDUDUK == '') ? 0 : this.JUMLAH_PENDUDUK)/
        parseInt((this.JUMLAH_RUMAH_TANGGA == '') ? 0 : this.JUMLAH_RUMAH_TANGGA);
      
      this.KEPADATAN_PENDUDUK = 
        parseInt((this.JUMLAH_PENDUDUK == '') ? 0 : this.JUMLAH_PENDUDUK)/
        parseInt((this.LUAS_WILAYAH == '') ? 0 : this.LUAS_WILAYAH);
    },      
    onChangeHandle: function() {
      this.checkData(this.initialData());
    },    
    fetchDataDesa: function(idPuskesmas) {
      this.$http.get(this.$urlNode + '/desa/getListDesaByPuskesmas?idPus=' + idPuskesmas)
      .then((response) => {
          this.listDesa = response.data;
          console.log(this.listDesa)
      })
      .catch(function (error) {
          console.log(error);
      });            
    },    
    kirimData: function(data) {
      delete data.listDesa;
      // console.log(data)
      var user = JSON.parse(this.$session.get('dataLogin'));
      var username = user.username;
      for (var key in data) {
        
        var URL_DATA = (this.isUpdate == true) ? this.$urlNode + '/table/update?var='+key+'&thn='+this.PILIH_TAHUN+'&bln=' + this.PILIH_BULAN + '&username=' + this.USERNAME : this.$urlNode + '/table/input';

        var dataKirim = {
          'NAMA_FIELD' : key,
          'VALUE' : data[key],
          'USERNAME' : username,
          'ID_DESA' : data.ID_DESA,
          'ID_DAERAH' : username.substr(0, 4),
          'TAHUN' : data.PILIH_TAHUN,
          'BULAN' : data.PILIH_BULAN,
          'STATUS_VERIFIKASI' : this.LEVEL
        };

        this.$http.post(URL_DATA, dataKirim)
          .then(function (response) {
            console.log(response);            
          })
          .then(() => { this.isUpdate = true; })
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

      this.fetchDataDesa(this.ID_PUSKESMAS)
      const myArray = data;

      Object.keys(myArray).forEach(element => {

        this.$http.get(this.$urlNode + '/table/getField?var=' + element + '&thn='+this.PILIH_TAHUN+'&bln=' + this.PILIH_BULAN + '&username=' + this.USERNAME + '&id_desa=' + this.ID_DESA)
          .then((response) => {
            if(response.data.length > 0) {
              // Read All Data
              this[response.data[0].NAMA_FIELD] = response.data[0].VALUE;
            } else {
              // Reset All Data
              this[element] = 0;
              this.isUpdate = false;
            }
          })
          .then(() => {
            if(this.BADUTA_DIIMUNISASI_DPT_HB_Hib4_P_PERSEN != 0) {
              this.isUpdate = true;
            }                
          })  
          .catch(function (error) {
            console.log(error);
          });        
       
        });

      }  
    },
    created() {
      var user = JSON.parse(this.$session.get('dataLogin'));
      console.log(user);
      this.NAMA_PKM = this.$store.getters.currentUser.NAMA_PUSKESMAS;
      this.LEVEL = this.$store.getters.currentUser.level;
      this.USERNAME = user.username;
      this.ID_PUSKESMAS = user.KODE_PUSKESMAS;
      this.fetchDataDesa(this.ID_PUSKESMAS)     
      this.checkData(this.initialData());
    }
  }
</script>
