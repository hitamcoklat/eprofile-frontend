<!-- Main content -->
<template>
<!-- Main content -->
  <div class="content">
    <div class="row">
      <div class="col-md-12">
        <div class="box">
          <div class="box-header with-border"> 
            <div class="alert alert-info alert-dismissible">
              <button type="button" class="close" data-dismiss="alert" aria-hidden="true"></button>
              <h4>Tabel 64 - JUMLAH PENDERITA DAN KEMATIAN PADA KLB MENURUT JENIS KEJADIAN LUAR BIASA (KLB) </h4>
              <div class="row">
                <div class="col-md-6">
                  <h5>Tabel dibawah ini rekap perbulan dari setiap Desa</h5>
                  <h5> Pilih Bulan dan Tahun pada periode yang di inginkan dan klik tombol <strong>Cari</strong></h5>
                  <h5> Tombol <strong><span class="badge bg-navy"><i class="fa fa-fw fa-file-excel-o"></i></span> export to excel</strong> digunakan untuk mengunduh tabel di bawah</h5>
                  <h5> Tombol <strong> <span class="badge bg-green"><i class="fa fa-fw fa-plus-circle"></i></span> tambah data</strong> digunakan untuk menambah data setiap desa</h5>
                </div>
                <div class="col-md-6">
                  <h5> Tombol <strong><span class="badge bg-orange"><i class="fa fa-fw fa-edit"></i></span> edit </strong> digunakan untuk mengubah isi tabel </h5>
                  <h5> Tombol <strong> <span class="badge bg-red"><i class="fa fa-fw fa-trash"></i></span> happus</strong> digunakan untuk menghapus isi tabel </h5>
                </div>
              </div>
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
            <div class="col-md-6">
              <button type="button" class="btn btn-primary btn-md"><i class="fa fa-fw fa-search"></i> Cari</button>
              <button type="button" class="btn bg-navy btn-md"><i class="fa fa-fw fa-file-excel-o"></i>Export to Excel</button>
              <router-link to="/table64/input"><a class="btn btn-success btn-md"><i class="fa fa-fw fa-plus-circle"></i></i>Tambah Data </a></router-link>
            </div>             
          </div>
          <!-- /.box-header -->
          <div class="box-body table-responsive no-padding">
            <table class="table table-bordered">
              <thead class="thead-dark">
                <tr>
                  <th rowspan="2">NO</th>
                  <th rowspan="2">JENIS KEJADIAN LUAR BIASA</th>
                  <th colspan="2">YANG TERSERANG</th>
                  <th colspan="3">WAKTU KEJADIAN (TANGGAL)</th>
                  <th colspan="3">JUMLAH PENDERITA</th>
                  <th colspan="12">KELOMPOK UMUR PENDERITA</th>
                  <th colspan="3">JUMLAH KEMATIAN</th>
                  <th colspan="3">JUMLAH PENDUDUK TERANCAM</th>
                  <th colspan="3">ATTACK RATE (%)</th>
                  <th colspan="3">CFR (%)</th>
                </tr>
                <tr>
                  <td>JUMLAH KEC</td>
                  <td>JUMLAH DESA/KEL</td>
                  <td>DIKETAHUI</td>
                  <td>DITANGGULANGI</td>
                  <td>AKHIR</td>
                  <td>L</td>
                  <td>P</td>
                  <td>LP</td>
                  <td>0-7 HARI</td>
                  <td>8-28 HARI</td>
                  <td>1-11 BLN</td>
                  <td>1-4 THN</td>
                  <td>5-9 THN</td>
                  <td>10-14 THN</td>
                  <td>15-19 THN</td>
                  <td>20-44 THN</td>
                  <td>45-54 THN</td>
                  <td>55-59 THN</td>
                  <td>60-69 THN</td>
                  <td>70+ THN</td>
                  <td>L</td>
                  <td>P</td>
                  <td>LP</td>
                  <td>L</td>
                  <td>P</td>
                  <td>LP</td>
                  <td>L</td>
                  <td>P</td>
                  <td>LP</td>
                  <td>L</td>
                  <td>P</td>
                  <td>LP</td>
                </tr>                
              </thead>                                                  
              <tbody>                  
                <tr>
                  <td>
                    <button type="button" class="btn btn-xs bg-orange"><i class="fa fa-fw fa-edit"></i>Edit</button>
                    <button type="button" data-toggle="modal" data-target="#modal-danger" class="btn btn-xs btn-danger"><i class="fa fa-fw fa-trash"></i>Hapus</button>
                  </td>
                </tr>               
              </tbody>
              <tfoot>
                <tr>
                  <th rowspan="2">NO</th>
                  <th rowspan="2">JENIS KEJADIAN LUAR BIASA</th>
                  <th colspan="2">YANG TERSERANG</th>
                  <th colspan="3">WAKTU KEJADIAN (TANGGAL)</th>
                  <th colspan="3">JUMLAH PENDERITA</th>
                  <th colspan="12">KELOMPOK UMUR PENDERITA</th>
                  <th colspan="3">JUMLAH KEMATIAN</th>
                  <th colspan="3">JUMLAH PENDUDUK TERANCAM</th>
                  <th colspan="3">ATTACK RATE (%)</th>
                  <th colspan="3">CFR (%)</th>
                </tr>
                <tr>
                  <td>JUMLAH KEC</td>
                  <td>JUMLAH DESA/KEL</td>
                  <td>DIKETAHUI</td>
                  <td>DITANGGULANGI</td>
                  <td>AKHIR</td>
                  <td>L</td>
                  <td>P</td>
                  <td>LP</td>
                  <td>0-7 HARI</td>
                  <td>8-28 HARI</td>
                  <td>1-11 BLN</td>
                  <td>1-4 THN</td>
                  <td>5-9 THN</td>
                  <td>10-14 THN</td>
                  <td>15-19 THN</td>
                  <td>20-44 THN</td>
                  <td>45-54 THN</td>
                  <td>55-59 THN</td>
                  <td>60-69 THN</td>
                  <td>70+ THN</td>
                  <td>L</td>
                  <td>P</td>
                  <td>LP</td>
                  <td>L</td>
                  <td>P</td>
                  <td>LP</td>
                  <td>L</td>
                  <td>P</td>
                  <td>LP</td>
                  <td>L</td>
                  <td>P</td>
                  <td>LP</td>
                </tr>                
              </tfoot>
            </table>
          </div>
          <!-- /.box-body -->
          <div class="box-footer clearfix">
            <button type="button" class="btn bg-navy btn-md"><i class="fa fa-fw fa-file-excel-o"></i>Export to Excel</button>
            <router-link to="/table64/input"><a class="btn btn-success btn-md"><i class="fa fa-fw fa-plus-circle"></i></i>Tambah Data </a></router-link>
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
    <div class="modal modal-danger fade" id="modal-danger">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span></button>
              <h4 class="modal-title">Konfirmasi</h4>
            </div>
            <div class="modal-body">
              <p>Apakah sudah yakin ingin menghapus dari database&nbsp;&#63;</p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-outline pull-left" data-dismiss="modal">Close</button>
              <button type="button" class="btn btn-outline">Save changes</button>
            </div>
          </div>
          <!-- /.modal-content -->
        </div>
        <!-- /.modal-dialog -->
      </div>
      <!-- /.modal -->
  </div>
  <!-- /.content -->
</template>
<script>
export default {
  name: 'Table64',
  components: {},
  created() {

  }
}
</script>