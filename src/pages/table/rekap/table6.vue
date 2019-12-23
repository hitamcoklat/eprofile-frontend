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
              <h4>Tabel 6 - Persentase Rumah Sakit Dengan Kemampuan Pelayanan Gawat Darurat (GADAR) Level 1 </h4>
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
              <router-link to="/table6/input"><a class="btn btn-success btn-md"><i class="fa fa-fw fa-plus-circle"></i></i>Tambah Data </a></router-link>
            </div>             
          </div>
          <!-- /.box-header -->
          <div class="box-body table-responsive no-padding">
            <table class="table table-bordered">
              <thead class="thead-dark">
                <tr>
                  <th style="text-align: center;" rowspan="2">Aksi</th>
                  <th style="text-align: center;" rowspan="2">Rumah Sakit<br></th>
                  <th style="text-align: center;" rowspan="2">Jumlah</th>
                  <th style="text-align: center;" colspan="2">Mempunyai Kemampuan Pelayanan Gadar Level 1<br></th>
                </tr>
                <tr>
                  <td style="text-align: center;">Jumlah</td>
                  <td style="text-align: center;">Persen</td>
                </tr>                
              </thead>                                                  
              <tbody>                  
                <tr>
                  <td style="text-align: center;">
                    <button type="button" class="btn btn-xs bg-orange"><i class="fa fa-fw fa-edit"></i>Edit</button>
                    <button type="button" data-toggle="modal" data-target="#modal-danger" class="btn btn-xs btn-danger"><i class="fa fa-fw fa-trash"></i>Hapus</button>
                  </td>
                  <td style="text-align: center;">{{NAMA_RUMAH_SAKIT}}</td>
                  <td style="text-align: center;">{{JUMLAH_GADAR}}</td>
                  <td style="text-align: center;">{{MEMPUNYAI_KEMAMPUAN_YAN_GADAR_LEVEL1_JUMLAH}}</td>
                  <td style="text-align: center;">{{MEMPUNYAI_KEMAMPUAN_YAN_GADAR_LEVEL1_PERSEN}}</td>
                </tr>               
              </tbody>
            </table>
          </div>
          <!-- /.box-body -->
        </div>
        <!-- /.box -->         
      </div>
    </div>
      <!-- /.modal -->
  </div>
  <!-- /.content -->
</template>
<script>
export default {
  name: 'Table6',
  beforeCreate () {
    if(!this.$session.exists()) {
      this.$router.push('login')
    }
  },  
  data() {
    return {
      PILIH_BULAN: '1',
      PILIH_TAHUN: '2019',
      USERNAME: '',
      NAMA_RUMAH_SAKIT: '',
      JUMLAH_GADAR: 0,
      MEMPUNYAI_KEMAMPUAN_YAN_GADAR_LEVEL1_JUMLAH: 0,
      MEMPUNYAI_KEMAMPUAN_YAN_GADAR_LEVEL1_PERSEN: 0
    }
  },
  components: {},
  methods: {

    initialData: function() {
      return {
        JUMLAH_GADAR: 0,
        MEMPUNYAI_KEMAMPUAN_YAN_GADAR_LEVEL1_JUMLAH: 0,
        MEMPUNYAI_KEMAMPUAN_YAN_GADAR_LEVEL1_PERSEN: 0         
      }
    },
    
    cariTanggal: function() {
      this.checkData(this.$data);
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

    checkData: function(data) {

      for (var key in data) {

        this.$http.get(this.$urlNode + '/table/getField?var=' + key + '&thn='+this.PILIH_TAHUN+'&bln=' + this.PILIH_BULAN + '&username=' + this.USERNAME)
          .then((response) => {
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
  created() {
    var user = JSON.parse(this.$session.get('dataLogin'));
    this.NAMA_RUMAH_SAKIT = user.NAMA_RS;    
    this.USERNAME = user.username;    
  }
}
</script>