<template>
<!-- Main content -->
<div class="content">
  <div class="row">        
    <div class="col-md-12">
      <div class="box box-info">
        <div class="box-header with-border">
          <div class="alert alert-info alert-dismissible">
            <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
            <h4>Tabel Tambahan - Jumlah Desa/Kelurahan Siaga Menurut Kabupaten/Kota</h4>
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
                <label for="" class="col-sm-6 control-label">Pilih Bulan</label>
                <div class="col-sm-4">
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
              </div>
              <div class="form-group">
                <label for="" class="col-sm-6 control-label">Pilih Tahun</label>
                <div class="col-sm-4">
                  <select class="form-control">
                    <option selected="">Pilih Tahun</option>
                    <option>2019</option>
                    <option>2020</option>
                    <option>2021</option>
                  </select>
                </div>
              </div>
              <div class="form-group">
                <label for="" class="col-sm-6 control-label">Kabupaten/Kota</label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" id="" name="kabupaten_kota" placeholder="">
                </div>
              </div>  
              <div class="form-group">
                <label for="" class="col-sm-6 control-label">Jumlah Desa/Kelurahan</label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" id="" name="jumlah_desa_kelurahan" placeholder="">
                </div>
              </div>    
              <div class="form-group">
                <label for="" class="col-sm-6 control-label">Pratama</label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" id="" name="jumlah_desa_kelurahan_siaga_pratama" placeholder="">
                </div>
              </div> 
            </div>                                                    
            <div class="col-md-6">
              <div class="form-group">
                <label for="" class="col-sm-6 control-label">Madya</label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" id="" name="jumlah_desa_kelurahan_siaga_madya" placeholder="">
                </div>
              </div>
              <div class="form-group">
                <label for="" class="col-sm-6 control-label">Purnama</label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" id="" name="jumlah_desa_kelurahan_siaga_purnama" placeholder="">
                </div>
              </div>
              <div class="form-group">
                <label for="" class="col-sm-6 control-label">Mandiri</label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" id="" name="jumlah_desa_kelurahan_siaga_mandiri" placeholder="">
                </div>
              </div>
              <div class="form-group">
                <label for="" class="col-sm-6 control-label">Jumlah</label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" id="" name="jumlah_desa_kelurahan_siaga_jumlah" placeholder="">
                </div>
              </div> 
              <div class="form-group">
                <label for="" class="col-sm-6 control-label">Persen</label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" id="" name="jumlah_desa_kelurahan_siaga_persen" placeholder="">
                </div>
              </div>                       
            </div>                                          
          </div>
          <!-- /.box-body -->
          <div class="box-footer">
            <button type="reset" class="btn btn-default"><i class="fa fa-fw fa-refresh"></i> Reset</button>
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#modal-primary"><i class="fa fa-fw fa-recycle"></i>
            Proses
            </button>                
            <router-link to="/desaSiaga"><a class="btn btn-success btn-md"><i class="fa fa-fw fa-arrow-left"></i> Kembali</a></router-link>
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
  name: 'DesaSiaga',
  components: {},
  created() {

  }
}
</script>