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
              <h4>Tabel 21 - JUMLAH KEMATIAN IBU MENURUT KELOMPOK UMUR</h4>
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
            <PilihRangeRekapPus linkPage="table21" @dataRekap="getRekapBtn" /> 
            <!-- Pilih Range Rekap -->                 
          </div>
          <!-- /.box-header -->
          <div class="box-body table-responsive no-padding">
            <table id="dataTable" class="table table-striped">
              <thead class="thead-dark">
                <tr>
                  <th style="vertical-align: middle; text-align: center;" rowspan="3">No<br></th>
                  <th style="vertical-align: middle; text-align: center;" rowspan="3">Desa</th>
                  <th style="vertical-align: middle; text-align: center;" rowspan="3">Jumlah Lahir<br>Hidup<br></th>
                  <th style="vertical-align: middle; text-align: center;" colspan="16">Kematian Ibu</th>
                </tr>
                <tr>
                  <td style="vertical-align: middle; text-align: center;" colspan="4">Jumlah Kematian<br>Ibu Hamil</td>
                  <td style="vertical-align: middle; text-align: center;" colspan="4">Jumlah Kematian<br>Ibu Bersalin<br></td>
                  <td style="vertical-align: middle; text-align: center;" colspan="4">Jumlah Kematian<br>Ibu Nifas<br></td>
                  <td style="vertical-align: middle; text-align: center;" colspan="4">Jumlah Kematian<br>Ibu<br></td>
                </tr>
                <tr>
                  <td style="vertical-align: middle; text-align: center;">&lt;20<br>Tahun<br></td>
                  <td style="vertical-align: middle; text-align: center;">20-34<br>Tahun<br></td>
                  <td style="vertical-align: middle; text-align: center;">&gt;=35<br>Tahun</td>
                  <td style="vertical-align: middle; text-align: center;">Jumlah</td>
                  <td style="vertical-align: middle; text-align: center;"><br>&lt;20<br>Tahun<br></td>
                  <td style="vertical-align: middle; text-align: center;"><br>20-34<br>Tahun<br></td>
                  <td style="vertical-align: middle; text-align: center;"><br>&gt;=35<br>Tahun<br></td>
                  <td style="vertical-align: middle; text-align: center;">Jumlah</td>
                  <td style="vertical-align: middle; text-align: center;"><br>&lt;20<br>Tahun<br></td>
                  <td style="vertical-align: middle; text-align: center;"><br>20-34<br>Tahun<br></td>
                  <td style="vertical-align: middle; text-align: center;"><br>&gt;=35<br>Tahun<br></td>
                  <td style="vertical-align: middle; text-align: center;">Jumlah</td>
                  <td style="vertical-align: middle; text-align: center;">&lt;20<br>Tahun<br></td>
                  <td style="vertical-align: middle; text-align: center;">20-34<br>Tahun<br></td>
                  <td style="vertical-align: middle; text-align: center;">&gt;=35<br>Tahun<br></td>
                  <td style="vertical-align: middle; text-align: center;">Jumlah</td>
                </tr>                                   
              </thead>
              <tbody>                  
                <tr v-bind:key="item._id" v-for="(item, index) in listDesa">
                  <td style="vertical-align: middle; text-align: center;">{{ index + 1 }}</td>
                  <td style="vertical-align: middle; text-align: center;">{{ item.NAMA_DESA }}</td>
                  <td style="vertical-align: middle; text-align: center;">{{ detailDesa[index].JUMLAH_LAHIR_HIDUP }}</td>
                  <td style="vertical-align: middle; text-align: center;">{{ detailDesa[index].JUMLAH_KEMATIAN_IBU_HAMIL_KURANG_20_TAHUN }}</td>
                  <td style="vertical-align: middle; text-align: center;">{{ detailDesa[index].JUMLAH_KEMATIAN_IBU_HAMIL_20_34_TAHUN }}</td>
                  <td style="vertical-align: middle; text-align: center;">{{ detailDesa[index].JUMLAH_KEMATIAN_IBU_HAMIL_LEBIH_35_TAHUN }}</td>
                  <td style="vertical-align: middle; text-align: center;">{{ detailDesa[index].JUMLAH_KEMATIAN_IBU_HAMIL }}</td>
                  <td style="vertical-align: middle; text-align: center;">{{ detailDesa[index].JUMLAH_KEMATIAN_IBU_BERSALIN_KURANG_20_TAHUN }}</td>
                  <td style="vertical-align: middle; text-align: center;">{{ detailDesa[index].JUMLAH_KEMATIAN_IBU_BERSALIN_20_34_TAHUN }}</td>
                  <td style="vertical-align: middle; text-align: center;">{{ detailDesa[index].JUMLAH_KEMATIAN_IBU_BERSALIN_LEBIH_35_TAHUN }}</td>
                  <td style="vertical-align: middle; text-align: center;">{{ detailDesa[index].JUMLAH_KEMATIAN_IBU_BERSALIN }}</td>
                  <td style="vertical-align: middle; text-align: center;">{{ detailDesa[index].JUMLAH_KEMATIAN_IBU_NIFAS_KURANG_20_TAHUN }}</td>
                  <td style="vertical-align: middle; text-align: center;">{{ detailDesa[index].JUMLAH_KEMATIAN_IBU_NIFAS_20_34_TAHUN }}</td>
                  <td style="vertical-align: middle; text-align: center;">{{ detailDesa[index].JUMLAH_KEMATIAN_IBU_NIFAS_LEBIH_35_TAHUN }}</td>
                  <td style="vertical-align: middle; text-align: center;">{{ detailDesa[index].JUMLAH_KEMATIAN_IBU_NIFAS }}</td>
                  <td style="vertical-align: middle; text-align: center;">{{ detailDesa[index].JUMLAH_KEMATIAN_IBU_KURANG_20_TAHUN }}</td>
                  <td style="vertical-align: middle; text-align: center;">{{ detailDesa[index].JUMLAH_KEMATIAN_IBU_20_34_TAHUN }}</td>
                  <td style="vertical-align: middle; text-align: center;">{{ detailDesa[index].JUMLAH_KEMATIAN_IBU_LEBIH_35_TAHUN }}</td>
                  <td style="vertical-align: middle; text-align: center;">{{ detailDesa[index].JUMLAH_KEMATIAN_IBU }}</td>
                </tr>
                <tr>
                  <td style="vertical-align: middle; text-align: center; font-weight: bold;" colspan="2">TOTAL</td>
                  <td style="vertical-align: middle; text-align: center; font-weight: bold;" v-bind:key="item._id" v-for="(item, index) in dataTotal">{{item}}</td>
                </tr>                               
              </tbody>
            </table>
          </div>
        </div>
        <!-- /.box -->         
      </div>
    </div>
    <div class="modal modal-danger fade" id="modal-danger">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span></button>
              <h4 class="modal-title">Konfirmasi</h4>
            </div>
            <div class="modal-body">
              <p>Apakah sudah yakin ingin menghapus dari database&nbsp;&#63;</p>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-outline pull-left" data-dismiss="modal">Close</button>
              <button type="button" class="btn btn-outline">Save changes</button>
            </div>
          </div>
          <!-- /.modal-content -->
        </div>
        <!-- /.modal-dialog -->
      </div>
      <!-- /.modal -->
  </div>
  <!-- /.content -->
