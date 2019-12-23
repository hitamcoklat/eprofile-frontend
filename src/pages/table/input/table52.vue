<template>
<!-- Main content -->
<div class="content">
  <div class="row">        
    <div class="col-md-12">
      <div class="box box-info">
        <div class="box-header with-border">
          <div class="alert alert-info alert-dismissible">
            <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
            <h4>Tabel 52 - ANGKA KESEMBUHAN DAN PENGOBATAN LENGKAP SERTA KEBERHASILAN PENGOBATAN TUBERKULOSIS MENURUT JENIS KELAMIN </h4>
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
                <label for="" class="col-sm-6 control-label"> Jumlah Tuberkulosis Paru Terkonfirmasi Bakteriologis Yang Terdaftar dan Diobati Laki-Laki </label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" id="" v-on:blur="jmlKasusTBParuKonDaftarDiobatiLP()" v-model="JUMLAH_KASUS_TUBERKOLOSIS_PARU_TERKONFIRMASI_BAKTERIOLOGIS_YANG_TERDAFTAR_DAN_DIOBATI_LAKI_LAKI" name="jumlah_kasus_tuberkulosis_paru_terkonfirmasi_bakteriologis_yang_terdaftar_dan_diobati_laki_laki" placeholder="">
                </div>
              </div>
              <div class="form-group">
                <label for="" class="col-sm-6 control-label"> Jumlah Tuberkulosis Paru Terkonfirmasi Bakteriologis Yang Terdaftar dan Diobati Perempuan </label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" id="" v-on:blur="jmlKasusTBParuKonDaftarDiobatiLP()" v-model="JUMLAH_KASUS_TUBERKOLOSIS_PARU_TERKONFIRMASI_BAKTERIOLOGIS_YANG_TERDAFTAR_DAN_DIOBATI_PEREMPUAN" name="jumlah_kasus_tuberkulosis_paru_terkonfirmasi_bakteriologis_yang_terdaftar_dan_diobati_perempuan" placeholder="">
                </div>
              </div>
              <div class="form-group">
                <label for="" class="col-sm-6 control-label"> Jumlah Kasus Tuberkulosis Paru Terkonfirmasi Bakteriologis Yang Terdaftar dan Diobati Laki+Perempuan </label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" id="" v-model="JUMLAH_KASUS_TUBERKOLOSIS_PARU_TERKONFIRMASI_BAKTERIOLOGIS_YANG_TERDAFTAR_DAN_DIOBATI_LAKI_LAKI_PEREMPUAN" v-on:blur="persenCRTBLakiPr()" name="jumlah_kasus_tuberkulosis_paru_terkonfirmasi_bakteriologis_yang_terdaftar_dan_diobati_laki_perempuan" placeholder="" disabled="">
                </div>
              </div> 

              <div class="form-group">
                <label for="" class="col-sm-6 control-label"> Jumlah Semua Kasus Tuberkulosis Terdaftar dan Diobati Laki-Laki </label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" id="" v-on:blur="jmlKasusTBDaftarDiobatiLP()" v-model="JUMLAH_SEMUA_KASUS_TUBERKOLOSIS_TERDAFTAR_DAN_DIOBATI_LAKI_LAKI" name="jumlah_semua_kasus_tuberkulosis_terdaftar_dan_diobati_laki_laki" placeholder="">
                </div>
              </div>
              <div class="form-group">
                <label for="" class="col-sm-6 control-label"> Jumlah Semua Kasus Tuberkulosis Terdaftar dan Diobati Perempuan </label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" id="" v-on:blur="jmlKasusTBDaftarDiobatiLP()" v-model="JUMLAH_SEMUA_KASUS_TUBERKOLOSIS_TERDAFTAR_DAN_DIOBATI_PEREMPUAN" name="jumlah_semua_kasus_tuberkulosis_terdaftar_dan_diobati_perempuan" placeholder="">
                </div>
              </div>
              <div class="form-group">
                <label for="" class="col-sm-6 control-label"> Jumlah Semua Kasus Tuberkulosis Terdaftar dan Diobati Laki+Perempuan </label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" id="" v-model="JUMLAH_SEMUA_KASUS_TUBERKOLOSIS_TERDAFTAR_DAN_DIOBATI_LAKI_LAKI_PEREMPUAN" name="jumlah_semua_kasus_tuberkulosis_terdaftar_dan_diobati_laki_laki_perempuan" disabled="" v-on:blur="persenSRTBLakiPr()" placeholder="" disabled="">
                </div>
              </div>
              
              <!--div class="form-group">
                <span class="badge bg-green">a. </span>
              </div--> 
              <div class="form-group">
                <label for="" class="col-sm-6 control-label">Angka Kesembuhan <font color="red">(Cure Rate)</font> Tuberkulosis Paru Terkonfirmasi Bakteriologis Laki-Laki Jumlah </label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" id="" v-model="ANGKA_KESEBUHAN_CURE_RATE_TUBERKOLOSIS_PARU_TERKONFIRMASI_BAKTERIOLOGIS_LAKI_LAKI_JUMLAH" name="angka_kesembuhan_tuberkulosis_paru_terkonfirmasi_bakteriologis_laki_laki_jumlah" v-on:blur="persenCRTBLaki()" placeholder="">
                </div>
              </div>
              <div class="form-group">
                <label for="" class="col-sm-6 control-label">Angka Kesembuhan (Cure Rate) Tuberkulosis Paru Terkonfirmasi Bakteriologis Laki-Laki Persen </label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" id="" v-model="ANGKA_KESEBUHAN_CURE_RATE_TUBERKOLOSIS_PARU_TERKONFIRMASI_BAKTERIOLOGIS_LAKI_LAKI_PERSEN" name="angka_kesembuhan_tuberkulosis_paru_terkonfirmasi_bakteriologis_laki_laki_persen" placeholder="" disabled="">
                </div>
              </div>
              <div class="form-group">
                <label for="" class="col-sm-6 control-label">Angka Kesembuhan (Cure Rate) Tuberkulosis Paru Terkonfirmasi Bakteriologis Perempuan Jumlah </label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" id="" v-model="ANGKA_KESEBUHAN_CURE_RATE_TUBERKOLOSIS_PARU_TERKONFIRMASI_BAKTERIOLOGIS_PEREMPUAN_JUMLAH" name="angka_kesembuhan_tuberkulosis_paru_terkonfirmasi_bakteriologis_perempuan_jumlah" v-on:blur="persenCRTBPr()" placeholder="">
                </div>
              </div>
              <div class="form-group">
                <label for="" class="col-sm-6 control-label">Angka Kesembuhan (Cure Rate) Tuberkulosis Paru Terkonfirmasi Bakteriologis Perempuan Persen </label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" id="" v-model="ANGKA_KESEBUHAN_CURE_RATE_TUBERKOLOSIS_PARU_TERKONFIRMASI_BAKTERIOLOGIS_PEREMPUAN_PERSEN" name="angka_kesembuhan_tuberkulosis_paru_terkonfirmasi_bakteriologis_perempuan_persen" disabled="" placeholder="">
                </div>
              </div>
              <div class="form-group">
                <label for="" class="col-sm-6 control-label">Angka Kesembuhan (Cure Rate) Tuberkulosis Paru Terkonfirmasi Bakteriologis Laki+Perempuan Jumlah </label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" id="" v-on:blur="persenCRTBLakiPr()" v-model="ANGKA_KESEBUHAN_CURE_RATE_TUBERKOLOSIS_PARU_TERKONFIRMASI_BAKTERIOLOGIS_LAKI_LAKI_PEREMPUAN_JUMLAH" name="angka_kesembuhan_tuberkulosis_paru_terkonfirmasi_bakteriologis_laki_perempuan_jumlah" placeholder="">
                </div>
              </div>
              <div class="form-group">
                <label for="" class="col-sm-6 control-label">Angka Kesembuhan (Cure Rate) Tuberkulosis Paru Terkonfirmasi Bakteriologis Laki+Perempuan Persen </label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" id="" v-model="ANGKA_KESEBUHAN_CURE_RATE_TUBERKOLOSIS_PARU_TERKONFIRMASI_BAKTERIOLOGIS_LAKI_LAKI_PEREMPUAN_PERSEN" name="angka_kesembuhan_tuberkulosis_paru_terkonfirmasi_bakteriologis_laki_perempuan_persen" placeholder="" disabled="">
                </div>
              </div>
            </div>
            <div class="col-md-6">                                   
              <div class="form-group">
                <label for="" class="col-sm-6 control-label">Angka Pengobatan Lengkap <font color="blue">(Complete Rate)</font> Semua Kasus Tuberkulosis Laki-Laki Jumlah </label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" id="" v-model="ANGKA_PENGOBATAN_LENGKAP_COMPLETE_RATE_SEMUA_KASUS_TUBERKOLOSIS_LAKI_LAKI_JUMLAH" name="angka_pengobatan_lengkap_semua_kasus_tuberkulosis_laki_laki_jumlah" v-on:blur="persenCompRateTBLaki()" placeholder="">
                </div>
              </div>
              <div class="form-group">
                <label for="" class="col-sm-6 control-label">Angka Pengobatan Lengkap (Complete Rate) Semua Kasus Tuberkulosis Laki-Laki Persen </label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" id="" v-model="ANGKA_PENGOBATAN_LENGKAP_COMPLETE_RATE_SEMUA_KASUS_TUBERKOLOSIS_LAKI_LAKI_PERSEN" name="angka_pengobatan_lengkap_semua_kasus_tuberkulosis_laki_laki_persen" placeholder="" disabled="">
                </div>
              </div>
              <div class="form-group">
                <label for="" class="col-sm-6 control-label">Angka Pengobatan Lengkap (Complete Rate) Semua Kasus Tuberkulosis Perempuan Jumlah </label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" id="" v-model="ANGKA_PENGOBATAN_LENGKAP_COMPLETE_RATE_SEMUA_KASUS_TUBERKOLOSIS_PEREMPUAN_JUMLAH" name="angka_pengobatan_lengkap_semua_kasus_tuberkulosis_perempuan_jumlah" v-on:blur="persenCompRateTBPr()" placeholder="">
                </div>
              </div>
              <div class="form-group">
                <label for="" class="col-sm-6 control-label">Angka Pengobatan Lengkap (Complete Rate) Semua Kasus Tuberkulosis Perempuan Persen </label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" id="" v-model="ANGKA_PENGOBATAN_LENGKAP_COMPLETE_RATE_SEMUA_KASUS_TUBERKOLOSIS_PEREMPUAN_PERSEN" name="angka_pengobatan_lengkap_semua_kasus_tuberkulosis_perempuan_persen" placeholder="" disabled="">
                </div>
              </div>
              <div class="form-group">
                <label for="" class="col-sm-6 control-label">Angka Pengobatan Lengkap (Complete Rate) Semua Kasus Tuberkulosis Laki+Perempuan Jumlah </label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" id="" v-model="ANGKA_PENGOBATAN_LENGKAP_COMPLETE_RATE_SEMUA_KASUS_TUBERKOLOSIS_LAKI_LAKI_PEREMPUAN_JUMLAH" name="angka_pengobatan_lengkap_semua_kasus_tuberkulosis_laki_perempuan_jumlah" placeholder="" v-on:blur="persenCompRateTBLakiPr()">
                </div>
              </div>
              <div class="form-group">
                <label for="" class="col-sm-6 control-label">Angka Pengobatan Lengkap (Complete Rate) Semua Kasus Tuberkulosis Laki+Perempuan Persen </label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" id="" v-model="ANGKA_PENGOBATAN_LENGKAP_COMPLETE_RATE_SEMUA_KASUS_TUBERKOLOSIS_LAKI_LAKI_PEREMPUAN_PERSEN" name="angka_pengobatan_lengkap_semua_kasus_tuberkulosis_laki_perempuan_persen" placeholder="" disabled="">
                </div>
              </div>
              
              <div class="form-group">
                <label for="" class="col-sm-6 control-label">Angka Keberhasilan Pengobatan <font color="green">(success rate/sr)</font> Semua Kasus Tuberkulosis Laki-Laki Jumlah </label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" id="" v-model="ANGKA_KEBERHASILAN_PENGOBATAN_SUCCESS_RATE_SEMUA_KASUS_TUBERKOLOSIS_LAKI_LAKI_JUMLAH" v-on:blur="persenSRTBLaki()" name="angka_keberhasilan_pengobatan_semua_kasus_tuberkulosis_laki_laki_jumlah" placeholder="">
                </div>
              </div>
              <div class="form-group">
                <label for="" class="col-sm-6 control-label">Angka Keberhasilan Pengobatan (success rate/sr) Semua Kasus Tuberkulosis Laki Persen </label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" id="" v-model="ANGKA_KEBERHASILAN_PENGOBATAN_SUCCESS_RATE_SEMUA_KASUS_TUBERKOLOSIS_LAKI_LAKI_PERSEN" name="angka_keberhasilan_pengobatan_semua_kasus_tuberkulosis_laki_laki_persen" placeholder="" disabled="">
                </div>
              </div>
              <div class="form-group">
                <label for="" class="col-sm-6 control-label">Angka Keberhasilan Pengobatan (success rate/sr) Semua Kasus Tuberkulosis Perempuan Jumlah </label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" id="" v-model="ANGKA_KEBERHASILAN_PENGOBATAN_SUCCESS_RATE_SEMUA_KASUS_TUBERKOLOSIS_PEREMPUAN_JUMLAH" name="angka_keberhasilan_pengobatan_semua_kasus_tuberkulosis_perempuan_jumlah" placeholder="" v-on:blur="persenSRTBPr()">
                </div>
              </div>
              <div class="form-group">
                <label for="" class="col-sm-6 control-label">Angka Keberhasilan Pengobatan (success rate/sr) Semua Kasus Tuberkulosis Perempuan Persen </label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" id="" v-model="ANGKA_KEBERHASILAN_PENGOBATAN_SUCCESS_RATE_SEMUA_KASUS_TUBERKOLOSIS_PEREMPUAN_PERSEN" name="angka_keberhasilan_pengobatan_semua_kasus_tuberkulosis_perempuan_persen" placeholder="" disabled="">
                </div>
              </div>
              <div class="form-group">
                <label for="" class="col-sm-6 control-label">Angka Keberhasilan Pengobatan (success rate/sr) Semua Kasus Tuberkulosis Laki+Perempuan Jumlah </label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" id="" v-model="ANGKA_KEBERHASILAN_PENGOBATAN_SUCCESS_RATE_SEMUA_KASUS_TUBERKOLOSIS_LAKI_LAKI_PEREMPUAN_JUMLAH" name="angka_keberhasilan_pengobatan_semua_kasus_tuberkulosis_laki_laki_perempuan_jumlah" placeholder="" v-om:blur="persenSRTBLakiPr()">
                </div>
              </div>
              <div class="form-group">
                <label for="" class="col-sm-6 control-label">Angka Keberhasilan Pengobatan (success rate/sr) Semua Kasus Tuberkulosis Laki+Perempuan Persen </label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" id="" v-model="ANGKA_KEBERHASILAN_PENGOBATAN_SUCCESS_RATE_SEMUA_KASUS_TUBERKOLOSIS_LAKI_LAKI_PEREMPUAN_PERSEN" name="angka_keberhasilan_pengobatan_semua_kasus_tuberkulosis_laki_laki_perempuan_persen" placeholder="" disabled="">
                </div>
              </div>

              <div class="form-group">
                <label for="" class="col-sm-6 control-label">Jumlah Kematian Selama Pengobatan Tuberkulosis Jumlah</label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" id="" v-model="JUMLAH_KEMATIAN_SELAMA_PENGOBATAN_TUBERKOLOSIS_JUMLAH" name="jumlah_kematian_selama_pengobatan_tuberkulosis_jumlah" v-on:blur="persenJmlKematianTB()" placeholder="">
                </div>
              </div> 
              <div class="form-group">
                <label for="" class="col-sm-6 control-label">Jumlah Kematian Selama Pengobatan Tuberkulosis Persen</label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" id="" v-model="JUMLAH_KEMATIAN_SELAMA_PENGOBATAN_TUBERKOLOSIS_PERSEN" name="jumlah_kematian_selama_pengobatan_tuberkulosis_persen" placeholder="" disabled="">
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
            <router-link to="/table52"><a class="btn btn-success btn-md"><i class="fa fa-fw fa-arrow-left"></i> Kembali</a></router-link>
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
  name: 'Table52',
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
      JUMLAH_KASUS_TUBERKOLOSIS_PARU_TERKONFIRMASI_BAKTERIOLOGIS_YANG_TERDAFTAR_DAN_DIOBATI_LAKI_LAKI: 0,
      JUMLAH_KASUS_TUBERKOLOSIS_PARU_TERKONFIRMASI_BAKTERIOLOGIS_YANG_TERDAFTAR_DAN_DIOBATI_PEREMPUAN: 0,
      JUMLAH_KASUS_TUBERKOLOSIS_PARU_TERKONFIRMASI_BAKTERIOLOGIS_YANG_TERDAFTAR_DAN_DIOBATI_LAKI_LAKI_PEREMPUAN: 0,
      JUMLAH_SEMUA_KASUS_TUBERKOLOSIS_TERDAFTAR_DAN_DIOBATI_LAKI_LAKI: 0,
      JUMLAH_SEMUA_KASUS_TUBERKOLOSIS_TERDAFTAR_DAN_DIOBATI_PEREMPUAN: 0,
      JUMLAH_SEMUA_KASUS_TUBERKOLOSIS_TERDAFTAR_DAN_DIOBATI_LAKI_LAKI_PEREMPUAN: 0,
      ANGKA_KESEBUHAN_CURE_RATE_TUBERKOLOSIS_PARU_TERKONFIRMASI_BAKTERIOLOGIS_LAKI_LAKI_JUMLAH: 0,
      ANGKA_KESEBUHAN_CURE_RATE_TUBERKOLOSIS_PARU_TERKONFIRMASI_BAKTERIOLOGIS_LAKI_LAKI_PERSEN: 0,
      ANGKA_KESEBUHAN_CURE_RATE_TUBERKOLOSIS_PARU_TERKONFIRMASI_BAKTERIOLOGIS_PEREMPUAN_JUMLAH: 0,
      ANGKA_KESEBUHAN_CURE_RATE_TUBERKOLOSIS_PARU_TERKONFIRMASI_BAKTERIOLOGIS_PEREMPUAN_PERSEN: 0,
      ANGKA_KESEBUHAN_CURE_RATE_TUBERKOLOSIS_PARU_TERKONFIRMASI_BAKTERIOLOGIS_LAKI_LAKI_PEREMPUAN_JUMLAH: 0,
      ANGKA_KESEBUHAN_CURE_RATE_TUBERKOLOSIS_PARU_TERKONFIRMASI_BAKTERIOLOGIS_LAKI_LAKI_PEREMPUAN_PERSEN: 0,
      ANGKA_PENGOBATAN_LENGKAP_COMPLETE_RATE_SEMUA_KASUS_TUBERKOLOSIS_LAKI_LAKI_JUMLAH: 0,
      ANGKA_PENGOBATAN_LENGKAP_COMPLETE_RATE_SEMUA_KASUS_TUBERKOLOSIS_LAKI_LAKI_PERSEN: 0,
      ANGKA_PENGOBATAN_LENGKAP_COMPLETE_RATE_SEMUA_KASUS_TUBERKOLOSIS_PEREMPUAN_JUMLAH: 0,
      ANGKA_PENGOBATAN_LENGKAP_COMPLETE_RATE_SEMUA_KASUS_TUBERKOLOSIS_PEREMPUAN_PERSEN: 0,
      ANGKA_PENGOBATAN_LENGKAP_COMPLETE_RATE_SEMUA_KASUS_TUBERKOLOSIS_LAKI_LAKI_PEREMPUAN_JUMLAH: 0,
      ANGKA_PENGOBATAN_LENGKAP_COMPLETE_RATE_SEMUA_KASUS_TUBERKOLOSIS_LAKI_LAKI_PEREMPUAN_PERSEN: 0,
      ANGKA_KEBERHASILAN_PENGOBATAN_SUCCESS_RATE_SEMUA_KASUS_TUBERKOLOSIS_LAKI_LAKI_JUMLAH: 0,
      ANGKA_KEBERHASILAN_PENGOBATAN_SUCCESS_RATE_SEMUA_KASUS_TUBERKOLOSIS_LAKI_LAKI_PERSEN: 0,
      ANGKA_KEBERHASILAN_PENGOBATAN_SUCCESS_RATE_SEMUA_KASUS_TUBERKOLOSIS_PEREMPUAN_JUMLAH: 0,
      ANGKA_KEBERHASILAN_PENGOBATAN_SUCCESS_RATE_SEMUA_KASUS_TUBERKOLOSIS_PEREMPUAN_PERSEN: 0,
      ANGKA_KEBERHASILAN_PENGOBATAN_SUCCESS_RATE_SEMUA_KASUS_TUBERKOLOSIS_LAKI_LAKI_PEREMPUAN_JUMLAH: 0,
      ANGKA_KEBERHASILAN_PENGOBATAN_SUCCESS_RATE_SEMUA_KASUS_TUBERKOLOSIS_LAKI_LAKI_PEREMPUAN_PERSEN: 0,
      JUMLAH_KEMATIAN_SELAMA_PENGOBATAN_TUBERKOLOSIS_JUMLAH: 0,
      JUMLAH_KEMATIAN_SELAMA_PENGOBATAN_TUBERKOLOSIS_PERSEN: 0,
      isUpdate: false  
    }
  },
  methods: {
    initialData: function() {
      return {
        JUMLAH_KASUS_TUBERKOLOSIS_PARU_TERKONFIRMASI_BAKTERIOLOGIS_YANG_TERDAFTAR_DAN_DIOBATI_LAKI_LAKI: 0,
        JUMLAH_KASUS_TUBERKOLOSIS_PARU_TERKONFIRMASI_BAKTERIOLOGIS_YANG_TERDAFTAR_DAN_DIOBATI_PEREMPUAN: 0,
        JUMLAH_KASUS_TUBERKOLOSIS_PARU_TERKONFIRMASI_BAKTERIOLOGIS_YANG_TERDAFTAR_DAN_DIOBATI_LAKI_LAKI_PEREMPUAN: 0,
        JUMLAH_SEMUA_KASUS_TUBERKOLOSIS_TERDAFTAR_DAN_DIOBATI_LAKI_LAKI: 0,
        JUMLAH_SEMUA_KASUS_TUBERKOLOSIS_TERDAFTAR_DAN_DIOBATI_PEREMPUAN: 0,
        JUMLAH_SEMUA_KASUS_TUBERKOLOSIS_TERDAFTAR_DAN_DIOBATI_LAKI_LAKI_PEREMPUAN: 0,
        ANGKA_KESEBUHAN_CURE_RATE_TUBERKOLOSIS_PARU_TERKONFIRMASI_BAKTERIOLOGIS_LAKI_LAKI_JUMLAH: 0,
        ANGKA_KESEBUHAN_CURE_RATE_TUBERKOLOSIS_PARU_TERKONFIRMASI_BAKTERIOLOGIS_LAKI_LAKI_PERSEN: 0,
        ANGKA_KESEBUHAN_CURE_RATE_TUBERKOLOSIS_PARU_TERKONFIRMASI_BAKTERIOLOGIS_PEREMPUAN_JUMLAH: 0,
        ANGKA_KESEBUHAN_CURE_RATE_TUBERKOLOSIS_PARU_TERKONFIRMASI_BAKTERIOLOGIS_PEREMPUAN_PERSEN: 0,
        ANGKA_KESEBUHAN_CURE_RATE_TUBERKOLOSIS_PARU_TERKONFIRMASI_BAKTERIOLOGIS_LAKI_LAKI_PEREMPUAN_JUMLAH: 0,
        ANGKA_KESEBUHAN_CURE_RATE_TUBERKOLOSIS_PARU_TERKONFIRMASI_BAKTERIOLOGIS_LAKI_LAKI_PEREMPUAN_PERSEN: 0,
        ANGKA_PENGOBATAN_LENGKAP_COMPLETE_RATE_SEMUA_KASUS_TUBERKOLOSIS_LAKI_LAKI_JUMLAH: 0,
        ANGKA_PENGOBATAN_LENGKAP_COMPLETE_RATE_SEMUA_KASUS_TUBERKOLOSIS_LAKI_LAKI_PERSEN: 0,
        ANGKA_PENGOBATAN_LENGKAP_COMPLETE_RATE_SEMUA_KASUS_TUBERKOLOSIS_PEREMPUAN_JUMLAH: 0,
        ANGKA_PENGOBATAN_LENGKAP_COMPLETE_RATE_SEMUA_KASUS_TUBERKOLOSIS_PEREMPUAN_PERSEN: 0,
        ANGKA_PENGOBATAN_LENGKAP_COMPLETE_RATE_SEMUA_KASUS_TUBERKOLOSIS_LAKI_LAKI_PEREMPUAN_JUMLAH: 0,
        ANGKA_PENGOBATAN_LENGKAP_COMPLETE_RATE_SEMUA_KASUS_TUBERKOLOSIS_LAKI_LAKI_PEREMPUAN_PERSEN: 0,
        ANGKA_KEBERHASILAN_PENGOBATAN_SUCCESS_RATE_SEMUA_KASUS_TUBERKOLOSIS_LAKI_LAKI_JUMLAH: 0,
        ANGKA_KEBERHASILAN_PENGOBATAN_SUCCESS_RATE_SEMUA_KASUS_TUBERKOLOSIS_LAKI_LAKI_PERSEN: 0,
        ANGKA_KEBERHASILAN_PENGOBATAN_SUCCESS_RATE_SEMUA_KASUS_TUBERKOLOSIS_PEREMPUAN_JUMLAH: 0,
        ANGKA_KEBERHASILAN_PENGOBATAN_SUCCESS_RATE_SEMUA_KASUS_TUBERKOLOSIS_PEREMPUAN_PERSEN: 0,
        ANGKA_KEBERHASILAN_PENGOBATAN_SUCCESS_RATE_SEMUA_KASUS_TUBERKOLOSIS_LAKI_LAKI_PEREMPUAN_JUMLAH: 0,
        ANGKA_KEBERHASILAN_PENGOBATAN_SUCCESS_RATE_SEMUA_KASUS_TUBERKOLOSIS_LAKI_LAKI_PEREMPUAN_PERSEN: 0,
        JUMLAH_KEMATIAN_SELAMA_PENGOBATAN_TUBERKOLOSIS_JUMLAH: 0,
        JUMLAH_KEMATIAN_SELAMA_PENGOBATAN_TUBERKOLOSIS_PERSEN: 0,       
      }
    },        
    jmlKasusTBParuKonDaftarDiobatiLP: function() {      
      this.JUMLAH_KASUS_TUBERKOLOSIS_PARU_TERKONFIRMASI_BAKTERIOLOGIS_YANG_TERDAFTAR_DAN_DIOBATI_LAKI_LAKI_PEREMPUAN = 
        parseInt((this.JUMLAH_KASUS_TUBERKOLOSIS_PARU_TERKONFIRMASI_BAKTERIOLOGIS_YANG_TERDAFTAR_DAN_DIOBATI_LAKI_LAKI == '') ? 0 : this.JUMLAH_KASUS_TUBERKOLOSIS_PARU_TERKONFIRMASI_BAKTERIOLOGIS_YANG_TERDAFTAR_DAN_DIOBATI_LAKI_LAKI)+
        parseInt((this.JUMLAH_KASUS_TUBERKOLOSIS_PARU_TERKONFIRMASI_BAKTERIOLOGIS_YANG_TERDAFTAR_DAN_DIOBATI_PEREMPUAN == '') ? 0 : this.JUMLAH_KASUS_TUBERKOLOSIS_PARU_TERKONFIRMASI_BAKTERIOLOGIS_YANG_TERDAFTAR_DAN_DIOBATI_PEREMPUAN);
    },
    jmlKasusTBDaftarDiobatiLP: function() {      
      this.JUMLAH_SEMUA_KASUS_TUBERKOLOSIS_TERDAFTAR_DAN_DIOBATI_LAKI_LAKI_PEREMPUAN = 
        parseInt((this.JUMLAH_SEMUA_KASUS_TUBERKOLOSIS_TERDAFTAR_DAN_DIOBATI_LAKI_LAKI == '') ? 0 : this.JUMLAH_SEMUA_KASUS_TUBERKOLOSIS_TERDAFTAR_DAN_DIOBATI_LAKI_LAKI)+
        parseInt((this.JUMLAH_SEMUA_KASUS_TUBERKOLOSIS_TERDAFTAR_DAN_DIOBATI_PEREMPUAN == '') ? 0 : this.JUMLAH_SEMUA_KASUS_TUBERKOLOSIS_TERDAFTAR_DAN_DIOBATI_PEREMPUAN);
    },
    persenCRTBLaki: function() {      
      this.ANGKA_KESEBUHAN_CURE_RATE_TUBERKOLOSIS_PARU_TERKONFIRMASI_BAKTERIOLOGIS_LAKI_LAKI_PERSEN = 
        parseInt((this.ANGKA_KESEBUHAN_CURE_RATE_TUBERKOLOSIS_PARU_TERKONFIRMASI_BAKTERIOLOGIS_LAKI_LAKI_JUMLAH == '') ? 0 : this.ANGKA_KESEBUHAN_CURE_RATE_TUBERKOLOSIS_PARU_TERKONFIRMASI_BAKTERIOLOGIS_LAKI_LAKI_JUMLAH)/
        parseInt((this.JUMLAH_KASUS_TUBERKOLOSIS_PARU_TERKONFIRMASI_BAKTERIOLOGIS_YANG_TERDAFTAR_DAN_DIOBATI_LAKI_LAKI == '') ? 0 : this.JUMLAH_KASUS_TUBERKOLOSIS_PARU_TERKONFIRMASI_BAKTERIOLOGIS_YANG_TERDAFTAR_DAN_DIOBATI_LAKI_LAKI)*100;
    },
    persenCRTBPr: function() {      
      this.ANGKA_KESEBUHAN_CURE_RATE_TUBERKOLOSIS_PARU_TERKONFIRMASI_BAKTERIOLOGIS_PEREMPUAN_PERSEN = 
        parseInt((this.ANGKA_KESEBUHAN_CURE_RATE_TUBERKOLOSIS_PARU_TERKONFIRMASI_BAKTERIOLOGIS_PEREMPUAN_JUMLAH == '') ? 0 : this.ANGKA_KESEBUHAN_CURE_RATE_TUBERKOLOSIS_PARU_TERKONFIRMASI_BAKTERIOLOGIS_PEREMPUAN_JUMLAH)/
        parseInt((this.JUMLAH_KASUS_TUBERKOLOSIS_PARU_TERKONFIRMASI_BAKTERIOLOGIS_YANG_TERDAFTAR_DAN_DIOBATI_PEREMPUAN == '') ? 0 : this.JUMLAH_KASUS_TUBERKOLOSIS_PARU_TERKONFIRMASI_BAKTERIOLOGIS_YANG_TERDAFTAR_DAN_DIOBATI_PEREMPUAN)*100;

      this.ANGKA_KESEBUHAN_CURE_RATE_TUBERKOLOSIS_PARU_TERKONFIRMASI_BAKTERIOLOGIS_LAKI_LAKI_PEREMPUAN_JUMLAH = 
        parseInt((this.ANGKA_KESEBUHAN_CURE_RATE_TUBERKOLOSIS_PARU_TERKONFIRMASI_BAKTERIOLOGIS_LAKI_LAKI_JUMLAH == '') ? 0 : this.ANGKA_KESEBUHAN_CURE_RATE_TUBERKOLOSIS_PARU_TERKONFIRMASI_BAKTERIOLOGIS_LAKI_LAKI_JUMLAH)+
        parseInt((this.ANGKA_KESEBUHAN_CURE_RATE_TUBERKOLOSIS_PARU_TERKONFIRMASI_BAKTERIOLOGIS_PEREMPUAN_JUMLAH == '') ? 0 : this.ANGKA_KESEBUHAN_CURE_RATE_TUBERKOLOSIS_PARU_TERKONFIRMASI_BAKTERIOLOGIS_PEREMPUAN_JUMLAH);
    }, 
    persenCRTBLakiPr: function() {      
      this.ANGKA_KESEBUHAN_CURE_RATE_TUBERKOLOSIS_PARU_TERKONFIRMASI_BAKTERIOLOGIS_LAKI_LAKI_PEREMPUAN_PERSEN = 
        parseInt((this.ANGKA_KESEBUHAN_CURE_RATE_TUBERKOLOSIS_PARU_TERKONFIRMASI_BAKTERIOLOGIS_LAKI_LAKI_PEREMPUAN_JUMLAH == '') ? 0 : this.ANGKA_KESEBUHAN_CURE_RATE_TUBERKOLOSIS_PARU_TERKONFIRMASI_BAKTERIOLOGIS_LAKI_LAKI_PEREMPUAN_JUMLAH)/
        parseInt((this.JUMLAH_SEMUA_KASUS_TUBERKOLOSIS_TERDAFTAR_DAN_DIOBATI_LAKI_LAKI_PEREMPUAN == '') ? 0 : this.JUMLAH_SEMUA_KASUS_TUBERKOLOSIS_TERDAFTAR_DAN_DIOBATI_LAKI_LAKI_PEREMPUAN)*100;
    },  
    persenCompRateTBLaki: function() {      
      this.ANGKA_PENGOBATAN_LENGKAP_COMPLETE_RATE_SEMUA_KASUS_TUBERKOLOSIS_LAKI_LAKI_PERSEN = 
        parseInt((this.ANGKA_PENGOBATAN_LENGKAP_COMPLETE_RATE_SEMUA_KASUS_TUBERKOLOSIS_LAKI_LAKI_JUMLAH == '') ? 0 : this.ANGKA_PENGOBATAN_LENGKAP_COMPLETE_RATE_SEMUA_KASUS_TUBERKOLOSIS_LAKI_LAKI_JUMLAH)/
        parseInt((this.JUMLAH_SEMUA_KASUS_TUBERKOLOSIS_TERDAFTAR_DAN_DIOBATI_LAKI_LAKI == '') ? 0 : this.JUMLAH_SEMUA_KASUS_TUBERKOLOSIS_TERDAFTAR_DAN_DIOBATI_LAKI_LAKI)*100;
    },
    persenCompRateTBPr: function() {      
      this.ANGKA_PENGOBATAN_LENGKAP_COMPLETE_RATE_SEMUA_KASUS_TUBERKOLOSIS_PEREMPUAN_PERSEN = 
        parseInt((this.ANGKA_PENGOBATAN_LENGKAP_COMPLETE_RATE_SEMUA_KASUS_TUBERKOLOSIS_PEREMPUAN_JUMLAH == '') ? 0 : this.ANGKA_PENGOBATAN_LENGKAP_COMPLETE_RATE_SEMUA_KASUS_TUBERKOLOSIS_PEREMPUAN_JUMLAH)/
        parseInt((this.JUMLAH_SEMUA_KASUS_TUBERKOLOSIS_TERDAFTAR_DAN_DIOBATI_PEREMPUAN == '') ? 0 : this.JUMLAH_SEMUA_KASUS_TUBERKOLOSIS_TERDAFTAR_DAN_DIOBATI_PEREMPUAN)*100;

      this.ANGKA_PENGOBATAN_LENGKAP_COMPLETE_RATE_SEMUA_KASUS_TUBERKOLOSIS_LAKI_LAKI_PEREMPUAN_JUMLAH = 
        parseInt((this.ANGKA_PENGOBATAN_LENGKAP_COMPLETE_RATE_SEMUA_KASUS_TUBERKOLOSIS_LAKI_LAKI_JUMLAH == '') ? 0 : this.ANGKA_PENGOBATAN_LENGKAP_COMPLETE_RATE_SEMUA_KASUS_TUBERKOLOSIS_LAKI_LAKI_JUMLAH)+
        parseInt((this.ANGKA_PENGOBATAN_LENGKAP_COMPLETE_RATE_SEMUA_KASUS_TUBERKOLOSIS_PEREMPUAN_JUMLAH == '') ? 0 : this.ANGKA_PENGOBATAN_LENGKAP_COMPLETE_RATE_SEMUA_KASUS_TUBERKOLOSIS_PEREMPUAN_JUMLAH);
    }, 
    persenCompRateTBLakiPr: function() {      
      this.ANGKA_PENGOBATAN_LENGKAP_COMPLETE_RATE_SEMUA_KASUS_TUBERKOLOSIS_LAKI_LAKI_PEREMPUAN_PERSEN = 
        parseInt((this.ANGKA_PENGOBATAN_LENGKAP_COMPLETE_RATE_SEMUA_KASUS_TUBERKOLOSIS_LAKI_LAKI_PEREMPUAN_JUMLAH == '') ? 0 : this.ANGKA_PENGOBATAN_LENGKAP_COMPLETE_RATE_SEMUA_KASUS_TUBERKOLOSIS_LAKI_LAKI_PEREMPUAN_JUMLAH)/
        parseInt((this.JUMLAH_SEMUA_KASUS_TUBERKOLOSIS_TERDAFTAR_DAN_DIOBATI_LAKI_LAKI_PEREMPUAN == '') ? 0 : this.JUMLAH_SEMUA_KASUS_TUBERKOLOSIS_TERDAFTAR_DAN_DIOBATI_LAKI_LAKI_PEREMPUAN)*100;

      this.ANGKA_KEBERHASILAN_PENGOBATAN_SUCCESS_RATE_SEMUA_KASUS_TUBERKOLOSIS_LAKI_LAKI_JUMLAH = 
        parseInt((this.ANGKA_KESEBUHAN_CURE_RATE_TUBERKOLOSIS_PARU_TERKONFIRMASI_BAKTERIOLOGIS_LAKI_LAKI_JUMLAH == '') ? 0 : this.ANGKA_KESEBUHAN_CURE_RATE_TUBERKOLOSIS_PARU_TERKONFIRMASI_BAKTERIOLOGIS_LAKI_LAKI_JUMLAH)+
        parseInt((this.ANGKA_PENGOBATAN_LENGKAP_COMPLETE_RATE_SEMUA_KASUS_TUBERKOLOSIS_LAKI_LAKI_JUMLAH == '') ? 0 : this.ANGKA_PENGOBATAN_LENGKAP_COMPLETE_RATE_SEMUA_KASUS_TUBERKOLOSIS_LAKI_LAKI_JUMLAH);

      this.ANGKA_KEBERHASILAN_PENGOBATAN_SUCCESS_RATE_SEMUA_KASUS_TUBERKOLOSIS_PEREMPUAN_JUMLAH = 
        parseInt((this.ANGKA_KESEBUHAN_CURE_RATE_TUBERKOLOSIS_PARU_TERKONFIRMASI_BAKTERIOLOGIS_PEREMPUAN_JUMLAH == '') ? 0 : this.ANGKA_KESEBUHAN_CURE_RATE_TUBERKOLOSIS_PARU_TERKONFIRMASI_BAKTERIOLOGIS_PEREMPUAN_JUMLAH)+
        parseInt((this.ANGKA_PENGOBATAN_LENGKAP_COMPLETE_RATE_SEMUA_KASUS_TUBERKOLOSIS_PEREMPUAN_JUMLAH == '') ? 0 : this.ANGKA_PENGOBATAN_LENGKAP_COMPLETE_RATE_SEMUA_KASUS_TUBERKOLOSIS_PEREMPUAN_JUMLAH);
    },
    persenSRTBLaki: function() {      
      this.ANGKA_KEBERHASILAN_PENGOBATAN_SUCCESS_RATE_SEMUA_KASUS_TUBERKOLOSIS_LAKI_LAKI_PERSEN = 
        parseInt((this.ANGKA_KEBERHASILAN_PENGOBATAN_SUCCESS_RATE_SEMUA_KASUS_TUBERKOLOSIS_LAKI_LAKI_JUMLAH == '') ? 0 : this.ANGKA_KEBERHASILAN_PENGOBATAN_SUCCESS_RATE_SEMUA_KASUS_TUBERKOLOSIS_LAKI_LAKI_JUMLAH)/
        parseInt((this.JUMLAH_SEMUA_KASUS_TUBERKOLOSIS_TERDAFTAR_DAN_DIOBATI_LAKI_LAKI == '') ? 0 : this.JUMLAH_SEMUA_KASUS_TUBERKOLOSIS_TERDAFTAR_DAN_DIOBATI_LAKI_LAKI)*100;
    },
    persenSRTBPr: function() {      
      this.ANGKA_KEBERHASILAN_PENGOBATAN_SUCCESS_RATE_SEMUA_KASUS_TUBERKOLOSIS_PEREMPUAN_PERSEN = 
        parseInt((this.ANGKA_KEBERHASILAN_PENGOBATAN_SUCCESS_RATE_SEMUA_KASUS_TUBERKOLOSIS_PEREMPUAN_JUMLAH == '') ? 0 : this.ANGKA_KEBERHASILAN_PENGOBATAN_SUCCESS_RATE_SEMUA_KASUS_TUBERKOLOSIS_PEREMPUAN_JUMLAH)/
        parseInt((this.JUMLAH_SEMUA_KASUS_TUBERKOLOSIS_TERDAFTAR_DAN_DIOBATI_PEREMPUAN == '') ? 0 : this.JUMLAH_SEMUA_KASUS_TUBERKOLOSIS_TERDAFTAR_DAN_DIOBATI_PEREMPUAN)*100;

      this.ANGKA_KEBERHASILAN_PENGOBATAN_SUCCESS_RATE_SEMUA_KASUS_TUBERKOLOSIS_LAKI_LAKI_PEREMPUAN_JUMLAH = 
        parseInt((this.ANGKA_KEBERHASILAN_PENGOBATAN_SUCCESS_RATE_SEMUA_KASUS_TUBERKOLOSIS_LAKI_LAKI_JUMLAH == '') ? 0 : this.ANGKA_KEBERHASILAN_PENGOBATAN_SUCCESS_RATE_SEMUA_KASUS_TUBERKOLOSIS_LAKI_LAKI_JUMLAH)+
        parseInt((this.ANGKA_KEBERHASILAN_PENGOBATAN_SUCCESS_RATE_SEMUA_KASUS_TUBERKOLOSIS_PEREMPUAN_JUMLAH == '') ? 0 : this.ANGKA_KEBERHASILAN_PENGOBATAN_SUCCESS_RATE_SEMUA_KASUS_TUBERKOLOSIS_PEREMPUAN_JUMLAH);
    },
    persenSRTBLakiPr: function() {      
      this.ANGKA_KEBERHASILAN_PENGOBATAN_SUCCESS_RATE_SEMUA_KASUS_TUBERKOLOSIS_LAKI_LAKI_PEREMPUAN_PERSEN = 
        parseInt((this.ANGKA_KEBERHASILAN_PENGOBATAN_SUCCESS_RATE_SEMUA_KASUS_TUBERKOLOSIS_LAKI_LAKI_PEREMPUAN_JUMLAH == '') ? 0 : this.ANGKA_KEBERHASILAN_PENGOBATAN_SUCCESS_RATE_SEMUA_KASUS_TUBERKOLOSIS_LAKI_LAKI_PEREMPUAN_JUMLAH)/
        parseInt((this.JUMLAH_SEMUA_KASUS_TUBERKOLOSIS_TERDAFTAR_DAN_DIOBATI_LAKI_LAKI_PEREMPUAN == '') ? 0 : this.JUMLAH_SEMUA_KASUS_TUBERKOLOSIS_TERDAFTAR_DAN_DIOBATI_LAKI_LAKI_PEREMPUAN)*100;
    },
    persenJmlKematianTB: function() {      
      this.JUMLAH_KEMATIAN_SELAMA_PENGOBATAN_TUBERKOLOSIS_PERSEN = 
        parseInt((this.JUMLAH_KEMATIAN_SELAMA_PENGOBATAN_TUBERKOLOSIS_JUMLAH == '') ? 0 : this.JUMLAH_KEMATIAN_SELAMA_PENGOBATAN_TUBERKOLOSIS_JUMLAH)/
        parseInt((this.JUMLAH_SEMUA_KASUS_TUBERKOLOSIS_TERDAFTAR_DAN_DIOBATI_LAKI_LAKI_PEREMPUAN == '') ? 0 : this.JUMLAH_SEMUA_KASUS_TUBERKOLOSIS_TERDAFTAR_DAN_DIOBATI_LAKI_LAKI_PEREMPUAN)*100;
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
            if(this.JUMLAH_KASUS_TUBERKOLOSIS_PARU_TERKONFIRMASI_BAKTERIOLOGIS_YANG_TERDAFTAR_DAN_DIOBATI_LAKI_LAKI != 0) {
              this.isUpdate = true;
            }                
          })  
          .catch(function (error) {
            console.log(error);
          });        
     
      });

    }

  },
  components: {},
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