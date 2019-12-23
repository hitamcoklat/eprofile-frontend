<template>
  <row>
    <div class="col-md-12">
      <div slot="content" class="table-responsive">
        <div class="row">
          <div class="col-md-12">
            <div class="box box-info">
              <div class="box-header with-border">
                <div class="alert alert-info alert-dismissible">
                  <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
                  <h4>Tabel 40 - CAKUPAN IMUNISASI LANJUTAN DPT-HB-Hib 4 DAN CAMPAK/MR2 PADA ANAK USIA DIBAWAH DUA TAHUN (BADUTA)</h4>
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
                    <label for="" class="col-sm-6 control-label"> Jumlah Baduta Laki </label>
                    <div class="col-sm-4">
                      <input type="text" class="form-control" id="" v-model="JUMLAH_BADUTA_L" name="jumlah_baduta_laki" placeholder="" v-on:blur="jmlBadutaLakiPerempuan()">
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="" class="col-sm-6 control-label"> Jumlah Baduta Perempuan</label>
                    <div class="col-sm-4">
                      <input type="text" class="form-control" id="" v-model="JUMLAH_BADUTA_P" name="jumlah_baduta_perempuan" placeholder="" v-on:blur="jmlBadutaLakiPerempuan()">
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="" class="col-sm-6 control-label"> Jumlah Baduta Laki+Perempuan </label>
                    <div class="col-sm-4">
                      <input type="text" class="form-control" id="" v-model="JUMLAH_BADUTA_L_P" name="jumlah_baduta_laki_perempuan" placeholder="" disabled=""> 
                    </div>
                  </div>
                  <div class="form-group">
                    <span class="badge bg-green">a. Baduta Diimunisasi DPT-HB-Hib4</span>
                  </div>
                  <div class="form-group">
                    <label for="" class="col-sm-6 control-label"> Jumlah Laki </label>
                    <div class="col-sm-4">
                      <input type="text" class="form-control" id="" name="baduta_diimunisasi_dpt_hb_hib4_laki_jumlah" v-model="BADUTA_DIIMUNISASI_DPT_HB_Hib4_L" v-on:blur="persenBadutaDPT_L()" placeholder="">
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="" class="col-sm-6 control-label"> Persen Laki </label>
                    <div class="col-sm-4">
                      <input type="text" class="form-control" id="" name="baduta_diimunisasi_dpt_hb_hib4_laki_persen" v-model="BADUTA_DIIMUNISASI_DPT_HB_Hib4_L_PERSEN" placeholder="" disabled="">
                    </div>
                  </div>
                </div>
                <div class="col-md-6">    
                  <div class="form-group">
                    <label for="" class="col-sm-6 control-label"> Jumlah Perempuan </label>
                    <div class="col-sm-4">
                      <input type="text" class="form-control" id="" name="baduta_diimunisasi_dpt_hb_hib4_perempuan_jumlah" v-model="BADUTA_DIIMUNISASI_DPT_HB_Hib4_P" v-on:blur="persenBadutaDPT_P()" placeholder="">
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="" class="col-sm-6 control-label"> Persen Perempuan </label>
                    <div class="col-sm-4">
                      <input type="text" class="form-control" id="" name="baduta_diimunisasi_dpt_hb_hib4_perempuan_persen" v-model="BADUTA_DIIMUNISASI_DPT_HB_Hib4_P_PERSEN" placeholder="" disabled="">
                    </div>
                  </div> 
                  <div class="form-group">
                    <label for="" class="col-sm-6 control-label"> Jumlah Laki+Perempuan </label>
                    <div class="col-sm-4">
                      <input type="text" class="form-control" id="" name="baduta_diimunisasi_dpt_hb_hib4_laki_perempuan_jumlah" disabled="" v-model="BADUTA_DIIMUNISASI_DPT_HB_Hib4_L_P" placeholder="">
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="" class="col-sm-6 control-label"> Persen Laki+Perempuan </label>
                    <div class="col-sm-4">
                      <input type="text" class="form-control" id="" name="baduta_diimunisasi_dpt_hb_hib4_laki_perempuan_persen" v-model="BADUTA_DIIMUNISASI_DPT_HB_Hib4_L_P_PERSEN" placeholder="" disabled="">
                    </div>
                  </div>  
                  <div class="form-group">
                    <span class="badge bg-green">b. Baduta Diimunisasi CAMPAK/MR2</span>
                  </div>
                  <div class="form-group">
                    <label for="" class="col-sm-6 control-label"> Jumlah Laki </label>
                    <div class="col-sm-4">
                      <input type="text" class="form-control" id="" name="baduta_diimunisasi_campak_mr2_laki_jumlah" v-model="BADUTA_DIIMUNISASI_CAMPAK_MR2_L" v-on:blur="persenBadutaCampak_L()" placeholder="">
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="" class="col-sm-6 control-label"> Persen Laki </label>
                    <div class="col-sm-4">
                      <input type="text" class="form-control" id="" name="baduta_diimunisasi_campak_mr2_laki_persen" v-model="BADUTA_DIIMUNISASI_CAMPAK_MR2_L_PERSEN" placeholder="" disabled="">
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="" class="col-sm-6 control-label"> Jumlah Perempuan </label>
                    <div class="col-sm-4">
                      <input type="text" class="form-control" id="" name="baduta_diimunisasi_campak_mr2_perempuan_jumlah" v-model="BADUTA_DIIMUNISASI_CAMPAK_MR2_P" v-on:blur="persenBadutaCampak_P()" placeholder="">
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="" class="col-sm-6 control-label"> Persen Perempuan </label>
                    <div class="col-sm-4">
                      <input type="text" class="form-control" id="" name="baduta_diimunisasi_campak_mr2_perempuan_persen" v-model="BADUTA_DIIMUNISASI_CAMPAK_MR2_P_PERSEN" placeholder="" disabled="">
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="" class="col-sm-6 control-label"> Jumlah Laki+Perempuan </label>
                    <div class="col-sm-4">
                      <input type="text" class="form-control" id="" name="baduta_diimunisasi_campak_mr2_laki_perempuan_jumlah" disabled="" v-model="BADUTA_DIIMUNISASI_CAMPAK_MR2_L_P" placeholder="">
                    </div>
                  </div>
                  <div class="form-group">
                    <label for="" class="col-sm-6 control-label"> Persen Laki+Perempuan </label>
                    <div class="col-sm-4">
                      <input type="text" class="form-control" id="" name="baduta_diimunisasi_campak_mr2_laki_perempuan_persen" v-model="BADUTA_DIIMUNISASI_CAMPAK_MR2_L_P_PERSEN" placeholder="" disabled="">
                    </div>
                  </div>                  
                                                                                    
                </div>                              
              </div>
              <!-- /.box-body -->
              <div class="box-footer">
                <button type="reset" class="btn btn-default"><i class="fa fa-fw fa-refresh"></i> Reset</button>
                <button type="button" v-on:click="proses" class="btn btn-primary" data-toggle="modal" data-target="#modal-primary"><i class="fa fa-fw fa-recycle"></i>
                Proses
                </button>                
                <router-link to="/table40"><a class="btn btn-success btn-md"><i class="fa fa-fw fa-arrow-left"></i> Kembali</a></router-link>
              </div>
              <!-- /.box-footer -->
            </form>  
              <!-- /.modal -->
            </div>
          </div>
        </div>
      </div>
      </va-box>
    </div>
  </row>
