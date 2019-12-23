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
              <h4>Tabel 32 - JUMLAH KEMATIAN NEONATAL, BAYI DAN ANAK BALITA MENURUT PENYEBAB UTAMA</h4>
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
          <PilihRangeRekapPus linkPage="table32" @dataRekap="getRekapBtn" />         
          <!-- Pilih Range Rekap -->             
          </div>
          <!-- /.box-header -->
          <div class="box-body table-responsive no-padding">
            <table id="dataTable" class="table table-striped">
              <thead class="thead-dark">
                <tr>
                  <th rowspan="2">No</th>
                  <th rowspan="2">Desa</th>
                  <th colspan="6">Penyebab Kematian Neonatal (0-28 Hari)<br></th>
                  <th colspan="6">Penyebab Kematian Post Neonatal (29 hari - 11 Bulan)</th>
                  <th colspan="7">Penyebab Kematian Anak Balita (12 - 59 Bulan)</th>
                </tr>
                <tr>
                  <td>BBLR</td>
                  <td>Asfiksia</td>
                  <td>Tetanus <br>Neonatorum<br></td>
                  <td>Sepsis</td>
                  <td>Kelainan<br>Bawaan<br></td>
                  <td>Lain-lain</td>
                  <td>Pneumonia</td>
                  <td>Diare</td>
                  <td>Malaria</td>
                  <td>Tetanus</td>
                  <td>Kelainan<br>Saraf<br></td>
                  <td>Kelainan<br>Saluran<br>Cerna</td>
                  <td>Lain-lain</td>
                  <td>Pneumonia</td>
                  <td>Diare</td>
                  <td>Malaria</td>
                  <td>Campak</td>
                  <td>Demam</td>
                  <td>Difteri</td>
                  <td>Lain-lain<br></td>
                </tr>                                   
              </thead>
              <tbody> 
                <tr v-bind:key="item._id" v-for="(item, index) in listDesa">
                  <td style="vertical-align: middle; text-align: center;">{{ index + 1 }}</td>
                  <td style="vertical-align: middle; text-align: center; text-transform: uppercase;">{{ item.NAMA_DESA }}</td>
                  <td style="vertical-align: middle; text-align: center;">{{ detailDesa[index].PENYEBAB_KEMATIAN_NEONATAL_0_28_HARI_BBLR }}</td>
                  <td style="vertical-align: middle; text-align: center;">{{ detailDesa[index].PENYEBAB_KEMATIAN_NEONATAL_0_28_HARI_ASFIKSIA }}</td>
                  <td style="vertical-align: middle; text-align: center;">{{ detailDesa[index].PENYEBAB_KEMATIAN_NEONATAL_0_28_HARI_TETANUS_NEONATORUM }}</td>
                  <td style="vertical-align: middle; text-align: center;">{{ detailDesa[index].PENYEBAB_KEMATIAN_NEONATAL_0_28_HARI_SEPSIS }}</td>
                  <td style="vertical-align: middle; text-align: center;">{{ detailDesa[index].PENYEBAB_KEMATIAN_NEONATAL_0_28_HARI_KELAINAN_BAWAAN }}</td>
                  <td style="vertical-align: middle; text-align: center;">{{ detailDesa[index].PENYEBAB_KEMATIAN_NEONATAL_0_28_HARI_LAIN_LAIN }}</td>
                  <td style="vertical-align: middle; text-align: center;">{{ detailDesa[index].PENYEBAB_KEMATIAN_POST_NEONATAL_29_HARI_11_BULAN_PNEUMONIA }}</td>
                  <td style="vertical-align: middle; text-align: center;">{{ detailDesa[index].PENYEBAB_KEMATIAN_POST_NEONATAL_29_HARI_11_BULAN_DIARE }}</td>
                  <td style="vertical-align: middle; text-align: center;">{{ detailDesa[index].PENYEBAB_KEMATIAN_POST_NEONATAL_29_HARI_11_BULAN_MALARIA }}</td>
                  <td style="vertical-align: middle; text-align: center;">{{ detailDesa[index].PENYEBAB_KEMATIAN_POST_NEONATAL_29_HARI_11_BULAN_TETANUS }}</td>
                  <td style="vertical-align: middle; text-align: center;">{{ detailDesa[index].PENYEBAB_KEMATIAN_POST_NEONATAL_29_HARI_11_BULAN_KELAINAN_SARAF }}</td>
                  <td style="vertical-align: middle; text-align: center;">{{ detailDesa[index].PENYEBAB_KEMATIAN_POST_NEONATAL_29_HARI_11_BULAN_KELAINAN_SALURAN_CERNA }}</td>
                  <td style="vertical-align: middle; text-align: center;">{{ detailDesa[index].PENYEBAB_KEMATIAN_POST_NEONATAL_29_HARI_11_BULAN_LAIN_LAIN }}</td>
                  <td style="vertical-align: middle; text-align: center;">{{ detailDesa[index].PENYEBAB_KEMATIAN_ANAK_BALITA_12_59_BULAN_PNEUMONIA }}</td>
                  <td style="vertical-align: middle; text-align: center;">{{ detailDesa[index].PENYEBAB_KEMATIAN_ANAK_BALITA_12_59_BULAN_DIARE }}</td>
                  <td style="vertical-align: middle; text-align: center;">{{ detailDesa[index].PENYEBAB_KEMATIAN_ANAK_BALITA_12_59_BULAN_MALARIA }}</td>
                  <td style="vertical-align: middle; text-align: center;">{{ detailDesa[index].PENYEBAB_KEMATIAN_ANAK_BALITA_12_59_BULAN_CAMPAK }}</td>
                  <td style="vertical-align: middle; text-align: center;">{{ detailDesa[index].PENYEBAB_KEMATIAN_ANAK_BALITA_12_59_BULAN_DEMAM }}</td>
                  <td style="vertical-align: middle; text-align: center;">{{ detailDesa[index].PENYEBAB_KEMATIAN_ANAK_BALITA_12_59_BULAN_DIFTERI }}</td>
                  <td style="vertical-align: middle; text-align: center;">{{ detailDesa[index].PENYEBAB_KEMATIAN_ANAK_BALITA_12_59_BULAN_LAIN_LAIN }}</td>
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
  name: 'Table20',
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
        PENYEBAB_KEMATIAN_NEONATAL_0_28_HARI_BBLR: 0,
        PENYEBAB_KEMATIAN_NEONATAL_0_28_HARI_ASFIKSIA: 0,
        PENYEBAB_KEMATIAN_NEONATAL_0_28_HARI_TETANUS_NEONATORUM: 0,
        PENYEBAB_KEMATIAN_NEONATAL_0_28_HARI_SEPSIS: 0,
        PENYEBAB_KEMATIAN_NEONATAL_0_28_HARI_KELAINAN_BAWAAN: 0,
        PENYEBAB_KEMATIAN_NEONATAL_0_28_HARI_LAIN_LAIN: 0,
        PENYEBAB_KEMATIAN_POST_NEONATAL_29_HARI_11_BULAN_PNEUMONIA: 0,
        PENYEBAB_KEMATIAN_POST_NEONATAL_29_HARI_11_BULAN_DIARE: 0,
        PENYEBAB_KEMATIAN_POST_NEONATAL_29_HARI_11_BULAN_MALARIA: 0,
        PENYEBAB_KEMATIAN_POST_NEONATAL_29_HARI_11_BULAN_TETANUS: 0,
        PENYEBAB_KEMATIAN_POST_NEONATAL_29_HARI_11_BULAN_KELAINAN_SARAF: 0,
        PENYEBAB_KEMATIAN_POST_NEONATAL_29_HARI_11_BULAN_KELAINAN_SALURAN_CERNA: 0,
        PENYEBAB_KEMATIAN_POST_NEONATAL_29_HARI_11_BULAN_LAIN_LAIN: 0,
        PENYEBAB_KEMATIAN_ANAK_BALITA_12_59_BULAN_PNEUMONIA: 0,
        PENYEBAB_KEMATIAN_ANAK_BALITA_12_59_BULAN_DIARE: 0,
        PENYEBAB_KEMATIAN_ANAK_BALITA_12_59_BULAN_MALARIA: 0,
        PENYEBAB_KEMATIAN_ANAK_BALITA_12_59_BULAN_CAMPAK: 0,
        PENYEBAB_KEMATIAN_ANAK_BALITA_12_59_BULAN_DEMAM: 0,
        PENYEBAB_KEMATIAN_ANAK_BALITA_12_59_BULAN_DIFTERI: 0,
        PENYEBAB_KEMATIAN_ANAK_BALITA_12_59_BULAN_LAIN_LAIN: 0,        
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