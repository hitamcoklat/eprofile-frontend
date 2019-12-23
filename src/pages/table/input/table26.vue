<!-- Main content -->
<template>
<div class="content">
  <div class="row">        
    <div class="col-md-12">
      <div class="box box-info">
        <div class="box-header with-border">
          <div class="alert alert-info alert-dismissible">
            <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
            <h4>Tabel 26 - PERSENTASE CAKUPAN IMUNISASI Td PADA WANITA USIA SUBUR (WUS) HAMIL DAN TIDAK HAMIL</h4>
            <h5> Tombol <strong><span class="badge bg-white"><i class="fa fa-fw fa-refresh"></i></span> reset</strong> digunakan untuk mengosongkan isian </h5>
            <h5> Tombol <strong><span class="badge bg-blue"><i class="fa fa-fw fa-recycle"></i></span> proses</strong> digunakan untuk menambah data setiap desa ke database </h5>
            <h5> Tombol <strong><span class="badge bg-purple"><i class="fa fa-fw fa-arrow-left"></i></span> kembali</strong>  digunakan untuk kembali ke halaman sebelumnya (view tabel) </h5>                   
          </div>
        </div>
        <!-- /.box-header -->
        <!-- form start -->
        <CheckAtributTable @checkToggleRekap="checkToggleRekapBtn" />
        <form class="form-horizontal">
          <div class="box-body">
            <div class="col-md-6">
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
                <label for="" class="col-sm-6 control-label">Puskesmas</label>
                <div class="col-sm-4">
                  <input type="text" v-model="NAMA_PKM" class="form-control" id="" name="puskesmas" placeholder="">
                </div>
              </div>                  
              <div class="form-group">
                <label for="" class="col-sm-6 control-label"> Jumlah WUS (15-39 Tahun) </label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" id="" v-on:blur="imunisasiTdPadaWUSTD1Persen()" v-model="JUMLAH_WUS_15_39_TAHUN" name="jumlah_wus_15_39_tahun" placeholder="">
                </div>
              </div>                  
              <div class="form-group">
                <label for="" class="col-sm-6 control-label"> Imunisasi Td Pada WUS (Td1) Jumlah </label>
                <div class="col-sm-4"> 
                  <input type="text" class="form-control" id="" v-on:blur="imunisasiTdPadaWUSTD1Persen()" v-model="IMUNISASI_TD_PADA_WUS_TD1_JUMLAH" name="imunisasi_td_pada_wus_td1_jumlah" placeholder="">
                </div>
              </div>
              <div class="form-group">
                <label for="" class="col-sm-6 control-label"> Imunisasi Td Pada WUS (Td1) Persen </label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" id="" v-model="IMUNISASI_TD_PADA_WUS_TD1_PERSEN" name="imunisasi_td_pada_wus_td1_persen" placeholder="">
                </div>
              </div>
              <div class="form-group">
                <label for="" class="col-sm-6 control-label"> Imunisasi Td Pada WUS (Td2) Jumlah </label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" id="" v-on:blur="imunisasiTdPadaWUSTD2Persen()" v-model="IMUNISASI_TD_PADA_WUS_TD2_JUMLAH" name="imunisasi_td_pada_wus_td2_jumlah" placeholder="">
                </div>
              </div>
            </div> 
            <div class="col-md-6">                                   
              <div class="form-group">
                <label for="" class="col-sm-6 control-label"> Imunisasi Td Pada WUS (Td2) Persen </label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" id="" v-model="IMUNISASI_TD_PADA_WUS_TD2_PERSEN" name="imunisasi_td_pada_wus_td2_persen" placeholder="">
                </div>
              </div>
              <div class="form-group">
                <label for="" class="col-sm-6 control-label"> Imunisasi Td Pada WUS (Td3) Jumlah </label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" id="" v-on:blur="imunisasiTdPadaWUSTD3Persen()" v-model="IMUNISASI_TD_PADA_WUS_TD3_JUMLAH" name="imunisasi_td_pada_wus_td3_jumlah" placeholder="">
                </div>
              </div>
              <div class="form-group">
                <label for="" class="col-sm-6 control-label"> Imunisasi Td Pada WUS (Td3) Persen </label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" id="" v-model="IMUNISASI_TD_PADA_WUS_TD3_PERSEN" name="imunisasi_td_pada_wus_td3_persen" placeholder="">
                </div>
              </div>
              <div class="form-group">
                <label for="" class="col-sm-6 control-label"> Imunisasi Td Pada WUS (Td4) Jumlah </label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" id="" v-on:blur="imunisasiTdPadaWUSTD4Persen()" v-model="IMUNISASI_TD_PADA_WUS_TD4_JUMLAH" name="imunisasi_td_pada_wus_td4_jumlah" placeholder="">
                </div>
              </div>
              <div class="form-group">
                <label for="" class="col-sm-6 control-label"> Imunisasi Td Pada WUS (Td4) Persen </label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" id="" v-model="IMUNISASI_TD_PADA_WUS_TD4_PERSEN" name="imunisasi_td_pada_wus_td4_persen" placeholder="">
                </div>
              </div>
              <div class="form-group">
                <label for="" class="col-sm-6 control-label"> Imunisasi Td Pada WUS (Td5) Jumlah </label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" id="" v-on:blur="imunisasiTdPadaWUSTD5Persen()" v-model="IMUNISASI_TD_PADA_WUS_TD5_JUMLAH" name="imunisasi_td_pada_wus_td5_jumlah" placeholder="">
                </div>
              </div>                  
              <div class="form-group">
                <label for="" class="col-sm-6 control-label"> Imunisasi Td Pada WUS (Td5) Persen </label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" id="" v-model="IMUNISASI_TD_PADA_WUS_TD5_PERSEN" name="imunisasi_td_pada_wus_td5_persen" placeholder="">
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
            <router-link to="/table26"><a class="btn btn-success btn-md"><i class="fa fa-fw fa-arrow-left"></i> Kembali</a></router-link>
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
import CheckAtributTable from '../../../components/CheckAtributTable';
export default {
  name: 'table26',
  computed: {
    ...mapGetters([
      'currentUser'
    ])
  },  
  components: {
    CheckAtributTable
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
      JUMLAH_WUS_15_39_TAHUN: 0,
      IMUNISASI_TD_PADA_WUS_TD1_JUMLAH: 0,
      IMUNISASI_TD_PADA_WUS_TD2_JUMLAH: 0,
      IMUNISASI_TD_PADA_WUS_TD3_JUMLAH: 0,
      IMUNISASI_TD_PADA_WUS_TD4_JUMLAH: 0,
      IMUNISASI_TD_PADA_WUS_TD5_JUMLAH: 0,
      IMUNISASI_TD_PADA_WUS_TD1_PERSEN: 0,
      IMUNISASI_TD_PADA_WUS_TD2_PERSEN: 0,
      IMUNISASI_TD_PADA_WUS_TD3_PERSEN: 0,
      IMUNISASI_TD_PADA_WUS_TD4_PERSEN: 0,
      IMUNISASI_TD_PADA_WUS_TD5_PERSEN: 0,
      isUpdate: false  
    }
  },
  methods: {
    initialData: function() {
      return {
        JUMLAH_WUS_15_39_TAHUN: 0,
        IMUNISASI_TD_PADA_WUS_TD1_JUMLAH: 0,
        IMUNISASI_TD_PADA_WUS_TD2_JUMLAH: 0,
        IMUNISASI_TD_PADA_WUS_TD3_JUMLAH: 0,
        IMUNISASI_TD_PADA_WUS_TD4_JUMLAH: 0,
        IMUNISASI_TD_PADA_WUS_TD5_JUMLAH: 0,
        IMUNISASI_TD_PADA_WUS_TD1_PERSEN: 0,
        IMUNISASI_TD_PADA_WUS_TD2_PERSEN: 0,
        IMUNISASI_TD_PADA_WUS_TD3_PERSEN: 0,
        IMUNISASI_TD_PADA_WUS_TD4_PERSEN: 0,
        IMUNISASI_TD_PADA_WUS_TD5_PERSEN: 0,        
      }
    },
    checkToggleRekapBtn: function(value) {
      if(value.rekapToggle == true) {
        this.PILIH_BULAN = '12';
        this.dataRekap = value.rekapToggle;
      }
      else this.PILIH_BULAN = '1'
    },     
    imunisasiTdPadaWUSTD1Persen: function() {
      this.IMUNISASI_TD_PADA_WUS_TD1_PERSEN =
        parseInt((this.IMUNISASI_TD_PADA_WUS_TD1_JUMLAH == '') ? 0 : this.IMUNISASI_TD_PADA_WUS_TD1_JUMLAH) / 
        parseInt((this.JUMLAH_WUS_15_39_TAHUN == '') ? 0 : this.JUMLAH_WUS_15_39_TAHUN) * 100;
    }, 
    imunisasiTdPadaWUSTD2Persen: function() {
      this.IMUNISASI_TD_PADA_WUS_TD2_PERSEN =
        parseInt((this.IMUNISASI_TD_PADA_WUS_TD2_JUMLAH == '') ? 0 : this.IMUNISASI_TD_PADA_WUS_TD2_JUMLAH) / 
        parseInt((this.JUMLAH_WUS_15_39_TAHUN == '') ? 0 : this.JUMLAH_WUS_15_39_TAHUN) * 100;
    }, 
    imunisasiTdPadaWUSTD3Persen: function() {
      this.IMUNISASI_TD_PADA_WUS_TD3_PERSEN =
        parseInt((this.IMUNISASI_TD_PADA_WUS_TD3_JUMLAH == '') ? 0 : this.IMUNISASI_TD_PADA_WUS_TD3_JUMLAH) / 
        parseInt((this.JUMLAH_WUS_15_39_TAHUN == '') ? 0 : this.JUMLAH_WUS_15_39_TAHUN) * 100;
    }, 
    imunisasiTdPadaWUSTD4Persen: function() {
      this.IMUNISASI_TD_PADA_WUS_TD4_PERSEN =
        parseInt((this.IMUNISASI_TD_PADA_WUS_TD4_JUMLAH == '') ? 0 : this.IMUNISASI_TD_PADA_WUS_TD4_JUMLAH) / 
        parseInt((this.JUMLAH_WUS_15_39_TAHUN == '') ? 0 : this.JUMLAH_WUS_15_39_TAHUN) * 100;
    }, 
    imunisasiTdPadaWUSTD5Persen: function() {
      this.IMUNISASI_TD_PADA_WUS_TD5_PERSEN =
        parseInt((this.IMUNISASI_TD_PADA_WUS_TD5_JUMLAH == '') ? 0 : this.IMUNISASI_TD_PADA_WUS_TD5_JUMLAH) / 
        parseInt((this.JUMLAH_WUS_15_39_TAHUN == '') ? 0 : this.JUMLAH_WUS_15_39_TAHUN) * 100;
    }, 
    
    onChangeHandle: function() {
      this.checkData(this.$data);
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
              // Object.assign(this.$data, this.initialData());
              this[element] = 0;
              this.isUpdate = false;
            }
          })
          .then(() => {
            if(this.IMUNISASI_TD_PADA_WUS_TD1_PERSEN != 0) {
              this.isUpdate = true;
            }                
          })  
          .catch(function (error) {
            console.log(error);
          });        
     
      });

    }
  },
  beforeCreate() {
    // Object.assign(this.$data, this.initialData());
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