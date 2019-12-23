<!-- Main content -->
<template>
<div class="content">
  <div class="row">        
    <div class="col-md-12">
      <div class="box box-info">
        <div class="box-header with-border">
          <div class="alert alert-info alert-dismissible">
            <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
            <h4>Tabel 14 - JUMLAH TENAGA EKNIK BIOMEDIKA, KETERAPIAN FISIK DAN TEKNISIAN MEDIK DI FASILITAS KESEHATAN</h4>
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
                          <label for="" class="col-sm-6 control-label">Ahli Laboratorium Medik Laki </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="ahliLabMedikLPpkm()" v-model="AHLI_LABORATORIUM_MEDIK_LAKI_PUSKESMAS" name="ahli_laboratorium_medik_laki_puskesmas" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">Ahli Laboratorium Medik Perempuan </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="ahliLabMedikLPpkm()" v-model="AHLI_LABORATORIUM_MEDIK_PEREMPUAN_PUSKESMAS" name="ahli_laboratorium_medik_perempuan_puskesmas" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">Ahli Laboratorium Medik Laki + Perempuan </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="AHLI_LABORATORIUM_MEDIK_LAKI_PEREMPUAN_PUSKESMAS" name="ahli_laboratorium_medik_laki_perempuan_puskesmas" placeholder="" disabled="true">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">Tenaga Teknik Biomedika Lainnya Laki </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="tenagaTBlainnyaLPpkm()" v-model="TENAGA_TEKNIK_BIOMEDIKA_LAINNYA_LAKI_PUSKESMAS" name="tenaga_teknik_biomedika_lainnya_laki_puskesmas" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">Tenaga Teknik Biomedika Lainnya Perempuan </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="tenagaTBlainnyaLPpkm()" v-model="TENAGA_TEKNIK_BIOMEDIKA_LAINNYA_PEREMPUAN_PUSKESMAS" name="tenaga_teknik_biomedika_lainnya_perempuan_puskesmas" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">Tenaga Teknik Biomedika Lainnya Laki + Perempuan </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="TENAGA_TEKNIK_BIOMEDIKA_LAINNYA_LAKI_PEREMPUAN_PUSKESMAS" name="tenaga_teknik_biomedika_lainnya_laki_perempuan_puskesmas" placeholder="" disabled="">
                          </div>
                        </div> 
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">Keterapian Fisik Laki </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="keterapianFisikLPpkm()" v-model="KETERAPIAN_FISIK_LAKI_PUSKESMAS" name="keterapian_fisik_laki_puskesmas" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">Keterapian Fisik Perempuan </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="keterapianFisikLPpkm()" v-model="KETERAPIAN_FISIK_PEREMPUAN_PUSKESMAS" name="keterapian_fisik_perempuan_puskesmas" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">Keterapian Fisik Laki + Perempuan </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="KETERAPIAN_FISIK_LAKI_PEREMPUAN_PUSKESMAS" name="keterapian_fisik_laki_perempuan_puskesmas" placeholder="" disabled="">
                          </div>
                        </div> 
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">Keteknisian Medis Laki </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="keteknisianMedisLPpkm()" v-model="KETEKNISIAN_MEDIS_LAKI_PUSKESMAS" name="keteknisian_medis_laki_puskesmas" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">Keteknisian Medis Perempuan </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="keteknisianMedisLPpkm()" v-model="KETEKNISIAN_MEDIS_PEREMPUAN_PUSKESMAS" name="keteknisian_medis_perempuan_puskesmas" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">Keteknisian Medis Laki + Perempuan </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="KETEKNISIAN_MEDIS_LAKI_PEREMPUAN_PUSKESMAS" name="keteknisian_medis_laki_perempuan_puskesmas" placeholder="" disabled="">
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
                          <label for="" class="col-sm-6 control-label">Ahli Laboratorium Medik Laki </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="ahliLabMedikLPrs()" v-model="AHLI_LABORATORIUM_MEDIK_LAKI_RUMAH_SAKIT" name="ahli_laboratorium_medik_laki_rumah_sakit" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">Ahli Laboratorium Medik Perempuan </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="ahliLabMedikLPrs()" v-model="AHLI_LABORATORIUM_MEDIK_PEREMPUAN_RUMAH_SAKIT" name="ahli_laboratorium_medik_perempuan_rumah_sakit" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">Ahli Laboratorium Medik Laki + Perempuan </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="AHLI_LABORATORIUM_MEDIK_LAKI_PEREMPUAN_RUMAH_SAKIT" name="ahli_laboratorium_medik_laki_perempuan_rumah_sakit" placeholder="" disabled="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">Tenaga Teknik Biomedika Lainnya Laki </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="tenagaTBlainnyaLPrs()" v-model="TENAGA_TEKNIK_BIOMEDIKA_LAINNYA_LAKI_RUMAH_SAKIT" name="tenaga_teknik_biomedika_lainnya_laki_rumah_sakit" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">Tenaga Teknik Biomedika Lainnya Perempuan </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="tenagaTBlainnyaLPrs()" v-model="TENAGA_TEKNIK_BIOMEDIKA_LAINNYA_PEREMPUAN_RUMAH_SAKIT" name="tenaga_teknik_biomedika_lainnya_perempuan_rumah_sakit" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">Tenaga Teknik Biomedika Lainnya Laki + Perempuan </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="TENAGA_TEKNIK_BIOMEDIKA_LAINNYA_LAKI_PEREMPUAN_RUMAH_SAKIT" name="tenaga_teknik_biomedika_lainnya_laki_perempuan_rumah_sakit" placeholder="" disabled="">
                          </div>
                        </div> 
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">Keterapian Fisik Laki </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="keterapianFisikLPrs()" v-model="KETERAPIAN_FISIK_LAKI_RUMAH_SAKIT" name="keterapian_fisik_laki_rumah_sakit" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">Keterapian Fisik Perempuan </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="keterapianFisikLPrs()" v-model="KETERAPIAN_FISIK_PEREMPUAN_RUMAH_SAKIT" name="keterapian_fisik_perempuan_rumah_sakit" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">Keterapian Fisik Laki + Perempuan </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="KETERAPIAN_FISIK_LAKI_PEREMPUAN_RUMAH_SAKIT" name="keterapian_fisik_laki_perempuan_rumah_sakit" placeholder="" disabled="">
                          </div>
                        </div> 
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">Keteknisian Medis Laki </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="keteknisianMedisLPrs()" v-model="KETEKNISIAN_MEDIS_LAKI_RUMAH_SAKIT" name="keteknisian_medis_laki_rumah_sakit" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">Keteknisian Medis Perempuan </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="keteknisianMedisLPrs()" v-model="KETEKNISIAN_MEDIS_PEREMPUAN_RUMAH_SAKIT" name="keteknisian_medis_perempuan_rumah_sakit" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">Keteknisian Medis Laki + Perempuan </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="KETEKNISIAN_MEDIS_LAKI_PEREMPUAN_RUMAH_SAKIT" name="keteknisian_medis_laki_perempuan_rumah_sakit" placeholder="" disabled="">
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
            <router-link to="/table14"><a class="btn btn-success btn-md"><i class="fa fa-fw fa-arrow-left"></i> Kembali</a></router-link>
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
  name: 'Table14',
  data() {
    return {
      USERNAME: '',
      JENIS_RS: '',
      PILIH_BULAN: '1',
      PILIH_TAHUN: '2019',
      PUSKESMAS: '', 
      AHLI_LABORATORIUM_MEDIK_LAKI_PUSKESMAS: 0,
      AHLI_LABORATORIUM_MEDIK_LAKI_RUMAH_SAKIT: 0,
      AHLI_LABORATORIUM_MEDIK_PEREMPUAN_PUSKESMAS: 0,
      AHLI_LABORATORIUM_MEDIK_PEREMPUAN_RUMAH_SAKIT: 0,
      AHLI_LABORATORIUM_MEDIK_LAKI_PEREMPUAN_PUSKESMAS: 0,
      AHLI_LABORATORIUM_MEDIK_LAKI_PEREMPUAN_RUMAH_SAKIT: 0,
      TENAGA_TEKNIK_BIOMEDIKA_LAINNYA_LAKI_PUSKESMAS: 0,
      TENAGA_TEKNIK_BIOMEDIKA_LAINNYA_LAKI_RUMAH_SAKIT: 0,
      TENAGA_TEKNIK_BIOMEDIKA_LAINNYA_PEREMPUAN_PUSKESMAS: 0,
      TENAGA_TEKNIK_BIOMEDIKA_LAINNYA_PEREMPUAN_RUMAH_SAKIT: 0,
      TENAGA_TEKNIK_BIOMEDIKA_LAINNYA_LAKI_PEREMPUAN_PUSKESMAS: 0,
      TENAGA_TEKNIK_BIOMEDIKA_LAINNYA_LAKI_PEREMPUAN_RUMAH_SAKIT: 0,
      KETERAPIAN_FISIK_LAKI_PUSKESMAS: 0,
      KETERAPIAN_FISIK_LAKI_RUMAH_SAKIT: 0,
      KETERAPIAN_FISIK_PEREMPUAN_PUSKESMAS: 0,
      KETERAPIAN_FISIK_PEREMPUAN_RUMAH_SAKIT: 0,
      KETERAPIAN_FISIK_LAKI_PEREMPUAN_PUSKESMAS: 0,
      KETERAPIAN_FISIK_LAKI_PEREMPUAN_RUMAH_SAKIT: 0,
      KETEKNISIAN_MEDIS_LAKI_PUSKESMAS: 0,
      KETEKNISIAN_MEDIS_LAKI_RUMAH_SAKIT: 0,
      KETEKNISIAN_MEDIS_PEREMPUAN_PUSKESMAS: 0,
      KETEKNISIAN_MEDIS_PEREMPUAN_RUMAH_SAKIT: 0,
      KETEKNISIAN_MEDIS_LAKI_PEREMPUAN_PUSKESMAS: 0,
      KETEKNISIAN_MEDIS_LAKI_PEREMPUAN_RUMAH_SAKIT: 0,     

      isUpdate: false  
    }
  },
  methods: {
    initialData: function() {
      return {
        AHLI_LABORATORIUM_MEDIK_LAKI_PUSKESMAS: 0,
        AHLI_LABORATORIUM_MEDIK_LAKI_RUMAH_SAKIT: 0,
        AHLI_LABORATORIUM_MEDIK_PEREMPUAN_PUSKESMAS: 0,
        AHLI_LABORATORIUM_MEDIK_PEREMPUAN_RUMAH_SAKIT: 0,
        AHLI_LABORATORIUM_MEDIK_LAKI_PEREMPUAN_PUSKESMAS: 0,
        AHLI_LABORATORIUM_MEDIK_LAKI_PEREMPUAN_RUMAH_SAKIT: 0,
        TENAGA_TEKNIK_BIOMEDIKA_LAINNYA_LAKI_PUSKESMAS: 0,
        TENAGA_TEKNIK_BIOMEDIKA_LAINNYA_LAKI_RUMAH_SAKIT: 0,
        TENAGA_TEKNIK_BIOMEDIKA_LAINNYA_PEREMPUAN_PUSKESMAS: 0,
        TENAGA_TEKNIK_BIOMEDIKA_LAINNYA_PEREMPUAN_RUMAH_SAKIT: 0,
        TENAGA_TEKNIK_BIOMEDIKA_LAINNYA_LAKI_PEREMPUAN_PUSKESMAS: 0,
        TENAGA_TEKNIK_BIOMEDIKA_LAINNYA_LAKI_PEREMPUAN_RUMAH_SAKIT: 0,
        KETERAPIAN_FISIK_LAKI_PUSKESMAS: 0,
        KETERAPIAN_FISIK_LAKI_RUMAH_SAKIT: 0,
        KETERAPIAN_FISIK_PEREMPUAN_PUSKESMAS: 0,
        KETERAPIAN_FISIK_PEREMPUAN_RUMAH_SAKIT: 0,
        KETERAPIAN_FISIK_LAKI_PEREMPUAN_PUSKESMAS: 0,
        KETERAPIAN_FISIK_LAKI_PEREMPUAN_RUMAH_SAKIT: 0,
        KETEKNISIAN_MEDIS_LAKI_PUSKESMAS: 0,
        KETEKNISIAN_MEDIS_LAKI_RUMAH_SAKIT: 0,
        KETEKNISIAN_MEDIS_PEREMPUAN_PUSKESMAS: 0,
        KETEKNISIAN_MEDIS_PEREMPUAN_RUMAH_SAKIT: 0,
        KETEKNISIAN_MEDIS_LAKI_PEREMPUAN_PUSKESMAS: 0,
        KETEKNISIAN_MEDIS_LAKI_PEREMPUAN_RUMAH_SAKIT: 0,       
      }
    },        
    ahliLabMedikLPrs: function() {      
      this.AHLI_LABORATORIUM_MEDIK_LAKI_PEREMPUAN_RUMAH_SAKIT = 
        parseInt((this.AHLI_LABORATORIUM_MEDIK_LAKI_RUMAH_SAKIT == '') ? 0 : this.AHLI_LABORATORIUM_MEDIK_LAKI_RUMAH_SAKIT)+
        parseInt((this.AHLI_LABORATORIUM_MEDIK_PEREMPUAN_RUMAH_SAKIT == '') ? 0 : this.AHLI_LABORATORIUM_MEDIK_PEREMPUAN_RUMAH_SAKIT);    
    }, 
    tenagaTBlainnyaLPrs: function() {      
      this.TENAGA_TEKNIK_BIOMEDIKA_LAINNYA_LAKI_PEREMPUAN_RUMAH_SAKIT = 
        parseInt((this.TENAGA_TEKNIK_BIOMEDIKA_LAINNYA_LAKI_RUMAH_SAKIT == '') ? 0 : this.TENAGA_TEKNIK_BIOMEDIKA_LAINNYA_LAKI_RUMAH_SAKIT)+
        parseInt((this.TENAGA_TEKNIK_BIOMEDIKA_LAINNYA_PEREMPUAN_RUMAH_SAKIT == '') ? 0 : this.TENAGA_TEKNIK_BIOMEDIKA_LAINNYA_PEREMPUAN_RUMAH_SAKIT);    
    },
    keterapianFisikLPrs: function() {      
      this.KETERAPIAN_FISIK_LAKI_PEREMPUAN_RUMAH_SAKIT = 
        parseInt((this.KETERAPIAN_FISIK_LAKI_RUMAH_SAKIT == '') ? 0 : this.KETERAPIAN_FISIK_LAKI_RUMAH_SAKIT)+
        parseInt((this.KETERAPIAN_FISIK_PEREMPUAN_RUMAH_SAKIT == '') ? 0 : this.KETERAPIAN_FISIK_PEREMPUAN_RUMAH_SAKIT);
    },
    keteknisianMedisLPrs: function() {      
      this.KETEKNISIAN_MEDIS_LAKI_PEREMPUAN_RUMAH_SAKIT = 
        parseInt((this.KETEKNISIAN_MEDIS_LAKI_RUMAH_SAKIT == '') ? 0 : this.KETEKNISIAN_MEDIS_LAKI_RUMAH_SAKIT)+
        parseInt((this.KETEKNISIAN_MEDIS_PEREMPUAN_RUMAH_SAKIT == '') ? 0 : this.KETEKNISIAN_MEDIS_PEREMPUAN_RUMAH_SAKIT);    
    },

    ahliLabMedikLPpkm: function() {      
      this.AHLI_LABORATORIUM_MEDIK_LAKI_PEREMPUAN_PUSKESMAS = 
        parseInt((this.AHLI_LABORATORIUM_MEDIK_LAKI_PUSKESMAS == '') ? 0 : this.AHLI_LABORATORIUM_MEDIK_LAKI_PUSKESMAS)+
        parseInt((this.AHLI_LABORATORIUM_MEDIK_PEREMPUAN_PUSKESMAS == '') ? 0 : this.AHLI_LABORATORIUM_MEDIK_PEREMPUAN_PUSKESMAS);    
    },
    tenagaTBlainnyaLPpkm: function() {      
      this.TENAGA_TEKNIK_BIOMEDIKA_LAINNYA_LAKI_PEREMPUAN_PUSKESMAS = 
        parseInt((this.TENAGA_TEKNIK_BIOMEDIKA_LAINNYA_LAKI_PUSKESMAS == '') ? 0 : this.TENAGA_TEKNIK_BIOMEDIKA_LAINNYA_LAKI_PUSKESMAS)+
        parseInt((this.TENAGA_TEKNIK_BIOMEDIKA_LAINNYA_PEREMPUAN_PUSKESMAS == '') ? 0 : this.TENAGA_TEKNIK_BIOMEDIKA_LAINNYA_PEREMPUAN_PUSKESMAS);    
    },
    keterapianFisikLPpkm: function() {      
      this.KETERAPIAN_FISIK_LAKI_PEREMPUAN_PUSKESMAS = 
        parseInt((this.TENAGA_TEKNIK_BIOMEDIKA_LAINNYA_LAKI_PUSKESMAS == '') ? 0 : this.TENAGA_TEKNIK_BIOMEDIKA_LAINNYA_LAKI_PUSKESMAS)+
        parseInt((this.TENAGA_TEKNIK_BIOMEDIKA_LAINNYA_PEREMPUAN_PUSKESMAS == '') ? 0 : this.TENAGA_TEKNIK_BIOMEDIKA_LAINNYA_PEREMPUAN_PUSKESMAS);    
    },
    keteknisianMedisLPpkm: function() {      
      this.KETEKNISIAN_MEDIS_LAKI_PEREMPUAN_PUSKESMAS = 
        parseInt((this.TENAGA_TEKNIK_BIOMEDIKA_LAINNYA_LAKI_PUSKESMAS == '') ? 0 : this.TENAGA_TEKNIK_BIOMEDIKA_LAINNYA_LAKI_PUSKESMAS)+
        parseInt((this.TENAGA_TEKNIK_BIOMEDIKA_LAINNYA_PEREMPUAN_PUSKESMAS == '') ? 0 : this.TENAGA_TEKNIK_BIOMEDIKA_LAINNYA_PEREMPUAN_PUSKESMAS);    
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