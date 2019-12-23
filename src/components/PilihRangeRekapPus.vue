<template>
  <div>            
    <div class="col-md-2">
      <div class="form-group">
        <label>Dari Bulan</label>
        <select v-model="FROM_BLN" class="form-control">
          <option selected="">Pilih Bulan</option>
          <option value="1">Januari</option>
          <option value="2">Februari</option>
          <option value="3">Maret</option>
          <option value="4">April</option>
          <option value="5">Mei</option>
          <option value="6">Juni</option>
          <option value="7">Juli</option>
          <option value="8">Agustus</option>
          <option value="9">September</option>
          <option value="10">Oktober</option>
          <option value="11">November</option>
          <option value="12">Desember</option>
        </select>
      </div>
    </div>
    <div style="vertical-align: middle; text-align: center; padding-top: 0.5em;" class="col-md-1">
      <div class="form-group">
        <label>Sampai</label>
      </div>
    </div>
    <div class="col-md-2">
      <div class="form-group">
        <label>Akhir Bulan</label>
        <select v-model="TO_BLN" class="form-control">
          <option selected="">Pilih Bulan</option>
          <option value="1">Januari</option>
          <option value="2">Februari</option>
          <option value="3">Maret</option>
          <option value="4">April</option>
          <option value="5">Mei</option>
          <option value="6">Juni</option>
          <option value="7">Juli</option>
          <option value="8">Agustus</option>
          <option value="9">September</option>
          <option value="10">Oktober</option>
          <option value="11">November</option>
          <option value="12">Desember</option>
        </select>
      </div>
    </div>            
    <div class="col-md-2">
      <div class="form-group">
        <label>Pilih Tahun</label>
        <select v-model="PILIH_TAHUN" class="form-control">
          <option selected="">Pilih Tahun</option>
          <option value="2019">2019</option>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
        </select>
      </div>
    </div>
    <div class="col-md-2">
      <div class="form-group">
        <label>Jumlah Desa</label>
        <select v-model="JML_PERSEN" class="form-control">
          <option v-bind:key="item._id" v-for="(item, index) in listDesa" :value="index + 1">Persen / {{index + 1}}</option>
        </select>
      </div>
    </div>    
    <div class="col-md-6">
      <button @click="getRekapBtn()" type="button" class="btn btn-primary btn-md"><i class="fa fa-fw fa-search"></i> Cari</button>
      <button @click="generateExcel()" type="button" class="btn bg-navy btn-md"><i class="fa fa-fw fa-file-excel-o"></i>Export to Excel</button>
      <router-link :to="{path : '/'+linkPage+'/input'}"><a class="btn btn-success btn-md"><i class="fa fa-fw fa-plus-circle"></i>Tambah Data </a></router-link>
    </div> 
  </div>
</template>

<script>
import TableToExcel from "@linways/table-to-excel";
export default {
  name: 'PilihRangeRekapPus',
  props: ['linkPage'],
  data() {
    return {
      USERNAME: '',
      PILIH_BULAN: '1',
      PILIH_TAHUN: '2019',
      NAMA_PKM: '',
      ID_PUSKESMAS: '',
      ID_DESA: '',
      FROM_BLN: '',
      TO_BLN: '',
      JML_PERSEN: '',
      listDesa: []     
    }
  },
  components: {},
  methods: {
    fetchDataDesa: function(idPuskesmas) {
      this.$http.get(this.$urlNode + '/desa/getListDesaByPuskesmas?idPus=' + idPuskesmas)
      .then((response) => {
          this.listDesa = response.data;
          console.log(this.listDesa)
      })
      .catch(function (error) {
          console.log(error);
      });            
    },
    cariClickedButton: function(event) {
      this.$emit('dataRekap', 'hohoho');
    },
    generateExcel: function() {
      TableToExcel.convert(document.getElementById("dataTable"));
    },
    getRekapBtn: function() {
      this.$http.get(this.$urlNode + '/table/getRekap?fromBln=' + this.FROM_BLN + '&toBln=' + this.TO_BLN + '&thn=' + this.PILIH_TAHUN + '&username=' + this.USERNAME)
      .then((response) => {
        // console.log(response)
        this.$emit('dataRekap', {
          'insideData' : response, 
          'listDesa' : this.listDesa,
          'jmlPersen' : this.JML_PERSEN})
      })
      .catch(function (error) {
          console.log(error);
      });       
    }  
  },
  created() {
    var user = JSON.parse(this.$session.get('dataLogin'));
    this.NAMA_PKM = this.$store.getters.currentUser.NAMA_PUSKESMAS;
    this.USERNAME = user.username;
    this.ID_PUSKESMAS = user.KODE_PUSKESMAS;
    this.fetchDataDesa(this.ID_PUSKESMAS)  
  }
}
</script>

<style>

</style>