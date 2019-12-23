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
              <h4>Tabel 73 - JUMLAH KK DENGAN AKSES TERHADAP FASILITAS SANITASI YANG LAYAK (JAMBAN SEHAT) MENURUT KECAMATAN DAN PUSKESMAS </h4>
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
          <PilihRangeRekapPus linkPage="table73" @dataRekap="getRekapBtn" />         
          <!-- Pilih Range Rekap -->            
          </div>
          <!-- /.box-header -->
          <div class="box-body table-responsive no-padding">
            <table class="table table-hover table-bordered">
              <thead class="thead-dark">
                <tr>
                  <th style="vertical-align: middle; text-align: center;" rowspan="2">NO</th>
                  <th style="vertical-align: middle; text-align: center;" rowspan="2">KECAMATAN</th>
                  <th style="vertical-align: middle; text-align: center;" rowspan="2">PUSKESMAS</th>
                  <th style="vertical-align: middle; text-align: center;" rowspan="2">JUMLAH KK</th>
                  <th style="vertical-align: middle; text-align: center;" colspan="2">SHARING/KOMUNAL</th>
                  <th style="vertical-align: middle; text-align: center;" colspan="2">JAMBAN SEHAT SEMI PERMANEN (JSSP)</th>
                  <th style="vertical-align: middle; text-align: center;" colspan="2">JAMBAN SEHAT PERMANEN (JSP)</th>
                  <th style="vertical-align: middle; text-align: center;" colspan="2">KELUARGA DENGAN AKSES TERHADAP FASILITAS SANITASI YANG LAYAK (JAMBAN SEHAT)</th>
                </tr>
                <tr>
                  <td>JUMLAH SARANA</td>
                  <td>JUMLAH KK PENGGUNA</td>
                  <td>JUMLAH SARANA</td>
                  <td>JUMLAH KK PENGGUNA</td>
                  <td>JUMLAH SARANA </td>
                  <td>JUMLAH KK PENGGUNA</td>
                  <td>JUMLAH</td>
                  <td>%</td>
                </tr>                
              </thead>                                                  
              <tbody>
                <tr v-bind:key="item._id" v-for="(item, index) in listDesa">
                  <td style="vertical-align: middle; text-align: center;">{{ index + 1 }}</td>
                  <td style="vertical-align: middle; text-align: center; text-transform: uppercase;"></td>
                  <td style="vertical-align: middle; text-align: center; text-transform: uppercase;">{{ item.NAMA_DESA }}</td>
                  <td style="vertical-align: middle; text-align: center;">{{ detailDesa[index].JUMLAH_KK }}</td>
                  <td style="vertical-align: middle; text-align: center;">{{ detailDesa[index].SHARING_KOMUNAL_JUMLAH_SARANA }}</td>
                  <td style="vertical-align: middle; text-align: center;">{{ detailDesa[index].SHARING_KOMUNAL_JUMLAH_KK_PENGGUNA }}</td>
                  <td style="vertical-align: middle; text-align: center;">{{ detailDesa[index].JAMBAN_SEHAT_SEMI_PERMANEN_JSSP_JUMLAH_SARANA }}</td>
                  <td style="vertical-align: middle; text-align: center;">{{ detailDesa[index].JAMBAN_SEHAT_SEMI_PERMANEN_JSSP_JUMLAH_KK_PENGGUNA }}</td>
                  <td style="vertical-align: middle; text-align: center;">{{ detailDesa[index].JAMBAN_SEHAT_PERMANEN_JSP_JUMLAH_SARANA }}</td>
                  <td style="vertical-align: middle; text-align: center;">{{ detailDesa[index].JAMBAN_SEHAT_PERMANEN_JSP_JUMLAH_KK_PENGGUNA }}</td>
                  <td style="vertical-align: middle; text-align: center;">{{ detailDesa[index].KELUARGA_DENGAN_AKSES_TERHADAP_FASILITAS_SANITASI_YANG_LAYAK_JUMLAH }}</td>
                  <td style="vertical-align: middle; text-align: center;">{{ detailDesa[index].KELUARGA_DENGAN_AKSES_TERHADAP_FASILITAS_SANITASI_YANG_LAYAK_PERSEN }}</td>
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
        JUMLAH_KK: 0,
        SHARING_KOMUNAL_JUMLAH_SARANA: 0,
        SHARING_KOMUNAL_JUMLAH_KK_PENGGUNA: 0,
        JAMBAN_SEHAT_SEMI_PERMANEN_JSSP_JUMLAH_SARANA: 0,
        JAMBAN_SEHAT_SEMI_PERMANEN_JSSP_JUMLAH_KK_PENGGUNA: 0,
        JAMBAN_SEHAT_PERMANEN_JSP_JUMLAH_SARANA: 0,
        JAMBAN_SEHAT_PERMANEN_JSP_JUMLAH_KK_PENGGUNA: 0,
        KELUARGA_DENGAN_AKSES_TERHADAP_FASILITAS_SANITASI_YANG_LAYAK_JUMLAH: 0,
        KELUARGA_DENGAN_AKSES_TERHADAP_FASILITAS_SANITASI_YANG_LAYAK_PERSEN: 0,       
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