<template>
<!-- Main content -->
<div class="content">
  <div class="row">        
    <div class="col-md-12">
      <div class="box box-info">
        <div class="box-header with-border">
          <div class="alert alert-info alert-dismissible">
            <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
            <h4>Tabel 47 - PELAYANAN KESEHATAN GIGI DAN MULUT PADA ANAK SD DAN SETINGKAT MENURUT JENIS KELAMIN</h4>
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
                <span class="badge bg-green">Upaya Kesehatan Gigi Sekolah (UKGS)</span>
              </div>                                                     
              <div class="form-group">
                <label for="" class="col-sm-6 control-label"> Jumlah SD/MI </label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" id="" v-on:blur="ukgsPersenGigiMasal()" v-model="UPAYA_KESEHATAN_GIGI_SEKOLAH_JUMLAH_SD_MI" name="upaya_kesehatan_gigi_sekolah_jumlah_sd_mi" placeholder="">
                </div>
              </div>
              <div class="form-group">
                <label for="" class="col-sm-6 control-label"> Jumlah SD/MI Dengan Sikat Gigi Massal </label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" id="" v-on:blur="ukgsPersenGigiMasal()" v-model="UPAYA_KESEHATAN_GIGI_SEKOLAH_JUMLAH_SD_MI_DENGAN_SIKAT_GIGI_MASSAL" name="upaya_kesehatan_gigi_sekolah_jumlah_sd_mi_dengan_sikat_gigi_massal" placeholder="">
                </div>
              </div>
              <div class="form-group">
                <label for="" class="col-sm-6 control-label"> Persen SD/MI Dengan Sikat Gigi Massal </label>
                <div class="col-sm-4">
                  <input disabled type="text" class="form-control" id="" v-model="UPAYA_KESEHATAN_GIGI_SEKOLAH_PERSEN_MASSAL" name="upaya_kesehatan_gigi_sekolah_persen" placeholder="">
                </div>
              </div>
              <div class="form-group">
                <label for="" class="col-sm-6 control-label"> Jumlah SD/MI Mendapat Pelayanan Gigi </label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" id="" v-on:blur="ukgsPersenGigi()" v-model="UPAYA_KESEHATAN_GIGI_SEKOLAH_JUMLAH_SD_MI_MENDAPAT_PELAYANAN_GIGI" name="upaya_kesehatan_gigi_sekolah_jumlah_sd_mi_mendapat_pelayanan_gigi" placeholder="">
                </div>
              </div>
              <div class="form-group">
                <label for="" class="col-sm-6 control-label"> Persen SD/MI Dengan Dengan Pelayanan Gigi </label>
                <div class="col-sm-4">
                  <input disabled type="text" class="form-control" id="" v-model="UPAYA_KESEHATAN_GIGI_SEKOLAH_PERSEN_GIGI" name="upaya_kesehatan_gigi_sekolah_persen_sd_mi_dengan_pelayanan_gigi" placeholder="">
                </div>
              </div>
              <div class="form-group">
                <span class="badge bg-green">a. Jumlah Murid SD/MI</span>
              </div> 
              <div class="form-group">
                <label for="" class="col-sm-6 control-label"> Laki </label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" id="" v-on:blur="ukgsJmlMuridSDMI()" v-model="UPAYA_KESEHATAN_GIGI_SEKOLAH_JUMLAH_MURID_SD_MI_LAKI" name="upaya_kesehatan_gigi_sekolah_jumlah_murid_sd_mi_laki" placeholder="">
                </div>
              </div>
              <div class="form-group">
                <label for="" class="col-sm-6 control-label"> Perempuan </label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" id="" v-on:blur="ukgsJmlMuridSDMI()" v-model="UPAYA_KESEHATAN_GIGI_SEKOLAH_JUMLAH_MURID_SD_MI_PEREMPUAN" name="upaya_kesehatan_gigi_sekolah_jumlah_murid_sd_mi_perempuan" placeholder="">
                </div>
              </div>
              <div class="form-group">
                <label for="" class="col-sm-6 control-label"> Laki+Perempuan </label>
                <div class="col-sm-4">
                  <input disabled type="text" class="form-control" id="" v-model="UPAYA_KESEHATAN_GIGI_SEKOLAH_JUMLAH_MURID_SD_MI_LAKI_PEREMPUAN" name="upaya_kesehatan_gigi_sekolah_jumlah_murid_sd_mi_laki_perempuan" placeholder="">
                </div>
              </div>
            </div>
            <div class="col-md-6">                     
              <div class="form-group">
                <span class="badge bg-green">b. Murid SD/MI Diperiksa</span>
              </div> 
              <div class="form-group">
                <label for="" class="col-sm-6 control-label"> Laki </label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" id="" v-on:blur="ukgsMuridSDMIdiperiksaLAKIPERSEN()" v-model="UPAYA_KESEHATAN_GIGI_SEKOLAH_MURID_SD_MI_DIPERIKSA_LAKI" name="upaya_kesehatan_gigi_sekolah_murid_sd_mi_diperiksa_laki" placeholder="">
                </div>
              </div>
              <div class="form-group">
                <label for="" class="col-sm-6 control-label"> Persen Laki </label>
                <div class="col-sm-4">
                  <input disabled type="text" class="form-control" id="" v-model="UPAYA_KESEHATAN_GIGI_SEKOLAH_MURID_SD_MI_DIPERIKSA_PERSEN_LAKI" name="upaya_kesehatan_gigi_sekolah_murid_sd_mi_diperiksa_persen_laki" placeholder="">
                </div>
              </div>
              <div class="form-group">
                <label for="" class="col-sm-6 control-label"> Perempuan </label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" id="" v-on:blur="ukgsMuridSDMIdiperiksaPRpersen()" v-model="UPAYA_KESEHATAN_GIGI_SEKOLAH_MURID_SD_MI_DIPERIKSA_PEREMPUAN" name="upaya_kesehatan_gigi_sekolah_murid_sd_mi_diperiksa_perempuan" placeholder="">
                </div>
              </div>
              <div class="form-group">
                <label for="" class="col-sm-6 control-label"> Persen Perempuan </label>
                <div class="col-sm-4">
                  <input disabled type="text" class="form-control" id="" v-model="UPAYA_KESEHATAN_GIGI_SEKOLAH_MURID_SD_MI_DIPERIKSA_PERSEN_PEREMPUAN" name="upaya_kesehatan_gigi_sekolah_murid_sd_mi_diperiksa_persen_perempuan" placeholder="">
                </div>
              </div>
              <div class="form-group">
                <label for="" class="col-sm-6 control-label"> Laki+Perempuan </label>
                <div class="col-sm-4">
                  <input disabled type="text" class="form-control" id="" v-on:blur="ukgsMuridSDMIdiperiksaLPpersen()" v-model="UPAYA_KESEHATAN_GIGI_SEKOLAH_MURID_SD_MI_DIPERIKSA_LAKI_PEREMPUAN" name="upaya_kesehatan_gigi_sekolah_murid_sd_mi_diperiksa_laki_perempuan" placeholder="">
                </div>
              </div>
              <div class="form-group">
                <label for="" class="col-sm-6 control-label"> Persen Laki+Perempuan </label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" id="" v-model="UPAYA_KESEHATAN_GIGI_SEKOLAH_MURID_SD_MI_DIPERIKSA_PERSEN_LAKI_PEREMPUAN" name="upaya_kesehatan_gigi_sekolah_murid_sd_mi_diperiksa_persen_laki_perempuan" placeholder="">
                </div>
              </div>
              <div class="form-group">
                <span class="badge bg-green">c. Perlu Perawatan</span>
              </div> 
              <div class="form-group">
                <label for="" class="col-sm-6 control-label"> Laki </label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" id="" v-on:blur="ukgsPerluPerawatanLP()" v-model="UPAYA_KESEHATAN_GIGI_SEKOLAH_PERLU_PERAWATAN_LAKI" name="upaya_kesehatan_gigi_sekolah_perlu_perawatan_laki" placeholder="">
                </div>
              </div>
              <div class="form-group">
                <label for="" class="col-sm-6 control-label"> Perempuan </label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" id="" v-on:blur="ukgsPerluPerawatanLP()" v-model="UPAYA_KESEHATAN_GIGI_SEKOLAH_PERLU_PERAWATAN_PEREMPUAN" name="upaya_kesehatan_gigi_sekolah_perlu_perawatan_perempuan" placeholder="">
                </div>
              </div>
              <div class="form-group">
                <label for="" class="col-sm-6 control-label"> Laki+Perempuan </label>
                <div class="col-sm-4">
                  <input disabled type="text" class="form-control" id="" v-model="UPAYA_KESEHATAN_GIGI_SEKOLAH_PERLU_PERAWATAN_LAKI_PEREMPUAN" name="upaya_kesehatan_gigi_sekolah_perlu_perawatan_laki_perempuan" placeholder="">
                </div>
              </div>
              <div class="form-group">
                <span class="badge bg-green">d. Mendapat Perawatan</span>
              </div> 
              <div class="form-group">
                <label for="" class="col-sm-6 control-label"> Laki </label>
                <div class="col-sm-4"> 
                  <input type="text" class="form-control" id="" v-on:blur="ukgsMndptPerawatanLakiPersen()" v-model="UPAYA_KESEHATAN_GIGI_SEKOLAH_MENDAPAT_PERAWATAN_LAKI" name="upaya_kesehatan_gigi_sekolah_mendapat_perawatan_laki" placeholder="">
                </div>
              </div>
              <div class="form-group">
                <label for="" class="col-sm-6 control-label"> Persen Laki </label>
                <div class="col-sm-4">
                  <input disabled type="text" class="form-control" id="" v-model="UPAYA_KESEHATAN_GIGI_SEKOLAH_MENDAPAT_PERAWATAN_PERSEN_LAKI" name="upaya_kesehatan_gigi_sekolah_mendapat_perawatan_persen_laki" placeholder="">
                </div>
              </div>
              <div class="form-group">
                <label for="" class="col-sm-6 control-label"> Perempuan </label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" id="" v-on:blur="ukgsMndptPerawatanPRPersen()" v-model="UPAYA_KESEHATAN_GIGI_SEKOLAH_MENDAPAT_PERAWATAN_PEREMPUAN" name="upaya_kesehatan_gigi_sekolah_mendapat_perawatan_perempuan" placeholder="">
                </div>
              </div>
              <div class="form-group">
                <label for="" class="col-sm-6 control-label"> Persen Perempuan </label>
                <div class="col-sm-4">
                  <input disabled type="text" class="form-control" id="" v-model="UPAYA_KESEHATAN_GIGI_SEKOLAH_MENDAPAT_PERAWATAN_PERSEN_PEREMPUAN" name="upaya_kesehatan_gigi_sekolah_mendapat_perawatan_persen_perempuan" placeholder="">
                </div>
              </div>
              <div class="form-group">
                <label for="" class="col-sm-6 control-label"> Laki+Perempuan </label>
                <div class="col-sm-4">
                  <input disabled type="text" class="form-control" id="" v-on:blur="ukgsMndptPerawatanLPPersen()" v-model="UPAYA_KESEHATAN_GIGI_SEKOLAH_MENDAPAT_PERAWATAN_LAKI_PEREMPUAN" name="upaya_kesehatan_gigi_sekolah_mendapat_perawatan_laki_perempuan" placeholder="">
                </div>
              </div>
              <div class="form-group">
                <label for="" class="col-sm-6 control-label"> Persen Laki+Perempuan </label>
                <div class="col-sm-4">
                  <input disabled type="text" class="form-control" id="" v-model="UPAYA_KESEHATAN_GIGI_SEKOLAH_MENDAPAT_PERAWATAN_PERSEN_LAKI_PEREMPUAN" name="upaya_kesehatan_gigi_sekolah_mendapat_perawatan_persen_laki_perempuan" placeholder="">
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
            <router-link to="/table47"><a class="btn btn-success btn-md"><i class="fa fa-fw fa-arrow-left"></i> Kembali</a></router-link>
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
  name: 'Table47',
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
      UPAYA_KESEHATAN_GIGI_SEKOLAH_JUMLAH_SD_MI: 0,
      UPAYA_KESEHATAN_GIGI_SEKOLAH_JUMLAH_SD_MI_DENGAN_SIKAT_GIGI_MASSAL: 0,
      UPAYA_KESEHATAN_GIGI_SEKOLAH_PERSEN_MASSAL: 0,
      UPAYA_KESEHATAN_GIGI_SEKOLAH_JUMLAH_SD_MI_MENDAPAT_PELAYANAN_GIGI: 0,
      UPAYA_KESEHATAN_GIGI_SEKOLAH_PERSEN_GIGI: 0,
      UPAYA_KESEHATAN_GIGI_SEKOLAH_JUMLAH_MURID_SD_MI_LAKI: 0,
      UPAYA_KESEHATAN_GIGI_SEKOLAH_JUMLAH_MURID_SD_MI_PEREMPUAN: 0,
      UPAYA_KESEHATAN_GIGI_SEKOLAH_JUMLAH_MURID_SD_MI_LAKI_PEREMPUAN: 0,
      UPAYA_KESEHATAN_GIGI_SEKOLAH_MURID_SD_MI_DIPERIKSA_LAKI: 0,
      UPAYA_KESEHATAN_GIGI_SEKOLAH_MURID_SD_MI_DIPERIKSA_PERSEN_LAKI: 0,
      UPAYA_KESEHATAN_GIGI_SEKOLAH_MURID_SD_MI_DIPERIKSA_PEREMPUAN: 0,
      UPAYA_KESEHATAN_GIGI_SEKOLAH_MURID_SD_MI_DIPERIKSA_PERSEN_PEREMPUAN: 0,
      UPAYA_KESEHATAN_GIGI_SEKOLAH_MURID_SD_MI_DIPERIKSA_LAKI_PEREMPUAN: 0,
      UPAYA_KESEHATAN_GIGI_SEKOLAH_MURID_SD_MI_DIPERIKSA_PERSEN_LAKI_PEREMPUAN: 0,
      UPAYA_KESEHATAN_GIGI_SEKOLAH_PERLU_PERAWATAN_LAKI: 0,
      UPAYA_KESEHATAN_GIGI_SEKOLAH_PERLU_PERAWATAN_PEREMPUAN: 0,
      UPAYA_KESEHATAN_GIGI_SEKOLAH_PERLU_PERAWATAN_LAKI_PEREMPUAN: 0,
      UPAYA_KESEHATAN_GIGI_SEKOLAH_MENDAPAT_PERAWATAN_LAKI: 0,
      UPAYA_KESEHATAN_GIGI_SEKOLAH_MENDAPAT_PERAWATAN_PERSEN_LAKI: 0,
      UPAYA_KESEHATAN_GIGI_SEKOLAH_MENDAPAT_PERAWATAN_PEREMPUAN: 0,
      UPAYA_KESEHATAN_GIGI_SEKOLAH_MENDAPAT_PERAWATAN_PERSEN_PEREMPUAN: 0,
      UPAYA_KESEHATAN_GIGI_SEKOLAH_MENDAPAT_PERAWATAN_LAKI_PEREMPUAN: 0,
      UPAYA_KESEHATAN_GIGI_SEKOLAH_MENDAPAT_PERAWATAN_PERSEN_LAKI_PEREMPUAN: 0,

      isUpdate: false  
    }
  },
  methods: {
    initialData: function() {
      return {
        UPAYA_KESEHATAN_GIGI_SEKOLAH_JUMLAH_SD_MI: 0,
        UPAYA_KESEHATAN_GIGI_SEKOLAH_JUMLAH_SD_MI_DENGAN_SIKAT_GIGI_MASSAL: 0,
        UPAYA_KESEHATAN_GIGI_SEKOLAH_PERSEN_MASSAL: 0,
        UPAYA_KESEHATAN_GIGI_SEKOLAH_JUMLAH_SD_MI_MENDAPAT_PELAYANAN_GIGI: 0,
        UPAYA_KESEHATAN_GIGI_SEKOLAH_PERSEN_GIGI: 0,
        UPAYA_KESEHATAN_GIGI_SEKOLAH_JUMLAH_MURID_SD_MI_LAKI: 0,
        UPAYA_KESEHATAN_GIGI_SEKOLAH_JUMLAH_MURID_SD_MI_PEREMPUAN: 0,
        UPAYA_KESEHATAN_GIGI_SEKOLAH_JUMLAH_MURID_SD_MI_LAKI_PEREMPUAN: 0,
        UPAYA_KESEHATAN_GIGI_SEKOLAH_MURID_SD_MI_DIPERIKSA_LAKI: 0,
        UPAYA_KESEHATAN_GIGI_SEKOLAH_MURID_SD_MI_DIPERIKSA_PERSEN_LAKI: 0,
        UPAYA_KESEHATAN_GIGI_SEKOLAH_MURID_SD_MI_DIPERIKSA_PEREMPUAN: 0,
        UPAYA_KESEHATAN_GIGI_SEKOLAH_MURID_SD_MI_DIPERIKSA_PERSEN_PEREMPUAN: 0,
        UPAYA_KESEHATAN_GIGI_SEKOLAH_MURID_SD_MI_DIPERIKSA_LAKI_PEREMPUAN: 0,
        UPAYA_KESEHATAN_GIGI_SEKOLAH_MURID_SD_MI_DIPERIKSA_PERSEN_LAKI_PEREMPUAN: 0,
        UPAYA_KESEHATAN_GIGI_SEKOLAH_PERLU_PERAWATAN_LAKI: 0,
        UPAYA_KESEHATAN_GIGI_SEKOLAH_PERLU_PERAWATAN_PEREMPUAN: 0,
        UPAYA_KESEHATAN_GIGI_SEKOLAH_PERLU_PERAWATAN_LAKI_PEREMPUAN: 0,
        UPAYA_KESEHATAN_GIGI_SEKOLAH_MENDAPAT_PERAWATAN_LAKI: 0,
        UPAYA_KESEHATAN_GIGI_SEKOLAH_MENDAPAT_PERAWATAN_PERSEN_LAKI: 0,
        UPAYA_KESEHATAN_GIGI_SEKOLAH_MENDAPAT_PERAWATAN_PEREMPUAN: 0,
        UPAYA_KESEHATAN_GIGI_SEKOLAH_MENDAPAT_PERAWATAN_PERSEN_PEREMPUAN: 0,
        UPAYA_KESEHATAN_GIGI_SEKOLAH_MENDAPAT_PERAWATAN_LAKI_PEREMPUAN: 0,
        UPAYA_KESEHATAN_GIGI_SEKOLAH_MENDAPAT_PERAWATAN_PERSEN_LAKI_PEREMPUAN: 0,       
      }
    },
    checkToggleRekapBtn: function(value) {
      if(value.rekapToggle == true) {
        this.PILIH_BULAN = '12';
        this.dataRekap = value.rekapToggle;
      }
      else this.PILIH_BULAN = '1'
    },               
    ukgsPersenGigiMasal: function() {
      this.UPAYA_KESEHATAN_GIGI_SEKOLAH_PERSEN_MASSAL = 
         parseInt((this.UPAYA_KESEHATAN_GIGI_SEKOLAH_JUMLAH_SD_MI_DENGAN_SIKAT_GIGI_MASSAL == '') ? 0 : this.UPAYA_KESEHATAN_GIGI_SEKOLAH_JUMLAH_SD_MI_DENGAN_SIKAT_GIGI_MASSAL) /
         parseInt((this.UPAYA_KESEHATAN_GIGI_SEKOLAH_JUMLAH_SD_MI == '') ? 0 : this.UPAYA_KESEHATAN_GIGI_SEKOLAH_JUMLAH_SD_MI) * 100 ;
    }, 
    ukgsPersenGigi: function() {
      this.UPAYA_KESEHATAN_GIGI_SEKOLAH_PERSEN_GIGI = 
         parseInt((this.UPAYA_KESEHATAN_GIGI_SEKOLAH_JUMLAH_SD_MI_MENDAPAT_PELAYANAN_GIGI == '') ? 0 : this.UPAYA_KESEHATAN_GIGI_SEKOLAH_JUMLAH_SD_MI_MENDAPAT_PELAYANAN_GIGI) /
         parseInt((this.UPAYA_KESEHATAN_GIGI_SEKOLAH_JUMLAH_SD_MI == '') ? 0 : this.UPAYA_KESEHATAN_GIGI_SEKOLAH_JUMLAH_SD_MI) * 100 ;
    },  
    ukgsJmlMuridSDMI: function() {
      this.UPAYA_KESEHATAN_GIGI_SEKOLAH_JUMLAH_MURID_SD_MI_LAKI_PEREMPUAN = 
         parseInt((this.UPAYA_KESEHATAN_GIGI_SEKOLAH_JUMLAH_MURID_SD_MI_LAKI == '') ? 0 : this.UPAYA_KESEHATAN_GIGI_SEKOLAH_JUMLAH_MURID_SD_MI_LAKI) +
         parseInt((this.UPAYA_KESEHATAN_GIGI_SEKOLAH_JUMLAH_MURID_SD_MI_PEREMPUAN == '') ? 0 : this.UPAYA_KESEHATAN_GIGI_SEKOLAH_JUMLAH_MURID_SD_MI_PEREMPUAN) ;
    },  
    ukgsMuridSDMIdiperiksaLAKIPERSEN: function() {
      this.UPAYA_KESEHATAN_GIGI_SEKOLAH_MURID_SD_MI_DIPERIKSA_PERSEN_LAKI = 
         parseInt((this.UPAYA_KESEHATAN_GIGI_SEKOLAH_MURID_SD_MI_DIPERIKSA_LAKI == '') ? 0 : this.UPAYA_KESEHATAN_GIGI_SEKOLAH_MURID_SD_MI_DIPERIKSA_LAKI) /
         parseInt((this.UPAYA_KESEHATAN_GIGI_SEKOLAH_JUMLAH_MURID_SD_MI_LAKI == '') ? 0 : this.UPAYA_KESEHATAN_GIGI_SEKOLAH_JUMLAH_MURID_SD_MI_LAKI) * 100 ;
    },
    ukgsMuridSDMIdiperiksaPRpersen: function() {
      this.UPAYA_KESEHATAN_GIGI_SEKOLAH_MURID_SD_MI_DIPERIKSA_PERSEN_PEREMPUAN = 
         parseInt((this.UPAYA_KESEHATAN_GIGI_SEKOLAH_MURID_SD_MI_DIPERIKSA_PEREMPUAN == '') ? 0 : this.UPAYA_KESEHATAN_GIGI_SEKOLAH_MURID_SD_MI_DIPERIKSA_PEREMPUAN) /
         parseInt((this.UPAYA_KESEHATAN_GIGI_SEKOLAH_JUMLAH_MURID_SD_MI_PEREMPUAN == '') ? 0 : this.UPAYA_KESEHATAN_GIGI_SEKOLAH_JUMLAH_MURID_SD_MI_PEREMPUAN) * 100 ;
      
      this.UPAYA_KESEHATAN_GIGI_SEKOLAH_MURID_SD_MI_DIPERIKSA_LAKI_PEREMPUAN = 
         parseInt((this.UPAYA_KESEHATAN_GIGI_SEKOLAH_MURID_SD_MI_DIPERIKSA_LAKI == '') ? 0 : this.UPAYA_KESEHATAN_GIGI_SEKOLAH_MURID_SD_MI_DIPERIKSA_LAKI) +
         parseInt((this.UPAYA_KESEHATAN_GIGI_SEKOLAH_MURID_SD_MI_DIPERIKSA_PEREMPUAN == '') ? 0 : this.UPAYA_KESEHATAN_GIGI_SEKOLAH_MURID_SD_MI_DIPERIKSA_PEREMPUAN) ;
    },    
    ukgsMuridSDMIdiperiksaLPpersen: function() {
      this.UPAYA_KESEHATAN_GIGI_SEKOLAH_MURID_SD_MI_DIPERIKSA_PERSEN_LAKI_PEREMPUAN = 
         parseInt((this.UPAYA_KESEHATAN_GIGI_SEKOLAH_MURID_SD_MI_DIPERIKSA_LAKI_PEREMPUAN == '') ? 0 : this.UPAYA_KESEHATAN_GIGI_SEKOLAH_MURID_SD_MI_DIPERIKSA_LAKI_PEREMPUAN) /
         parseInt((this.UPAYA_KESEHATAN_GIGI_SEKOLAH_JUMLAH_MURID_SD_MI_LAKI_PEREMPUAN == '') ? 0 : this.UPAYA_KESEHATAN_GIGI_SEKOLAH_JUMLAH_MURID_SD_MI_LAKI_PEREMPUAN) * 100 ;
    },
    ukgsPerluPerawatanLP: function() {
      this.UPAYA_KESEHATAN_GIGI_SEKOLAH_PERLU_PERAWATAN_LAKI_PEREMPUAN = 
         parseInt((this.UPAYA_KESEHATAN_GIGI_SEKOLAH_PERLU_PERAWATAN_LAKI == '') ? 0 : this.UPAYA_KESEHATAN_GIGI_SEKOLAH_PERLU_PERAWATAN_LAKI) +
         parseInt((this.UPAYA_KESEHATAN_GIGI_SEKOLAH_PERLU_PERAWATAN_PEREMPUAN == '') ? 0 : this.UPAYA_KESEHATAN_GIGI_SEKOLAH_PERLU_PERAWATAN_PEREMPUAN) ;
    }, 
    ukgsMndptPerawatanLakiPersen: function() {
      this.UPAYA_KESEHATAN_GIGI_SEKOLAH_MENDAPAT_PERAWATAN_PERSEN_LAKI = 
         parseInt((this.UPAYA_KESEHATAN_GIGI_SEKOLAH_MENDAPAT_PERAWATAN_LAKI == '') ? 0 : this.UPAYA_KESEHATAN_GIGI_SEKOLAH_MENDAPAT_PERAWATAN_LAKI) /
         parseInt((this.UPAYA_KESEHATAN_GIGI_SEKOLAH_PERLU_PERAWATAN_LAKI == '') ? 0 : this.UPAYA_KESEHATAN_GIGI_SEKOLAH_PERLU_PERAWATAN_LAKI) * 100 ;
    },
    ukgsMndptPerawatanPRPersen: function() {
      this.UPAYA_KESEHATAN_GIGI_SEKOLAH_MENDAPAT_PERAWATAN_PERSEN_PEREMPUAN = 
         parseInt((this.UPAYA_KESEHATAN_GIGI_SEKOLAH_MENDAPAT_PERAWATAN_PEREMPUAN == '') ? 0 : this.UPAYA_KESEHATAN_GIGI_SEKOLAH_MENDAPAT_PERAWATAN_PEREMPUAN) /
         parseInt((this.UPAYA_KESEHATAN_GIGI_SEKOLAH_PERLU_PERAWATAN_PEREMPUAN == '') ? 0 : this.UPAYA_KESEHATAN_GIGI_SEKOLAH_PERLU_PERAWATAN_PEREMPUAN) * 100 ;
      
      this.UPAYA_KESEHATAN_GIGI_SEKOLAH_MENDAPAT_PERAWATAN_LAKI_PEREMPUAN = 
         parseInt((this.UPAYA_KESEHATAN_GIGI_SEKOLAH_MENDAPAT_PERAWATAN_LAKI == '') ? 0 : this.UPAYA_KESEHATAN_GIGI_SEKOLAH_MENDAPAT_PERAWATAN_LAKI) +
         parseInt((this.UPAYA_KESEHATAN_GIGI_SEKOLAH_MENDAPAT_PERAWATAN_PEREMPUAN == '') ? 0 : this.UPAYA_KESEHATAN_GIGI_SEKOLAH_MENDAPAT_PERAWATAN_PEREMPUAN) ;
    },
    ukgsMndptPerawatanLPPersen: function() {
      this.UPAYA_KESEHATAN_GIGI_SEKOLAH_MENDAPAT_PERAWATAN_PERSEN_LAKI_PEREMPUAN = 
         parseInt((this.UPAYA_KESEHATAN_GIGI_SEKOLAH_MENDAPAT_PERAWATAN_LAKI_PEREMPUAN == '') ? 0 : this.UPAYA_KESEHATAN_GIGI_SEKOLAH_MENDAPAT_PERAWATAN_LAKI_PEREMPUAN) /
         parseInt((this.UPAYA_KESEHATAN_GIGI_SEKOLAH_PERLU_PERAWATAN_LAKI_PEREMPUAN == '') ? 0 : this.UPAYA_KESEHATAN_GIGI_SEKOLAH_PERLU_PERAWATAN_LAKI_PEREMPUAN) * 100 ;
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
            if(this.UPAYA_KESEHATAN_GIGI_SEKOLAH_JUMLAH_SD_MI != 0) {
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