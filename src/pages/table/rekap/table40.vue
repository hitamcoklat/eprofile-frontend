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
              <h4>Tabel 1 - LUAS WILAYAH, JUMLAH DESA/KELURAHAN, JUMLAH PENDUDUK, JUMLAH RUMAH TANGGA DAN KEPADATAN PENDUDUK</h4>
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
          <PilihRangeRekapPus linkPage="table40" @dataRekap="getRekapBtn" />         
          <!-- Pilih Range Rekap -->           
          </div>
          <!-- /.box-header -->
          <div class="box-body table-responsive no-padding">
            <table id="dataTable" class="table table-striped">
              <thead class="thead-dark">
                <tr>
                    <th style="vertical-align: middle; text-align: center;" rowspan="4">No</th>
                    <th style="vertical-align: middle; text-align: center;" rowspan="4">Desa</th>
                    <th style="vertical-align: middle; text-align: center;" colspan="3" rowspan="3">Jumlah Baduta</th>
                    <th style="vertical-align: middle; text-align: center;" colspan="12">Baduta Diimunisasi</th>
                  </tr>
                  <tr>
                    <td style="vertical-align: middle; text-align: center;" colspan="6">DPT-HB-Hib4</td>
                    <td style="vertical-align: middle; text-align: center;" colspan="6">Campak/MR2</td>
                  </tr>
                  <tr>
                    <td style="vertical-align: middle; text-align: center;" colspan="2">L</td>
                    <td style="vertical-align: middle; text-align: center;" colspan="2">P</td>
                    <td style="vertical-align: middle; text-align: center;" colspan="2">L+P</td>
                    <td style="vertical-align: middle; text-align: center;" colspan="2">L</td>
                    <td style="vertical-align: middle; text-align: center;" colspan="2">P</td>
                    <td style="vertical-align: middle; text-align: center;" colspan="2">L+P</td>
                  </tr>
                  <tr>
                    <td>L</td>
                    <td>P<br></td>
                    <td>L+P</td>
                    <td>Jumlah</td>
                    <td>Persen<br></td>
                    <td>Jumlah</td>
                    <td>Persen</td>
                    <td>Jumlah</td>
                    <td>Persen</td>
                    <td>Jumlah</td>
                    <td>Persen</td>
                    <td>Jumlah</td>
                    <td>Persen</td>
                    <td>Jumlah</td>
                    <td>Persen</td>
                  </tr>                       
              </thead>
              <tbody> 
                <tr v-bind:key="item._id" v-for="(item, index) in listDesa">
                  <td style="vertical-align: middle; text-align: center;">{{ index + 1 }}</td>
                  <td style="vertical-align: middle; text-align: center; text-transform: uppercase;">{{ item.NAMA_DESA }}</td>
                  <td style="vertical-align: middle; text-align: center;">{{ detailDesa[index].JUMLAH_BADUTA_L }}</td>
                  <td style="vertical-align: middle; text-align: center;">{{ detailDesa[index].JUMLAH_BADUTA_P }}</td>
                  <td style="vertical-align: middle; text-align: center;">{{ detailDesa[index].JUMLAH_BADUTA_L_P }}</td>
                  <td style="vertical-align: middle; text-align: center;">{{ detailDesa[index].BADUTA_DIIMUNISASI_DPT_HB_Hib4_L }}</td>
                  <td style="vertical-align: middle; text-align: center;">{{ detailDesa[index].BADUTA_DIIMUNISASI_DPT_HB_Hib4_L_PERSEN }}</td>
                  <td style="vertical-align: middle; text-align: center;">{{ detailDesa[index].BADUTA_DIIMUNISASI_DPT_HB_Hib4_P }}</td>
                  <td style="vertical-align: middle; text-align: center;">{{ detailDesa[index].BADUTA_DIIMUNISASI_DPT_HB_Hib4_P_PERSEN }}</td>
                  <td style="vertical-align: middle; text-align: center;">{{ detailDesa[index].BADUTA_DIIMUNISASI_DPT_HB_Hib4_L_P }}</td>
                  <td style="vertical-align: middle; text-align: center;">{{ detailDesa[index].BADUTA_DIIMUNISASI_DPT_HB_Hib4_L_P_PERSEN }}</td>
                  <td style="vertical-align: middle; text-align: center;">{{ detailDesa[index].BADUTA_DIIMUNISASI_CAMPAK_MR2_L }}</td>
                  <td style="vertical-align: middle; text-align: center;">{{ detailDesa[index].BADUTA_DIIMUNISASI_CAMPAK_MR2_L_PERSEN }}</td>
                  <td style="vertical-align: middle; text-align: center;">{{ detailDesa[index].BADUTA_DIIMUNISASI_CAMPAK_MR2_P }}</td>
                  <td style="vertical-align: middle; text-align: center;">{{ detailDesa[index].BADUTA_DIIMUNISASI_CAMPAK_MR2_P_PERSEN }}</td>
                  <td style="vertical-align: middle; text-align: center;">{{ detailDesa[index].BADUTA_DIIMUNISASI_CAMPAK_MR2_L_P }}</td>
                  <td style="vertical-align: middle; text-align: center;">{{ detailDesa[index].BADUTA_DIIMUNISASI_CAMPAK_MR2_L_P_PERSEN }}</td>
                </tr> 
                <tr>
                  <td style="vertical-align: middle; text-align: center; font-weight: bold;" colspan="2">TOTAL</td>
                  <td style="vertical-align: middle; text-align: center; font-weight: bold;" v-bind:key="item._id" v-for="(item, index) in dataTotal">{{item}}</td>
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
  name: 'Table40',
  data() {
    return {
      USERNAME: '',
      ID_DESA: '',
      listDesa: [],
      detailDesa: [],
      dataCollection: [],
      dataTotal: []
    }
  },
  components: {
    PilihRangeRekapPus
  },
  methods: {

    initialData: function() {
      return {
          JUMLAH_BADUTA_L: 0,
          JUMLAH_BADUTA_P: 0,
          JUMLAH_BADUTA_L_P: 0,          
          BADUTA_DIIMUNISASI_DPT_HB_Hib4_L: 0,
          BADUTA_DIIMUNISASI_DPT_HB_Hib4_L_PERSEN: 0,
          BADUTA_DIIMUNISASI_DPT_HB_Hib4_P: 0,
          BADUTA_DIIMUNISASI_DPT_HB_Hib4_P_PERSEN: 0,
          BADUTA_DIIMUNISASI_DPT_HB_Hib4_L_P: 0,
          BADUTA_DIIMUNISASI_DPT_HB_Hib4_L_P_PERSEN: 0,
          BADUTA_DIIMUNISASI_CAMPAK_MR2_L: 0,
          BADUTA_DIIMUNISASI_CAMPAK_MR2_L_PERSEN: 0,
          BADUTA_DIIMUNISASI_CAMPAK_MR2_P: 0,
          BADUTA_DIIMUNISASI_CAMPAK_MR2_P_PERSEN: 0,
          BADUTA_DIIMUNISASI_CAMPAK_MR2_L_P: 0,
          BADUTA_DIIMUNISASI_CAMPAK_MR2_L_P_PERSEN: 0,         
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

      /**************************************
      * BLOK UNTUK MENGHITUNG TOTAL
      **************************************/
      var jmlDataInit = Object.keys(dataInit).length
      var obj = dataInit;
      newDesa.forEach((e, i) => {
        Object.keys(e).forEach((elem, id) => {
          if(elem !== 'ID_DESA') {
            for(var i4 = 0; i4 <= jmlDataInit; i4++) {
              if(elem == Object.keys(dataInit)[i4]) {
                console.log(elem + ' = ' + e[elem])
                obj[elem] += e[elem];
              }              
            }             
          }
        })  
      })

      this.dataTotal = obj;
            
    }
  },
  created() {
  }
}
</script>