</template>
<script>
import PilihRangeRekapPus from '../../../components/PilihRangeRekapPus';
export default {
  name: 'Table21',
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
        JUMLAH_LAHIR_HIDUP: 0,
        JUMLAH_KEMATIAN_IBU_HAMIL_KURANG_20_TAHUN: 0,
        JUMLAH_KEMATIAN_IBU_HAMIL_20_34_TAHUN: 0,
        JUMLAH_KEMATIAN_IBU_HAMIL_LEBIH_35_TAHUN: 0,
        JUMLAH_KEMATIAN_IBU_HAMIL: 0,
        JUMLAH_KEMATIAN_IBU_BERSALIN_KURANG_20_TAHUN: 0,
        JUMLAH_KEMATIAN_IBU_BERSALIN_20_34_TAHUN: 0,
        JUMLAH_KEMATIAN_IBU_BERSALIN_LEBIH_35_TAHUN: 0,
        JUMLAH_KEMATIAN_IBU_BERSALIN: 0,
        JUMLAH_KEMATIAN_IBU_NIFAS_KURANG_20_TAHUN: 0,
        JUMLAH_KEMATIAN_IBU_NIFAS_20_34_TAHUN: 0,
        JUMLAH_KEMATIAN_IBU_NIFAS_LEBIH_35_TAHUN: 0,
        JUMLAH_KEMATIAN_IBU_NIFAS: 0,
        JUMLAH_KEMATIAN_IBU_KURANG_20_TAHUN: 0,
        JUMLAH_KEMATIAN_IBU_20_34_TAHUN: 0,
        JUMLAH_KEMATIAN_IBU_LEBIH_35_TAHUN: 0,
        JUMLAH_KEMATIAN_IBU: 0,        
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