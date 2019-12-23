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
              <h4>Tabel 54 - JUMLAH KASUS HIV MENURUT JENIS KELAMIN DAN KELOMPOK UMUR </h4>
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
          <!-- Pilih Range Rekap -->
          <PilihRangeRekapPus linkPage="table54" @dataRekap="getRekapBtn" />         
          <!-- Pilih Range Rekap -->              
          </div>
          <!-- /.box-header -->
          <div class="box-body table-responsive no-padding">
            <table class="table table-hover table-bordered">
              <thead class="thead-dark">
                <tr>
                  <th rowspan="2">NO</th>
                  <th rowspan="2">KELOMPOK UMUR </th>
                  <th colspan="4">HIV</th>
                </tr>
                <tr>
                  <td>L</td>
                  <td>P</td>
                  <td>L+P</td>
                  <td>PROPORSI KELOMPOK UMUR</td>
                </tr>                
              </thead>                                                  
              <tbody>                                
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

import PilihRangeRekapPus from '../../../components/PilihRangeRekapPus';

export default {
  name: 'Table54',
  data() {
    return {
      USERNAME: '',
      ID_DESA: '',
      listDesa: [],
      detailDesa: [],
      dataCollection: []
    }
  },
  components: {
    PilihRangeRekapPus
  },
  methods: {

    initialData: function() {
      return {
        HIV_L_KURANG_DARI_4_TAHUN: 0,
        HIV_P_KURANG_DARI_4_TAHUN: 0,
        HIV_L_P_KURANG_DARI_4_TAHUN: 0,
        HIV_PROPORSI_KELOMPOK_UMUR_KURANG_DARI_4_TAHUN: 0,
        HIV_L_5_14_TAHUN: 0,
        HIV_P_5_14_TAHUN: 0,
        HIV_L_P_5_14_TAHUN: 0,
        HIV_PROPORSI_KELOMPOK_UMUR_5_14_TAHUN: 0,
        HIV_L_15_19_TAHUN: 0,
        HIV_P_15_19_TAHUN: 0,
        HIV_L_P_15_19_TAHUN: 0,
        HIV_PROPORSI_KELOMPOK_UMUR_15_19_TAHUN: 0,
        HIV_L_20_24_TAHUN: 0,
        HIV_P_20_24_TAHUN: 0,
        HIV_L_P_20_24_TAHUN: 0,
        HIV_PROPORSI_KELOMPOK_UMUR_20_24_TAHUN: 0,
        HIV_L_25_49_TAHUN: 0,
        HIV_P_25_49_TAHUN: 0,
        HIV_L_P_25_49_TAHUN: 0,
        HIV_PROPORSI_KELOMPOK_UMUR_25_49_TAHUN: 0,
        HIV_L_LEBIH_DARI_50_TAHUN: 0,
        HIV_P_LEBIH_DARI_50_TAHUN: 0,
        HIV_L_P_LEBIH_DARI_50_TAHUN: 0,
        HIV_PROPORSI_KELOMPOK_UMUR_LEBIH_DARI_50_TAHUN: 0,          
      }
    },    

    getRekapBtn: function(value) {
      this.listDesa = value.listDesa;
      
      const dataDesa  = value.listDesa;
      const dataCollection = value.insideData.data;
      const dataInit = this.initialData();
      const newDesa = [];

      dataDesa.forEach((el, index) => {
        // NEW DEFINITION OF VILLAGE WADAW HOHOHOHOH
        newDesa[index] = { 'ID_DESA' : el._id };

        Object.keys(dataInit).forEach((elem, ind) => {
          newDesa[index][elem] = 0;
        })         
        
        dataCollection.forEach((e, i) => {          
          Object.keys(dataInit).forEach((elem, ind) => {
            if(e.NAMA_FIELD == elem && newDesa[index].ID_DESA == e.ID_DESA) {
              newDesa[index][elem] += parseInt(e.VALUE);
            }            
          })          
        });
      });

      this.detailDesa = newDesa;
    }
  },
  created() {
  }
}
</script>