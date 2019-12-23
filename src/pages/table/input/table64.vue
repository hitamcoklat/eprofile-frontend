<template>
<!-- Main content -->
<div class="content">
  <div class="row">        
    <div class="col-md-12">
      <div class="box box-info">
        <div class="box-header with-border">
          <div class="alert alert-info alert-dismissible">
            <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
            <h4>Tabel 64 - JUMLAH PENDERITA DAN KEMATIAN PADA KLB MENURUT JENIS KEJADIAN LUAR BIASA (KLB) </h4>
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
              <div v-show="showDesa" class="form-group">
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
                <label for="" class="col-sm-6 control-label">Jenis Kejadian Luas Biasa</label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" id="" v-model="JENIS_KEJADIAN_LUAR_BIASA" name="jenis_kejadian_luar_biasa" placeholder="">
                </div>
              </div>            
              <div class="form-group">
                <div class="col-sm-4">
                  <span class="badge bg-green">a. Yang Terserang  </span>
                </div>
              </div>
              <div class="form-group">
                <label for="" class="col-sm-6 control-label">Jumlah Kecamatan</label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" id="" v-model="YANG_TERSERANG_JUMLAH_KEC" name="yang_terserang_jumlah_kecamatan" placeholder="">
                </div>
              </div> 
              <div class="form-group">
                <label for="" class="col-sm-6 control-label">Jumlah Desa&#47;Kelurahan</label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" id="" v-model="YANG_TERSERANG_JUMLAH_DESA_KEL" name="yang_terserang_jumlah_desa_kelurahan" placeholder="">
                </div>
              </div> 
              <div class="form-group">
                <div class="col-sm-4">
                  <span class="badge bg-green">b. Waktu Kejadian (Tanggal)  </span>
                </div>
              </div>
              <div class="form-group">
                <label for="" class="col-sm-6 control-label">Diketahui</label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" id="" v-model="WAKTU_KEJADIAN_TANGGAL_DIKETAHUI" name="waktu_kejadian_diketahui" placeholder="">
                </div>
              </div>
              <div class="form-group">
                <label for="" class="col-sm-6 control-label">Ditanggulangi</label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" id="" v-model="WAKTU_KEJADIAN_TANGGAL_DITANGGULANGI" name="waktu_kejadian_ditanggulangi" placeholder="">
                </div>
              </div>
              <div class="form-group">
                <label for="" class="col-sm-6 control-label">Akhir</label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" id="" v-model="WAKTU_KEJADIAN_TANGGAL_AKHIR" name="waktu_kejadian_akhir" placeholder="">
                </div>
              </div>
              <div class="form-group">
                <div class="col-sm-4">
                  <span class="badge bg-green">c. Jumlah Penderita </span>
                </div>
              </div>
              <div class="form-group">
                <label for="" class="col-sm-6 control-label">Laki</label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" id="" v-on:blur="jmlPenderita_LP()" v-model="JUMLAH_PENDERITA_L" name="jumlah_penderita_laki" placeholder="">
                </div>
              </div> 
              <div class="form-group">
                <label for="" class="col-sm-6 control-label">Perempuan</label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" id="" v-model="JUMLAH_PENDERITA_P" name="jumlah_penderita_perempuan" placeholder="" v-on:blur="jmlPenderita_LP()">
                </div>
              </div>
              <div class="form-group">
                <label for="" class="col-sm-6 control-label">Laki+Perempuan</label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" id="" v-model="JUMLAH_PENDERITA_L_P" name="jumlah_penderita_laki_perempuan" placeholder="" disabled="">
                </div>
              </div> 
              <div class="form-group">
                <div class="col-sm-4">
                  <span class="badge bg-green">d. Kelompok Umur Penderita </span>
                </div>
              </div>
              <div class="form-group">
                <label for="" class="col-sm-6 control-label">0&#45;7 Hari</label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" id="" v-model="KELOMPOK_UMUR_PENDERITA_0_7_HARI" name="kelompok_umur_penderita_0_7_hari" placeholder="">
                </div>
              </div>
              <div class="form-group">
                <label for="" class="col-sm-6 control-label">8&#45;28 Hari</label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" id="" v-model="KELOMPOK_UMUR_PENDERITA_8_28_HARI" name="kelompok_umur_penderita_8_28_hari" placeholder="">
                </div>
              </div> 
              <div class="form-group">
                <label for="" class="col-sm-6 control-label">1&#45;11 Bulan</label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" id="" v-model="KELOMPOK_UMUR_PENDERITA_1_11_BLN" name="kelompok_umur_penderita_1_11_bulan" placeholder="">
                </div>
              </div>
              <div class="form-group">
                <label for="" class="col-sm-6 control-label">1&#45;4 Tahun</label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" id="" v-model="KELOMPOK_UMUR_PENDERITA_1_4_THN" name="kelompok_umur_penderita_1_4_tahun" placeholder="">
                </div>
              </div> 
              <div class="form-group">
                <label for="" class="col-sm-6 control-label">5&#45;9 Tahun</label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" id="" v-model="KELOMPOK_UMUR_PENDERITA_5_9_THN" name="kelompok_umur_penderita_5_9_tahun" placeholder="">
                </div>
              </div>
              <div class="form-group">
                <label for="" class="col-sm-6 control-label">10&#45;14 Tahun</label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" id="" v-model="KELOMPOK_UMUR_PENDERITA_10_14_THN" name="kelompok_umur_penderita_10_14_tahun" placeholder="">
                </div>
              </div> 
            </div>
            <div class="col-md-6">   
              <div class="form-group">
                <label for="" class="col-sm-6 control-label">15&#45;19 Tahun</label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" id="" v-model="KELOMPOK_UMUR_PENDERITA_15_19_THN" name="kelompok_umur_penderita_15_19_tahun" placeholder="">
                </div>
              </div>
              <div class="form-group">
                <label for="" class="col-sm-6 control-label">20&#45;44 Tahun</label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" id="" v-model="KELOMPOK_UMUR_PENDERITA_20_44_THN" name="kelompok_umur_penderita_20_44_tahun" placeholder="">
                </div>
              </div>
              <div class="form-group">
                <label for="" class="col-sm-6 control-label">45&#45;54 Tahun</label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" id="" v-model="KELOMPOK_UMUR_PENDERITA_45_54_THN" name="kelompok_umur_penderita_45_54_tahun" placeholder="">
                </div>
              </div>
              <div class="form-group">
                <label for="" class="col-sm-6 control-label">55&#45;59 Tahun</label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" id="" v-model="KELOMPOK_UMUR_PENDERITA_55_59_THN" name="kelompok_umur_penderita_55_59_tahun" placeholder="">
                </div>
              </div>
              <div class="form-group">
                <label for="" class="col-sm-6 control-label">60&#45;69 Tahun</label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" id="" v-model="KELOMPOK_UMUR_PENDERITA_60_69_THN" name="kelompok_umur_penderita_60_69_tahun" placeholder="">
                </div>
              </div>
              <div class="form-group">
                <label for="" class="col-sm-6 control-label">70&#43; Tahun</label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" id="" v-model="KELOMPOK_UMUR_PENDERITA_70_THN" name="kelompok_umur_penderita_70_plus_tahun" placeholder="">
                </div>
              </div>
              <div class="form-group">
                <div class="col-sm-4">
                  <span class="badge bg-green">e. Jumlah Kematian </span>
                </div>
              </div>
              <div class="form-group">
                <label for="" class="col-sm-6 control-label">Laki</label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" v-on:blur="jmlKematian_LP()" id="" v-model="JUMLAH_KEMATIAN_L" name="jumlah_kematian_laki" placeholder="">
                </div>
              </div>
              <div class="form-group">
                <label for="" class="col-sm-6 control-label">Perempuan</label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" id="" v-model="JUMLAH_KEMATIAN_P" name="jumlah_kematian_perempuan" placeholder="" v-on:blur="jmlKematian_LP()">
                </div>
              </div>
              <div class="form-group">
                <label for="" class="col-sm-6 control-label">Laki&#43;Perempuan</label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" id="" v-model="JUMLAH_KEMATIAN_L_P" name="jumlah_kematian_laki_perempuan" placeholder="" disabled="">
                </div>
              </div>
              <div class="form-group">
                <div class="col-sm-4">
                  <span class="badge bg-green">f. Jumlah Penduduk Terancam </span>
                </div>
              </div>
              <div class="form-group">
                <label for="" class="col-sm-6 control-label">Laki</label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" id="" v-model="JUMLAH_PENDUDUK_TERANCAM_L" name="jumlah_penduduk_terancam_laki" placeholder="" v-on:blur="jmlPendudukTerancam_LP()">
                </div>
              </div>
              <div class="form-group">
                <label for="" class="col-sm-6 control-label">Perempuan</label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" id="" v-model="JUMLAH_PENDUDUK_TERANCAM_P" name="jumlah_penduduk_terancam_perempuan" placeholder="" v-on:blur="jmlPendudukTerancam_LP()">
                </div>
              </div>
              <div class="form-group">
                <label for="" class="col-sm-6 control-label">Laki&#43;Perempuan</label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" id="" v-model="JUMLAH_PENDUDUK_TERANCAM_L_P" name="jumlah_penduduk_terancam_laki_perempuan" placeholder="" disabled="">
                </div>
              </div>
              <div class="form-group">
                <div class="col-sm-4">
                  <span class="badge bg-green">g. Attack Rate (%) </span>
                </div>
              </div>
              <div class="form-group">
                <label for="" class="col-sm-6 control-label">Laki</label>
                <div class="col-sm-4"> 
                  <input type="text" class="form-control" id="" disabled="" v-model="ATTACK_RATE_PERSEN_L" name="attack_rate_laki" placeholder="">
                </div>
              </div>
              <div class="form-group">
                <label for="" class="col-sm-6 control-label">Perempuan</label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" id="" disabled="" v-model="ATTACK_RATE_PERSEN_P" name="attack_rate_perempuan" placeholder="">
                </div>
              </div>
              <div class="form-group">
                <label for="" class="col-sm-6 control-label">Laki&#43;Perempuan</label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" id="" disabled="" v-model="ATTACK_RATE_PERSEN_L_P" name="attack_rate_laki_perempuan" placeholder="">
                </div>
              </div>
              <div class="form-group">
                <div class="col-sm-4">
                  <span class="badge bg-green">h. CFR (%) </span>
                </div>
              </div>
              <div class="form-group">
                <label for="" class="col-sm-6 control-label">Laki</label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" id="" disabled="" v-model="CFR_PERSEN_L" name="cfr_laki" placeholder="">
                </div>
              </div>
              <div class="form-group">
                <label for="" class="col-sm-6 control-label">Perempuan</label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" id="" disabled="" v-model="CFR_PERSEN_P" name="cfr_perempuan" placeholder="">
                </div>
              </div>
              <div class="form-group">
                <label for="" class="col-sm-6 control-label">Laki&#43;Perempuan</label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" id="" disabled="" v-model="CFR_PERSEN_L_P" name="cfr_laki_perempuan" placeholder="">
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
            <router-link to="/table64"><a class="btn btn-success btn-md"><i class="fa fa-fw fa-arrow-left"></i> Kembali</a></router-link>
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
      showDesa: true,
      dataRekap: false,    
      USERNAME: '',
      PILIH_BULAN: '1',
      PILIH_TAHUN: '2019',
      LEVEL: '',
      NAMA_PKM: '',
      ID_PUSKESMAS: '',
      ID_DESA: '',
      listDesa: [],
      JENIS_KEJADIAN_LUAR_BIASA: 0,
      YANG_TERSERANG_JUMLAH_KEC: 0,
      YANG_TERSERANG_JUMLAH_DESA_KEL: 0,
      WAKTU_KEJADIAN_TANGGAL_DIKETAHUI: 0,
      WAKTU_KEJADIAN_TANGGAL_DITANGGULANGI: 0,
      WAKTU_KEJADIAN_TANGGAL_AKHIR: 0,
      JUMLAH_PENDERITA_L: 0,
      JUMLAH_PENDERITA_P: 0,
      JUMLAH_PENDERITA_L_P: 0,
      KELOMPOK_UMUR_PENDERITA_0_7_HARI: 0,
      KELOMPOK_UMUR_PENDERITA_8_28_HARI: 0,
      KELOMPOK_UMUR_PENDERITA_1_11_BLN: 0,
      KELOMPOK_UMUR_PENDERITA_1_4_THN: 0,
      KELOMPOK_UMUR_PENDERITA_5_9_THN: 0,
      KELOMPOK_UMUR_PENDERITA_10_14_THN: 0,
      KELOMPOK_UMUR_PENDERITA_15_19_THN: 0,
      KELOMPOK_UMUR_PENDERITA_20_44_THN: 0,
      KELOMPOK_UMUR_PENDERITA_45_54_THN: 0,
      KELOMPOK_UMUR_PENDERITA_55_59_THN: 0,
      KELOMPOK_UMUR_PENDERITA_60_69_THN: 0,
      KELOMPOK_UMUR_PENDERITA_70_THN: 0,
      JUMLAH_KEMATIAN_L: 0,
      JUMLAH_KEMATIAN_P: 0,
      JUMLAH_KEMATIAN_L_P: 0,
      JUMLAH_PENDUDUK_TERANCAM_L: 0,
      JUMLAH_PENDUDUK_TERANCAM_P: 0,
      JUMLAH_PENDUDUK_TERANCAM_L_P: 0,
      ATTACK_RATE_PERSEN_L: 0,
      ATTACK_RATE_PERSEN_P: 0,
      ATTACK_RATE_PERSEN_L_P: 0,
      CFR_PERSEN_L: 0,
      CFR_PERSEN_P: 0,
      CFR_PERSEN_L_P: 0,
      isUpdate: false
    }
  },  
  name: 'Table64',
  methods: {
    initialData: function() {
      return {
        JENIS_KEJADIAN_LUAR_BIASA: 0,
        YANG_TERSERANG_JUMLAH_KEC: 0,
        YANG_TERSERANG_JUMLAH_DESA_KEL: 0,
        WAKTU_KEJADIAN_TANGGAL_DIKETAHUI: 0,
        WAKTU_KEJADIAN_TANGGAL_DITANGGULANGI: 0,
        WAKTU_KEJADIAN_TANGGAL_AKHIR: 0,
        JUMLAH_PENDERITA_L: 0,
        JUMLAH_PENDERITA_P: 0,
        JUMLAH_PENDERITA_L_P: 0,
        KELOMPOK_UMUR_PENDERITA_0_7_HARI: 0,
        KELOMPOK_UMUR_PENDERITA_8_28_HARI: 0,
        KELOMPOK_UMUR_PENDERITA_1_11_BLN: 0,
        KELOMPOK_UMUR_PENDERITA_1_4_THN: 0,
        KELOMPOK_UMUR_PENDERITA_5_9_THN: 0,
        KELOMPOK_UMUR_PENDERITA_10_14_THN: 0,
        KELOMPOK_UMUR_PENDERITA_15_19_THN: 0,
        KELOMPOK_UMUR_PENDERITA_20_44_THN: 0,
        KELOMPOK_UMUR_PENDERITA_45_54_THN: 0,
        KELOMPOK_UMUR_PENDERITA_55_59_THN: 0,
        KELOMPOK_UMUR_PENDERITA_60_69_THN: 0,
        KELOMPOK_UMUR_PENDERITA_70_THN: 0,
        JUMLAH_KEMATIAN_L: 0,
        JUMLAH_KEMATIAN_P: 0,
        JUMLAH_KEMATIAN_L_P: 0,
        JUMLAH_PENDUDUK_TERANCAM_L: 0,
        JUMLAH_PENDUDUK_TERANCAM_P: 0,
        JUMLAH_PENDUDUK_TERANCAM_L_P: 0,
        ATTACK_RATE_PERSEN_L: 0,
        ATTACK_RATE_PERSEN_P: 0,
        ATTACK_RATE_PERSEN_L_P: 0,
        CFR_PERSEN_L: 0,
        CFR_PERSEN_P: 0,
        CFR_PERSEN_L_P: 0,          
      }
    },
    masuk: function() {
        console.log('tombol masuk ditekan')
    },
    jmlPenderita_LP: function () {
      this.JUMLAH_PENDERITA_L_P = 
        parseInt((this.JUMLAH_PENDERITA_L == '') ? 0 : this.JUMLAH_PENDERITA_L) +
        parseInt((this.JUMLAH_PENDERITA_P == '') ? 0 : this.JUMLAH_PENDERITA_P);
    },
    jmlKematian_LP: function () {
      this.JUMLAH_KEMATIAN_L_P = 
        parseInt((this.JUMLAH_KEMATIAN_L == '') ? 0 : this.JUMLAH_KEMATIAN_L)+
        parseInt((this.JUMLAH_KEMATIAN_P == '') ? 0 : this.JUMLAH_KEMATIAN_P);

      this.CFR_PERSEN_L = 
        parseInt((this.JUMLAH_KEMATIAN_L == '') ? 0 : this.JUMLAH_KEMATIAN_L) /
        parseInt((this.JUMLAH_PENDERITA_L == '') ? 0 : this.JUMLAH_PENDERITA_L)*100;

      this.CFR_PERSEN_P = 
        parseInt((this.JUMLAH_KEMATIAN_P == '') ? 0 : this.JUMLAH_KEMATIAN_P) /
        parseInt((this.JUMLAH_PENDERITA_P == '') ? 0 : this.JUMLAH_PENDERITA_P)*100;

      this.CFR_PERSEN_L_P = 
        parseInt((this.JUMLAH_KEMATIAN_L_P == '') ? 0 : this.JUMLAH_KEMATIAN_L_P) /
        parseInt((this.JUMLAH_PENDERITA_L_P == '') ? 0 : this.JUMLAH_PENDERITA_L_P)*100;

    },  
    jmlPendudukTerancam_LP: function () {
      this.JUMLAH_PENDUDUK_TERANCAM_L_P = 
        parseInt((this.JUMLAH_PENDUDUK_TERANCAM_L == '') ? 0 : this.JUMLAH_PENDUDUK_TERANCAM_L)+
        parseInt((this.JUMLAH_PENDUDUK_TERANCAM_P == '') ? 0 : this.JUMLAH_PENDUDUK_TERANCAM_P);
      
      this.ATTACK_RATE_PERSEN_L = 
        parseInt((this.JUMLAH_PENDUDUK_TERANCAM_L == '') ? 0 : this.JUMLAH_PENDUDUK_TERANCAM_L) /
        parseInt((this.JUMLAH_PENDERITA_L == '') ? 0 : this.JUMLAH_PENDERITA_L)*100;

      this.ATTACK_RATE_PERSEN_P = 
        parseInt((this.JUMLAH_PENDUDUK_TERANCAM_P == '') ? 0 : this.JUMLAH_PENDUDUK_TERANCAM_P) /
        parseInt((this.JUMLAH_PENDERITA_P == '') ? 0 : this.JUMLAH_PENDERITA_P)*100;

      this.ATTACK_RATE_PERSEN_L_P = 
        parseInt((this.JUMLAH_PENDUDUK_TERANCAM_L_P == '') ? 0 : this.JUMLAH_PENDUDUK_TERANCAM_L_P) /
        parseInt((this.JUMLAH_PENDERITA_L_P == '') ? 0 : this.JUMLAH_PENDERITA_L_P)*100;
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
      console.log(data)
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
          'DATA_REKAP' : data.dataRekap,
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
            if(this.KELOMPOK_UMUR_PENDERITA_10_14_THN != 0) {
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