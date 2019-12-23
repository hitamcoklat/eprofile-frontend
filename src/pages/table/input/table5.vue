<template>
<!-- Main content -->
<div class="content">
  <div class="row">        
    <div class="col-md-12">
      <div class="box box-info">
        <div class="box-header with-border">
          <div class="alert alert-info alert-dismissible">
            <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
            <h4>Tabel 5 - JUMLAH KUNJUNGAN PASIEN BARU RAWAT JALAN, RAWAT INAP, DAN KUNJUNGAN GANGGUAN JIWA DI SARANA PELAYANAN KESEHATAN </h4>
            <h5> Tombol <strong><span class="badge bg-white"><i class="fa fa-fw fa-refresh"></i></span> reset</strong> digunakan untuk mengosongkan isian </h5>
            <h5> Tombol <strong><span class="badge bg-blue"><i class="fa fa-fw fa-recycle"></i></span> proses</strong> digunakan untuk menambah data setiap desa ke database </h5>
            <h5> Tombol <strong><span class="badge bg-purple"><i class="fa fa-fw fa-arrow-left"></i></span> kembali</strong>  digunakan untuk kembali ke halaman sebelumnya (view tabel) </h5>                                     
          </div>
        </div>
        <!-- /.box-header -->
        <!-- form start -->
        <form class="form-horizontal">
          <div class="box-body">
            <div class="col-md-12">
              <div class="form-group">
                <label for="" class="col-sm-3 control-label">Pilih Bulan</label>
                <div class="col-sm-2">
                  <select v-model="PILIH_BULAN" class="form-control">
                    <option selected="selected">Pilih Bulan</option>
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
                <label for="" class="col-sm-3 control-label">Pilih Tahun</label>
                <div class="col-sm-2">
                  <select @click="onChangeHandle()" v-model="PILIH_TAHUN" class="form-control">
                    <option selected="selected">Pilih Tahun</option>
                    <option value="2019">2019</option>
                    <option value="2020">2020</option>
                    <option value="2021">2021</option>
                  </select>
                </div>
              </div>
              <div class="nav-tabs-custom">                
                <ul class="nav nav-tabs">
                  <li class="active"><a href="#tab_1" data-toggle="tab">RS Umum </a></li>
                  <li><a href="#tab_2" data-toggle="tab"> RS Khusus</a></li>                          
                  <li><a href="#tab_3" data-toggle="tab"> Klinik Utama</a></li>                          
                  <li><a href="#tab_4" data-toggle="tab"> Praktik Mandiri Dokter Spesialis</a></li>
                  <li><a href="#tab_5" data-toggle="tab"> Puskesmas</a></li>                          
                  <li><a href="#tab_6" data-toggle="tab"> Klinik Pratama</a></li>                          
                  <li><a href="#tab_7" data-toggle="tab"> Praktik Mandiri Dokter</a></li>                          
                  <li><a href="#tab_8" data-toggle="tab"> Praktik Mandiri Dokter Gigi</a></li>                          
                  <li><a href="#tab_9" data-toggle="tab"> Praktik Mandiri Bidan</a></li>                          
                </ul>
                <div class="tab-content">
                  <div class="tab-pane active" id="tab_1">
                    <div class="box-body">
                      <div class="col-md-6">
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> Jumlah Kunjungan RJ Laki </label>
                          <div class="col-sm-4">
                            <input v-model="JUMLAH_KUNJUNGAN_RAWAT_JALAN_LAKI_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_LANJUT_RS_UMUM" type="text" class="form-control" id="" name="rsu_jumlah_kunjungan_rj_laki" v-on:blur="jmlKunjunganRJLPRSU()" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> Jumlah Kunjungan RJ Perempuan </label>
                          <div class="col-sm-4">
                            <input v-model="JUMLAH_KUNJUNGAN_RAWAT_JALAN_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_LANJUT_RS_UMUM" type="text" v-on:blur="jmlKunjunganRJLPRSU()" class="form-control" id="" name="rsu_jumlah_kunjungan_rj_perempuan" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> Jumlah Kunjungan RJ Laki+Perempuan </label>
                          <div class="col-sm-4">
                            <input type="text" v-model="JUMLAH_KUNJUNGAN_RAWAT_JALAN_LP_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_LANJUT_RS_UMUM" class="form-control" id="" name="rsu_jumlah_kunjungan_rj_laki_perempuan" placeholder="" disabled="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> Jumlah Kunjungan RI Laki </label>
                          <div class="col-sm-4">
                            <input v-model="JUMLAH_KUNJUNGAN_RAWAT_INAP_LAKI_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_LANJUT_RS_UMUM" type="text" v-on:blur="rawatInapRSULP()" class="form-control" id="" name="rsu_jumlah_kunjungan_ri_laki" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> Jumlah Kunjungan RI Perempuan </label>
                          <div class="col-sm-4">
                            <input v-model="JUMLAH_KUNJUNGAN_RAWAT_INAP_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_LANJUT_RS_UMUM" v-on:blur="rawatInapRSULP()" type="text" class="form-control" id="" name="rsu_jumlah_kunjungan_ri_perempuan" placeholder="">
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> Jumlah Kunjungan RI Laki+Perempuan </label>
                          <div class="col-sm-4">
                            <input v-model="JUMLAH_KUNJUNGAN_RAWAT_INAP_LP_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_LANJUT_RS_UMUM" type="text" class="form-control" id="" name="rsu_jumlah_kunjungan_ri_laki_perempuan" disabled="" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> Kunjungan Gangguan Jiwa Jumlah Laki </label>
                          <div class="col-sm-4">
                            <input v-model="KUNJUNGAN_GANGGUAN_JIWA_JUMLAH_LAKI_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_LANJUT_RS_UMUM" v-on:blur="jiwaRSULP()" type="text" class="form-control" id="" name="rsu_kunjungan_gangguan_jiwa_jumlah_laki" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> Kunjungan Gangguan Jiwa Jumlah Perempuan </label>
                          <div class="col-sm-4">
                            <input v-model="KUNJUNGAN_GANGGUAN_JIWA_JUMLAH_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_LANJUT_RS_UMUM" v-on:blur="jiwaRSULP()" type="text" class="form-control" id="" name="rsu_kunjungan_gangguan_jiwa_jumlah_perempuan" placeholder="">
                          </div>
                        </div> 
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> Kunjungan Gangguan Jiwa Jumlah Laki+Perempuan </label>
                          <div class="col-sm-4">
                            <input v-model="KUNJUNGAN_GANGGUAN_JIWA_JUMLAH_LP_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_LANJUT_RS_UMUM" type="text"  class="form-control" id="" disabled="" name="rsu_kunjungan_gangguan_jiwa_jumlah_laki_perempuan" placeholder="">
                          </div>
                        </div> 
                      </div>              
                    </div>
                  </div>
                  <!-- /.tab-pane -->
                  <div class="tab-pane" id="tab_2">
                    <div class="box-body">
                      <div class="col-md-6">
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> Jumlah Kunjungan RJ Laki </label>
                          <div class="col-sm-4">
                            <input v-on:blur="rawatJalanLP()" v-model="JUMLAH_KUNJUNGAN_RAWAT_JALAN_LAKI_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_LANJUT_RS_KHUSUS" type="text" class="form-control" id="" name="rsk_jumlah_kunjungan_rj_laki" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> Jumlah Kunjungan RJ Perempuan </label>
                          <div class="col-sm-4">
                            <input v-on:blur="rawatJalanLP()" v-model="JUMLAH_KUNJUNGAN_RAWAT_JALAN_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_LANJUT_RS_KHUSUS" type="text" class="form-control" id="" name="rsk_jumlah_kunjungan_rj_perempuan" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> Jumlah Kunjungan RJ Laki+Perempuan </label>
                          <div class="col-sm-4">
                            <input v-model="JUMLAH_KUNJUNGAN_RAWAT_JALAN_LAKI_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_LANJUT_RS_KHUSUS" type="text" class="form-control" id="" name="rsk_jumlah_kunjungan_rj_laki_perempuan" placeholder="" disabled="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> Jumlah Kunjungan RI Laki </label>
                          <div class="col-sm-4">
                            <input v-on:blur="rawatInapLP()" v-model="JUMLAH_KUNJUNGAN_RAWAT_INAP_LAKI_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_LANJUT_RS_KHUSUS" type="text" class="form-control" id="" name="rsk_jumlah_kunjungan_ri_laki" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> Jumlah Kunjungan RI Perempuan </label>
                          <div class="col-sm-4">
                            <input v-on:blur="rawatInapLP()" v-model="JUMLAH_KUNJUNGAN_RAWAT_INAP_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_LANJUT_RS_KHUSUS" type="text" class="form-control" id="" name="rsk_jumlah_kunjungan_ri_perempuan" placeholder="">
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> Jumlah Kunjungan RI Laki+Perempuan </label>
                          <div class="col-sm-4">
                            <input v-model="JUMLAH_KUNJUNGAN_RAWAT_INAP_LAKI_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_LANJUT_RS_KHUSUS" type="text" class="form-control" id="" name="rsk_jumlah_kunjungan_ri_laki_perempuan" placeholder="" disabled="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> Kunjungan Gangguan Jiwa Jumlah Laki </label>
                          <div class="col-sm-4">
                            <input v-on:blur="gangguanJiwaLP()" v-model="KUNJUNGAN_GANGGUAN_JIWA_JUMLAH_LAKI_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_LANJUT_RS_KHUSUS" type="text" class="form-control" id="" name="rsk_kunjungan_gangguan_jiwa_jumlah_laki" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> Kunjungan Gangguan Jiwa Jumlah Perempuan </label>
                          <div class="col-sm-4">
                            <input v-on:blur="gangguanJiwaLP()" v-model="KUNJUNGAN_GANGGUAN_JIWA_JUMLAH_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_LANJUT_RS_KHUSUS" type="text" class="form-control" id="" name="rsk_kunjungan_gangguan_jiwa_jumlah_perempuan" placeholder="">
                          </div>
                        </div> 
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> Kunjungan Gangguan Jiwa Jumlah Laki+Perempuan </label>
                          <div class="col-sm-4">
                            <input v-model="KUNJUNGAN_GANGGUAN_JIWA_JUMLAH_LAKI_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_LANJUT_RS_KHUSUS" type="text" class="form-control" id="" name="rsk_kunjungan_gangguan_jiwa_jumlah_laki_perempuan" placeholder="" disabled="">
                          </div>
                        </div> 
                      </div>                
                    </div> 
                  </div>
                  <!-- /.tab-pane -->
                  <div class="tab-pane" id="tab_3">
                    <div class="box-body">
                      <div class="col-md-6">
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> Jumlah Kunjungan RJ Laki </label>
                          <div class="col-sm-4">
                            <input v-on:blur="kunjunganKlinikLP()" v-model="JUMLAH_KUNJUNGAN_RAWAT_JALAN_LAKI_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_LANJUT_KLINIK_UTAMA" type="text" class="form-control" id="" name="ku_jumlah_kunjungan_rj_laki" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> Jumlah Kunjungan RJ Perempuan </label>
                          <div class="col-sm-4">
                            <input v-on:blur="kunjunganKlinikLP()" v-model="JUMLAH_KUNJUNGAN_RAWAT_JALAN_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_LANJUT_KLINIK_UTAMA" type="text" class="form-control" id="" name="ku_jumlah_kunjungan_rj_perempuan" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> Jumlah Kunjungan RJ Laki+Perempuan </label>
                          <div class="col-sm-4">
                            <input v-model="JUMLAH_KUNJUNGAN_RAWAT_JALAN_LAKI_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_LANJUT_KLINIK_UTAMA" type="text" class="form-control" id="" name="ku_jumlah_kunjungan_rj_laki_perempuan" placeholder="" disabled="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> Jumlah Kunjungan RI Laki </label>
                          <div class="col-sm-4">
                            <input v-on:blur="rawatInapKlinikLP()" v-model="JUMLAH_KUNJUNGAN_RAWAT_INAP_LAKI_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_LANJUT_KLINIK_UTAMA" type="text" class="form-control" id="" name="ku_jumlah_kunjungan_ri_laki" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> Jumlah Kunjungan RI Perempuan </label>
                          <div class="col-sm-4">
                            <input v-on:blur="rawatInapKlinikLP()" v-model="JUMLAH_KUNJUNGAN_RAWAT_INAP_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_LANJUT_KLINIK_UTAMA" type="text" class="form-control" id="" name="ku_jumlah_kunjungan_ri_perempuan" placeholder="">
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> Jumlah Kunjungan RI Laki+Perempuan </label>
                          <div class="col-sm-4">
                            <input v-model="JUMLAH_KUNJUNGAN_RAWAT_INAP_LAKI_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_LANJUT_KLINIK_UTAMA" type="text" class="form-control" id="" name="ku_jumlah_kunjungan_ri_laki_perempuan" placeholder="" disabled="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> Kunjungan Gangguan Jiwa Jumlah Laki </label>
                          <div class="col-sm-4">
                            <input v-on:blur="gangguanJiwaKlinikLP()" v-model="KUNJUNGAN_GANGGUAN_JIWA_JUMLAH_LAKI_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_LANJUT_KLINIK_UTAMA" type="text" class="form-control" id="" name="ku_kunjungan_gangguan_jiwa_jumlah_laki" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> Kunjungan Gangguan Jiwa Jumlah Perempuan </label>
                          <div class="col-sm-4">
                            <input v-on:blur="gangguanJiwaKlinikLP()" v-model="KUNJUNGAN_GANGGUAN_JIWA_JUMLAH_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_LANJUT_KLINIK_UTAMA" type="text" class="form-control" id="" name="ku_kunjungan_gangguan_jiwa_jumlah_perempuan" placeholder="">
                          </div>
                        </div> 
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> Kunjungan Gangguan Jiwa Jumlah Laki+Perempuan </label>
                          <div class="col-sm-4">
                            <input v-model="KUNJUNGAN_GANGGUAN_JIWA_JUMLAH_LAKI_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_LANJUT_KLINIK_UTAMA" type="text" class="form-control" id="" name="ku_kunjungan_gangguan_jiwa_jumlah_laki_perempuan" placeholder="" disabled="">
                          </div>
                        </div> 
                      </div>             
                    </div> 
                  </div>

                  <div class="tab-pane" id="tab_4">
                    <div class="box-body">
                      <div class="col-md-6">
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> Jumlah Kunjungan RJ Laki </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" v-model="JUMLAH_KUNJUNGAN_RAWAT_JALAN_LAKI_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_LANJUT_PRAKTIK_MANDIRI_DOKTER_SPESIALIS" id="" name="pmds_jumlah_kunjungan_rj_laki" placeholder="" v-on:blur="jumlahKunjunganRJDokterSpesialis_LP()">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> Jumlah Kunjungan RJ Perempuan </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="JUMLAH_KUNJUNGAN_RAWAT_JALAN_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_LANJUT_PRAKTIK_MANDIRI_DOKTER_SPESIALIS" name="pmds_jumlah_kunjungan_rj_perempuan" placeholder="" v-on:blur="jumlahKunjunganRJDokterSpesialis_LP()">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> Jumlah Kunjungan RJ Laki+Perempuan </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="JUMLAH_KUNJUNGAN_RAWAT_JALAN_LAKI_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_LANJUT_PRAKTIK_MANDIRI_DOKTER_SPESIALIS" name="pmds_jumlah_kunjungan_rj_laki_perempuan" placeholder="" disabled="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> Jumlah Kunjungan RI Laki </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="JUMLAH_KUNJUNGAN_RAWAT_INAP_LAKI_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_LANJUT_PRAKTIK_MANDIRI_DOKTER_SPESIALIS" name="pmds_jumlah_kunjungan_ri_laki" placeholder="" v-on:blur="jumlahKunjunganRIDokterSpesialis_LP()">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> Jumlah Kunjungan RI Perempuan </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="JUMLAH_KUNJUNGAN_RAWAT_INAP_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_LANJUT_PRAKTIK_MANDIRI_DOKTER_SPESIALIS" name="pmds_jumlah_kunjungan_ri_perempuan" placeholder="" v-on:blur="jumlahKunjunganRIDokterSpesialis_LP()">
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> Jumlah Kunjungan RI Laki+Perempuan </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="JUMLAH_KUNJUNGAN_RAWAT_INAP_LAKI_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_LANJUT_PRAKTIK_MANDIRI_DOKTER_SPESIALIS" name="pmds_jumlah_kunjungan_ri_laki_perempuan" placeholder="" disabled="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> Kunjungan Gangguan Jiwa Jumlah Laki </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="KUNJUNGAN_GANGGUAN_JIWA_JUMLAH_LAKI_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_LANJUT_PRAKTIK_MANDIRI_DOKTER_SPESIALIS" name="pmds_kunjungan_gangguan_jiwa_jumlah_laki" placeholder="" v-on:blur="kunjunganGangguanJiwa_LP()">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> Kunjungan Gangguan Jiwa Jumlah Perempuan </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="KUNJUNGAN_GANGGUAN_JIWA_JUMLAH_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_LANJUT_PRAKTIK_MANDIRI_DOKTER_SPESIALIS" name="pmds_kunjungan_gangguan_jiwa_jumlah_perempuan" placeholder="" v-on:blur="kunjunganGangguanJiwa_LP()">
                          </div>
                        </div> 
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> Kunjungan Gangguan Jiwa Jumlah Laki+Perempuan </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="KUNJUNGAN_GANGGUAN_JIWA_JUMLAH_LAKI_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_LANJUT_PRAKTIK_MANDIRI_DOKTER_SPESIALIS" name="pmds_kunjungan_gangguan_jiwa_jumlah_laki_perempuan" placeholder="" disabled="">
                          </div>
                        </div> 
                      </div>            
                    </div> 
                  </div>  

                  <div class="tab-pane" id="tab_5">
                    <div class="box-body">
                      <div class="col-md-6">
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> Jumlah Kunjungan RJ Laki </label>
                          <div class="col-sm-4">
                            <input v-model="JUMLAH_KUNJUNGAN_RAWAT_JALAN_LAKI_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_PERTAMA_PUSKESMAS" type="text" class="form-control" id="" v-on:blur="jumlahKunjunganRJ_pkm_LP()" name="pkm_jumlah_kunjungan_rj_laki" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> Jumlah Kunjungan RJ Perempuan </label>
                          <div class="col-sm-4">
                            <input v-model="JUMLAH_KUNJUNGAN_RAWAT_JALAN_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_PERTAMA_PUSKESMAS" type="text" class="form-control" id="" name="pkm_jumlah_kunjungan_rj_perempuan" placeholder="" v-on:blur="jumlahKunjunganRJ_pkm_LP()">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> Jumlah Kunjungan RJ Laki+Perempuan </label>
                          <div class="col-sm-4">
                            <input type="text" v-model="JUMLAH_KUNJUNGAN_RAWAT_JALAN_LAKI_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_PERTAMA_PUSKESMAS" class="form-control" id="" name="pkm_jumlah_kunjungan_rj_laki_perempuan" placeholder="" disabled="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> Jumlah Kunjungan RI Laki </label>
                          <div class="col-sm-4">
                            <input v-model="JUMLAH_KUNJUNGAN_RAWAT_INAP_LAKI_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_PERTAMA_PUSKESMAS" type="text" class="form-control" id="" v-on:blur="jumlahKunjunganRI_pkm_LP()" name="pkm_jumlah_kunjungan_ri_laki" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> Jumlah Kunjungan RI Perempuan </label>
                          <div class="col-sm-4">
                            <input v-model="JUMLAH_KUNJUNGAN_RAWAT_INAP_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_PERTAMA_PUSKESMAS" type="text" class="form-control" id="" name="pkm_jumlah_kunjungan_ri_perempuan" placeholder="" v-on:blur="jumlahKunjunganRI_pkm_LP()">
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> Jumlah Kunjungan RI Laki+Perempuan </label>
                          <div class="col-sm-4">
                            <input v-model="JUMLAH_KUNJUNGAN_RAWAT_INAP_LAKI_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_PERTAMA_PUSKESMAS" type="text" class="form-control" id="" name="pkm_jumlah_kunjungan_ri_laki_perempuan" placeholder="" disabled="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> Kunjungan Gangguan Jiwa Jumlah Laki </label>
                          <div class="col-sm-4">
                            <input v-model="KUNJUNGAN_GANGGUAN_JIWA_JUMLAH_LAKI_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_PERTAMA_PUSKESMAS" type="text" class="form-control" id="" v-on:blur="kunjunganGangguanJiwa_pkm_LP()" name="pkm_kunjungan_gangguan_jiwa_jumlah_laki" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> Kunjungan Gangguan Jiwa Jumlah Perempuan </label>
                          <div class="col-sm-4">
                            <input v-model="KUNJUNGAN_GANGGUAN_JIWA_JUMLAH_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_PERTAMA_PUSKESMAS" type="text" class="form-control" id="" name="pkm_kunjungan_gangguan_jiwa_jumlah_perempuan" placeholder="" v-on:blur="kunjunganGangguanJiwa_pkm_LP()">
                          </div>
                        </div> 
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> Kunjungan Gangguan Jiwa Jumlah Laki+Perempuan </label>
                          <div class="col-sm-4">
                            <input v-model="KUNJUNGAN_GANGGUAN_JIWA_JUMLAH_LAKI_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_PERTAMA_PUSKESMAS" type="text" class="form-control" id="" name="pkm_kunjungan_gangguan_jiwa_jumlah_laki_perempuan" placeholder="" disabled="">
                          </div>
                        </div> 
                      </div>         
                    </div> 
                  </div>

                  <div class="tab-pane" id="tab_6">
                    <div class="box-body">
                      <div class="col-md-6">
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> Jumlah Kunjungan RJ Laki </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" v-model="JUMLAH_KUNJUNGAN_RAWAT_JALAN_LAKI_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_PERTAMA_KLINIK_PRATAMA" id="" v-on:blur="jumlahKunjunganRJ_KP_LP()" name="kp_jumlah_kunjungan_rj_laki" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> Jumlah Kunjungan RJ Perempuan </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="JUMLAH_KUNJUNGAN_RAWAT_JALAN_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_PERTAMA_KLINIK_PRATAMA" name="kp_jumlah_kunjungan_rj_perempuan" placeholder="" v-on:blur="jumlahKunjunganRJ_KP_LP()">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> Jumlah Kunjungan RJ Laki+Perempuan </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="JUMLAH_KUNJUNGAN_RAWAT_JALAN_LAKI_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_PERTAMA_KLINIK_PRATAMA" name="kp_jumlah_kunjungan_rj_laki_perempuan" placeholder="" disabled="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> Jumlah Kunjungan RI Laki </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="JUMLAH_KUNJUNGAN_RAWAT_INAP_LAKI_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_PERTAMA_KLINIK_PRATAMA" v-on:blur="jumlahKunjunganRI_KP_LP()" name="kp_jumlah_kunjungan_ri_laki" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> Jumlah Kunjungan RI Perempuan </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="JUMLAH_KUNJUNGAN_RAWAT_INAP_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_PERTAMA_KLINIK_PRATAMA" name="kp_jumlah_kunjungan_ri_perempuan" placeholder="" v-on:blur="jumlahKunjunganRI_KP_LP()">
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> Jumlah Kunjungan RI Laki+Perempuan </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="JUMLAH_KUNJUNGAN_RAWAT_INAP_LAKI_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_PERTAMA_KLINIK_PRATAMA" name="kp_jumlah_kunjungan_ri_laki_perempuan" placeholder="" disabled="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> Kunjungan Gangguan Jiwa Jumlah Laki </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="KUNJUNGAN_GANGGUAN_JIWA_JUMLAH_LAKI_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_PERTAMA_KLINIK_PRATAMA" name="kp_kunjungan_gangguan_jiwa_jumlah_laki" placeholder="" v-on:blur="kunjunganGangguanJiwa_KP_LP()">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> Kunjungan Gangguan Jiwa Jumlah Perempuan </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="KUNJUNGAN_GANGGUAN_JIWA_JUMLAH_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_PERTAMA_KLINIK_PRATAMA" name="kp_kunjungan_gangguan_jiwa_jumlah_perempuan" placeholder="" v-on:blur="kunjunganGangguanJiwa_KP_LP()">
                          </div>
                        </div> 
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> Kunjungan Gangguan Jiwa Jumlah Laki+Perempuan </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="KUNJUNGAN_GANGGUAN_JIWA_JUMLAH_LAKI_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_PERTAMA_KLINIK_PRATAMA" name="kp_kunjungan_gangguan_jiwa_jumlah_laki_perempuan" placeholder="" disabled="">
                          </div>
                        </div> 
                      </div>         
                    </div> 
                  </div> 

                  <div class="tab-pane" id="tab_7">
                    <div class="box-body">
                      <div class="col-md-6">
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> Jumlah Kunjungan RJ Laki </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="JUMLAH_KUNJUNGAN_RAWAT_JALAN_LAKI_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_PERTAMA_PRAKTIK_MANDIRI_DOKTER" name="pmd_jumlah_kunjungan_rj_laki" placeholder="" v-on:blur="jumlahKunjunganRJ_PMD_LP()">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> Jumlah Kunjungan RJ Perempuan </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="JUMLAH_KUNJUNGAN_RAWAT_JALAN_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_PERTAMA_PRAKTIK_MANDIRI_DOKTER" name="pmd_jumlah_kunjungan_rj_perempuan" placeholder="" v-on:blur="jumlahKunjunganRJ_PMD_LP()">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> Jumlah Kunjungan RJ Laki+Perempuan </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="JUMLAH_KUNJUNGAN_RAWAT_JALAN_LAKI_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_PERTAMA_PRAKTIK_MANDIRI_DOKTER" name="pmd_jumlah_kunjungan_rj_laki_perempuan" placeholder="" disabled="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> Jumlah Kunjungan RI Laki </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="JUMLAH_KUNJUNGAN_RAWAT_INAP_LAKI_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_PERTAMA_PRAKTIK_MANDIRI_DOKTER" name="pmd_jumlah_kunjungan_ri_laki" placeholder="" v-on:blur="jumlahKunjunganRI_PMD_LP()">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> Jumlah Kunjungan RI Perempuan </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="JUMLAH_KUNJUNGAN_RAWAT_INAP_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_PERTAMA_PRAKTIK_MANDIRI_DOKTER" name="pmd_jumlah_kunjungan_ri_perempuan" placeholder="" v-on:blur="jumlahKunjunganRI_PMD_LP()">
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> Jumlah Kunjungan RI Laki+Perempuan </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="JUMLAH_KUNJUNGAN_RAWAT_INAP_LAKI_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_PERTAMA_PRAKTIK_MANDIRI_DOKTER" name="pmd_jumlah_kunjungan_ri_laki_perempuan" placeholder="" disabled="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> Kunjungan Gangguan Jiwa Jumlah Laki </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="KUNJUNGAN_GANGGUAN_JIWA_JUMLAH_LAKI_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_PERTAMA_PRAKTIK_MANDIRI_DOKTER" name="pmd_kunjungan_gangguan_jiwa_jumlah_laki" placeholder="" v-on:blur="kunjunganGangguanJiwa_PMD_LP()">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> Kunjungan Gangguan Jiwa Jumlah Perempuan </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="KUNJUNGAN_GANGGUAN_JIWA_JUMLAH_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_PERTAMA_PRAKTIK_MANDIRI_DOKTER" name="pmd_kunjungan_gangguan_jiwa_jumlah_perempuan" placeholder="" v-on:blur="kunjunganGangguanJiwa_PMD_LP()">
                          </div>
                        </div> 
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> Kunjungan Gangguan Jiwa Jumlah Laki+Perempuan </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="KUNJUNGAN_GANGGUAN_JIWA_JUMLAH_LAKI_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_PERTAMA_PRAKTIK_MANDIRI_DOKTER" name="pmd_kunjungan_gangguan_jiwa_jumlah_laki_perempuan" placeholder="" disabled="">
                          </div>
                        </div> 
                      </div>         
                    </div> 
                  </div> 

                  <div class="tab-pane" id="tab_8">
                    <div class="box-body">
                      <div class="col-md-6">
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> Jumlah Kunjungan RJ Laki </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="JUMLAH_KUNJUNGAN_RAWAT_JALAN_LAKI_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_PERTAMA_PRAKTIK_MANDIRI_DOKTER_GIGI" name="pmdg_jumlah_kunjungan_rj_laki" placeholder="" v-on:blur="jumlahKunjunganRJ_PMDG_LP()">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> Jumlah Kunjungan RJ Perempuan </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="JUMLAH_KUNJUNGAN_RAWAT_JALAN_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_PERTAMA_PRAKTIK_MANDIRI_DOKTER_GIGI" name="pmdg_jumlah_kunjungan_rj_perempuan" placeholder="" v-on:blur="jumlahKunjunganRJ_PMDG_LP()">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> Jumlah Kunjungan RJ Laki+Perempuan </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="JUMLAH_KUNJUNGAN_RAWAT_JALAN_LAKI_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_PERTAMA_PRAKTIK_MANDIRI_DOKTER_GIGI" name="pmdg_jumlah_kunjungan_rj_laki_perempuan" placeholder="" disabled="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> Jumlah Kunjungan RI Laki </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="JUMLAH_KUNJUNGAN_RAWAT_INAP_LAKI_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_PERTAMA_PRAKTIK_MANDIRI_DOKTER_GIGI" name="pmdg_jumlah_kunjungan_ri_laki" placeholder="" v-on:blur="jumlahKunjunganRI_PMDG_LP()">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> Jumlah Kunjungan RI Perempuan </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="JUMLAH_KUNJUNGAN_RAWAT_INAP_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_PERTAMA_PRAKTIK_MANDIRI_DOKTER_GIGI" name="pmdg_jumlah_kunjungan_ri_perempuan" placeholder="" v-on:blur="jumlahKunjunganRI_PMDG_LP()">
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> Jumlah Kunjungan RI Laki+Perempuan </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="JUMLAH_KUNJUNGAN_RAWAT_INAP_LAKI_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_PERTAMA_PRAKTIK_MANDIRI_DOKTER_GIGI" name="pmdg_jumlah_kunjungan_ri_laki_perempuan" placeholder="" disabled="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> Kunjungan Gangguan Jiwa Jumlah Laki </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="KUNJUNGAN_GANGGUAN_JIWA_JUMLAH_LAKI_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_PERTAMA_PRAKTIK_MANDIRI_DOKTER_GIGI" name="pmdg_kunjungan_gangguan_jiwa_jumlah_laki" placeholder="" v-on:blur="kunjunganGangguanJiwa_PMDG_LP()"> 
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> Kunjungan Gangguan Jiwa Jumlah Perempuan </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="KUNJUNGAN_GANGGUAN_JIWA_JUMLAH_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_PERTAMA_PRAKTIK_MANDIRI_DOKTER_GIGI" name="pmdg_kunjungan_gangguan_jiwa_jumlah_perempuan" placeholder="" v-on:blur="kunjunganGangguanJiwa_PMDG_LP()">
                          </div>
                        </div> 
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> Kunjungan Gangguan Jiwa Jumlah Laki+Perempuan </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="KUNJUNGAN_GANGGUAN_JIWA_JUMLAH_LAKI_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_PERTAMA_PRAKTIK_MANDIRI_DOKTER_GIGI" name="pmdg_kunjungan_gangguan_jiwa_jumlah_laki_perempuan" placeholder="" disabled="">
                          </div>
                        </div> 
                      </div>         
                    </div> 
                  </div> 

                  <div class="tab-pane" id="tab_9">
                    <div class="box-body">
                      <div class="col-md-6">
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> Jumlah Kunjungan RJ Laki </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="JUMLAH_KUNJUNGAN_RAWAT_JALAN_LAKI_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_PERTAMA_PRAKTIK_MANDIRI_BIDAN" name="pmb_jumlah_kunjungan_rj_laki" placeholder="" v-on:blur="jumlahKunjunganRJ_PMB_LP()">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> Jumlah Kunjungan RJ Perempuan </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="JUMLAH_KUNJUNGAN_RAWAT_JALAN_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_PERTAMA_PRAKTIK_MANDIRI_BIDAN" name="pmb_jumlah_kunjungan_rj_perempuan" placeholder="" v-on:blur="jumlahKunjunganRJ_PMB_LP()">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> Jumlah Kunjungan RJ Laki+Perempuan </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="JUMLAH_KUNJUNGAN_RAWAT_JALAN_LAKI_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_PERTAMA_PRAKTIK_MANDIRI_BIDAN" name="pmb_jumlah_kunjungan_rj_laki_perempuan" placeholder="" disabled="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> Jumlah Kunjungan RI Laki </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="JUMLAH_KUNJUNGAN_RAWAT_INAP_LAKI_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_PERTAMA_PRAKTIK_MANDIRI_BIDAN" name="pmb_jumlah_kunjungan_ri_laki" placeholder="" v-on:blur="jumlahKunjunganRI_PMB_LP()">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> Jumlah Kunjungan RI Perempuan </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="JUMLAH_KUNJUNGAN_RAWAT_INAP_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_PERTAMA_PRAKTIK_MANDIRI_BIDAN" name="pmb_jumlah_kunjungan_ri_perempuan" placeholder="" v-on:blur="jumlahKunjunganRI_PMB_LP()">
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> Jumlah Kunjungan RI Laki+Perempuan </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="JUMLAH_KUNJUNGAN_RAWAT_INAP_LAKI_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_PERTAMA_PRAKTIK_MANDIRI_BIDAN" name="pmb_jumlah_kunjungan_ri_laki_perempuan" placeholder="" disabled="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> Kunjungan Gangguan Jiwa Jumlah Laki </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="KUNJUNGAN_GANGGUAN_JIWA_JUMLAH_LAKI_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_PERTAMA_PRAKTIK_MANDIRI_BIDAN" v-on:blur="kunjunganGangguanJiwa_PMB_LP()" name="pmb_kunjungan_gangguan_jiwa_jumlah_laki" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> Kunjungan Gangguan Jiwa Jumlah Perempuan </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="KUNJUNGAN_GANGGUAN_JIWA_JUMLAH_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_PERTAMA_PRAKTIK_MANDIRI_BIDAN" name="pmb_kunjungan_gangguan_jiwa_jumlah_perempuan" v-on:blur="kunjunganGangguanJiwa_PMB_LP()" placeholder="">
                          </div>
                        </div> 
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> Kunjungan Gangguan Jiwa Jumlah Laki+Perempuan </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="KUNJUNGAN_GANGGUAN_JIWA_JUMLAH_LAKI_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_PERTAMA_PRAKTIK_MANDIRI_BIDAN" name="pmb_kunjungan_gangguan_jiwa_jumlah_laki_perempuan" placeholder="" disabled="">
                          </div>
                        </div> 
                      </div>         
                    </div> 
                  </div>                                              
                  <!-- /.tab-pane -->
                </div>
            <!-- /.tab-content -->
              </div>              
            </div>                                          
          </div>
          <!-- /.box-body -->
          <div class="box-footer">
            <button type="reset" @click="reset()" class="btn btn-default"><i class="fa fa-fw fa-refresh"></i> Reset</button>
            <button type="button" @click="proses()" class="btn btn-primary" data-toggle="modal" data-target="#modal-primary"><i class="fa fa-fw fa-recycle"></i>
            Proses
            </button>                
            <router-link to="/table5"><a class="btn btn-success btn-md"><i class="fa fa-fw fa-arrow-left"></i> Kembali</a></router-link>
          </div>
          <!-- /.box-footer -->
        </form>            
      <!-- /.modal -->
      </div>
    </div>
  </div>
