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
              <h4>Tabel 8 - INDIKATOR KINERJA PELAYANAN DI RUMAH SAKIT</h4>
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
                <select v-model="PILIH_BULAN" class="form-control">
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
            <div class="col-md-3">
              <div class="form-group">
                  <select v-model="PILIH_TAHUN" class="form-control">
                    <option selected="selected">Pilih Tahun</option>
                    <option value="2019">2019</option>
                    <option value="2020">2020</option>
                    <option value="2021">2021</option>
                  </select>
              </div>
            </div>
            <div class="col-md-6">
              <button @click="cariTanggal()" type="button" class="btn btn-primary btn-md"><i class="fa fa-fw fa-search"></i> Cari</button>
              <button type="button" class="btn bg-navy btn-md"><i class="fa fa-fw fa-file-excel-o"></i>Export to Excel</button>
              <router-link to="/table8/input"><a class="btn btn-success btn-md"><i class="fa fa-fw fa-plus-circle"></i></i>Tambah Data </a></router-link>
            </div>             
          </div>
          <!-- /.box-header -->
          <div class="box-body table-responsive no-padding">
            <table class="table table-striped">
              <thead class="thead-dark">
                <tr>
                  <th>Aksi</th>
                  <th>Nama Rumah Sakit</th>
                  <th>Jumlah<br>Tempat Tidur</th>
                  <th>Pasien Keluar<br>(Hidup + Mati)<br></th>
                  <th>Jumlah Hari<br>Perawatan<br></th>
                  <th>Jumlah Lama <br>Dirawat<br></th>
                  <th>BOR (%)<br></th>
                  <th>BTO (Kali)</th>
                  <th>TOI (Hari)</th>
                  <th>ALOS (Hari)</th>
                </tr>                                  
              </thead>
              <tbody>                  
                <tr>
                  <td>
                    <button type="button" class="btn btn-xs bg-orange"><i class="fa fa-fw fa-edit"></i>Edit</button>
                    <button type="button" @click="reset()" class="btn btn-xs btn-danger"><i class="fa fa-fw fa-trash"></i>Hapus</button>
                  </td>
                  <td>{{ NAMA_RUMAH_SAKIT }}</td>
                  <td>{{ JUMLAH_TEMPAT_TIDUR }}</td>
                  <td>{{ PASIEN_KELUAR_HIDUP_MATI }}</td>
                  <td>{{ JUMLAH_HARI_PERAWATAN }}</td>
                  <td>{{ JUMLAH_LAMA_DIRAWAT }}</td>
                  <td>{{ BOR_PERSEN }}</td>
                  <td>{{ BTO_KALI }}</td>
                  <td>{{ TOI_HARI }}</td>
                  <td>{{ ALOS_HARI }}</td>
                </tr>               
              </tbody>
            </table>
          </div>
          <!-- /.box-body -->
        </div>
        <!-- /.box -->         
      </div>
    </div>
  </div>
  <!-- /.content -->
</template>
<script>
export default {
  name: 'Table8',
  data() {
    return {
      PILIH_BULAN: '1',
      PILIH_TAHUN: '2019',
      USERNAME: '',
      NAMA_RUMAH_SAKIT: '',
      JUMLAH_TEMPAT_TIDUR: 0,
      PASIEN_KELUAR_HIDUP_MATI: 0,
      JUMLAH_HARI_PERAWATAN: 0,
      JUMLAH_LAMA_DIRAWAT: 0,
      BOR_PERSEN: 0,
      BTO_KALI: 0,
      TOI_HARI: 0,
      ALOS_HARI: 0
    }
  },
  components: {},
  methods: {

    initialData: function() {
      return {
        JUMLAH_TEMPAT_TIDUR: 0,
        PASIEN_KELUAR_HIDUP_MATI: 0,
        JUMLAH_HARI_PERAWATAN: 0,
        JUMLAH_LAMA_DIRAWAT: 0,
        BOR_PERSEN: 0,
        BTO_KALI: 0,
        TOI_HARI: 0,
        ALOS_HARI: 0          
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