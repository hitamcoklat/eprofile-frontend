<template>
<!-- Main content -->
<div class="content">
  <div class="row">        
    <div class="col-md-12">
      <div class="box box-info">
        <div class="box-header with-border">
          <div class="alert alert-info alert-dismissible">
            <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
            <h4>Tabel 17 - CAKUPAN JAMINAN KESEHATAN  PENDUDUK MENURUT JENIS JAMINAN </h4>
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
                  <li class="active"><a href="#tab_1" data-toggle="tab">Penerima Bantuan Iuran (PBI) </a></li>
                  <li><a href="#tab_2" data-toggle="tab"> Non-PBI</a></li>
                </ul>
                <div class="tab-content">
                  <div class="tab-pane active" id="tab_1">
                    <div class="box-body">
                      <div class="col-md-6">
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">Kecamatan</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" name="kecamatan" placeholder="">
                          </div>
                        </div>  
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">Puskesmas</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" name="puskesmas" placeholder="">
                          </div>
                        </div>                                                                                            
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">PBI APBN</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" name="pbi_apbn" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">PBI APBD</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" name="pbi_apbd" placeholder="">
                          </div>
                        </div>                        
                      </div>
                    </div>
                  </div> 
                  <div class="tab-pane" id="tab_2">
                    <div class="box-body">
                      <div class="col-md-6">
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">Kecamatan</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" name="kecamatan" placeholder="">
                          </div>
                        </div>  
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">Puskesmas</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" name="puskesmas" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">Pekerja Penerima Upah (PPU)</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" name="pekerja_penerima_upah" placeholder="">
                          </div>
                        </div>                        
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">Pekerja Bukan Penerima Upah (PBPU)/Mandiri</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" name="pekerja_bukan_penerima_upah" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">Bukan Pekerja (BP)</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" name="bukan_pekerja" placeholder="">
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
            <router-link to="/table17"><a class="btn btn-success btn-md"><i class="fa fa-fw fa-arrow-left"></i> Kembali</a></router-link>
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
  name: 'Table17',
  components: {},
  created() {

  }
}
</script>