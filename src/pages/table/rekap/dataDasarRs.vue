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
              <h4>Tabel Tambahan - Data Dasar Rumah Sakit</h4>
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
            <div class="col-md-6">
              <router-link to="/dataDasarRs/input"><a class="btn btn-success btn-md"><i class="fa fa-fw fa-plus-circle"></i></i>Update Data </a></router-link>
            </div>             
          </div>
          <!-- /.box-header -->
          <div class="box-body table-responsive no-padding">
            <table class="table table-bordered">
              <thead class="thead-dark">
                <tr>
                  <th rowspan="2">No</th>
                  <th rowspan="2">Dinas Kesehatan<br></th>
                  <th rowspan="2">Nama Rumah Sakit</th>
                  <th rowspan="2">Jenis Rumah Sakit<br></th>
                  <th rowspan="2">Tipe Rumah Sakit<br></th>
                  <th rowspan="2">Direktur Rumah Sakit</th>
                  <th rowspan="2">Alamat Rumah Sakit</th>
                  <th rowspan="2">Email/Website</th>
                  <th rowspan="2">Telepon</th>
                  <th colspan="2">Titik Koordinat</th>
                  <th colspan="14">Jumlah Tempat Tidur</th>
                  <th colspan="10">Tenaga Medis</th>
                </tr>
                <tr>
                  <td>Lintang<br></td>
                  <td>Bujur</td>
                  <td>VVIP</td>
                  <td>VIP</td>
                  <td>Kelas 1</td>
                  <td>Kelas 2</td>
                  <td>Kelas 3</td>
                  <td>ICU</td>
                  <td>PICU</td>
                  <td>NICU</td>
                  <td>TT Bayi Baru Lahir</td>
                  <td>HCU</td>
                  <td>ICCU</td>
                  <td>IGD</td>
                  <td>TT di Ruang Operasi</td>
                  <td>TT di Ruang Isolasi</td>
                  <td>Dokter Umum</td>
                  <td>Dokter Spesialis</td>
                  <td>Dokter Gigi</td>
                  <td>Perawat</td>
                  <td>Bidan</td>
                  <td>Keteknisan Medis</td>
                  <td>Kesehatan Masyarakat</td>
                  <td>Kesehatan Lingkungan</td>
                  <td>Nutrisionis</td>
                  <td>Tenaga Non Kesehatan</td>
                </tr>                                   
              </thead>
              <tbody>                  
                <tr>
                  <td>
                  </td>
                </tr>               
              </tbody>
            </table>
          </div>
          <!-- /.box-body -->
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
  name: 'DataDasarRs',
  components: {},
  created() {

  }
}
</script>