</div>
  <!-- /.content -->
</template>
<script>
export default {
  name: 'Table5',
  data() {
    return {
      USERNAME: '',
      JENIS_RS: '',
      PILIH_BULAN: '1',
      PILIH_TAHUN: '2019',
      NAMA_RUMAH_SAKIT: '',      
      KUNJUNGAN_GANGGUAN_JIWA_JUMLAH_LP_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_LANJUT_RS_UMUM: 0, 
      JUMLAH_KUNJUNGAN_RAWAT_JALAN_LAKI_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_PERTAMA_PUSKESMAS: 0,
      JUMLAH_KUNJUNGAN_RAWAT_JALAN_LAKI_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_PERTAMA_KLINIK_PRATAMA: 0,
      JUMLAH_KUNJUNGAN_RAWAT_JALAN_LAKI_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_PERTAMA_PRAKTIK_MANDIRI_DOKTER: 0,
      JUMLAH_KUNJUNGAN_RAWAT_JALAN_LAKI_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_PERTAMA_PRAKTIK_MANDIRI_DOKTER_GIGI: 0,
      JUMLAH_KUNJUNGAN_RAWAT_JALAN_LAKI_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_PERTAMA_PRAKTIK_MANDIRI_BIDAN: 0,
      JUMLAH_KUNJUNGAN_RAWAT_JALAN_LAKI_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_LANJUT_KLINIK_UTAMA: 0,
      JUMLAH_KUNJUNGAN_RAWAT_JALAN_LAKI_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_LANJUT_RS_UMUM: 0,
      JUMLAH_KUNJUNGAN_RAWAT_JALAN_LP_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_LANJUT_RS_UMUM: 0,
      JUMLAH_KUNJUNGAN_RAWAT_JALAN_LAKI_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_LANJUT_RS_KHUSUS: 0,
      JUMLAH_KUNJUNGAN_RAWAT_JALAN_LAKI_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_LANJUT_PRAKTIK_MANDIRI_DOKTER_SPESIALIS: 0,
      JUMLAH_KUNJUNGAN_RAWAT_JALAN_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_PERTAMA_PUSKESMAS: 0,
      JUMLAH_KUNJUNGAN_RAWAT_JALAN_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_PERTAMA_KLINIK_PRATAMA: 0,
      JUMLAH_KUNJUNGAN_RAWAT_JALAN_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_PERTAMA_PRAKTIK_MANDIRI_DOKTER: 0,
      JUMLAH_KUNJUNGAN_RAWAT_JALAN_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_PERTAMA_PRAKTIK_MANDIRI_DOKTER_GIGI: 0,
      JUMLAH_KUNJUNGAN_RAWAT_JALAN_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_PERTAMA_PRAKTIK_MANDIRI_BIDAN: 0,
      JUMLAH_KUNJUNGAN_RAWAT_JALAN_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_LANJUT_KLINIK_UTAMA: 0,
      JUMLAH_KUNJUNGAN_RAWAT_JALAN_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_LANJUT_RS_UMUM: 0,
      JUMLAH_KUNJUNGAN_RAWAT_JALAN_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_LANJUT_RS_KHUSUS: 0,
      JUMLAH_KUNJUNGAN_RAWAT_JALAN_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_LANJUT_PRAKTIK_MANDIRI_DOKTER_SPESIALIS: 0,
      JUMLAH_KUNJUNGAN_RAWAT_JALAN_LAKI_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_PERTAMA_PUSKESMAS: 0,
      JUMLAH_KUNJUNGAN_RAWAT_JALAN_LAKI_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_PERTAMA_KLINIK_PRATAMA: 0,
      JUMLAH_KUNJUNGAN_RAWAT_JALAN_LAKI_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_PERTAMA_PRAKTIK_MANDIRI_DOKTER: 0,
      JUMLAH_KUNJUNGAN_RAWAT_JALAN_LAKI_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_PERTAMA_PRAKTIK_MANDIRI_DOKTER_GIGI: 0,
      JUMLAH_KUNJUNGAN_RAWAT_JALAN_LAKI_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_PERTAMA_PRAKTIK_MANDIRI_BIDAN: 0,
      JUMLAH_KUNJUNGAN_RAWAT_JALAN_LAKI_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_LANJUT_KLINIK_UTAMA: 0,
      JUMLAH_KUNJUNGAN_RAWAT_JALAN_LAKI_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_LANJUT_RS_UMUM: 0,
      JUMLAH_KUNJUNGAN_RAWAT_JALAN_LAKI_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_LANJUT_RS_KHUSUS: 0,
      JUMLAH_KUNJUNGAN_RAWAT_JALAN_LAKI_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_LANJUT_PRAKTIK_MANDIRI_DOKTER_SPESIALIS: 0,
      JUMLAH_KUNJUNGAN_RAWAT_INAP_LAKI_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_PERTAMA_PUSKESMAS: 0,
      JUMLAH_KUNJUNGAN_RAWAT_INAP_LAKI_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_PERTAMA_KLINIK_PRATAMA: 0,
      JUMLAH_KUNJUNGAN_RAWAT_INAP_LAKI_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_PERTAMA_PRAKTIK_MANDIRI_DOKTER: 0,
      JUMLAH_KUNJUNGAN_RAWAT_INAP_LAKI_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_PERTAMA_PRAKTIK_MANDIRI_DOKTER_GIGI: 0,
      JUMLAH_KUNJUNGAN_RAWAT_INAP_LAKI_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_PERTAMA_PRAKTIK_MANDIRI_BIDAN: 0,
      JUMLAH_KUNJUNGAN_RAWAT_INAP_LAKI_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_LANJUT_KLINIK_UTAMA: 0,
      JUMLAH_KUNJUNGAN_RAWAT_INAP_LAKI_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_LANJUT_RS_UMUM: 0,
      JUMLAH_KUNJUNGAN_RAWAT_INAP_LP_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_LANJUT_RS_UMUM: 0,
      JUMLAH_KUNJUNGAN_RAWAT_INAP_LAKI_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_LANJUT_RS_KHUSUS: 0,
      JUMLAH_KUNJUNGAN_RAWAT_INAP_LAKI_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_LANJUT_PRAKTIK_MANDIRI_DOKTER_SPESIALIS: 0,
      JUMLAH_KUNJUNGAN_RAWAT_INAP_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_PERTAMA_PUSKESMAS: 0,
      JUMLAH_KUNJUNGAN_RAWAT_INAP_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_PERTAMA_KLINIK_PRATAMA: 0,
      JUMLAH_KUNJUNGAN_RAWAT_INAP_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_PERTAMA_PRAKTIK_MANDIRI_DOKTER: 0,
      JUMLAH_KUNJUNGAN_RAWAT_INAP_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_PERTAMA_PRAKTIK_MANDIRI_DOKTER_GIGI: 0,
      JUMLAH_KUNJUNGAN_RAWAT_INAP_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_PERTAMA_PRAKTIK_MANDIRI_BIDAN: 0,
      JUMLAH_KUNJUNGAN_RAWAT_INAP_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_LANJUT_KLINIK_UTAMA: 0,
      JUMLAH_KUNJUNGAN_RAWAT_INAP_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_LANJUT_RS_UMUM: 0,
      JUMLAH_KUNJUNGAN_RAWAT_INAP_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_LANJUT_RS_KHUSUS: 0,
      JUMLAH_KUNJUNGAN_RAWAT_INAP_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_LANJUT_PRAKTIK_MANDIRI_DOKTER_SPESIALIS: 0,
      JUMLAH_KUNJUNGAN_RAWAT_INAP_LAKI_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_PERTAMA_PUSKESMAS: 0,
      JUMLAH_KUNJUNGAN_RAWAT_INAP_LAKI_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_PERTAMA_KLINIK_PRATAMA: 0,
      JUMLAH_KUNJUNGAN_RAWAT_INAP_LAKI_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_PERTAMA_PRAKTIK_MANDIRI_DOKTER: 0,
      JUMLAH_KUNJUNGAN_RAWAT_INAP_LAKI_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_PERTAMA_PRAKTIK_MANDIRI_DOKTER_GIGI: 0,
      JUMLAH_KUNJUNGAN_RAWAT_INAP_LAKI_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_PERTAMA_PRAKTIK_MANDIRI_BIDAN: 0,
      JUMLAH_KUNJUNGAN_RAWAT_INAP_LAKI_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_LANJUT_KLINIK_UTAMA: 0,
      JUMLAH_KUNJUNGAN_RAWAT_INAP_LAKI_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_LANJUT_RS_UMUM: 0,
      JUMLAH_KUNJUNGAN_RAWAT_INAP_LAKI_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_LANJUT_RS_KHUSUS: 0,
      JUMLAH_KUNJUNGAN_RAWAT_INAP_LAKI_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_LANJUT_PRAKTIK_MANDIRI_DOKTER_SPESIALIS: 0,
      KUNJUNGAN_GANGGUAN_JIWA_JUMLAH_LAKI_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_PERTAMA_PUSKESMAS: 0,
      KUNJUNGAN_GANGGUAN_JIWA_JUMLAH_LAKI_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_PERTAMA_KLINIK_PRATAMA: 0,
      KUNJUNGAN_GANGGUAN_JIWA_JUMLAH_LAKI_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_PERTAMA_PRAKTIK_MANDIRI_DOKTER: 0,
      KUNJUNGAN_GANGGUAN_JIWA_JUMLAH_LAKI_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_PERTAMA_PRAKTIK_MANDIRI_DOKTER_GIGI: 0,
      KUNJUNGAN_GANGGUAN_JIWA_JUMLAH_LAKI_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_PERTAMA_PRAKTIK_MANDIRI_BIDAN: 0,
      KUNJUNGAN_GANGGUAN_JIWA_JUMLAH_LAKI_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_LANJUT_KLINIK_UTAMA: 0,
      KUNJUNGAN_GANGGUAN_JIWA_JUMLAH_LAKI_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_LANJUT_RS_UMUM: 0,
      KUNJUNGAN_GANGGUAN_JIWA_JUMLAH_LAKI_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_LANJUT_RS_KHUSUS: 0,
      KUNJUNGAN_GANGGUAN_JIWA_JUMLAH_LAKI_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_LANJUT_PRAKTIK_MANDIRI_DOKTER_SPESIALIS: 0,
      KUNJUNGAN_GANGGUAN_JIWA_JUMLAH_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_PERTAMA_PUSKESMAS: 0,
      KUNJUNGAN_GANGGUAN_JIWA_JUMLAH_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_PERTAMA_KLINIK_PRATAMA: 0,
      KUNJUNGAN_GANGGUAN_JIWA_JUMLAH_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_PERTAMA_PRAKTIK_MANDIRI_DOKTER: 0,
      KUNJUNGAN_GANGGUAN_JIWA_JUMLAH_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_PERTAMA_PRAKTIK_MANDIRI_DOKTER_GIGI: 0,
      KUNJUNGAN_GANGGUAN_JIWA_JUMLAH_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_PERTAMA_PRAKTIK_MANDIRI_BIDAN: 0,
      KUNJUNGAN_GANGGUAN_JIWA_JUMLAH_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_LANJUT_KLINIK_UTAMA: 0,
      KUNJUNGAN_GANGGUAN_JIWA_JUMLAH_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_LANJUT_RS_UMUM: 0,
      KUNJUNGAN_GANGGUAN_JIWA_JUMLAH_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_LANJUT_RS_KHUSUS: 0,
      KUNJUNGAN_GANGGUAN_JIWA_JUMLAH_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_LANJUT_PRAKTIK_MANDIRI_DOKTER_SPESIALIS: 0,
      KUNJUNGAN_GANGGUAN_JIWA_JUMLAH_LAKI_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_PERTAMA_PUSKESMAS: 0,
      KUNJUNGAN_GANGGUAN_JIWA_JUMLAH_LAKI_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_PERTAMA_KLINIK_PRATAMA: 0,
      KUNJUNGAN_GANGGUAN_JIWA_JUMLAH_LAKI_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_PERTAMA_PRAKTIK_MANDIRI_DOKTER: 0,
      KUNJUNGAN_GANGGUAN_JIWA_JUMLAH_LAKI_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_PERTAMA_PRAKTIK_MANDIRI_DOKTER_GIGI: 0,
      KUNJUNGAN_GANGGUAN_JIWA_JUMLAH_LAKI_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_PERTAMA_PRAKTIK_MANDIRI_BIDAN: 0,
      KUNJUNGAN_GANGGUAN_JIWA_JUMLAH_LAKI_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_LANJUT_KLINIK_UTAMA: 0,
      KUNJUNGAN_GANGGUAN_JIWA_JUMLAH_LAKI_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_LANJUT_RS_UMUM: 0,
      KUNJUNGAN_GANGGUAN_JIWA_JUMLAH_LAKI_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_LANJUT_RS_KHUSUS: 0,
      KUNJUNGAN_GANGGUAN_JIWA_JUMLAH_LAKI_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_LANJUT_PRAKTIK_MANDIRI_DOKTER_SPESIALIS: 0,     
      isUpdate: false  
    }
  },
  methods: {
      initialData: function() {
        return {
          KUNJUNGAN_GANGGUAN_JIWA_JUMLAH_LP_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_LANJUT_RS_UMUM: 0,
          JUMLAH_KUNJUNGAN_RAWAT_JALAN_LAKI_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_PERTAMA_PUSKESMAS: 0,
          JUMLAH_KUNJUNGAN_RAWAT_JALAN_LAKI_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_PERTAMA_KLINIK_PRATAMA: 0,
          JUMLAH_KUNJUNGAN_RAWAT_JALAN_LAKI_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_PERTAMA_PRAKTIK_MANDIRI_DOKTER: 0,
          JUMLAH_KUNJUNGAN_RAWAT_JALAN_LAKI_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_PERTAMA_PRAKTIK_MANDIRI_DOKTER_GIGI: 0,
          JUMLAH_KUNJUNGAN_RAWAT_JALAN_LAKI_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_PERTAMA_PRAKTIK_MANDIRI_BIDAN: 0,
          JUMLAH_KUNJUNGAN_RAWAT_JALAN_LAKI_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_LANJUT_KLINIK_UTAMA: 0,
          JUMLAH_KUNJUNGAN_RAWAT_JALAN_LAKI_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_LANJUT_RS_UMUM: 0,
          JUMLAH_KUNJUNGAN_RAWAT_JALAN_LP_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_LANJUT_RS_UMUM: 0,
          JUMLAH_KUNJUNGAN_RAWAT_JALAN_LAKI_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_LANJUT_RS_KHUSUS: 0,
          JUMLAH_KUNJUNGAN_RAWAT_JALAN_LAKI_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_LANJUT_PRAKTIK_MANDIRI_DOKTER_SPESIALIS: 0,
          JUMLAH_KUNJUNGAN_RAWAT_JALAN_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_PERTAMA_PUSKESMAS: 0,
          JUMLAH_KUNJUNGAN_RAWAT_JALAN_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_PERTAMA_KLINIK_PRATAMA: 0,
          JUMLAH_KUNJUNGAN_RAWAT_JALAN_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_PERTAMA_PRAKTIK_MANDIRI_DOKTER: 0,
          JUMLAH_KUNJUNGAN_RAWAT_JALAN_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_PERTAMA_PRAKTIK_MANDIRI_DOKTER_GIGI: 0,
          JUMLAH_KUNJUNGAN_RAWAT_JALAN_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_PERTAMA_PRAKTIK_MANDIRI_BIDAN: 0,
          JUMLAH_KUNJUNGAN_RAWAT_JALAN_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_LANJUT_KLINIK_UTAMA: 0,
          JUMLAH_KUNJUNGAN_RAWAT_JALAN_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_LANJUT_RS_UMUM: 0,
          JUMLAH_KUNJUNGAN_RAWAT_JALAN_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_LANJUT_RS_KHUSUS: 0,
          JUMLAH_KUNJUNGAN_RAWAT_JALAN_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_LANJUT_PRAKTIK_MANDIRI_DOKTER_SPESIALIS: 0,
          JUMLAH_KUNJUNGAN_RAWAT_JALAN_LAKI_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_PERTAMA_PUSKESMAS: 0,
          JUMLAH_KUNJUNGAN_RAWAT_JALAN_LAKI_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_PERTAMA_KLINIK_PRATAMA: 0,
          JUMLAH_KUNJUNGAN_RAWAT_JALAN_LAKI_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_PERTAMA_PRAKTIK_MANDIRI_DOKTER: 0,
          JUMLAH_KUNJUNGAN_RAWAT_JALAN_LAKI_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_PERTAMA_PRAKTIK_MANDIRI_DOKTER_GIGI: 0,
          JUMLAH_KUNJUNGAN_RAWAT_JALAN_LAKI_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_PERTAMA_PRAKTIK_MANDIRI_BIDAN: 0,
          JUMLAH_KUNJUNGAN_RAWAT_JALAN_LAKI_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_LANJUT_KLINIK_UTAMA: 0,
          JUMLAH_KUNJUNGAN_RAWAT_JALAN_LAKI_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_LANJUT_RS_UMUM: 0,
          JUMLAH_KUNJUNGAN_RAWAT_JALAN_LAKI_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_LANJUT_RS_KHUSUS: 0,
          JUMLAH_KUNJUNGAN_RAWAT_JALAN_LAKI_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_LANJUT_PRAKTIK_MANDIRI_DOKTER_SPESIALIS: 0,
          JUMLAH_KUNJUNGAN_RAWAT_INAP_LAKI_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_PERTAMA_PUSKESMAS: 0,
          JUMLAH_KUNJUNGAN_RAWAT_INAP_LAKI_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_PERTAMA_KLINIK_PRATAMA: 0,
          JUMLAH_KUNJUNGAN_RAWAT_INAP_LAKI_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_PERTAMA_PRAKTIK_MANDIRI_DOKTER: 0,
          JUMLAH_KUNJUNGAN_RAWAT_INAP_LAKI_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_PERTAMA_PRAKTIK_MANDIRI_DOKTER_GIGI: 0,
          JUMLAH_KUNJUNGAN_RAWAT_INAP_LAKI_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_PERTAMA_PRAKTIK_MANDIRI_BIDAN: 0,
          JUMLAH_KUNJUNGAN_RAWAT_INAP_LAKI_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_LANJUT_KLINIK_UTAMA: 0,
          JUMLAH_KUNJUNGAN_RAWAT_INAP_LAKI_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_LANJUT_RS_UMUM: 0,
          JUMLAH_KUNJUNGAN_RAWAT_INAP_LAKI_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_LANJUT_RS_KHUSUS: 0,
          JUMLAH_KUNJUNGAN_RAWAT_INAP_LAKI_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_LANJUT_PRAKTIK_MANDIRI_DOKTER_SPESIALIS: 0,
          JUMLAH_KUNJUNGAN_RAWAT_INAP_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_PERTAMA_PUSKESMAS: 0,
          JUMLAH_KUNJUNGAN_RAWAT_INAP_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_PERTAMA_KLINIK_PRATAMA: 0,
          JUMLAH_KUNJUNGAN_RAWAT_INAP_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_PERTAMA_PRAKTIK_MANDIRI_DOKTER: 0,
          JUMLAH_KUNJUNGAN_RAWAT_INAP_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_PERTAMA_PRAKTIK_MANDIRI_DOKTER_GIGI: 0,
          JUMLAH_KUNJUNGAN_RAWAT_INAP_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_PERTAMA_PRAKTIK_MANDIRI_BIDAN: 0,
          JUMLAH_KUNJUNGAN_RAWAT_INAP_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_LANJUT_KLINIK_UTAMA: 0,
          JUMLAH_KUNJUNGAN_RAWAT_INAP_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_LANJUT_RS_UMUM: 0,
          JUMLAH_KUNJUNGAN_RAWAT_INAP_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_LANJUT_RS_KHUSUS: 0,
          JUMLAH_KUNJUNGAN_RAWAT_INAP_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_LANJUT_PRAKTIK_MANDIRI_DOKTER_SPESIALIS: 0,
          JUMLAH_KUNJUNGAN_RAWAT_INAP_LAKI_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_PERTAMA_PUSKESMAS: 0,
          JUMLAH_KUNJUNGAN_RAWAT_INAP_LAKI_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_PERTAMA_KLINIK_PRATAMA: 0,
          JUMLAH_KUNJUNGAN_RAWAT_INAP_LAKI_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_PERTAMA_PRAKTIK_MANDIRI_DOKTER: 0,
          JUMLAH_KUNJUNGAN_RAWAT_INAP_LAKI_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_PERTAMA_PRAKTIK_MANDIRI_DOKTER_GIGI: 0,
          JUMLAH_KUNJUNGAN_RAWAT_INAP_LAKI_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_PERTAMA_PRAKTIK_MANDIRI_BIDAN: 0,
          JUMLAH_KUNJUNGAN_RAWAT_INAP_LAKI_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_LANJUT_KLINIK_UTAMA: 0,
          JUMLAH_KUNJUNGAN_RAWAT_INAP_LAKI_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_LANJUT_RS_UMUM: 0,
          JUMLAH_KUNJUNGAN_RAWAT_INAP_LAKI_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_LANJUT_RS_KHUSUS: 0,
          JUMLAH_KUNJUNGAN_RAWAT_INAP_LAKI_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_LANJUT_PRAKTIK_MANDIRI_DOKTER_SPESIALIS: 0,
          KUNJUNGAN_GANGGUAN_JIWA_JUMLAH_LAKI_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_PERTAMA_PUSKESMAS: 0,
          KUNJUNGAN_GANGGUAN_JIWA_JUMLAH_LAKI_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_PERTAMA_KLINIK_PRATAMA: 0,
          KUNJUNGAN_GANGGUAN_JIWA_JUMLAH_LAKI_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_PERTAMA_PRAKTIK_MANDIRI_DOKTER: 0,
          KUNJUNGAN_GANGGUAN_JIWA_JUMLAH_LAKI_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_PERTAMA_PRAKTIK_MANDIRI_DOKTER_GIGI: 0,
          KUNJUNGAN_GANGGUAN_JIWA_JUMLAH_LAKI_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_PERTAMA_PRAKTIK_MANDIRI_BIDAN: 0,
          KUNJUNGAN_GANGGUAN_JIWA_JUMLAH_LAKI_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_LANJUT_KLINIK_UTAMA: 0,
          KUNJUNGAN_GANGGUAN_JIWA_JUMLAH_LAKI_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_LANJUT_RS_UMUM: 0,
          KUNJUNGAN_GANGGUAN_JIWA_JUMLAH_LAKI_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_LANJUT_RS_KHUSUS: 0,
          KUNJUNGAN_GANGGUAN_JIWA_JUMLAH_LAKI_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_LANJUT_PRAKTIK_MANDIRI_DOKTER_SPESIALIS: 0,
          KUNJUNGAN_GANGGUAN_JIWA_JUMLAH_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_PERTAMA_PUSKESMAS: 0,
          KUNJUNGAN_GANGGUAN_JIWA_JUMLAH_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_PERTAMA_KLINIK_PRATAMA: 0,
          KUNJUNGAN_GANGGUAN_JIWA_JUMLAH_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_PERTAMA_PRAKTIK_MANDIRI_DOKTER: 0,
          KUNJUNGAN_GANGGUAN_JIWA_JUMLAH_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_PERTAMA_PRAKTIK_MANDIRI_DOKTER_GIGI: 0,
          KUNJUNGAN_GANGGUAN_JIWA_JUMLAH_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_PERTAMA_PRAKTIK_MANDIRI_BIDAN: 0,
          KUNJUNGAN_GANGGUAN_JIWA_JUMLAH_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_LANJUT_KLINIK_UTAMA: 0,
          KUNJUNGAN_GANGGUAN_JIWA_JUMLAH_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_LANJUT_RS_UMUM: 0,
          KUNJUNGAN_GANGGUAN_JIWA_JUMLAH_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_LANJUT_RS_KHUSUS: 0,
          KUNJUNGAN_GANGGUAN_JIWA_JUMLAH_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_LANJUT_PRAKTIK_MANDIRI_DOKTER_SPESIALIS: 0,
          KUNJUNGAN_GANGGUAN_JIWA_JUMLAH_LAKI_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_PERTAMA_PUSKESMAS: 0,
          KUNJUNGAN_GANGGUAN_JIWA_JUMLAH_LAKI_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_PERTAMA_KLINIK_PRATAMA: 0,
          KUNJUNGAN_GANGGUAN_JIWA_JUMLAH_LAKI_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_PERTAMA_PRAKTIK_MANDIRI_DOKTER: 0,
          KUNJUNGAN_GANGGUAN_JIWA_JUMLAH_LAKI_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_PERTAMA_PRAKTIK_MANDIRI_DOKTER_GIGI: 0,
          KUNJUNGAN_GANGGUAN_JIWA_JUMLAH_LAKI_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_PERTAMA_PRAKTIK_MANDIRI_BIDAN: 0,
          KUNJUNGAN_GANGGUAN_JIWA_JUMLAH_LAKI_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_LANJUT_KLINIK_UTAMA: 0,
          KUNJUNGAN_GANGGUAN_JIWA_JUMLAH_LAKI_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_LANJUT_RS_UMUM: 0,
          KUNJUNGAN_GANGGUAN_JIWA_JUMLAH_LAKI_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_LANJUT_RS_KHUSUS: 0,
          KUNJUNGAN_GANGGUAN_JIWA_JUMLAH_LAKI_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_LANJUT_PRAKTIK_MANDIRI_DOKTER_SPESIALIS: 0          
        }
      },
      jmlKunjunganRJLPRSU: function() {
        this.JUMLAH_KUNJUNGAN_RAWAT_JALAN_LP_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_LANJUT_RS_UMUM = parseInt((this.JUMLAH_KUNJUNGAN_RAWAT_JALAN_LAKI_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_LANJUT_RS_UMUM == '') ? 0 : this.JUMLAH_KUNJUNGAN_RAWAT_JALAN_LAKI_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_LANJUT_RS_UMUM) + 
        parseInt((this.JUMLAH_KUNJUNGAN_RAWAT_JALAN_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_LANJUT_RS_UMUM == '') ? 0 : this.JUMLAH_KUNJUNGAN_RAWAT_JALAN_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_LANJUT_RS_UMUM)
      },
      rawatInapRSULP: function () {
        this.JUMLAH_KUNJUNGAN_RAWAT_INAP_LP_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_LANJUT_RS_UMUM = parseInt((this.JUMLAH_KUNJUNGAN_RAWAT_INAP_LAKI_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_LANJUT_RS_UMUM == '') ? 0 : this.JUMLAH_KUNJUNGAN_RAWAT_INAP_LAKI_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_LANJUT_RS_UMUM) + 
        parseInt((this.JUMLAH_KUNJUNGAN_RAWAT_INAP_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_LANJUT_RS_UMUM == '') ? 0 : this.JUMLAH_KUNJUNGAN_RAWAT_INAP_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_LANJUT_RS_UMUM)
      },
      jiwaRSULP: function () {
        this.KUNJUNGAN_GANGGUAN_JIWA_JUMLAH_LP_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_LANJUT_RS_UMUM = parseInt((this.KUNJUNGAN_GANGGUAN_JIWA_JUMLAH_LAKI_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_LANJUT_RS_UMUM == '') ? 0 : this.KUNJUNGAN_GANGGUAN_JIWA_JUMLAH_LAKI_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_LANJUT_RS_UMUM) + 
        parseInt((this.KUNJUNGAN_GANGGUAN_JIWA_JUMLAH_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_LANJUT_RS_UMUM == '') ? 0 : this.KUNJUNGAN_GANGGUAN_JIWA_JUMLAH_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_LANJUT_RS_UMUM)
      },
      rawatJalanLP: function() {
      	this.JUMLAH_KUNJUNGAN_RAWAT_JALAN_LAKI_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_LANJUT_RS_KHUSUS = parseInt((this.JUMLAH_KUNJUNGAN_RAWAT_JALAN_LAKI_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_LANJUT_RS_KHUSUS == '') ? 0 : this.JUMLAH_KUNJUNGAN_RAWAT_JALAN_LAKI_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_LANJUT_RS_KHUSUS) + 
        parseInt((this.JUMLAH_KUNJUNGAN_RAWAT_JALAN_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_LANJUT_RS_KHUSUS == '') ? 0 : this.JUMLAH_KUNJUNGAN_RAWAT_JALAN_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_LANJUT_RS_KHUSUS)
      },
      rawatInapLP: function() {
      	this.JUMLAH_KUNJUNGAN_RAWAT_INAP_LAKI_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_LANJUT_RS_KHUSUS = parseInt((this.JUMLAH_KUNJUNGAN_RAWAT_INAP_LAKI_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_LANJUT_RS_KHUSUS == '') ? 0 : this.JUMLAH_KUNJUNGAN_RAWAT_INAP_LAKI_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_LANJUT_RS_KHUSUS) + 
        parseInt((this.JUMLAH_KUNJUNGAN_RAWAT_INAP_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_LANJUT_RS_KHUSUS == '') ? 0 : this.JUMLAH_KUNJUNGAN_RAWAT_INAP_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_LANJUT_RS_KHUSUS)
      },
      gangguanJiwaLP: function() {
      	this.KUNJUNGAN_GANGGUAN_JIWA_JUMLAH_LAKI_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_LANJUT_RS_KHUSUS = parseInt((this.KUNJUNGAN_GANGGUAN_JIWA_JUMLAH_LAKI_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_LANJUT_RS_KHUSUS == '') ? 0 : this.KUNJUNGAN_GANGGUAN_JIWA_JUMLAH_LAKI_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_LANJUT_RS_KHUSUS) + 
        parseInt((this.KUNJUNGAN_GANGGUAN_JIWA_JUMLAH_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_LANJUT_RS_KHUSUS == '') ? 0 : this.KUNJUNGAN_GANGGUAN_JIWA_JUMLAH_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_LANJUT_RS_KHUSUS)
      },
      kunjunganKlinikLP: function() {
      	this.JUMLAH_KUNJUNGAN_RAWAT_JALAN_LAKI_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_LANJUT_KLINIK_UTAMA = parseInt((this.JUMLAH_KUNJUNGAN_RAWAT_JALAN_LAKI_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_LANJUT_KLINIK_UTAMA == '') ? 0 : this.JUMLAH_KUNJUNGAN_RAWAT_JALAN_LAKI_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_LANJUT_KLINIK_UTAMA) + 
        parseInt((this.JUMLAH_KUNJUNGAN_RAWAT_JALAN_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_LANJUT_KLINIK_UTAMA == '') ? 0 : this.JUMLAH_KUNJUNGAN_RAWAT_JALAN_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_LANJUT_KLINIK_UTAMA)
      },
      rawatInapKlinikLP: function() {
      	this.JUMLAH_KUNJUNGAN_RAWAT_INAP_LAKI_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_LANJUT_KLINIK_UTAMA = parseInt((this.JUMLAH_KUNJUNGAN_RAWAT_INAP_LAKI_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_LANJUT_KLINIK_UTAMA == '') ? 0 : this.JUMLAH_KUNJUNGAN_RAWAT_INAP_LAKI_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_LANJUT_KLINIK_UTAMA) + 
        parseInt((this.JUMLAH_KUNJUNGAN_RAWAT_INAP_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_LANJUT_KLINIK_UTAMA == '') ? 0 : this.JUMLAH_KUNJUNGAN_RAWAT_INAP_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_LANJUT_KLINIK_UTAMA)
      },
      gangguanJiwaKlinikLP: function() {
      	this.KUNJUNGAN_GANGGUAN_JIWA_JUMLAH_LAKI_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_LANJUT_KLINIK_UTAMA = parseInt((this.KUNJUNGAN_GANGGUAN_JIWA_JUMLAH_LAKI_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_LANJUT_KLINIK_UTAMA == '') ? 0 : this.KUNJUNGAN_GANGGUAN_JIWA_JUMLAH_LAKI_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_LANJUT_KLINIK_UTAMA) + 
        parseInt((this.KUNJUNGAN_GANGGUAN_JIWA_JUMLAH_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_LANJUT_KLINIK_UTAMA == '') ? 0 : this.KUNJUNGAN_GANGGUAN_JIWA_JUMLAH_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_LANJUT_KLINIK_UTAMA)
      },
      gangguanJiwaKlinikLP: function() {
        this.KUNJUNGAN_GANGGUAN_JIWA_JUMLAH_LAKI_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_LANJUT_KLINIK_UTAMA = parseInt((this.KUNJUNGAN_GANGGUAN_JIWA_JUMLAH_LAKI_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_LANJUT_KLINIK_UTAMA == '') ? 0 : this.KUNJUNGAN_GANGGUAN_JIWA_JUMLAH_LAKI_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_LANJUT_KLINIK_UTAMA) + 
        parseInt((this.KUNJUNGAN_GANGGUAN_JIWA_JUMLAH_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_LANJUT_KLINIK_UTAMA == '') ? 0 : this.KUNJUNGAN_GANGGUAN_JIWA_JUMLAH_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_LANJUT_KLINIK_UTAMA)
      },
      jumlahKunjunganDokterSpesialis_LP: function() {
        this.JUMLAH_KUNJUNGAN_RAWAT_JALAN_LAKI_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_LANJUT_PRAKTIK_MANDIRI_DOKTER_SPESIALIS = parseInt((this.JUMLAH_KUNJUNGAN_RAWAT_JALAN_LAKI_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_LANJUT_PRAKTIK_MANDIRI_DOKTER_SPESIALIS == '') ? 0 : this.JUMLAH_KUNJUNGAN_RAWAT_JALAN_LAKI_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_LANJUT_PRAKTIK_MANDIRI_DOKTER_SPESIALIS) + 
        parseInt((this.JUMLAH_KUNJUNGAN_RAWAT_JALAN_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_LANJUT_PRAKTIK_MANDIRI_DOKTER_SPESIALIS == '') ? 0 : this.JUMLAH_KUNJUNGAN_RAWAT_JALAN_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_LANJUT_PRAKTIK_MANDIRI_DOKTER_SPESIALIS)
      },
      jumlahKunjunganRJDokterSpesialis_LP: function() {
        this.JUMLAH_KUNJUNGAN_RAWAT_JALAN_LAKI_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_LANJUT_PRAKTIK_MANDIRI_DOKTER_SPESIALIS = parseInt((this.JUMLAH_KUNJUNGAN_RAWAT_JALAN_LAKI_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_LANJUT_PRAKTIK_MANDIRI_DOKTER_SPESIALIS == '') ? 0 : this.JUMLAH_KUNJUNGAN_RAWAT_JALAN_LAKI_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_LANJUT_PRAKTIK_MANDIRI_DOKTER_SPESIALIS) + 
        parseInt((this.JUMLAH_KUNJUNGAN_RAWAT_JALAN_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_LANJUT_PRAKTIK_MANDIRI_DOKTER_SPESIALIS == '') ? 0 : this.JUMLAH_KUNJUNGAN_RAWAT_JALAN_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_LANJUT_PRAKTIK_MANDIRI_DOKTER_SPESIALIS)
      },
      jumlahKunjunganRIDokterSpesialis_LP: function() {
        this.JUMLAH_KUNJUNGAN_RAWAT_INAP_LAKI_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_LANJUT_PRAKTIK_MANDIRI_DOKTER_SPESIALIS = parseInt((this.JUMLAH_KUNJUNGAN_RAWAT_INAP_LAKI_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_LANJUT_PRAKTIK_MANDIRI_DOKTER_SPESIALIS == '') ? 0 : this.JUMLAH_KUNJUNGAN_RAWAT_INAP_LAKI_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_LANJUT_PRAKTIK_MANDIRI_DOKTER_SPESIALIS) + 
        parseInt((this.JUMLAH_KUNJUNGAN_RAWAT_INAP_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_LANJUT_PRAKTIK_MANDIRI_DOKTER_SPESIALIS == '') ? 0 : this.JUMLAH_KUNJUNGAN_RAWAT_INAP_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_LANJUT_PRAKTIK_MANDIRI_DOKTER_SPESIALIS)
      },
      kunjunganGangguanJiwa_LP: function() {
        this.KUNJUNGAN_GANGGUAN_JIWA_JUMLAH_LAKI_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_LANJUT_PRAKTIK_MANDIRI_DOKTER_SPESIALIS = parseInt((this.KUNJUNGAN_GANGGUAN_JIWA_JUMLAH_LAKI_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_LANJUT_PRAKTIK_MANDIRI_DOKTER_SPESIALIS == '') ? 0 : this.KUNJUNGAN_GANGGUAN_JIWA_JUMLAH_LAKI_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_LANJUT_PRAKTIK_MANDIRI_DOKTER_SPESIALIS) + 
        parseInt((this.KUNJUNGAN_GANGGUAN_JIWA_JUMLAH_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_LANJUT_PRAKTIK_MANDIRI_DOKTER_SPESIALIS == '') ? 0 : this.KUNJUNGAN_GANGGUAN_JIWA_JUMLAH_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_LANJUT_PRAKTIK_MANDIRI_DOKTER_SPESIALIS)
      },
      jumlahKunjunganRJ_pkm_LP: function() {
        this.JUMLAH_KUNJUNGAN_RAWAT_JALAN_LAKI_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_PERTAMA_PUSKESMAS = parseInt((this.JUMLAH_KUNJUNGAN_RAWAT_JALAN_LAKI_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_PERTAMA_PUSKESMAS == '') ? 0 : this.JUMLAH_KUNJUNGAN_RAWAT_JALAN_LAKI_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_PERTAMA_PUSKESMAS) + 
        parseInt((this.JUMLAH_KUNJUNGAN_RAWAT_JALAN_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_PERTAMA_PUSKESMAS == '') ? 0 : this.JUMLAH_KUNJUNGAN_RAWAT_JALAN_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_PERTAMA_PUSKESMAS)
      }, 
      jumlahKunjunganRI_pkm_LP: function() {
        this.JUMLAH_KUNJUNGAN_RAWAT_INAP_LAKI_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_PERTAMA_PUSKESMAS = parseInt((this.JUMLAH_KUNJUNGAN_RAWAT_INAP_LAKI_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_PERTAMA_PUSKESMAS == '') ? 0 : this.JUMLAH_KUNJUNGAN_RAWAT_INAP_LAKI_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_PERTAMA_PUSKESMAS) + 
        parseInt((this.JUMLAH_KUNJUNGAN_RAWAT_INAP_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_PERTAMA_PUSKESMAS == '') ? 0 : this.JUMLAH_KUNJUNGAN_RAWAT_INAP_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_PERTAMA_PUSKESMAS)
      },
      kunjunganGangguanJiwa_pkm_LP: function() {
        this.KUNJUNGAN_GANGGUAN_JIWA_JUMLAH_LAKI_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_PERTAMA_PUSKESMAS = parseInt((this.KUNJUNGAN_GANGGUAN_JIWA_JUMLAH_LAKI_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_PERTAMA_PUSKESMAS == '') ? 0 : this.KUNJUNGAN_GANGGUAN_JIWA_JUMLAH_LAKI_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_PERTAMA_PUSKESMAS) + 
        parseInt((this.KUNJUNGAN_GANGGUAN_JIWA_JUMLAH_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_PERTAMA_PUSKESMAS == '') ? 0 : this.KUNJUNGAN_GANGGUAN_JIWA_JUMLAH_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_PERTAMA_PUSKESMAS)
      },
      jumlahKunjunganRJ_KP_LP: function() {
        this.JUMLAH_KUNJUNGAN_RAWAT_JALAN_LAKI_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_PERTAMA_KLINIK_PRATAMA = parseInt((this.JUMLAH_KUNJUNGAN_RAWAT_JALAN_LAKI_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_PERTAMA_KLINIK_PRATAMA == '') ? 0 : this.JUMLAH_KUNJUNGAN_RAWAT_JALAN_LAKI_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_PERTAMA_KLINIK_PRATAMA) + 
        parseInt((this.JUMLAH_KUNJUNGAN_RAWAT_JALAN_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_PERTAMA_KLINIK_PRATAMA == '') ? 0 : this.JUMLAH_KUNJUNGAN_RAWAT_JALAN_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_PERTAMA_KLINIK_PRATAMA)
      },
      jumlahKunjunganRI_KP_LP: function() {
        this.JUMLAH_KUNJUNGAN_RAWAT_INAP_LAKI_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_PERTAMA_KLINIK_PRATAMA = parseInt((this.JUMLAH_KUNJUNGAN_RAWAT_INAP_LAKI_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_PERTAMA_KLINIK_PRATAMA == '') ? 0 : this.JUMLAH_KUNJUNGAN_RAWAT_INAP_LAKI_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_PERTAMA_KLINIK_PRATAMA) + 
        parseInt((this.JUMLAH_KUNJUNGAN_RAWAT_INAP_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_PERTAMA_KLINIK_PRATAMA == '') ? 0 : this.JUMLAH_KUNJUNGAN_RAWAT_INAP_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_PERTAMA_KLINIK_PRATAMA)
      },
      kunjunganGangguanJiwa_KP_LP: function() {
        this.KUNJUNGAN_GANGGUAN_JIWA_JUMLAH_LAKI_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_PERTAMA_KLINIK_PRATAMA = parseInt((this.KUNJUNGAN_GANGGUAN_JIWA_JUMLAH_LAKI_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_PERTAMA_KLINIK_PRATAMA == '') ? 0 : this.KUNJUNGAN_GANGGUAN_JIWA_JUMLAH_LAKI_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_PERTAMA_KLINIK_PRATAMA) + 
        parseInt((this.KUNJUNGAN_GANGGUAN_JIWA_JUMLAH_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_PERTAMA_KLINIK_PRATAMA == '') ? 0 : this.KUNJUNGAN_GANGGUAN_JIWA_JUMLAH_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_PERTAMA_KLINIK_PRATAMA)
      },
      jumlahKunjunganRJ_PMDG_LP: function() {
        this.JUMLAH_KUNJUNGAN_RAWAT_JALAN_LAKI_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_PERTAMA_PRAKTIK_MANDIRI_DOKTER_GIGI = parseInt((this.JUMLAH_KUNJUNGAN_RAWAT_JALAN_LAKI_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_PERTAMA_PRAKTIK_MANDIRI_DOKTER_GIGI == '') ? 0 : this.JUMLAH_KUNJUNGAN_RAWAT_JALAN_LAKI_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_PERTAMA_PRAKTIK_MANDIRI_DOKTER_GIGI) + 
        parseInt((this.JUMLAH_KUNJUNGAN_RAWAT_JALAN_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_PERTAMA_PRAKTIK_MANDIRI_DOKTER_GIGI == '') ? 0 : this.JUMLAH_KUNJUNGAN_RAWAT_JALAN_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_PERTAMA_PRAKTIK_MANDIRI_DOKTER_GIGI)
      }, 
      jumlahKunjunganRI_PMDG_LP: function() {
        this.JUMLAH_KUNJUNGAN_RAWAT_INAP_LAKI_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_PERTAMA_PRAKTIK_MANDIRI_DOKTER_GIGI = parseInt((this.JUMLAH_KUNJUNGAN_RAWAT_INAP_LAKI_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_PERTAMA_PRAKTIK_MANDIRI_DOKTER_GIGI == '') ? 0 : this.JUMLAH_KUNJUNGAN_RAWAT_INAP_LAKI_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_PERTAMA_PRAKTIK_MANDIRI_DOKTER_GIGI) + 
        parseInt((this.JUMLAH_KUNJUNGAN_RAWAT_INAP_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_PERTAMA_PRAKTIK_MANDIRI_DOKTER_GIGI == '') ? 0 : this.JUMLAH_KUNJUNGAN_RAWAT_INAP_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_PERTAMA_PRAKTIK_MANDIRI_DOKTER_GIGI)
      }, 
      kunjunganGangguanJiwa_PMDG_LP: function() {
        this.KUNJUNGAN_GANGGUAN_JIWA_JUMLAH_LAKI_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_PERTAMA_PRAKTIK_MANDIRI_DOKTER_GIGI = parseInt((this.KUNJUNGAN_GANGGUAN_JIWA_JUMLAH_LAKI_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_PERTAMA_PRAKTIK_MANDIRI_DOKTER_GIGI == '') ? 0 : this.KUNJUNGAN_GANGGUAN_JIWA_JUMLAH_LAKI_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_PERTAMA_PRAKTIK_MANDIRI_DOKTER_GIGI) + 
        parseInt((this.KUNJUNGAN_GANGGUAN_JIWA_JUMLAH_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_PERTAMA_PRAKTIK_MANDIRI_DOKTER_GIGI == '') ? 0 : this.KUNJUNGAN_GANGGUAN_JIWA_JUMLAH_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_PERTAMA_PRAKTIK_MANDIRI_DOKTER_GIGI)
      },
      jumlahKunjunganRJ_PMD_LP: function() {
        this.JUMLAH_KUNJUNGAN_RAWAT_JALAN_LAKI_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_PERTAMA_PRAKTIK_MANDIRI_DOKTER = parseInt((this.JUMLAH_KUNJUNGAN_RAWAT_JALAN_LAKI_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_PERTAMA_PRAKTIK_MANDIRI_DOKTER == '') ? 0 : this.JUMLAH_KUNJUNGAN_RAWAT_JALAN_LAKI_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_PERTAMA_PRAKTIK_MANDIRI_DOKTER) + 
        parseInt((this.JUMLAH_KUNJUNGAN_RAWAT_JALAN_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_PERTAMA_PRAKTIK_MANDIRI_DOKTER == '') ? 0 : this.JUMLAH_KUNJUNGAN_RAWAT_JALAN_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_PERTAMA_PRAKTIK_MANDIRI_DOKTER)
      }, 
      jumlahKunjunganRI_PMD_LP: function() {
        this.JUMLAH_KUNJUNGAN_RAWAT_INAP_LAKI_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_PERTAMA_PRAKTIK_MANDIRI_DOKTER = parseInt((this.JUMLAH_KUNJUNGAN_RAWAT_INAP_LAKI_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_PERTAMA_PRAKTIK_MANDIRI_DOKTER == '') ? 0 : this.JUMLAH_KUNJUNGAN_RAWAT_INAP_LAKI_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_PERTAMA_PRAKTIK_MANDIRI_DOKTER) + 
        parseInt((this.JUMLAH_KUNJUNGAN_RAWAT_INAP_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_PERTAMA_PRAKTIK_MANDIRI_DOKTER == '') ? 0 : this.JUMLAH_KUNJUNGAN_RAWAT_INAP_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_PERTAMA_PRAKTIK_MANDIRI_DOKTER)
      }, 
      kunjunganGangguanJiwa_PMD_LP: function() {
        this.KUNJUNGAN_GANGGUAN_JIWA_JUMLAH_LAKI_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_PERTAMA_PRAKTIK_MANDIRI_DOKTER = parseInt((this.KUNJUNGAN_GANGGUAN_JIWA_JUMLAH_LAKI_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_PERTAMA_PRAKTIK_MANDIRI_DOKTER == '') ? 0 : this.KUNJUNGAN_GANGGUAN_JIWA_JUMLAH_LAKI_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_PERTAMA_PRAKTIK_MANDIRI_DOKTER) + 
        parseInt((this.KUNJUNGAN_GANGGUAN_JIWA_JUMLAH_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_PERTAMA_PRAKTIK_MANDIRI_DOKTER == '') ? 0 : this.KUNJUNGAN_GANGGUAN_JIWA_JUMLAH_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_PERTAMA_PRAKTIK_MANDIRI_DOKTER)
      },
      jumlahKunjunganRJ_PMB_LP: function() {
        this.JUMLAH_KUNJUNGAN_RAWAT_JALAN_LAKI_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_PERTAMA_PRAKTIK_MANDIRI_BIDAN = parseInt((this.JUMLAH_KUNJUNGAN_RAWAT_JALAN_LAKI_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_PERTAMA_PRAKTIK_MANDIRI_BIDAN == '') ? 0 : this.JUMLAH_KUNJUNGAN_RAWAT_JALAN_LAKI_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_PERTAMA_PRAKTIK_MANDIRI_BIDAN) + 
        parseInt((this.JUMLAH_KUNJUNGAN_RAWAT_JALAN_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_PERTAMA_PRAKTIK_MANDIRI_BIDAN == '') ? 0 : this.JUMLAH_KUNJUNGAN_RAWAT_JALAN_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_PERTAMA_PRAKTIK_MANDIRI_BIDAN)
      }, 
      jumlahKunjunganRI_PMB_LP: function() {
        this.JUMLAH_KUNJUNGAN_RAWAT_INAP_LAKI_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_PERTAMA_PRAKTIK_MANDIRI_BIDAN = parseInt((this.JUMLAH_KUNJUNGAN_RAWAT_INAP_LAKI_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_PERTAMA_PRAKTIK_MANDIRI_BIDAN == '') ? 0 : this.JUMLAH_KUNJUNGAN_RAWAT_INAP_LAKI_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_PERTAMA_PRAKTIK_MANDIRI_BIDAN) + 
        parseInt((this.JUMLAH_KUNJUNGAN_RAWAT_INAP_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_PERTAMA_PRAKTIK_MANDIRI_BIDAN == '') ? 0 : this.JUMLAH_KUNJUNGAN_RAWAT_INAP_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_PERTAMA_PRAKTIK_MANDIRI_BIDAN)
      }, 
      kunjunganGangguanJiwa_PMB_LP: function() {
        this.KUNJUNGAN_GANGGUAN_JIWA_JUMLAH_LAKI_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_PERTAMA_PRAKTIK_MANDIRI_BIDAN = parseInt((this.KUNJUNGAN_GANGGUAN_JIWA_JUMLAH_LAKI_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_PERTAMA_PRAKTIK_MANDIRI_BIDAN == '') ? 0 : this.KUNJUNGAN_GANGGUAN_JIWA_JUMLAH_LAKI_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_PERTAMA_PRAKTIK_MANDIRI_BIDAN) + 
        parseInt((this.KUNJUNGAN_GANGGUAN_JIWA_JUMLAH_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_PERTAMA_PRAKTIK_MANDIRI_BIDAN == '') ? 0 : this.KUNJUNGAN_GANGGUAN_JIWA_JUMLAH_PEREMPUAN_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_PERTAMA_PRAKTIK_MANDIRI_BIDAN)
      },
      kirimData: function(data) {
        console.log(data)
        var user = JSON.parse(this.$session.get('dataLogin'));
        var username = user.username;
        for (var key in data) {
          
          var URL_DATA = (this.isUpdate == true) ? this.$urlNode + '/table/update?var='+key+'&thn='+this.PILIH_TAHUN+'&bln=' + this.PILIH_BULAN + '&username=' + this.USERNAME : this.$urlNode + '/table/input';

          var dataKirim = {
            'NAMA_FIELD' : key,
            'VALUE' : data[key],
            'USERNAME' : username,
            'ID_DAERAH' : username.substr(0, 4),
            'TAHUN' : data.PILIH_TAHUN,
            'BULAN' : data.PILIH_BULAN,
            'STATUS_VERIFIKASI' : 'rs'
          };

          this.$http.post(URL_DATA, dataKirim)
            .then(function (response) {
              console.log(response);
              this.isUpdate = true;
            })
            .catch(function (error) {
              console.log(error);
            });

        } 
        this.$dialogs.confirm('Data berhasil di proses', {title: 'Info', size: 'sm'})
      },
      reset: function() {
      this.$dialogs.confirm('Apakah anda yakin ingin menghapus data?', 
      {title: 'Info', size: 'sm'})
      .then(res => {
        console.log(res) // {ok: true|false|undefined}
        if(res.ok == true) {
          for (var key in this.$data) {
            this.$http.get(this.$urlNode + '/table/delete?var='+key+'&thn='+this.PILIH_TAHUN+'&bln=' + this.PILIH_BULAN + '&username=' + this.USERNAME)
              .then(function (response) {
                // console.log(response);
                this.isUpdate = true;
              })
              .catch(function (error) {
                // console.log(error);
                return false;
              });
          }          
        }
      })      
    },
    onChangeHandle: function() {
      this.checkData(this.$data);
    },    
    proses: function() {
      this.kirimData(this.$data);
    },
    checkData: function(data) {

      for (var key in data) {

        this.$http.get(this.$urlNode + '/table/getField?var=' + key + '&thn='+this.PILIH_TAHUN+'&bln=' + this.PILIH_BULAN + '&username=' + this.USERNAME)
          .then((response) => {
            // console.log(response)
            if(response.data.length > 0) {
              // Read All Data
              this[response.data[0].NAMA_FIELD] = response.data[0].VALUE;
            } else {
              // Reset All Data
              Object.assign(this.$data, this.initialData());
              this.isUpdate = false;
            }
          }).then(() => {
            if(this.JUMLAH_KUNJUNGAN_RAWAT_JALAN_LAKI_FASILITAS_PELAYANAN_KESEHATAN_TINGKAT_LANJUT_RS_UMUM != 0) {
              this.isUpdate = true;
            }                
          })
          .catch(function (error) {
            console.log(error);
          });

      }
           
  
    }             
  },
  components: {},
  created() {
    var user = JSON.parse(this.$session.get('dataLogin'));
    this.NAMA_RUMAH_SAKIT = user.NAMA_RS;    
    this.USERNAME = user.username;    
    this.checkData(this.$data);
  }
}
</script>