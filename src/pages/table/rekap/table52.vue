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
              <h4>Tabel 52 - ANGKA KESEMBUHAN DAN PENGOBATAN LENGKAP SERTA KEBERHASILAN PENGOBATAN TUBERKULOSIS MENURUT JENIS KELAMIN </h4>
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
          <PilihRangeRekapPus linkPage="table52" @dataRekap="getRekapBtn" />         
          <!-- Pilih Range Rekap -->              
          </div>
          <!-- /.box-header -->
          <div class="box-body table-responsive no-padding">
            <table id="dataTable" class="table table-striped">
              <thead class="thead-dark">
                <tr>
                  <th style="vertical-align: middle; text-align: center;" rowspan="3">NO</th>
                  <th style="vertical-align: middle; text-align: center;" rowspan="3">KECAMATAN</th>
                  <th style="vertical-align: middle; text-align: center;" rowspan="3">DESA</th>
                  <th colspan="3" rowspan="2">JUMLAH KASUS TUBERKOLOSIS PARU TERKONFIRMASI BAKTERIOLOGIS YANG TERDAFTAR DAN TEROBATI</th>
                  <th colspan="3" rowspan="2">JUMLAH SEMUA KASUS TUBERKOLOSIS TERDAFTAR DAN TEROBATI</th>
                  <th colspan="6">ANGKA KESEBUHAN (CURE RATE) TUBERKOLOSIS PARU TERKONFIRMASI BAKTERIOLOGIS</th>
                  <th colspan="6">ANGKA PENGOBATAN LENGKAP (COMPLETE RATE) SEMUA KASUS TUBERKOLOSIS</th>
                  <th colspan="6">ANGKA KEBERHASILAN PENGOBATAN (SUCCESS RATE/SR) SEMUA KASUS TUBERKOLOSIS</th>
                  <th colspan="2" rowspan="2">JUMLAH KEMATIAN SELAMA PENGOBATAN TUBERKOLOSIS</th>
                </tr>
                <tr>
                  <td colspan="2">LAKI-LAKI</td>
                  <td colspan="2">PEREMPUAN</td>
                  <td colspan="2">LAKI-LAKI + PEREMPUAN</td>
                  <td colspan="2">LAKI-LAKI</td>
                  <td colspan="2">PEREMPUAN</td>
                  <td colspan="2">LAKI-LAKI + PEREMPUAN</td>
                  <td colspan="2">LAKI-LAKI</td>
                  <td colspan="2">PEREMPUAN</td>
                  <td colspan="2">LAKI-LAKI + PEREMPUAN</td>
                </tr>
                <tr>
                  <td>L</td>
                  <td>P</td>
                  <td>L+P</td>
                  <td>L</td>
                  <td>P</td>
                  <td>L+P</td>
                  <td>JUMLAH</td>
                  <td>%</td>
                  <td>JUMLAH</td>
                  <td>%</td>
                  <td>JUMLAH</td>
                  <td>%</td>
                  <td>JUMLAH</td>
                  <td>%</td>
                  <td>JUMLAH</td>
                  <td>%</td>
                  <td>JUMLAH</td>
                  <td>%</td>
                  <td>JUMLAH</td>
                  <td>%</td>
                  <td>JUMLAH</td>
                  <td>%</td>
                  <td>JUMLAH</td>
                  <td>%</td>
                  <td>JUMLAH</td>
                  <td>%</td>
                </tr>                
              </thead>                                                  
              <tbody>
                <tr v-bind:key="item._id" v-for="(item, index) in listDesa">
                  <td style="vertical-align: middle; text-align: center;">{{ index + 1 }}</td>
                  <td style="vertical-align: middle; text-align: center; text-transform: uppercase;"></td>
                  <td style="vertical-align: middle; text-align: center; text-transform: uppercase;">{{ item.NAMA_DESA }}</td>
                  <td style="vertical-align: middle; text-align: center;">{{ detailDesa[index].JUMLAH_KASUS_TUBERKOLOSIS_PARU_TERKONFIRMASI_BAKTERIOLOGIS_YANG_TERDAFTAR_DAN_DIOBATI_LAKI_LAKI }}</td>
                  <td style="vertical-align: middle; text-align: center;">{{ detailDesa[index].JUMLAH_KASUS_TUBERKOLOSIS_PARU_TERKONFIRMASI_BAKTERIOLOGIS_YANG_TERDAFTAR_DAN_DIOBATI_PEREMPUAN }}</td>
                  <td style="vertical-align: middle; text-align: center;">{{ detailDesa[index].JUMLAH_KASUS_TUBERKOLOSIS_PARU_TERKONFIRMASI_BAKTERIOLOGIS_YANG_TERDAFTAR_DAN_DIOBATI_LAKI_LAKI_PEREMPUAN }}</td>
                  <td style="vertical-align: middle; text-align: center;">{{ detailDesa[index].JUMLAH_SEMUA_KASUS_TUBERKOLOSIS_TERDAFTAR_DAN_DIOBATI_LAKI_LAKI }}</td>
                  <td style="vertical-align: middle; text-align: center;">{{ detailDesa[index].JUMLAH_SEMUA_KASUS_TUBERKOLOSIS_TERDAFTAR_DAN_DIOBATI_PEREMPUAN }}</td>
                  <td style="vertical-align: middle; text-align: center;">{{ detailDesa[index].JUMLAH_SEMUA_KASUS_TUBERKOLOSIS_TERDAFTAR_DAN_DIOBATI_LAKI_LAKI_PEREMPUAN }}</td>
                  <td style="vertical-align: middle; text-align: center;">{{ detailDesa[index].ANGKA_KESEBUHAN_CURE_RATE_TUBERKOLOSIS_PARU_TERKONFIRMASI_BAKTERIOLOGIS_LAKI_LAKI_JUMLAH }}</td>
                  <td style="vertical-align: middle; text-align: center;">{{ detailDesa[index].ANGKA_KESEBUHAN_CURE_RATE_TUBERKOLOSIS_PARU_TERKONFIRMASI_BAKTERIOLOGIS_LAKI_LAKI_PERSEN }}</td>
                  <td style="vertical-align: middle; text-align: center;">{{ detailDesa[index].ANGKA_KESEBUHAN_CURE_RATE_TUBERKOLOSIS_PARU_TERKONFIRMASI_BAKTERIOLOGIS_PEREMPUAN_JUMLAH }}</td>
                  <td style="vertical-align: middle; text-align: center;">{{ detailDesa[index].ANGKA_KESEBUHAN_CURE_RATE_TUBERKOLOSIS_PARU_TERKONFIRMASI_BAKTERIOLOGIS_PEREMPUAN_PERSEN }}</td>
                  <td style="vertical-align: middle; text-align: center;">{{ detailDesa[index].ANGKA_KESEBUHAN_CURE_RATE_TUBERKOLOSIS_PARU_TERKONFIRMASI_BAKTERIOLOGIS_LAKI_LAKI_PEREMPUAN_JUMLAH }}</td>
                  <td style="vertical-align: middle; text-align: center;">{{ detailDesa[index].ANGKA_KESEBUHAN_CURE_RATE_TUBERKOLOSIS_PARU_TERKONFIRMASI_BAKTERIOLOGIS_LAKI_LAKI_PEREMPUAN_PERSEN }}</td>
                  <td style="vertical-align: middle; text-align: center;">{{ detailDesa[index].ANGKA_PENGOBATAN_LENGKAP_COMPLETE_RATE_SEMUA_KASUS_TUBERKOLOSIS_LAKI_LAKI_JUMLAH }}</td>
                  <td style="vertical-align: middle; text-align: center;">{{ detailDesa[index].ANGKA_PENGOBATAN_LENGKAP_COMPLETE_RATE_SEMUA_KASUS_TUBERKOLOSIS_LAKI_LAKI_PERSEN }}</td>
                  <td style="vertical-align: middle; text-align: center;">{{ detailDesa[index].ANGKA_PENGOBATAN_LENGKAP_COMPLETE_RATE_SEMUA_KASUS_TUBERKOLOSIS_PEREMPUAN_JUMLAH }}</td>
                  <td style="vertical-align: middle; text-align: center;">{{ detailDesa[index].ANGKA_PENGOBATAN_LENGKAP_COMPLETE_RATE_SEMUA_KASUS_TUBERKOLOSIS_PEREMPUAN_PERSEN }}</td>
                  <td style="vertical-align: middle; text-align: center;">{{ detailDesa[index].ANGKA_PENGOBATAN_LENGKAP_COMPLETE_RATE_SEMUA_KASUS_TUBERKOLOSIS_LAKI_LAKI_PEREMPUAN_JUMLAH }}</td>
                  <td style="vertical-align: middle; text-align: center;">{{ detailDesa[index].ANGKA_PENGOBATAN_LENGKAP_COMPLETE_RATE_SEMUA_KASUS_TUBERKOLOSIS_LAKI_LAKI_PEREMPUAN_PERSEN }}</td>
                  <td style="vertical-align: middle; text-align: center;">{{ detailDesa[index].ANGKA_KEBERHASILAN_PENGOBATAN_SUCCESS_RATE_SEMUA_KASUS_TUBERKOLOSIS_LAKI_LAKI_JUMLAH }}</td>
                  <td style="vertical-align: middle; text-align: center;">{{ detailDesa[index].ANGKA_KEBERHASILAN_PENGOBATAN_SUCCESS_RATE_SEMUA_KASUS_TUBERKOLOSIS_LAKI_LAKI_PERSEN }}</td>
                  <td style="vertical-align: middle; text-align: center;">{{ detailDesa[index].ANGKA_KEBERHASILAN_PENGOBATAN_SUCCESS_RATE_SEMUA_KASUS_TUBERKOLOSIS_PEREMPUAN_JUMLAH }}</td>
                  <td style="vertical-align: middle; text-align: center;">{{ detailDesa[index].ANGKA_KEBERHASILAN_PENGOBATAN_SUCCESS_RATE_SEMUA_KASUS_TUBERKOLOSIS_PEREMPUAN_PERSEN }}</td>
                  <td style="vertical-align: middle; text-align: center;">{{ detailDesa[index].ANGKA_KEBERHASILAN_PENGOBATAN_SUCCESS_RATE_SEMUA_KASUS_TUBERKOLOSIS_LAKI_LAKI_PEREMPUAN_JUMLAH }}</td>
                  <td style="vertical-align: middle; text-align: center;">{{ detailDesa[index].ANGKA_KEBERHASILAN_PENGOBATAN_SUCCESS_RATE_SEMUA_KASUS_TUBERKOLOSIS_LAKI_LAKI_PEREMPUAN_PERSEN }}</td>
                  <td style="vertical-align: middle; text-align: center;">{{ detailDesa[index].JUMLAH_KEMATIAN_SELAMA_PENGOBATAN_TUBERKOLOSIS_JUMLAH }}</td>
                  <td style="vertical-align: middle; text-align: center;">{{ detailDesa[index].JUMLAH_KEMATIAN_SELAMA_PENGOBATAN_TUBERKOLOSIS_PERSEN }}</td>
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
        JUMLAH_KASUS_TUBERKOLOSIS_PARU_TERKONFIRMASI_BAKTERIOLOGIS_YANG_TERDAFTAR_DAN_DIOBATI_LAKI_LAKI: 0,
        JUMLAH_KASUS_TUBERKOLOSIS_PARU_TERKONFIRMASI_BAKTERIOLOGIS_YANG_TERDAFTAR_DAN_DIOBATI_PEREMPUAN: 0,
        JUMLAH_KASUS_TUBERKOLOSIS_PARU_TERKONFIRMASI_BAKTERIOLOGIS_YANG_TERDAFTAR_DAN_DIOBATI_LAKI_LAKI_PEREMPUAN: 0,
        JUMLAH_SEMUA_KASUS_TUBERKOLOSIS_TERDAFTAR_DAN_DIOBATI_LAKI_LAKI: 0,
        JUMLAH_SEMUA_KASUS_TUBERKOLOSIS_TERDAFTAR_DAN_DIOBATI_PEREMPUAN: 0,
        JUMLAH_SEMUA_KASUS_TUBERKOLOSIS_TERDAFTAR_DAN_DIOBATI_LAKI_LAKI_PEREMPUAN: 0,
        ANGKA_KESEBUHAN_CURE_RATE_TUBERKOLOSIS_PARU_TERKONFIRMASI_BAKTERIOLOGIS_LAKI_LAKI_JUMLAH: 0,
        ANGKA_KESEBUHAN_CURE_RATE_TUBERKOLOSIS_PARU_TERKONFIRMASI_BAKTERIOLOGIS_LAKI_LAKI_PERSEN: 0,
        ANGKA_KESEBUHAN_CURE_RATE_TUBERKOLOSIS_PARU_TERKONFIRMASI_BAKTERIOLOGIS_PEREMPUAN_JUMLAH: 0,
        ANGKA_KESEBUHAN_CURE_RATE_TUBERKOLOSIS_PARU_TERKONFIRMASI_BAKTERIOLOGIS_PEREMPUAN_PERSEN: 0,
        ANGKA_KESEBUHAN_CURE_RATE_TUBERKOLOSIS_PARU_TERKONFIRMASI_BAKTERIOLOGIS_LAKI_LAKI_PEREMPUAN_JUMLAH: 0,
        ANGKA_KESEBUHAN_CURE_RATE_TUBERKOLOSIS_PARU_TERKONFIRMASI_BAKTERIOLOGIS_LAKI_LAKI_PEREMPUAN_PERSEN: 0,
        ANGKA_PENGOBATAN_LENGKAP_COMPLETE_RATE_SEMUA_KASUS_TUBERKOLOSIS_LAKI_LAKI_JUMLAH: 0,
        ANGKA_PENGOBATAN_LENGKAP_COMPLETE_RATE_SEMUA_KASUS_TUBERKOLOSIS_LAKI_LAKI_PERSEN: 0,
        ANGKA_PENGOBATAN_LENGKAP_COMPLETE_RATE_SEMUA_KASUS_TUBERKOLOSIS_PEREMPUAN_JUMLAH: 0,
        ANGKA_PENGOBATAN_LENGKAP_COMPLETE_RATE_SEMUA_KASUS_TUBERKOLOSIS_PEREMPUAN_PERSEN: 0,
        ANGKA_PENGOBATAN_LENGKAP_COMPLETE_RATE_SEMUA_KASUS_TUBERKOLOSIS_LAKI_LAKI_PEREMPUAN_JUMLAH: 0,
        ANGKA_PENGOBATAN_LENGKAP_COMPLETE_RATE_SEMUA_KASUS_TUBERKOLOSIS_LAKI_LAKI_PEREMPUAN_PERSEN: 0,
        ANGKA_KEBERHASILAN_PENGOBATAN_SUCCESS_RATE_SEMUA_KASUS_TUBERKOLOSIS_LAKI_LAKI_JUMLAH: 0,
        ANGKA_KEBERHASILAN_PENGOBATAN_SUCCESS_RATE_SEMUA_KASUS_TUBERKOLOSIS_LAKI_LAKI_PERSEN: 0,
        ANGKA_KEBERHASILAN_PENGOBATAN_SUCCESS_RATE_SEMUA_KASUS_TUBERKOLOSIS_PEREMPUAN_JUMLAH: 0,
        ANGKA_KEBERHASILAN_PENGOBATAN_SUCCESS_RATE_SEMUA_KASUS_TUBERKOLOSIS_PEREMPUAN_PERSEN: 0,
        ANGKA_KEBERHASILAN_PENGOBATAN_SUCCESS_RATE_SEMUA_KASUS_TUBERKOLOSIS_LAKI_LAKI_PEREMPUAN_JUMLAH: 0,
        ANGKA_KEBERHASILAN_PENGOBATAN_SUCCESS_RATE_SEMUA_KASUS_TUBERKOLOSIS_LAKI_LAKI_PEREMPUAN_PERSEN: 0,
        JUMLAH_KEMATIAN_SELAMA_PENGOBATAN_TUBERKOLOSIS_JUMLAH: 0,
        JUMLAH_KEMATIAN_SELAMA_PENGOBATAN_TUBERKOLOSIS_PERSEN: 0,       
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