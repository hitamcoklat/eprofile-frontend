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
              <h4>Tabel 76 - TEMPAT PENGELOLAAN MAKANAN (TPM)  MEMENUHI SYARAT KESEHATAN MENURUT KECAMATAN DAN PUSKESMAS </h4>
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
          <PilihRangeRekapPus linkPage="table76" @dataRekap="getRekapBtn" />         
          <!-- Pilih Range Rekap -->             
          </div>
          <!-- /.box-header -->
          <div class="box-body table-responsive no-padding">
            <table class="table table-striped">
              <thead class="thead-dark">
                <tr>
                  <th style="vertical-align: middle; text-align: center;" rowspan="3">NO</th>
                  <th style="vertical-align: middle; text-align: center;" rowspan="3">KECAMATAN</th>
                  <th style="vertical-align: middle; text-align: center;" rowspan="3">DESA</th>
                  <th style="vertical-align: middle; text-align: center;" colspan="5">TPM YANG ADA</th>
                  <th style="vertical-align: middle; text-align: center;" colspan="10">TPM MEMENUHI SYARAT KESEHATAN</th>
                </tr>
                <tr>
                  <td style="vertical-align: middle; text-align: center;" rowspan="2">JASA BOGA</td>
                  <td style="vertical-align: middle; text-align: center;" rowspan="2">RUMAH MAKAN/RESTORAN</td>
                  <td style="vertical-align: middle; text-align: center;" rowspan="2">DEPOT AIR MINUM (DAM)</td>
                  <td style="vertical-align: middle; text-align: center;" rowspan="2">MAKANAN JAJANAN/KANTIN/SENTRA MAKANAN JAJANAN</td>
                  <td style="vertical-align: middle; text-align: center;" rowspan="2">JUMLAH TPM YG ADA</td>
                  <td style="vertical-align: middle; text-align: center;" colspan="2">JASA BOGA</td>
                  <td style="vertical-align: middle; text-align: center;" colspan="2">RUMAH MAKAN/RESTORAN</td>
                  <td style="vertical-align: middle; text-align: center;" colspan="2">DEPOT AIR MINUM (DAM)</td>
                  <td style="vertical-align: middle; text-align: center;" colspan="2">MAKANAN JAJANAN/KANTIN/SENTRA MAKANAN JAJANAN</td>
                  <td style="vertical-align: middle; text-align: center;" colspan="2">JUMLAH TPM MEMENUHI SYARAT KESEHATAN</td>
                </tr>
                <tr>
                  <td style="vertical-align: middle; text-align: center;">JUMLAH</td>
                  <td style="vertical-align: middle; text-align: center;">%</td>
                  <td style="vertical-align: middle; text-align: center;">JUMLAH</td>
                  <td style="vertical-align: middle; text-align: center;">%</td>
                  <td style="vertical-align: middle; text-align: center;">JUMLAH</td>
                  <td style="vertical-align: middle; text-align: center;">%</td>
                  <td style="vertical-align: middle; text-align: center;">JUMLAH</td>
                  <td style="vertical-align: middle; text-align: center;">%</td>
                  <td style="vertical-align: middle; text-align: center;">JUMLAH</td>
                  <td style="vertical-align: middle; text-align: center;">%</td>
                </tr>                
              </thead>                                                  
              <tbody> 
                <tr v-bind:key="item._id" v-for="(item, index) in listDesa">
                  <td style="vertical-align: middle; text-align: center;">{{ index + 1 }}</td>
                  <td style="vertical-align: middle; text-align: center; text-transform: uppercase;"></td>
                  <td style="vertical-align: middle; text-align: center; text-transform: uppercase;">{{ item.NAMA_DESA }}</td>
                  <td style="vertical-align: middle; text-align: center;">{{ detailDesa[index].TPM_YANG_ADA_JASA_BOGA }}</td>
                  <td style="vertical-align: middle; text-align: center;">{{ detailDesa[index].TPM_YANG_ADA_RUMAH_MAKAN_RESTORAN }}</td>
                  <td style="vertical-align: middle; text-align: center;">{{ detailDesa[index].TPM_YANG_ADA_DEPOT_AIR_MINUM }}</td>
                  <td style="vertical-align: middle; text-align: center;">{{ detailDesa[index].TPM_YANG_ADA_MAKANAN_JAJANAN_KANTIN_SENTRA_MAKANAN_JAJANAN }}</td>
                  <td style="vertical-align: middle; text-align: center;">{{ detailDesa[index].TPM_YANG_ADA_JUMLAH_TPM_YANG_ADA }}</td>
                  <td style="vertical-align: middle; text-align: center;">{{ detailDesa[index].TPM_MS_KESEHATAN_JASA_BOGA_JUMLAH }}</td>
                  <td style="vertical-align: middle; text-align: center;">{{ detailDesa[index].TPM_MS_KESEHATAN_JASA_BOGA_PERSEN }}</td>
                  <td style="vertical-align: middle; text-align: center;">{{ detailDesa[index].TPM_MS_KESEHATAN_RUMAH_MAKAN_RESTORAN_JUMLAH }}</td>
                  <td style="vertical-align: middle; text-align: center;">{{ detailDesa[index].TPM_MS_KESEHATAN_RUMAH_MAKAN_RESTORAN_PERSEN }}</td>
                  <td style="vertical-align: middle; text-align: center;">{{ detailDesa[index].TPM_MS_KESEHATAN_DEPOT_AIR_MINUM_JUMLAH }}</td>
                  <td style="vertical-align: middle; text-align: center;">{{ detailDesa[index].TPM_MS_KESEHATAN_DEPOT_AIR_MINUM_PERSEN }}</td>
                  <td style="vertical-align: middle; text-align: center;">{{ detailDesa[index].TPM_MS_KESEHATAN_MAKANAN_JAJANAN_KANTIN_SENTRA_MAKANAN_JAJANAN_JUMLAH }}</td>
                  <td style="vertical-align: middle; text-align: center;">{{ detailDesa[index].TPM_MS_KESEHATAN_MAKANAN_JAJANAN_KANTIN_SENTRA_MAKANAN_JAJANAN_PERSEN }}</td>
                  <td style="vertical-align: middle; text-align: center;">{{ detailDesa[index].TPM_MS_KESEHATAN_JUMLAH_TPM_MS_KESEHATAN_TOTAL }}</td>
                  <td style="vertical-align: middle; text-align: center;">{{ detailDesa[index].TPM_MS_KESEHATAN_JUMLAH_TPM_MS_KESEHATAN_PERSEN }}</td>
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
  name: 'Table76',
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
        TPM_YANG_ADA_JASA_BOGA: 0,
        TPM_YANG_ADA_RUMAH_MAKAN_RESTORAN: 0,
        TPM_YANG_ADA_DEPOT_AIR_MINUM: 0,
        TPM_YANG_ADA_MAKANAN_JAJANAN_KANTIN_SENTRA_MAKANAN_JAJANAN: 0,
        TPM_YANG_ADA_JUMLAH_TPM_YANG_ADA: 0,
        TPM_MS_KESEHATAN_JASA_BOGA_JUMLAH: 0,
        TPM_MS_KESEHATAN_JASA_BOGA_PERSEN: 0,
        TPM_MS_KESEHATAN_RUMAH_MAKAN_RESTORAN_JUMLAH: 0,
        TPM_MS_KESEHATAN_RUMAH_MAKAN_RESTORAN_PERSEN: 0,
        TPM_MS_KESEHATAN_DEPOT_AIR_MINUM_JUMLAH: 0,
        TPM_MS_KESEHATAN_DEPOT_AIR_MINUM_PERSEN: 0,
        TPM_MS_KESEHATAN_MAKANAN_JAJANAN_KANTIN_SENTRA_MAKANAN_JAJANAN_JUMLAH: 0,
        TPM_MS_KESEHATAN_MAKANAN_JAJANAN_KANTIN_SENTRA_MAKANAN_JAJANAN_PERSEN: 0,
        TPM_MS_KESEHATAN_JUMLAH_TPM_MS_KESEHATAN_TOTAL: 0,
        TPM_MS_KESEHATAN_JUMLAH_TPM_MS_KESEHATAN_PERSEN: 0,       
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