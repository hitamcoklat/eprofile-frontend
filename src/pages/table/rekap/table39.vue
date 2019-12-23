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
              <h4>Table 39 - CAKUPAN IMUNISASI DPT-HB-Hib 3, POLIO 4, CAMPAK/MR DAN IMUNISASI DASAR LENGKAP PADA BAYI MENURUT JENIS KELAMIN</h4>
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
          <PilihRangeRekapPus linkPage="table39" @dataRekap="getRekapBtn" />         
          <!-- Pilih Range Rekap -->             
          </div>
          <!-- /.box-header -->
          <div class="box-body table-responsive no-padding">
            <table id="dataTable" class="table table-striped">
              <thead class="thead-dark">
                <tr>
                  <th style="vertical-align: middle; text-align: center;" rowspan="4">No</th>
                  <th style="vertical-align: middle; text-align: center;" rowspan="4">Desa</th>
                  <th style="vertical-align: middle; text-align: center;" colspan="3" rowspan="3">Jumlah Bayi<br>(Surviving Infant)<br></th>
                  <th style="vertical-align: middle; text-align: center;" colspan="24">Bayi Diimunisasi</th>
                </tr>
                <tr>
                  <td style="vertical-align: middle; text-align: center;" colspan="6">DPT-HB-Hib3</td>
                  <td style="vertical-align: middle; text-align: center;" colspan="6">Polio 4</td>
                  <td style="vertical-align: middle; text-align: center;" colspan="6">Campak/MR</td>
                  <td style="vertical-align: middle; text-align: center;" colspan="6">Imunisasi Dasar Lengkap</td>
                </tr>
                <tr>
                  <td colspan="2">L</td>
                  <td colspan="2">P</td>
                  <td colspan="2">L+P</td>
                  <td colspan="2">L</td>
                  <td colspan="2">P</td>
                  <td colspan="2">L+P</td>
                  <td colspan="2">L</td>
                  <td colspan="2">P</td>
                  <td colspan="2">L+P</td>
                  <td colspan="2">L</td>
                  <td colspan="2">P</td>
                  <td colspan="2">L+P</td>
                </tr>
                <tr>
                  <td style="vertical-align: middle; text-align: center;">L</td>
                  <td style="vertical-align: middle; text-align: center;">P<br></td>
                  <td style="vertical-align: middle; text-align: center;">L+P</td>
                  <td style="vertical-align: middle; text-align: center;">Jumlah</td>
                  <td style="vertical-align: middle; text-align: center;">Persen<br></td>
                  <td style="vertical-align: middle; text-align: center;">Jumlah</td>
                  <td style="vertical-align: middle; text-align: center;">Persen</td>
                  <td style="vertical-align: middle; text-align: center;">Jumlah</td>
                  <td>Persen</td>
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
                  <td style="vertical-align: middle; text-align: center;">{{ detailDesa[index].JUMLAH_BAYI_LAKI }}</td>
                  <td style="vertical-align: middle; text-align: center;">{{ detailDesa[index].JUMLAH_BAYI_PEREMPUAN }}</td>
                  <td style="vertical-align: middle; text-align: center;">{{ detailDesa[index].JUMLAH_BAYI_LAKI_PEREMPUAN }}</td>
                  <td style="vertical-align: middle; text-align: center;">{{ detailDesa[index].BAYI_DIIMUNISASI_DPT_HB_Hib3_L_JUMLAH }}</td>
                  <td style="vertical-align: middle; text-align: center;">{{ detailDesa[index].BAYI_DIIMUNISASI_DPT_HB_Hib3_L_PERSEN }}</td>
                  <td style="vertical-align: middle; text-align: center;">{{ detailDesa[index].BAYI_DIIMUNISASI_DPT_HB_Hib3_P_JUMLAH }}</td>
                  <td style="vertical-align: middle; text-align: center;">{{ detailDesa[index].BAYI_DIIMUNISASI_DPT_HB_Hib3_P_PERSEN }}</td>
                  <td style="vertical-align: middle; text-align: center;">{{ detailDesa[index].BAYI_DIIMUNISASI_DPT_HB_Hib3_L_P_JUMLAH }}</td>
                  <td style="vertical-align: middle; text-align: center;">{{ detailDesa[index].BAYI_DIIMUNISASI_DPT_HB_Hib3_L_P_PERSEN }}</td>
                  <td style="vertical-align: middle; text-align: center;">{{ detailDesa[index].BAYI_DIIMUNISASI_POLIO4_L_JUMLAH }}</td>
                  <td style="vertical-align: middle; text-align: center;">{{ detailDesa[index].BAYI_DIIMUNISASI_POLIO4_L_PERSEN }}</td>
                  <td style="vertical-align: middle; text-align: center;">{{ detailDesa[index].BAYI_DIIMUNISASI_POLIO4_P_JUMLAH }}</td>
                  <td style="vertical-align: middle; text-align: center;">{{ detailDesa[index].BAYI_DIIMUNISASI_POLIO4_P_PERSEN }}</td>
                  <td style="vertical-align: middle; text-align: center;">{{ detailDesa[index].BAYI_DIIMUNISASI_POLIO4_L_P_JUMLAH }}</td>
                  <td style="vertical-align: middle; text-align: center;">{{ detailDesa[index].BAYI_DIIMUNISASI_POLIO4_L_P_PERSEN }}</td>
                  <td style="vertical-align: middle; text-align: center;">{{ detailDesa[index].BAYI_DIIMUNISASI_CAMPAK_MR_L_JUMLAH }}</td>
                  <td style="vertical-align: middle; text-align: center;">{{ detailDesa[index].BAYI_DIIMUNISASI_CAMPAK_MR_L_PERSEN }}</td>
                  <td style="vertical-align: middle; text-align: center;">{{ detailDesa[index].BAYI_DIIMUNISASI_CAMPAK_MR_P_JUMLAH }}</td>
                  <td style="vertical-align: middle; text-align: center;">{{ detailDesa[index].BAYI_DIIMUNISASI_CAMPAK_MR_P_PERSEN }}</td>
                  <td style="vertical-align: middle; text-align: center;">{{ detailDesa[index].BAYI_DIIMUNISASI_CAMPAK_MR_L_P_JUMLAH }}</td>
                  <td style="vertical-align: middle; text-align: center;">{{ detailDesa[index].BAYI_DIIMUNISASI_CAMPAK_MR_L_P_PERSEN }}</td>
                  <td style="vertical-align: middle; text-align: center;">{{ detailDesa[index].BAYI_DIIMUNISASI_MUNISASI_DASAR_LENGKAP_L_JUMLAH }}</td>
                  <td style="vertical-align: middle; text-align: center;">{{ detailDesa[index].BAYI_DIIMUNISASI_MUNISASI_DASAR_LENGKAP_L_PERSEN }}</td>
                  <td style="vertical-align: middle; text-align: center;">{{ detailDesa[index].BAYI_DIIMUNISASI_MUNISASI_DASAR_LENGKAP_P_JUMLAH }}</td>
                  <td style="vertical-align: middle; text-align: center;">{{ detailDesa[index].BAYI_DIIMUNISASI_MUNISASI_DASAR_LENGKAP_P_PERSEN }}</td>
                  <td style="vertical-align: middle; text-align: center;">{{ detailDesa[index].BAYI_DIIMUNISASI_MUNISASI_DASAR_LENGKAP_L_P_JUMLAH }}</td>
                  <td style="vertical-align: middle; text-align: center;">{{ detailDesa[index].BAYI_DIIMUNISASI_MUNISASI_DASAR_LENGKAP_L_P_PERSEN }}</td>
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
  name: 'Table39',
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
        JUMLAH_BAYI_LAKI: 0,
        JUMLAH_BAYI_PEREMPUAN: 0,
        JUMLAH_BAYI_LAKI_PEREMPUAN: 0,
        BAYI_DIIMUNISASI_DPT_HB_Hib3_L_JUMLAH: 0,
        BAYI_DIIMUNISASI_DPT_HB_Hib3_L_PERSEN: 0,
        BAYI_DIIMUNISASI_DPT_HB_Hib3_P_JUMLAH: 0,
        BAYI_DIIMUNISASI_DPT_HB_Hib3_P_PERSEN: 0,
        BAYI_DIIMUNISASI_DPT_HB_Hib3_L_P_JUMLAH: 0,
        BAYI_DIIMUNISASI_DPT_HB_Hib3_L_P_PERSEN: 0,
        BAYI_DIIMUNISASI_POLIO4_L_JUMLAH: 0,
        BAYI_DIIMUNISASI_POLIO4_L_PERSEN: 0,
        BAYI_DIIMUNISASI_POLIO4_P_JUMLAH: 0,
        BAYI_DIIMUNISASI_POLIO4_P_PERSEN: 0,
        BAYI_DIIMUNISASI_POLIO4_L_P_JUMLAH: 0,
        BAYI_DIIMUNISASI_POLIO4_L_P_PERSEN: 0,
        BAYI_DIIMUNISASI_CAMPAK_MR_L_JUMLAH: 0,
        BAYI_DIIMUNISASI_CAMPAK_MR_L_PERSEN: 0,
        BAYI_DIIMUNISASI_CAMPAK_MR_P_JUMLAH: 0,
        BAYI_DIIMUNISASI_CAMPAK_MR_P_PERSEN: 0,
        BAYI_DIIMUNISASI_CAMPAK_MR_L_P_JUMLAH: 0,
        BAYI_DIIMUNISASI_CAMPAK_MR_L_P_PERSEN: 0,
        BAYI_DIIMUNISASI_MUNISASI_DASAR_LENGKAP_L_JUMLAH: 0,
        BAYI_DIIMUNISASI_MUNISASI_DASAR_LENGKAP_L_PERSEN: 0,
        BAYI_DIIMUNISASI_MUNISASI_DASAR_LENGKAP_P_JUMLAH: 0,
        BAYI_DIIMUNISASI_MUNISASI_DASAR_LENGKAP_P_PERSEN: 0,
        BAYI_DIIMUNISASI_MUNISASI_DASAR_LENGKAP_L_P_JUMLAH: 0,
        BAYI_DIIMUNISASI_MUNISASI_DASAR_LENGKAP_L_P_PERSEN: 0,       
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