<!-- Main content -->
<template>
<div class="content">
  <div class="row">        
    <div class="col-md-12">
      <div class="box box-info">
        <div class="box-header with-border">
          <div class="alert alert-info alert-dismissible">
            <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
            <h4>Tabel 11 - JUMLAH TENAGA MEDIS DI FASILITAS KESEHATAN</h4>
            <h5> Tombol <strong><span class="badge bg-white"><i class="fa fa-fw fa-refresh"></i></span> reset</strong> digunakan untuk mengosongkan isian </h5>
            <h5> Tombol <strong><span class="badge bg-blue"><i class="fa fa-fw fa-recycle"></i></span> proses</strong> digunakan untuk menambah data setiap desa ke database </h5>
            <h5> Tombol <strong><span class="badge bg-purple"><i class="fa fa-fw fa-arrow-left"></i></span> kembali</strong>  digunakan untuk kembali ke halaman sebelumnya (view tabel) </h5>                   
          </div>
        </div>
        <!-- /.box-header -->
        <!-- form start -->
        <form class="form-horizontal">
          <div class="box-body">
            <div class="col-md-12">
              <div class="form-group">
                <label for="" class="col-sm-3 control-label">Pilih Bulan</label>
                <div class="col-sm-2">
                  <select class="form-control">
                    <option selected="">Pilih Bulan</option>
                    <option>Januari</option>
                    <option>Februari</option>
                    <option>Maret</option>
                    <option>April</option>
                    <option>Mei</option>
                    <option>Juni</option>
                    <option>Juli</option>
                    <option>Agustus</option>
                    <option>September</option>
                    <option>Oktober</option>
                    <option>November</option>
                    <option>Desember</option>
                  </select>
                </div>              
                <label for="" class="col-sm-3 control-label">Pilih Tahun</label>
                <div class="col-sm-2">
                  <select class="form-control">
                    <option selected="">Pilih Tahun</option>
                    <option>2019</option>
                    <option>2020</option>
                    <option>2021</option>
                  </select>
                </div>
              </div>
              <div class="nav-tabs-custom">                
                <ul class="nav nav-tabs">
                  <li class="active"><a href="#tab_1" data-toggle="tab">Puskesmas </a></li>
                  <li><a href="#tab_2" data-toggle="tab"> Rumah Sakit</a></li>
                </ul>
                <div class="tab-content">
                  <div class="tab-pane active" id="tab_1">
                    <div class="box-body">
                      <div class="col-md-6">
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">Puskesmas</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" name="" placeholder="">
                          </div>
                        </div>                  
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">dr. Spesialis Laki </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="jmlDRspesialisLPpkm()" v-model="DR_SPESIALIS_LAKI_PUSKESMAS" name="dr_spesialis_laki_puskesmas" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">dr. Spesialis Perempuan </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="jmlDRspesialisLPpkm()" v-model="DR_SPESIALIS_PEREMPUAN_PUSKESMAS" name="dr_spesialis_perempuan_puskesmas" placeholder="">
                          </div>
                        </div> 
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">dr. Spesialis Laki+Perempuan </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="DR_SPESIALIS_LAKI_PEREMPUAN_PUSKESMAS" name="dr_spesialis_laki_perempuan_puskesmas" placeholder="" disabled="true">
                          </div>
                        </div>                  
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">dr. Umum Laki </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="jmlDRumumPKM()" v-model="DR_UMUM_LAKI_PUSKESMAS" name="dr_umum_laki_puskesmas" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">dr. Umum Perempuan </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="jmlDRumumPKM()" v-model="DR_UMUM_PEREMPUAN_PUSKESMAS" name="dr_umum_perempuan_puskesmas" placeholder="">
                          </div>
                        </div> 
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">dr. Umum Laki+Perempuan </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="DR_UMUM_LAKI_PEREMPUAN_PUSKESMAS" name="dr_umum_laki_perempuan_puskesmas" placeholder="" disabled="true">
                          </div>
                        </div>  
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">Total dr. Laki </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="totalDRLP()" v-model="DR_TOTAL_LAKI_PUSKESMAS" name="dr_total_laki_puskesmas" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">Total dr. Perempuan </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="totalDRLP()" v-model="DR_TOTAL_PEREMPUAN_PUSKESMAS" name="dr_total_perempuan_puskesmas" placeholder="">
                          </div>
                        </div> 
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">Total dr. Laki+Perempuan </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="DR_TOTAL_LAKI_PEREMPUAN_PUSKESMAS" name="dr_total_laki_perempuan_puskesmas" placeholder="" disabled="true">
                          </div>
                        </div> 
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">dr. Gigi Laki </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="dokterGigiLP()" v-model="DR_GIGI_LAKI_PUSKESMAS" name="dr_gigi_laki_puskesmas" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">dr. Gigi Perempuan </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="dokterGigiLP()" v-model="DR_GIGI_PEREMPUAN_PUSKESMAS" name="dr_gigi_perempuan_puskesmas" placeholder="">
                          </div>
                        </div> 
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">dr. Gigi Laki+Perempuan </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="DR_GIGI_LAKI_PEREMPUAN_PUSKESMAS" name="dr_gigi_laki_perempuan_puskesmas" placeholder="" disabled="true">
                          </div>
                        </div> 
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">dr. Gigi Spesialis Laki </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="dokterSpesialisGigiLP()" v-model="DR_GIGI_SPESIALIS_LAKI_PUSKESMAS" name="dr_gigi_spesialis_laki_puskesmas" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">dr. Gigi Spesialis Perempuan </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="dokterSpesialisGigiLP()" v-model="DR_GIGI_SPESIALIS_PEREMPUAN_PUSKESMAS" name="dr_gigi_spesialis_perempuan_puskesmas" placeholder="">
                          </div>
                        </div> 
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">dr. Gigi Spesialis Laki+Perempuan </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="DR_GIGI_SPESIALIS_LAKI_PEREMPUAN_PUSKESMAS" name="dr_gigi_spesialis_laki_perempuan_puskesmas" placeholder="" disabled="true">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">Total dr. Laki </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="totalDRGSLP()" v-model="DR_TOTAL_LAKI2_PUSKESMAS" name="dr_total_laki2_puskesmas" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">Total dr. Perempuan </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="totalDRGSLP()" v-model="DR_TOTAL_PEREMPUAN2_PUSKESMAS" name="dr_total_perempuan2_puskesmas" placeholder="">
                          </div>
                        </div> 
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">Total dr. Laki+Perempuan </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="DR_TOTAL_LAKI_PEREMPUAN2_PUSKESMAS" name="dr_total_laki_perempuan2_puskesmas" placeholder="">
                          </div>
                        </div>                                     
                      </div>
                    </div>
                  </div> 
                  <div class="tab-pane" id="tab_2">
                    <div class="box-body">
                      <div class="col-md-6">
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">Rumah Sakit</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" name="" placeholder="">
                          </div>
                        </div>                  
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">dr. Spesialis Laki </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="jmlDRspesialisLPrs()" v-model="DR_SPESIALIS_LAKI_RUMAH_SAKIT" name="dr_spesialis_laki_rumah_sakit" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">dr. Spesialis Perempuan </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="jmlDRspesialisLPrs()" v-model="DR_SPESIALIS_PEREMPUAN_RUMAH_SAKIT" name="dr_spesialis_perempuan_rumah_sakit" placeholder="">
                          </div>
                        </div> 
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">dr. Spesialis Laki+Perempuan </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="DR_SPESIALIS_LAKI_PEREMPUAN_RUMAH_SAKIT" name="dr_spesialis_laki_perempuan_rumah_sakit" placeholder="" disabled="true">
                          </div>
                        </div>                  
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">dr. Umum Laki </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="jmlDRumumRS()" v-model="DR_UMUM_LAKI_RUMAH_SAKIT" name="dr_umum_laki_rumah_sakit" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">dr. Umum Perempuan </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="jmlDRumumRS()" v-model="DR_UMUM_PEREMPUAN_RUMAH_SAKIT" name="dr_umum_perempuan_rumah_sakit" placeholder="">
                          </div>
                        </div> 
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">dr. Umum Laki+Perempuan </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="DR_UMUM_LAKI_PEREMPUAN_RUMAH_SAKIT" name="dr_umum_laki_perempuan_rumah_sakit" placeholder="" disabled="true">
                          </div>
                        </div>  
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">Total dr. Laki </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="totalDRLPrs()" v-model="DR_TOTAL_LAKI_RUMAH_SAKIT" name="dr_total_laki_rumah_sakit" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">Total dr. Perempuan </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="totalDRLPrs()" v-model="DR_TOTAL_PEREMPUAN_RUMAH_SAKIT" name="dr_total_perempuan_rumah_sakit" placeholder="">
                          </div>
                        </div> 
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">Total dr. Laki+Perempuan </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="DR_TOTAL_LAKI_PEREMPUAN_RUMAH_SAKIT" name="dr_total_laki_perempuan_rumah_sakit" placeholder="">
                          </div>
                        </div> 
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">dr. Gigi Laki </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="dokterGigiLPrs()" v-model="DR_GIGI_LAKI_RUMAH_SAKIT" name="dr_gigi_laki_rumah_sakit" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">dr. Gigi Perempuan </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="dokterGigiLPrs()" v-model="DR_GIGI_PEREMPUAN_RUMAH_SAKIT" name="dr_gigi_perempuan_rumah_sakit" placeholder="">
                          </div>
                        </div> 
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">dr. Gigi Laki+Perempuan </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="DR_GIGI_LAKI_PEREMPUAN_RUMAH_SAKIT" name="dr_gigi_laki_perempuan_rumah_sakit" placeholder="" disabled="true">
                          </div>
                        </div> 
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">dr. Gigi Spesialis Laki </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="dokterSpesialisGigiLPrs()" v-model="DR_GIGI_SPESIALIS_LAKI_RUMAH_SAKIT" name="dr_gigi_spesialis_laki_rumah_sakit" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">dr. Gigi Spesialis Perempuan </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="dokterSpesialisGigiLPrs()" v-model="DR_GIGI_SPESIALIS_PEREMPUAN_RUMAH_SAKIT" name="dr_gigi_spesialis_perempuan_rumah_sakit" placeholder="">
                          </div>
                        </div> 
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">dr. Gigi Spesialis Laki+Perempuan </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="DR_GIGI_SPESIALIS_LAKI_PEREMPUAN_RUMAH_SAKIT" name="dr_gigi_spesialis_laki_perempuan_rumah_sakit" placeholder="" disabled="true">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">Total dr. Laki </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="totalDRGSLPrs()" v-model="DR_TOTAL_LAKI2_RUMAH_SAKIT" name="dr_total_laki2_rumah_sakit" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">Total dr. Perempuan </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="totalDRGSLPrs()" v-model="DR_TOTAL_PEREMPUAN2_RUMAH_SAKIT" name="dr_total_perempuan2_rumah_sakit" placeholder="">
                          </div>
                        </div> 
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">Total dr. Laki+Perempuan </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="DR_TOTAL_LAKI_PEREMPUAN2_RUMAH_SAKIT" name="dr_total_laki_perempuan2_rumah_sakit" placeholder="" disabled="true">
                          </div>
                        </div>                                     
                      </div>
                    </div>
                  </div>  
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
            <router-link to="/dataDasar"><a class="btn btn-success btn-md"><i class="fa fa-fw fa-arrow-left"></i> Kembali</a></router-link>
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
  name: 'Table10',
  data() {
    return {
      USERNAME: '',
      JENIS_RS: '',
      PILIH_BULAN: '1',
      PILIH_TAHUN: '2019',
      PUSKESMAS: '', 
      DR_SPESIALIS_LAKI_PUSKESMAS: 0,
      DR_SPESIALIS_PEREMPUAN_PUSKESMAS: 0,
      DR_SPESIALIS_LAKI_PEREMPUAN_PUSKESMAS: 0,
      DR_UMUM_LAKI_PUSKESMAS: 0,
      DR_UMUM_PEREMPUAN_PUSKESMAS: 0,
      DR_UMUM_LAKI_PEREMPUAN_PUSKESMAS: 0,
      DR_TOTAL_LAKI_PUSKESMAS: 0,
      DR_TOTAL_PEREMPUAN_PUSKESMAS: 0,
      DR_TOTAL_LAKI_PEREMPUAN_PUSKESMAS: 0,
      DR_GIGI_LAKI_PUSKESMAS: 0,
      DR_GIGI_PEREMPUAN_PUSKESMAS: 0,
      DR_GIGI_LAKI_PEREMPUAN_PUSKESMAS: 0,
      DR_GIGI_SPESIALIS_LAKI_PUSKESMAS: 0,
      DR_GIGI_SPESIALIS_PEREMPUAN_PUSKESMAS: 0,
      DR_GIGI_SPESIALIS_LAKI_PEREMPUAN_PUSKESMAS: 0,
      DR_TOTAL_LAKI2_PUSKESMAS: 0,
      DR_TOTAL_PEREMPUAN2_PUSKESMAS: 0,
      DR_TOTAL_LAKI_PEREMPUAN2_PUSKESMAS: 0,

      DR_SPESIALIS_LAKI_RUMAH_SAKIT: 0,
      DR_SPESIALIS_PEREMPUAN_RUMAH_SAKIT: 0,
      DR_SPESIALIS_LAKI_PEREMPUAN_RUMAH_SAKIT: 0,
      DR_UMUM_LAKI_RUMAH_SAKIT: 0,
      DR_UMUM_PEREMPUAN_RUMAH_SAKIT: 0,
      DR_UMUM_LAKI_PEREMPUAN_RUMAH_SAKIT: 0,
      DR_TOTAL_LAKI_RUMAH_SAKIT: 0,
      DR_TOTAL_PEREMPUAN_RUMAH_SAKIT: 0,
      DR_TOTAL_LAKI_PEREMPUAN_RUMAH_SAKIT: 0,
      DR_GIGI_LAKI_RUMAH_SAKIT: 0,
      DR_GIGI_PEREMPUAN_RUMAH_SAKIT: 0,
      DR_GIGI_LAKI_PEREMPUAN_RUMAH_SAKIT: 0,
      DR_GIGI_SPESIALIS_LAKI_RUMAH_SAKIT: 0,
      DR_GIGI_SPESIALIS_PEREMPUAN_RUMAH_SAKIT: 0,
      DR_GIGI_SPESIALIS_LAKI_PEREMPUAN_RUMAH_SAKIT: 0,
      DR_TOTAL_LAKI2_RUMAH_SAKIT: 0,
      DR_TOTAL_PEREMPUAN2_RUMAH_SAKIT: 0,
      DR_TOTAL_LAKI_PEREMPUAN2_RUMAH_SAKIT: 0,

      isUpdate: false  
    }
  },
  methods: {
    initialData: function() {
      return {
        DR_SPESIALIS_LAKI_PUSKESMAS: 0,
        DR_SPESIALIS_PEREMPUAN_PUSKESMAS: 0,
        DR_SPESIALIS_LAKI_PEREMPUAN_PUSKESMAS: 0,
        DR_UMUM_LAKI_PUSKESMAS: 0,
        DR_UMUM_PEREMPUAN_PUSKESMAS: 0,
        DR_UMUM_LAKI_PEREMPUAN_PUSKESMAS: 0,
        DR_TOTAL_LAKI_PUSKESMAS: 0,
        DR_TOTAL_PEREMPUAN_PUSKESMAS: 0,
        DR_TOTAL_LAKI_PEREMPUAN_PUSKESMAS: 0,
        DR_GIGI_LAKI_PUSKESMAS: 0,
        DR_GIGI_PEREMPUAN_PUSKESMAS: 0,
        DR_GIGI_LAKI_PEREMPUAN_PUSKESMAS: 0,
        DR_GIGI_SPESIALIS_LAKI_PUSKESMAS: 0,
        DR_GIGI_SPESIALIS_PEREMPUAN_PUSKESMAS: 0,
        DR_GIGI_SPESIALIS_LAKI_PEREMPUAN_PUSKESMAS: 0,
        DR_TOTAL_LAKI2_PUSKESMAS: 0,
        DR_TOTAL_PEREMPUAN2_PUSKESMAS: 0,
        DR_TOTAL_LAKI_PEREMPUAN2_PUSKESMAS: 0,

        DR_SPESIALIS_LAKI_RUMAH_SAKIT: 0,
        DR_SPESIALIS_PEREMPUAN_RUMAH_SAKIT: 0,
        DR_SPESIALIS_LAKI_PEREMPUAN_RUMAH_SAKIT: 0,
        DR_UMUM_LAKI_RUMAH_SAKIT: 0,
        DR_UMUM_PEREMPUAN_RUMAH_SAKIT: 0,
        DR_UMUM_LAKI_PEREMPUAN_RUMAH_SAKIT: 0,
        DR_TOTAL_LAKI_RUMAH_SAKIT: 0,
        DR_TOTAL_PEREMPUAN_RUMAH_SAKIT: 0,
        DR_TOTAL_LAKI_PEREMPUAN_RUMAH_SAKIT: 0,
        DR_GIGI_LAKI_RUMAH_SAKIT: 0,
        DR_GIGI_PEREMPUAN_RUMAH_SAKIT: 0,
        DR_GIGI_LAKI_PEREMPUAN_RUMAH_SAKIT: 0,
        DR_GIGI_SPESIALIS_LAKI_RUMAH_SAKIT: 0,
        DR_GIGI_SPESIALIS_PEREMPUAN_RUMAH_SAKIT: 0,
        DR_GIGI_SPESIALIS_LAKI_PEREMPUAN_RUMAH_SAKIT: 0,
        DR_TOTAL_LAKI2_RUMAH_SAKIT: 0,
        DR_TOTAL_PEREMPUAN2_RUMAH_SAKIT: 0,
        DR_TOTAL_LAKI_PEREMPUAN2_RUMAH_SAKIT: 0,       
      }
    },        
    jmlDRspesialisLPrs: function() {      
      this.DR_SPESIALIS_LAKI_PEREMPUAN_RUMAH_SAKIT = 
        parseInt((this.DR_SPESIALIS_LAKI_RUMAH_SAKIT == '') ? 0 : this.DR_SPESIALIS_LAKI_RUMAH_SAKIT)+
        parseInt((this.DR_SPESIALIS_PEREMPUAN_RUMAH_SAKIT == '') ? 0 : this.DR_SPESIALIS_PEREMPUAN_RUMAH_SAKIT);    
    },
    jmlDRumumRS: function() {      
      this.DR_UMUM_LAKI_PEREMPUAN_RUMAH_SAKIT = 
        parseInt((this.DR_UMUM_LAKI_RUMAH_SAKIT == '') ? 0 : this.DR_UMUM_LAKI_RUMAH_SAKIT)+
        parseInt((this.DR_UMUM_PEREMPUAN_RUMAH_SAKIT == '') ? 0 : this.DR_UMUM_PEREMPUAN_RUMAH_SAKIT);    

      this.DR_TOTAL_LAKI_RUMAH_SAKIT = 
        parseInt((this.DR_SPESIALIS_LAKI_RUMAH_SAKIT == '') ? 0 : this.DR_SPESIALIS_LAKI_RUMAH_SAKIT)+
        parseInt((this.DR_UMUM_LAKI_RUMAH_SAKIT == '') ? 0 : this.DR_UMUM_LAKI_RUMAH_SAKIT);    
      
      this.DR_TOTAL_PEREMPUAN_RUMAH_SAKIT = 
        parseInt((this.DR_SPESIALIS_PEREMPUAN_RUMAH_SAKIT == '') ? 0 : this.DR_SPESIALIS_PEREMPUAN_RUMAH_SAKIT)+
        parseInt((this.DR_UMUM_PEREMPUAN_RUMAH_SAKIT == '') ? 0 : this.DR_UMUM_PEREMPUAN_RUMAH_SAKIT);        
    },
    totalDRLPrs: function() {      
      this.DR_TOTAL_LAKI_PEREMPUAN_RUMAH_SAKIT = 
        parseInt((this.DR_TOTAL_LAKI_RUMAH_SAKIT == '') ? 0 : this.DR_TOTAL_LAKI_RUMAH_SAKIT)+
        parseInt((this.DR_TOTAL_PEREMPUAN_RUMAH_SAKIT == '') ? 0 : this.DR_TOTAL_PEREMPUAN_RUMAH_SAKIT);    
    },
    dokterGigiLPrs: function() {      
      this.DR_GIGI_LAKI_PEREMPUAN_RUMAH_SAKIT = 
        parseInt((this.DR_GIGI_LAKI_RUMAH_SAKIT == '') ? 0 : this.DR_GIGI_LAKI_RUMAH_SAKIT)+
        parseInt((this.DR_GIGI_PEREMPUAN_RUMAH_SAKIT == '') ? 0 : this.DR_GIGI_PEREMPUAN_RUMAH_SAKIT);    
    }, 
    dokterSpesialisGigiLPrs: function() {      
      this.DR_GIGI_SPESIALIS_LAKI_PEREMPUAN_RUMAH_SAKIT = 
        parseInt((this.DR_GIGI_SPESIALIS_LAKI_RUMAH_SAKIT == '') ? 0 : this.DR_GIGI_SPESIALIS_LAKI_RUMAH_SAKIT)+
        parseInt((this.DR_GIGI_SPESIALIS_PEREMPUAN_RUMAH_SAKIT == '') ? 0 : this.DR_GIGI_SPESIALIS_PEREMPUAN_RUMAH_SAKIT);    
      this.DR_TOTAL_LAKI2_RUMAH_SAKIT = 
        parseInt((this.DR_GIGI_LAKI_RUMAH_SAKIT == '') ? 0 : this.DR_GIGI_LAKI_RUMAH_SAKIT)+
        parseInt((this.DR_GIGI_SPESIALIS_LAKI_RUMAH_SAKIT == '') ? 0 : this.DR_GIGI_SPESIALIS_LAKI_RUMAH_SAKIT);    

      this.DR_TOTAL_PEREMPUAN2_RUMAH_SAKIT = 
        parseInt((this.DR_GIGI_PEREMPUAN_RUMAH_SAKIT == '') ? 0 : this.DR_GIGI_PEREMPUAN_RUMAH_SAKIT)+
        parseInt((this.DR_GIGI_SPESIALIS_PEREMPUAN_RUMAH_SAKIT == '') ? 0 : this.DR_GIGI_SPESIALIS_PEREMPUAN_RUMAH_SAKIT);
    },
    totalDRGSLPrs: function() {      
      this.DR_TOTAL_LAKI_PEREMPUAN2_RUMAH_SAKIT = 
        parseInt((this.DR_TOTAL_LAKI2_RUMAH_SAKIT == '') ? 0 : this.DR_TOTAL_LAKI2_RUMAH_SAKIT)+
        parseInt((this.DR_TOTAL_PEREMPUAN2_RUMAH_SAKIT == '') ? 0 : this.DR_TOTAL_PEREMPUAN2_RUMAH_SAKIT);    
    },  

    jmlDRspesialisLPpkm: function() {      
      this.DR_SPESIALIS_LAKI_PEREMPUAN_PUSKESMAS = 
        parseInt((this.DR_SPESIALIS_LAKI_PUSKESMAS == '') ? 0 : this.DR_SPESIALIS_LAKI_PUSKESMAS)+
        parseInt((this.DR_SPESIALIS_PEREMPUAN_PUSKESMAS == '') ? 0 : this.DR_SPESIALIS_PEREMPUAN_PUSKESMAS);    
    },
    jmlDRumumPKM: function() {      
      this.DR_UMUM_LAKI_PEREMPUAN_PUSKESMAS = 
        parseInt((this.DR_UMUM_LAKI_PUSKESMAS == '') ? 0 : this.DR_UMUM_LAKI_PUSKESMAS)+
        parseInt((this.DR_UMUM_PEREMPUAN_PUSKESMAS == '') ? 0 : this.DR_UMUM_PEREMPUAN_PUSKESMAS);    

      this.DR_TOTAL_LAKI_PUSKESMAS = 
        parseInt((this.DR_SPESIALIS_LAKI_PUSKESMAS == '') ? 0 : this.DR_SPESIALIS_LAKI_PUSKESMAS)+
        parseInt((this.DR_UMUM_LAKI_PUSKESMAS == '') ? 0 : this.DR_UMUM_LAKI_PUSKESMAS);    
      
      this.DR_TOTAL_PEREMPUAN_PUSKESMAS = 
        parseInt((this.DR_SPESIALIS_PEREMPUAN_PUSKESMAS == '') ? 0 : this.DR_SPESIALIS_PEREMPUAN_PUSKESMAS)+
        parseInt((this.DR_UMUM_PEREMPUAN_PUSKESMAS == '') ? 0 : this.DR_UMUM_PEREMPUAN_PUSKESMAS);        
    },
    totalDRLP: function() {      
      this.DR_TOTAL_LAKI_PEREMPUAN_PUSKESMAS = 
        parseInt((this.DR_TOTAL_LAKI_PUSKESMAS == '') ? 0 : this.DR_TOTAL_LAKI_PUSKESMAS)+
        parseInt((this.DR_TOTAL_PEREMPUAN_PUSKESMAS == '') ? 0 : this.DR_TOTAL_PEREMPUAN_PUSKESMAS);    
    },
    dokterGigiLP: function() {      
      this.DR_GIGI_LAKI_PEREMPUAN_PUSKESMAS = 
        parseInt((this.DR_GIGI_LAKI_PUSKESMAS == '') ? 0 : this.DR_GIGI_LAKI_PUSKESMAS)+
        parseInt((this.DR_GIGI_PEREMPUAN_PUSKESMAS == '') ? 0 : this.DR_GIGI_PEREMPUAN_PUSKESMAS);    
    },
    dokterSpesialisGigiLP: function() {      
      this.DR_GIGI_SPESIALIS_LAKI_PEREMPUAN_PUSKESMAS = 
        parseInt((this.DR_GIGI_SPESIALIS_LAKI_PUSKESMAS == '') ? 0 : this.DR_GIGI_SPESIALIS_LAKI_PUSKESMAS)+
        parseInt((this.DR_GIGI_SPESIALIS_PEREMPUAN_PUSKESMAS == '') ? 0 : this.DR_GIGI_SPESIALIS_PEREMPUAN_PUSKESMAS);          
      this.DR_TOTAL_LAKI2_PUSKESMAS = 
        parseInt((this.DR_GIGI_LAKI_PUSKESMAS == '') ? 0 : this.DR_GIGI_LAKI_PUSKESMAS)+
        parseInt((this.DR_GIGI_SPESIALIS_LAKI_PUSKESMAS == '') ? 0 : this.DR_GIGI_SPESIALIS_LAKI_PUSKESMAS);    

      this.DR_TOTAL_PEREMPUAN2_PUSKESMAS = 
        parseInt((this.DR_GIGI_PEREMPUAN_PUSKESMAS == '') ? 0 : this.DR_GIGI_PEREMPUAN_PUSKESMAS)+
        parseInt((this.DR_GIGI_SPESIALIS_PEREMPUAN_PUSKESMAS == '') ? 0 : this.DR_GIGI_SPESIALIS_PEREMPUAN_PUSKESMAS);    
    },  
    totalDRGSLP: function() {      
      this.DR_TOTAL_LAKI_PEREMPUAN2_PUSKESMAS = 
        parseInt((this.DR_TOTAL_LAKI2_PUSKESMAS == '') ? 0 : this.DR_TOTAL_LAKI2_PUSKESMAS)+
        parseInt((this.DR_TOTAL_PEREMPUAN2_PUSKESMAS == '') ? 0 : this.DR_TOTAL_PEREMPUAN2_PUSKESMAS);    
    },  
    kirimData: function(data) {
      console.log(data)
      var user = JSON.parse(this.$session.get('dataLogin'));
      var username = user.username;
      for (var key in data) {
        
        var URL_DATA = (this.isUpdate == true) ? this.$urlNode + '/table/update?var='+key+'&thn='+this.PILIH_TAHUN+'&bln=' + this.PILIH_BULAN + '&username=' + this.USERNAME : this.$urlNode + '/table/input';

        var dataKirim = {
          'NAMA_FIELD' : key,
          'VALUE' : data[key],
          'USERNAME' : username,
          'ID_DAERAH' : username.substr(0, 4),
          'TAHUN' : data.PILIH_TAHUN,
          'BULAN' : data.PILIH_BULAN,
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

      for (var key in data) {

        this.$http.get(this.$urlNode + '/table/getField?var=' + key + '&thn='+this.PILIH_TAHUN+'&bln=' + this.PILIH_BULAN + '&username=' + this.USERNAME)
          .then((response) => {
            console.log(response)
            if(response.data.length > 0) {
              // Read All Data
              this[response.data[0].NAMA_FIELD] = response.data[0].VALUE;
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
    }

  },
  components: {},
  created() {

  },
  created() {
    var user = JSON.parse(this.$session.get('dataLogin'));
    this.NAMA_RUMAH_SAKIT = user.NAMA_RS;    
    this.USERNAME = user.username;    
    this.checkData(this.$data);
  }
}
</script>