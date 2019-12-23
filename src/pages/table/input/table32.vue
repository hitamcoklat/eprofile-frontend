<!-- Main content -->
<template>
<div class="content">
  <div class="row">        
    <div class="col-md-12">
      <div class="box box-info">
        <div class="box-header with-border">
          <div class="alert alert-info alert-dismissible">
            <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
            <h4>Tabel 32 - JUMLAH KEMATIAN NEONATAL, BAYI DAN ANAK BALITA MENURUT PENYEBAB UTAMA</h4>
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
                <span class="badge bg-green">a. Penyebab Kematian Neonatal (0-28 Hari)</span>
              </div>
              <div class="form-group">
                <label for="" class="col-sm-6 control-label"> BBLR </label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" id="" v-model="PENYEBAB_KEMATIAN_NEONATAL_0_28_HARI_BBLR" name="penyebab_kematian_neonatal_0_28_hari_bblr" placeholder="">
                </div>
              </div>
              <div class="form-group">
                <label for="" class="col-sm-6 control-label"> Asfiksia </label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" id="" v-model="PENYEBAB_KEMATIAN_NEONATAL_0_28_HARI_ASFIKSIA" name="penyebab_kematian_neonatal_0_28_hari_asfiksia" placeholder="">
                </div>
              </div>
              <div class="form-group">
                <label for="" class="col-sm-6 control-label"> Tetanus Neonatorium </label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" id="" v-model="PENYEBAB_KEMATIAN_NEONATAL_0_28_HARI_TETANUS_NEONATORUM" name="penyebab_kematian_neonatal_0_28_hari_tetanus_neonatorium" placeholder="">
                </div>
              </div>
              <div class="form-group">
                <label for="" class="col-sm-6 control-label"> Sepsis </label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" id="" v-model="PENYEBAB_KEMATIAN_NEONATAL_0_28_HARI_SEPSIS" name="penyebab_kematian_neonatal_0_28_hari_sepsis" placeholder="">
                </div>
              </div>
              <div class="form-group">
                <label for="" class="col-sm-6 control-label"> Kelainan Bawaan </label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" id="" v-model="PENYEBAB_KEMATIAN_NEONATAL_0_28_HARI_KELAINAN_BAWAAN" name="penyebab_kematian_neonatal_0_28_hari_kelainan_bawaan" placeholder="">
                </div>
              </div>
              <div class="form-group">
                <label for="" class="col-sm-6 control-label"> Lain-Lain </label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" id="" v-model="PENYEBAB_KEMATIAN_NEONATAL_0_28_HARI_LAIN_LAIN" name="penyebab_kematian_neonatal_0_28_hari_lain_lain" placeholder="">
                </div>
              </div>
              <div class="form-group">
                <span class="badge bg-green">b. Penyebab Kematian Post Neonatal (29 Hari - 11 Bulan)</span>
              </div>
              <div class="form-group">
                <label for="" class="col-sm-6 control-label"> Penumonia </label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" id="" v-model="PENYEBAB_KEMATIAN_POST_NEONATAL_29_HARI_11_BULAN_PNEUMONIA" name="penyebab_kematian_post_neonatal_29_hari_11_bulan_pneumonia" placeholder="">
                </div>
              </div>
              <div class="form-group">
                <label for="" class="col-sm-6 control-label"> Diare </label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" id="" v-model="PENYEBAB_KEMATIAN_POST_NEONATAL_29_HARI_11_BULAN_DIARE" name="penyebab_kematian_post_neonatal_29_hari_11_bulan_diare" placeholder="">
                </div>
              </div>                                  
            </div>
            <div class="col-md-6">    
              <div class="form-group">
                <label for="" class="col-sm-6 control-label"> Malaria </label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" id="" v-model="PENYEBAB_KEMATIAN_POST_NEONATAL_29_HARI_11_BULAN_MALARIA" name="penyebab_kematian_post_neonatal_29_hari_11_bulan_malaria" placeholder="">
                </div>
              </div>
              <div class="form-group">
                <label for="" class="col-sm-6 control-label"> Tetanus </label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" id="" v-model="PENYEBAB_KEMATIAN_POST_NEONATAL_29_HARI_11_BULAN_TETANUS" name="penyebab_kematian_post_neonatal_29_hari_11_bulan_tetanus" placeholder="">
                </div>
              </div>
              <div class="form-group">
                <label for="" class="col-sm-6 control-label"> Kelainan Saraf </label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" id="" v-model="PENYEBAB_KEMATIAN_POST_NEONATAL_29_HARI_11_BULAN_KELAINAN_SARAF" name="penyebab_kematian_post_neonatal_29_hari_11_bulan_kelainan_saraf" placeholder="">
                </div>
              </div>
              <div class="form-group">
                <label for="" class="col-sm-6 control-label"> Kelainan Saluran Cerna </label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" id="" v-model="PENYEBAB_KEMATIAN_POST_NEONATAL_29_HARI_11_BULAN_KELAINAN_SALURAN_CERNA" name="penyebab_kematian_post_neonatal_29_hari_11_bulan_kelainan_saluran_cerna" placeholder="">
                </div>
              </div>
              <div class="form-group">
                <label for="" class="col-sm-6 control-label"> Lain-Lain </label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" id="" v-model="PENYEBAB_KEMATIAN_POST_NEONATAL_29_HARI_11_BULAN_LAIN_LAIN" name="penyebab_kematian_post_neonatal_29_hari_11_bulan_lain_lain" placeholder="">
                </div>
              </div> 
              <div class="form-group">
                <span class="badge bg-green">c. Penyebab Kematian Anak Balita (12-59 Bulan)</span>
              </div> 
              <div class="form-group">
                <label for="" class="col-sm-6 control-label"> Pneumonia </label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" id="" v-model="PENYEBAB_KEMATIAN_ANAK_BALITA_12_59_BULAN_PNEUMONIA" name="penyebab_kematian_anak_balita_12_59_bulan_pneumonia" placeholder="">
                </div>
              </div>
              <div class="form-group">
                <label for="" class="col-sm-6 control-label"> Diare </label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" id="" v-model="PENYEBAB_KEMATIAN_ANAK_BALITA_12_59_BULAN_DIARE" name="penyebab_kematian_anak_balita_12_59_bulan_diare" placeholder="">
                </div>
              </div>
              <div class="form-group">
                <label for="" class="col-sm-6 control-label"> Malaria </label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" id="" v-model="PENYEBAB_KEMATIAN_ANAK_BALITA_12_59_BULAN_MALARIA" name="penyebab_kematian_anak_balita_12_59_bulan_malaria" placeholder="">
                </div>
              </div>
              <div class="form-group">
                <label for="" class="col-sm-6 control-label"> Campak </label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" id="" v-model="PENYEBAB_KEMATIAN_ANAK_BALITA_12_59_BULAN_CAMPAK" name="penyebab_kematian_anak_balita_12_59_bulan_campak" placeholder="">
                </div>
              </div>
              <div class="form-group">
                <label for="" class="col-sm-6 control-label"> Demam </label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" id="" v-model="PENYEBAB_KEMATIAN_ANAK_BALITA_12_59_BULAN_DEMAM" name="penyebab_kematian_anak_balita_12_59_bulan_demam" placeholder="">
                </div>
              </div>
              <div class="form-group">
                <label for="" class="col-sm-6 control-label"> Difteri </label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" id="" v-model="PENYEBAB_KEMATIAN_ANAK_BALITA_12_59_BULAN_DIFTERI" name="penyebab_kematian_anak_balita_12_59_bulan_difteri" placeholder="">
                </div>
              </div>
              <div class="form-group">
                <label for="" class="col-sm-6 control-label"> Lain-Lain </label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" id="" v-model="PENYEBAB_KEMATIAN_ANAK_BALITA_12_59_BULAN_LAIN_LAIN" name="penyebab_kematian_anak_balita_12_59_bulan_lain_lain" placeholder="">
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
            <router-link to="/table32"><a class="btn btn-success btn-md"><i class="fa fa-fw fa-arrow-left"></i> Kembali</a></router-link>
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
  name: 'Table32',
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
      PENYEBAB_KEMATIAN_NEONATAL_0_28_HARI_BBLR: 0,
      PENYEBAB_KEMATIAN_NEONATAL_0_28_HARI_ASFIKSIA: 0,
      PENYEBAB_KEMATIAN_NEONATAL_0_28_HARI_TETANUS_NEONATORUM: 0,
      PENYEBAB_KEMATIAN_NEONATAL_0_28_HARI_SEPSIS: 0,
      PENYEBAB_KEMATIAN_NEONATAL_0_28_HARI_KELAINAN_BAWAAN: 0,
      PENYEBAB_KEMATIAN_NEONATAL_0_28_HARI_LAIN_LAIN: 0,
      PENYEBAB_KEMATIAN_POST_NEONATAL_29_HARI_11_BULAN_PNEUMONIA: 0,
      PENYEBAB_KEMATIAN_POST_NEONATAL_29_HARI_11_BULAN_DIARE: 0,
      PENYEBAB_KEMATIAN_POST_NEONATAL_29_HARI_11_BULAN_MALARIA: 0,
      PENYEBAB_KEMATIAN_POST_NEONATAL_29_HARI_11_BULAN_TETANUS: 0,
      PENYEBAB_KEMATIAN_POST_NEONATAL_29_HARI_11_BULAN_KELAINAN_SARAF: 0,
      PENYEBAB_KEMATIAN_POST_NEONATAL_29_HARI_11_BULAN_KELAINAN_SALURAN_CERNA: 0,
      PENYEBAB_KEMATIAN_POST_NEONATAL_29_HARI_11_BULAN_LAIN_LAIN: 0,
      PENYEBAB_KEMATIAN_ANAK_BALITA_12_59_BULAN_PNEUMONIA: 0,
      PENYEBAB_KEMATIAN_ANAK_BALITA_12_59_BULAN_DIARE: 0,
      PENYEBAB_KEMATIAN_ANAK_BALITA_12_59_BULAN_MALARIA: 0,
      PENYEBAB_KEMATIAN_ANAK_BALITA_12_59_BULAN_CAMPAK: 0,
      PENYEBAB_KEMATIAN_ANAK_BALITA_12_59_BULAN_DEMAM: 0,
      PENYEBAB_KEMATIAN_ANAK_BALITA_12_59_BULAN_DIFTERI: 0,
      PENYEBAB_KEMATIAN_ANAK_BALITA_12_59_BULAN_LAIN_LAIN: 0,

      isUpdate: false  
    }
  },
  methods: {
    initialData: function() {
      return {
        PENYEBAB_KEMATIAN_NEONATAL_0_28_HARI_BBLR: 0,
        PENYEBAB_KEMATIAN_NEONATAL_0_28_HARI_ASFIKSIA: 0,
        PENYEBAB_KEMATIAN_NEONATAL_0_28_HARI_TETANUS_NEONATORUM: 0,
        PENYEBAB_KEMATIAN_NEONATAL_0_28_HARI_SEPSIS: 0,
        PENYEBAB_KEMATIAN_NEONATAL_0_28_HARI_KELAINAN_BAWAAN: 0,
        PENYEBAB_KEMATIAN_NEONATAL_0_28_HARI_LAIN_LAIN: 0,
        PENYEBAB_KEMATIAN_POST_NEONATAL_29_HARI_11_BULAN_PNEUMONIA: 0,
        PENYEBAB_KEMATIAN_POST_NEONATAL_29_HARI_11_BULAN_DIARE: 0,
        PENYEBAB_KEMATIAN_POST_NEONATAL_29_HARI_11_BULAN_MALARIA: 0,
        PENYEBAB_KEMATIAN_POST_NEONATAL_29_HARI_11_BULAN_TETANUS: 0,
        PENYEBAB_KEMATIAN_POST_NEONATAL_29_HARI_11_BULAN_KELAINAN_SARAF: 0,
        PENYEBAB_KEMATIAN_POST_NEONATAL_29_HARI_11_BULAN_KELAINAN_SALURAN_CERNA: 0,
        PENYEBAB_KEMATIAN_POST_NEONATAL_29_HARI_11_BULAN_LAIN_LAIN: 0,
        PENYEBAB_KEMATIAN_ANAK_BALITA_12_59_BULAN_PNEUMONIA: 0,
        PENYEBAB_KEMATIAN_ANAK_BALITA_12_59_BULAN_DIARE: 0,
        PENYEBAB_KEMATIAN_ANAK_BALITA_12_59_BULAN_MALARIA: 0,
        PENYEBAB_KEMATIAN_ANAK_BALITA_12_59_BULAN_CAMPAK: 0,
        PENYEBAB_KEMATIAN_ANAK_BALITA_12_59_BULAN_DEMAM: 0,
        PENYEBAB_KEMATIAN_ANAK_BALITA_12_59_BULAN_DIFTERI: 0,
        PENYEBAB_KEMATIAN_ANAK_BALITA_12_59_BULAN_LAIN_LAIN: 0,       
      }
    }, 
    checkToggleRekapBtn: function(value) {
      if(value.rekapToggle == true) {
        this.PILIH_BULAN = '12';
        this.dataRekap = value.rekapToggle;
      }
      else this.PILIH_BULAN = '1'
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
            if(this.PENYEBAB_KEMATIAN_POST_NEONATAL_29_HARI_11_BULAN_LAIN_LAIN != 0) {
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