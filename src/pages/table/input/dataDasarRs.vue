<template>
<!-- Main content -->
<div class="content">
  <div class="row">        
    <div class="col-md-12">
      <div class="box box-info">
        <div class="box-header with-border">
          <div class="alert alert-info alert-dismissible">
            <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
            <h4>Tabel Tambahan - Data Dasar Rumah Sakit</h4>
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
                <label for="" class="col-sm-6 control-label">Nama Rumah Sakit</label>
                <div class="col-sm-4">
                  <input v-model="NAMA_RUMAH_SAKIT" type="text" class="form-control" id="" name="nama_rs" placeholder="">
                </div>
              </div>
              <div class="form-group">
                <label for="" class="col-sm-6 control-label">Jenis Rumah Sakit</label>
                <div class="col-sm-4">
                  <select v-model="JENIS_RS" class="form-control">
                    <option selected="0">Pilih </option>
                    <option value="rsu">RSU</option>
                    <option value="rsud">RSUD</option>
                    <option value="rsk">RSK</option>
                    <option value="rskia">RSKIA</option>
                  </select>
                </div>
              </div>  
              <div class="form-group">
                <label for="" class="col-sm-6 control-label">Kepemilikan</label>
                <div class="col-sm-4">
                  <select v-model="KEPEMILIKAN" class="form-control">
                    <option selected="0">Pilih </option>
                    <option value="pemprov">Pemprov</option>
                    <option value="pemkab_pemkot">Pemkab/Pemkot</option>
                    <option value="tni_polri">TNI-POLRI</option>
                    <option value="bumn">BUMN</option>
                    <option value="swasta">Swasta</option>
                  </select>
                </div>
              </div> 
              <div class="form-group">
                <label for="" class="col-sm-6 control-label">Tipe Rumah Sakit</label>
                <div class="col-sm-4">
                  <select v-model="TIPE_RS" class="form-control">
                    <option selected="0">Pilih </option>
                    <option value="a">A</option>
                    <option value="b">B</option>
                    <option value="c">C</option>
                    <option value="d">D</option>
                  </select>
                </div>
              </div>                                                        
              <div class="form-group">
                <label for="" class="col-sm-6 control-label">Direktur Rumah Sakit</label>
                <div class="col-sm-4">
                  <input v-model="DIREKTUR_RS" type="text" class="form-control" id="" name="direktur_rs" placeholder="">
                </div>
              </div>
              <div class="form-group">
                <label for="" class="col-sm-6 control-label">Alamat Rumah Sakit</label>
                <div class="col-sm-4">
                  <input v-model="ALAMAT_RS" type="text" class="form-control" id="" name="alamat_rs" placeholder="">
                </div>
              </div>
              <div class="form-group">
                <label for="" class="col-sm-6 control-label">Email&#47;Website</label>
                <div class="col-sm-4">
                  <input v-model="EMAIL_WEB_RS" type="text" class="form-control" id="" name="email_website_rs" placeholder="">
                </div>
              </div>
              <div class="form-group">
                <label for="" class="col-sm-6 control-label">Telepon</label>
                <div class="col-sm-4">
                  <input v-model="TELP_RS" type="text" class="form-control" id="" name="telepon_rs" placeholder="">
                </div>
              </div>
              <div class="form-group">
                <div class="col-sm-4">
                  <span class="badge bg-green">Titik Koordinat </span>
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
                <div class="col-sm-4">
                  <span class="badge bg-green">Jumlah Tempat Tidur </span>
                </div>
              </div>              
              <div class="form-group">
                <label for="" class="col-sm-6 control-label">VVIP</label>
                <div class="col-sm-4">
                  <input v-model="VVIP" type="text" class="form-control" id="" name="jumlah_tt_vvip_rs" placeholder="">
                </div>
              </div>
              <div class="form-group">
                <label for="" class="col-sm-6 control-label">VIP</label>
                <div class="col-sm-4">
                  <input v-model="VIP" type="text" class="form-control" id="" name="jumlah_tt_vip_rs" placeholder="">
                </div>
              </div>
              <div class="form-group">
                <label for="" class="col-sm-6 control-label">Kelas I</label>
                <div class="col-sm-4">
                  <input v-model="KELAS_1" type="text" class="form-control" id="" name="jumlah_tt_kelas1_rs" placeholder="">
                </div>
              </div>  
              <div class="form-group">
                <label for="" class="col-sm-6 control-label">Kelas II</label>
                <div class="col-sm-4">
                  <input v-model="KELAS_2" type="text" class="form-control" id="" name="jumlah_tt_kelas2_rs" placeholder="">
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label for="" class="col-sm-6 control-label">Kelas III</label>
                <div class="col-sm-4">
                  <input v-model="KELAS_3" type="text" class="form-control" id="" name="jumlah_tt_kelas3_rs" placeholder="">
                </div>
              </div>
              <div class="form-group">
                <label for="" class="col-sm-6 control-label">ICU</label>
                <div class="col-sm-4">
                  <input v-model="ICU" type="text" class="form-control" id="" name="jumlah_tt_icu_rs" placeholder="">
                </div>
              </div>
              <div class="form-group">
                <label for="" class="col-sm-6 control-label">PICU</label>
                <div class="col-sm-4">
                  <input v-model="PICU" type="text" class="form-control" id="" name="jumlah_tt_picu_rs" placeholder="">
                </div>
              </div>
              <div class="form-group">
                <label for="" class="col-sm-6 control-label">NICU</label>
                <div class="col-sm-4">
                  <input v-model="NICU" type="text" class="form-control" id="" name="jumlah_tt_nicu_rs" placeholder="">
                </div>
              </div>
              <div class="form-group">
                <label for="" class="col-sm-6 control-label">Tempat Tidur Bayi Baru Lahir</label>
                <div class="col-sm-4">
                  <input v-model="TEMPAT_TIDUR_BAYI_BARU_LAHIR" type="text" class="form-control" id="" name="jumlah_tt_bbl_rs" placeholder="">
                </div>
              </div>
              <div class="form-group">
                <label for="" class="col-sm-6 control-label">HCU</label>
                <div class="col-sm-4">
                  <input v-model="HCU" type="text" class="form-control" id="" name="jumlah_tt_hcu_rs" placeholder="">
                </div>
              </div>
              <div class="form-group">
                <label for="" class="col-sm-6 control-label">ICCU</label>
                <div class="col-sm-4">
                  <input v-model="ICCU" type="text" class="form-control" id="" name="jumlah_tt_iccu_rs" placeholder="">
                </div>
              </div>
              <div class="form-group">
                <label for="" class="col-sm-6 control-label">IGD</label>
                <div class="col-sm-4">
                  <input v-model="IGD" type="text" class="form-control" id="" name="jumlah_tt_igd_rs" placeholder="">
                </div>
              </div> 
              <div class="form-group">
                <label for="" class="col-sm-6 control-label">Tempat Tidur di Ruang Operasi</label>
                <div class="col-sm-4">
                  <input v-model="TEMPAT_TIDUR_RUANG_OPERASI" type="text" class="form-control" id="" name="jumlah_tt_ruang_operasi_rs" placeholder="">
                </div>
              </div> 
              <div class="form-group">
                <label for="" class="col-sm-6 control-label">Tempat Tidur di Ruang Isolasi</label>
                <div class="col-sm-4">
                  <input v-model="TEMPAT_TIDUR_RUANG_ISOLASI" type="text" class="form-control" id="" name="jumlah_tt_ruang_isolasi_rs" placeholder="">
                </div>
              </div>              
              <div class="form-group">
                <div class="col-sm-4">
                  <span class="badge bg-green">Jumlah Tenaga Medis </span>
                </div>
              </div>              
              <div class="form-group">
                <label for="" class="col-sm-6 control-label">Dokter Umum</label>
                <div class="col-sm-4">
                  <input v-model="DOKTER_UMUM" type="text" class="form-control" id="" name="jumlah_tenaga_medis_dokter_umum_rs" placeholder="">
                </div>
              </div>
              <div class="form-group">
                <label for="" class="col-sm-6 control-label">Dokter Spesialis</label>
                <div class="col-sm-4">
                  <input v-model="DOKTER_SPESIALIS" type="text" class="form-control" id="" name="jumlah_tenaga_medis_dokter_spesialis_rs" placeholder="">
                </div>
              </div>
              <div class="form-group">
                <label for="" class="col-sm-6 control-label">Dokter Gigi</label>
                <div class="col-sm-4">
                  <input v-model="DOKTER_GIGI" type="text" class="form-control" id="" name="jumlah_tenaga_medis_dokter_gigi_rs" placeholder="">
                </div>
              </div>
              <div class="form-group">
                <label for="" class="col-sm-6 control-label">Bidan</label>
                <div class="col-sm-4">
                  <input v-model="BIDAN" type="text" class="form-control" id="" name="jumlah_tenaga_medis_bidan_rs" placeholder="">
                </div>
              </div>
              <div class="form-group">
                <label for="" class="col-sm-6 control-label">Keteknisan Medis</label>
                <div class="col-sm-4">
                  <input v-model="KETEKNISIAN_MEDIS" type="text" class="form-control" id="" name="jumlah_tenaga_medis_keteknisan_medis_rs" placeholder="">
                </div>
              </div>
              <div class="form-group">
                <label for="" class="col-sm-6 control-label">Kesehatan Masyarakat</label>
                <div class="col-sm-4">
                  <input v-model="KESEHATAN_MASYARAKAT" type="text" class="form-control" id="" name="jumlah_tenaga_medis_kesmas_rs" placeholder="">
                </div>
              </div>
              <div class="form-group">
                <label for="" class="col-sm-6 control-label">Kesehatan Lingkungan</label>
                <div class="col-sm-4">
                  <input v-model="KESEHATAN_LINGKUNGAN" type="text" class="form-control" id="" name="jumlah_tenaga_medis_kesling_rs" placeholder="">
                </div>
              </div>
              <div class="form-group">
                <label for="" class="col-sm-6 control-label">Nutrisionis</label>
                <div class="col-sm-4">
                  <input v-model="NUTRISIONIS" type="text" class="form-control" id="" name="jumlah_tenaga_medis_nutrisionis_rs" placeholder="">
                </div>
              </div>
              <div class="form-group">
                <label for="" class="col-sm-6 control-label">Tenaga Non Kesehatan</label>
                <div class="col-sm-4">
                  <input v-model="TENAGA_NON_KESEHATAN" type="text" class="form-control" id="" name="jumlah_tenaga_medis_non_kesehatan_rs" placeholder="">
                </div>
              </div>
            </div>                                          
          </div>
          <!-- /.box-body -->
          <div class="box-footer">
            <button @click="reset()" type="reset" class="btn btn-default"><i class="fa fa-fw fa-refresh"></i> Reset</button>
            <button @click="proses()" type="button" class="btn btn-primary" data-toggle="modal" data-target="#modal-primary"><i class="fa fa-fw fa-recycle"></i>
            Proses
            </button>                
            <router-link to="/dataDasarRs"><a class="btn btn-success btn-md"><i class="fa fa-fw fa-arrow-left"></i> Kembali</a></router-link>
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
  name: 'DataDasarRs',
  data() {
    return {
      USERNAME: '',
      NAMA_RUMAH_SAKIT: '',
      JENIS_RS: '0',
      KEPEMILIKAN: '0',
      TIPE_RS: '0',
      DIREKTUR_RS: '',
      ALAMAT_RS: '',
      EMAIL_WEB_RS: '',
      TELP_RS: '',
      LINTANG: '',
      BUJUR: '',
      VVIP: '',
      VIP: '',
      KELAS_1: '',
      KELAS_2: '',
      KELAS_3: '',
      ICU: '',
      PICU: '',
      NICU: '',
      TEMPAT_TIDUR_BAYI_BARU_LAHIR: '',
      HCU: '',
      ICCU: '',
      IGD: '',
      TEMPAT_TIDUR_RUANG_OPERASI: '',
      TEMPAT_TIDUR_RUANG_ISOLASI: '',
      DOKTER_UMUM: '',
      DOKTER_SPESIALIS: '',
      DOKTER_GIGI: '',
      BIDAN: '',
      KETEKNISIAN_MEDIS: '',
      KESEHATAN_MASYARAKAT: '',
      KESEHATAN_LINGKUNGAN: '',
      NUTRISIONIS: '',
      TENAGA_NON_KESEHATAN: '',
      isUpdate: false   
    }
  },
  components: {},
  methods: {
    initialData: function() {
      return {
        NAMA_RUMAH_SAKIT: '',
        JENIS_RS: '0',
        KEPEMILIKAN: '0',
        TIPE_RS: '0',
        DIREKTUR_RS: '',
        ALAMAT_RS: '',
        EMAIL_WEB_RS: '',
        TELP_RS: '',
        LINTANG: '',
        BUJUR: '',
        VVIP: '',
        VIP: '',
        KELAS_1: '',
        KELAS_2: '',
        KELAS_3: '',
        ICU: '',
        PICU: '',
        NICU: '',
        TEMPAT_TIDUR_BAYI_BARU_LAHIR: '',
        HCU: '',
        ICCU: '',
        IGD: '',
        TEMPAT_TIDUR_RUANG_OPERASI: '',
        TEMPAT_TIDUR_RUANG_ISOLASI: '',
        DOKTER_UMUM: '',
        DOKTER_SPESIALIS: '',
        DOKTER_GIGI: '',
        BIDAN: '',
        KETEKNISIAN_MEDIS: '',
        KESEHATAN_MASYARAKAT: '',
        KESEHATAN_LINGKUNGAN: '',
        NUTRISIONIS: '',
        TENAGA_NON_KESEHATAN: ''        
      }
    },
    kirimData: function(data) {
      var data2 = JSON.stringify(data);
      var user = JSON.parse(this.$session.get('dataLogin'));
      var username = user.username;  
      var URL_DATA = (this.isUpdate == true) ? this.$urlNode + '/table/update?var=dataDasarRS&thn=2019&bln=1&username=' + this.USERNAME : this.$urlNode + '/table/input';
      // console.log(buffer)
      var dataKirim = {
        'NAMA_FIELD' : 'dataDasarRS',
        'VALUE' : data2,
        'USERNAME' : username,
        'ID_DAERAH' : username.substr(0, 4),
        'TAHUN' : '2019',
        'BULAN' : '1',
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

      this.$http.get(this.$urlNode + '/table/getField?var=dataDasarRS&thn=2019&bln=1&username=' + this.USERNAME)
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
    this.NAMA_RUMAH_SAKIT = user.NAMA_RS;    
    this.USERNAME = user.username;    
    this.checkData();
  }
}
</script>