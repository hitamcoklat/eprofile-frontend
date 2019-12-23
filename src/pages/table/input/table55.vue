<template>
<!-- Main content -->
<div class="content">
  <div class="row">        
    <div class="col-md-12">
      <div class="box box-info">
        <div class="box-header with-border">
          <div class="alert alert-info alert-dismissible">
            <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
            <h4>Tabel 55 - JUMLAH KASUS DAN KEMATIAN AKIBAT AIDS MENURUT JENIS KELAMIN DAN KELOMPOK UMUR </h4>
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
                  <select class="form-control">
                    <option selected="">Pilih Bulan</option>
                    <option>Januari</option>
                    <option>Februari</option>
                    <option>Maret</option>
                    <option>April</option>
                    <option>Mei</option>
                    <option>Juni</option>
                    <option>Juli</option>
                    <option>Agustus</option>
                    <option>September</option>
                    <option>Oktober</option>
                    <option>November</option>
                    <option>Desember</option>
                  </select>
                </div>              
                <label for="" class="col-sm-3 control-label">Pilih Tahun</label>
                <div class="col-sm-2">
                  <select class="form-control">
                    <option selected="">Pilih Tahun</option>
                    <option>2019</option>
                    <option>2020</option>
                    <option>2021</option>
                  </select>
                </div>
              </div>
              <div class="nav-tabs-custom">                
                <ul class="nav nav-tabs">
                  <li class="active"><a href="#tab_1" data-toggle="tab">< 1 Tahun </a></li>
                  <li><a href="#tab_2" data-toggle="tab"> 1 - 4 Tahun</a></li>                          
                  <li><a href="#tab_3" data-toggle="tab"> 5 - 14 Tahun</a></li>                          
                  <li><a href="#tab_4" data-toggle="tab"> 15 - 19 Tahun</a></li>                          
                  <li><a href="#tab_5" data-toggle="tab"> 20 - 29 Tahun</a></li>                          
                  <li><a href="#tab_6" data-toggle="tab"> 30 - 39 Tahun</a></li>
                  <li><a href="#tab_7" data-toggle="tab"> 40 - 49 Tahun</a></li>
                  <li><a href="#tab_8" data-toggle="tab"> 50 - 59 Tahun</a></li>
                  <li><a href="#tab_9" data-toggle="tab"> >= 60 Tahun</a></li>
                  <li><a href="#tab_9" data-toggle="tab"> TIDAK DIKETAHUI</a></li>
                </ul>
                <div class="tab-content">
                  <div class="tab-pane active" id="tab_1">
                    <div class="box-body">
                      <div class="col-md-6">
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> Kasus Baru AIDS Laki </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="KASUS_BARU_AIDS_L_KURANG_1_TAHUN" name="kelompok_umur_kurang_dari_1_tahun_kasus_baru_aids_laki" placeholder="" v-on:blur="kasusBaruAidsLP_1thn()">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> Kasus Baru AIDS Perempuan </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="KASUS_BARU_AIDS_P_KURANG_1_TAHUN" name="kelompok_umur_kurang_dari_1_tahun_kasus_baru_aids_perempuan" placeholder="" v-on:blur="kasusBaruAidsLP_1thn()">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> Kasus Baru AIDS Laki+Perempuan </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="KASUS_BARU_AIDS_L_P_KURANG_1_TAHUN" name="kelompok_umur_kurang_dari_1_tahun_kasus_baru_aids_laki_perempuan" placeholder="" >
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> Kasus Baru AIDS Proporsi Kelompok Umur </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="KASUS_BARU_AIDS_PROPORSI_KELOMPOK_UMUR_KURANG_1_TAHUN" name="kelompok_umur_kurang_dari_1_tahun_kasus_baru_aids_proporsi_kelompok_umur" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> Kasus Kumulatif AIDS Laki </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="KASUS_KUMULATIF_AIDS_L_KURANG_1_TAHUN" name="kelompok_umur_kurang_dari_1_tahun_kasus_kumulatif_aids_laki" placeholder="" v-on:blur="kasusKumulatifAidsLP_1thn()">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> Kasus Kumulatif AIDS Perempuan </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="KASUS_KUMULATIF_AIDS_P_KURANG_1_TAHUN" name="kelompok_umur_kurang_dari_1_tahun_kasus_kumulatif_aids_perempuan" placeholder="" v-on:blur="kasusKumulatifAidsLP_1thn()">
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> Kasus Kumulatif AIDS Laki+Perempuan </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="KASUS_KUMULATIF_AIDS_L_P_KURANG_1_TAHUN" name="kelompok_umur_kurang_dari_1_tahun_kasus_kumulatif_aids_laki_perempuan" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> Kasus Kumulatif AIDS Proporsi Kelompok Umur </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="KASUS_KUMULATIF_AIDS_PROPORSI_KELOMPOK_UMUR_KURANG_1_TAHUN" name="kelompok_umur_kurang_dari_1_tahun_kasus_kumulatif_aids_proporsi_kelompok_umur" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> Jumlah Kematian Akibat AIDS Laki </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="JUMLAH_KEMATIAN_AKIBAT_AIDS_L_KURANG_1_TAHUN" name="kelompok_umur_kurang_dari_1_tahun_jumlah_kematian_akibat_aids_laki" v-on:blur="jmlKematianAIDSLP_1thn()" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> Jumlah Kematian Akibat AIDS Perempuan </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="JUMLAH_KEMATIAN_AKIBAT_AIDS_P_KURANG_1_TAHUN" name="kelompok_umur_kurang_dari_1_tahun_jumlah_kematian_akibat_aids_perempuan" v-on:blur="jmlKematianAIDSLP_1thn()" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> Jumlah Kematian Akibat AIDS Laki+Perempuan </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="JUMLAH_KEMATIAN_AKIBAT_AIDS_L_P_KURANG_1_TAHUN" name="kelompok_umur_kurang_dari_1_tahun_jumlah_kematian_akibat_aids_laki_perempuan" placeholder="">
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
                          <label for="" class="col-sm-6 control-label"> Kasus Baru AIDS Laki </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="KASUS_BARU_AIDS_L_1_4_TAHUN" name="kelompok_umur_1_4_tahun_kasus_baru_aids_laki" placeholder="" v-on:blur="kasusBaruAidsLP_14thn()">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> Kasus Baru AIDS Perempuan </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="KASUS_BARU_AIDS_P_1_4_TAHUN" name="kelompok_umur_1_4_tahun_kasus_baru_aids_perempuan" placeholder="" v-on:blur="kasusBaruAidsLP_14thn()">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> Kasus Baru AIDS Laki+Perempuan </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="KASUS_BARU_AIDS_L_P_1_4_TAHUN" name="kelompok_umur_1_4_tahun_kasus_baru_aids_laki_perempuan" placeholder="">
                          </div>
                        </div>                        
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> Kasus Baru AIDS Proporsi Kelompok Umur </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="KASUS_BARU_AIDS_PROPORSI_KELOMPOK_UMUR_1_4_TAHUN" name="kelompok_umur_1_4_tahun_kasus_baru_aids_proporsi_kelompok_umur" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> Kasus Kumulatif AIDS Laki </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="KASUS_KUMULATIF_AIDS_L_1_4_TAHUN" name="kelompok_umur_1_4_tahun_kasus_kumulatif_aids_laki" placeholder="" v-on:blur="kasusKumulatifAidsLP_14thn()">
                          </div>
                        </div>                        
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> Kasus Kumulatif AIDS Perempuan </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="KASUS_KUMULATIF_AIDS_P_1_4_TAHUN" name="kelompok_umur_1_4_tahun_kasus_kumulatif_aids_perempuan" placeholder="" v-on:blur="kasusKumulatifAidsLP_14thn()">
                          </div>
                        </div>
                      </div> 
                      <div class="col-md-6">                                             
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> Kasus Kumulatif AIDS Laki+Perempuan </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="KASUS_KUMULATIF_AIDS_L_P_1_4_TAHUN" name="kelompok_umur_1_4_tahun_kasus_kumulatif_aids_laki_perempuan" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> Kasus Kumulatif AIDS Proporsi Kelompok Umur </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="KASUS_KUMULATIF_AIDS_PROPORSI_KELOMPOK_UMUR_1_4_TAHUN" name="kelompok_umur_1_4_tahun_kasus_kumulatif_aids_proporsi_kelompok_umur" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> Jumlah Kematian Akibat AIDS Laki </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="JUMLAH_KEMATIAN_AKIBAT_AIDS_L_1_4_TAHUN" name="kelompok_umur_1_4_tahun_jumlah_kematian_akibat_aids_laki" placeholder="" v-on:blur="jmlKematianAIDSLP_14thn()">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> Jumlah Kematian Akibat AIDS Perempuan </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="JUMLAH_KEMATIAN_AKIBAT_AIDS_P_1_4_TAHUN" name="kelompok_umur_1_4_tahun_jumlah_kematian_akibat_aids_perempuan" placeholder="" v-on:blur="jmlKematianAIDSLP_14thn()">
                          </div>
                        </div> 
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> Jumlah Kematian Akibat AIDS Laki+Perempuan </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="JUMLAH_KEMATIAN_AKIBAT_AIDS_L_P_1_4_TAHUN" name="kelompok_umur_1_4_tahun_jumlah_kematian_akibat_aids_laki_perempuan" placeholder="">
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
                          <label for="" class="col-sm-6 control-label"> Kasus Baru AIDS Laki </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="KASUS_BARU_AIDS_L_5_14_TAHUN" name="kelompok_umur_5_14_tahun_kasus_baru_aids_laki" placeholder="" v-on:blur="kasusBaruAidsLP_514thn()">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> Kasus Baru AIDS Perempuan </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="KASUS_BARU_AIDS_P_5_14_TAHUN" name="kelompok_umur_5_14_tahun_kasus_baru_aids_perempuan" placeholder="" v-on:blur="kasusBaruAidsLP_514thn()">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> Kasus Baru AIDS Laki+Perempuan </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="KASUS_BARU_AIDS_L_P_5_14_TAHUN" name="kelompok_umur_5_14_tahun_kasus_baru_aids_laki_perempuan" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> Kasus Baru AIDS Proporsi Kelompok Umur </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="KASUS_BARU_AIDS_PROPORSI_KELOMPOK_UMUR_5_14_TAHUN" name="kelompok_umur_5_14_tahun_kasus_baru_aids_proporsi_kelompok_umur" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> Kasus Kumulatif AIDS Laki </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="KASUS_KUMULATIF_AIDS_L_5_14_TAHUN" name="kelompok_umur_5_14_tahun_kasus_kumulatif_aids_laki" placeholder="" v-on:blur="kasusKumulatifAidsLP_514thn()">
                          </div>
                        </div> 
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> Kasus Kumulatif AIDS Perempuan </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="KASUS_KUMULATIF_AIDS_P_5_14_TAHUN" name="kelompok_umur_5_14_tahun_kasus_kumulatif_aids_perempuan" placeholder="" v-on:blur="kasusKumulatifAidsLP_514thn()">
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> Kasus Kumulatif AIDS Laki+Perempuan </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="KASUS_KUMULATIF_AIDS_L_P_5_14_TAHUN" name="kelompok_umur_5_14_tahun_kasus_kumulatif_aids_laki_perempuan" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> Kasus Kumulatif AIDS Proporsi Kelompok Umur </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="KASUS_KUMULATIF_AIDS_PROPORSI_KELOMPOK_UMUR_5_14_TAHUN" name="kelompok_umur_5_14_tahun_kasus_kumulatif_aids_proporsi_kelompok_umur" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> Jumlah Kematian Akibat AIDS Laki </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="JUMLAH_KEMATIAN_AKIBAT_AIDS_L_5_14_TAHUN" name="kelompok_umur_5_14_tahun_jumlah_kematian_akibat_aids_laki" placeholder="" v-on:blur="jmlKematianAIDSLP_514thn()">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> Jumlah Kematian Akibat AIDS Perempuan </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="JUMLAH_KEMATIAN_AKIBAT_AIDS_P_5_14_TAHUN" name="kelompok_umur_5_14_tahun_jumlah_kematian_akibat_aids_perempuan" placeholder="" v-on:blur="jmlKematianAIDSLP_514thn()">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> Jumlah Kematian Akibat AIDS Laki+Perempuan </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="JUMLAH_KEMATIAN_AKIBAT_AIDS_L_P_5_14_TAHUN" name="kelompok_umur_5_14_tahun_jumlah_kematian_akibat_aids_laki_perempuan" placeholder="">
                          </div>
                        </div>
                      </div>
                    </div> 
                  </div>

                  <div class="tab-pane" id="tab_4">
                    <div class="box-body">
                      <div class="col-md-6">                               
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> Kasus Baru AIDS Laki </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="KASUS_BARU_AIDS_L_15_19_TAHUN" name="kelompok_umur_15_19_tahun_kasus_baru_aids_laki" placeholder="" v-on:blur="kasusBaruAidsLP_1519thn()">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> Kasus Baru AIDS Perempuan </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="KASUS_BARU_AIDS_P_15_19_TAHUN" name="kelompok_umur_15_19_tahun_kasus_baru_aids_perempuan" placeholder="" v-on:blur="kasusBaruAidsLP_1519thn()">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> Kasus Baru AIDS Laki+Perempuan </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="KASUS_BARU_AIDS_L_P_15_19_TAHUN" name="kelompok_umur_15_19_tahun_kasus_baru_aids_laki_perempuan" placeholder="">
                          </div>
                        </div> 
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> Kasus Baru AIDS Proporsi Kelompok Umur </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="KASUS_BARU_AIDS_PROPORSI_KELOMPOK_UMUR_15_19_TAHUN" name="kelompok_umur_15_19_tahun_kasus_baru_aids_proporsi_kelompok_umur" placeholder="">
                          </div>
                        </div> 
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> Kasus Kumulatif AIDS Laki </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="KASUS_KUMULATIF_AIDS_L_15_19_TAHUN" name="kelompok_umur_15_19_tahun_kasus_kumulatif_aids_laki" placeholder="" v-on:blur="kasusKumulatifAidsLP_1519thn()">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> Kasus Kumulatif AIDS Perempuan </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="KASUS_KUMULATIF_AIDS_P_15_19_TAHUN" name="kelompok_umur_15_19_tahun_kasus_kumulatif_aids_perempuan" placeholder="" v-on:blur="kasusKumulatifAidsLP_1519thn()">
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> Kasus Kumulatif AIDS Laki+Perempuan </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="KASUS_KUMULATIF_AIDS_L_P_15_19_TAHUN" name="kelompok_umur_15_19_tahun_kasus_kumulatif_aids_laki_perempuan" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> Kasus Kumulatif AIDS Proporsi Kelompok Umur </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="KASUS_KUMULATIF_AIDS_PROPORSI_KELOMPOK_UMUR_15_19_TAHUN" name="kelompok_umur_15_19_tahun_kasus_kumulatif_aids_proporsi_kelompok_umur" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> Jumlah Kematian Akibat AIDS Laki </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="JUMLAH_KEMATIAN_AKIBAT_AIDS_L_15_19_TAHUN" name="kelompok_umur_15_19_tahun_jumlah_kematian_akibat_aids_laki" placeholder="" v-on:blur="jmlKematianAIDSLP_1519thn()">
                          </div>
                        </div> 
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> Jumlah Kematian Akibat AIDS Perempuan </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="JUMLAH_KEMATIAN_AKIBAT_AIDS_P_15_19_TAHUN" name="kelompok_umur_15_19_tahun_jumlah_kematian_akibat_aids_perempuan" placeholder="" v-on:blur="jmlKematianAIDSLP_1519thn()">
                          </div>
                        </div> 
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> Jumlah Kematian Akibat AIDS Laki+Perempuan </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="JUMLAH_KEMATIAN_AKIBAT_AIDS_L_P_15_19_TAHUN" name="kelompok_umur_15_19_tahun_jumlah_kematian_akibat_aids_laki_perempuan" placeholder="">
                          </div>
                        </div>
                      </div>
                    </div> 
                  </div>  

                  <div class="tab-pane" id="tab_5">
                    <div class="box-body">
                      <div class="col-md-6">                        
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> Kasus Baru AIDS Laki </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="KASUS_BARU_AIDS_L_20_29_TAHUN" name="kelompok_umur_20_29_tahun_kasus_baru_aids_laki" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> Kasus Baru AIDS Perempuan </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="KASUS_BARU_AIDS_P_20_29_TAHUN" name="kelompok_umur_20_29_tahun_kasus_baru_aids_perempuan" placeholder="" v-on:blur="kasusBaruAidsLP_2029thn()">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> Kasus Baru AIDS Laki+Perempuan </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="KASUS_BARU_AIDS_L_P_20_29_TAHUN" name="kelompok_umur_20_29_tahun_kasus_baru_aids_laki_perempuan" placeholder="" v-on:blur="kasusBaruAidsLP_2029thn()">
                          </div>
                        </div> 
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> Kasus Baru AIDS Proporsi Kelompok Umur </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="KASUS_BARU_AIDS_PROPORSI_KELOMPOK_UMUR_20_29_TAHUN" name="kelompok_umur_20_29_tahun_proporsi_kelompok_umur" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> Kasus Kumulatif AIDS Laki </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="KASUS_KUMULATIF_AIDS_L_20_29_TAHUN" name="kelompok_umur_20_29_tahun_kasus_kumulatif_aids_laki" placeholder="" v-on:blur="kasusKumulatifAidsLP_2029thn()">
                          </div>
                        </div> 
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> Kasus Kumulatif AIDS Perempuan </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="KASUS_KUMULATIF_AIDS_P_20_29_TAHUN" name="kelompok_umur_20_29_tahun_kasus_kumulatif_aids_perempuan" placeholder="" v-on:blur="kasusKumulatifAidsLP_2029thn()">
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6"> 
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> Kasus Kumulatif AIDS Laki+Perempuan </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="KASUS_KUMULATIF_AIDS_L_P_20_29_TAHUN" name="kelompok_umur_20_29_tahun_kasus_kumulatif_aids_laki_perempuan" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> Kasus Kumulatif AIDS Proporsi Kelompok Umur </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="KASUS_KUMULATIF_AIDS_PROPORSI_KELOMPOK_UMUR_20_29_TAHUN" name="kelompok_umur_20_29_tahun_kasus_kumulatif_aids_proporsi_kelompok_umur" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> Jumlah Kematian Akibat AIDS Laki</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="JUMLAH_KEMATIAN_AKIBAT_AIDS_L_20_29_TAHUN" name="kelompok_umur_20_29_tahun_jumlah_kematian_akibat_aids_laki" v-on:blur="jmlKematianAIDSLP_2029thn()" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> Jumlah Kematian Akibat AIDS Perempuan</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="JUMLAH_KEMATIAN_AKIBAT_AIDS_P_20_29_TAHUN" name="kelompok_umur_20_29_tahun_jumlah_kematian_akibat_aids_perempuan" placeholder="" v-on:blur="jmlKematianAIDSLP_2029thn()">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> Jumlah Kematian Akibat AIDS Laki+Perempuan</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="JUMLAH_KEMATIAN_AKIBAT_AIDS_L_P_20_29_TAHUN" name="kelompok_umur_20_29_tahun_jumlah_kematian_akibat_aids_laki_perempuan" placeholder="">
                          </div>
                        </div>                                                     
                      </div>
                    </div> 
                  </div>

                  <div class="tab-pane" id="tab_6">
                    <div class="box-body">
                      <div class="col-md-6">                        
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> Kasus Baru AIDS Laki </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="KASUS_BARU_AIDS_L_30_39_TAHUN" name="kelompok_umur_30_39_tahun_kasus_baru_aids_laki" placeholder="" v-on:blur="kasusBaruAidsLP_3039thn()">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> Kasus Baru AIDS Perempuan </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="KASUS_BARU_AIDS_P_30_39_TAHUN" name="kelompok_umur_30_39_tahun_kasus_baru_aids_perempuan" placeholder="" v-on:blur="kasusBaruAidsLP_3039thn()">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> Kasus Baru AIDS Laki+Perempuan </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model='KASUS_BARU_AIDS_L_P_30_39_TAHUN' name="kelompok_umur_30_39_tahun_kasus_baru_aids_laki_perempuan" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> Kasus Baru AIDS Proporsi Kelompok Umur </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="KASUS_BARU_AIDS_PROPORSI_KELOMPOK_UMUR_30_39_TAHUN" name="kelompok_umur_30_39_tahun_kasus_baru_aids_proporsi_kelompok_umur" placeholder="">
                          </div>
                        </div>  
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> Kasus Kumulatif AIDS Laki </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="KASUS_KUMULATIF_AIDS_L_30_39_TAHUN" name="kelompok_umur_30_39_tahun_kasus_kumulatif_aids_laki" placeholder="" v-on:blur="kasusKumulatifAidsLP_3039thn()">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> Kasus Kumulatif AIDS Perempuan </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="KASUS_KUMULATIF_AIDS_P_30_39_TAHUN" name="kelompok_umur_30_39_tahun_kasus_kumulatif_aids_perempuan" placeholder="" v-on:blur="kasusKumulatifAidsLP_3039thn()">
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">  
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> Kasus Kumulatif AIDS Laki+Perempuan </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="KASUS_KUMULATIF_AIDS_L_P_30_39_TAHUN" name="kelompok_umur_30_39_tahun_kasus_kumulatif_aids_laki_perempuan" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> Kasus Kumulatif AIDS Proporsi Kelompok Umur </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="KASUS_KUMULATIF_AIDS_PROPORSI_KELOMPOK_UMUR_30_39_TAHUN" name="kelompok_umur_30_39_tahun_kasus_kumulatif_aids_proporsi_kelompok_umur" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> Jumlah Kematian Akibat AIDS Laki </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="JUMLAH_KEMATIAN_AKIBAT_AIDS_L_30_39_TAHUN" name="kelompok_umur_30_39_tahun_jumlah_kematian_akibat_aids_laki" placeholder="" v-on:blur="jmlKematianAIDSLP_3039thn()">
                          </div>
                        </div> 
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> Jumlah Kematian Akibat AIDS Perempuan </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="JUMLAH_KEMATIAN_AKIBAT_AIDS_P_30_39_TAHUN" name="kelompok_umur_30_39_tahun_jumlah_kematian_akibat_aids_perempuan" placeholder="" v-on:blur="jmlKematianAIDSLP_3039thn()">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> Jumlah Kematian Akibat AIDS Laki+Perempuan </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="JUMLAH_KEMATIAN_AKIBAT_AIDS_L_P_30_39_TAHUN" name="kelompok_umur_30_39_tahun_jumlah_kematian_akibat_aids_laki_perempuan" placeholder="">
                          </div>
                        </div>                        
                      </div>
                    </div> 
                  </div>

                  <div class="tab-pane" id="tab_7">
                    <div class="box-body">
                      <div class="col-md-6">                                                
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> Kasus Baru AIDS Laki </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="KASUS_BARU_AIDS_L_40_49_TAHUN" name="kelompok_umur_40_49_tahun_kasus_baru_aids_laki" placeholder="" v-on:blur="kasusBaruAidsLP_4049thn()">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> Kasus Baru AIDS Perempuan </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="KASUS_BARU_AIDS_P_40_49_TAHUN" name="kelompok_umur_40_49_tahun_kasus_baru_aids_perempuan" placeholder="" v-on:blur="kasusBaruAidsLP_4049thn()">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> Kasus Baru AIDS Laki+Perempuan </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="KASUS_BARU_AIDS_L_P_40_49_TAHUN" name="kelompok_umur_40_49_tahun_kasus_baru_aids_laki_perempuan" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> Kasus Baru AIDS Proporsi Kelompok Umur </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="KASUS_BARU_AIDS_PROPORSI_KELOMPOK_UMUR_40_49_TAHUN" name="kelompok_umur_40_49_tahun_kasus_baru_aids_proporsi_kelompok_umur" placeholder="">
                          </div>
                        </div> 
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> Kasus Kumulatif AIDS Laki </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="KASUS_KUMULATIF_AIDS_L_40_49_TAHUN" name="kelompok_umur_40_49_tahun_kasus_kumulatif_aids_laki" placeholder="" v-on:blur="kasusKumulatifAidsLP_4049thn()">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> Kasus Kumulatif AIDS Perempuan </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="KASUS_KUMULATIF_AIDS_P_40_49_TAHUN" name="kelompok_umur_40_49_tahun_kasus_kumulatif_aids_perempuan" placeholder="" v-on:blur="kasusKumulatifAidsLP_4049thn()">
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">  
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> Kasus Kumulatif AIDS Laki+Perempuan </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="KASUS_KUMULATIF_AIDS_L_P_40_49_TAHUN" name="kelompok_umur_40_49_tahun_kasus_kumulatif_aids_laki_perempuan" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> Kasus Kumulatif AIDS Proporsi Kelompok Umur </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="KASUS_KUMULATIF_AIDS_PROPORSI_KELOMPOK_UMUR_40_49_TAHUN" name="kelompok_umur_40_49_tahun_kasus_kumulatif_aids_proporsi_kelompok_umur" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> Jumlah Kematian Akibat AIDS Laki </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="JUMLAH_KEMATIAN_AKIBAT_AIDS_L_40_49_TAHUN" name="kelompok_umur_40_49_tahun_jumlah_kematian_akibat_aids_laki" placeholder="" v-on:blur="jmlKematianAIDSLP_4049thn()">
                          </div>
                        </div> 
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> Jumlah Kematian Akibat AIDS Perempuan </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="JUMLAH_KEMATIAN_AKIBAT_AIDS_P_40_49_TAHUN" name="kelompok_umur_40_49_tahun_jumlah_kematian_akibat_aids_perempuan" placeholder="" v-on:blur="jmlKematianAIDSLP_4049thn()">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> Jumlah Kematian Akibat AIDS Laki+Perempuan </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="JUMLAH_KEMATIAN_AKIBAT_AIDS_L_P_40_49_TAHUN" name="kelompok_umur_40_49_tahun_jumlah_kematian_akibat_aids_laki_perempuan" placeholder="">
                          </div>
                        </div>                                               
                      </div>
                    </div> 
                  </div>

                  <div class="tab-pane" id="tab_8">
                    <div class="box-body">
                      <div class="col-md-6">                                                                        
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> Kasus Baru AIDS Laki </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="KASUS_BARU_AIDS_L_50_59_TAHUN" name="kelompok_umur_50_59_tahun_kasus_baru_aids_laki" placeholder="" v-on:blur="kasusBaruAidsLP_5059thn()">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> Kasus Baru AIDS Perempuan </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="KASUS_BARU_AIDS_P_50_59_TAHUN" name="kelompok_umur_50_59_tahun_kasus_baru_aids_perempuan" placeholder="" v-on:blur="kasusBaruAidsLP_5059thn()">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> Kasus Baru AIDS Laki+Perempuan </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="KASUS_BARU_AIDS_L_P_50_59_TAHUN" name="kelompok_umur_50_59_tahun_kasus_baru_aids_laki_perempuan" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> Kasus Baru AIDS Proporsi Kelompok Umur </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="KASUS_BARU_AIDS_PROPORSI_KELOMPOK_UMUR_50_59_TAHUN" name="kelompok_umur_50_59_tahun_kasus_baru_aids_proporsi_kelompok_umur" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> Kasus Kumulatif AIDS Laki </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="KASUS_KUMULATIF_AIDS_L_50_59_TAHUN" name="kelompok_umur_50_59_tahun_kasus_kumulatif_aids_laki" placeholder="" v-on:blur="kasusKumulatifAidsLP_5059thn()">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> Kasus Kumulatif AIDS Perempuan </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="KASUS_KUMULATIF_AIDS_P_50_59_TAHUN" name="kelompok_umur_50_59_tahun_kasus_kumulatif_aids_perempuan" placeholder="" v-on:blur="kasusKumulatifAidsLP_5059thn()">
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">  
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> Kasus Kumulatif AIDS Laki+Perempuan </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="KASUS_KUMULATIF_AIDS_L_P_50_59_TAHUN" name="kelompok_umur_50_59_tahun_kasus_kumulatif_aids_laki_perempuan" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> Kasus Kumulatif AIDS Proporsi Kelompok Umur </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="KASUS_KUMULATIF_AIDS_PROPORSI_KELOMPOK_UMUR_50_59_TAHUN" name="kelompok_umur_50_59_tahun_kasus_kumulatif_aids_proporsi_kelompok_umur" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> Jumlah Kematian Akibat AIDS Laki </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="JUMLAH_KEMATIAN_AKIBAT_AIDS_L_50_59_TAHUN" name="kelompok_umur_50_59_tahun_jumlah_kematian_akibat_aids_laki" placeholder="" v-on:blur="jmlKematianAIDSLP_5059thn()">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> Jumlah Kematian Akibat AIDS Perempuan </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="JUMLAH_KEMATIAN_AKIBAT_AIDS_P_50_59_TAHUN" name="kelompok_umur_50_59_tahun_jumlah_kematian_akibat_aids_perempuan" placeholder="" v-on:blur="jmlKematianAIDSLP_5059thn()">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> Jumlah Kematian Akibat AIDS Laki+Perempuan </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="JUMLAH_KEMATIAN_AKIBAT_AIDS_L_P_50_59_TAHUN" name="kelompok_umur_50_59_tahun_jumlah_kematian_akibat_aids_laki_perempuan" placeholder="">
                          </div>
                        </div>                                                                    
                      </div>
                    </div> 
                  </div>

                  <div class="tab-pane" id="tab_9">
                    <div class="box-body">
                      <div class="col-md-6">                        
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> Kasus Baru AIDS Laki </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="KASUS_BARU_AIDS_L_LEBIH_60_TAHUN" name="kelompok_umur_lebih_dari_60_tahun_kasus_baru_aids_laki" placeholder="" v-on:blur="kasusBaruAidsLP_lebih60thn()">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> Kasus Baru AIDS Perempuan </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="KASUS_BARU_AIDS_P_LEBIH_60_TAHUN" name="kelompok_umur_lebih_dari_60_tahun_kasus_baru_aids_perempuan" placeholder="" v-on:blur="kasusBaruAidsLP_lebih60thn()">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> Kasus Baru AIDS Laki+Perempuan </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="KASUS_BARU_AIDS_L_P_LEBIH_60_TAHUN" name="kelompok_umur_lebih_dari_60_tahun_kasus_baru_aids_laki_perempuan" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> Kasus Baru AIDS Proporsi Kelompok Umur </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="KASUS_BARU_AIDS_PROPORSI_KELOMPOK_UMUR_LEBIH_60_TAHUN" name="kelompok_umur_lebih_dari_60_tahun_kasus_baru_aids_proporsi_kelompok_umur" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> Kasus Kumulatif AIDS Laki </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="KASUS_KUMULATIF_AIDS_L_LEBIH_60_TAHUN" name="kelompok_umur_lebih_dari_60_tahun_kasus_kumulatif_aids_laki" placeholder="" v-on:blur="kasusKumulatifAidsLP_lebih60thn()">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> Kasus Kumulatif AIDS Perempuan </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="KASUS_KUMULATIF_AIDS_P_LEBIH_60_TAHUN" name="kelompok_umur_lebih_dari_60_tahun_kasus_kumulatif_aids_perempuan" placeholder="" v-on:blur="kasusKumulatifAidsLP_lebih60thn()">
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">  
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> Kasus Kumulatif AIDS Laki+Perempuan </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="KASUS_KUMULATIF_AIDS_L_P_LEBIH_60_TAHUN" name="kelompok_umur_lebih_dari_60_tahun_kasus_kumulatif_aids_laki_perempuan" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> Kasus Kumulatif AIDS Proporsi Kelompok Umur </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="KASUS_KUMULATIF_AIDS_PROPORSI_KELOMPOK_UMUR_LEBIH_60_TAHUN" name="kelompok_umur_lebih_dari_60_tahun_kasus_kumulatif_aids_proporsi_kelompok_umur" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> Jumlah Kematian Akibat AIDS Laki </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="JUMLAH_KEMATIAN_AKIBAT_AIDS_L_LEBIH_60_TAHUN" name="kelompok_umur_lebih_dari_60_tahun_jumlah_kematian_akibat_aids_laki" placeholder="" v-on:blur="jmlKematianAIDSLP_lebih60thn()">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> Jumlah Kematian Akibat AIDS Perempuan </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="JUMLAH_KEMATIAN_AKIBAT_AIDS_P_LEBIH_60_TAHUN" name="kelompok_umur_lebih_dari_60_tahun_jumlah_kematian_akibat_aids_perempuan" placeholder="" v-on:blur="jmlKematianAIDSLP_lebih60thn()">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> Jumlah Kematian Akibat AIDS Laki+Perempuan </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="JUMLAH_KEMATIAN_AKIBAT_AIDS_L_P_LEBIH_60_TAHUN" name="kelompok_umur_lebih_dari_60_tahun_jumlah_kematian_akibat_aids_laki_perempuan" placeholder="">
                          </div>
                        </div>
                      </div>
                    </div> 
                  </div>

                  <div class="tab-pane" id="tab_10">
                    <div class="box-body">
                      <div class="col-md-6">                        
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> Kasus Baru AIDS Laki </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="KASUS_BARU_AIDS_L_TIDAK_DIKETAHUI" name="kelompok_umur_tidak_diketahui_kasus_baru_aids_laki" placeholder="" v-on:blur="kasusBaruAidsLP_tidakdiketahui()">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> Kasus Baru AIDS Perempuan </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="KASUS_BARU_AIDS_P_TIDAK_DIKETAHUI" name="kelompok_umur_tidak_diketahui_kasus_baru_aids_perempuan" placeholder="" v-on:blur="kasusBaruAidsLP_tidakdiketahui()">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> Kasus Baru AIDS Laki+Perempuan </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="KASUS_BARU_AIDS_L_P_TIDAK_DIKETAHUI" name="kelompok_umur_tidak_diketahui_kasus_baru_aids_laki_perempuan" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> Kasus Baru AIDS Proporsi Kelompok Umur </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="KASUS_BARU_AIDS_PROPORSI_KELOMPOK_UMUR_TIDAK_DIKETAHUI" name="kelompok_umur_tidak_diketahui_kasus_baru_aids_proporsi_kelompok_umur" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> Kasus Kumulatif AIDS Laki </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="KASUS_KUMULATIF_AIDS_L_TIDAK_DIKETAHUI" name="kelompok_umur_tidak_diketahui_kasus_kumulatif_aids_laki" placeholder="" v-on:blur="kasusKumulatifAidsLP_tidakdiketahui()">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> Kasus Kumulatif AIDS Perempuan </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="KASUS_KUMULATIF_AIDS_P_TIDAK_DIKETAHUI" name="kelompok_umur_tidak_diketahui_kasus_kumulatif_aids_perempuan" placeholder="" v-on:blur="kasusKumulatifAidsLP_tidakdiketahui()">
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">  
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> Kasus Kumulatif AIDS Laki+Perempuan </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="KASUS_KUMULATIF_AIDS_L_P_TIDAK_DIKETAHUI" name="kelompok_umur_tidak_diketahui_kasus_kumulatif_aids_laki_perempuan" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> Kasus Kumulatif AIDS Proporsi Kelompok Umur </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="KASUS_KUMULATIF_AIDS_PROPORSI_KELOMPOK_UMUM_TIDAK_DIKETAHUI" name="kelompok_umur_tidak_diketahui_kasus_kumulatif_aids_proporsi_kelompok_umur" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> Jumlah Kematian Akibat AIDS Laki </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="JUMLAH_KEMATIAN_AKIBAT_AIDS_L_TIDAK_DIKETAHUI" name="kelompok_umur_tidak_diketahui_jumlah_kematian_akibat_aids_laki" placeholder="" v-on:blur="jmlKematianAIDSLP_tidakdiketahui()">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> Jumlah Kematian Akibat AIDS Perempuan </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="JUMLAH_KEMATIAN_AKIBAT_AIDS_P_TIDAK_DIKETAHUI" name="kelompok_umur_tidak_diketahui_jumlah_kematian_akibat_aids_perempuan" placeholder="" v-on:blur="jmlKematianAIDSLP_tidakdiketahui()">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> Jumlah Kematian Akibat AIDS Laki+Perempuan </label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="JUMLAH_KEMATIAN_AKIBAT_AIDS_L_P_TIDAK_DIKETAHUI" name="kelompok_umur_tidak_diketahui_jumlah_kematian_akibat_aids_laki_perempuan" placeholder="">
                          </div>
                        </div>                        
                      </div>
                    </div> 
                  </div> 
                </div>
              </div>            
            </div>                                          
          </div>
          <!-- /.box-body -->
          <div class="box-footer">
            <button type="reset" class="btn btn-default"><i class="fa fa-fw fa-refresh"></i> Reset</button>
            <button type="button" class="btn btn-primary" @click="proses()"><i class="fa fa-fw fa-recycle"></i>
            Proses
            </button>                
            <router-link to="/table55"><a class="btn btn-success btn-md"><i class="fa fa-fw fa-arrow-left"></i> Kembali</a></router-link>
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
  name: 'Table55',
  data() {
    return {
      USERNAME: '',
      JENIS_RS: '',
      PILIH_BULAN: '1',
      PILIH_TAHUN: '2019',
      PUSKESMAS: '', 
      KASUS_BARU_AIDS_L_KURANG_1_TAHUN: 0,
      KASUS_BARU_AIDS_P_KURANG_1_TAHUN: 0,
      KASUS_BARU_AIDS_L_P_KURANG_1_TAHUN: 0,
      KASUS_BARU_AIDS_PROPORSI_KELOMPOK_UMUR_KURANG_1_TAHUN: 0,
      KASUS_KUMULATIF_AIDS_L_KURANG_1_TAHUN: 0,
      KASUS_KUMULATIF_AIDS_P_KURANG_1_TAHUN: 0,
      KASUS_KUMULATIF_AIDS_L_P_KURANG_1_TAHUN: 0,
      KASUS_KUMULATIF_AIDS_PROPORSI_KELOMPOK_UMUR_KURANG_1_TAHUN: 0,
      JUMLAH_KEMATIAN_AKIBAT_AIDS_L_KURANG_1_TAHUN: 0,
      JUMLAH_KEMATIAN_AKIBAT_AIDS_P_KURANG_1_TAHUN: 0,
      JUMLAH_KEMATIAN_AKIBAT_AIDS_L_P_KURANG_1_TAHUN: 0,
      KASUS_BARU_AIDS_L_1_4_TAHUN: 0,
      KASUS_BARU_AIDS_P_1_4_TAHUN: 0,
      KASUS_BARU_AIDS_L_P_1_4_TAHUN: 0,
      KASUS_BARU_AIDS_PROPORSI_KELOMPOK_UMUR_1_4_TAHUN: 0,
      KASUS_KUMULATIF_AIDS_L_1_4_TAHUN: 0,
      KASUS_KUMULATIF_AIDS_P_1_4_TAHUN: 0,
      KASUS_KUMULATIF_AIDS_L_P_1_4_TAHUN: 0,
      KASUS_KUMULATIF_AIDS_PROPORSI_KELOMPOK_UMUR_1_4_TAHUN: 0,
      JUMLAH_KEMATIAN_AKIBAT_AIDS_L_1_4_TAHUN: 0,
      JUMLAH_KEMATIAN_AKIBAT_AIDS_P_1_4_TAHUN: 0,
      JUMLAH_KEMATIAN_AKIBAT_AIDS_L_P_1_4_TAHUN: 0,
      KASUS_BARU_AIDS_L_5_14_TAHUN: 0,
      KASUS_BARU_AIDS_P_5_14_TAHUN: 0,
      KASUS_BARU_AIDS_L_P_5_14_TAHUN: 0,
      KASUS_BARU_AIDS_PROPORSI_KELOMPOK_UMUR_5_14_TAHUN: 0,
      KASUS_KUMULATIF_AIDS_L_5_14_TAHUN: 0,
      KASUS_KUMULATIF_AIDS_P_5_14_TAHUN: 0,
      KASUS_KUMULATIF_AIDS_L_P_5_14_TAHUN: 0,
      KASUS_KUMULATIF_AIDS_PROPORSI_KELOMPOK_UMUR_5_14_TAHUN: 0,
      JUMLAH_KEMATIAN_AKIBAT_AIDS_L_5_14_TAHUN: 0,
      JUMLAH_KEMATIAN_AKIBAT_AIDS_P_5_14_TAHUN: 0,
      JUMLAH_KEMATIAN_AKIBAT_AIDS_L_P_5_14_TAHUN: 0,
      KASUS_BARU_AIDS_L_15_19_TAHUN: 0,
      KASUS_BARU_AIDS_P_15_19_TAHUN: 0,
      KASUS_BARU_AIDS_L_P_15_19_TAHUN: 0,
      KASUS_BARU_AIDS_PROPORSI_KELOMPOK_UMUR_15_19_TAHUN: 0,
      KASUS_KUMULATIF_AIDS_L_15_19_TAHUN: 0,
      KASUS_KUMULATIF_AIDS_P_15_19_TAHUN: 0,
      KASUS_KUMULATIF_AIDS_L_P_15_19_TAHUN: 0,
      KASUS_KUMULATIF_AIDS_PROPORSI_KELOMPOK_UMUR_15_19_TAHUN: 0,
      JUMLAH_KEMATIAN_AKIBAT_AIDS_L_15_19_TAHUN: 0,
      JUMLAH_KEMATIAN_AKIBAT_AIDS_P_15_19_TAHUN: 0,
      JUMLAH_KEMATIAN_AKIBAT_AIDS_L_P_15_19_TAHUN: 0,
      KASUS_BARU_AIDS_L_20_29_TAHUN: 0,
      KASUS_BARU_AIDS_P_20_29_TAHUN: 0,
      KASUS_BARU_AIDS_L_P_20_29_TAHUN: 0,
      KASUS_BARU_AIDS_PROPORSI_KELOMPOK_UMUR_20_29_TAHUN: 0,
      KASUS_KUMULATIF_AIDS_L_20_29_TAHUN: 0,
      KASUS_KUMULATIF_AIDS_P_20_29_TAHUN: 0,
      KASUS_KUMULATIF_AIDS_L_P_20_29_TAHUN: 0,
      KASUS_KUMULATIF_AIDS_PROPORSI_KELOMPOK_UMUR_20_29_TAHUN: 0,
      JUMLAH_KEMATIAN_AKIBAT_AIDS_L_20_29_TAHUN: 0,
      JUMLAH_KEMATIAN_AKIBAT_AIDS_P_20_29_TAHUN: 0,
      JUMLAH_KEMATIAN_AKIBAT_AIDS_L_P_20_29_TAHUN: 0,
      KASUS_BARU_AIDS_L_30_39_TAHUN: 0,
      KASUS_BARU_AIDS_P_30_39_TAHUN: 0,
      KASUS_BARU_AIDS_L_P_30_39_TAHUN: 0,
      KASUS_BARU_AIDS_PROPORSI_KELOMPOK_UMUR_30_39_TAHUN: 0,
      KASUS_KUMULATIF_AIDS_L_30_39_TAHUN: 0,
      KASUS_KUMULATIF_AIDS_P_30_39_TAHUN: 0,
      KASUS_KUMULATIF_AIDS_L_P_30_39_TAHUN: 0,
      KASUS_KUMULATIF_AIDS_PROPORSI_KELOMPOK_UMUR_30_39_TAHUN: 0,
      JUMLAH_KEMATIAN_AKIBAT_AIDS_L_30_39_TAHUN: 0,
      JUMLAH_KEMATIAN_AKIBAT_AIDS_P_30_39_TAHUN: 0,
      JUMLAH_KEMATIAN_AKIBAT_AIDS_L_P_30_39_TAHUN: 0,
      KASUS_BARU_AIDS_L_40_49_TAHUN: 0,
      KASUS_BARU_AIDS_P_40_49_TAHUN: 0,
      KASUS_BARU_AIDS_L_P_40_49_TAHUN: 0,
      KASUS_BARU_AIDS_PROPORSI_KELOMPOK_UMUR_40_49_TAHUN: 0,
      KASUS_KUMULATIF_AIDS_L_40_49_TAHUN: 0,
      KASUS_KUMULATIF_AIDS_P_40_49_TAHUN: 0,
      KASUS_KUMULATIF_AIDS_L_P_40_49_TAHUN: 0,
      KASUS_KUMULATIF_AIDS_PROPORSI_KELOMPOK_UMUR_40_49_TAHUN: 0,
      JUMLAH_KEMATIAN_AKIBAT_AIDS_L_40_49_TAHUN: 0,
      JUMLAH_KEMATIAN_AKIBAT_AIDS_P_40_49_TAHUN: 0,
      JUMLAH_KEMATIAN_AKIBAT_AIDS_L_P_40_49_TAHUN: 0,
      KASUS_BARU_AIDS_L_50_59_TAHUN: 0,
      KASUS_BARU_AIDS_P_50_59_TAHUN: 0,
      KASUS_BARU_AIDS_L_P_50_59_TAHUN: 0,
      KASUS_BARU_AIDS_PROPORSI_KELOMPOK_UMUR_50_59_TAHUN: 0,
      KASUS_KUMULATIF_AIDS_L_50_59_TAHUN: 0,
      KASUS_KUMULATIF_AIDS_P_50_59_TAHUN: 0,
      KASUS_KUMULATIF_AIDS_L_P_50_59_TAHUN: 0,
      KASUS_KUMULATIF_AIDS_PROPORSI_KELOMPOK_UMUR_50_59_TAHUN: 0,
      JUMLAH_KEMATIAN_AKIBAT_AIDS_L_50_59_TAHUN: 0,
      JUMLAH_KEMATIAN_AKIBAT_AIDS_P_50_59_TAHUN: 0,
      JUMLAH_KEMATIAN_AKIBAT_AIDS_L_P_50_59_TAHUN: 0,
      KASUS_BARU_AIDS_L_LEBIH_60_TAHUN: 0,
      KASUS_BARU_AIDS_P_LEBIH_60_TAHUN: 0,
      KASUS_BARU_AIDS_L_P_LEBIH_60_TAHUN: 0,
      KASUS_BARU_AIDS_PROPORSI_KELOMPOK_UMUR_LEBIH_60_TAHUN: 0,
      KASUS_KUMULATIF_AIDS_L_LEBIH_60_TAHUN: 0,
      KASUS_KUMULATIF_AIDS_P_LEBIH_60_TAHUN: 0,
      KASUS_KUMULATIF_AIDS_L_P_LEBIH_60_TAHUN: 0,
      KASUS_KUMULATIF_AIDS_PROPORSI_KELOMPOK_UMUR_LEBIH_60_TAHUN: 0,
      JUMLAH_KEMATIAN_AKIBAT_AIDS_L_LEBIH_60_TAHUN: 0,
      JUMLAH_KEMATIAN_AKIBAT_AIDS_P_LEBIH_60_TAHUN: 0,
      JUMLAH_KEMATIAN_AKIBAT_AIDS_L_P_LEBIH_60_TAHUN: 0,
      KASUS_BARU_AIDS_L_TIDAK_DIKETAHUI: 0,
      KASUS_BARU_AIDS_P_TIDAK_DIKETAHUI: 0,
      KASUS_BARU_AIDS_L_P_TIDAK_DIKETAHUI: 0,
      KASUS_BARU_AIDS_PROPORSI_KELOMPOK_UMUR_TIDAK_DIKETAHUI: 0,
      KASUS_KUMULATIF_AIDS_L_TIDAK_DIKETAHUI: 0,
      KASUS_KUMULATIF_AIDS_P_TIDAK_DIKETAHUI: 0,
      KASUS_KUMULATIF_AIDS_L_P_TIDAK_DIKETAHUI: 0,
      KASUS_KUMULATIF_AIDS_PROPORSI_KELOMPOK_UMUM_TIDAK_DIKETAHUI: 0,
      JUMLAH_KEMATIAN_AKIBAT_AIDS_L_TIDAK_DIKETAHUI: 0,
      JUMLAH_KEMATIAN_AKIBAT_AIDS_P_TIDAK_DIKETAHUI: 0,
      JUMLAH_KEMATIAN_AKIBAT_AIDS_L_P_TIDAK_DIKETAHUI: 0,

      isUpdate: false  
    }
  },
  methods: {
    initialData: function() {
      return {
        KASUS_BARU_AIDS_L_KURANG_1_TAHUN: 0,
        KASUS_BARU_AIDS_P_KURANG_1_TAHUN: 0,
        KASUS_BARU_AIDS_L_P_KURANG_1_TAHUN: 0,
        KASUS_BARU_AIDS_PROPORSI_KELOMPOK_UMUR_KURANG_1_TAHUN: 0,
        KASUS_KUMULATIF_AIDS_L_KURANG_1_TAHUN: 0,
        KASUS_KUMULATIF_AIDS_P_KURANG_1_TAHUN: 0,
        KASUS_KUMULATIF_AIDS_L_P_KURANG_1_TAHUN: 0,
        KASUS_KUMULATIF_AIDS_PROPORSI_KELOMPOK_UMUR_KURANG_1_TAHUN: 0,
        JUMLAH_KEMATIAN_AKIBAT_AIDS_L_KURANG_1_TAHUN: 0,
        JUMLAH_KEMATIAN_AKIBAT_AIDS_P_KURANG_1_TAHUN: 0,
        JUMLAH_KEMATIAN_AKIBAT_AIDS_L_P_KURANG_1_TAHUN: 0,
        KASUS_BARU_AIDS_L_1_4_TAHUN: 0,
        KASUS_BARU_AIDS_P_1_4_TAHUN: 0,
        KASUS_BARU_AIDS_L_P_1_4_TAHUN: 0,
        KASUS_BARU_AIDS_PROPORSI_KELOMPOK_UMUR_1_4_TAHUN: 0,
        KASUS_KUMULATIF_AIDS_L_1_4_TAHUN: 0,
        KASUS_KUMULATIF_AIDS_P_1_4_TAHUN: 0,
        KASUS_KUMULATIF_AIDS_L_P_1_4_TAHUN: 0,
        KASUS_KUMULATIF_AIDS_PROPORSI_KELOMPOK_UMUR_1_4_TAHUN: 0,
        JUMLAH_KEMATIAN_AKIBAT_AIDS_L_1_4_TAHUN: 0,
        JUMLAH_KEMATIAN_AKIBAT_AIDS_P_1_4_TAHUN: 0,
        JUMLAH_KEMATIAN_AKIBAT_AIDS_L_P_1_4_TAHUN: 0,
        KASUS_BARU_AIDS_L_5_14_TAHUN: 0,
        KASUS_BARU_AIDS_P_5_14_TAHUN: 0,
        KASUS_BARU_AIDS_L_P_5_14_TAHUN: 0,
        KASUS_BARU_AIDS_PROPORSI_KELOMPOK_UMUR_5_14_TAHUN: 0,
        KASUS_KUMULATIF_AIDS_L_5_14_TAHUN: 0,
        KASUS_KUMULATIF_AIDS_P_5_14_TAHUN: 0,
        KASUS_KUMULATIF_AIDS_L_P_5_14_TAHUN: 0,
        KASUS_KUMULATIF_AIDS_PROPORSI_KELOMPOK_UMUR_5_14_TAHUN: 0,
        JUMLAH_KEMATIAN_AKIBAT_AIDS_L_5_14_TAHUN: 0,
        JUMLAH_KEMATIAN_AKIBAT_AIDS_P_5_14_TAHUN: 0,
        JUMLAH_KEMATIAN_AKIBAT_AIDS_L_P_5_14_TAHUN: 0,
        KASUS_BARU_AIDS_L_15_19_TAHUN: 0,
        KASUS_BARU_AIDS_P_15_19_TAHUN: 0,
        KASUS_BARU_AIDS_L_P_15_19_TAHUN: 0,
        KASUS_BARU_AIDS_PROPORSI_KELOMPOK_UMUR_15_19_TAHUN: 0,
        KASUS_KUMULATIF_AIDS_L_15_19_TAHUN: 0,
        KASUS_KUMULATIF_AIDS_P_15_19_TAHUN: 0,
        KASUS_KUMULATIF_AIDS_L_P_15_19_TAHUN: 0,
        KASUS_KUMULATIF_AIDS_PROPORSI_KELOMPOK_UMUR_15_19_TAHUN: 0,
        JUMLAH_KEMATIAN_AKIBAT_AIDS_L_15_19_TAHUN: 0,
        JUMLAH_KEMATIAN_AKIBAT_AIDS_P_15_19_TAHUN: 0,
        JUMLAH_KEMATIAN_AKIBAT_AIDS_L_P_15_19_TAHUN: 0,
        KASUS_BARU_AIDS_L_20_29_TAHUN: 0,
        KASUS_BARU_AIDS_P_20_29_TAHUN: 0,
        KASUS_BARU_AIDS_L_P_20_29_TAHUN: 0,
        KASUS_BARU_AIDS_PROPORSI_KELOMPOK_UMUR_20_29_TAHUN: 0,
        KASUS_KUMULATIF_AIDS_L_20_29_TAHUN: 0,
        KASUS_KUMULATIF_AIDS_P_20_29_TAHUN: 0,
        KASUS_KUMULATIF_AIDS_L_P_20_29_TAHUN: 0,
        KASUS_KUMULATIF_AIDS_PROPORSI_KELOMPOK_UMUR_20_29_TAHUN: 0,
        JUMLAH_KEMATIAN_AKIBAT_AIDS_L_20_29_TAHUN: 0,
        JUMLAH_KEMATIAN_AKIBAT_AIDS_P_20_29_TAHUN: 0,
        JUMLAH_KEMATIAN_AKIBAT_AIDS_L_P_20_29_TAHUN: 0,
        KASUS_BARU_AIDS_L_30_39_TAHUN: 0,
        KASUS_BARU_AIDS_P_30_39_TAHUN: 0,
        KASUS_BARU_AIDS_L_P_30_39_TAHUN: 0,
        KASUS_BARU_AIDS_PROPORSI_KELOMPOK_UMUR_30_39_TAHUN: 0,
        KASUS_KUMULATIF_AIDS_L_30_39_TAHUN: 0,
        KASUS_KUMULATIF_AIDS_P_30_39_TAHUN: 0,
        KASUS_KUMULATIF_AIDS_L_P_30_39_TAHUN: 0,
        KASUS_KUMULATIF_AIDS_PROPORSI_KELOMPOK_UMUR_30_39_TAHUN: 0,
        JUMLAH_KEMATIAN_AKIBAT_AIDS_L_30_39_TAHUN: 0,
        JUMLAH_KEMATIAN_AKIBAT_AIDS_P_30_39_TAHUN: 0,
        JUMLAH_KEMATIAN_AKIBAT_AIDS_L_P_30_39_TAHUN: 0,
        KASUS_BARU_AIDS_L_40_49_TAHUN: 0,
        KASUS_BARU_AIDS_P_40_49_TAHUN: 0,
        KASUS_BARU_AIDS_L_P_40_49_TAHUN: 0,
        KASUS_BARU_AIDS_PROPORSI_KELOMPOK_UMUR_40_49_TAHUN: 0,
        KASUS_KUMULATIF_AIDS_L_40_49_TAHUN: 0,
        KASUS_KUMULATIF_AIDS_P_40_49_TAHUN: 0,
        KASUS_KUMULATIF_AIDS_L_P_40_49_TAHUN: 0,
        KASUS_KUMULATIF_AIDS_PROPORSI_KELOMPOK_UMUR_40_49_TAHUN: 0,
        JUMLAH_KEMATIAN_AKIBAT_AIDS_L_40_49_TAHUN: 0,
        JUMLAH_KEMATIAN_AKIBAT_AIDS_P_40_49_TAHUN: 0,
        JUMLAH_KEMATIAN_AKIBAT_AIDS_L_P_40_49_TAHUN: 0,
        KASUS_BARU_AIDS_L_50_59_TAHUN: 0,
        KASUS_BARU_AIDS_P_50_59_TAHUN: 0,
        KASUS_BARU_AIDS_L_P_50_59_TAHUN: 0,
        KASUS_BARU_AIDS_PROPORSI_KELOMPOK_UMUR_50_59_TAHUN: 0,
        KASUS_KUMULATIF_AIDS_L_50_59_TAHUN: 0,
        KASUS_KUMULATIF_AIDS_P_50_59_TAHUN: 0,
        KASUS_KUMULATIF_AIDS_L_P_50_59_TAHUN: 0,
        KASUS_KUMULATIF_AIDS_PROPORSI_KELOMPOK_UMUR_50_59_TAHUN: 0,
        JUMLAH_KEMATIAN_AKIBAT_AIDS_L_50_59_TAHUN: 0,
        JUMLAH_KEMATIAN_AKIBAT_AIDS_P_50_59_TAHUN: 0,
        JUMLAH_KEMATIAN_AKIBAT_AIDS_L_P_50_59_TAHUN: 0,
        KASUS_BARU_AIDS_L_LEBIH_60_TAHUN: 0,
        KASUS_BARU_AIDS_P_LEBIH_60_TAHUN: 0,
        KASUS_BARU_AIDS_L_P_LEBIH_60_TAHUN: 0,
        KASUS_BARU_AIDS_PROPORSI_KELOMPOK_UMUR_LEBIH_60_TAHUN: 0,
        KASUS_KUMULATIF_AIDS_L_LEBIH_60_TAHUN: 0,
        KASUS_KUMULATIF_AIDS_P_LEBIH_60_TAHUN: 0,
        KASUS_KUMULATIF_AIDS_L_P_LEBIH_60_TAHUN: 0,
        KASUS_KUMULATIF_AIDS_PROPORSI_KELOMPOK_UMUR_LEBIH_60_TAHUN: 0,
        JUMLAH_KEMATIAN_AKIBAT_AIDS_L_LEBIH_60_TAHUN: 0,
        JUMLAH_KEMATIAN_AKIBAT_AIDS_P_LEBIH_60_TAHUN: 0,
        JUMLAH_KEMATIAN_AKIBAT_AIDS_L_P_LEBIH_60_TAHUN: 0,
        KASUS_BARU_AIDS_L_TIDAK_DIKETAHUI: 0,
        KASUS_BARU_AIDS_P_TIDAK_DIKETAHUI: 0,
        KASUS_BARU_AIDS_L_P_TIDAK_DIKETAHUI: 0,
        KASUS_BARU_AIDS_PROPORSI_KELOMPOK_UMUR_TIDAK_DIKETAHUI: 0,
        KASUS_KUMULATIF_AIDS_L_TIDAK_DIKETAHUI: 0,
        KASUS_KUMULATIF_AIDS_P_TIDAK_DIKETAHUI: 0,
        KASUS_KUMULATIF_AIDS_L_P_TIDAK_DIKETAHUI: 0,
        KASUS_KUMULATIF_AIDS_PROPORSI_KELOMPOK_UMUM_TIDAK_DIKETAHUI: 0,
        JUMLAH_KEMATIAN_AKIBAT_AIDS_L_TIDAK_DIKETAHUI: 0,
        JUMLAH_KEMATIAN_AKIBAT_AIDS_P_TIDAK_DIKETAHUI: 0,
        JUMLAH_KEMATIAN_AKIBAT_AIDS_L_P_TIDAK_DIKETAHUI: 0,       
      }
    },        
    kasusBaruAidsLP_1thn: function() {      
      this.KASUS_BARU_AIDS_L_P_KURANG_1_TAHUN = 
        parseInt((this.KASUS_BARU_AIDS_L_KURANG_1_TAHUN == '') ? 0 : this.KASUS_BARU_AIDS_L_KURANG_1_TAHUN)+
        parseInt((this.KASUS_BARU_AIDS_P_KURANG_1_TAHUN == '') ? 0 : this.KASUS_BARU_AIDS_P_KURANG_1_TAHUN);
    },
    kasusKumulatifAidsLP_1thn: function() {      
      this.KASUS_KUMULATIF_AIDS_L_P_KURANG_1_TAHUN = 
        parseInt((this.KASUS_KUMULATIF_AIDS_L_KURANG_1_TAHUN == '') ? 0 : this.KASUS_KUMULATIF_AIDS_L_KURANG_1_TAHUN)+
        parseInt((this.KASUS_KUMULATIF_AIDS_P_KURANG_1_TAHUN == '') ? 0 : this.KASUS_KUMULATIF_AIDS_P_KURANG_1_TAHUN);
    },
    jmlKematianAIDSLP_1thn: function() {      
      this.JUMLAH_KEMATIAN_AKIBAT_AIDS_L_P_KURANG_1_TAHUN = 
        parseInt((this.JUMLAH_KEMATIAN_AKIBAT_AIDS_L_KURANG_1_TAHUN == '') ? 0 : this.JUMLAH_KEMATIAN_AKIBAT_AIDS_L_KURANG_1_TAHUN)+
        parseInt((this.JUMLAH_KEMATIAN_AKIBAT_AIDS_P_KURANG_1_TAHUN == '') ? 0 : this.JUMLAH_KEMATIAN_AKIBAT_AIDS_P_KURANG_1_TAHUN);
    },   
    kasusBaruAidsLP_14thn: function() {      
      this.KASUS_BARU_AIDS_L_P_1_4_TAHUN = 
        parseInt((this.KASUS_BARU_AIDS_L_1_4_TAHUN == '') ? 0 : this.KASUS_BARU_AIDS_L_1_4_TAHUN)+
        parseInt((this.KASUS_BARU_AIDS_P_1_4_TAHUN == '') ? 0 : this.KASUS_BARU_AIDS_P_1_4_TAHUN);
    },
    kasusKumulatifAidsLP_14thn: function() {      
      this.KASUS_KUMULATIF_AIDS_L_P_1_4_TAHUN = 
        parseInt((this.KASUS_KUMULATIF_AIDS_L_1_4_TAHUN == '') ? 0 : this.KASUS_KUMULATIF_AIDS_L_1_4_TAHUN)+
        parseInt((this.KASUS_KUMULATIF_AIDS_P_1_4_TAHUN == '') ? 0 : this.KASUS_KUMULATIF_AIDS_P_1_4_TAHUN);
    },
    jmlKematianAIDSLP_14thn: function() {      
      this.JUMLAH_KEMATIAN_AKIBAT_AIDS_L_P_1_4_TAHUN = 
        parseInt((this.JUMLAH_KEMATIAN_AKIBAT_AIDS_L_1_4_TAHUN == '') ? 0 : this.JUMLAH_KEMATIAN_AKIBAT_AIDS_L_1_4_TAHUN)+
        parseInt((this.JUMLAH_KEMATIAN_AKIBAT_AIDS_P_1_4_TAHUN == '') ? 0 : this.JUMLAH_KEMATIAN_AKIBAT_AIDS_P_1_4_TAHUN);
    },
    kasusBaruAidsLP_514thn: function() {      
      this.KASUS_BARU_AIDS_L_P_5_14_TAHUN = 
        parseInt((this.KASUS_BARU_AIDS_L_5_14_TAHUN == '') ? 0 : this.KASUS_BARU_AIDS_L_5_14_TAHUN)+
        parseInt((this.KASUS_BARU_AIDS_P_5_14_TAHUN == '') ? 0 : this.KASUS_BARU_AIDS_P_5_14_TAHUN);
    },
    kasusKumulatifAidsLP_514thn: function() {      
      this.KASUS_KUMULATIF_AIDS_L_P_5_14_TAHUN = 
        parseInt((this.KASUS_KUMULATIF_AIDS_L_5_14_TAHUN == '') ? 0 : this.KASUS_KUMULATIF_AIDS_L_5_14_TAHUN)+
        parseInt((this.KASUS_KUMULATIF_AIDS_P_5_14_TAHUN == '') ? 0 : this.KASUS_KUMULATIF_AIDS_P_5_14_TAHUN);
    },
    jmlKematianAIDSLP_514thn: function() {      
      this.JUMLAH_KEMATIAN_AKIBAT_AIDS_L_P_5_14_TAHUN = 
        parseInt((this.JUMLAH_KEMATIAN_AKIBAT_AIDS_L_5_14_TAHUN == '') ? 0 : this.JUMLAH_KEMATIAN_AKIBAT_AIDS_L_5_14_TAHUN)+
        parseInt((this.JUMLAH_KEMATIAN_AKIBAT_AIDS_P_5_14_TAHUN == '') ? 0 : this.JUMLAH_KEMATIAN_AKIBAT_AIDS_P_5_14_TAHUN);
    },
    kasusBaruAidsLP_1519thn: function() {      
      this.KASUS_BARU_AIDS_L_P_15_19_TAHUN = 
        parseInt((this.KASUS_BARU_AIDS_L_15_19_TAHUN == '') ? 0 : this.KASUS_BARU_AIDS_L_15_19_TAHUN)+
        parseInt((this.KASUS_BARU_AIDS_P_15_19_TAHUN == '') ? 0 : this.KASUS_BARU_AIDS_P_15_19_TAHUN);
    },
    kasusKumulatifAidsLP_1519thn: function() {      
      this.KASUS_KUMULATIF_AIDS_L_P_15_19_TAHUN = 
        parseInt((this.KASUS_KUMULATIF_AIDS_L_15_19_TAHUN == '') ? 0 : this.KASUS_KUMULATIF_AIDS_L_15_19_TAHUN)+
        parseInt((this.KASUS_KUMULATIF_AIDS_P_15_19_TAHUN == '') ? 0 : this.KASUS_KUMULATIF_AIDS_P_15_19_TAHUN);
    },
    jmlKematianAIDSLP_1519thn: function() {      
      this.JUMLAH_KEMATIAN_AKIBAT_AIDS_L_P_15_19_TAHUN = 
        parseInt((this.JUMLAH_KEMATIAN_AKIBAT_AIDS_L_15_19_TAHUN == '') ? 0 : this.JUMLAH_KEMATIAN_AKIBAT_AIDS_L_15_19_TAHUN)+
        parseInt((this.JUMLAH_KEMATIAN_AKIBAT_AIDS_P_15_19_TAHUN == '') ? 0 : this.JUMLAH_KEMATIAN_AKIBAT_AIDS_P_15_19_TAHUN);
    },
    kasusBaruAidsLP_2029thn: function() {      
      this.KASUS_BARU_AIDS_L_P_20_29_TAHUN = 
        parseInt((this.KASUS_BARU_AIDS_L_20_29_TAHUN == '') ? 0 : this.KASUS_BARU_AIDS_L_20_29_TAHUN)+
        parseInt((this.KASUS_BARU_AIDS_P_20_29_TAHUN == '') ? 0 : this.KASUS_BARU_AIDS_P_20_29_TAHUN);
    },
    kasusKumulatifAidsLP_2029thn: function() {      
      this.KASUS_KUMULATIF_AIDS_L_P_20_29_TAHUN = 
        parseInt((this.KASUS_KUMULATIF_AIDS_L_20_29_TAHUN == '') ? 0 : this.KASUS_KUMULATIF_AIDS_L_20_29_TAHUN)+
        parseInt((this.KASUS_KUMULATIF_AIDS_P_20_29_TAHUN == '') ? 0 : this.KASUS_KUMULATIF_AIDS_P_20_29_TAHUN);
    },
    jmlKematianAIDSLP_2029thn: function() {      
      this.JUMLAH_KEMATIAN_AKIBAT_AIDS_L_P_20_29_TAHUN = 
        parseInt((this.JUMLAH_KEMATIAN_AKIBAT_AIDS_L_20_29_TAHUN == '') ? 0 : this.JUMLAH_KEMATIAN_AKIBAT_AIDS_L_20_29_TAHUN)+
        parseInt((this.JUMLAH_KEMATIAN_AKIBAT_AIDS_P_20_29_TAHUN == '') ? 0 : this.JUMLAH_KEMATIAN_AKIBAT_AIDS_P_20_29_TAHUN);
    },
    kasusBaruAidsLP_3039thn: function() {      
      this.KASUS_BARU_AIDS_L_P_30_39_TAHUN = 
        parseInt((this.KASUS_BARU_AIDS_L_30_39_TAHUN == '') ? 0 : this.KASUS_BARU_AIDS_L_30_39_TAHUN)+
        parseInt((this.KASUS_BARU_AIDS_P_30_39_TAHUN == '') ? 0 : this.KASUS_BARU_AIDS_P_30_39_TAHUN);
    },
    kasusKumulatifAidsLP_3039thn: function() {      
      this.KASUS_KUMULATIF_AIDS_L_P_30_39_TAHUN = 
        parseInt((this.KASUS_KUMULATIF_AIDS_L_30_39_TAHUN == '') ? 0 : this.KASUS_KUMULATIF_AIDS_L_30_39_TAHUN)+
        parseInt((this.KASUS_KUMULATIF_AIDS_P_30_39_TAHUN == '') ? 0 : this.KASUS_KUMULATIF_AIDS_P_30_39_TAHUN);
    },
    jmlKematianAIDSLP_3039thn: function() {      
      this.JUMLAH_KEMATIAN_AKIBAT_AIDS_L_P_30_39_TAHUN = 
        parseInt((this.JUMLAH_KEMATIAN_AKIBAT_AIDS_L_30_39_TAHUN == '') ? 0 : this.JUMLAH_KEMATIAN_AKIBAT_AIDS_L_30_39_TAHUN)+
        parseInt((this.JUMLAH_KEMATIAN_AKIBAT_AIDS_P_30_39_TAHUN == '') ? 0 : this.JUMLAH_KEMATIAN_AKIBAT_AIDS_P_30_39_TAHUN);
    },
    kasusBaruAidsLP_4049thn: function() {      
      this.KASUS_BARU_AIDS_L_P_40_49_TAHUN = 
        parseInt((this.KASUS_BARU_AIDS_L_40_49_TAHUN == '') ? 0 : this.KASUS_BARU_AIDS_L_40_49_TAHUN)+
        parseInt((this.KASUS_BARU_AIDS_P_40_49_TAHUN == '') ? 0 : this.KASUS_BARU_AIDS_P_40_49_TAHUN);
    },
    kasusKumulatifAidsLP_4049thn: function() {      
      this.KASUS_KUMULATIF_AIDS_L_P_40_49_TAHUN = 
        parseInt((this.KASUS_KUMULATIF_AIDS_L_40_49_TAHUN == '') ? 0 : this.KASUS_KUMULATIF_AIDS_L_40_49_TAHUN)+
        parseInt((this.KASUS_KUMULATIF_AIDS_P_40_49_TAHUN == '') ? 0 : this.KASUS_KUMULATIF_AIDS_P_40_49_TAHUN);
    },
    jmlKematianAIDSLP_4049thn: function() {      
      this.JUMLAH_KEMATIAN_AKIBAT_AIDS_L_P_40_49_TAHUN = 
        parseInt((this.JUMLAH_KEMATIAN_AKIBAT_AIDS_L_40_49_TAHUN == '') ? 0 : this.JUMLAH_KEMATIAN_AKIBAT_AIDS_L_40_49_TAHUN)+
        parseInt((this.JUMLAH_KEMATIAN_AKIBAT_AIDS_P_40_49_TAHUN == '') ? 0 : this.JUMLAH_KEMATIAN_AKIBAT_AIDS_P_40_49_TAHUN);
    },
    kasusBaruAidsLP_5059thn: function() {      
      this.KASUS_BARU_AIDS_L_P_50_59_TAHUN = 
        parseInt((this.KASUS_BARU_AIDS_L_50_59_TAHUN == '') ? 0 : this.KASUS_BARU_AIDS_L_50_59_TAHUN)+
        parseInt((this.KASUS_BARU_AIDS_P_50_59_TAHUN == '') ? 0 : this.KASUS_BARU_AIDS_P_50_59_TAHUN);
    },
    kasusKumulatifAidsLP_5059thn: function() {      
      this.KASUS_KUMULATIF_AIDS_L_P_50_59_TAHUN = 
        parseInt((this.KASUS_KUMULATIF_AIDS_L_50_59_TAHUN == '') ? 0 : this.KASUS_KUMULATIF_AIDS_L_50_59_TAHUN)+
        parseInt((this.KASUS_KUMULATIF_AIDS_P_50_59_TAHUN == '') ? 0 : this.KASUS_KUMULATIF_AIDS_P_50_59_TAHUN);
    },
    jmlKematianAIDSLP_5059thn: function() {      
      this.JUMLAH_KEMATIAN_AKIBAT_AIDS_L_P_50_59_TAHUN = 
        parseInt((this.JUMLAH_KEMATIAN_AKIBAT_AIDS_L_50_59_TAHUN == '') ? 0 : this.JUMLAH_KEMATIAN_AKIBAT_AIDS_L_50_59_TAHUN)+
        parseInt((this.JUMLAH_KEMATIAN_AKIBAT_AIDS_P_50_59_TAHUN == '') ? 0 : this.JUMLAH_KEMATIAN_AKIBAT_AIDS_P_50_59_TAHUN);
    },
    kasusBaruAidsLP_lebih60thn: function() {      
      this.KASUS_BARU_AIDS_L_P_LEBIH_60_TAHUN = 
        parseInt((this.KASUS_BARU_AIDS_L_LEBIH_60_TAHUN == '') ? 0 : this.KASUS_BARU_AIDS_L_LEBIH_60_TAHUN)+
        parseInt((this.KASUS_BARU_AIDS_P_LEBIH_60_TAHUN == '') ? 0 : this.KASUS_BARU_AIDS_P_LEBIH_60_TAHUN);
    },
    kasusKumulatifAidsLP_lebih60thn: function() {      
      this.KASUS_KUMULATIF_AIDS_L_P_LEBIH_60_TAHUN = 
        parseInt((this.KASUS_KUMULATIF_AIDS_L_LEBIH_60_TAHUN == '') ? 0 : this.KASUS_KUMULATIF_AIDS_L_LEBIH_60_TAHUN)+
        parseInt((this.KASUS_KUMULATIF_AIDS_P_LEBIH_60_TAHUN == '') ? 0 : this.KASUS_KUMULATIF_AIDS_P_LEBIH_60_TAHUN);
    },
    jmlKematianAIDSLP_lebih60thn: function() {      
      this.JUMLAH_KEMATIAN_AKIBAT_AIDS_L_P_LEBIH_60_TAHUN = 
        parseInt((this.JUMLAH_KEMATIAN_AKIBAT_AIDS_L_LEBIH_60_TAHUN == '') ? 0 : this.JUMLAH_KEMATIAN_AKIBAT_AIDS_L_LEBIH_60_TAHUN)+
        parseInt((this.JUMLAH_KEMATIAN_AKIBAT_AIDS_P_LEBIH_60_TAHUN == '') ? 0 : this.JUMLAH_KEMATIAN_AKIBAT_AIDS_P_LEBIH_60_TAHUN);
    },
    kasusBaruAidsLP_tidakdiketahui: function() {      
      this.KASUS_BARU_AIDS_L_P_TIDAK_DIKETAHUI = 
        parseInt((this.KASUS_BARU_AIDS_L_TIDAK_DIKETAHUI == '') ? 0 : this.KASUS_BARU_AIDS_L_TIDAK_DIKETAHUI)+
        parseInt((this.KASUS_BARU_AIDS_P_TIDAK_DIKETAHUI == '') ? 0 : this.KASUS_BARU_AIDS_P_TIDAK_DIKETAHUI);
    },
    kasusKumulatifAidsLP_tidakdiketahui: function() {      
      this.KASUS_KUMULATIF_AIDS_L_P_TIDAK_DIKETAHUI = 
        parseInt((this.KASUS_KUMULATIF_AIDS_L_TIDAK_DIKETAHUI == '') ? 0 : this.KASUS_KUMULATIF_AIDS_L_TIDAK_DIKETAHUI)+
        parseInt((this.KASUS_KUMULATIF_AIDS_P_TIDAK_DIKETAHUI == '') ? 0 : this.KASUS_KUMULATIF_AIDS_P_TIDAK_DIKETAHUI);
    },
    jmlKematianAIDSLP_tidakdiketahui: function() {      
      this.JUMLAH_KEMATIAN_AKIBAT_AIDS_L_P_TIDAK_DIKETAHUI = 
        parseInt((this.JUMLAH_KEMATIAN_AKIBAT_AIDS_L_TIDAK_DIKETAHUI == '') ? 0 : this.JUMLAH_KEMATIAN_AKIBAT_AIDS_L_TIDAK_DIKETAHUI)+
        parseInt((this.JUMLAH_KEMATIAN_AKIBAT_AIDS_P_TIDAK_DIKETAHUI == '') ? 0 : this.JUMLAH_KEMATIAN_AKIBAT_AIDS_P_TIDAK_DIKETAHUI);
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
    proses: function() {
      this.kirimData(this.$data);
    },
    checkData: function(data) {

      for (var key in data) {

        this.$http.get(this.$urlNode + '/table/getField?var=' + key + '&thn='+this.PILIH_TAHUN+'&bln=' + this.PILIH_BULAN + '&username=' + this.USERNAME)
          .then((response) => {
            console.log(response)
            if(response.data.length > 0) {
              // Read All Data
              this[response.data[0].NAMA_FIELD] = response.data[0].VALUE;
              this.isUpdate = true;
            } else {
              // Reset All Data
              Object.assign(this.$data, this.initialData());
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

  },
  created() {
    var user = JSON.parse(this.$session.get('dataLogin'));
    this.NAMA_RUMAH_SAKIT = user.NAMA_RS;    
    this.USERNAME = user.username;    
    this.checkData(this.$data);
  }
}
</script>