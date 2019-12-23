<!-- Main content -->
<template>
<div class="content">
  <div class="row">        
    <div class="col-md-12">
      <div class="box box-info">
        <div class="box-header with-border">
          <div class="alert alert-info alert-dismissible">
            <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
            <h4>Tabel 16 - JUMLAH TENAGA PENUNJANG/PENDUUNG KESEHATAN DI FASILITAS KESEHATAN</h4>
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
                  <li class="active"><a href="#tab_1" data-toggle="tab"> Penduduk Berumur 15 Tahun Ke Atas</a></li>
                  <li><a href="#tab_2" data-toggle="tab">Penduduk Berumur 15 Tahun Ke Atas Yang Melek Huruf</a></li>
                  <li><a href="#tab_3" data-toggle="tab">Persentase Tidak Memiliki Ijazah SD </a></li>                  
                  <li><a href="#tab_4" data-toggle="tab">Persentase SD/MI </a></li>                  
                  <li><a href="#tab_5" data-toggle="tab">Persentase SMP/MTs </a></li>                  
                  <li><a href="#tab_6" data-toggle="tab">Persentase SMA/MA </a></li>                  
                  <li><a href="#tab_7" data-toggle="tab">Persentase SMK </a></li>                  
                  <li><a href="#tab_8" data-toggle="tab">Persentase Diploma 1 / Diploma 2 </a></li>                  
                  <li><a href="#tab_9" data-toggle="tab">Persentase Akademi / Diploma 3 </a></li>                  
                  <li><a href="#tab_10" data-toggle="tab">Persentase S1 / Diploma 4 </a></li>                  
                  <li><a href="#tab_11" data-toggle="tab">Persentase S2 / S3 </a></li>                  
                </ul>
                <div class="tab-content">
                  <div class="tab-pane active" id="tab_1">
                    <div class="box-body">
                      <div class="col-md-6">
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">Jumlah Laki-Laki</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="jmlPenduduk15_LP()" v-model="JUMLAH_LAKI_LAKI_PENDUDUK_BERUMUR_15_TAHUN_KE_ATAS" name="" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">Jumlah Perempuan</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="JUMLAH_PEREMPUAN_PENDUDUK_BERUMUR_15_TAHUN_KE_ATAS" name="" placeholder="" v-on:blur="jmlPenduduk15_LP()">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">Jumlah Laki-Laki + Perempuan</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="" v-model="JUMLAH_LAKI_LAKI_PEREMPUAN_PENDUDUK_BERUMUR_15_TAHUN_KE_ATAS" name="" placeholder="" disabled="">
                          </div>
                        </div>
                      </div>                      
                    </div>
                  </div> 
                  <div class="tab-pane" id="tab_2">
                    <div class="box-body">
                      <div class="col-md-6">
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">Jumlah Laki-Laki</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="jmlPenduduk15melekHuruf_LP()" v-model="JUMLAH_LAKI_LAKI_PENDUDUK_BERUMUR_15_TAHUN_KE_ATAS_YANG_MELEK_HURUF" name="" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">Jumlah Perempuan</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="JUMLAH_PEREMPUAN_PENDUDUK_BERUMUR_15_TAHUN_KE_ATAS_YANG_MELEK_HURUF" name="" placeholder="" v-on:blur="jmlPenduduk15melekHuruf_LP()">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">Jumlah Laki-Laki + Perempuan</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="" v-model="JUMLAH_LAKI_LAKI_PEREMPUAN_PENDUDUK_BERUMUR_15_TAHUN_KE_ATAS_YANG_MELEK_HURUF" name="" placeholder="" disabled="">
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">Persentase Laki-Laki</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="" v-model="PERSENTASE_LAKI_LAKI_PENDUDUK_BERUMUR_15_TAHUN_KE_ATAS_YANG_MELEK_HURUF" name="" placeholder="" disabled="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">Persentase Perempuan</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="" v-model="PERSENTASE_PEREMPUAN_PENDUDUK_BERUMUR_15_TAHUN_KE_ATAS_YANG_MELEK_HURUF" name="" placeholder="" disabled="">
                          </div>
                        </div>  
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">Persentase Laki-Laki + Perempuan</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="" v-model="PERSENTASE_LAKI_LAKI_PEREMPUAN_PENDUDUK_BERUMUR_15_TAHUN_KE_ATAS_YANG_MELEK_HURUF" name="" placeholder="" disabled="">
                          </div>
                        </div>                                                                                        
                      </div>
                    </div>
                  </div>
                  <div class="tab-pane" id="tab_3">
                    <div class="box-body">
                      <div class="col-md-6">
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">Jumlah Laki-Laki</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="persentaseTidakMemiliki_IjazahSD_LP()" v-model="JUMLAH_LAKI_LAKI_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_TIDAK_MEMILIKI_IJAZAH_SD" name="" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">Jumlah Perempuan</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="JUMLAH_PEREMPUAN_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_TIDAK_MEMILIKI_IJAZAH_SD" name="" placeholder="" v-on:blur="persentaseTidakMemiliki_IjazahSD_LP()">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">Jumlah Laki-Laki + Perempuan</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="" v-model="JUMLAH_LAKI_LAKI_PEREMPUAN_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_TIDAK_MEMILIKI_IJAZAH_SD" name="" placeholder="" disabled="">
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">Persentase Laki-Laki</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="" v-model="PERSENTASE_LAKI_LAKI_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_TIDAK_MEMILIKI_IJAZAH_SD" name="" placeholder="" disabled="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">Persentase Perempuan</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="" v-model="PERSENTASE_PEREMPUAN_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_TIDAK_MEMILIKI_IJAZAH_SD" name="" placeholder="" disabled="">
                          </div>
                        </div>  
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">Persentase Laki-Laki + Perempuan</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="" v-model="PERSENTASE_LAKI_LAKI_PEREMPUAN_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_TIDAK_MEMILIKI_IJAZAH_SD" name="" placeholder="" disabled="">
                          </div>
                        </div>                                                                                        
                      </div>
                    </div>
                  </div>
                  <div class="tab-pane" id="tab_4">  
                    <div class="box-body">                      
                      <div class="col-md-6">
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">Jumlah Laki-Laki</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="persentase_IjazahSD_LP()" v-model="JUMLAH_LAKI_LAKI_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_SD_MI" name="" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">Jumlah Perempuan</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="JUMLAH_PEREMPUAN_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_SD_MI" name="" placeholder="" v-on:blur="persentase_IjazahSD_LP()">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">Jumlah Laki-Laki + Perempuan</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="" v-model="JUMLAH_LAKI_LAKI_PEREMPUAN_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_SD_MI" name="" placeholder="" disabled="">
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">Persentase Laki-Laki</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="" v-model="PERSENTASE_LAKI_LAKI_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_SD_MI" name="" placeholder="" disabled="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">Persentase Perempuan</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="" v-model="PERSENTASE_PEREMPUAN_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_SD_MI" name="" placeholder="" disabled="">
                          </div>
                        </div>  
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">Persentase Laki-Laki + Perempuan</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="" v-model="PERSENTASE_LAKI_LAKI_PEREMPUAN_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_SD_MI" name="" placeholder="" disabled="">
                          </div>
                        </div>                                                                                        
                      </div>
                    </div>
                  </div>
                  <div class="tab-pane" id="tab_5">  
                    <div class="box-body">                      
                      <div class="col-md-6">
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">Jumlah Laki-Laki</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="persentase_IjazahSMP_LP()" v-model="JUMLAH_LAKI_LAKI_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_SMP_MTS" name="" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">Jumlah Perempuan</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="JUMLAH_PEREMPUAN_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_SMP_MTS" name="" placeholder="" v-on:blur="persentase_IjazahSMP_LP()">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">Jumlah Laki-Laki + Perempuan</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="" v-model="JUMLAH_LAKI_LAKI_PEREMPUAN_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_SMP_MTS" name="" placeholder="" disabled="">
                          </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">Persentase Laki-Laki</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="" v-model="PERSENTASE_LAKI_LAKI_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_SMP_MTS" name="" placeholder="" disabled="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">Persentase Perempuan</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="" v-model="PERSENTASE_PEREMPUAN_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_SMP_MTS" name="" placeholder="" disabled="">
                          </div>
                        </div>  
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">Persentase Laki-Laki + Perempuan</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="" v-model="PERSENTASE_LAKI_LAKI_PEREMPUAN_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_SMP_MTS" name="" placeholder="" disabled="">
                          </div>
                        </div>                                                                                        
                    </div>
                    </div>
                  </div>
                  <div class="tab-pane" id="tab_6">  
                    <div class="box-body">                      
                      <div class="col-md-6">
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">Jumlah Laki-Laki</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="" v-model="JUMLAH_LAKI_LAKI_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_SMA_MA" name="" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">Jumlah Perempuan</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="JUMLAH_PEREMPUAN_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_SMA_MA" name="" placeholder="" v-on:blur="persentase_IjazahSMA_LP()">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">Jumlah Laki-Laki + Perempuan</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="persentase_IjazahSMA_LP()" v-model="JUMLAH_LAKI_LAKI_PEREMPUAN_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_SMA_MA" name="" placeholder="" disabled="">
                          </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">Persentase Laki-Laki</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="" v-model="PERSENTASE_LAKI_LAKI_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_SMA_MA" name="" placeholder="" disabled="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">Persentase Perempuan</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="" v-model="PERSENTASE_PEREMPUAN_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_SMA_MA" name="" placeholder="" disabled="">
                          </div>
                        </div>  
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">Persentase Laki-Laki + Perempuan</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="" v-model="PERSENTASE_LAKI_LAKI_PEREMPUAN_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_SMA_MA" name="" placeholder="" disabled="">
                          </div>
                        </div>                                                                                        
                    </div>
                    </div>
                  </div> 
                  <div class="tab-pane" id="tab_7">  
                    <div class="box-body">                      
                      <div class="col-md-6">
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">Jumlah Laki-Laki</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="persentase_IjazahSMK_LP()" v-model="JUMLAH_LAKI_LAKI_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_SEKOLAH_MENENGAH_KEJURUAN" name="" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">Jumlah Perempuan</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="JUMLAH_PEREMPUAN_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_SEKOLAH_MENENGAH_KEJURUAN" name="" placeholder="" v-on:blur="persentase_IjazahSMK_LP()">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">Jumlah Laki-Laki + Perempuan</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="" v-model="JUMLAH_LAKI_LAKI_PEREMPUAN_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_SEKOLAH_MENENGAH_KEJURUAN" name="" placeholder="" disabled="">
                          </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">Persentase Laki-Laki</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="" v-model="PERSENTASE_LAKI_LAKI_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_SEKOLAH_MENENGAH_KEJURUAN" name="" placeholder="" disabled="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">Persentase Perempuan</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="" v-model="PERSENTASE_PEREMPUAN_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_SEKOLAH_MENENGAH_KEJURUAN" name="" placeholder="" disabled="">
                          </div>
                        </div>  
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">Persentase Laki-Laki + Perempuan</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="" v-model="PERSENTASE_LAKI_LAKI_PEREMPUAN_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_SEKOLAH_MENENGAH_KEJURUAN" name="" placeholder="" disabled="">
                          </div>
                        </div>                                                                                        
                    </div>
                    </div>
                  </div>
                  <div class="tab-pane" id="tab_8">  
                    <div class="box-body">                      
                      <div class="col-md-6">
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">Jumlah Laki-Laki</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="persentase_IjazahD1D3_LP()" v-model="JUMLAH_LAKI_LAKI_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_DIPLOMA_1_DIPLOMA_3" name="" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">Jumlah Perempuan</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="JUMLAH_PEREMPUAN_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_DIPLOMA_1_DIPLOMA_3" name="" placeholder="" v-on:blur="persentase_IjazahD1D3_LP()">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">Jumlah Laki-Laki + Perempuan</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="" v-model="JUMLAH_LAKI_LAKI_PEREMPUAN_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_DIPLOMA_1_DIPLOMA_3" name="" placeholder="" disabled="">
                          </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">Persentase Laki-Laki</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="" v-model="PERSENTASE_LAKI_LAKI_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_DIPLOMA_1_DIPLOMA_3" name="" placeholder="" disabled="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">Persentase Perempuan</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="" v-model="PERSENTASE_PEREMPUAN_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_DIPLOMA_1_DIPLOMA_3" name="" placeholder="" disabled="">
                          </div>
                        </div>  
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">Persentase Laki-Laki + Perempuan</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="" v-model="PERSENTASE_LAKI_LAKI_PEREMPUAN_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_DIPLOMA_1_DIPLOMA_3" name="" placeholder="" disabled="">
                          </div>
                        </div>                                                                                        
                    </div>
                    </div>
                  </div>
                  <div class="tab-pane" id="tab_9">  
                    <div class="box-body">                      
                      <div class="col-md-6">
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">Jumlah Laki-Laki</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="persentase_IjazahAkademiD3_LP()" v-model="JUMLAH_LAKI_LAKI_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_AKADEMI_DIPLOMA_3" name="" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">Jumlah Perempuan</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="JUMLAH_PEREMPUAN_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_AKADEMI_DIPLOMA_3" name="" placeholder="" v-on:blur="persentase_IjazahAkademiD3_LP()">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">Jumlah Laki-Laki + Perempuan</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="" v-model="JUMLAH_LAKI_LAKI_PEREMPUAN_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_AKADEMI_DIPLOMA_3" name="" placeholder="" disabled="">
                          </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">Persentase Laki-Laki</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="" v-model="PERSENTASE_LAKI_LAKI_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_AKADEMI_DIPLOMA_3" name="" placeholder="" disabled="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">Persentase Perempuan</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="" v-model="PERSENTASE_PEREMPUAN_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_AKADEMI_DIPLOMA_3" name="" placeholder="" disabled="">
                          </div>
                        </div>  
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">Persentase Laki-Laki + Perempuan</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="" v-model="PERSENTASE_LAKI_LAKI_PEREMPUAN_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_AKADEMI_DIPLOMA_3" name="" placeholder="" disabled="">
                          </div>
                        </div>                                                                                        
                    </div>
                    </div>
                  </div>
                  <div class="tab-pane" id="tab_10">  
                    <div class="box-body">                      
                      <div class="col-md-6">
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">Jumlah Laki-Laki</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="persentase_IjazahS1D4()" v-model="JUMLAH_LAKI_LAKI_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_S1_DIPLOMA_4" name="" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">Jumlah Perempuan</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="JUMLAH_PEREMPUAN_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_S1_DIPLOMA_4" name="" placeholder="" v-on:blur="persentase_IjazahS1D4()">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">Jumlah Laki-Laki + Perempuan</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="" v-model="JUMLAH_LAKI_LAKI_PEREMPUAN_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_S1_DIPLOMA_4" name="" placeholder="" disabled="">
                          </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">Persentase Laki-Laki</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="" v-model="PERSENTASE_LAKI_LAKI_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_S1_DIPLOMA_4" name="" placeholder="" disabled="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">Persentase Perempuan</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="" v-model="PERSENTASE_PEREMPUAN_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_S1_DIPLOMA_4" name="" placeholder="" disabled="">
                          </div>
                        </div>  
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">Persentase Laki-Laki + Perempuan</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="" v-model="PERSENTASE_LAKI_LAKI_PEREMPUAN_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_S1_DIPLOMA_4" name="" placeholder="" disabled="">
                          </div>
                        </div>                                                                                        
                    </div>
                    </div>
                  </div>
                  <div class="tab-pane" id="tab_11">  
                    <div class="box-body">                      
                      <div class="col-md-6">
                          <div class="form-group">
                            <label for="" class="col-sm-6 control-label">Jumlah Laki-Laki</label>
                            <div class="col-sm-4">
                              <input type="text" class="form-control" id="" v-on:blur="persentase_IjazahS1S2()" v-model="JUMLAH_LAKI_LAKI_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_S2_S3" name="" placeholder="">
                            </div>
                          </div>
                          <div class="form-group">
                            <label for="" class="col-sm-6 control-label">Jumlah Perempuan</label>
                            <div class="col-sm-4">
                              <input type="text" class="form-control" id="" v-model="JUMLAH_PEREMPUAN_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_S2_S3" name="" placeholder="" v-on:blur="persentase_IjazahS1S2()">
                            </div>
                          </div>
                          <div class="form-group">
                            <label for="" class="col-sm-6 control-label">Jumlah Laki-Laki + Perempuan</label>
                            <div class="col-sm-4">
                              <input type="text" class="form-control" id="" v-on:blur="" v-model="JUMLAH_LAKI_LAKI_PEREMPUAN_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_S2_S3" name="" placeholder="" disabled="">
                            </div>
                          </div>
                      </div>
                      <div class="col-md-6">
                          <div class="form-group">
                            <label for="" class="col-sm-6 control-label">Persentase Laki-Laki</label>
                            <div class="col-sm-4">
                              <input type="text" class="form-control" id="" v-on:blur="" v-model="PERSENTASE_LAKI_LAKI_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_S2_S3" name="" placeholder="" disabled="">
                            </div>
                          </div>
                          <div class="form-group">
                            <label for="" class="col-sm-6 control-label">Persentase Perempuan</label>
                            <div class="col-sm-4">
                              <input type="text" class="form-control" id="" v-on:blur="" v-model="PERSENTASE_PEREMPUAN_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_S2_S3" name="" placeholder="" disabled="">
                            </div>
                          </div>  
                          <div class="form-group">
                            <label for="" class="col-sm-6 control-label">Persentase Laki-Laki + Perempuan</label>
                            <div class="col-sm-4">
                              <input type="text" class="form-control" id="" v-on:blur="" v-model="PERSENTASE_LAKI_LAKI_PEREMPUAN_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_S2_S3" name="" placeholder="" disabled="">
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
            <router-link to="/table3"><a class="btn btn-success btn-md"><i class="fa fa-fw fa-arrow-left"></i> Kembali</a></router-link>
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
import { mapGetters, mapActions } from 'vuex'
export default {
  computed: {
    ...mapGetters([
      'currentUser'
    ])
  },    
  data() {
    return {
      USERNAME: '',
      PILIH_BULAN: '1',
      PILIH_TAHUN: '2019',
      LEVEL: '',
      NAMA_PKM: '',
      ID_PUSKESMAS: '',
      ID_DESA: '',
      listDesa: [],
      JUMLAH_LAKI_LAKI_PENDUDUK_BERUMUR_15_TAHUN_KE_ATAS: 0,
      JUMLAH_LAKI_LAKI_PENDUDUK_BERUMUR_15_TAHUN_KE_ATAS_YANG_MELEK_HURUF: 0,
      JUMLAH_LAKI_LAKI_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_TIDAK_MEMILIKI_IJAZAH_SD: 0,
      JUMLAH_LAKI_LAKI_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_SD_MI: 0,
      JUMLAH_LAKI_LAKI_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_SMP_MTS: 0,
      JUMLAH_LAKI_LAKI_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_SMA_MA: 0,
      JUMLAH_LAKI_LAKI_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_SEKOLAH_MENENGAH_KEJURUAN: 0,
      JUMLAH_LAKI_LAKI_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_DIPLOMA_1_DIPLOMA_3: 0,
      JUMLAH_LAKI_LAKI_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_AKADEMI_DIPLOMA_3: 0,
      JUMLAH_LAKI_LAKI_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_S1_DIPLOMA_4: 0,
      JUMLAH_LAKI_LAKI_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_S2_S3: 0,
      JUMLAH_PEREMPUAN_PENDUDUK_BERUMUR_15_TAHUN_KE_ATAS: 0,
      JUMLAH_PEREMPUAN_PENDUDUK_BERUMUR_15_TAHUN_KE_ATAS_YANG_MELEK_HURUF: 0,
      JUMLAH_PEREMPUAN_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_TIDAK_MEMILIKI_IJAZAH_SD: 0,
      JUMLAH_PEREMPUAN_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_SD_MI: 0,
      JUMLAH_PEREMPUAN_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_SMP_MTS: 0,
      JUMLAH_PEREMPUAN_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_SMA_MA: 0,
      JUMLAH_PEREMPUAN_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_SEKOLAH_MENENGAH_KEJURUAN: 0,
      JUMLAH_PEREMPUAN_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_DIPLOMA_1_DIPLOMA_3: 0,
      JUMLAH_PEREMPUAN_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_AKADEMI_DIPLOMA_3: 0,
      JUMLAH_PEREMPUAN_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_S1_DIPLOMA_4: 0,
      JUMLAH_PEREMPUAN_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_S2_S3: 0,
      JUMLAH_LAKI_LAKI_PEREMPUAN_PENDUDUK_BERUMUR_15_TAHUN_KE_ATAS: 0,
      JUMLAH_LAKI_LAKI_PEREMPUAN_PENDUDUK_BERUMUR_15_TAHUN_KE_ATAS_YANG_MELEK_HURUF: 0,
      JUMLAH_LAKI_LAKI_PEREMPUAN_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_TIDAK_MEMILIKI_IJAZAH_SD: 0,
      JUMLAH_LAKI_LAKI_PEREMPUAN_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_SD_MI: 0,
      JUMLAH_LAKI_LAKI_PEREMPUAN_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_SMP_MTS: 0,
      JUMLAH_LAKI_LAKI_PEREMPUAN_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_SMA_MA: 0,
      JUMLAH_LAKI_LAKI_PEREMPUAN_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_SEKOLAH_MENENGAH_KEJURUAN: 0,
      JUMLAH_LAKI_LAKI_PEREMPUAN_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_DIPLOMA_1_DIPLOMA_3: 0,
      JUMLAH_LAKI_LAKI_PEREMPUAN_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_AKADEMI_DIPLOMA_3: 0,
      JUMLAH_LAKI_LAKI_PEREMPUAN_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_S1_DIPLOMA_4: 0,
      JUMLAH_LAKI_LAKI_PEREMPUAN_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_S2_S3: 0,
      PERSENTASE_LAKI_LAKI_PENDUDUK_BERUMUR_15_TAHUN_KE_ATAS: 0,
      PERSENTASE_LAKI_LAKI_PENDUDUK_BERUMUR_15_TAHUN_KE_ATAS_YANG_MELEK_HURUF: 0,
      PERSENTASE_LAKI_LAKI_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_TIDAK_MEMILIKI_IJAZAH_SD: 0,
      PERSENTASE_LAKI_LAKI_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_SD_MI: 0,
      PERSENTASE_LAKI_LAKI_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_SMP_MTS: 0,
      PERSENTASE_LAKI_LAKI_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_SMA_MA: 0,
      PERSENTASE_LAKI_LAKI_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_SEKOLAH_MENENGAH_KEJURUAN: 0,
      PERSENTASE_LAKI_LAKI_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_DIPLOMA_1_DIPLOMA_3: 0,
      PERSENTASE_LAKI_LAKI_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_AKADEMI_DIPLOMA_3: 0,
      PERSENTASE_LAKI_LAKI_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_S1_DIPLOMA_4: 0,
      PERSENTASE_LAKI_LAKI_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_S2_S3: 0,
      PERSENTASE_PEREMPUAN_PENDUDUK_BERUMUR_15_TAHUN_KE_ATAS: 0,
      PERSENTASE_PEREMPUAN_PENDUDUK_BERUMUR_15_TAHUN_KE_ATAS_YANG_MELEK_HURUF: 0,
      PERSENTASE_PEREMPUAN_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_TIDAK_MEMILIKI_IJAZAH_SD: 0,
      PERSENTASE_PEREMPUAN_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_SD_MI: 0,
      PERSENTASE_PEREMPUAN_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_SMP_MTS: 0,
      PERSENTASE_PEREMPUAN_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_SMA_MA: 0,
      PERSENTASE_PEREMPUAN_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_SEKOLAH_MENENGAH_KEJURUAN: 0,
      PERSENTASE_PEREMPUAN_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_DIPLOMA_1_DIPLOMA_3: 0,
      PERSENTASE_PEREMPUAN_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_AKADEMI_DIPLOMA_3: 0,
      PERSENTASE_PEREMPUAN_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_S1_DIPLOMA_4: 0,
      PERSENTASE_PEREMPUAN_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_S2_S3: 0,
      PERSENTASE_LAKI_LAKI_PEREMPUAN_PENDUDUK_BERUMUR_15_TAHUN_KE_ATAS: 0,
      PERSENTASE_LAKI_LAKI_PEREMPUAN_PENDUDUK_BERUMUR_15_TAHUN_KE_ATAS_YANG_MELEK_HURUF: 0,
      PERSENTASE_LAKI_LAKI_PEREMPUAN_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_TIDAK_MEMILIKI_IJAZAH_SD: 0,
      PERSENTASE_LAKI_LAKI_PEREMPUAN_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_SD_MI: 0,
      PERSENTASE_LAKI_LAKI_PEREMPUAN_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_SMP_MTS: 0,
      PERSENTASE_LAKI_LAKI_PEREMPUAN_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_SMA_MA: 0,
      PERSENTASE_LAKI_LAKI_PEREMPUAN_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_SEKOLAH_MENENGAH_KEJURUAN: 0,
      PERSENTASE_LAKI_LAKI_PEREMPUAN_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_DIPLOMA_1_DIPLOMA_3: 0,
      PERSENTASE_LAKI_LAKI_PEREMPUAN_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_AKADEMI_DIPLOMA_3: 0,
      PERSENTASE_LAKI_LAKI_PEREMPUAN_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_S1_DIPLOMA_4: 0,
      PERSENTASE_LAKI_LAKI_PEREMPUAN_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_S2_S3: 0,
      isUpdate: false
    }
  },  
  name: 'Table64',
  components: {},
  methods: {
    initialData: function() {
      return {
        JUMLAH_LAKI_LAKI_PENDUDUK_BERUMUR_15_TAHUN_KE_ATAS: 0,
        JUMLAH_LAKI_LAKI_PENDUDUK_BERUMUR_15_TAHUN_KE_ATAS_YANG_MELEK_HURUF: 0,
        JUMLAH_LAKI_LAKI_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_TIDAK_MEMILIKI_IJAZAH_SD: 0,
        JUMLAH_LAKI_LAKI_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_SD_MI: 0,
        JUMLAH_LAKI_LAKI_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_SMP_MTS: 0,
        JUMLAH_LAKI_LAKI_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_SMA_MA: 0,
        JUMLAH_LAKI_LAKI_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_SEKOLAH_MENENGAH_KEJURUAN: 0,
        JUMLAH_LAKI_LAKI_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_DIPLOMA_1_DIPLOMA_3: 0,
        JUMLAH_LAKI_LAKI_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_AKADEMI_DIPLOMA_3: 0,
        JUMLAH_LAKI_LAKI_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_S1_DIPLOMA_4: 0,
        JUMLAH_LAKI_LAKI_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_S2_S3: 0,
        JUMLAH_PEREMPUAN_PENDUDUK_BERUMUR_15_TAHUN_KE_ATAS: 0,
        JUMLAH_PEREMPUAN_PENDUDUK_BERUMUR_15_TAHUN_KE_ATAS_YANG_MELEK_HURUF: 0,
        JUMLAH_PEREMPUAN_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_TIDAK_MEMILIKI_IJAZAH_SD: 0,
        JUMLAH_PEREMPUAN_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_SD_MI: 0,
        JUMLAH_PEREMPUAN_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_SMP_MTS: 0,
        JUMLAH_PEREMPUAN_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_SMA_MA: 0,
        JUMLAH_PEREMPUAN_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_SEKOLAH_MENENGAH_KEJURUAN: 0,
        JUMLAH_PEREMPUAN_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_DIPLOMA_1_DIPLOMA_3: 0,
        JUMLAH_PEREMPUAN_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_AKADEMI_DIPLOMA_3: 0,
        JUMLAH_PEREMPUAN_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_S1_DIPLOMA_4: 0,
        JUMLAH_PEREMPUAN_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_S2_S3: 0,
        JUMLAH_LAKI_LAKI_PEREMPUAN_PENDUDUK_BERUMUR_15_TAHUN_KE_ATAS: 0,
        JUMLAH_LAKI_LAKI_PEREMPUAN_PENDUDUK_BERUMUR_15_TAHUN_KE_ATAS_YANG_MELEK_HURUF: 0,
        JUMLAH_LAKI_LAKI_PEREMPUAN_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_TIDAK_MEMILIKI_IJAZAH_SD: 0,
        JUMLAH_LAKI_LAKI_PEREMPUAN_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_SD_MI: 0,
        JUMLAH_LAKI_LAKI_PEREMPUAN_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_SMP_MTS: 0,
        JUMLAH_LAKI_LAKI_PEREMPUAN_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_SMA_MA: 0,
        JUMLAH_LAKI_LAKI_PEREMPUAN_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_SEKOLAH_MENENGAH_KEJURUAN: 0,
        JUMLAH_LAKI_LAKI_PEREMPUAN_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_DIPLOMA_1_DIPLOMA_3: 0,
        JUMLAH_LAKI_LAKI_PEREMPUAN_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_AKADEMI_DIPLOMA_3: 0,
        JUMLAH_LAKI_LAKI_PEREMPUAN_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_S1_DIPLOMA_4: 0,
        JUMLAH_LAKI_LAKI_PEREMPUAN_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_S2_S3: 0,
        PERSENTASE_LAKI_LAKI_PENDUDUK_BERUMUR_15_TAHUN_KE_ATAS: 0,
        PERSENTASE_LAKI_LAKI_PENDUDUK_BERUMUR_15_TAHUN_KE_ATAS_YANG_MELEK_HURUF: 0,
        PERSENTASE_LAKI_LAKI_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_TIDAK_MEMILIKI_IJAZAH_SD: 0,
        PERSENTASE_LAKI_LAKI_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_SD_MI: 0,
        PERSENTASE_LAKI_LAKI_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_SMP_MTS: 0,
        PERSENTASE_LAKI_LAKI_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_SMA_MA: 0,
        PERSENTASE_LAKI_LAKI_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_SEKOLAH_MENENGAH_KEJURUAN: 0,
        PERSENTASE_LAKI_LAKI_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_DIPLOMA_1_DIPLOMA_3: 0,
        PERSENTASE_LAKI_LAKI_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_AKADEMI_DIPLOMA_3: 0,
        PERSENTASE_LAKI_LAKI_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_S1_DIPLOMA_4: 0,
        PERSENTASE_LAKI_LAKI_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_S2_S3: 0,
        PERSENTASE_PEREMPUAN_PENDUDUK_BERUMUR_15_TAHUN_KE_ATAS: 0,
        PERSENTASE_PEREMPUAN_PENDUDUK_BERUMUR_15_TAHUN_KE_ATAS_YANG_MELEK_HURUF: 0,
        PERSENTASE_PEREMPUAN_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_TIDAK_MEMILIKI_IJAZAH_SD: 0,
        PERSENTASE_PEREMPUAN_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_SD_MI: 0,
        PERSENTASE_PEREMPUAN_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_SMP_MTS: 0,
        PERSENTASE_PEREMPUAN_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_SMA_MA: 0,
        PERSENTASE_PEREMPUAN_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_SEKOLAH_MENENGAH_KEJURUAN: 0,
        PERSENTASE_PEREMPUAN_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_DIPLOMA_1_DIPLOMA_3: 0,
        PERSENTASE_PEREMPUAN_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_AKADEMI_DIPLOMA_3: 0,
        PERSENTASE_PEREMPUAN_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_S1_DIPLOMA_4: 0,
        PERSENTASE_PEREMPUAN_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_S2_S3: 0,
        PERSENTASE_LAKI_LAKI_PEREMPUAN_PENDUDUK_BERUMUR_15_TAHUN_KE_ATAS: 0,
        PERSENTASE_LAKI_LAKI_PEREMPUAN_PENDUDUK_BERUMUR_15_TAHUN_KE_ATAS_YANG_MELEK_HURUF: 0,
        PERSENTASE_LAKI_LAKI_PEREMPUAN_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_TIDAK_MEMILIKI_IJAZAH_SD: 0,
        PERSENTASE_LAKI_LAKI_PEREMPUAN_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_SD_MI: 0,
        PERSENTASE_LAKI_LAKI_PEREMPUAN_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_SMP_MTS: 0,
        PERSENTASE_LAKI_LAKI_PEREMPUAN_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_SMA_MA: 0,
        PERSENTASE_LAKI_LAKI_PEREMPUAN_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_SEKOLAH_MENENGAH_KEJURUAN: 0,
        PERSENTASE_LAKI_LAKI_PEREMPUAN_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_DIPLOMA_1_DIPLOMA_3: 0,
        PERSENTASE_LAKI_LAKI_PEREMPUAN_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_AKADEMI_DIPLOMA_3: 0,
        PERSENTASE_LAKI_LAKI_PEREMPUAN_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_S1_DIPLOMA_4: 0,
        PERSENTASE_LAKI_LAKI_PEREMPUAN_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_S2_S3: 0,          
      }
    },
    masuk: function() {
        console.log('tombol masuk ditekan')
    },
    jmlPenduduk15_LP: function () {
      this.JUMLAH_LAKI_LAKI_PEREMPUAN_PENDUDUK_BERUMUR_15_TAHUN_KE_ATAS = 
        parseInt((this.JUMLAH_LAKI_LAKI_PENDUDUK_BERUMUR_15_TAHUN_KE_ATAS == '') ? 0 : this.JUMLAH_LAKI_LAKI_PENDUDUK_BERUMUR_15_TAHUN_KE_ATAS) +
        parseInt((this.JUMLAH_PEREMPUAN_PENDUDUK_BERUMUR_15_TAHUN_KE_ATAS == '') ? 0 : this.JUMLAH_PEREMPUAN_PENDUDUK_BERUMUR_15_TAHUN_KE_ATAS);       
    },
    jmlPenduduk15melekHuruf_LP: function () {
      this.JUMLAH_LAKI_LAKI_PEREMPUAN_PENDUDUK_BERUMUR_15_TAHUN_KE_ATAS_YANG_MELEK_HURUF = 
        parseInt((this.JUMLAH_LAKI_LAKI_PENDUDUK_BERUMUR_15_TAHUN_KE_ATAS_YANG_MELEK_HURUF == '') ? 0 : this.JUMLAH_LAKI_LAKI_PENDUDUK_BERUMUR_15_TAHUN_KE_ATAS_YANG_MELEK_HURUF) +
        parseInt((this.JUMLAH_PEREMPUAN_PENDUDUK_BERUMUR_15_TAHUN_KE_ATAS_YANG_MELEK_HURUF == '') ? 0 : this.JUMLAH_PEREMPUAN_PENDUDUK_BERUMUR_15_TAHUN_KE_ATAS_YANG_MELEK_HURUF); 

      this.PERSENTASE_LAKI_LAKI_PENDUDUK_BERUMUR_15_TAHUN_KE_ATAS_YANG_MELEK_HURUF = 
        parseInt((this.JUMLAH_LAKI_LAKI_PENDUDUK_BERUMUR_15_TAHUN_KE_ATAS_YANG_MELEK_HURUF == '') ? 0 : this.JUMLAH_LAKI_LAKI_PENDUDUK_BERUMUR_15_TAHUN_KE_ATAS_YANG_MELEK_HURUF) /
        parseInt((this.JUMLAH_LAKI_LAKI_PENDUDUK_BERUMUR_15_TAHUN_KE_ATAS == '') ? 0 : this.JUMLAH_LAKI_LAKI_PENDUDUK_BERUMUR_15_TAHUN_KE_ATAS) * 100;  

      this.PERSENTASE_PEREMPUAN_PENDUDUK_BERUMUR_15_TAHUN_KE_ATAS_YANG_MELEK_HURUF = 
        parseInt((this.JUMLAH_PEREMPUAN_PENDUDUK_BERUMUR_15_TAHUN_KE_ATAS_YANG_MELEK_HURUF == '') ? 0 : this.JUMLAH_LAKI_LAKI_PENDUDUK_BERUMUR_15_TAHUN_KE_ATAS_YANG_MELEK_HURUF) /
        parseInt((this.JUMLAH_PEREMPUAN_PENDUDUK_BERUMUR_15_TAHUN_KE_ATAS == '') ? 0 : this.JUMLAH_LAKI_LAKI_PENDUDUK_BERUMUR_15_TAHUN_KE_ATAS) * 100;   

      this.PERSENTASE_LAKI_LAKI_PEREMPUAN_PENDUDUK_BERUMUR_15_TAHUN_KE_ATAS_YANG_MELEK_HURUF = 
        parseInt((this.JUMLAH_LAKI_LAKI_PEREMPUAN_PENDUDUK_BERUMUR_15_TAHUN_KE_ATAS_YANG_MELEK_HURUF == '') ? 0 : this.JUMLAH_LAKI_LAKI_PEREMPUAN_PENDUDUK_BERUMUR_15_TAHUN_KE_ATAS_YANG_MELEK_HURUF) /
        parseInt((this.JUMLAH_LAKI_LAKI_PEREMPUAN_PENDUDUK_BERUMUR_15_TAHUN_KE_ATAS == '') ? 0 : this.JUMLAH_LAKI_LAKI_PEREMPUAN_PENDUDUK_BERUMUR_15_TAHUN_KE_ATAS) * 100;       
    }, 
    persentaseTidakMemiliki_IjazahSD_LP: function () {
      this.JUMLAH_LAKI_LAKI_PEREMPUAN_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_TIDAK_MEMILIKI_IJAZAH_SD = 
        parseInt((this.JUMLAH_LAKI_LAKI_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_TIDAK_MEMILIKI_IJAZAH_SD == '') ? 0 : this.JUMLAH_LAKI_LAKI_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_TIDAK_MEMILIKI_IJAZAH_SD) +
        parseInt((this.JUMLAH_PEREMPUAN_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_TIDAK_MEMILIKI_IJAZAH_SD == '') ? 0 : this.JUMLAH_PEREMPUAN_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_TIDAK_MEMILIKI_IJAZAH_SD); 

      this.PERSENTASE_LAKI_LAKI_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_TIDAK_MEMILIKI_IJAZAH_SD = 
        parseInt((this.JUMLAH_LAKI_LAKI_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_TIDAK_MEMILIKI_IJAZAH_SD == '') ? 0 : this.JUMLAH_LAKI_LAKI_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_TIDAK_MEMILIKI_IJAZAH_SD) /
        parseInt((this.JUMLAH_LAKI_LAKI_PENDUDUK_BERUMUR_15_TAHUN_KE_ATAS == '') ? 0 : this.JUMLAH_LAKI_LAKI_PENDUDUK_BERUMUR_15_TAHUN_KE_ATAS) * 100;  

      this.PERSENTASE_PEREMPUAN_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_TIDAK_MEMILIKI_IJAZAH_SD = 
        parseInt((this.JUMLAH_PEREMPUAN_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_TIDAK_MEMILIKI_IJAZAH_SD == '') ? 0 : this.JUMLAH_PEREMPUAN_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_TIDAK_MEMILIKI_IJAZAH_SD) /
        parseInt((this.JUMLAH_PEREMPUAN_PENDUDUK_BERUMUR_15_TAHUN_KE_ATAS == '') ? 0 : this.JUMLAH_LAKI_LAKI_PENDUDUK_BERUMUR_15_TAHUN_KE_ATAS) * 100;   

      this.PERSENTASE_LAKI_LAKI_PEREMPUAN_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_TIDAK_MEMILIKI_IJAZAH_SD = 
        parseInt((this.JUMLAH_LAKI_LAKI_PEREMPUAN_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_TIDAK_MEMILIKI_IJAZAH_SD == '') ? 0 : this.JUMLAH_LAKI_LAKI_PEREMPUAN_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_TIDAK_MEMILIKI_IJAZAH_SD) /
        parseInt((this.JUMLAH_LAKI_LAKI_PEREMPUAN_PENDUDUK_BERUMUR_15_TAHUN_KE_ATAS == '') ? 0 : this.JUMLAH_LAKI_LAKI_PEREMPUAN_PENDUDUK_BERUMUR_15_TAHUN_KE_ATAS) * 100;         
    }, 
    persentase_IjazahSD_LP: function () {
      this.JUMLAH_LAKI_LAKI_PEREMPUAN_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_SD_MI = 
        parseInt((this.JUMLAH_LAKI_LAKI_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_SD_MI == '') ? 0 : this.JUMLAH_LAKI_LAKI_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_SD_MI) +
        parseInt((this.JUMLAH_PEREMPUAN_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_SD_MI == '') ? 0 : this.JUMLAH_PEREMPUAN_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_SD_MI); 

      this.PERSENTASE_LAKI_LAKI_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_SD_MI = 
        parseInt((this.JUMLAH_LAKI_LAKI_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_SD_MI == '') ? 0 : this.JUMLAH_LAKI_LAKI_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_SD_MI) /
        parseInt((this.JUMLAH_LAKI_LAKI_PENDUDUK_BERUMUR_15_TAHUN_KE_ATAS == '') ? 0 : this.JUMLAH_LAKI_LAKI_PENDUDUK_BERUMUR_15_TAHUN_KE_ATAS) * 100;  

      this.PERSENTASE_PEREMPUAN_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_SD_MI = 
        parseInt((this.JUMLAH_PEREMPUAN_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_SD_MI == '') ? 0 : this.JUMLAH_PEREMPUAN_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_SD_MI) /
        parseInt((this.JUMLAH_PEREMPUAN_PENDUDUK_BERUMUR_15_TAHUN_KE_ATAS == '') ? 0 : this.JUMLAH_LAKI_LAKI_PENDUDUK_BERUMUR_15_TAHUN_KE_ATAS) * 100;   

      this.PERSENTASE_LAKI_LAKI_PEREMPUAN_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_SD_MI = 
        parseInt((this.JUMLAH_LAKI_LAKI_PEREMPUAN_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_SD_MI == '') ? 0 : this.JUMLAH_LAKI_LAKI_PEREMPUAN_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_SD_MI) /
        parseInt((this.JUMLAH_LAKI_LAKI_PEREMPUAN_PENDUDUK_BERUMUR_15_TAHUN_KE_ATAS == '') ? 0 : this.JUMLAH_LAKI_LAKI_PEREMPUAN_PENDUDUK_BERUMUR_15_TAHUN_KE_ATAS) * 100;         
    }, 
    persentase_IjazahSMP_LP: function () {
      this.JUMLAH_LAKI_LAKI_PEREMPUAN_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_SMP_MTS = 
        parseInt((this.JUMLAH_LAKI_LAKI_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_SMP_MTS == '') ? 0 : this.JUMLAH_LAKI_LAKI_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_SMP_MTS) +
        parseInt((this.JUMLAH_PEREMPUAN_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_SMP_MTS == '') ? 0 : this.JUMLAH_PEREMPUAN_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_SMP_MTS); 

      this.PERSENTASE_LAKI_LAKI_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_SMP_MTS = 
        parseInt((this.JUMLAH_LAKI_LAKI_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_SMP_MTS == '') ? 0 : this.JUMLAH_LAKI_LAKI_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_SMP_MTS) /
        parseInt((this.JUMLAH_LAKI_LAKI_PENDUDUK_BERUMUR_15_TAHUN_KE_ATAS == '') ? 0 : this.JUMLAH_LAKI_LAKI_PENDUDUK_BERUMUR_15_TAHUN_KE_ATAS) * 100;  

      this.PERSENTASE_PEREMPUAN_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_SMP_MTS = 
        parseInt((this.JUMLAH_PEREMPUAN_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_SMP_MTS == '') ? 0 : this.JUMLAH_PEREMPUAN_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_SMP_MTS) /
        parseInt((this.JUMLAH_PEREMPUAN_PENDUDUK_BERUMUR_15_TAHUN_KE_ATAS == '') ? 0 : this.JUMLAH_LAKI_LAKI_PENDUDUK_BERUMUR_15_TAHUN_KE_ATAS) * 100;   

      this.PERSENTASE_LAKI_LAKI_PEREMPUAN_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_SMP_MTS = 
        parseInt((this.JUMLAH_LAKI_LAKI_PEREMPUAN_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_SMP_MTS == '') ? 0 : this.JUMLAH_LAKI_LAKI_PEREMPUAN_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_SMP_MTS) /
        parseInt((this.JUMLAH_LAKI_LAKI_PEREMPUAN_PENDUDUK_BERUMUR_15_TAHUN_KE_ATAS == '') ? 0 : this.JUMLAH_LAKI_LAKI_PEREMPUAN_PENDUDUK_BERUMUR_15_TAHUN_KE_ATAS) * 100;         
    },
    persentase_IjazahSMA_LP: function () {
      this.JUMLAH_LAKI_LAKI_PEREMPUAN_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_SMA_MA = 
        parseInt((this.JUMLAH_LAKI_LAKI_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_SMA_MA == '') ? 0 : this.JUMLAH_LAKI_LAKI_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_SMA_MA) +
        parseInt((this.JUMLAH_PEREMPUAN_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_SMA_MA == '') ? 0 : this.JUMLAH_PEREMPUAN_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_SMA_MA); 

      this.PERSENTASE_LAKI_LAKI_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_SMA_MA = 
        parseInt((this.JUMLAH_LAKI_LAKI_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_SMA_MA == '') ? 0 : this.JUMLAH_LAKI_LAKI_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_SMA_MA) /
        parseInt((this.JUMLAH_LAKI_LAKI_PENDUDUK_BERUMUR_15_TAHUN_KE_ATAS == '') ? 0 : this.JUMLAH_LAKI_LAKI_PENDUDUK_BERUMUR_15_TAHUN_KE_ATAS) * 100;  

      this.PERSENTASE_PEREMPUAN_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_SMA_MA = 
        parseInt((this.JUMLAH_PEREMPUAN_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_SMA_MA == '') ? 0 : this.JUMLAH_PEREMPUAN_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_SMA_MA) /
        parseInt((this.JUMLAH_PEREMPUAN_PENDUDUK_BERUMUR_15_TAHUN_KE_ATAS == '') ? 0 : this.JUMLAH_LAKI_LAKI_PENDUDUK_BERUMUR_15_TAHUN_KE_ATAS) * 100;   

      this.PERSENTASE_LAKI_LAKI_PEREMPUAN_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_SMA_MA = 
        parseInt((this.JUMLAH_LAKI_LAKI_PEREMPUAN_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_SMA_MAS == '') ? 0 : this.JUMLAH_LAKI_LAKI_PEREMPUAN_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_SMA_MA) /
        parseInt((this.JUMLAH_LAKI_LAKI_PEREMPUAN_PENDUDUK_BERUMUR_15_TAHUN_KE_ATAS == '') ? 0 : this.JUMLAH_LAKI_LAKI_PEREMPUAN_PENDUDUK_BERUMUR_15_TAHUN_KE_ATAS) * 100;         
    }, 
    persentase_IjazahSMK_LP: function () {
      this.JUMLAH_LAKI_LAKI_PEREMPUAN_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_SEKOLAH_MENENGAH_KEJURUAN = 
        parseInt((this.JUMLAH_LAKI_LAKI_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_SEKOLAH_MENENGAH_KEJURUAN == '') ? 0 : this.JUMLAH_LAKI_LAKI_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_SEKOLAH_MENENGAH_KEJURUAN) +
        parseInt((this.JUMLAH_PEREMPUAN_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_SEKOLAH_MENENGAH_KEJURUAN == '') ? 0 : this.JUMLAH_PEREMPUAN_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_SEKOLAH_MENENGAH_KEJURUAN); 

      this.PERSENTASE_LAKI_LAKI_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_SEKOLAH_MENENGAH_KEJURUAN = 
        parseInt((this.JUMLAH_LAKI_LAKI_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_SEKOLAH_MENENGAH_KEJURUAN == '') ? 0 : this.JUMLAH_LAKI_LAKI_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_SEKOLAH_MENENGAH_KEJURUAN) /
        parseInt((this.JUMLAH_LAKI_LAKI_PENDUDUK_BERUMUR_15_TAHUN_KE_ATAS == '') ? 0 : this.JUMLAH_LAKI_LAKI_PENDUDUK_BERUMUR_15_TAHUN_KE_ATAS) * 100;  

      this.PERSENTASE_PEREMPUAN_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_SEKOLAH_MENENGAH_KEJURUAN = 
        parseInt((this.JUMLAH_PEREMPUAN_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_SEKOLAH_MENENGAH_KEJURUAN == '') ? 0 : this.JUMLAH_PEREMPUAN_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_SEKOLAH_MENENGAH_KEJURUAN) /
        parseInt((this.JUMLAH_PEREMPUAN_PENDUDUK_BERUMUR_15_TAHUN_KE_ATAS == '') ? 0 : this.JUMLAH_LAKI_LAKI_PENDUDUK_BERUMUR_15_TAHUN_KE_ATAS) * 100;   

      this.PERSENTASE_LAKI_LAKI_PEREMPUAN_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_SEKOLAH_MENENGAH_KEJURUAN = 
        parseInt((this.JUMLAH_LAKI_LAKI_PEREMPUAN_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_SEKOLAH_MENENGAH_KEJURUAN == '') ? 0 : this.JUMLAH_LAKI_LAKI_PEREMPUAN_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_SEKOLAH_MENENGAH_KEJURUAN) /
        parseInt((this.JUMLAH_LAKI_LAKI_PEREMPUAN_PENDUDUK_BERUMUR_15_TAHUN_KE_ATAS == '') ? 0 : this.JUMLAH_LAKI_LAKI_PEREMPUAN_PENDUDUK_BERUMUR_15_TAHUN_KE_ATAS) * 100;         
    },
    persentase_IjazahD1D3_LP: function () {
      this.JUMLAH_LAKI_LAKI_PEREMPUAN_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_DIPLOMA_1_DIPLOMA_3 = 
        parseInt((this.JUMLAH_LAKI_LAKI_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_DIPLOMA_1_DIPLOMA_3 == '') ? 0 : this.JUMLAH_LAKI_LAKI_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_DIPLOMA_1_DIPLOMA_3) +
        parseInt((this.JUMLAH_PEREMPUAN_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_DIPLOMA_1_DIPLOMA_3 == '') ? 0 : this.JUMLAH_PEREMPUAN_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_DIPLOMA_1_DIPLOMA_3); 

      this.PERSENTASE_LAKI_LAKI_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_DIPLOMA_1_DIPLOMA_3 = 
        parseInt((this.JUMLAH_LAKI_LAKI_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_DIPLOMA_1_DIPLOMA_3 == '') ? 0 : this.JUMLAH_LAKI_LAKI_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_DIPLOMA_1_DIPLOMA_3) /
        parseInt((this.JUMLAH_LAKI_LAKI_PENDUDUK_BERUMUR_15_TAHUN_KE_ATAS == '') ? 0 : this.JUMLAH_LAKI_LAKI_PENDUDUK_BERUMUR_15_TAHUN_KE_ATAS) * 100;  

      this.PERSENTASE_PEREMPUAN_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_DIPLOMA_1_DIPLOMA_3 = 
        parseInt((this.JUMLAH_PEREMPUAN_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_DIPLOMA_1_DIPLOMA_3 == '') ? 0 : this.JUMLAH_PEREMPUAN_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_DIPLOMA_1_DIPLOMA_3) /
        parseInt((this.JUMLAH_PEREMPUAN_PENDUDUK_BERUMUR_15_TAHUN_KE_ATAS == '') ? 0 : this.JUMLAH_LAKI_LAKI_PENDUDUK_BERUMUR_15_TAHUN_KE_ATAS) * 100;   

      this.PERSENTASE_LAKI_LAKI_PEREMPUAN_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_DIPLOMA_1_DIPLOMA_3 = 
        parseInt((this.JUMLAH_LAKI_LAKI_PEREMPUAN_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_DIPLOMA_1_DIPLOMA_3 == '') ? 0 : this.JUMLAH_LAKI_LAKI_PEREMPUAN_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_DIPLOMA_1_DIPLOMA_3) /
        parseInt((this.JUMLAH_LAKI_LAKI_PEREMPUAN_PENDUDUK_BERUMUR_15_TAHUN_KE_ATAS == '') ? 0 : this.JUMLAH_LAKI_LAKI_PEREMPUAN_PENDUDUK_BERUMUR_15_TAHUN_KE_ATAS) * 100;         
    },
    persentase_IjazahAkademiD3_LP: function () {
      this.JUMLAH_LAKI_LAKI_PEREMPUAN_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_AKADEMI_DIPLOMA_3 = 
        parseInt((this.JUMLAH_LAKI_LAKI_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_AKADEMI_DIPLOMA_3 == '') ? 0 : this.JUMLAH_LAKI_LAKI_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_AKADEMI_DIPLOMA_3) +
        parseInt((this.JUMLAH_PEREMPUAN_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_AKADEMI_DIPLOMA_3 == '') ? 0 : this.JUMLAH_PEREMPUAN_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_AKADEMI_DIPLOMA_3); 

      this.PERSENTASE_LAKI_LAKI_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_AKADEMI_DIPLOMA_3 = 
        parseInt((this.JUMLAH_LAKI_LAKI_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_AKADEMI_DIPLOMA_3 == '') ? 0 : this.JUMLAH_LAKI_LAKI_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_AKADEMI_DIPLOMA_3) /
        parseInt((this.JUMLAH_LAKI_LAKI_PENDUDUK_BERUMUR_15_TAHUN_KE_ATAS == '') ? 0 : this.JUMLAH_LAKI_LAKI_PENDUDUK_BERUMUR_15_TAHUN_KE_ATAS) * 100;  

      this.PERSENTASE_PEREMPUAN_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_AKADEMI_DIPLOMA_3 = 
        parseInt((this.JUMLAH_PEREMPUAN_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_AKADEMI_DIPLOMA_3 == '') ? 0 : this.JUMLAH_PEREMPUAN_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_AKADEMI_DIPLOMA_3) /
        parseInt((this.JUMLAH_PEREMPUAN_PENDUDUK_BERUMUR_15_TAHUN_KE_ATAS == '') ? 0 : this.JUMLAH_LAKI_LAKI_PENDUDUK_BERUMUR_15_TAHUN_KE_ATAS) * 100;   

      this.PERSENTASE_LAKI_LAKI_PEREMPUAN_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_AKADEMI_DIPLOMA_3 = 
        parseInt((this.JUMLAH_LAKI_LAKI_PEREMPUAN_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_AKADEMI_DIPLOMA_3 == '') ? 0 : this.JUMLAH_LAKI_LAKI_PEREMPUAN_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_AKADEMI_DIPLOMA_3) /
        parseInt((this.JUMLAH_LAKI_LAKI_PEREMPUAN_PENDUDUK_BERUMUR_15_TAHUN_KE_ATAS == '') ? 0 : this.JUMLAH_LAKI_LAKI_PEREMPUAN_PENDUDUK_BERUMUR_15_TAHUN_KE_ATAS) * 100;         
    }, 
    persentase_IjazahS1D4: function () {
      this.JUMLAH_LAKI_LAKI_PEREMPUAN_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_S1_DIPLOMA_4 = 
        parseInt((this.JUMLAH_LAKI_LAKI_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_S1_DIPLOMA_4 == '') ? 0 : this.JUMLAH_LAKI_LAKI_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_S1_DIPLOMA_4) +
        parseInt((this.JUMLAH_PEREMPUAN_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_S1_DIPLOMA_4 == '') ? 0 : this.JUMLAH_PEREMPUAN_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_S1_DIPLOMA_4); 

      this.PERSENTASE_LAKI_LAKI_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_S1_DIPLOMA_4 = 
        parseInt((this.JUMLAH_LAKI_LAKI_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_S1_DIPLOMA_4 == '') ? 0 : this.JUMLAH_LAKI_LAKI_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_S1_DIPLOMA_4) /
        parseInt((this.JUMLAH_LAKI_LAKI_PENDUDUK_BERUMUR_15_TAHUN_KE_ATAS == '') ? 0 : this.JUMLAH_LAKI_LAKI_PENDUDUK_BERUMUR_15_TAHUN_KE_ATAS) * 100;  

      this.PERSENTASE_PEREMPUAN_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_S1_DIPLOMA_4 = 
        parseInt((this.JUMLAH_PEREMPUAN_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_S1_DIPLOMA_4 == '') ? 0 : this.JUMLAH_PEREMPUAN_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_S1_DIPLOMA_4) /
        parseInt((this.JUMLAH_PEREMPUAN_PENDUDUK_BERUMUR_15_TAHUN_KE_ATAS == '') ? 0 : this.JUMLAH_LAKI_LAKI_PENDUDUK_BERUMUR_15_TAHUN_KE_ATAS) * 100;   

      this.PERSENTASE_LAKI_LAKI_PEREMPUAN_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_S1_DIPLOMA_4 = 
        parseInt((this.JUMLAH_LAKI_LAKI_PEREMPUAN_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_S1_DIPLOMA_4 == '') ? 0 : this.JUMLAH_LAKI_LAKI_PEREMPUAN_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_S1_DIPLOMA_4) /
        parseInt((this.JUMLAH_LAKI_LAKI_PEREMPUAN_PENDUDUK_BERUMUR_15_TAHUN_KE_ATAS == '') ? 0 : this.JUMLAH_LAKI_LAKI_PEREMPUAN_PENDUDUK_BERUMUR_15_TAHUN_KE_ATAS) * 100;         
    },
    persentase_IjazahS1S2: function () {
      this.JUMLAH_LAKI_LAKI_PEREMPUAN_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_S2_S3 = 
        parseInt((this.JUMLAH_LAKI_LAKI_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_S2_S3 == '') ? 0 : this.JUMLAH_LAKI_LAKI_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_S2_S3) +
        parseInt((this.JUMLAH_PEREMPUAN_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_S2_S3 == '') ? 0 : this.JUMLAH_PEREMPUAN_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_S2_S3); 

      this.PERSENTASE_LAKI_LAKI_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_S2_S3 = 
        parseInt((this.JUMLAH_LAKI_LAKI_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_S2_S3 == '') ? 0 : this.JUMLAH_LAKI_LAKI_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_S2_S3) /
        parseInt((this.JUMLAH_LAKI_LAKI_PENDUDUK_BERUMUR_15_TAHUN_KE_ATAS == '') ? 0 : this.JUMLAH_LAKI_LAKI_PENDUDUK_BERUMUR_15_TAHUN_KE_ATAS) * 100;  

      this.PERSENTASE_PEREMPUAN_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_S2_S3 = 
        parseInt((this.JUMLAH_PEREMPUAN_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_S2_S3 == '') ? 0 : this.JUMLAH_PEREMPUAN_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_S2_S3) /
        parseInt((this.JUMLAH_PEREMPUAN_PENDUDUK_BERUMUR_15_TAHUN_KE_ATAS == '') ? 0 : this.JUMLAH_LAKI_LAKI_PENDUDUK_BERUMUR_15_TAHUN_KE_ATAS) * 100;   

      this.PERSENTASE_LAKI_LAKI_PEREMPUAN_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_S2_S3 = 
        parseInt((this.JUMLAH_LAKI_LAKI_PEREMPUAN_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_S2_S3 == '') ? 0 : this.JUMLAH_LAKI_LAKI_PEREMPUAN_PERSENTASE_PENDIDIKAN_TERTINGGI_YANG_DITAMATKAN_S2_S3) /
        parseInt((this.JUMLAH_LAKI_LAKI_PEREMPUAN_PENDUDUK_BERUMUR_15_TAHUN_KE_ATAS == '') ? 0 : this.JUMLAH_LAKI_LAKI_PEREMPUAN_PENDUDUK_BERUMUR_15_TAHUN_KE_ATAS) * 100;         
    },           
    onChangeHandle: function() {
      this.checkData(this.initialData());
    },    
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
    kirimData: function(data) {
      delete data.listDesa;
      // console.log(data)
      var user = JSON.parse(this.$session.get('dataLogin'));
      var username = user.username;
      for (var key in data) {
        
        var URL_DATA = (this.isUpdate == true) ? this.$urlNode + '/table/update?var='+key+'&thn='+this.PILIH_TAHUN+'&bln=' + this.PILIH_BULAN + '&username=' + this.USERNAME : this.$urlNode + '/table/input';

        var dataKirim = {
          'NAMA_FIELD' : key,
          'VALUE' : data[key],
          'USERNAME' : username,
          'ID_DESA' : data.ID_DESA,
          'ID_DAERAH' : username.substr(0, 4),
          'TAHUN' : data.PILIH_TAHUN,
          'BULAN' : data.PILIH_BULAN,
          'STATUS_VERIFIKASI' : this.LEVEL
        };

        this.$http.post(URL_DATA, dataKirim)
          .then(function (response) {
            console.log(response);            
          })
          .then(() => { this.isUpdate = true; })
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

      this.fetchDataDesa(this.ID_PUSKESMAS)
      const myArray = data;

      Object.keys(myArray).forEach(element => {

        this.$http.get(this.$urlNode + '/table/getField?var=' + element + '&thn='+this.PILIH_TAHUN+'&bln=' + this.PILIH_BULAN + '&username=' + this.USERNAME + '&id_desa=' + this.ID_DESA)
          .then((response) => {
            if(response.data.length > 0) {
              // Read All Data
              this[response.data[0].NAMA_FIELD] = response.data[0].VALUE;
            } else {
              // Reset All Data
              this[element] = 0;
              this.isUpdate = false;
            }
          })
          .then(() => {
            if(this.BADUTA_DIIMUNISASI_DPT_HB_Hib4_P_PERSEN != 0) {
              this.isUpdate = true;
            }                
          })  
          .catch(function (error) {
            console.log(error);
          });        
       
        });

      }  
    },
    created() {
      var user = JSON.parse(this.$session.get('dataLogin'));
      console.log(user);
      this.NAMA_PKM = this.$store.getters.currentUser.NAMA_PUSKESMAS;
      this.LEVEL = this.$store.getters.currentUser.level;
      this.USERNAME = user.username;
      this.ID_PUSKESMAS = user.KODE_PUSKESMAS;
      this.fetchDataDesa(this.ID_PUSKESMAS)     
      this.checkData(this.initialData());
    }
  }
</script>