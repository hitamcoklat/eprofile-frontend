<!-- Main content -->
<template>
<div class="content">
  <div class="row">        
    <div class="col-md-12">
      <div class="box box-info">
        <div class="box-header with-border">
          <div class="alert alert-info alert-dismissible">
            <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
            <h4>Tabel 35 - BAYI BARU LAHIR MENDAPAT INISIASI MENYUSUI DINI (IMD) DAN PEMBERIAN ASI EKSLUSIF PADA BAYI < 6 BULAN</h4>
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
                <label for="" class="col-sm-6 control-label"> Bayi Baru Lahir Jumlah </label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" v-on:blur="bblMendapatIMDpersen()" id=""v-model="BAYI_BARU_LAHIR_JUMLAH" name="bayi_baru_lahir_jumlah" placeholder="">
                </div>
              </div>
              <div class="form-group">
                <label for="" class="col-sm-6 control-label"> Bayi Baru Lahir Mendapat IMD Jumlah </label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" id="" v-on:blur="bblMendapatIMDpersen()" v-model="BAYI_BARU_LAHIR_MENDAPAT_IMD_JUMLAH" name="bayi_baru_lahir_mendapat_imd_jumlah" placeholder="">
                </div>
              </div>
              <div class="form-group">
                <label for="" class="col-sm-6 control-label"> Bayi Baru Lahir Mendapat IMD Persen </label>
                <div class="col-sm-4">
                  <input disabled type="text" class="form-control" id="" v-model="BAYI_BARU_LAHIR_MENDAPAT_IMD_PERSEN" name="bayi_baru_lahir_mendapat_imd_persen" placeholder="">
                </div>
              </div>                  
            </div>
            <div class="col-md-6">    
              <div class="form-group">
                <label for="" class="col-sm-6 control-label"> Bayi Usia < 6 Bulan Jumlah </label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" id="" v-on:blur="bayiUsiaKD6bln()" v-model="BAYI_USIA_KURANG_DARI_6_BULAN_JUMLAH" name="bayi_usia_kurang_dari_6_bulan_jumlah" placeholder="">
                </div>
              </div>
              <div class="form-group">
                <label for="" class="col-sm-6 control-label"> Bayi Usia < 6 Bulan Diberi ASI Ekslusif Jumlah </label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" id="" v-on:blur="bayiUsiaKD6bln()" v-model="BAYI_USIA_KURANG_DARI_6_BULAN_DIBERI_ASI_EKSLUSIF_JUMLAH" name="bayi_usia_kurang_dari_6_bulan_diberi_asi_ekslusif_jumlah" placeholder="">
                </div>
              </div>
              <div class="form-group">
                <label for="" class="col-sm-6 control-label"> Bayi Usia < 6 Bulan Diberi ASI Ekslusif Persen </label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" id="" v-model="BAYI_USIA_KURANG_DARI_6_BULAN_DIBERI_ASI_EKSLUSIF_PERSEN" name="bayi_usia_kurang_dari_6_bulan_diberi_asi_ekslusif_persen" placeholder="">
                </div>
              </div>
            </div>                 
          </div>
          <!-- /.box-body -->
          <div class="box-footer">
            <button @click="reset()" type="reset" class="btn btn-default"><i class="fa fa-fw fa-refresh"></i> Reset</button>
            <button type="button" class="btn btn-primary" @click="proses()"><i class="fa fa-fw fa-recycle"></i>
            Proses
            </button>                
            <router-link to="/table35"><a class="btn btn-success btn-md"><i class="fa fa-fw fa-arrow-left"></i> Kembali</a></router-link>
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
  name: 'table35',
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
      BAYI_BARU_LAHIR_JUMLAH: 0,
      BAYI_BARU_LAHIR_MENDAPAT_IMD_JUMLAH: 0,
      BAYI_BARU_LAHIR_MENDAPAT_IMD_PERSEN: 0,
      BAYI_USIA_KURANG_DARI_6_BULAN_JUMLAH: 0,
      BAYI_USIA_KURANG_DARI_6_BULAN_DIBERI_ASI_EKSLUSIF_JUMLAH: 0,
      BAYI_USIA_KURANG_DARI_6_BULAN_DIBERI_ASI_EKSLUSIF_PERSEN: 0,

      isUpdate: false  
    }
  },
  methods: {
    initialData: function() {
      return {
        BAYI_BARU_LAHIR_JUMLAH: 0,
        BAYI_BARU_LAHIR_MENDAPAT_IMD_JUMLAH: 0,
        BAYI_BARU_LAHIR_MENDAPAT_IMD_PERSEN: 0,
        BAYI_USIA_KURANG_DARI_6_BULAN_JUMLAH: 0,
        BAYI_USIA_KURANG_DARI_6_BULAN_DIBERI_ASI_EKSLUSIF_JUMLAH: 0,
        BAYI_USIA_KURANG_DARI_6_BULAN_DIBERI_ASI_EKSLUSIF_PERSEN: 0,       
      }
    },
    checkToggleRekapBtn: function(value) {
      if(value.rekapToggle == true) {
        this.PILIH_BULAN = '12';
        this.dataRekap = value.rekapToggle;
      }
      else this.PILIH_BULAN = '1'
    },            
    bblMendapatIMDpersen: function() {
      this.BAYI_BARU_LAHIR_MENDAPAT_IMD_PERSEN = 
        parseInt((this.BAYI_BARU_LAHIR_MENDAPAT_IMD_JUMLAH == '') ? 0 : this.BAYI_BARU_LAHIR_MENDAPAT_IMD_JUMLAH) /
        parseInt((this.BAYI_BARU_LAHIR_JUMLAH == '') ? 0 : this.BAYI_BARU_LAHIR_JUMLAH) * 100;
    }, 
    bayiUsiaKD6bln: function() {
      this.BAYI_USIA_KURANG_DARI_6_BULAN_DIBERI_ASI_EKSLUSIF_PERSEN = 
        parseInt((this.BAYI_USIA_KURANG_DARI_6_BULAN_DIBERI_ASI_EKSLUSIF_JUMLAH == '') ? 0 : this.BAYI_USIA_KURANG_DARI_6_BULAN_DIBERI_ASI_EKSLUSIF_JUMLAH) /
        parseInt((this.BAYI_USIA_KURANG_DARI_6_BULAN_JUMLAH == '') ? 0 : this.BAYI_USIA_KURANG_DARI_6_BULAN_JUMLAH) * 100;
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
            if(this.BAYI_BARU_LAHIR_MENDAPAT_IMD_PERSEN != 0) {
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