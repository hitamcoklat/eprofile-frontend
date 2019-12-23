<template>
<!-- Main content -->
<div class="content">
  <div class="row">        
    <div class="col-md-12">
      <div class="box box-info">

        <!-- /.box-header -->
        <!-- form start -->
        <form class="form-horizontal">
          <div class="box-body">
            <div class="col-md-6">
              <c-list-desa></c-list-desa>              
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label for="" class="col-sm-6 control-label">Alamat Puskesmas</label>
                <div class="col-sm-4">
                  <input v-model="ALAMAT_PUSKESMAS" type="text" class="form-control" id="" name="alamat_pkm" placeholder="">
                </div>
              </div>
              <div class="form-group">
                <label for="" class="col-sm-6 control-label">Lintang</label>
                <div class="col-sm-4">
                  <input v-model="LINTANG" type="text" class="form-control" id="" name="titik_koordinat_lintang_rs" placeholder="">
                </div>
              </div>
              <div class="form-group">
                <label for="" class="col-sm-6 control-label">Bujur</label>
                <div class="col-sm-4">
                  <input v-model="BUJUR" type="text" class="form-control" id="" name="titik_koordinat_bujur_rs" placeholder="">
                </div>
              </div>  
              <div class="form-group">
                <label for="" class="col-sm-6 control-label">Kemampuan Penyelenggara</label>
                <div class="col-sm-4">
                  <select v-model="KEMAMPUAN_PENYELENGGARA" class="form-control">
                    <option selected="">Pilih</option>
                    <option value="rawat_inap">Rawat Inap</option>
                    <option value="no_rawat_inap">Non Rawat Inap</option>                    
                  </select>
                </div>
              </div>
              <div class="form-group">
                <label for="" class="col-sm-6 control-label">Status Akreditasi</label>
                <div class="col-sm-4">
                  <input v-model="AKREDITASI" type="text" class="form-control" id="" name="status_akreditasi_pkm" placeholder="">
                </div>
              </div>
              <div class="form-group">
                <label for="" class="col-sm-6 control-label">Jumlah Tempat Tidur</label>
                <div class="col-sm-4">
                  <input v-model="TEMPAT_TIDUR" type="text" class="form-control" id="" name="status_akreditasi_pkm" placeholder="">
                </div>
              </div>
              <div class="form-group">
                <label for="" class="col-sm-6 control-label">Jumlah Puskesmas Pembantu</label>
                <div class="col-sm-4">
                  <input v-model="JML_PUS_PEMBANTU" type="text" class="form-control" id="" name="status_akreditasi_pkm" placeholder="">
                </div>
              </div>              
              <div class="form-group">
                <label for="" class="col-sm-6 control-label">Dokter Umum</label>
                <div class="col-sm-4">
                  <input v-model="DOKTER_UMUM" type="text" class="form-control" id="" name="jumlah_tenaga_medis_dokter_umum_pkm" placeholder="">
                </div>
              </div>              
              <div class="form-group">
                <label for="" class="col-sm-6 control-label">Dokter Gigi</label>
                <div class="col-sm-4">
                  <input v-model="DOKTER_GIGI" type="text" class="form-control" id="" name="jumlah_tenaga_medis_dokter_gigi_pkm" placeholder="">
                </div>
              </div>
              <div class="form-group">
                <label for="" class="col-sm-6 control-label">Perawat</label>
                <div class="col-sm-4">
                  <input v-model="PERAWAT" type="text" class="form-control" id="" name="jumlah_tenaga_medis_perawat_pkm" placeholder="">
                </div>
              </div>
              <div class="form-group">
                <label for="" class="col-sm-6 control-label">Bidan</label>
                <div class="col-sm-4">
                  <input v-model="BIDAN" type="text" class="form-control" id="" name="jumlah_tenaga_medis_bidan_pkm" placeholder="">
                </div>
              </div>
              <div class="form-group">
                <label for="" class="col-sm-6 control-label">Tenaga Farmasi</label>
                <div class="col-sm-4">
                  <input v-model="TENAGA_FARMASI" type="text" class="form-control" id="" name="jumlah_tenaga_medis_tenaga_farmasi_pkm" placeholder="">
                </div>
              </div>
              <div class="form-group">
                <label for="" class="col-sm-6 control-label">Kesehatan Masyarakat</label>
                <div class="col-sm-4">
                  <input v-model="KESEHATAN_MASYARAKAT" type="text" class="form-control" id="" name="jumlah_tenaga_medis_kesmas_pkm" placeholder="">
                </div>
              </div>
              <div class="form-group">
                <label for="" class="col-sm-6 control-label">Kesehatan Lingkungan</label>
                <div class="col-sm-4">
                  <input v-model="KESEHATAN_LINGKUNGAN" type="text" class="form-control" id="" name="jumlah_tenaga_medis_kesling_pkm" placeholder="">
                </div>
              </div>
              <div class="form-group">
                <label for="" class="col-sm-6 control-label">Tenaga Gizi</label>
                <div class="col-sm-4">
                  <input v-model="TENAGA_GIZI" type="text" class="form-control" id="" name="jumlah_tenaga_medis_tenaga_gizi_pkm" placeholder="">
                </div>
              </div>
              <div class="form-group">
                <label for="" class="col-sm-6 control-label">Tenaga Ahli Teknologi Lab Medik</label>
                <div class="col-sm-4">
                  <input v-model="TENAGA_AHLI_TEKNOLOGI_LAB_MEDIK" type="text" class="form-control" id="" name="jumlah_tenaga_medis_tenaga_ahli_teknologi_lab_medik_pkm" placeholder="">
                </div>
              </div>
              <div class="form-group">
                <label for="" class="col-sm-6 control-label">Tenaga Pengelola Data</label>
                <div class="col-sm-4">
                  <input v-model="TENAGA_PENGELOLA_DATA" type="text" class="form-control" id="" name="jumlah_tenaga_medis_tenaga_pengelola_data_pkm" placeholder="">
                </div>
              </div>
              <div class="form-group">
                <label for="" class="col-sm-6 control-label">Sistem Informasi Puskesmas Yang Digunakan</label>
                <div class="col-sm-4">
                  <input v-model="NAMA_SIMPUS" type="text" class="form-control" id="" name="sip_yang_digunakan" placeholder="">
                </div>
              </div>
            </div>                                          
          </div>
          <!-- /.box-body -->
          <div class="box-footer">
            <button @click="reset()" type="reset" class="btn btn-default"><i class="fa fa-fw fa-refresh"></i> Reset</button>
            <button @click="proses()" type="button" class="btn btn-primary"><i class="fa fa-fw fa-recycle"></i>
            Proses
            </button>                
            <router-link to="/dataDasarPkm"><a class="btn btn-success btn-md"><i class="fa fa-fw fa-arrow-left"></i> Kembali</a></router-link>
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
import ListDesa from './ListDesa';
export default {
  name: 'DataDasarPkm',
  components: {
    'c-list-desa': ListDesa
  },
  data() {
    return {
      ALAMAT_PUSKESMAS: '',
      LINTANG: '',
      BUJUR: '',
      KEMAMPUAN_PENYELENGGARA: '',
      AKREDITASI: '',
      TEMPAT_TIDUR: '',
      JML_PUS_PEMBANTU: '',
      DOKTER_UMUM: '',
      DOKTER_GIGI: '',
      PERAWAT: '',
      BIDAN: '',
      TENAGA_FARMASI: '',
      KESEHATAN_MASYARAKAT: '',
      KESEHATAN_LINGKUNGAN: '',
      TENAGA_GIZI: '',
      TENAGA_AHLI_TEKNOLOGI_LAB_MEDIK: '',
      TENAGA_PENGELOLA_DATA: '',
      NAMA_SIMPUS: '',
      isUpdate: false   
    }
  },
  methods: {
    initialData: function() {
      return {
        ALAMAT_PUSKESMAS: '',
        LINTANG: '',
        BUJUR: '',
        KEMAMPUAN_PENYELENGGARA: '',
        AKREDITASI: '',
        TEMPAT_TIDUR: '',
        JML_PUS_PEMBANTU: '',
        DOKTER_UMUM: '',
        DOKTER_GIGI: '',
        PERAWAT: '',
        BIDAN: '',
        TENAGA_FARMASI: '',
        KESEHATAN_MASYARAKAT: '',
        KESEHATAN_LINGKUNGAN: '',
        TENAGA_GIZI: '',
        TENAGA_AHLI_TEKNOLOGI_LAB_MEDIK: '',
        TENAGA_PENGELOLA_DATA: '',
        NAMA_SIMPUS: ''        
      }
    },
    kirimData: function(data) {
      var data2 = JSON.stringify(data);
      var user = JSON.parse(this.$session.get('dataLogin'));
      var username = user.username;  
      var URL_DATA = (this.isUpdate == true) ? this.$urlNode + '/table/update?var=dataDasarPKM&thn=2019&bln=1&username=' + this.USERNAME : this.$urlNode + '/table/input';
      // console.log(buffer)
      var dataKirim = {
        'NAMA_FIELD' : 'dataDasarPKM',
        'VALUE' : data2,
        'USERNAME' : username,
        'ID_DAERAH' : username.substr(0, 4),
        'TAHUN' : '2019',
        'BULAN' : '1',
        'STATUS_VERIFIKASI' : 'pkm'
      };

      this.$http.post(URL_DATA, dataKirim)
        .then(function (response) {
          console.log(response);
        })
        .then(() => {
          this.isUpdate = true;
        })
        .catch(function (error) {
          console.log(error);
        });

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

      this.$http.get(this.$urlNode + '/table/getField?var=dataDasarPKM&thn=2019&bln=1&username=' + this.USERNAME)
        .then((response) => {
          if(response.data.length > 0) {
            // Read All Data
            var dataParse = JSON.parse(response.data[0].VALUE);
            for (let key in dataParse) {
              this[key] = dataParse[key];
            }
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
  },
  created() {
    var user = JSON.parse(this.$session.get('dataLogin'));
    this.USERNAME = user.username;    
    this.checkData();
  }
}
</script>