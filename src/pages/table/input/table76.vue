<template>
<!-- Main content -->
<div class="content">
  <div class="row">        
    <div class="col-md-12">
      <div class="box box-info">
        <div class="box-header with-border">
          <div class="alert alert-info alert-dismissible">
            <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
            <h4>Tabel 76 - TEMPAT PENGELOLAAN MAKANAN (TPM)  MEMENUHI SYARAT KESEHATAN MENURUT KECAMATAN DAN PUSKESMAS </h4>
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
                <span class="badge bg-green"> a. TPM Yang Ada </span>
              </div> 
              <div class="form-group">
                <label for="" class="col-sm-6 control-label"> Jasa Boga </label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" id="" v-on:blur="jmlTPMygAda()" v-model="TPM_YANG_ADA_JASA_BOGA" name="tpm_yang_ada_jasa_boga" placeholder="">
                </div>
              </div> 
              <div class="form-group">
                <label for="" class="col-sm-6 control-label"> Rumah Makanan Restoran </label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" id="" v-on:blur="jmlTPMygAda()" v-model="TPM_YANG_ADA_RUMAH_MAKAN_RESTORAN" name="tpm_yang_ada_rumah_makanan_restoran" placeholder="">
                </div>
              </div>
              <div class="form-group">
                <label for="" class="col-sm-6 control-label"> Depot Air Minum (DAM) </label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" id="" v-on:blur="jmlTPMygAda()" v-model="TPM_YANG_ADA_DEPOT_AIR_MINUM" name="tpm_yang_ada_depot_air_minum" placeholder="">
                </div>
              </div>
              <div class="form-group">
                <label for="" class="col-sm-6 control-label"> Makanan Jajanan&#47;Kantin&#47;Sentra Makanan Jajanan </label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" id="" v-on:blur="jmlTPMygAda()" v-model="TPM_YANG_ADA_MAKANAN_JAJANAN_KANTIN_SENTRA_MAKANAN_JAJANAN" name="tpm_yang_ada_makanan_jajanan_kantin_sentra_makanan_jajanan" placeholder="">
                </div>
              </div> 
              <div class="form-group">
                <label for="" class="col-sm-6 control-label"> Jumlah TPM Yang Ada </label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" id="" v-model="TPM_YANG_ADA_JUMLAH_TPM_YANG_ADA" name="tpm_yang_ada_jumlah_tpm_yang_ada" placeholder="" v-on:blur="persenTPMMSKESjmlTPMKES()" disabled="true">
                </div>
              </div> 
              <div class="form-group">
                <span class="badge bg-green"> b. TPM Memenuhi Syarat Kesehatan </span>
              </div> 
              <div class="form-group">
                <label for="" class="col-sm-6 control-label"> Jasa Boga Jumlah </label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" id="" v-on:blur="persenTPMMSKESjasaboga()" v-model="TPM_MS_KESEHATAN_JASA_BOGA_JUMLAH" name="tpm_ms_kesehatan_jasa_boga_jumlah" placeholder="">
                </div>
              </div> 
              <div class="form-group">
                <label for="" class="col-sm-6 control-label"> Jasa Boga Persen </label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" id="" v-model="TPM_MS_KESEHATAN_JASA_BOGA_PERSEN" name="tpm_ms_kesehatan_jasa_boga_persen" placeholder="" disabled="true">
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label for="" class="col-sm-6 control-label"> Rumah Makan&#47;Restoran Jumlah </label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" id="" v-on:blur="persenTPMMSKESrestoran()" v-model="TPM_MS_KESEHATAN_RUMAH_MAKAN_RESTORAN_JUMLAH" name="tpm_ms_kesehatan_rumah_makan_restoran_jumlah" placeholder="">
                </div>
              </div>
              <div class="form-group">
                <label for="" class="col-sm-6 control-label"> Rumah Makan&#47;Restoran Persen </label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" id="" v-model="TPM_MS_KESEHATAN_RUMAH_MAKAN_RESTORAN_PERSEN" name="tpm_ms_kesehatan_rumah_makan_restoran_persen" placeholder="" disabled="true">
                </div>
              </div>
              <div class="form-group">
                <label for="" class="col-sm-6 control-label"> Depot Air Minum (DAM) Jumlah</label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" id="" v-on:blur="persenTPMMSKESdam()" v-model="TPM_MS_KESEHATAN_DEPOT_AIR_MINUM_JUMLAH" name="tpm_ms_kesehatan_depot_air_minum_jumlah" placeholder="">
                </div>
              </div>
              <div class="form-group">
                <label for="" class="col-sm-6 control-label"> Depot Air Minum (DAM) Persen</label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" id="" v-model="TPM_MS_KESEHATAN_DEPOT_AIR_MINUM_PERSEN" name="tpm_ms_kesehatan_depot_air_minum_persen" placeholder="" disabled="true">
                </div>
              </div> 
              <div class="form-group">
                <label for="" class="col-sm-6 control-label"> Makanan Jajanan&#47;Kantin&#47;Sentra Makanan Jajanan Jumlah</label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" id="" v-on:blur="persenTPMMSKESmakananJajanan()" v-model="TPM_MS_KESEHATAN_MAKANAN_JAJANAN_KANTIN_SENTRA_MAKANAN_JAJANAN_JUMLAH" name="tpm_ms_kesehatan_makanan_jajanan_kantin_sentra_makanan_jajanan_jumlah" placeholder="">
                </div>
              </div>
              <div class="form-group">
                <label for="" class="col-sm-6 control-label"> Makanan Jajanan&#47;Kantin&#47;Sentra Makanan Jajanan Persen</label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" id="" v-model="TPM_MS_KESEHATAN_MAKANAN_JAJANAN_KANTIN_SENTRA_MAKANAN_JAJANAN_PERSEN" name="tpm_ms_kesehatan_makanan_jajanan_kanrin_sentra_makanan_jajanan_persen" placeholder="" disabled="true">
                </div>
              </div> 
              <div class="form-group">
                <label for="" class="col-sm-6 control-label"> Jumlah TPM Memenuhi Syarat Kesehatan Total</label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" id="" v-model="TPM_MS_KESEHATAN_JUMLAH_TPM_MS_KESEHATAN_TOTAL" name="tpm_ms_kesehatan_jumlah_tpm_memenuhi_syarat_kesehatan_total" v-on:blur="persenTPMMSKESjmlTPMKES()" placeholder="">
                </div>
              </div>
              <div class="form-group">
                <label for="" class="col-sm-6 control-label"> Jumlah TPM Memenuhi Syarat Kesehatan Persen</label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" id="" v-model="TPM_MS_KESEHATAN_JUMLAH_TPM_MS_KESEHATAN_PERSEN" name="tpm_ms_kesehatan_jumlah_tpm_memenuhi_syarat_kesehatan_persen" placeholder="" disabled="true">
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
            <router-link to="/table76"><a class="btn btn-success btn-md"><i class="fa fa-fw fa-arrow-left"></i> Kembali</a></router-link>
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
  name: 'Table76',
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
      TPM_YANG_ADA_JASA_BOGA: 0,
      TPM_YANG_ADA_RUMAH_MAKAN_RESTORAN: 0,
      TPM_YANG_ADA_DEPOT_AIR_MINUM: 0,
      TPM_YANG_ADA_MAKANAN_JAJANAN_KANTIN_SENTRA_MAKANAN_JAJANAN: 0,
      TPM_YANG_ADA_JUMLAH_TPM_YANG_ADA: 0,
      TPM_MS_KESEHATAN_JASA_BOGA_JUMLAH: 0,
      TPM_MS_KESEHATAN_JASA_BOGA_PERSEN: 0,
      TPM_MS_KESEHATAN_RUMAH_MAKAN_RESTORAN_JUMLAH: 0,
      TPM_MS_KESEHATAN_RUMAH_MAKAN_RESTORAN_PERSEN: 0,
      TPM_MS_KESEHATAN_DEPOT_AIR_MINUM_JUMLAH: 0,
      TPM_MS_KESEHATAN_DEPOT_AIR_MINUM_PERSEN: 0,
      TPM_MS_KESEHATAN_MAKANAN_JAJANAN_KANTIN_SENTRA_MAKANAN_JAJANAN_JUMLAH: 0,
      TPM_MS_KESEHATAN_MAKANAN_JAJANAN_KANTIN_SENTRA_MAKANAN_JAJANAN_PERSEN: 0,
      TPM_MS_KESEHATAN_JUMLAH_TPM_MS_KESEHATAN_TOTAL: 0,
      TPM_MS_KESEHATAN_JUMLAH_TPM_MS_KESEHATAN_PERSEN: 0,
      isUpdate: false  
    }
  },
  methods: {
    initialData: function() {
      return {
        TPM_YANG_ADA_JASA_BOGA: 0,
        TPM_YANG_ADA_RUMAH_MAKAN_RESTORAN: 0,
        TPM_YANG_ADA_DEPOT_AIR_MINUM: 0,
        TPM_YANG_ADA_MAKANAN_JAJANAN_KANTIN_SENTRA_MAKANAN_JAJANAN: 0,
        TPM_YANG_ADA_JUMLAH_TPM_YANG_ADA: 0,
        TPM_MS_KESEHATAN_JASA_BOGA_JUMLAH: 0,
        TPM_MS_KESEHATAN_JASA_BOGA_PERSEN: 0,
        TPM_MS_KESEHATAN_RUMAH_MAKAN_RESTORAN_JUMLAH: 0,
        TPM_MS_KESEHATAN_RUMAH_MAKAN_RESTORAN_PERSEN: 0,
        TPM_MS_KESEHATAN_DEPOT_AIR_MINUM_JUMLAH: 0,
        TPM_MS_KESEHATAN_DEPOT_AIR_MINUM_PERSEN: 0,
        TPM_MS_KESEHATAN_MAKANAN_JAJANAN_KANTIN_SENTRA_MAKANAN_JAJANAN_JUMLAH: 0,
        TPM_MS_KESEHATAN_MAKANAN_JAJANAN_KANTIN_SENTRA_MAKANAN_JAJANAN_PERSEN: 0,
        TPM_MS_KESEHATAN_JUMLAH_TPM_MS_KESEHATAN_TOTAL: 0,
        TPM_MS_KESEHATAN_JUMLAH_TPM_MS_KESEHATAN_PERSEN: 0,       
      }
    }, 
    checkToggleRekapBtn: function(value) {
      if(value.rekapToggle == true) {
        this.PILIH_BULAN = '12';
        this.dataRekap = value.rekapToggle;
      }
      else this.PILIH_BULAN = '1'
    },            
    jmlTPMygAda: function() {      
      this.TPM_YANG_ADA_JUMLAH_TPM_YANG_ADA = 
        parseInt((this.TPM_YANG_ADA_JASA_BOGA == '') ? 0 : this.TPM_YANG_ADA_JASA_BOGA)+
        parseInt((this.TPM_YANG_ADA_RUMAH_MAKAN_RESTORAN == '') ? 0 : this.TPM_YANG_ADA_RUMAH_MAKAN_RESTORAN)+    
        parseInt((this.TPM_YANG_ADA_DEPOT_AIR_MINUM == '') ? 0 : this.TPM_YANG_ADA_DEPOT_AIR_MINUM)+    
        parseInt((this.TPM_YANG_ADA_MAKANAN_JAJANAN_KANTIN_SENTRA_MAKANAN_JAJANAN == '') ? 0 : this.TPM_YANG_ADA_MAKANAN_JAJANAN_KANTIN_SENTRA_MAKANAN_JAJANAN);    
    },
    persenTPMMSKESjasaboga: function() {      
      this.TPM_MS_KESEHATAN_JASA_BOGA_PERSEN = 
        parseInt((this.TPM_MS_KESEHATAN_JASA_BOGA_JUMLAH == '') ? 0 : this.TPM_MS_KESEHATAN_JASA_BOGA_JUMLAH)/
        parseInt((this.TPM_YANG_ADA_JASA_BOGA == '') ? 0 : this.TPM_YANG_ADA_JASA_BOGA)*100 ;    
    }, 
    persenTPMMSKESrestoran: function() {      
      this.TPM_MS_KESEHATAN_RUMAH_MAKAN_RESTORAN_PERSEN = 
        parseInt((this.TPM_MS_KESEHATAN_RUMAH_MAKAN_RESTORAN_JUMLAH == '') ? 0 : this.TPM_MS_KESEHATAN_RUMAH_MAKAN_RESTORAN_JUMLAH)/
        parseInt((this.TPM_YANG_ADA_RUMAH_MAKAN_RESTORAN == '') ? 0 : this.TPM_YANG_ADA_RUMAH_MAKAN_RESTORAN)*100 ;    
    },
    persenTPMMSKESdam: function() {      
      this.TPM_MS_KESEHATAN_DEPOT_AIR_MINUM_PERSEN = 
        parseInt((this.TPM_MS_KESEHATAN_DEPOT_AIR_MINUM_JUMLAH == '') ? 0 : this.TPM_MS_KESEHATAN_DEPOT_AIR_MINUM_JUMLAH)/
        parseInt((this.TPM_YANG_ADA_DEPOT_AIR_MINUM == '') ? 0 : this.TPM_YANG_ADA_DEPOT_AIR_MINUM)*100 ;    
    },
    persenTPMMSKESmakananJajanan: function() {      
      this.TPM_MS_KESEHATAN_MAKANAN_JAJANAN_KANTIN_SENTRA_MAKANAN_JAJANAN_PERSEN = 
        parseInt((this.TPM_MS_KESEHATAN_MAKANAN_JAJANAN_KANTIN_SENTRA_MAKANAN_JAJANAN_JUMLAH == '') ? 0 : this.TPM_MS_KESEHATAN_MAKANAN_JAJANAN_KANTIN_SENTRA_MAKANAN_JAJANAN_JUMLAH)/
        parseInt((this.TPM_YANG_ADA_MAKANAN_JAJANAN_KANTIN_SENTRA_MAKANAN_JAJANAN == '') ? 0 : this.TPM_YANG_ADA_MAKANAN_JAJANAN_KANTIN_SENTRA_MAKANAN_JAJANAN)*100 ;    
      
      this.TPM_MS_KESEHATAN_JUMLAH_TPM_MS_KESEHATAN_TOTAL = 
        parseInt((this.TPM_MS_KESEHATAN_JASA_BOGA_JUMLAH == '') ? 0 : this.TPM_MS_KESEHATAN_JASA_BOGA_JUMLAH)+
        parseInt((this.TPM_MS_KESEHATAN_RUMAH_MAKAN_RESTORAN_JUMLAH == '') ? 0 : this.TPM_MS_KESEHATAN_RUMAH_MAKAN_RESTORAN_JUMLAH)+    
        parseInt((this.TPM_MS_KESEHATAN_DEPOT_AIR_MINUM_JUMLAH == '') ? 0 : this.TPM_MS_KESEHATAN_DEPOT_AIR_MINUM_JUMLAH)+    
        parseInt((this.TPM_MS_KESEHATAN_MAKANAN_JAJANAN_KANTIN_SENTRA_MAKANAN_JAJANAN_JUMLAH == '') ? 0 : this.TPM_MS_KESEHATAN_MAKANAN_JAJANAN_KANTIN_SENTRA_MAKANAN_JAJANAN_JUMLAH); 
    },    
    persenTPMMSKESjmlTPMKES: function() {      
      this.TPM_MS_KESEHATAN_JUMLAH_TPM_MS_KESEHATAN_PERSEN = 
        parseInt((this.TPM_MS_KESEHATAN_JUMLAH_TPM_MS_KESEHATAN_TOTAL == '') ? 0 : this.TPM_MS_KESEHATAN_JUMLAH_TPM_MS_KESEHATAN_TOTAL)/
        parseInt((this.TPM_YANG_ADA_JUMLAH_TPM_YANG_ADA == '') ? 0 : this.TPM_YANG_ADA_JUMLAH_TPM_YANG_ADA)*100 ;    
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
            if(this.TPM_YANG_ADA_JASA_BOGA != 0) {
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