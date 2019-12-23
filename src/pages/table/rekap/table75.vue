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
              <h4>Tabel 75 - PERSENTASE TEMPAT-TEMPAT UMUM (TTU) MEMENUHI SYARAT KESEHATAN MENURUT KECAMATAN DAN PUSKESMAS </h4>
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
          <PilihRangeRekapPus linkPage="table75" @dataRekap="getRekapBtn" />         
          <!-- Pilih Range Rekap -->             
          </div>
          <!-- /.box-header -->
          <div class="box-body table-responsive no-padding">
            <table id="dataTable" class="table table-hover table-bordered">
              <thead class="thead-dark">
                <tr>
                  <th style="vertical-align: middle; text-align: center;" rowspan="4">NO</th>
                  <th style="vertical-align: middle; text-align: center;" rowspan="4">KECAMATAN</th>
                  <th style="vertical-align: middle; text-align: center;" rowspan="4">DESA</th>
                  <th style="vertical-align: middle; text-align: center;" colspan="8">TTU YANG ADA</th>
                  <th style="vertical-align: middle; text-align: center;" colspan="16">TTU MEMENUHI SYARAT KESEHATAN</th>
                </tr>
                <tr>
                  <td style="vertical-align: middle; text-align: center;" colspan="3" rowspan="2">SARANA PENDIDIKAN</td>
                  <td style="vertical-align: middle; text-align: center;" colspan="2" rowspan="2">SARANA KESEHATAN</td>
                  <td style="vertical-align: middle; text-align: center;" rowspan="3">TEMPAT IBADAH</td>
                  <td style="vertical-align: middle; text-align: center;" rowspan="3">PASAR</td>
                  <td style="vertical-align: middle; text-align: center;" rowspan="3">JUMLAH TTU YANG ADA</td>
                  <td style="vertical-align: middle; text-align: center;" colspan="6">SARANA PENDIDIKAN</td>
                  <td style="vertical-align: middle; text-align: center;" colspan="4">SARANA KESEHATAN</td>
                  <td style="vertical-align: middle; text-align: center;" colspan="2" rowspan="2">TEMPAT IBADAH </td>
                  <td style="vertical-align: middle; text-align: center;" colspan="2" rowspan="2">PASAR</td>
                  <td style="vertical-align: middle; text-align: center;" colspan="2" rowspan="2">TOTAL</td>
                </tr>
                <tr>
                  <td style="vertical-align: middle; text-align: center;" colspan="2">SD/MI</td>
                  <td style="vertical-align: middle; text-align: center;" colspan="2">SMP/MTs</td>
                  <td style="vertical-align: middle; text-align: center;" colspan="2">SMA/MA</td>
                  <td style="vertical-align: middle; text-align: center;" colspan="2">PUSKESMAS </td>
                  <td style="vertical-align: middle; text-align: center;" colspan="2">RUMAH SAKIT</td>
                </tr>
                <tr>
                  <td style="vertical-align: middle; text-align: center;">SD/MI</td>
                  <td style="vertical-align: middle; text-align: center;">SMP/MTs</td>
                  <td style="vertical-align: middle; text-align: center;">SMA/MA</td>
                  <td style="vertical-align: middle; text-align: center;">PUSKESMAS</td>
                  <td style="vertical-align: middle; text-align: center;">RUMAH SAKIT</td>
                  <td style="vertical-align: middle; text-align: center;">∑</td>
                  <td style="vertical-align: middle; text-align: center;">%</td>
                  <td style="vertical-align: middle; text-align: center;">∑</td>
                  <td style="vertical-align: middle; text-align: center;">%</td>
                  <td style="vertical-align: middle; text-align: center;">∑</td>
                  <td style="vertical-align: middle; text-align: center;">%</td>
                  <td style="vertical-align: middle; text-align: center;">∑</td>
                  <td style="vertical-align: middle; text-align: center;">%</td>
                  <td style="vertical-align: middle; text-align: center;">∑</td>
                  <td style="vertical-align: middle; text-align: center;">%</td>
                  <td style="vertical-align: middle; text-align: center;">∑</td>
                  <td style="vertical-align: middle; text-align: center;">%</td>
                  <td style="vertical-align: middle; text-align: center;">∑</td>
                  <td style="vertical-align: middle; text-align: center;">%</td>
                  <td style="vertical-align: middle; text-align: center;">∑</td>
                  <td style="vertical-align: middle; text-align: center;">%</td>
                </tr>                
              </thead>                                                  
              <tbody> 
                <tr v-bind:key="item._id" v-for="(item, index) in listDesa">
                  <td style="vertical-align: middle; text-align: center;">{{ index + 1 }}</td>
                  <td style="vertical-align: middle; text-align: center; text-transform: uppercase;"></td>
                  <td style="vertical-align: middle; text-align: center; text-transform: uppercase;">{{ item.NAMA_DESA }}</td>
                  <td style="vertical-align: middle; text-align: center;">{{ detailDesa[index].SEKOLAH_SD_MI_JUMLAH }}</td>
                  <td style="vertical-align: middle; text-align: center;">{{ detailDesa[index].SEKOLAH_SMP_MTS_JUMLAH }}</td>
                  <td style="vertical-align: middle; text-align: center;">{{ detailDesa[index].SEKOLAH_SMA_MA_JUMLAH }}</td>
                  <td style="vertical-align: middle; text-align: center;">{{ detailDesa[index].TTU_YANG_ADA_SARANA_KESEHATAN_PUSKESMAS }}</td>
                  <td style="vertical-align: middle; text-align: center;">{{ detailDesa[index].TTU_YANG_ADA_SARANA_KESEHATAN_RUMAH_SAKIT_UMUM }}</td>
                  <td style="vertical-align: middle; text-align: center;">{{ detailDesa[index].TTU_YANG_ADA_TEMPAT_IBADAH }}</td>
                  <td style="vertical-align: middle; text-align: center;">{{ detailDesa[index].TTU_YANG_ADA_PASAR }}</td>
                  <td style="vertical-align: middle; text-align: center;">{{ detailDesa[index].TTU_YANG_ADA_JUMLAH_TTU_YANG_ADA }}</td>
                  <td style="vertical-align: middle; text-align: center;">{{ detailDesa[index].TTU_MS_KESEHATAN_SARANA_PENDIDIKAN_SD_MI_JUMLAH }}</td>
                  <td style="vertical-align: middle; text-align: center;">{{ detailDesa[index].TTU_MS_KESEHATAN_SARANA_PENDIDIKAN_SD_MI_PERSEN }}</td>
                  <td style="vertical-align: middle; text-align: center;">{{ detailDesa[index].TTU_MS_KESEHATAN_SARANA_PENDIDIKAN_SMP_MTS_JUMLAH }}</td>
                  <td style="vertical-align: middle; text-align: center;">{{ detailDesa[index].TTU_MS_KESEHATAN_SARANA_PENDIDIKAN_SMP_MTS_PERSEN }}</td>
                  <td style="vertical-align: middle; text-align: center;">{{ detailDesa[index].TTU_MS_KESEHATAN_SARANA_PENDIDIKAN_SMA_MA_JUMLAH }}</td>
                  <td style="vertical-align: middle; text-align: center;">{{ detailDesa[index].TTU_MS_KESEHATAN_SARANA_PENDIDIKAN_SMA_MA_PERSEN }}</td>
                  <td style="vertical-align: middle; text-align: center;">{{ detailDesa[index].TTU_MS_KESEHATAN_SARANA_KESEHATAN_PUSKESMAS_JUMLAH }}</td>
                  <td style="vertical-align: middle; text-align: center;">{{ detailDesa[index].TTU_MS_KESEHATAN_SARANA_KESEHATAN_PUSKESMAS_PERSEN }}</td>
                  <td style="vertical-align: middle; text-align: center;">{{ detailDesa[index].TTU_MS_KESEHATAN_SARANA_KESEHATAN_RUMAH_SAKIT_JUMLAH }}</td>
                  <td style="vertical-align: middle; text-align: center;">{{ detailDesa[index].TTU_MS_KESEHATAN_SARANA_KESEHATAN_RUMAH_SAKIT_PERSEN }}</td>
                  <td style="vertical-align: middle; text-align: center;">{{ detailDesa[index].TTU_MS_KESEHATAN_TEMPAT_IBADAH_JUMLAH }}</td>
                  <td style="vertical-align: middle; text-align: center;">{{ detailDesa[index].TTU_MS_KESEHATAN_TEMPAT_IBADAH_PERSEN }}</td>
                  <td style="vertical-align: middle; text-align: center;">{{ detailDesa[index].TTU_MS_KESEHATAN_PASAR_JUMLAH }}</td>
                  <td style="vertical-align: middle; text-align: center;">{{ detailDesa[index].TTU_MS_KESEHATAN_PASAR_PERSEN }}</td>
                  <td style="vertical-align: middle; text-align: center;">{{ detailDesa[index].TTU_MS_KESEHATAN_JUMLAH_TOTAL_JUMLAH }}</td>
                  <td style="vertical-align: middle; text-align: center;">{{ detailDesa[index].TTU_MS_KESEHATAN_JUMLAH_TOTAL_PERSEN }}</td>
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
        SEKOLAH_SD_MI_JUMLAH: 0,
        SEKOLAH_SMP_MTS_JUMLAH: 0,
        SEKOLAH_SMA_MA_JUMLAH: 0,
        TTU_YANG_ADA_SARANA_KESEHATAN_PUSKESMAS: 0,
        TTU_YANG_ADA_SARANA_KESEHATAN_RUMAH_SAKIT_UMUM: 0,
        TTU_YANG_ADA_TEMPAT_IBADAH: 0,
        TTU_YANG_ADA_PASAR: 0,
        TTU_YANG_ADA_JUMLAH_TTU_YANG_ADA: 0,
        TTU_MS_KESEHATAN_SARANA_PENDIDIKAN_SD_MI_JUMLAH: 0,
        TTU_MS_KESEHATAN_SARANA_PENDIDIKAN_SD_MI_PERSEN: 0,
        TTU_MS_KESEHATAN_SARANA_PENDIDIKAN_SMP_MTS_JUMLAH: 0,
        TTU_MS_KESEHATAN_SARANA_PENDIDIKAN_SMP_MTS_PERSEN: 0,
        TTU_MS_KESEHATAN_SARANA_PENDIDIKAN_SMA_MA_JUMLAH: 0,
        TTU_MS_KESEHATAN_SARANA_PENDIDIKAN_SMA_MA_PERSEN: 0,
        TTU_MS_KESEHATAN_SARANA_KESEHATAN_PUSKESMAS_JUMLAH: 0,
        TTU_MS_KESEHATAN_SARANA_KESEHATAN_PUSKESMAS_PERSEN: 0,
        TTU_MS_KESEHATAN_SARANA_KESEHATAN_RUMAH_SAKIT_JUMLAH: 0,
        TTU_MS_KESEHATAN_SARANA_KESEHATAN_RUMAH_SAKIT_PERSEN: 0,
        TTU_MS_KESEHATAN_TEMPAT_IBADAH_JUMLAH: 0,
        TTU_MS_KESEHATAN_TEMPAT_IBADAH_PERSEN: 0,
        TTU_MS_KESEHATAN_PASAR_JUMLAH: 0,
        TTU_MS_KESEHATAN_PASAR_PERSEN: 0,
        TTU_MS_KESEHATAN_JUMLAH_TOTAL_JUMLAH: 0,
        TTU_MS_KESEHATAN_JUMLAH_TOTAL_PERSEN: 0,       
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