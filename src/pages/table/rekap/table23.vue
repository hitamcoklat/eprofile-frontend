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
              <h4>Tabel 23 - CAKUPAN PELAYANAN KESEHATAN PADA IBU HAMIL, IBU BERSALIN DAN IBU NIFAS</h4>
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
          <PilihRangeRekapPus linkPage="table23" @dataRekap="getRekapBtn" />         
          <!-- Pilih Range Rekap -->
          </div>
          <!-- /.box-header -->
          <div class="box-body table-responsive no-padding">
            <table id="dataTable" class="table table-bordered">
              <thead class="thead-dark">
                <tr>
                  <th style="vertical-align: middle; text-align: center;" rowspan="3">No<br></th>
                  <th style="vertical-align: middle; text-align: center;" rowspan="3">Desa<br></th>
                  <th style="vertical-align: middle; text-align: center;" colspan="6">Ibu Hamil</th>
                  <th style="vertical-align: middle; text-align: center;" colspan="13">Ibu Bersalin/Nifas</th>
                </tr>
                <tr>
                  <td style="vertical-align: middle; text-align: center;" rowspan="2">Jumlah</td>
                  <td style="vertical-align: middle; text-align: center;" colspan="2">K1</td>
                  <td style="vertical-align: middle; text-align: center;" colspan="2">K4</td>
                  <td style="vertical-align: middle; text-align: center;" rowspan="2">Jumlah</td>
                  <td style="vertical-align: middle; text-align: center;" rowspan="2">Jumlah</td>
                  <td style="vertical-align: middle; text-align: center;" colspan="2">Persalinan <br>Ditolong Nakes<br></td>
                  <td style="vertical-align: middle; text-align: center;" colspan="2">Persalinan di <br>Fasyankes<br></td>
                  <td style="vertical-align: middle; text-align: center;" colspan="2">KF1</td>
                  <td style="vertical-align: middle; text-align: center;" colspan="2">KF2</td>
                  <td style="vertical-align: middle; text-align: center;" colspan="2">KF3</td>
                  <td style="vertical-align: middle; text-align: center;" colspan="2"><br>Ibu Nifas<br>Mendapat VIT A<br></td>
                </tr>
                <tr>
                  <td style="vertical-align: middle; text-align: center;">Jumlah</td>
                  <td style="vertical-align: middle; text-align: center;">Persen</td>
                  <td style="vertical-align: middle; text-align: center;">Jumlah</td>
                  <td style="vertical-align: middle; text-align: center;">Persen</td>
                  <td style="vertical-align: middle; text-align: center;">Jumlah</td>
                  <td style="vertical-align: middle; text-align: center;">Persen</td>
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
                  <td style="vertical-align: middle; text-align: center;">{{ detailDesa[index].IBU_HAMIL_JUMLAH }}</td>              
                  <td style="vertical-align: middle; text-align: center;">{{ detailDesa[index].IBU_HAMIL_K1_JUMLAH }}</td>              
                  <td style="vertical-align: middle; text-align: center;">{{ detailDesa[index].IBU_HAMIL_K1_PERSEN }}</td>              
                  <td style="vertical-align: middle; text-align: center;">{{ detailDesa[index].IBU_HAMIL_K4_JUMLAH }}</td>              
                  <td style="vertical-align: middle; text-align: center;">{{ detailDesa[index].IBU_HAMIL_K4_PERSEN }}</td>              
                  <td style="vertical-align: middle; text-align: center;">{{ detailDesa[index].IBU_HAMIL_K1_JUMLAH + detailDesa[index].IBU_HAMIL_K4_JUMLAH }}</td>              
                  <td style="vertical-align: middle; text-align: center;">{{ detailDesa[index].IBU_BERSALIN_NIFAS_JUMLAH }}</td>              
                  <td style="vertical-align: middle; text-align: center;">{{ detailDesa[index].IBU_BERSALIN_NIFAS_PERSALINAN_DITOLONG_NAKES_JUMLAH }}</td>              
                  <td style="vertical-align: middle; text-align: center;">{{ detailDesa[index].IBU_BERSALIN_NIFAS_PERSALINAN_DITOLONG_NAKES_PERSEN }}</td>  
                  <td style="vertical-align: middle; text-align: center;">{{ detailDesa[index].IBU_BERSALIN_NIFAS_PERSALINAN_DI_FASYANKES_JUMLAH }}</td>              
                  <td style="vertical-align: middle; text-align: center;">{{ detailDesa[index].IBU_BERSALIN_NIFAS_PERSALINAN_DI_FASYANKES_PERSEN }}</td>                                                          
                  <td style="vertical-align: middle; text-align: center;">{{ detailDesa[index].IBU_BERSALIN_NIFAS_KF1_JUMLAH }}</td>              
                  <td style="vertical-align: middle; text-align: center;">{{ detailDesa[index].IBU_BERSALIN_NIFAS_KF1_PERSEN }}</td>              
                  <td style="vertical-align: middle; text-align: center;">{{ detailDesa[index].IBU_BERSALIN_NIFAS_KF2_JUMLAH }}</td>              
                  <td style="vertical-align: middle; text-align: center;">{{ detailDesa[index].IBU_BERSALIN_NIFAS_KF2_PERSEN }}</td>              
                  <td style="vertical-align: middle; text-align: center;">{{ detailDesa[index].IBU_BERSALIN_NIFAS_KF3_JUMLAH }}</td>              
                  <td style="vertical-align: middle; text-align: center;">{{ detailDesa[index].IBU_BERSALIN_NIFAS_KF3_PERSEN }}</td>              
                  <td style="vertical-align: middle; text-align: center;">{{ detailDesa[index].IBU_BERSALIN_NIFAS_IBU_NIFAS_MENDAPAT_VIT_A_JUMLAH }}</td>              
                  <td style="vertical-align: middle; text-align: center;">{{ detailDesa[index].IBU_BERSALIN_NIFAS_IBU_NIFAS_MENDAPAT_VIT_A_PERSEN }}</td>              
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
  name: 'Table23',
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
        IBU_HAMIL_JUMLAH: 0,
        IBU_HAMIL_K1_JUMLAH: 0,
        IBU_HAMIL_K1_PERSEN: 0,
        IBU_HAMIL_K4_JUMLAH: 0,
        IBU_HAMIL_K4_PERSEN: 0,
        IBU_BERSALIN_NIFAS_JUMLAH: 0,
        IBU_BERSALIN_NIFAS_PERSALINAN_DITOLONG_NAKES_JUMLAH: 0,
        IBU_BERSALIN_NIFAS_PERSALINAN_DITOLONG_NAKES_PERSEN: 0,
        IBU_BERSALIN_NIFAS_KF1_JUMLAH: 0,
        IBU_BERSALIN_NIFAS_KF1_PERSEN: 0,
        IBU_BERSALIN_NIFAS_KF2_JUMLAH: 0,
        IBU_BERSALIN_NIFAS_KF2_PERSEN: 0,
        IBU_BERSALIN_NIFAS_PERSALINAN_DI_FASYANKES_JUMLAH: 0,
        IBU_BERSALIN_NIFAS_PERSALINAN_DI_FASYANKES_PERSEN: 0,
        IBU_BERSALIN_NIFAS_KF3_JUMLAH: 0,
        IBU_BERSALIN_NIFAS_KF3_PERSEN: 0,
        IBU_BERSALIN_NIFAS_IBU_NIFAS_MENDAPAT_VIT_A_JUMLAH: 0,
        IBU_BERSALIN_NIFAS_IBU_NIFAS_MENDAPAT_VIT_A_PERSEN: 0,        
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
      var hitung = [];
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