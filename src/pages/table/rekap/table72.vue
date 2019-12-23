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
              <h4>Tabel 72 - PERSENTASE SARANA AIR MINUM YANG DILAKUKAN PENGAWASAN </h4>
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
          <PilihRangeRekapPus linkPage="table72" @dataRekap="getRekapBtn" />         
          <!-- Pilih Range Rekap -->              
          </div>
          <!-- /.box-header -->
          <div class="box-body table-responsive no-padding">
            <table class="table table-hover table-bordered">
              <thead class="thead-dark">
                <tr>
                  <th style="vertical-align: middle; text-align: center;" rowspan="2">NO</th>
                  <th style="vertical-align: middle; text-align: center;" rowspan="2">KECAMATAN</th>
                  <th style="vertical-align: middle; text-align: center;" rowspan="2">DESA</th>
                  <th style="vertical-align: middle; text-align: center;" rowspan="2">JUMLAH SARANA AIR MINUM</th>
                  <th style="vertical-align: middle; text-align: center;" colspan="4">INSPEKSI KESEHATAN LINGKUNGAN (IKL)</th>
                  <th style="vertical-align: middle; text-align: center;" colspan="4">PEMERIKSAAN</th>
                </tr>
                <tr>
                  <td style="vertical-align: middle; text-align: center;">JUMLAH SARANA AIR MINUM DI IKL</td>
                  <td style="vertical-align: middle; text-align: center;">%</td>
                  <td style="vertical-align: middle; text-align: center;">JUMLAH SARANA AIR MINUM DGN RESIKO RENDAH+SEDANG</td>
                  <td style="vertical-align: middle; text-align: center;">%</td>
                  <td style="vertical-align: middle; text-align: center;">JUMLAH SARANA AIR MINUM DIAMBIL SAMPLE</td>
                  <td style="vertical-align: middle; text-align: center;">%</td>
                  <td style="vertical-align: middle; text-align: center;">JUMLAH SARANA AIR MINUM MEMENUHI SYARAT</td>
                  <td style="vertical-align: middle; text-align: center;">%</td>
                </tr>                
              </thead>                                                  
              <tbody>
                <tr v-bind:key="item._id" v-for="(item, index) in listDesa">
                  <td style="vertical-align: middle; text-align: center;">{{ index + 1 }}</td>
                  <td style="vertical-align: middle; text-align: center; text-transform: uppercase;"></td>
                  <td style="vertical-align: middle; text-align: center; text-transform: uppercase;">{{ item.NAMA_DESA }}</td>
                  <td style="vertical-align: middle; text-align: center;">{{ detailDesa[index].JUMLAH_SARANA_AIR_MINUM }}</td>
                  <td style="vertical-align: middle; text-align: center;">{{ detailDesa[index].IKL_JUMLAH_SARANA_AIR_MINUM_DI_IKL }}</td>
                  <td style="vertical-align: middle; text-align: center;">{{ detailDesa[index].IKL_SARANA_AIR_MINUM_DI_IKL_PERSEN }}</td>
                  <td style="vertical-align: middle; text-align: center;">{{ detailDesa[index].IKL_JUMLAH_SARANA_AIR_MINUM_DGN_RESIKO_RENDAH_SEDANG }}</td>
                  <td style="vertical-align: middle; text-align: center;">{{ detailDesa[index].IKL_PERSEN_SARANA_AIR_MINUM_DGN_RESIKO_RENDAH_SEDANG }}</td>
                  <td style="vertical-align: middle; text-align: center;">{{ detailDesa[index].PEMERIKSAAN_JUMLAH_SARANA_AIR_MINUM_DIAMBIL_SAMPEL }}</td>
                  <td style="vertical-align: middle; text-align: center;">{{ detailDesa[index].PEMERIKSAAN_PERSEN_SARANA_AIR_MINUM_DIAMBIL_SAMPEL }}</td>
                  <td style="vertical-align: middle; text-align: center;">{{ detailDesa[index].PEMERIKSAAN_JUMLAH_SARANA_AIR_MINUM_MEMENUHI_SYARAT }}</td>
                  <td style="vertical-align: middle; text-align: center;">{{ detailDesa[index].PEMERIKSAAN_PERSEN_SARANA_AIR_MINUM_MEMENUHI_SYARAT }}</td>
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

import PilihRangeRekapPus from '../../../components/PilihRangeRekapPus';

export default {
  name: 'Table20',
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
        JUMLAH_SARANA_AIR_MINUM: 0,
        IKL_JUMLAH_SARANA_AIR_MINUM_DI_IKL: 0,
        IKL_SARANA_AIR_MINUM_DI_IKL_PERSEN: 0,
        IKL_JUMLAH_SARANA_AIR_MINUM_DGN_RESIKO_RENDAH_SEDANG: 0,
        IKL_PERSEN_SARANA_AIR_MINUM_DGN_RESIKO_RENDAH_SEDANG: 0,
        PEMERIKSAAN_JUMLAH_SARANA_AIR_MINUM_DIAMBIL_SAMPEL: 0,
        PEMERIKSAAN_PERSEN_SARANA_AIR_MINUM_DIAMBIL_SAMPEL: 0,
        PEMERIKSAAN_JUMLAH_SARANA_AIR_MINUM_MEMENUHI_SYARAT: 0,
        PEMERIKSAAN_PERSEN_SARANA_AIR_MINUM_MEMENUHI_SYARAT: 0,       
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