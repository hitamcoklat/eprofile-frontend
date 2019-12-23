<!-- Main content -->
<template>
  <div class="content">
    <div class="row">
      <div class="col-md-12">
        <div class="box">
          <div class="box-header with-border">
            <div class="alert alert-info alert-dismissible">
              <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
              <h4><i class="icon fa fa-info"></i> Dashboard Rujukan</h4>
              <h5> Tombol <strong><span class="badge bg-blue"><i class="fa fa-fw fa-search"></i></span> Cari</strong>  digunakan melihat tabel pada Bulan dan Tahun yang diinginkan  </h5>
              <h5> <span class="badge bg-green"><i class="fa fa-fw fa-send"></i></span> Tombol ini digunakan untuk mengirimkan ke kabupaten/kota </h5>                
            </div>
            <div class="col-md-3">
              <div class="form-group">
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
            <div class="col-md-3">
              <div class="form-group">
                <select class="form-control">
                  <option selected="">Pilih Tahun</option>
                  <option>2016</option>
                  <option>2017</option>
                  <option>2018</option>
                  <option>2019</option>
                </select>
              </div>
            </div>
            <div class="col-md-3">
              <button type="button" class="btn btn-primary btn-md"><i class="fa fa-fw fa-search"></i> Cari</button>
            </div>
          </div>
          <!-- /.box-header -->
          <div class="box-body table-responsive no-padding">
            <table class="table table-bordered">
              <thead class="thead-dark">                  
                <tr>
                  <th style="width: 8px">#</th>
                  <th style="width: 8%">Aksi</th>
                  <th>Task</th>
                  <th>Progress</th>
                  <th style="width: 40px">Label</th>
                  <th style="width: 40px">Status</th>
                </tr>
              </thead>
              <tbody>                  
                <tr>
                  <td>1</td>
                  <td>
                    <button type="button" data-toggle="modal" data-target="#modal-success" class="btn btn-xs btn-success"><i class="fa fa-fw fa-send"></i> kirim</button>
                  </td>                 
                  <td style="width: 40%">
                    <router-link to="/table5"> Table 5 </a><br/> <span class="badge bg-green">Jumlah Kunjungan Pasien Baru Rawat Jalan, Inap dan Kunjungan Gangguan Jiwa di Sarana Pelayanan Kesehatan</span></router-link>
                  </td>                    
                  <td>
                    <div class="progress progress-sm progress-striped active">
                      <div class="progress-bar progress-bar-success" style="width: 90%"></div>
                    </div>
                  </td>
                  <td><span class="badge bg-green">90%</span></td>
                  <td>
                    <span class="badge bg-orange">belum dikirim</span>
                    <span class="badge bg-green">dikirim</span>
                  </td>
                </tr> 
                <tr>
                  <td>2</td>
                  <td>
                    <button type="button" data-toggle="modal" data-target="#modal-success" class="btn btn-xs btn-success"><i class="fa fa-fw fa-send"></i> kirim</button>
                  </td>                 
                  <td style="width: 40%">
                    <router-link to="/table6"> Table 6 </a><br/> <span class="badge bg-green">Persentase Rumah Sakit Dengan Kemampuan Pelayanan Gawat Darurat (GADAR) Level 1</span></router-link>
                  </td>                    
                  <td>
                    <div class="progress progress-sm progress-striped active">
                      <div class="progress-bar progress-bar-success" style="width: 90%"></div>
                    </div>
                  </td>
                  <td><span class="badge bg-green">90%</span></td>
                  <td>
                    <span class="badge bg-orange">belum dikirim</span>
                    <span class="badge bg-green">dikirim</span>
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>
                    <button type="button" data-toggle="modal" data-target="#modal-success" class="btn btn-xs btn-success"><i class="fa fa-fw fa-send"></i> kirim</button>
                  </td>                 
                  <td style="width: 40%">
                    <router-link to="/table7"> Table 7 </a><br/> <span class="badge bg-green">Angka Kematian Pasien Di Rumah Sakit</span></router-link>
                  </td>                    
                  <td>
                    <div class="progress progress-sm progress-striped active">
                      <div class="progress-bar progress-bar-success" style="width: 90%"></div>
                    </div>
                  </td>
                  <td><span class="badge bg-green">90%</span></td>
                  <td>
                    <span class="badge bg-orange">belum dikirim</span>
                    <span class="badge bg-green">dikirim</span>
                  </td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>
                    <button type="button" data-toggle="modal" data-target="#modal-success" class="btn btn-xs btn-success"><i class="fa fa-fw fa-send"></i> kirim</button>
                  </td>                 
                  <td style="width: 40%">
                    <router-link to="/table8"> Table 8 </a><br/> <span class="badge bg-green">Indikator Kinerja Pelayanan Di Rumah Sakit</span></router-link>
                  </td>                    
                  <td>
                    <div class="progress progress-sm progress-striped active">
                      <div class="progress-bar progress-bar-success" style="width: 90%"></div>
                    </div>
                  </td>
                  <td><span class="badge bg-green">90%</span></td>
                  <td>
                    <span class="badge bg-orange">belum dikirim</span>
                    <span class="badge bg-green">dikirim</span>
                  </td>
                </tr>               
              </tbody>
              <tfoot>
                <tr>
                  <th style="width: 8px">#</th>
                  <th>Aksi</th>
                  <th>Task</th>
                  <th>Progress</th>
                  <th style="width: 40px">Label</th>
                  <th style="width: 40px">Status</th>
                </tr>
              </tfoot>
            </table>
          </div>
          <!-- /.box-body -->
          <div class="box-footer clearfix">
            <ul class="pagination pagination-sm no-margin pull-right">
              <li><a href="#">&laquo;</a></li>
              <li><a href="#">1</a></li>
              <li><a href="#">2</a></li>
              <li><a href="#">3</a></li>
              <li><a href="#">&raquo;</a></li>
            </ul>
          </div>
        </div>
        <!-- /.box -->         
      </div>
    </div>
    <div class="modal modal-success fade" id="modal-success">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span></button>
              <h4 class="modal-title">Konfirmasi</h4>
            </div>
            <div class="modal-body">
              <p>Apakah yakin ingin mengirimkan ke kabupaten/kota ?</p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-outline pull-left" data-dismiss="modal">Tidak</button>
              <button type="button" class="btn btn-outline">Ya</button>
            </div>
          </div>
          <!-- /.modal-content -->
        </div>
        <!-- /.modal-dialog -->
      </div>
      <!-- /.modal -->
  </div>
</template>
<!-- /.content -->
<script>
export default {
  name: 'Rujukan',
  components: {},
  created() {

  }
}
</script>