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
                  <li class="active"><a href="#tab_1" data-toggle="tab"> 0-4</a></li>
                  <li><a href="#tab_2" data-toggle="tab">5-9 </a></li>
                  <li><a href="#tab_3" data-toggle="tab"> 10-14</a></li>
                  <li><a href="#tab_4" data-toggle="tab"> 15-19</a></li>
                  <li><a href="#tab_5" data-toggle="tab"> 20-24</a></li>
                  <li><a href="#tab_6" data-toggle="tab"> 25-29</a></li>
                  <li><a href="#tab_7" data-toggle="tab"> 30-34</a></li>
                  <li><a href="#tab_8" data-toggle="tab"> 35-39</a></li>
                  <li><a href="#tab_9" data-toggle="tab"> 40-44</a></li>
                  <li><a href="#tab_10" data-toggle="tab"> 45-49</a></li>
                  <li><a href="#tab_11" data-toggle="tab"> 50-54</a></li>
                  <li><a href="#tab_12" data-toggle="tab"> 55-59</a></li>
                  <li><a href="#tab_13" data-toggle="tab"> 60-64</a></li>
                  <li><a href="#tab_14" data-toggle="tab"> 65-69</a></li>
                  <li><a href="#tab_15" data-toggle="tab"> 70-74</a></li>
                  <li><a href="#tab_16" data-toggle="tab"> 75+</a></li>
                </ul>
                <div class="tab-content">
                  <div class="tab-pane active" id="tab_1">
                    <div class="box-body">
                      <div class="col-md-6">
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">Jumlah Penduduk Laki-Laki 0 - 4 Tahun</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="jmlPenduduk_04_LP()" v-model="JUMLAH_PENDUDUK_LAKI_LAKI_0_4" name="" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">Jumlah Penduduk Perempuan 0 - 4 Tahun</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="JUMLAH_PENDUDUK_PEREMPUAN_0_4" name="" placeholder="" v-on:blur="jmlPenduduk_04_LP()">
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">Jumlah Penduduk Laki-Laki + Perempuan 0 - 4 Tahun</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="" v-model="JUMLAH_PENDUDUK_LAKI_LAKI_PEREMPUAN_0_4" name="" placeholder="" disabled="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">Rasio Jenis Kelamin 0 - 4 Tahun</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="" v-model="JUMLAH_PENDUDUK_RASIO_JENIS_KELAMIN_0_4" name="" placeholder="" disabled="">
                          </div>
                        </div>                                                                                        
                      </div>
                    </div>
                  </div> 
                  <div class="tab-pane" id="tab_2">
                    <div class="box-body">
                      <div class="col-md-6">
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">Jumlah Penduduk Laki-Laki 5 - 9 Tahun</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="jmlPenduduk_59_LP()" v-model="JUMLAH_PENDUDUK_LAKI_LAKI_5_9" name="" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">Jumlah Penduduk Perempuan 5 - 9 Tahun</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="JUMLAH_PENDUDUK_PEREMPUAN_5_9" name="" placeholder="" v-on:blur="jmlPenduduk_59_LP()">
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">Jumlah Penduduk Laki-Laki + Perempuan 5 - 9 Tahun</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="" v-model="JUMLAH_PENDUDUK_LAKI_LAKI_PEREMPUAN_5_9" name="" placeholder="" disabled="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">Rasio Jenis Kelamin 5 - 9 Tahun</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="" v-model="JUMLAH_PENDUDUK_RASIO_JENIS_KELAMIN_5_9" name="" placeholder="" disabled="">
                          </div>
                        </div>                                                                                        
                      </div>
                    </div>
                  </div>
                  <div class="tab-pane" id="tab_3">
                    <div class="box-body">
                      <div class="col-md-6">
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">Jumlah Penduduk Laki-Laki 10 - 14 Tahun</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="jmlPenduduk_1014_LP()" v-model="JUMLAH_PENDUDUK_LAKI_LAKI_10_14" name="" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">Jumlah Penduduk Perempuan 10 - 14 Tahun</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="JUMLAH_PENDUDUK_PEREMPUAN_10_14" name="" placeholder="" v-on:blur="jmlPenduduk_1014_LP()">
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">Jumlah Penduduk Laki-Laki + Perempuan 10 - 14 Tahun</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="" v-model="JUMLAH_PENDUDUK_LAKI_LAKI_PEREMPUAN_10_14" name="" placeholder="" disabled="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">Rasio Jenis Kelamin 10 - 14 Tahun</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="" v-model="JUMLAH_PENDUDUK_RASIO_JENIS_KELAMIN_10_14" name="" placeholder="" disabled="">
                          </div>
                        </div>                                                                                        
                      </div>
                    </div>
                  </div>
                  <div class="tab-pane" id="tab_4">  
                    <div class="box-body">                      
                      <div class="col-md-6">
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">Jumlah Penduduk Laki-Laki 15 - 19 Tahun</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="jmlPenduduk_1519_LP()" v-model="JUMLAH_PENDUDUK_LAKI_LAKI_15_19" name="" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">Jumlah Penduduk Perempuan 15 - 19 Tahun</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="JUMLAH_PENDUDUK_PEREMPUAN_15_19" name="" placeholder="" v-on:blur="jmlPenduduk_1519_LP()">
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">Jumlah Penduduk Laki-Laki + Perempuan 15 - 19 Tahun</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="" v-model="JUMLAH_PENDUDUK_LAKI_LAKI_PEREMPUAN_15_19" name="" placeholder="" disabled="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">Rasio Jenis Kelamin 15 - 19 Tahun</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="" v-model="JUMLAH_PENDUDUK_RASIO_JENIS_KELAMIN_15_19" name="" placeholder="" disabled="">
                          </div>
                        </div>                                                                                        
                      </div>
                    </div>
                  </div>
                  <div class="tab-pane" id="tab_5">  
                    <div class="box-body">                      
                      <div class="col-md-6">
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">Jumlah Penduduk Laki-Laki 20 - 24 Tahun</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="jmlPenduduk_2024_LP()" v-model="JUMLAH_PENDUDUK_LAKI_LAKI_20_24" name="" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">Jumlah Penduduk Perempuan 20 - 24 Tahun</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="JUMLAH_PENDUDUK_PEREMPUAN_20_24" name="" placeholder="" v-on:blur="jmlPenduduk_2024_LP()">
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">Jumlah Penduduk Laki-Laki + Perempuan 20 - 24 Tahun</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="" v-model="JUMLAH_PENDUDUK_LAKI_LAKI_PEREMPUAN_20_24" name="" placeholder="" disabled="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">Rasio Jenis Kelamin 20 - 24 Tahun</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="" v-model="JUMLAH_PENDUDUK_RASIO_JENIS_KELAMIN_20_24" name="" placeholder="" disabled="">
                          </div>
                        </div>                                                                                        
                      </div>
                    </div>
                  </div>
                  <div class="tab-pane" id="tab_6">  
                    <div class="box-body">                      
                      <div class="col-md-6">
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">Jumlah Penduduk Laki-Laki 25 - 29 Tahun</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="jmlPenduduk_2529_LP()" v-model="JUMLAH_PENDUDUK_LAKI_LAKI_25_29" name="" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">Jumlah Penduduk Perempuan 25 - 29 Tahun</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="JUMLAH_PENDUDUK_PEREMPUAN_25_29" name="" placeholder="" v-on:blur="jmlPenduduk_2529_LP()">
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">Jumlah Penduduk Laki-Laki + Perempuan 25 - 29 Tahun</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="" v-model="JUMLAH_PENDUDUK_LAKI_LAKI_PEREMPUAN_25_29" name="" placeholder="" disabled="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">Rasio Jenis Kelamin 25 - 29 Tahun</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="" v-model="JUMLAH_PENDUDUK_RASIO_JENIS_KELAMIN_25_29" name="" placeholder="" disabled="">
                          </div>
                        </div>                                                                                        
                      </div>
                    </div>
                  </div> 
                  <div class="tab-pane" id="tab_7">  
                    <div class="box-body">                      
                      <div class="col-md-6">
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">Jumlah Penduduk Laki-Laki 30 - 34 Tahun</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="jmlPenduduk_3034_LP()" v-model="JUMLAH_PENDUDUK_LAKI_LAKI_30_34" name="" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">Jumlah Penduduk Perempuan 30 - 34 Tahun</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="JUMLAH_PENDUDUK_PEREMPUAN_30_34" name="" placeholder="" v-on:blur="jmlPenduduk_3034_LP()">
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">Jumlah Penduduk Laki-Laki + Perempuan 30 - 34 Tahun</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="" v-model="JUMLAH_PENDUDUK_LAKI_LAKI_PEREMPUAN_30_34" name="" placeholder="" disabled="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">Rasio Jenis Kelamin 30 - 34 Tahun</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="" v-model="JUMLAH_PENDUDUK_RASIO_JENIS_KELAMIN_30_34" name="" placeholder="" disabled="">
                          </div>
                        </div>                                                                                        
                      </div>
                    </div>
                  </div>
                  <div class="tab-pane" id="tab_8">  
                    <div class="box-body">                      
                      <div class="col-md-6">
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">Jumlah Penduduk Laki-Laki 35 - 39Tahun</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="jmlPenduduk_3539_LP()" v-model="JUMLAH_PENDUDUK_LAKI_LAKI_35_39" name="" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">Jumlah Penduduk Perempuan 35 - 39Tahun</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="JUMLAH_PENDUDUK_PEREMPUAN_35_39" name="" placeholder="" v-on:blur="jmlPenduduk_3539_LP()">
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">Jumlah Penduduk Laki-Laki + Perempuan 35 - 39Tahun</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="" v-model="JUMLAH_PENDUDUK_LAKI_LAKI_PEREMPUAN_35_39" name="" placeholder="" disabled="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">Rasio Jenis Kelamin 35 - 39Tahun</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="" v-model="JUMLAH_PENDUDUK_RASIO_JENIS_KELAMIN_35_39" name="" placeholder="" disabled="">
                          </div>
                        </div>                                                                                        
                      </div>
                    </div>
                  </div>
                  <div class="tab-pane" id="tab_9">  
                    <div class="box-body">                      
                      <div class="col-md-6">
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">Jumlah Penduduk Laki-Laki 40 - 44 Tahun</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="jmlPenduduk_4044_LP()" v-model="JUMLAH_PENDUDUK_LAKI_LAKI_40_44" name="" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">Jumlah Penduduk Perempuan 40 - 44Tahun</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="JUMLAH_PENDUDUK_PEREMPUAN_40_44" name="" placeholder="" v-on:blur="jmlPenduduk_4044_LP()">
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">Jumlah Penduduk Laki-Laki + Perempuan 40 - 44Tahun</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="" v-model="JUMLAH_PENDUDUK_LAKI_LAKI_PEREMPUAN_40_44" name="" placeholder="" disabled="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">Rasio Jenis Kelamin 40 - 44Tahun</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="" v-model="JUMLAH_PENDUDUK_RASIO_JENIS_KELAMIN_40_44" name="" placeholder="" disabled="">
                          </div>
                        </div>                                                                                        
                      </div>
                    </div>
                  </div>
                  <div class="tab-pane" id="tab_10">  
                    <div class="box-body">                      
                      <div class="col-md-6">
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">Jumlah Penduduk Laki-Laki 45 - 49 Tahun</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="jmlPenduduk_4549_LP()" v-model="JUMLAH_PENDUDUK_LAKI_LAKI_45_49" name="" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">Jumlah Penduduk Perempuan 45 - 49 Tahun</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="JUMLAH_PENDUDUK_PEREMPUAN_45_49" name="" placeholder="" v-on:blur="jmlPenduduk_4549_LP()">
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">Jumlah Penduduk Laki-Laki + Perempuan 45 - 49 Tahun</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="" v-model="JUMLAH_PENDUDUK_LAKI_LAKI_PEREMPUAN_45_49" name="" placeholder="" disabled="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">Rasio Jenis Kelamin 45 - 49 Tahun</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="" v-model="JUMLAH_PENDUDUK_RASIO_JENIS_KELAMIN_45_49" name="" placeholder="" disabled="">
                          </div>
                        </div>                                                                                        
                      </div>
                    </div>
                  </div>
                  <div class="tab-pane" id="tab_11">  
                    <div class="box-body">                      
                      <div class="col-md-6">
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">Jumlah Penduduk Laki-Laki 50 - 54 Tahun</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="jmlPenduduk_5054_LP()" v-model="JUMLAH_PENDUDUK_LAKI_LAKI_50_54" name="" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">Jumlah Penduduk Perempuan 50 - 54 Tahun</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="JUMLAH_PENDUDUK_PEREMPUAN_50_54" name="" placeholder="" v-on:blur="jmlPenduduk_5054_LP()">
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">Jumlah Penduduk Laki-Laki + Perempuan 50 - 54 Tahun</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="" v-model="JUMLAH_PENDUDUK_LAKI_LAKI_PEREMPUAN_50_54" name="" placeholder="" disabled="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">Rasio Jenis Kelamin 50 - 54 Tahun</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="" v-model="JUMLAH_PENDUDUK_RASIO_JENIS_KELAMIN_50_54" name="" placeholder="" disabled="">
                          </div>
                        </div>                                                                                        
                      </div>
                    </div>
                  </div>
                  <div class="tab-pane" id="tab_12">  
                    <div class="box-body">                      
                      <div class="col-md-6">
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">Jumlah Penduduk Laki-Laki 55 - 59 Tahun</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="jmlPenduduk_5559_LP()" v-model="JUMLAH_PENDUDUK_LAKI_LAKI_55_59" name="" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">Jumlah Penduduk Perempuan 55 - 59 Tahun</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="JUMLAH_PENDUDUK_PEREMPUAN_55_59" name="" placeholder="" v-on:blur="jmlPenduduk_5559_LP()">
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">Jumlah Penduduk Laki-Laki + Perempuan 55 - 59 Tahun</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="" v-model="JUMLAH_PENDUDUK_LAKI_LAKI_PEREMPUAN_55_59" name="" placeholder="" disabled="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">Rasio Jenis Kelamin 55 - 59 Tahun</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="" v-model="JUMLAH_PENDUDUK_RASIO_JENIS_KELAMIN_55_59" name="" placeholder="" disabled="">
                          </div>
                        </div>                                                                                        
                      </div>
                    </div>
                  </div>
                  <div class="tab-pane" id="tab_13">  
                    <div class="box-body"> 
                      <div class="col-md-6">
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">Jumlah Penduduk Laki-Laki 60 - 64 Tahun</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="jmlPenduduk_6064_LP()" v-model="JUMLAH_PENDUDUK_LAKI_LAKI_60_64" name="" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">Jumlah Penduduk Perempuan 60 - 64 Tahun</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="JUMLAH_PENDUDUK_PEREMPUAN_60_64" name="" placeholder="" v-on:blur="jmlPenduduk_6064_LP()">
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">Jumlah Penduduk Laki-Laki + Perempuan 60 - 64 Tahun</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="" v-model="JUMLAH_PENDUDUK_LAKI_LAKI_PEREMPUAN_60_64" name="" placeholder="" disabled="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">Rasio Jenis Kelamin 60 - 64 Tahun</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="" v-model="JUMLAH_PENDUDUK_RASIO_JENIS_KELAMIN_60_64" name="" placeholder="" disabled="">
                          </div>
                        </div>                                                                                        
                      </div>                     
                    </div>
                  </div>
                  <div class="tab-pane" id="tab_14">  
                    <div class="box-body"> 
                      <div class="col-md-6">
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">Jumlah Penduduk Laki-Laki 65 - 69 Tahun</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="jmlPenduduk_6569_LP()" v-model="JUMLAH_PENDUDUK_LAKI_LAKI_65_69" name="" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">Jumlah Penduduk Perempuan 65 - 69 Tahun</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="JUMLAH_PENDUDUK_PEREMPUAN_65_69" name="" placeholder="" v-on:blur="jmlPenduduk_6569_LP()">
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">Jumlah Penduduk Laki-Laki + Perempuan 65 - 69 Tahun</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="" v-model="JUMLAH_PENDUDUK_LAKI_LAKI_PEREMPUAN_65_69" name="" placeholder="" disabled="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">Rasio Jenis Kelamin 65 - 69 Tahun</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="" v-model="JUMLAH_PENDUDUK_RASIO_JENIS_KELAMIN_65_69" name="" placeholder="" disabled="">
                          </div>
                        </div>                                                                                        
                      </div>                   
                    </div>
                  </div>
                  <div class="tab-pane" id="tab_15">  
                    <div class="box-body"> 
                      <div class="col-md-6">
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">Jumlah Penduduk Laki-Laki 70 - 74 Tahun</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="jmlPenduduk_7074_LP()" v-model="JUMLAH_PENDUDUK_LAKI_LAKI_70_74" name="" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">Jumlah Penduduk Perempuan 70 - 74 Tahun</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="JUMLAH_PENDUDUK_PEREMPUAN_70_74" name="" placeholder="" v-on:blur="jmlPenduduk_7074_LP()">
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">Jumlah Penduduk Laki-Laki + Perempuan 70 - 74 Tahun</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="" v-model="JUMLAH_PENDUDUK_LAKI_LAKI_PEREMPUAN_70_74" name="" placeholder="" disabled="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">Rasio Jenis Kelamin 70 - 74 Tahun</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="" v-model="JUMLAH_PENDUDUK_RASIO_JENIS_KELAMIN_70_74" name="" placeholder="" disabled="">
                          </div>
                        </div>                                                                                        
                      </div>                
                    </div>
                  </div>
                  <div class="tab-pane" id="tab_16">  
                    <div class="box-body"> 
                      <div class="col-md-6">
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">Jumlah Penduduk Laki-Laki 75+ Tahun</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="jmlPenduduk_75_LP()" v-model="JUMLAH_PENDUDUK_LAKI_LAKI_75" name="" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">Jumlah Penduduk Perempuan 75+ Tahun</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="JUMLAH_PENDUDUK_PEREMPUAN_75" name="" placeholder="" v-on:blur="jmlPenduduk_75_LP()">
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">Jumlah Penduduk Laki-Laki + Perempuan 75+ Tahun</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="" v-model="JUMLAH_PENDUDUK_LAKI_LAKI_PEREMPUAN_75" name="" placeholder="" disabled="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">Rasio Jenis Kelamin 75+ Tahun</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="" v-model="JUMLAH_PENDUDUK_RASIO_JENIS_KELAMIN_75" name="" placeholder="" disabled="">
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
            <router-link to="/table2"><a class="btn btn-success btn-md"><i class="fa fa-fw fa-arrow-left"></i> Kembali</a></router-link>
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
      JUMLAH_PENDUDUK_LAKI_LAKI_0_4: 0,
      JUMLAH_PENDUDUK_LAKI_LAKI_5_9: 0,
      JUMLAH_PENDUDUK_LAKI_LAKI_10_14: 0,
      JUMLAH_PENDUDUK_LAKI_LAKI_15_19: 0,
      JUMLAH_PENDUDUK_LAKI_LAKI_20_24: 0,
      JUMLAH_PENDUDUK_LAKI_LAKI_25_29: 0,
      JUMLAH_PENDUDUK_LAKI_LAKI_30_34: 0,
      JUMLAH_PENDUDUK_LAKI_LAKI_35_39: 0,
      JUMLAH_PENDUDUK_LAKI_LAKI_40_44: 0,
      JUMLAH_PENDUDUK_LAKI_LAKI_45_49: 0,
      JUMLAH_PENDUDUK_LAKI_LAKI_50_54: 0,
      JUMLAH_PENDUDUK_LAKI_LAKI_55_59: 0,
      JUMLAH_PENDUDUK_LAKI_LAKI_60_64: 0,
      JUMLAH_PENDUDUK_LAKI_LAKI_65_69: 0,
      JUMLAH_PENDUDUK_LAKI_LAKI_70_74: 0,
      JUMLAH_PENDUDUK_LAKI_LAKI_75: 0,
      JUMLAH_PENDUDUK_PEREMPUAN_0_4: 0,
      JUMLAH_PENDUDUK_PEREMPUAN_5_9: 0,
      JUMLAH_PENDUDUK_PEREMPUAN_10_14: 0,
      JUMLAH_PENDUDUK_PEREMPUAN_15_19: 0,
      JUMLAH_PENDUDUK_PEREMPUAN_20_24: 0,
      JUMLAH_PENDUDUK_PEREMPUAN_25_29: 0,
      JUMLAH_PENDUDUK_PEREMPUAN_30_34: 0,
      JUMLAH_PENDUDUK_PEREMPUAN_35_39: 0,
      JUMLAH_PENDUDUK_PEREMPUAN_40_44: 0,
      JUMLAH_PENDUDUK_PEREMPUAN_45_49: 0,
      JUMLAH_PENDUDUK_PEREMPUAN_50_54: 0,
      JUMLAH_PENDUDUK_PEREMPUAN_55_59: 0,
      JUMLAH_PENDUDUK_PEREMPUAN_60_64: 0,
      JUMLAH_PENDUDUK_PEREMPUAN_65_69: 0,
      JUMLAH_PENDUDUK_PEREMPUAN_70_74: 0,
      JUMLAH_PENDUDUK_PEREMPUAN_75: 0,
      JUMLAH_PENDUDUK_LAKI_LAKI_PEREMPUAN_0_4: 0,
      JUMLAH_PENDUDUK_LAKI_LAKI_PEREMPUAN_5_9: 0,
      JUMLAH_PENDUDUK_LAKI_LAKI_PEREMPUAN_10_14: 0,
      JUMLAH_PENDUDUK_LAKI_LAKI_PEREMPUAN_15_19: 0,
      JUMLAH_PENDUDUK_LAKI_LAKI_PEREMPUAN_20_24: 0,
      JUMLAH_PENDUDUK_LAKI_LAKI_PEREMPUAN_25_29: 0,
      JUMLAH_PENDUDUK_LAKI_LAKI_PEREMPUAN_30_34: 0,
      JUMLAH_PENDUDUK_LAKI_LAKI_PEREMPUAN_35_39: 0,
      JUMLAH_PENDUDUK_LAKI_LAKI_PEREMPUAN_40_44: 0,
      JUMLAH_PENDUDUK_LAKI_LAKI_PEREMPUAN_45_49: 0,
      JUMLAH_PENDUDUK_LAKI_LAKI_PEREMPUAN_50_54: 0,
      JUMLAH_PENDUDUK_LAKI_LAKI_PEREMPUAN_55_59: 0,
      JUMLAH_PENDUDUK_LAKI_LAKI_PEREMPUAN_60_64: 0,
      JUMLAH_PENDUDUK_LAKI_LAKI_PEREMPUAN_65_69: 0,
      JUMLAH_PENDUDUK_LAKI_LAKI_PEREMPUAN_70_74: 0,
      JUMLAH_PENDUDUK_LAKI_LAKI_PEREMPUAN_75: 0,
      JUMLAH_PENDUDUK_RASIO_JENIS_KELAMIN_0_4: 0,
      JUMLAH_PENDUDUK_RASIO_JENIS_KELAMIN_5_9: 0,
      JUMLAH_PENDUDUK_RASIO_JENIS_KELAMIN_10_14: 0,
      JUMLAH_PENDUDUK_RASIO_JENIS_KELAMIN_15_19: 0,
      JUMLAH_PENDUDUK_RASIO_JENIS_KELAMIN_20_24: 0,
      JUMLAH_PENDUDUK_RASIO_JENIS_KELAMIN_25_29: 0,
      JUMLAH_PENDUDUK_RASIO_JENIS_KELAMIN_30_34: 0,
      JUMLAH_PENDUDUK_RASIO_JENIS_KELAMIN_35_39: 0,
      JUMLAH_PENDUDUK_RASIO_JENIS_KELAMIN_40_44: 0,
      JUMLAH_PENDUDUK_RASIO_JENIS_KELAMIN_45_49: 0,
      JUMLAH_PENDUDUK_RASIO_JENIS_KELAMIN_50_54: 0,
      JUMLAH_PENDUDUK_RASIO_JENIS_KELAMIN_55_59: 0,
      JUMLAH_PENDUDUK_RASIO_JENIS_KELAMIN_60_64: 0,
      JUMLAH_PENDUDUK_RASIO_JENIS_KELAMIN_65_69: 0,
      JUMLAH_PENDUDUK_RASIO_JENIS_KELAMIN_70_74: 0,
      JUMLAH_PENDUDUK_RASIO_JENIS_KELAMIN_75: 0,
      isUpdate: false
    }
  },  
  name: 'Table64',
  components: {},
  methods: {
    initialData: function() {
      return {
        JUMLAH_PENDUDUK_LAKI_LAKI_0_4: 0,
        JUMLAH_PENDUDUK_LAKI_LAKI_5_9: 0,
        JUMLAH_PENDUDUK_LAKI_LAKI_10_14: 0,
        JUMLAH_PENDUDUK_LAKI_LAKI_15_19: 0,
        JUMLAH_PENDUDUK_LAKI_LAKI_20_24: 0,
        JUMLAH_PENDUDUK_LAKI_LAKI_25_29: 0,
        JUMLAH_PENDUDUK_LAKI_LAKI_30_34: 0,
        JUMLAH_PENDUDUK_LAKI_LAKI_35_39: 0,
        JUMLAH_PENDUDUK_LAKI_LAKI_40_44: 0,
        JUMLAH_PENDUDUK_LAKI_LAKI_45_49: 0,
        JUMLAH_PENDUDUK_LAKI_LAKI_50_54: 0,
        JUMLAH_PENDUDUK_LAKI_LAKI_55_59: 0,
        JUMLAH_PENDUDUK_LAKI_LAKI_60_64: 0,
        JUMLAH_PENDUDUK_LAKI_LAKI_65_69: 0,
        JUMLAH_PENDUDUK_LAKI_LAKI_70_74: 0,
        JUMLAH_PENDUDUK_LAKI_LAKI_75: 0,
        JUMLAH_PENDUDUK_PEREMPUAN_0_4: 0,
        JUMLAH_PENDUDUK_PEREMPUAN_5_9: 0,
        JUMLAH_PENDUDUK_PEREMPUAN_10_14: 0,
        JUMLAH_PENDUDUK_PEREMPUAN_15_19: 0,
        JUMLAH_PENDUDUK_PEREMPUAN_20_24: 0,
        JUMLAH_PENDUDUK_PEREMPUAN_25_29: 0,
        JUMLAH_PENDUDUK_PEREMPUAN_30_34: 0,
        JUMLAH_PENDUDUK_PEREMPUAN_35_39: 0,
        JUMLAH_PENDUDUK_PEREMPUAN_40_44: 0,
        JUMLAH_PENDUDUK_PEREMPUAN_45_49: 0,
        JUMLAH_PENDUDUK_PEREMPUAN_50_54: 0,
        JUMLAH_PENDUDUK_PEREMPUAN_55_59: 0,
        JUMLAH_PENDUDUK_PEREMPUANI_60_64: 0,
        JUMLAH_PENDUDUK_PEREMPUAN_65_69: 0,
        JUMLAH_PENDUDUK_PEREMPUAN_70_74: 0,
        JUMLAH_PENDUDUK_PEREMPUAN_75: 0,
        JUMLAH_PENDUDUK_LAKI_LAKI_PEREMPUAN_0_4: 0,
        JUMLAH_PENDUDUK_LAKI_LAKI_PEREMPUAN_5_9: 0,
        JUMLAH_PENDUDUK_LAKI_LAKI_PEREMPUAN_10_14: 0,
        JUMLAH_PENDUDUK_LAKI_LAKI_PEREMPUAN_15_19: 0,
        JUMLAH_PENDUDUK_LAKI_LAKI_PEREMPUAN_20_24: 0,
        JUMLAH_PENDUDUK_LAKI_LAKI_PEREMPUAN_25_29: 0,
        JUMLAH_PENDUDUK_LAKI_LAKI_PEREMPUAN_30_34: 0,
        JUMLAH_PENDUDUK_LAKI_LAKI_PEREMPUAN_35_39: 0,
        JUMLAH_PENDUDUK_LAKI_LAKI_PEREMPUAN_40_44: 0,
        JUMLAH_PENDUDUK_LAKI_LAKI_PEREMPUAN_45_49: 0,
        JUMLAH_PENDUDUK_LAKI_LAKI_PEREMPUAN_50_54: 0,
        JUMLAH_PENDUDUK_LAKI_LAKI_PEREMPUAN_55_59: 0,
        JUMLAH_PENDUDUK_LAKI_LAKI_PEREMPUAN_60_64: 0,
        JUMLAH_PENDUDUK_LAKI_LAKI_PEREMPUAN_65_69: 0,
        JUMLAH_PENDUDUK_LAKI_LAKI_PEREMPUAN_70_74: 0,
        JUMLAH_PENDUDUK_LAKI_LAKI_PEREMPUAN_75: 0,
        JUMLAH_PENDUDUK_RASIO_JENIS_KELAMIN_0_4: 0,
        JUMLAH_PENDUDUK_RASIO_JENIS_KELAMIN_5_9: 0,
        JUMLAH_PENDUDUK_RASIO_JENIS_KELAMIN_10_14: 0,
        JUMLAH_PENDUDUK_RASIO_JENIS_KELAMIN_15_19: 0,
        JUMLAH_PENDUDUK_RASIO_JENIS_KELAMIN_20_24: 0,
        JUMLAH_PENDUDUK_RASIO_JENIS_KELAMIN_25_29: 0,
        JUMLAH_PENDUDUK_RASIO_JENIS_KELAMIN_30_34: 0,
        JUMLAH_PENDUDUK_RASIO_JENIS_KELAMIN_35_39: 0,
        JUMLAH_PENDUDUK_RASIO_JENIS_KELAMIN_40_44: 0,
        JUMLAH_PENDUDUK_RASIO_JENIS_KELAMIN_45_49: 0,
        JUMLAH_PENDUDUK_RASIO_JENIS_KELAMIN_50_54: 0,
        JUMLAH_PENDUDUK_RASIO_JENIS_KELAMIN_55_59: 0,
        JUMLAH_PENDUDUK_RASIO_JENIS_KELAMIN_60_64: 0,
        JUMLAH_PENDUDUK_RASIO_JENIS_KELAMIN_65_69: 0,
        JUMLAH_PENDUDUK_RASIO_JENIS_KELAMIN_70_74: 0,
        JUMLAH_PENDUDUK_RASIO_JENIS_KELAMIN_75: 0,          
      }
    },
    masuk: function() {
        console.log('tombol masuk ditekan')
    },
    jmlPenduduk_04_LP: function () {
      this.JUMLAH_PENDUDUK_LAKI_LAKI_PEREMPUAN_0_4 = 
        parseInt((this.JUMLAH_PENDUDUK_LAKI_LAKI_0_4 == '') ? 0 : this.JUMLAH_PENDUDUK_LAKI_LAKI_0_4) +
        parseInt((this.JUMLAH_PENDUDUK_PEREMPUAN_0_4 == '') ? 0 : this.JUMLAH_PENDUDUK_PEREMPUAN_0_4); 

      this.JUMLAH_PENDUDUK_RASIO_JENIS_KELAMIN_0_4 = 
        parseInt((this.JUMLAH_PENDUDUK_LAKI_LAKI_0_4 == '') ? 0 : this.JUMLAH_PENDUDUK_LAKI_LAKI_0_4) /
        parseInt((this.JUMLAH_PENDUDUK_PEREMPUAN_0_4 == '') ? 0 : this.JUMLAH_PENDUDUK_PEREMPUAN_0_4) * 100;
    },  
    jmlPenduduk_59_LP: function () {
      this.JUMLAH_PENDUDUK_LAKI_LAKI_PEREMPUAN_5_9 = 
        parseInt((this.JUMLAH_PENDUDUK_LAKI_LAKI_5_9 == '') ? 0 : this.JUMLAH_PENDUDUK_LAKI_LAKI_5_9) +
        parseInt((this.JUMLAH_PENDUDUK_PEREMPUAN_5_9 == '') ? 0 : this.JUMLAH_PENDUDUK_PEREMPUAN_5_9); 

      this.JUMLAH_PENDUDUK_RASIO_JENIS_KELAMIN_5_9 = 
        parseInt((this.JUMLAH_PENDUDUK_LAKI_LAKI_5_9 == '') ? 0 : this.JUMLAH_PENDUDUK_LAKI_LAKI_5_9) /
        parseInt((this.JUMLAH_PENDUDUK_PEREMPUAN_5_9 == '') ? 0 : this.JUMLAH_PENDUDUK_PEREMPUAN_5_9) * 100;
    }, 
    jmlPenduduk_1014_LP: function () {
      this.JUMLAH_PENDUDUK_LAKI_LAKI_PEREMPUAN_10_14 = 
        parseInt((this.JUMLAH_PENDUDUK_LAKI_LAKI_10_14 == '') ? 0 : this.JUMLAH_PENDUDUK_LAKI_LAKI_10_14) +
        parseInt((this.JUMLAH_PENDUDUK_PEREMPUAN_10_14 == '') ? 0 : this.JUMLAH_PENDUDUK_PEREMPUAN_10_14); 

      this.JUMLAH_PENDUDUK_RASIO_JENIS_KELAMIN_10_14 = 
        parseInt((this.JUMLAH_PENDUDUK_LAKI_LAKI_10_14 == '') ? 0 : this.JUMLAH_PENDUDUK_LAKI_LAKI_10_14) /
        parseInt((this.JUMLAH_PENDUDUK_PEREMPUAN_10_14 == '') ? 0 : this.JUMLAH_PENDUDUK_PEREMPUAN_10_14) * 100;
    },
    jmlPenduduk_1519_LP: function () {
      this.JUMLAH_PENDUDUK_LAKI_LAKI_PEREMPUAN_15_19 = 
        parseInt((this.JUMLAH_PENDUDUK_LAKI_LAKI_15_19 == '') ? 0 : this.JUMLAH_PENDUDUK_LAKI_LAKI_15_19) +
        parseInt((this.JUMLAH_PENDUDUK_PEREMPUAN_15_19 == '') ? 0 : this.JUMLAH_PENDUDUK_PEREMPUAN_15_19); 

      this.JUMLAH_PENDUDUK_RASIO_JENIS_KELAMIN_15_19 = 
        parseInt((this.JUMLAH_PENDUDUK_LAKI_LAKI_15_19 == '') ? 0 : this.JUMLAH_PENDUDUK_LAKI_LAKI_15_19) /
        parseInt((this.JUMLAH_PENDUDUK_PEREMPUAN_15_19 == '') ? 0 : this.JUMLAH_PENDUDUK_PEREMPUAN_15_19) * 100;
    }, 
    jmlPenduduk_2024_LP: function () {
      this.JUMLAH_PENDUDUK_LAKI_LAKI_PEREMPUAN_20_24 = 
        parseInt((this.JUMLAH_PENDUDUK_LAKI_LAKI_20_24 == '') ? 0 : this.JUMLAH_PENDUDUK_LAKI_LAKI_20_24) +
        parseInt((this.JUMLAH_PENDUDUK_PEREMPUAN_20_24 == '') ? 0 : this.JUMLAH_PENDUDUK_PEREMPUAN_20_24); 

      this.JUMLAH_PENDUDUK_RASIO_JENIS_KELAMIN_20_24 = 
        parseInt((this.JUMLAH_PENDUDUK_LAKI_LAKI_20_24 == '') ? 0 : this.JUMLAH_PENDUDUK_LAKI_LAKI_20_24) /
        parseInt((this.JUMLAH_PENDUDUK_PEREMPUAN_20_24 == '') ? 0 : this.JUMLAH_PENDUDUK_PEREMPUAN_20_24) * 100;
    }, 
    jmlPenduduk_2529_LP: function () {
      this.JUMLAH_PENDUDUK_LAKI_LAKI_PEREMPUAN_25_29 = 
        parseInt((this.JUMLAH_PENDUDUK_LAKI_LAKI_25_29 == '') ? 0 : this.JUMLAH_PENDUDUK_LAKI_LAKI_25_29) +
        parseInt((this.JUMLAH_PENDUDUK_PEREMPUAN_25_29 == '') ? 0 : this.JUMLAH_PENDUDUK_PEREMPUAN_25_29); 

      this.JUMLAH_PENDUDUK_RASIO_JENIS_KELAMIN_25_29 = 
        parseInt((this.JUMLAH_PENDUDUK_LAKI_LAKI_25_29 == '') ? 0 : this.JUMLAH_PENDUDUK_LAKI_LAKI_25_29) /
        parseInt((this.JUMLAH_PENDUDUK_PEREMPUAN_25_29 == '') ? 0 : this.JUMLAH_PENDUDUK_PEREMPUAN_25_29) * 100;
    },
    jmlPenduduk_3034_LP: function () {
      this.JUMLAH_PENDUDUK_LAKI_LAKI_PEREMPUAN_30_34 = 
        parseInt((this.JUMLAH_PENDUDUK_LAKI_LAKI_30_34 == '') ? 0 : this.JUMLAH_PENDUDUK_LAKI_LAKI_30_34) +
        parseInt((this.JUMLAH_PENDUDUK_PEREMPUAN_30_34 == '') ? 0 : this.JUMLAH_PENDUDUK_PEREMPUAN_30_34); 

      this.JUMLAH_PENDUDUK_RASIO_JENIS_KELAMIN_30_34 = 
        parseInt((this.JUMLAH_PENDUDUK_LAKI_LAKI_30_34 == '') ? 0 : this.JUMLAH_PENDUDUK_LAKI_LAKI_30_34) /
        parseInt((this.JUMLAH_PENDUDUK_PEREMPUAN_30_34 == '') ? 0 : this.JUMLAH_PENDUDUK_PEREMPUAN_30_34) * 100;
    },   
    jmlPenduduk_3539_LP: function () {
      this.JUMLAH_PENDUDUK_LAKI_LAKI_PEREMPUAN_35_39 = 
        parseInt((this.JUMLAH_PENDUDUK_LAKI_LAKI_35_39 == '') ? 0 : this.JUMLAH_PENDUDUK_LAKI_LAKI_35_39) +
        parseInt((this.JUMLAH_PENDUDUK_PEREMPUAN_35_39 == '') ? 0 : this.JUMLAH_PENDUDUK_PEREMPUAN_35_39); 

      this.JUMLAH_PENDUDUK_RASIO_JENIS_KELAMIN_35_39 = 
        parseInt((this.JUMLAH_PENDUDUK_LAKI_LAKI_35_39 == '') ? 0 : this.JUMLAH_PENDUDUK_LAKI_LAKI_35_39) /
        parseInt((this.JUMLAH_PENDUDUK_PEREMPUAN_35_39 == '') ? 0 : this.JUMLAH_PENDUDUK_PEREMPUAN_35_39) * 100;
    },
    jmlPenduduk_4044_LP: function () {
      this.JUMLAH_PENDUDUK_LAKI_LAKI_PEREMPUAN_40_44 = 
        parseInt((this.JUMLAH_PENDUDUK_LAKI_LAKI_40_44 == '') ? 0 : this.JUMLAH_PENDUDUK_LAKI_LAKI_40_44) +
        parseInt((this.JUMLAH_PENDUDUK_PEREMPUAN_40_44 == '') ? 0 : this.JUMLAH_PENDUDUK_PEREMPUAN_40_44); 

      this.JUMLAH_PENDUDUK_RASIO_JENIS_KELAMIN_40_44 = 
        parseInt((this.JUMLAH_PENDUDUK_LAKI_LAKI_40_44 == '') ? 0 : this.JUMLAH_PENDUDUK_LAKI_LAKI_40_44) /
        parseInt((this.JUMLAH_PENDUDUK_PEREMPUAN_40_44 == '') ? 0 : this.JUMLAH_PENDUDUK_PEREMPUAN_40_44) * 100;
    }, 
    jmlPenduduk_4549_LP: function () {
      this.JUMLAH_PENDUDUK_LAKI_LAKI_PEREMPUAN_45_49 = 
        parseInt((this.JUMLAH_PENDUDUK_LAKI_LAKI_45_49 == '') ? 0 : this.JUMLAH_PENDUDUK_LAKI_LAKI_45_49) +
        parseInt((this.JUMLAH_PENDUDUK_PEREMPUAN_45_49 == '') ? 0 : this.JUMLAH_PENDUDUK_PEREMPUAN_45_49); 

      this.JUMLAH_PENDUDUK_RASIO_JENIS_KELAMIN_45_49 = 
        parseInt((this.JUMLAH_PENDUDUK_LAKI_LAKI_45_49 == '') ? 0 : this.JUMLAH_PENDUDUK_LAKI_LAKI_45_49) /
        parseInt((this.JUMLAH_PENDUDUK_PEREMPUAN_45_49 == '') ? 0 : this.JUMLAH_PENDUDUK_PEREMPUAN_45_49) * 100;
    }, 
    jmlPenduduk_5054_LP: function () {
      this.JUMLAH_PENDUDUK_LAKI_LAKI_PEREMPUAN_50_54 = 
        parseInt((this.JUMLAH_PENDUDUK_LAKI_LAKI_50_54 == '') ? 0 : this.JUMLAH_PENDUDUK_LAKI_LAKI_50_54) +
        parseInt((this.JUMLAH_PENDUDUK_PEREMPUAN_50_54 == '') ? 0 : this.JUMLAH_PENDUDUK_PEREMPUAN_50_54); 

      this.JUMLAH_PENDUDUK_RASIO_JENIS_KELAMIN_50_54 = 
        parseInt((this.JUMLAH_PENDUDUK_LAKI_LAKI_50_54 == '') ? 0 : this.JUMLAH_PENDUDUK_LAKI_LAKI_50_54) /
        parseInt((this.JUMLAH_PENDUDUK_PEREMPUAN_50_54 == '') ? 0 : this.JUMLAH_PENDUDUK_PEREMPUAN_50_54) * 100;
    },
    jmlPenduduk_5559_LP: function () {
      this.JUMLAH_PENDUDUK_LAKI_LAKI_PEREMPUAN_55_59 = 
        parseInt((this.JUMLAH_PENDUDUK_LAKI_LAKI_55_59 == '') ? 0 : this.JUMLAH_PENDUDUK_LAKI_LAKI_55_59) +
        parseInt((this.JUMLAH_PENDUDUK_PEREMPUAN_55_59 == '') ? 0 : this.JUMLAH_PENDUDUK_PEREMPUAN_55_59); 

      this.JUMLAH_PENDUDUK_RASIO_JENIS_KELAMIN_55_59 = 
        parseInt((this.JUMLAH_PENDUDUK_LAKI_LAKI_55_59 == '') ? 0 : this.JUMLAH_PENDUDUK_LAKI_LAKI_55_59) /
        parseInt((this.JUMLAH_PENDUDUK_PEREMPUAN_55_59 == '') ? 0 : this.JUMLAH_PENDUDUK_PEREMPUAN_55_59) * 100;
    },
    jmlPenduduk_6064_LP: function () {
      this.JUMLAH_PENDUDUK_LAKI_LAKI_PEREMPUAN_60_64 = 
        parseInt((this.JUMLAH_PENDUDUK_LAKI_LAKI_60_64 == '') ? 0 : this.JUMLAH_PENDUDUK_LAKI_LAKI_60_64) +
        parseInt((this.JUMLAH_PENDUDUK_PEREMPUAN_60_64 == '') ? 0 : this.JUMLAH_PENDUDUK_PEREMPUAN_60_64); 

      this.JUMLAH_PENDUDUK_RASIO_JENIS_KELAMIN_60_64 = 
        parseInt((this.JUMLAH_PENDUDUK_LAKI_LAKI_60_64 == '') ? 0 : this.JUMLAH_PENDUDUK_LAKI_LAKI_60_64) /
        parseInt((this.JUMLAH_PENDUDUK_PEREMPUAN_60_64 == '') ? 0 : this.JUMLAH_PENDUDUK_PEREMPUAN_60_64) * 100;
    },
    jmlPenduduk_6569_LP: function () {
      this.JUMLAH_PENDUDUK_LAKI_LAKI_PEREMPUAN_65_69 = 
        parseInt((this.JUMLAH_PENDUDUK_LAKI_LAKI_65_69 == '') ? 0 : this.JUMLAH_PENDUDUK_LAKI_LAKI_65_69) +
        parseInt((this.JUMLAH_PENDUDUK_PEREMPUAN_65_69 == '') ? 0 : this.JUMLAH_PENDUDUK_PEREMPUAN_65_69); 

      this.JUMLAH_PENDUDUK_RASIO_JENIS_KELAMIN_65_69 = 
        parseInt((this.JUMLAH_PENDUDUK_LAKI_LAKI_65_69 == '') ? 0 : this.JUMLAH_PENDUDUK_LAKI_LAKI_65_69) /
        parseInt((this.JUMLAH_PENDUDUK_PEREMPUAN_65_69 == '') ? 0 : this.JUMLAH_PENDUDUK_PEREMPUAN_65_69) * 100;
    },
    jmlPenduduk_7074_LP: function () {
      this.JUMLAH_PENDUDUK_LAKI_LAKI_PEREMPUAN_70_74 = 
        parseInt((this.JUMLAH_PENDUDUK_LAKI_LAKI_70_74 == '') ? 0 : this.JUMLAH_PENDUDUK_LAKI_LAKI_70_74) +
        parseInt((this.JUMLAH_PENDUDUK_PEREMPUAN_70_74 == '') ? 0 : this.JUMLAH_PENDUDUK_PEREMPUAN_70_74); 

      this.JUMLAH_PENDUDUK_RASIO_JENIS_KELAMIN_70_74 = 
        parseInt((this.JUMLAH_PENDUDUK_LAKI_LAKI_70_74 == '') ? 0 : this.JUMLAH_PENDUDUK_LAKI_LAKI_70_74) /
        parseInt((this.JUMLAH_PENDUDUK_PEREMPUAN_70_74 == '') ? 0 : this.JUMLAH_PENDUDUK_PEREMPUAN_70_74) * 100;
    },
    jmlPenduduk_75_LP: function () {
      this.JUMLAH_PENDUDUK_LAKI_LAKI_PEREMPUAN_75 = 
        parseInt((this.JUMLAH_PENDUDUK_LAKI_LAKI_75 == '') ? 0 : this.JUMLAH_PENDUDUK_LAKI_LAKI_75) +
        parseInt((this.JUMLAH_PENDUDUK_PEREMPUAN_75 == '') ? 0 : this.JUMLAH_PENDUDUK_PEREMPUAN_75); 

      this.JUMLAH_PENDUDUK_RASIO_JENIS_KELAMIN_75 = 
        parseInt((this.JUMLAH_PENDUDUK_LAKI_LAKI_75 == '') ? 0 : this.JUMLAH_PENDUDUK_LAKI_LAKI_75) /
        parseInt((this.JUMLAH_PENDUDUK_PEREMPUAN_75 == '') ? 0 : this.JUMLAH_PENDUDUK_PEREMPUAN_75) * 100;
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