</template>
<script>
import { mapGetters, mapActions } from 'vuex'
import CheckAtributTable from '../../../components/CheckAtributTable';

export default {
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
      JUMLAH_BADUTA_L: 0,
      JUMLAH_BADUTA_P: 0,
      JUMLAH_BADUTA_L_P: 0,
      BADUTA_DIIMUNISASI_DPT_HB_Hib4_L: 0,
      BADUTA_DIIMUNISASI_DPT_HB_Hib4_L_PERSEN: 0,
      BADUTA_DIIMUNISASI_DPT_HB_Hib4_P: 0,
      BADUTA_DIIMUNISASI_DPT_HB_Hib4_P_PERSEN: 0,
      BADUTA_DIIMUNISASI_DPT_HB_Hib4_L_P: 0,
      BADUTA_DIIMUNISASI_DPT_HB_Hib4_L_P_PERSEN: 0,
      BADUTA_DIIMUNISASI_CAMPAK_MR2_L: 0,
      BADUTA_DIIMUNISASI_CAMPAK_MR2_L_PERSEN: 0,
      BADUTA_DIIMUNISASI_CAMPAK_MR2_P: 0,
      BADUTA_DIIMUNISASI_CAMPAK_MR2_P_PERSEN: 0,
      BADUTA_DIIMUNISASI_CAMPAK_MR2_L_P: 0,
      BADUTA_DIIMUNISASI_CAMPAK_MR2_L_P_PERSEN: 0,
      isUpdate: false
    }
  },  
  name: 'Table40',
  methods: {
      initialData: function() {
        return {
          JUMLAH_BADUTA_L: 0,
          JUMLAH_BADUTA_P: 0,
          JUMLAH_BADUTA_L_P: 0,          
          BADUTA_DIIMUNISASI_DPT_HB_Hib4_L: 0,
          BADUTA_DIIMUNISASI_DPT_HB_Hib4_L_PERSEN: 0,
          BADUTA_DIIMUNISASI_DPT_HB_Hib4_P: 0,
          BADUTA_DIIMUNISASI_DPT_HB_Hib4_P_PERSEN: 0,
          BADUTA_DIIMUNISASI_DPT_HB_Hib4_L_P: 0,
          BADUTA_DIIMUNISASI_DPT_HB_Hib4_L_P_PERSEN: 0,
          BADUTA_DIIMUNISASI_CAMPAK_MR2_L: 0,
          BADUTA_DIIMUNISASI_CAMPAK_MR2_L_PERSEN: 0,
          BADUTA_DIIMUNISASI_CAMPAK_MR2_P: 0,
          BADUTA_DIIMUNISASI_CAMPAK_MR2_P_PERSEN: 0,
          BADUTA_DIIMUNISASI_CAMPAK_MR2_L_P: 0,
          BADUTA_DIIMUNISASI_CAMPAK_MR2_L_P_PERSEN: 0,          
        }
      },
    checkToggleRekapBtn: function(value) {
      if(value.rekapToggle == true) {
        this.PILIH_BULAN = '12';
        this.dataRekap = value.rekapToggle;
      }
      else this.PILIH_BULAN = '1'
    },       
      masuk: function() {
          console.log('tombol masuk ditekan')
      },
      jmlBadutaLakiPerempuan: function () {
        this.JUMLAH_BADUTA_L_P = 
          parseInt((this.JUMLAH_BADUTA_L == '') ? 0 : this.JUMLAH_BADUTA_L) + 
          parseInt((this.JUMLAH_BADUTA_P == '') ? 0 : this.JUMLAH_BADUTA_P);
      },
      persenBadutaDPT_L: function () {
        this.BADUTA_DIIMUNISASI_DPT_HB_Hib4_L_PERSEN = 
          parseInt((this.BADUTA_DIIMUNISASI_DPT_HB_Hib4_L == '') ? 0 : this.BADUTA_DIIMUNISASI_DPT_HB_Hib4_L) /
          parseInt((this.JUMLAH_BADUTA_L == '') ? 0 : this.JUMLAH_BADUTA_L)*100;
      },  
      persenBadutaDPT_P: function () {
        this.BADUTA_DIIMUNISASI_DPT_HB_Hib4_P_PERSEN = 
          parseInt((this.BADUTA_DIIMUNISASI_DPT_HB_Hib4_P == '') ? 0 : this.BADUTA_DIIMUNISASI_DPT_HB_Hib4_P) /
          parseInt((this.JUMLAH_BADUTA_P == '') ? 0 : this.JUMLAH_BADUTA_P)*100;

        this.BADUTA_DIIMUNISASI_DPT_HB_Hib4_L_P = 
          parseInt((this.BADUTA_DIIMUNISASI_DPT_HB_Hib4_L == '') ? 0 : this.BADUTA_DIIMUNISASI_DPT_HB_Hib4_L) + 
          parseInt((this.BADUTA_DIIMUNISASI_DPT_HB_Hib4_P == '') ? 0 : this.BADUTA_DIIMUNISASI_DPT_HB_Hib4_P);

        this.BADUTA_DIIMUNISASI_DPT_HB_Hib4_L_P_PERSEN = 
          parseInt((this.BADUTA_DIIMUNISASI_DPT_HB_Hib4_L_P == '') ? 0 : this.BADUTA_DIIMUNISASI_DPT_HB_Hib4_L_P) /
          parseInt((this.JUMLAH_BADUTA_L_P == '') ? 0 : this.JUMLAH_BADUTA_L_P)*100;
      },  
      persenBadutaCampak_L: function () {
        this.BADUTA_DIIMUNISASI_CAMPAK_MR2_L_PERSEN = 
          parseInt((this.BADUTA_DIIMUNISASI_CAMPAK_MR2_L == '') ? 0 : this.BADUTA_DIIMUNISASI_CAMPAK_MR2_L) /
          parseInt((this.JUMLAH_BADUTA_L == '') ? 0 : this.JUMLAH_BADUTA_L)*100;
      },  
      persenBadutaCampak_P: function () {
        this.BADUTA_DIIMUNISASI_CAMPAK_MR2_P_PERSEN = 
          parseInt((this.BADUTA_DIIMUNISASI_CAMPAK_MR2_P == '') ? 0 : this.BADUTA_DIIMUNISASI_CAMPAK_MR2_P) /
          parseInt((this.JUMLAH_BADUTA_P == '') ? 0 : this.JUMLAH_BADUTA_P)*100;

        this.BADUTA_DIIMUNISASI_CAMPAK_MR2_L_P = 
          parseInt((this.BADUTA_DIIMUNISASI_CAMPAK_MR2_L == '') ? 0 : this.BADUTA_DIIMUNISASI_CAMPAK_MR2_L) + 
          parseInt((this.BADUTA_DIIMUNISASI_CAMPAK_MR2_P == '') ? 0 : this.BADUTA_DIIMUNISASI_CAMPAK_MR2_P);

        this.BADUTA_DIIMUNISASI_CAMPAK_MR2_L_P_PERSEN = 
          parseInt((this.BADUTA_DIIMUNISASI_CAMPAK_MR2_L_P == '') ? 0 : this.BADUTA_DIIMUNISASI_CAMPAK_MR2_L_P) /
          parseInt((this.JUMLAH_BADUTA_L_P == '') ? 0 : this.JUMLAH_BADUTA_L_P)*100;
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
