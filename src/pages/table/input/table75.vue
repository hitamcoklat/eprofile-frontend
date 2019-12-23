<template>
<!-- Main content -->
<div class="content">
  <div class="row">        
    <div class="col-md-12">
      <div class="box box-info">
        <div class="box-header with-border">
          <div class="alert alert-info alert-dismissible">
            <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
            <h4>Tabel 75 - PERSENTASE TEMPAT-TEMPAT UMUM (TTU) MEMENUHI SYARAT KESEHATAN MENURUT KECAMATAN DAN PUSKESMAS </h4>
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
                <div class="col-sm-4">
                  <span class="badge bg-green">a. TTU Yang Ada Sarana Pendidikan </span>
                </div>
              </div> 
              <div class="form-group">
                <label for="" class="col-sm-6 control-label">SD&#47;MI</label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" disabled id="" v-on:blur="jmlTTUygADA()" v-model="SEKOLAH_SD_MI_JUMLAH" name="sekolah_sd_mi_jumlah" placeholder="">
                </div>
              </div>
              <div class="form-group">
                <label for="" class="col-sm-6 control-label">SMP&#47;MTs</label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" disabled id="" v-on:blur="jmlTTUygADA()" v-model="SEKOLAH_SMP_MTS_JUMLAH" name="sekolah_smp_mts_jumlah" placeholder="">
                </div>
              </div>
              <div class="form-group">
                <label for="" class="col-sm-6 control-label">SMA&#47;MA</label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" disabled id="" v-on:blur="jmlTTUygADA()" v-model="SEKOLAH_SMA_MA_JUMLAH" name="sekolah_sma_ma_jumlah" placeholder="">
                </div>
              </div>
              <div class="form-group">
                <label for="" class="col-sm-6 control-label">Sarana Kesehatan Puskesmas</label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" id="" v-on:blur="jmlTTUygADA()" v-model="TTU_YANG_ADA_SARANA_KESEHATAN_PUSKESMAS" name="ttu_yang_ada_sarana_kesehatan_puskesmas" placeholder="">
                </div>
              </div> 
              <div class="form-group">
                <label for="" class="col-sm-6 control-label">Sarana Kesehatan Rumah Sakit Umum</label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" id="" v-on:blur="jmlTTUygADA()" v-model="TTU_YANG_ADA_SARANA_KESEHATAN_RUMAH_SAKIT_UMUM" name="ttu_yang_ada_sarana_kesehatan_rs" placeholder="">
                </div>
              </div> 
              <div class="form-group">
                <label for="" class="col-sm-6 control-label">Tempat Ibadah</label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" id="" v-on:blur="jmlTTUygADA()" v-model="TTU_YANG_ADA_TEMPAT_IBADAH" name="ttu_yang_ada_tempat_ibadah" placeholder="">
                </div>
              </div>
              <div class="form-group">
                <label for="" class="col-sm-6 control-label">Pasar</label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" id="" v-on:blur="jmlTTUygADA()" v-model="TTU_YANG_ADA_PASAR" name="ttu_yang_ada_pasar" placeholder="">
                </div>
              </div> 
              <div class="form-group">
                <label for="" class="col-sm-6 control-label">Jumlah TTU Yang Ada</label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" id="" v-on:blur="persenJmlTotal()" v-model="TTU_YANG_ADA_JUMLAH_TTU_YANG_ADA" name="ttu_yang_ada_jumlah_ttu_yang_ada" placeholder="" disabled="true">
                </div>
              </div> 
              <div class="form-group">
                <div class="col-sm-4">
                  <span class="badge bg-green">b. TTU Memenuhi Syarat Kesehatan </span>
                </div>
              </div> 
              <div class="form-group">
                <label for="" class="col-sm-6 control-label">Sarana Pendidikan SD&#47;MI Jumlah</label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" id="" v-on:blur="persenSarpenSDMI()" v-model="TTU_MS_KESEHATAN_SARANA_PENDIDIKAN_SD_MI_JUMLAH" name="ttu_ms_kesehatan_sarana_pendidikan_sdmi_jumlah" placeholder="">
                </div>
              </div>
              <div class="form-group">
                <label for="" class="col-sm-6 control-label">Sarana Pendidikan SD&#47;MI Persen</label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" id="" v-model="TTU_MS_KESEHATAN_SARANA_PENDIDIKAN_SD_MI_PERSEN" name="ttu_ms_kesehatan_sarana_pendidikan_sd_mi_persen" placeholder="" disabled="true">
                </div>
              </div>
              <div class="form-group">
                <label for="" class="col-sm-6 control-label">Sarana Pendidikan SMP&#47;MTs Jumlah</label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" id="" v-on:blur="persenSarpenSMPMTS()" v-model="TTU_MS_KESEHATAN_SARANA_PENDIDIKAN_SMP_MTS_JUMLAH" name="ttu_ms_kesehatan_sarana_pendidikan_smp_mts_jumlah" placeholder="">
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label for="" class="col-sm-6 control-label">Sarana Pendidikan SMP&#47;MTs Persen</label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" id="" v-model="TTU_MS_KESEHATAN_SARANA_PENDIDIKAN_SMP_MTS_PERSEN" name="ttu_ms_kesehatan_sarana_pendidikan_smp_mts_persen" placeholder="" disabled="true">
                </div>
              </div>
              <div class="form-group">
                <label for="" class="col-sm-6 control-label">Sarana Pendidikan SMA&#47;MA Jumlah</label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" id="" v-on:blur="persenSarpenSMAMA()" v-model="TTU_MS_KESEHATAN_SARANA_PENDIDIKAN_SMA_MA_JUMLAH" name="ttu_ms_kesehatan_sarana_pendidikan_sma_ma_jumlah" placeholder="">
                </div>
              </div>
              <div class="form-group">
                <label for="" class="col-sm-6 control-label">Sarana Pendidikan SMA&#47;MA Persen</label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" id="" v-model="TTU_MS_KESEHATAN_SARANA_PENDIDIKAN_SMA_MA_PERSEN" name="ttu_ms_kesehatan_sarana_pendidikan_sma_ma_persen" placeholder="" disabled="true">
                </div>
              </div>
              <div class="form-group">
                <label for="" class="col-sm-6 control-label">Sarana Kesehatan Puskesmas Jumlah</label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" id="" v-on:blur="persenSarKesPKM()" v-model="TTU_MS_KESEHATAN_SARANA_KESEHATAN_PUSKESMAS_JUMLAH" name="ttu_ms_kesehatan_sarana_kesehatan_puskesmas_jumlah" placeholder="">
                </div>
              </div>
              <div class="form-group">
                <label for="" class="col-sm-6 control-label">Sarana Kesehatan Puskesmas Persen</label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" id="" v-model="TTU_MS_KESEHATAN_SARANA_KESEHATAN_PUSKESMAS_PERSEN" name="ttu_ms_kesehatan_sarana_kesehatan_puskesmas_persen" placeholder="" disabled="true">
                </div>
              </div>
              <div class="form-group">
                <label for="" class="col-sm-6 control-label">Sarana Kesehatan Rumah Sakit Jumlah</label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" id="" v-on:blur="persenSarKesRS()" v-model="TTU_MS_KESEHATAN_SARANA_KESEHATAN_RUMAH_SAKIT_JUMLAH" name="ttu_ms_kesehatan_sarana_kesehatan_rumah_sakit_jumlah" placeholder="">
                </div>
              </div>
              <div class="form-group">
                <label for="" class="col-sm-6 control-label">Sarana Kesehatan Rumah Sakit Persen</label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" id="" v-model="TTU_MS_KESEHATAN_SARANA_KESEHATAN_RUMAH_SAKIT_PERSEN" name="ttu_ms_kesehatan_sarana_kesehatan_rumah_sakit_persen" placeholder="" disabled="true">
                </div>
              </div>
              <div class="form-group">
                <label for="" class="col-sm-6 control-label">Tempat Ibadah Jumlah</label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" id="" v-on:blur="persenTempatIbadah()" v-model="TTU_MS_KESEHATAN_TEMPAT_IBADAH_JUMLAH" name="ttu_ms_kesehatan_tempat_ibadah_jumlah" placeholder="">
                </div>
              </div>
              <div class="form-group">
                <label for="" class="col-sm-6 control-label">Tempat Ibadah Persen</label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" id="" v-model="TTU_MS_KESEHATAN_TEMPAT_IBADAH_PERSEN" name="ttu_ms_kesehatan_tempat_ibadah_persen" placeholder="" disabled="true">
                </div>
              </div>
              <div class="form-group">
                <label for="" class="col-sm-6 control-label">Pasar Jumlah</label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" id="" v-on:blur="persenPasar()" v-model="TTU_MS_KESEHATAN_PASAR_JUMLAH" name="ttu_ms_kesehatan_pasar_jumlah" placeholder="">
                </div>
              </div>
              <div class="form-group">
                <label for="" class="col-sm-6 control-label">Pasar Persen</label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" id="" v-model="TTU_MS_KESEHATAN_PASAR_PERSEN" name="ttu_ms_kesehatan_pasar_persen" placeholder="" disabled="true">
                </div>
              </div>
              <div class="form-group">
                <label for="" class="col-sm-6 control-label">Jumlah Total</label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" id="" v-on:blur="persenJmlTotal()" v-model="TTU_MS_KESEHATAN_JUMLAH_TOTAL_JUMLAH" name="ttu_ms_kesehatan_jumlah_total" placeholder="" >
                </div>
              </div>
              <div class="form-group">
                <label for="" class="col-sm-6 control-label">Jumlah Total Persen</label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" id="" v-model="TTU_MS_KESEHATAN_JUMLAH_TOTAL_PERSEN" name="ttu_ms_kesehatan_jumlah_total_persen" placeholder="" disabled="true">
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
            <router-link to="/table75"><a class="btn btn-success btn-md"><i class="fa fa-fw fa-arrow-left"></i> Kembali</a></router-link>
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
  name: 'Table75',
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
      SEKOLAH_SD_MI_JUMLAH: 0,
      SEKOLAH_SMP_MTS_JUMLAH: 0,
      SEKOLAH_SMA_MA_JUMLAH: 0,
      TTU_YANG_ADA_SARANA_KESEHATAN_PUSKESMAS: 0,
      TTU_YANG_ADA_SARANA_KESEHATAN_RUMAH_SAKIT_UMUM: 0,
      TTU_YANG_ADA_TEMPAT_IBADAH: 0,
      TTU_YANG_ADA_PASAR: 0,
      TTU_YANG_ADA_JUMLAH_TTU_YANG_ADA: 0,
      TTU_MS_KESEHATAN_SARANA_PENDIDIKAN_SD_MI_JUMLAH: 0,
      TTU_MS_KESEHATAN_SARANA_PENDIDIKAN_SD_MI_PERSEN: 0,
      TTU_MS_KESEHATAN_SARANA_PENDIDIKAN_SMP_MTS_JUMLAH: 0,
      TTU_MS_KESEHATAN_SARANA_PENDIDIKAN_SMP_MTS_PERSEN: 0,
      TTU_MS_KESEHATAN_SARANA_PENDIDIKAN_SMA_MA_JUMLAH: 0,
      TTU_MS_KESEHATAN_SARANA_PENDIDIKAN_SMA_MA_PERSEN: 0,
      TTU_MS_KESEHATAN_SARANA_KESEHATAN_PUSKESMAS_JUMLAH: 0,
      TTU_MS_KESEHATAN_SARANA_KESEHATAN_PUSKESMAS_PERSEN: 0,
      TTU_MS_KESEHATAN_SARANA_KESEHATAN_RUMAH_SAKIT_JUMLAH: 0,
      TTU_MS_KESEHATAN_SARANA_KESEHATAN_RUMAH_SAKIT_PERSEN: 0,
      TTU_MS_KESEHATAN_TEMPAT_IBADAH_JUMLAH: 0,
      TTU_MS_KESEHATAN_TEMPAT_IBADAH_PERSEN: 0,
      TTU_MS_KESEHATAN_PASAR_JUMLAH: 0,
      TTU_MS_KESEHATAN_PASAR_PERSEN: 0,
      TTU_MS_KESEHATAN_JUMLAH_TOTAL_JUMLAH: 0,
      TTU_MS_KESEHATAN_JUMLAH_TOTAL_PERSEN: 0,
      isUpdate: false  
    }
  },
  methods: {
    initialData: function() {
      return {
        SEKOLAH_SD_MI_JUMLAH: 0,
        SEKOLAH_SMP_MTS_JUMLAH: 0,
        SEKOLAH_SMA_MA_JUMLAH: 0,
        TTU_YANG_ADA_SARANA_KESEHATAN_PUSKESMAS: 0,
        TTU_YANG_ADA_SARANA_KESEHATAN_RUMAH_SAKIT_UMUM: 0,
        TTU_YANG_ADA_TEMPAT_IBADAH: 0,
        TTU_YANG_ADA_PASAR: 0,
        TTU_YANG_ADA_JUMLAH_TTU_YANG_ADA: 0,
        TTU_MS_KESEHATAN_SARANA_PENDIDIKAN_SD_MI_JUMLAH: 0,
        TTU_MS_KESEHATAN_SARANA_PENDIDIKAN_SD_MI_PERSEN: 0,
        TTU_MS_KESEHATAN_SARANA_PENDIDIKAN_SMP_MTS_JUMLAH: 0,
        TTU_MS_KESEHATAN_SARANA_PENDIDIKAN_SMP_MTS_PERSEN: 0,
        TTU_MS_KESEHATAN_SARANA_PENDIDIKAN_SMA_MA_JUMLAH: 0,
        TTU_MS_KESEHATAN_SARANA_PENDIDIKAN_SMA_MA_PERSEN: 0,
        TTU_MS_KESEHATAN_SARANA_KESEHATAN_PUSKESMAS_JUMLAH: 0,
        TTU_MS_KESEHATAN_SARANA_KESEHATAN_PUSKESMAS_PERSEN: 0,
        TTU_MS_KESEHATAN_SARANA_KESEHATAN_RUMAH_SAKIT_JUMLAH: 0,
        TTU_MS_KESEHATAN_SARANA_KESEHATAN_RUMAH_SAKIT_PERSEN: 0,
        TTU_MS_KESEHATAN_TEMPAT_IBADAH_JUMLAH: 0,
        TTU_MS_KESEHATAN_TEMPAT_IBADAH_PERSEN: 0,
        TTU_MS_KESEHATAN_PASAR_JUMLAH: 0,
        TTU_MS_KESEHATAN_PASAR_PERSEN: 0,
        TTU_MS_KESEHATAN_JUMLAH_TOTAL_JUMLAH: 0,
        TTU_MS_KESEHATAN_JUMLAH_TOTAL_PERSEN: 0,       
      }
    },
    checkToggleRekapBtn: function(value) {
      if(value.rekapToggle == true) {
        this.PILIH_BULAN = '12';
        this.dataRekap = value.rekapToggle;
      }
      else this.PILIH_BULAN = '1'
    },            
    jmlTTUygADA: function() {      
      this.TTU_YANG_ADA_JUMLAH_TTU_YANG_ADA = 
        parseInt((this.SEKOLAH_SD_MI_JUMLAH == '') ? 0 : this.SEKOLAH_SD_MI_JUMLAH)+
        parseInt((this.SEKOLAH_SMP_MTS_JUMLAH == '') ? 0 : this.SEKOLAH_SMP_MTS_JUMLAH)+    
        parseInt((this.SEKOLAH_SMA_MA_JUMLAH == '') ? 0 : this.SEKOLAH_SMA_MA_JUMLAH)+    
        parseInt((this.TTU_YANG_ADA_SARANA_KESEHATAN_PUSKESMAS == '') ? 0 : this.TTU_YANG_ADA_SARANA_KESEHATAN_PUSKESMAS)+    
        parseInt((this.TTU_YANG_ADA_SARANA_KESEHATAN_RUMAH_SAKIT_UMUM == '') ? 0 : this.TTU_YANG_ADA_SARANA_KESEHATAN_RUMAH_SAKIT_UMUM)+    
        parseInt((this.TTU_YANG_ADA_TEMPAT_IBADAH == '') ? 0 : this.TTU_YANG_ADA_TEMPAT_IBADAH)+    
        parseInt((this.TTU_YANG_ADA_PASAR == '') ? 0 : this.TTU_YANG_ADA_PASAR);    
    },
    persenSarpenSDMI: function() {      
      this.TTU_MS_KESEHATAN_SARANA_PENDIDIKAN_SD_MI_PERSEN = 
        parseInt((this.TTU_MS_KESEHATAN_SARANA_PENDIDIKAN_SD_MI_JUMLAH == '') ? 0 : this.TTU_MS_KESEHATAN_SARANA_PENDIDIKAN_SD_MI_JUMLAH)/
        parseInt((this.SEKOLAH_SD_MI_JUMLAH == '') ? 0 : this.SEKOLAH_SD_MI_JUMLAH)*100 ;    
    },
    persenSarpenSMPMTS: function() {      
      this.TTU_MS_KESEHATAN_SARANA_PENDIDIKAN_SMP_MTS_PERSEN= 
        parseInt((this.TTU_MS_KESEHATAN_SARANA_PENDIDIKAN_SMP_MTS_JUMLAH == '') ? 0 : this.TTU_MS_KESEHATAN_SARANA_PENDIDIKAN_SMP_MTS_JUMLAH)/
        parseInt((this.SEKOLAH_SMP_MTS_JUMLAH == '') ? 0 : this.SEKOLAH_SMP_MTS_JUMLAH)*100 ;    
    },
    persenSarpenSMAMA: function() {      
      this.TTU_MS_KESEHATAN_SARANA_PENDIDIKAN_SMA_MA_PERSEN= 
        parseInt((this.TTU_MS_KESEHATAN_SARANA_PENDIDIKAN_SMA_MA_JUMLAH == '') ? 0 : this.TTU_MS_KESEHATAN_SARANA_PENDIDIKAN_SMA_MA_JUMLAH)/
        parseInt((this.SEKOLAH_SMA_MA_JUMLAH == '') ? 0 : this.SEKOLAH_SMA_MA_JUMLAH)*100 ;    
    },
    persenSarKesPKM: function() {      
      this.TTU_MS_KESEHATAN_SARANA_KESEHATAN_PUSKESMAS_PERSEN= 
        parseInt((this.TTU_MS_KESEHATAN_SARANA_KESEHATAN_PUSKESMAS_JUMLAH == '') ? 0 : this.TTU_MS_KESEHATAN_SARANA_KESEHATAN_PUSKESMAS_JUMLAH)/
        parseInt((this.TTU_YANG_ADA_SARANA_KESEHATAN_PUSKESMAS == '') ? 0 : this.TTU_YANG_ADA_SARANA_KESEHATAN_PUSKESMAS)*100 ;    
    },  
    persenSarKesRS: function() {      
      this.TTU_MS_KESEHATAN_SARANA_KESEHATAN_RUMAH_SAKIT_PERSEN= 
        parseInt((this.TTU_MS_KESEHATAN_SARANA_KESEHATAN_RUMAH_SAKIT_JUMLAH == '') ? 0 : this.TTU_MS_KESEHATAN_SARANA_KESEHATAN_RUMAH_SAKIT_JUMLAH)/
        parseInt((this.TTU_YANG_ADA_SARANA_KESEHATAN_RUMAH_SAKIT_UMUM == '') ? 0 : this.TTU_YANG_ADA_SARANA_KESEHATAN_RUMAH_SAKIT_UMUM)*100 ;    
    },
    persenTempatIbadah: function() {      
      this.TTU_MS_KESEHATAN_TEMPAT_IBADAH_PERSEN= 
        parseInt((this.TTU_MS_KESEHATAN_TEMPAT_IBADAH_JUMLAH == '') ? 0 : this.TTU_MS_KESEHATAN_TEMPAT_IBADAH_JUMLAH)/
        parseInt((this.TTU_YANG_ADA_TEMPAT_IBADAH == '') ? 0 : this.TTU_YANG_ADA_TEMPAT_IBADAH)*100 ;    
    },
    persenPasar: function() {      
      this.TTU_MS_KESEHATAN_PASAR_PERSEN= 
        parseInt((this.TTU_MS_KESEHATAN_PASAR_JUMLAH == '') ? 0 : this.TTU_MS_KESEHATAN_PASAR_JUMLAH)/
        parseInt((this.TTU_YANG_ADA_PASAR == '') ? 0 : this.TTU_YANG_ADA_PASAR)*100 ;    
      this.TTU_MS_KESEHATAN_JUMLAH_TOTAL_JUMLAH = 
        parseInt((this.TTU_MS_KESEHATAN_SARANA_PENDIDIKAN_SD_MI_JUMLAH == '') ? 0 : this.TTU_MS_KESEHATAN_SARANA_PENDIDIKAN_SD_MI_JUMLAH)+
        parseInt((this.TTU_MS_KESEHATAN_SARANA_PENDIDIKAN_SMP_MTS_JUMLAH == '') ? 0 : this.TTU_MS_KESEHATAN_SARANA_PENDIDIKAN_SMP_MTS_JUMLAH)+    
        parseInt((this.TTU_MS_KESEHATAN_SARANA_PENDIDIKAN_SMA_MA_JUMLAH == '') ? 0 : this.TTU_MS_KESEHATAN_SARANA_PENDIDIKAN_SMA_MA_JUMLAH)+    
        parseInt((this.TTU_MS_KESEHATAN_SARANA_KESEHATAN_PUSKESMAS_JUMLAH == '') ? 0 : this.TTU_MS_KESEHATAN_SARANA_KESEHATAN_PUSKESMAS_JUMLAH)+    
        parseInt((this.TTU_MS_KESEHATAN_SARANA_KESEHATAN_RUMAH_SAKIT_JUMLAH == '') ? 0 : this.TTU_MS_KESEHATAN_SARANA_KESEHATAN_RUMAH_SAKIT_JUMLAH)+    
        parseInt((this.TTU_MS_KESEHATAN_TEMPAT_IBADAH_JUMLAH == '') ? 0 : this.TTU_MS_KESEHATAN_TEMPAT_IBADAH_JUMLAH)+    
        parseInt((this.TTU_MS_KESEHATAN_PASAR_JUMLAH == '') ? 0 : this.TTU_MS_KESEHATAN_PASAR_JUMLAH);    
    }, 
    persenJmlTotal: function() {      

      this.TTU_MS_KESEHATAN_JUMLAH_TOTAL_PERSEN= 
        parseInt((this.TTU_MS_KESEHATAN_JUMLAH_TOTAL_JUMLAH == '') ? 0 : this.TTU_MS_KESEHATAN_JUMLAH_TOTAL_JUMLAH)/
        parseInt((this.TTU_YANG_ADA_JUMLAH_TTU_YANG_ADA == '') ? 0 : this.TTU_YANG_ADA_JUMLAH_TTU_YANG_ADA)*100 ;    
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
      delete data.SEKOLAH_SD_MI_JUMLAH;
      delete data.SEKOLAH_SMP_MTS_JUMLAH;
      delete data.SEKOLAH_SMA_MA_JUMLAH;
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
            if(this.TTU_MS_KESEHATAN_SARANA_PENDIDIKAN_SMA_MA_PERSEN != 0) {
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