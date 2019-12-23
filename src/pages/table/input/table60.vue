<template>
<!-- Main content -->
<div class="content">
  <div class="row">        
    <div class="col-md-12">
      <div class="box box-info">
        <div class="box-header with-border">
          <div class="alert alert-info alert-dismissible">
            <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
            <h4>Tabel 60 - PENDERITA KUSTA SELESAI BEROBAT (RELEASE FROM TREATMENT/RFT) MENURUT JENIS KELAMIN, KECAMATAN DAN PUSKESMAS </h4>
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
                <div class="col-sm-4">
                  <span class="badge bg-green">a. Kusta (PB) Tahun  </span>
                </div>
              </div> 
              <div class="form-group">
                <label for="" class="col-sm-6 control-label">Penderita PB Laki</label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" id="" name="kusta_penderita_pb_laki" placeholder="">
                </div>
              </div>
              <div class="form-group">
                <label for="" class="col-sm-6 control-label">Penderita PB Perempuan</label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" id="" name="kusta_penderita_pb_perempuan" placeholder="">
                </div>
              </div>
              <div class="form-group">
                <label for="" class="col-sm-6 control-label">Penderita PB Laki+Perempuan</label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" id="" name="kusta_penderita_pb_laki_perempuan" placeholder="">
                </div>
              </div>
              <div class="form-group">
                <label for="" class="col-sm-6 control-label">RFT PB Laki Jumlahh</label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" id="" name="kusta_penderita_rft_pb_laki_jumlah" placeholder="">
                </div>
              </div>
              <div class="form-group">
                <label for="" class="col-sm-6 control-label">RFT PB Laki Persen</label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" id="" name="kusta_penderita_rft_pb_laki_persen" placeholder="">
                </div>
              </div>
              <div class="form-group">
                <label for="" class="col-sm-6 control-label">RFT PB Perempuan Jumlah</label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" id="" name="kusta_penderita_rft_pb_perempuan_jumlah" placeholder="">
                </div>
              </div>
              <div class="form-group">
                <label for="" class="col-sm-6 control-label">RFT PB Perempuan Persen</label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" id="" name="kusta_penderita_rft_pb_perempuan_persen" placeholder="">
                </div>
              </div>
            </div>
            <div class="col-md-6">
              <div class="form-group">
                <label for="" class="col-sm-6 control-label">RFT PB Laki+Perempuan Jumlah</label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" id="" name="kusta_penderita_rft_pb_laki_perempuan_jumlah" placeholder="">
                </div>
              </div>
              <div class="form-group">
                <label for="" class="col-sm-6 control-label">RFT PB Laki+Perempuan Persen</label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" id="" name="kusta_penderita_rft_pb_laki_perempuan_persen" placeholder="">
                </div>
              </div>
              <div class="form-group">
                <div class="col-sm-4">
                  <span class="badge bg-green">a. Kusta (MB) Tahun  </span>
                </div>
              </div> 
              <div class="form-group">
                <label for="" class="col-sm-6 control-label">Penderita MB Laki</label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" id="" name="kusta_penderita_mb_laki" placeholder="">
                </div>
              </div>
              <div class="form-group">
                <label for="" class="col-sm-6 control-label">Penderita MB Perempuan</label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" id="" name="kusta_penderita_mb_perempuan" placeholder="">
                </div>
              </div>
              <div class="form-group">
                <label for="" class="col-sm-6 control-label">Penderita MB Laki+Perempuan</label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" id="" name="kusta_penderita_mb_laki_perempuan" placeholder="">
                </div>
              </div>
              <div class="form-group">
                <label for="" class="col-sm-6 control-label">RFT MB Laki Jumlahh</label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" id="" name="kusta_penderita_rft_mb_laki_jumlah" placeholder="">
                </div>
              </div>
              <div class="form-group">
                <label for="" class="col-sm-6 control-label">RFT MB Laki Persen</label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" id="" name="kusta_penderita_rft_mb_laki_persen" placeholder="">
                </div>
              </div>
              <div class="form-group">
                <label for="" class="col-sm-6 control-label">RFT MB Perempuan Jumlah</label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" id="" name="kusta_penderita_rft_mb_perempuan_jumlah" placeholder="">
                </div>
              </div>
              <div class="form-group">
                <label for="" class="col-sm-6 control-label">RFT MB Perempuan Persen</label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" id="" name="kusta_penderita_rft_pb_perempuan_persen" placeholder="">
                </div>
              </div>
              <div class="form-group">
                <label for="" class="col-sm-6 control-label">RFT MB Laki+Perempuan Jumlah</label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" id="" name="kusta_penderita_rft_mb_laki_perempuan_jumlah" placeholder="">
                </div>
              </div>
              <div class="form-group">
                <label for="" class="col-sm-6 control-label">RFT MB Laki+Perempuan Persen</label>
                <div class="col-sm-4">
                  <input type="text" class="form-control" id="" name="kusta_penderita_rft_mb_laki_perempuan_persen" placeholder="">
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
            <router-link to="/table60"><a class="btn btn-success btn-md"><i class="fa fa-fw fa-arrow-left"></i> Kembali</a></router-link>
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
  name: 'Table60',
  components: {},
  created() {

  }
}
</script>