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
                  <li class="active"><a href="#tab_1" data-toggle="tab"> Rumah Sakit</a></li>
                  <li><a href="#tab_2" data-toggle="tab">Puskesmas dan Jaringannya </a></li>
                  <li><a href="#tab_3" data-toggle="tab"> Sarana Pelayanan Lain</a></li>
                  <li><a href="#tab_4" data-toggle="tab"> Sarana Produksi dan Distribusi Kefarmasian</a></li>
                </ul>
                <div class="tab-content">
                  <div class="tab-pane active" id="tab_1">
                    <div class="box-body">
                      <div class="col-md-6">
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">RSU Kemenkes</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="jmlRSUpemilikan()" v-model="PEMILIKAN_PENGELOLA_KEMENKES_RUMAH_SAKIT_UMUM" name="pemilikan_pengelola_kemenkes_rumah_sakit_umum" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">RSU PEMPROV</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="jmlRSUpemilikan()" v-model="PEMILIKAN_PENGELOLA_PEM_PROV_RUMAH_SAKIT_UMUM" name="pemilikan_pengelola_pem_prov_rumah_sakit_umum" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">RSU PEMKAB/KOTA</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="jmlRSUpemilikan()" v-model="PEMILIKAN_PENGELOLA_PEM_KAB_KOTA_RUMAH_SAKIT_UMUM" name="pemilikan_pengelola_pem_kab_kota_rumah_sakit_umum" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">RSU TNI/POLRI</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="jmlRSUpemilikan()" v-model="PEMILIKAN_PENGELOLA_TNI_POLRI_RUMAH_SAKIT_UMUM" name="pemilikan_pengelola_tni_polri_rumah_sakit_umum" placeholder="">
                          </div>
                        </div>                      
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">RSU BUMN</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="jmlRSUpemilikan()" v-model="PEMILIKAN_PENGELOLA_BUMN_RUMAH_SAKIT_UMUM" name="pemilikan_pengelola_bumn_rumah_sakit_umum" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">RSU SWASTA</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="jmlRSUpemilikan()" v-model="PEMILIKAN_PENGELOLA_SWASTA_RUMAH_SAKIT_UMUM" name="pemilikan_pengelola_swasta_rumah_sakit_umum" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">JUMLAH</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="PEMILIKAN_PENGELOLA_JUMLAH_RUMAH_SAKIT_UMUM" name="pemilikan_pengelola_jumlah_rumah_sakit_umum" placeholder="" disabled="">
                          </div>
                        </div>                      
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">RSK Kemenkes</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="jmlRSkpemilikan()" v-model="PEMILIKAN_PENGELOLA_KEMENKES_RUMAH_SAKIT_KHUSUS" name="pemilikan_pengelola_kemenkes_rumah_sakit_khusus" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">RSK PEMPROV</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="jmlRSkpemilikan()" v-model="PEMILIKAN_PENGELOLA_PEM_PROV_RUMAH_SAKIT_KHUSUS" name="pemilikan_pengelola_pem_prov_rumah_sakit_khusus" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">RSK PEMKAB/KOTA</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="jmlRSkpemilikan()" v-model="PEMILIKAN_PENGELOLA_PEM_KAB_KOTA_RUMAH_SAKIT_KHUSUS" name="pemilikan_pengelola_pem_kab_kota_rumah_sakit_khusus" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">RSK TNI/POLRI</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="jmlRSkpemilikan()" v-model="PEMILIKAN_PENGELOLA_TNI_POLRI_RUMAH_SAKIT_KHUSUS" name="pemilikan_pengelola_tni_polri_rumah_sakit_khusus" placeholder="">
                          </div>
                        </div>                      
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">RSK BUMN</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="jmlRSkpemilikan()" v-model="PEMILIKAN_PENGELOLA_BUMN_RUMAH_SAKIT_KHUSUS" name="pemilikan_pengelola_bumn_rumah_sakit_khusus" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">RSK SWASTA</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="jmlRSkpemilikan()" v-model="PEMILIKAN_PENGELOLA_SWASTA_RUMAH_SAKIT_KHUSUS" name="pemilikan_pengelola_swasta_rumah_sakit_khusus" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">JUMLAH</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="PEMILIKAN_PENGELOLA_JUMLAH_RUMAH_SAKIT_KHUSUS" name="pemilikan_pengelola_jumlah_rumah_sakit_khusus" placeholder="" disabled="">
                          </div>
                        </div>                                            
                      </div>
                    </div>
                  </div> 
                  <div class="tab-pane" id="tab_2">
                    <div class="box-body">
                      <div class="col-md-6">
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">PKM RAWAT INAP Kemenkes</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="jmlpkmRIpemilikan()" v-model="PEMILIKAN_PENGELOLA_KEMENKES_PUSKESMAS_RAWAT_INAP" name="pemilikan_pengelola_kemenkes_PUSKESMAS_RAWAT_INAP" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">PKM RAWAT INAP PEMPROV</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="jmlpkmRIpemilikan()" v-model="PEMILIKAN_PENGELOLA_PEM_PROV_PUSKESMAS_RAWAT_INAP" name="pemilikan_pengelola_pem_prov_PUSKESMAS_RAWAT_INAP" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">PKM RAWAT INAP PEMKAB/KOTA</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="jmlpkmRIpemilikan()" v-model="PEMILIKAN_PENGELOLA_PEM_KAB_KOTA_PUSKESMAS_RAWAT_INAP" name="pemilikan_pengelola_pem_kab_kota_PUSKESMAS_RAWAT_INAP" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">PKM RAWAT INAP TNI/POLRI</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="jmlpkmRIpemilikan()" v-model="PEMILIKAN_PENGELOLA_TNI_POLRI_PUSKESMAS_RAWAT_INAP" name="pemilikan_pengelola_tni_polri_PUSKESMAS_RAWAT_INAP" placeholder="">
                          </div>
                        </div>                      
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">PKM RAWAT INAP BUMN</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="jmlpkmRIpemilikan()" v-model="PEMILIKAN_PENGELOLA_BUMN_PUSKESMAS_RAWAT_INAP" name="pemilikan_pengelola_bumn_PUSKESMAS_RAWAT_INAP" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">PKM RAWAT INAP SWASTA</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="jmlpkmRIpemilikan()" v-model="PEMILIKAN_PENGELOLA_SWASTA_PUSKESMAS_RAWAT_INAP" name="pemilikan_pengelola_swasta_PUSKESMAS_RAWAT_INAP" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">JUMLAH</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="PEMILIKAN_PENGELOLA_JUMLAH_PUSKESMAS_RAWAT_INAP" name="pemilikan_pengelola_jumlah_PUSKESMAS_RAWAT_INAP" placeholder="" disabled="">
                          </div>
                        </div>                      
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">PKM NON RAWAT INAP Kemenkes</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="jmlpkmNRIpemilikan()" v-model="PEMILIKAN_PENGELOLA_KEMENKES_PUSKESMAS_NON_RAWAT_INAP" name="pemilikan_pengelola_kemenkes_PUSKESMAS_NON_RAWAT_INAP" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">PKM NON RAWAT INAP PEMPROV</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="jmlpkmNRIpemilikan()" v-model="PEMILIKAN_PENGELOLA_PEM_PROV_PUSKESMAS_NON_RAWAT_INAP" name="pemilikan_pengelola_pem_prov_PUSKESMAS_NON_RAWAT_INAP" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">PKM NON RAWAT INAP PEMKAB/KOTA</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="jmlpkmNRIpemilikan()" v-model="PEMILIKAN_PENGELOLA_PEM_KAB_KOTA_PUSKESMAS_NON_RAWAT_INAP" name="pemilikan_pengelola_pem_kab_kota_PUSKESMAS_NON_RAWAT_INAP" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">PKM NON RAWAT INAP TNI/POLRI</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="jmlpkmNRIpemilikan()" v-model="PEMILIKAN_PENGELOLA_TNI_POLRI_PUSKESMAS_NON_RAWAT_INAP" name="pemilikan_pengelola_tni_polri_PUSKESMAS_NON_RAWAT_INAP" placeholder="">
                          </div>
                        </div>                      
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">PKM NON RAWAT INAP BUMN</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="jmlpkmNRIpemilikan()" v-model="PEMILIKAN_PENGELOLA_BUMN_PUSKESMAS_NON_RAWAT_INAP" name="pemilikan_pengelola_bumn_PUSKESMAS_NON_RAWAT_INAP" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">PKM NON RAWAT INAP SWASTA</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="jmlpkmNRIpemilikan()" v-model="PEMILIKAN_PENGELOLA_SWASTA_PUSKESMAS_NON_RAWAT_INAP" name="pemilikan_pengelola_swasta_PUSKESMAS_NON_RAWAT_INAP" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">JUMLAH</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="PEMILIKAN_PENGELOLA_JUMLAH_PUSKESMAS_NON_RAWAT_INAP" name="pemilikan_pengelola_jumlah_PUSKESMAS_NON_RAWAT_INAP" placeholder="" disabled="">
                          </div>
                        </div>                                            
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">PKM KELILING Kemenkes</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="jmlpkmKelilingpemilikan()" v-model="PEMILIKAN_PENGELOLA_KEMENKES_PUSKESMAS_KELILING" name="pemilikan_pengelola_kemenkes_PUSKESMAS_KELILING" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">PKM KELILING PEMPROV</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="jmlpkmKelilingpemilikan()" v-model="PEMILIKAN_PENGELOLA_PEM_PROV_PUSKESMAS_KELILING" name="pemilikan_pengelola_pem_prov_PUSKESMAS_KELILING" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">PKM KELILING PEMKAB/KOTA</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="jmlpkmKelilingpemilikan()" v-model="PEMILIKAN_PENGELOLA_PEM_KAB_KOTA_PUSKESMAS_KELILING" name="pemilikan_pengelola_pem_kab_kota_PUSKESMAS_KELILING" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">PKM KELILING TNI/POLRI</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="jmlpkmKelilingpemilikan()" v-model="PEMILIKAN_PENGELOLA_TNI_POLRI_PUSKESMAS_KELILING" name="pemilikan_pengelola_tni_polri_PUSKESMAS_KELILING" placeholder="">
                          </div>
                        </div>                      
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">PKM KELILING BUMN</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="jmlpkmKelilingpemilikan()" v-model="PEMILIKAN_PENGELOLA_BUMN_PUSKESMAS_KELILING" name="pemilikan_pengelola_bumn_PUSKESMAS_KELILING" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">PKM KELILING SWASTA</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="jmlpkmKelilingpemilikan()" v-model="PEMILIKAN_PENGELOLA_SWASTA_PUSKESMAS_KELILING" name="pemilikan_pengelola_swasta_PUSKESMAS_KELILING" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">JUMLAH</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="PEMILIKAN_PENGELOLA_JUMLAH_PUSKESMAS_KELILING" name="pemilikan_pengelola_jumlah_PUSKESMAS_KELILING" placeholder="" disabled="">
                          </div>
                        </div>                                            
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">PKM PEMBANTU Kemenkes</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="jmlpkmPembantupemilikan()" v-model="PEMILIKAN_PENGELOLA_KEMENKES_PUSKESMAS_PEMBANTU" name="pemilikan_pengelola_kemenkes_PUSKESMAS_PEMBANTU" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">PKM PEMBANTU PEMPROV</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="jmlpkmPembantupemilikan()" v-model="PEMILIKAN_PENGELOLA_PEM_PROV_PUSKESMAS_PEMBANTU" name="pemilikan_pengelola_pem_prov_PUSKESMAS_PEMBANTU" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">PKM PEMBANTU PEMKAB/KOTA</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="jmlpkmPembantupemilikan()" v-model="PEMILIKAN_PENGELOLA_PEM_KAB_KOTA_PUSKESMAS_PEMBANTU" name="pemilikan_pengelola_pem_kab_kota_PUSKESMAS_PEMBANTU" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">PKM PEMBANTU TNI/POLRI</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="jmlpkmPembantupemilikan()" v-model="PEMILIKAN_PENGELOLA_TNI_POLRI_PUSKESMAS_PEMBANTU" name="pemilikan_pengelola_tni_polri_PUSKESMAS_PEMBANTU" placeholder="">
                          </div>
                        </div>                      
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">PKM PEMBANTU BUMN</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="jmlpkmPembantupemilikan()" v-model="PEMILIKAN_PENGELOLA_BUMN_PUSKESMAS_PEMBANTU" name="pemilikan_pengelola_bumn_PUSKESMAS_PEMBANTU" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">PKM PEMBANTU SWASTA</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="jmlpkmPembantupemilikan()" v-model="PEMILIKAN_PENGELOLA_SWASTA_PUSKESMAS_PEMBANTU" name="pemilikan_pengelola_swasta_PUSKESMAS_PEMBANTU" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">JUMLAH</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="PEMILIKAN_PENGELOLA_JUMLAH_PUSKESMAS_PEMBANTU" name="pemilikan_pengelola_jumlah_PUSKESMAS_PEMBANTU" placeholder="" disabled="">
                          </div>
                        </div>                                            
                      </div>
                    </div>
                  </div>
                  <div class="tab-pane" id="tab_3">
                    <div class="box-body">
                      <div class="col-md-6">
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">RUMAH BERSALIN Kemenkes</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="jmlRumahBersalinpemilikan()" v-model="PEMILIKAN_PENGELOLA_KEMENKES_RUMAH_BERSALIN" name="pemilikan_pengelola_kemenkes_RUMAH_BERSALIN" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">RUMAH BERSALIN PEMPROV</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="jmlRumahBersalinpemilikan()" v-model="PEMILIKAN_PENGELOLA_PEM_PROV_RUMAH_BERSALIN" name="pemilikan_pengelola_pem_prov_RUMAH_BERSALIN" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">RUMAH BERSALIN PEMKAB/KOTA</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="jmlRumahBersalinpemilikan()" v-model="PEMILIKAN_PENGELOLA_PEM_KAB_KOTA_RUMAH_BERSALIN" name="pemilikan_pengelola_pem_kab_kota_RUMAH_BERSALIN" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">RUMAH BERSALIN TNI/POLRI</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="jmlRumahBersalinpemilikan()" v-model="PEMILIKAN_PENGELOLA_TNI_POLRI_RUMAH_BERSALIN" name="pemilikan_pengelola_tni_polri_RUMAH_BERSALIN" placeholder="">
                          </div>
                        </div>                      
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">RUMAH BERSALIN BUMN</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="jmlRumahBersalinpemilikan()" v-model="PEMILIKAN_PENGELOLA_BUMN_RUMAH_BERSALIN" name="pemilikan_pengelola_bumn_RUMAH_BERSALIN" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">RUMAH BERSALIN SWASTA</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="jmlRumahBersalinpemilikan()" v-model="PEMILIKAN_PENGELOLA_SWASTA_RUMAH_BERSALIN" name="pemilikan_pengelola_swasta_RUMAH_BERSALIN" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">JUMLAH</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="PEMILIKAN_PENGELOLA_JUMLAH_RUMAH_BERSALIN" name="pemilikan_pengelola_jumlah_RUMAH_BERSALIN" placeholder="" disabled="">
                          </div>
                        </div>                      
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">KLINIK PRATAMA Kemenkes</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="jmlKlinikPratampemilikan()" v-model="PEMILIKAN_PENGELOLA_KEMENKES_KLINIK_PRATAMA" name="pemilikan_pengelola_kemenkes_KLINIK_PRATAMA" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">KLINIK PRATAMA PEMPROV</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="jmlKlinikPratampemilikan()" v-model="PEMILIKAN_PENGELOLA_PEM_PROV_KLINIK_PRATAMA" name="pemilikan_pengelola_pem_prov_KLINIK_PRATAMA" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">KLINIK PRATAMA PEMKAB/KOTA</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="jmlKlinikPratampemilikan()" v-model="PEMILIKAN_PENGELOLA_PEM_KAB_KOTA_KLINIK_PRATAMA" name="pemilikan_pengelola_pem_kab_kota_KLINIK_PRATAMA" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">KLINIK PRATAMA TNI/POLRI</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="jmlKlinikPratampemilikan()" v-model="PEMILIKAN_PENGELOLA_TNI_POLRI_KLINIK_PRATAMA" name="pemilikan_pengelola_tni_polri_KLINIK_PRATAMA" placeholder="">
                          </div>
                        </div>                      
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">KLINIK PRATAMA BUMN</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="jmlKlinikPratampemilikan()" v-model="PEMILIKAN_PENGELOLA_BUMN_KLINIK_PRATAMA" name="pemilikan_pengelola_bumn_KLINIK_PRATAMA" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">KLINIK PRATAMA SWASTA</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="jmlKlinikPratampemilikan()" v-model="PEMILIKAN_PENGELOLA_SWASTA_KLINIK_PRATAMA" name="pemilikan_pengelola_swasta_KLINIK_PRATAMA" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">JUMLAH</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="PEMILIKAN_PENGELOLA_JUMLAH_KLINIK_PRATAMA" name="pemilikan_pengelola_jumlah_KLINIK_PRATAMA" placeholder="" disabled="">
                          </div>
                        </div>                                                                                
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">KLINIK UTAMA Kemenkes</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="jmlKlinikUtamapemilikan()" v-model="PEMILIKAN_PENGELOLA_KEMENKES_KLINIK_UTAMA" name="pemilikan_pengelola_kemenkes_KLINIK_UTAMA" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">KLINIK UTAMA PEMPROV</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="jmlKlinikUtamapemilikan()" v-model="PEMILIKAN_PENGELOLA_PEM_PROV_KLINIK_UTAMA" name="pemilikan_pengelola_pem_prov_KLINIK_UTAMA" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">KLINIK UTAMA PEMKAB/KOTA</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="jmlKlinikUtamapemilikan()" v-model="PEMILIKAN_PENGELOLA_PEM_KAB_KOTA_KLINIK_UTAMA" name="pemilikan_pengelola_pem_kab_kota_KLINIK_UTAMA" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">KLINIK UTAMA TNI/POLRI</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="jmlKlinikUtamapemilikan()" v-model="PEMILIKAN_PENGELOLA_TNI_POLRI_KLINIK_UTAMA" name="pemilikan_pengelola_tni_polri_KLINIK_UTAMA" placeholder="">
                          </div>
                        </div>                      
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">KLINIK UTAMA BUMN</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="jmlKlinikUtamapemilikan()" v-model="PEMILIKAN_PENGELOLA_BUMN_KLINIK_UTAMA" name="pemilikan_pengelola_bumn_KLINIK_UTAMA" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">KLINIK UTAMA SWASTA</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="jmlKlinikUtamapemilikan()" v-model="PEMILIKAN_PENGELOLA_SWASTA_KLINIK_UTAMA" name="pemilikan_pengelola_swasta_KLINIK_UTAMA" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">JUMLAH</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="PEMILIKAN_PENGELOLA_JUMLAH_KLINIK_UTAMA" name="pemilikan_pengelola_jumlah_KLINIK_UTAMA" placeholder="" disabled="">
                          </div>
                        </div> 
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">PRAKTIK DOKTER BERSAMA Kemenkes</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="jmlPDBpemilikan()" v-model="PEMILIKAN_PENGELOLA_KEMENKES_PRAKTIK_DOKTER_BERSAMA" name="pemilikan_pengelola_kemenkes_PRAKTIK_DOKTER_BERSAMA" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">PRAKTIK DOKTER BERSAMA PEMPROV</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="jmlPDBpemilikan()" v-model="PEMILIKAN_PENGELOLA_PEM_PROV_PRAKTIK_DOKTER_BERSAMA" name="pemilikan_pengelola_pem_prov_PRAKTIK_DOKTER_BERSAMA" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">PRAKTIK DOKTER BERSAMA PEMKAB/KOTA</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="jmlPDBpemilikan()" v-model="PEMILIKAN_PENGELOLA_PEM_KAB_KOTA_PRAKTIK_DOKTER_BERSAMA" name="pemilikan_pengelola_pem_kab_kota_PRAKTIK_DOKTER_BERSAMA" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">PRAKTIK DOKTER BERSAMA TNI/POLRI</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="jmlPDBpemilikan()" v-model="PEMILIKAN_PENGELOLA_TNI_POLRI_PRAKTIK_DOKTER_BERSAMA" name="pemilikan_pengelola_tni_polri_PRAKTIK_DOKTER_BERSAMA" placeholder="">
                          </div>
                        </div>                      
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">PRAKTIK DOKTER BERSAMA BUMN</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="jmlPDBpemilikan()" v-model="PEMILIKAN_PENGELOLA_BUMN_PRAKTIK_DOKTER_BERSAMA" name="pemilikan_pengelola_bumn_PRAKTIK_DOKTER_BERSAMA" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">PRAKTIK DOKTER BERSAMA SWASTA</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="jmlPDBpemilikan()" v-model="PEMILIKAN_PENGELOLA_SWASTA_PRAKTIK_DOKTER_BERSAMA" name="pemilikan_pengelola_swasta_PRAKTIK_DOKTER_BERSAMA" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">JUMLAH</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="PEMILIKAN_PENGELOLA_JUMLAH_PRAKTIK_DOKTER_BERSAMA" name="pemilikan_pengelola_jumlah_PRAKTIK_DOKTER_BERSAMA" placeholder="" disabled="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">PRAKTIK DOKTER UMUM PERORANGAN Kemenkes</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="jmlPDUpemilikan()" v-model="PEMILIKAN_PENGELOLA_KEMENKES_PRAKTIK_DOKTER_UMUM_PERORANGAN" name="pemilikan_pengelola_kemenkes_PRAKTIK_DOKTER_UMUM_PERORANGAN" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">PRAKTIK DOKTER UMUM PERORANGAN PEMPROV</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="jmlPDUpemilikan()" v-model="PEMILIKAN_PENGELOLA_PEM_PROV_PRAKTIK_DOKTER_UMUM_PERORANGAN" name="pemilikan_pengelola_pem_prov_PRAKTIK_DOKTER_UMUM_PERORANGAN" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">PRAKTIK DOKTER UMUM PERORANGAN PEMKAB/KOTA</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="jmlPDUpemilikan()" v-model="PEMILIKAN_PENGELOLA_PEM_KAB_KOTA_PRAKTIK_DOKTER_UMUM_PERORANGAN" name="pemilikan_pengelola_pem_kab_kota_PRAKTIK_DOKTER_UMUM_PERORANGAN" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">PRAKTIK DOKTER UMUM PERORANGAN TNI/POLRI</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="jmlPDUpemilikan()" v-model="PEMILIKAN_PENGELOLA_TNI_POLRI_PRAKTIK_DOKTER_UMUM_PERORANGAN" name="pemilikan_pengelola_tni_polri_PRAKTIK_DOKTER_UMUM_PERORANGAN" placeholder="">
                          </div>
                        </div>                      
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">PRAKTIK DOKTER UMUM PERORANGAN BUMN</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="jmlPDUpemilikan()" v-model="PEMILIKAN_PENGELOLA_BUMN_PRAKTIK_DOKTER_UMUM_PERORANGAN" name="pemilikan_pengelola_bumn_PRAKTIK_DOKTER_UMUM_PERORANGAN" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">PRAKTIK DOKTER UMUM PERORANGAN SWASTA</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="jmlPDUpemilikan()" v-model="PEMILIKAN_PENGELOLA_SWASTA_PRAKTIK_DOKTER_UMUM_PERORANGAN" name="pemilikan_pengelola_swasta_PRAKTIK_DOKTER_UMUM_PERORANGAN" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">JUMLAH</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="PEMILIKAN_PENGELOLA_JUMLAH_PRAKTIK_DOKTER_UMUM_PERORANGAN" name="pemilikan_pengelola_jumlah_PRAKTIK_DOKTER_UMUM_PERORANGAN" placeholder="" disabled="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">PRAKTIK DOKTER GIGI PERORANGAN Kemenkes</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="jmlPDGpemilikan()" v-model="PEMILIKAN_PENGELOLA_KEMENKES_PRAKTIK_DOKTER_GIGI_PERORANGAN" name="pemilikan_pengelola_kemenkes_PRAKTIK_DOKTER_GIGI_PERORANGAN" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">PRAKTIK DOKTER GIGI PERORANGAN PEMPROV</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="jmlPDGpemilikan()" v-model="PEMILIKAN_PENGELOLA_PEM_PROV_PRAKTIK_DOKTER_GIGI_PERORANGAN" name="pemilikan_pengelola_pem_prov_PRAKTIK_DOKTER_GIGI_PERORANGAN" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">PRAKTIK DOKTER GIGI PERORANGAN PEMKAB/KOTA</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="jmlPDGpemilikan()" v-model="PEMILIKAN_PENGELOLA_PEM_KAB_KOTA_PRAKTIK_DOKTER_GIGI_PERORANGAN" name="pemilikan_pengelola_pem_kab_kota_PRAKTIK_DOKTER_GIGI_PERORANGAN" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">PRAKTIK DOKTER GIGI PERORANGAN TNI/POLRI</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="jmlPDGpemilikan()" v-model="PEMILIKAN_PENGELOLA_TNI_POLRI_PRAKTIK_DOKTER_GIGI_PERORANGAN" name="pemilikan_pengelola_tni_polri_PRAKTIK_DOKTER_GIGI_PERORANGAN" placeholder="">
                          </div>
                        </div>                      
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">PRAKTIK DOKTER GIGI PERORANGAN BUMN</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="jmlPDGpemilikan()" v-model="PEMILIKAN_PENGELOLA_BUMN_PRAKTIK_DOKTER_GIGI_PERORANGAN" name="pemilikan_pengelola_bumn_PRAKTIK_DOKTER_GIGI_PERORANGAN" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">PRAKTIK DOKTER GIGI PERORANGAN SWASTA</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="jmlPDGpemilikan()" v-model="PEMILIKAN_PENGELOLA_SWASTA_PRAKTIK_DOKTER_GIGI_PERORANGAN" name="pemilikan_pengelola_swasta_PRAKTIK_DOKTER_GIGI_PERORANGAN" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">JUMLAH</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="PEMILIKAN_PENGELOLA_JUMLAH_PRAKTIK_DOKTER_GIGI_PERORANGAN" name="pemilikan_pengelola_jumlah_PRAKTIK_DOKTER_GIGI_PERORANGAN" placeholder="" disabled="">
                          </div>
                        </div>                                                                                        
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">PRAKTIK DOKTER SPESIALIS PERORANGAN Kemenkes</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="jmlPDSpemilikan()" v-model="PEMILIKAN_PENGELOLA_KEMENKES_PRAKTIK_DOKTER_SPESIALIS_PERORANGAN" name="pemilikan_pengelola_kemenkes_PRAKTIK_DOKTER_SPESIALIS_PERORANGAN" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">PRAKTIK DOKTER SPESIALIS PERORANGAN PEMPROV</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="jmlPDSpemilikan()" v-model="PEMILIKAN_PENGELOLA_PEM_PROV_PRAKTIK_DOKTER_SPESIALIS_PERORANGAN" name="pemilikan_pengelola_pem_prov_PRAKTIK_DOKTER_SPESIALIS_PERORANGAN" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">PRAKTIK DOKTER SPESIALIS PERORANGAN PEMKAB/KOTA</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="jmlPDSpemilikan()" v-model="PEMILIKAN_PENGELOLA_PEM_KAB_KOTA_PRAKTIK_DOKTER_SPESIALIS_PERORANGAN" name="pemilikan_pengelola_pem_kab_kota_PRAKTIK_DOKTER_SPESIALIS_PERORANGAN" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">PRAKTIK DOKTER SPESIALIS PERORANGAN TNI/POLRI</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="jmlPDSpemilikan()" v-model="PEMILIKAN_PENGELOLA_TNI_POLRI_PRAKTIK_DOKTER_SPESIALIS_PERORANGAN" name="pemilikan_pengelola_tni_polri_PRAKTIK_DOKTER_SPESIALIS_PERORANGAN" placeholder="">
                          </div>
                        </div>                      
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">PRAKTIK DOKTER SPESIALIS PERORANGAN BUMN</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="jmlPDSpemilikan()" v-model="PEMILIKAN_PENGELOLA_BUMN_PRAKTIK_DOKTER_SPESIALIS_PERORANGAN" name="pemilikan_pengelola_bumn_PRAKTIK_DOKTER_SPESIALIS_PERORANGAN" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">PRAKTIK DOKTER SPESIALIS PERORANGAN SWASTA</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="jmlPDSpemilikan()" v-model="PEMILIKAN_PENGELOLA_SWASTA_PRAKTIK_DOKTER_SPESIALIS_PERORANGAN" name="pemilikan_pengelola_swasta_PRAKTIK_DOKTER_SPESIALIS_PERORANGAN" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">JUMLAH</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="PEMILIKAN_PENGELOLA_JUMLAH_PRAKTIK_DOKTER_SPESIALIS_PERORANGAN" name="pemilikan_pengelola_jumlah_PRAKTIK_DOKTER_SPESIALIS_PERORANGAN" placeholder="" disabled="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">BALAI PENGOBATAN Kemenkes</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="jmlBalaiPengobatanpemilikan()" v-model="PEMILIKAN_PENGELOLA_KEMENKES_BALAI_PENGOBATAN" name="pemilikan_pengelola_kemenkes_BALAI_PENGOBATAN" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">BALAI PENGOBATAN PEMPROV</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="jmlBalaiPengobatanpemilikan()" v-model="PEMILIKAN_PENGELOLA_PEM_PROV_BALAI_PENGOBATAN" name="pemilikan_pengelola_pem_prov_BALAI_PENGOBATAN" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">BALAI PENGOBATAN PEMKAB/KOTA</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="jmlBalaiPengobatanpemilikan()" v-model="PEMILIKAN_PENGELOLA_PEM_KAB_KOTA_BALAI_PENGOBATAN" name="pemilikan_pengelola_pem_kab_kota_BALAI_PENGOBATAN" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">BALAI PENGOBATAN TNI/POLRI</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="jmlBalaiPengobatanpemilikan()" v-model="PEMILIKAN_PENGELOLA_TNI_POLRI_BALAI_PENGOBATAN" name="pemilikan_pengelola_tni_polri_BALAI_PENGOBATAN" placeholder="">
                          </div>
                        </div>                      
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">BALAI PENGOBATAN BUMN</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="jmlBalaiPengobatanpemilikan()" v-model="PEMILIKAN_PENGELOLA_BUMN_BALAI_PENGOBATAN" name="pemilikan_pengelola_bumn_BALAI_PENGOBATAN" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">BALAI PENGOBATAN SWASTA</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="jmlBalaiPengobatanpemilikan()" v-model="PEMILIKAN_PENGELOLA_SWASTA_BALAI_PENGOBATAN" name="pemilikan_pengelola_swasta_BALAI_PENGOBATAN" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">JUMLAH</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="PEMILIKAN_PENGELOLA_JUMLAH_BALAI_PENGOBATAN" name="pemilikan_pengelola_jumlah_BALAI_PENGOBATAN" placeholder="" disabled="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">PRAKTIK PENGOBATAN TRADISIONAL Kemenkes</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="jmlPPTpemilikan()" v-model="PEMILIKAN_PENGELOLA_KEMENKES_PRAKTIK_PENGOBATAN_TRADISIONAL" name="pemilikan_pengelola_kemenkes_PRAKTIK_PENGOBATAN_TRADISIONAL" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">PRAKTIK PENGOBATAN TRADISIONAL PEMPROV</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="jmlPPTpemilikan()" v-model="PEMILIKAN_PENGELOLA_PEM_PROV_PRAKTIK_PENGOBATAN_TRADISIONAL" name="pemilikan_pengelola_pem_prov_PRAKTIK_PENGOBATAN_TRADISIONAL" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">PRAKTIK PENGOBATAN TRADISIONAL PEMKAB/KOTA</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="jmlPPTpemilikan()" v-model="PEMILIKAN_PENGELOLA_PEM_KAB_KOTA_PRAKTIK_PENGOBATAN_TRADISIONAL" name="pemilikan_pengelola_pem_kab_kota_PRAKTIK_PENGOBATAN_TRADISIONAL" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">PRAKTIK PENGOBATAN TRADISIONAL TNI/POLRI</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="jmlPPTpemilikan()" v-model="PEMILIKAN_PENGELOLA_TNI_POLRI_PRAKTIK_PENGOBATAN_TRADISIONAL" name="pemilikan_pengelola_tni_polri_PRAKTIK_PENGOBATAN_TRADISIONAL" placeholder="">
                          </div>
                        </div>                      
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">PRAKTIK PENGOBATAN TRADISIONAL BUMN</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="jmlPPTpemilikan()" v-model="PEMILIKAN_PENGELOLA_BUMN_PRAKTIK_PENGOBATAN_TRADISIONAL" name="pemilikan_pengelola_bumn_PRAKTIK_PENGOBATAN_TRADISIONAL" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">PRAKTIK PENGOBATAN TRADISIONAL SWASTA</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="jmlPPTpemilikan()" v-model="PEMILIKAN_PENGELOLA_SWASTA_PRAKTIK_PENGOBATAN_TRADISIONAL" name="pemilikan_pengelola_swasta_PRAKTIK_PENGOBATAN_TRADISIONAL" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">JUMLAH</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="PEMILIKAN_PENGELOLA_JUMLAH_PRAKTIK_PENGOBATAN_TRADISIONAL" name="pemilikan_pengelola_jumlah_PRAKTIK_PENGOBATAN_TRADISIONAL" placeholder="" disabled="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">BANK DARAH RUMAH SAKIT Kemenkes</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="jmlBDRSpemilikan()" v-model="PEMILIKAN_PENGELOLA_KEMENKES_BANK_DARAH_RUMAH_SAKIT" name="pemilikan_pengelola_kemenkes_BANK_DARAH_RUMAH_SAKIT" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">BANK DARAH RUMAH SAKIT PEMPROV</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="jmlBDRSpemilikan()" v-model="PEMILIKAN_PENGELOLA_PEM_PROV_BANK_DARAH_RUMAH_SAKIT" name="pemilikan_pengelola_pem_prov_BANK_DARAH_RUMAH_SAKIT" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">BANK DARAH RUMAH SAKIT PEMKAB/KOTA</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="jmlBDRSpemilikan()" v-model="PEMILIKAN_PENGELOLA_PEM_KAB_KOTA_BANK_DARAH_RUMAH_SAKIT" name="pemilikan_pengelola_pem_kab_kota_BANK_DARAH_RUMAH_SAKIT" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">BANK DARAH RUMAH SAKIT TNI/POLRI</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="jmlBDRSpemilikan()" v-model="PEMILIKAN_PENGELOLA_TNI_POLRI_BANK_DARAH_RUMAH_SAKIT" name="pemilikan_pengelola_tni_polri_BANK_DARAH_RUMAH_SAKIT" placeholder="">
                          </div>
                        </div>                      
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">BANK DARAH RUMAH SAKIT BUMN</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="jmlBDRSpemilikan()" v-model="PEMILIKAN_PENGELOLA_BUMN_BANK_DARAH_RUMAH_SAKIT" name="pemilikan_pengelola_bumn_BANK_DARAH_RUMAH_SAKIT" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">BANK DARAH RUMAH SAKIT SWASTA</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="jmlBDRSpemilikan()" v-model="PEMILIKAN_PENGELOLA_SWASTA_BANK_DARAH_RUMAH_SAKIT" name="pemilikan_pengelola_swasta_BANK_DARAH_RUMAH_SAKIT" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">JUMLAH</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="PEMILIKAN_PENGELOLA_JUMLAH_BANK_DARAH_RUMAH_SAKIT" name="pemilikan_pengelola_jumlah_BANK_DARAH_RUMAH_SAKIT" placeholder="" disabled="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">UNIT TRANSFUSI DARAH Kemenkes</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="jmlUTDpemilikan()" v-model="PEMILIKAN_PENGELOLA_KEMENKES_UNIT_TRANSFUSI_DARAH" name="pemilikan_pengelola_kemenkes_UNIT_TRANSFUSI_DARAH" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">UNIT TRANSFUSI DARAH PEMPROV</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="jmlUTDpemilikan()" v-model="PEMILIKAN_PENGELOLA_PEM_PROV_UNIT_TRANSFUSI_DARAH" name="pemilikan_pengelola_pem_prov_UNIT_TRANSFUSI_DARAH" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">UNIT TRANSFUSI DARAH PEMKAB/KOTA</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="jmlUTDpemilikan()" v-model="PEMILIKAN_PENGELOLA_PEM_KAB_KOTA_UNIT_TRANSFUSI_DARAH" name="pemilikan_pengelola_pem_kab_kota_UNIT_TRANSFUSI_DARAH" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">UNIT TRANSFUSI DARAH TNI/POLRI</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="jmlUTDpemilikan()" v-model="PEMILIKAN_PENGELOLA_TNI_POLRI_UNIT_TRANSFUSI_DARAH" name="pemilikan_pengelola_tni_polri_UNIT_TRANSFUSI_DARAH" placeholder="">
                          </div>
                        </div>                      
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">UNIT TRANSFUSI DARAH BUMN</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="jmlUTDpemilikan()" v-model="PEMILIKAN_PENGELOLA_BUMN_UNIT_TRANSFUSI_DARAH" name="pemilikan_pengelola_bumn_UNIT_TRANSFUSI_DARAH" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">UNIT TRANSFUSI DARAH SWASTA</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="jmlUTDpemilikan()" v-model="PEMILIKAN_PENGELOLA_SWASTA_UNIT_TRANSFUSI_DARAH" name="pemilikan_pengelola_swasta_UNIT_TRANSFUSI_DARAH" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">JUMLAH</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="PEMILIKAN_PENGELOLA_JUMLAH_UNIT_TRANSFUSI_DARAH" name="pemilikan_pengelola_jumlah_UNIT_TRANSFUSI_DARAH" placeholder="" disabled="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">LABORATORIUM KESEHATAN Kemenkes</label>
                          <div class="col-sm-4"> 
                            <input type="text" class="form-control" id="" v-on:blur="jmlLabkespemilikan()" v-model="PEMILIKAN_PENGELOLA_KEMENKES_LABORATORIUM_KESEHATAN" name="pemilikan_pengelola_kemenkes_LABORATORIUM_KESEHATAN" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">LABORATORIUM KESEHATAN PEMPROV</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="jmlLabkespemilikan()" v-model="PEMILIKAN_PENGELOLA_PEM_PROV_LABORATORIUM_KESEHATAN" name="pemilikan_pengelola_pem_prov_LABORATORIUM_KESEHATAN" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">LABORATORIUM KESEHATAN PEMKAB/KOTA</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="jmlLabkespemilikan()" v-model="PEMILIKAN_PENGELOLA_PEM_KAB_KOTA_LABORATORIUM_KESEHATAN" name="pemilikan_pengelola_pem_kab_kota_LABORATORIUM_KESEHATAN" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">LABORATORIUM KESEHATAN TNI/POLRI</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="jmlLabkespemilikan()" v-model="PEMILIKAN_PENGELOLA_TNI_POLRI_LABORATORIUM_KESEHATAN" name="pemilikan_pengelola_tni_polri_LABORATORIUM_KESEHATAN" placeholder="">
                          </div>
                        </div>                      
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">LABORATORIUM KESEHATAN BUMN</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="jmlLabkespemilikan()" v-model="PEMILIKAN_PENGELOLA_BUMN_LABORATORIUM_KESEHATAN" name="pemilikan_pengelola_bumn_LABORATORIUM_KESEHATAN" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">LABORATORIUM KESEHATAN SWASTA</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="jmlLabkespemilikan()" v-model="PEMILIKAN_PENGELOLA_SWASTA_LABORATORIUM_KESEHATAN" name="pemilikan_pengelola_swasta_LABORATORIUM_KESEHATAN" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">JUMLAH</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="PEMILIKAN_PENGELOLA_JUMLAH_LABORATORIUM_KESEHATAN" name="pemilikan_pengelola_jumlah_LABORATORIUM_KESEHATAN" placeholder="" disabled="">
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="tab-pane" id="tab_4">  
                    <div class="box-body">
                      <div class="col-md-6">
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">INDUSTRI FARMASI Kemenkes</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="jmlIndustriFarmasipemilikan()" v-model="PEMILIKAN_PENGELOLA_KEMENKES_INDUSTRI_FARMASI" name="pemilikan_pengelola_kemenkes_INDUSTRI_FARMASI" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">INDUSTRI FARMASI PEMPROV</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="jmlIndustriFarmasipemilikan()" v-model="PEMILIKAN_PENGELOLA_PEM_PROV_INDUSTRI_FARMASI" name="pemilikan_pengelola_pem_prov_INDUSTRI_FARMASI" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">INDUSTRI FARMASI PEMKAB/KOTA</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="jmlIndustriFarmasipemilikan()" v-model="PEMILIKAN_PENGELOLA_PEM_KAB_KOTA_INDUSTRI_FARMASI" name="pemilikan_pengelola_pem_kab_kota_INDUSTRI_FARMASI" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">INDUSTRI FARMASI TNI/POLRI</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="jmlIndustriFarmasipemilikan()" v-model="PEMILIKAN_PENGELOLA_TNI_POLRI_INDUSTRI_FARMASI" name="pemilikan_pengelola_tni_polri_INDUSTRI_FARMASI" placeholder="">
                          </div>
                        </div>                      
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">INDUSTRI FARMASI BUMN</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="jmlIndustriFarmasipemilikan()" v-model="PEMILIKAN_PENGELOLA_BUMN_INDUSTRI_FARMASI" name="pemilikan_pengelola_bumn_INDUSTRI_FARMASI" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">INDUSTRI FARMASI SWASTA</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="jmlIndustriFarmasipemilikan()" v-model="PEMILIKAN_PENGELOLA_SWASTA_INDUSTRI_FARMASI" name="pemilikan_pengelola_swasta_INDUSTRI_FARMASI" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">JUMLAH</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="PEMILIKAN_PENGELOLA_JUMLAH_INDUSTRI_FARMASI" name="pemilikan_pengelola_jumlah_INDUSTRI_FARMASI" placeholder="" disabled="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">INDUSTRI OBAT TRADISIONAL Kemenkes</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="jmlIndustriOTpemilikan()" v-model="PEMILIKAN_PENGELOLA_KEMENKES_INDUSTRI_OBAT_TRADISIONAL" name="pemilikan_pengelola_kemenkes_INDUSTRI_OBAT_TRADISIONAL" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">INDUSTRI OBAT TRADISIONAL PEMPROV</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="jmlIndustriOTpemilikan()" v-model="PEMILIKAN_PENGELOLA_PEM_PROV_INDUSTRI_OBAT_TRADISIONAL" name="pemilikan_pengelola_pem_prov_INDUSTRI_OBAT_TRADISIONAL" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">INDUSTRI OBAT TRADISIONAL PEMKAB/KOTA</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="jmlIndustriOTpemilikan()" v-model="PEMILIKAN_PENGELOLA_PEM_KAB_KOTA_INDUSTRI_OBAT_TRADISIONAL" name="pemilikan_pengelola_pem_kab_kota_INDUSTRI_OBAT_TRADISIONAL" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">INDUSTRI OBAT TRADISIONAL TNI/POLRI</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="jmlIndustriOTpemilikan()" v-model="PEMILIKAN_PENGELOLA_TNI_POLRI_INDUSTRI_OBAT_TRADISIONAL" name="pemilikan_pengelola_tni_polri_INDUSTRI_OBAT_TRADISIONAL" placeholder="">
                          </div>
                        </div>                      
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">INDUSTRI OBAT TRADISIONAL BUMN</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="jmlIndustriOTpemilikan()" v-model="PEMILIKAN_PENGELOLA_BUMN_INDUSTRI_OBAT_TRADISIONAL" name="pemilikan_pengelola_bumn_INDUSTRI_OBAT_TRADISIONAL" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">INDUSTRI OBAT TRADISIONAL SWASTA</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="jmlIndustriOTpemilikan()" v-model="PEMILIKAN_PENGELOLA_SWASTA_INDUSTRI_OBAT_TRADISIONAL" name="pemilikan_pengelola_swasta_INDUSTRI_OBAT_TRADISIONAL" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">JUMLAH</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="PEMILIKAN_PENGELOLA_JUMLAH_INDUSTRI_OBAT_TRADISIONAL" name="pemilikan_pengelola_jumlah_INDUSTRI_OBAT_TRADISIONAL" placeholder="" disabled="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">USAHA MIKRO OBAT TRADISIONAL Kemenkes</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="jmlUMOTpemilikan()" v-model="PEMILIKAN_PENGELOLA_KEMENKES_USAHA_MIKRO_OBAT_TRADISIONAL" name="pemilikan_pengelola_kemenkes_USAHA_MIKRO_OBAT_TRADISIONAL" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">USAHA MIKRO OBAT TRADISIONAL PEMPROV</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="jmlUMOTpemilikan()" v-model="PEMILIKAN_PENGELOLA_PEM_PROV_USAHA_MIKRO_OBAT_TRADISIONAL" name="pemilikan_pengelola_pem_prov_USAHA_MIKRO_OBAT_TRADISIONAL" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">USAHA MIKRO OBAT TRADISIONAL PEMKAB/KOTA</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="jmlUMOTpemilikan()" v-model="PEMILIKAN_PENGELOLA_PEM_KAB_KOTA_USAHA_MIKRO_OBAT_TRADISIONAL" name="pemilikan_pengelola_pem_kab_kota_USAHA_MIKRO_OBAT_TRADISIONAL" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">USAHA MIKRO OBAT TRADISIONAL TNI/POLRI</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="jmlUMOTpemilikan()" v-model="PEMILIKAN_PENGELOLA_TNI_POLRI_USAHA_MIKRO_OBAT_TRADISIONAL" name="pemilikan_pengelola_tni_polri_USAHA_MIKRO_OBAT_TRADISIONAL" placeholder="">
                          </div>
                        </div>                      
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">USAHA MIKRO OBAT TRADISIONAL BUMN</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="jmlUMOTpemilikan()" v-model="PEMILIKAN_PENGELOLA_BUMN_USAHA_MIKRO_OBAT_TRADISIONAL" name="pemilikan_pengelola_bumn_USAHA_MIKRO_OBAT_TRADISIONAL" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">USAHA MIKRO OBAT TRADISIONAL SWASTA</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="jmlUMOTpemilikan()" v-model="PEMILIKAN_PENGELOLA_SWASTA_USAHA_MIKRO_OBAT_TRADISIONAL" name="pemilikan_pengelola_swasta_USAHA_MIKRO_OBAT_TRADISIONAL" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">JUMLAH</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="PEMILIKAN_PENGELOLA_JUMLAH_USAHA_MIKRO_OBAT_TRADISIONAL" name="pemilikan_pengelola_jumlah_USAHA_MIKRO_OBAT_TRADISIONAL" placeholder="" disabled="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">PRODUKSI ALAT KESEHATAN Kemenkes</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="jmlPAKpemilikan()" v-model="PEMILIKAN_PENGELOLA_KEMENKES_PRODUKSI_ALAT_KESEHATAN" name="pemilikan_pengelola_kemenkes_PRODUKSI_ALAT_KESEHATAN" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">PRODUKSI ALAT KESEHATAN PEMPROV</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="jmlPAKpemilikan()" v-model="PEMILIKAN_PENGELOLA_PEM_PROV_PRODUKSI_ALAT_KESEHATAN" name="pemilikan_pengelola_pem_prov_PRODUKSI_ALAT_KESEHATAN" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">PRODUKSI ALAT KESEHATAN PEMKAB/KOTA</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="jmlPAKpemilikan()" v-model="PEMILIKAN_PENGELOLA_PEM_KAB_KOTA_PRODUKSI_ALAT_KESEHATAN" name="pemilikan_pengelola_pem_kab_kota_PRODUKSI_ALAT_KESEHATAN" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">PRODUKSI ALAT KESEHATAN TNI/POLRI</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="jmlPAKpemilikan()" v-model="PEMILIKAN_PENGELOLA_TNI_POLRI_PRODUKSI_ALAT_KESEHATAN" name="pemilikan_pengelola_tni_polri_PRODUKSI_ALAT_KESEHATAN" placeholder="">
                          </div>
                        </div>                      
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">PRODUKSI ALAT KESEHATAN BUMN</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="jmlPAKpemilikan()" v-model="PEMILIKAN_PENGELOLA_BUMN_PRODUKSI_ALAT_KESEHATAN" name="pemilikan_pengelola_bumn_PRODUKSI_ALAT_KESEHATAN" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">PRODUKSI ALAT KESEHATAN SWASTA</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="jmlPAKpemilikan()" v-model="PEMILIKAN_PENGELOLA_SWASTA_PRODUKSI_ALAT_KESEHATAN" name="pemilikan_pengelola_swasta_PRODUKSI_ALAT_KESEHATAN" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">JUMLAH</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="PEMILIKAN_PENGELOLA_JUMLAH_PRODUKSI_ALAT_KESEHATAN" name="pemilikan_pengelola_jumlah_PRODUKSI_ALAT_KESEHATAN" placeholder="" disabled="">
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">PEDAGANG BESAR FARMASI Kemenkes</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="jmlPBFpemilikan()" v-model="PEMILIKAN_PENGELOLA_KEMENKES_PEDAGANG_BESAR_FARMASI" name="pemilikan_pengelola_kemenkes_PEDAGANG_BESAR_FARMASI" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">PEDAGANG BESAR FARMASI PEMPROV</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="jmlPBFpemilikan()" v-model="PEMILIKAN_PENGELOLA_PEM_PROV_PEDAGANG_BESAR_FARMASI" name="pemilikan_pengelola_pem_prov_PEDAGANG_BESAR_FARMASI" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">PEDAGANG BESAR FARMASI PEMKAB/KOTA</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="jmlPBFpemilikan()" v-model="PEMILIKAN_PENGELOLA_PEM_KAB_KOTA_PEDAGANG_BESAR_FARMASI" name="pemilikan_pengelola_pem_kab_kota_PEDAGANG_BESAR_FARMASI" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">PEDAGANG BESAR FARMASI TNI/POLRI</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="jmlPBFpemilikan()" v-model="PEMILIKAN_PENGELOLA_TNI_POLRI_PEDAGANG_BESAR_FARMASI" name="pemilikan_pengelola_tni_polri_PEDAGANG_BESAR_FARMASI" placeholder="">
                          </div>
                        </div>                      
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">PEDAGANG BESAR FARMASI BUMN</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="jmlPBFpemilikan()" v-model="PEMILIKAN_PENGELOLA_BUMN_PEDAGANG_BESAR_FARMASI" name="pemilikan_pengelola_bumn_PEDAGANG_BESAR_FARMASI" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">PEDAGANG BESAR FARMASI SWASTA</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="jmlPBFpemilikan()" v-model="PEMILIKAN_PENGELOLA_SWASTA_PEDAGANG_BESAR_FARMASI" name="pemilikan_pengelola_swasta_PEDAGANG_BESAR_FARMASI" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">JUMLAH</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="PEMILIKAN_PENGELOLA_JUMLAH_PEDAGANG_BESAR_FARMASI" name="pemilikan_pengelola_jumlah_PEDAGANG_BESAR_FARMASI" placeholder="" disabled="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">APOTEK Kemenkes</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="jmlApotekpemilikan()" v-model="PEMILIKAN_PENGELOLA_KEMENKES_APOTEK" name="pemilikan_pengelola_kemenkes_APOTEK" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">APOTEK PEMPROV</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="jmlApotekpemilikan()" v-model="PEMILIKAN_PENGELOLA_PEM_PROV_APOTEK" name="pemilikan_pengelola_pem_prov_APOTEK" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">APOTEK PEMKAB/KOTA</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="jmlApotekpemilikan()" v-model="PEMILIKAN_PENGELOLA_PEM_KAB_KOTA_APOTEK" name="pemilikan_pengelola_pem_kab_kota_APOTEK" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">APOTEK TNI/POLRI</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="jmlApotekpemilikan()" v-model="PEMILIKAN_PENGELOLA_TNI_POLRI_APOTEK" name="pemilikan_pengelola_tni_polri_APOTEK" placeholder="">
                          </div>
                        </div>                      
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">APOTEK BUMN</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="jmlApotekpemilikan()" v-model="PEMILIKAN_PENGELOLA_BUMN_APOTEK" name="pemilikan_pengelola_bumn_APOTEK" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">APOTEK SWASTA</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="jmlApotekpemilikan()" v-model="PEMILIKAN_PENGELOLA_SWASTA_APOTEK" name="pemilikan_pengelola_swasta_APOTEK" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">JUMLAH</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="PEMILIKAN_PENGELOLA_JUMLAH_APOTEK" name="pemilikan_pengelola_jumlah_APOTEK" placeholder="" disabled="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">APOTEK PRB Kemenkes</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="jmlApotekPRBpemilikan()" v-model="PEMILIKAN_PENGELOLA_KEMENKES_APOTEK_PRB" name="pemilikan_pengelola_kemenkes_APOTEK PRB" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">APOTEK PRB PEMPROV</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="jmlApotekPRBpemilikan()" v-model="PEMILIKAN_PENGELOLA_PEM_PROV_APOTEK_PRB" name="pemilikan_pengelola_pem_prov_APOTEK PRB" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">APOTEK PRB PEMKAB/KOTA</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="jmlApotekPRBpemilikan()" v-model="PEMILIKAN_PENGELOLA_PEM_KAB_KOTA_APOTEK_PRB" name="pemilikan_pengelola_pem_kab_kota_APOTEK PRB" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">APOTEK PRB TNI/POLRI</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="jmlApotekPRBpemilikan()" v-model="PEMILIKAN_PENGELOLA_TNI_POLRI_APOTEK_PRB" name="pemilikan_pengelola_tni_polri_APOTEK PRB" placeholder="">
                          </div>
                        </div>                      
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">APOTEK PRB BUMN</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="jmlApotekPRBpemilikan()" v-model="PEMILIKAN_PENGELOLA_BUMN_APOTEK_PRB" name="pemilikan_pengelola_bumn_APOTEK PRB" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">APOTEK PRB SWASTA</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="jmlApotekPRBpemilikan()" v-model="PEMILIKAN_PENGELOLA_SWASTA_APOTEK_PRB" name="pemilikan_pengelola_swasta_APOTEK PRB" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">JUMLAH</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="PEMILIKAN_PENGELOLA_JUMLAH_APOTEK_PRB" name="pemilikan_pengelola_jumlah_APOTEK PRB" placeholder="" disabled="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">TOKO OBAT Kemenkes</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="jmlTokoObatpemilikan()" v-model="PEMILIKAN_PENGELOLA_KEMENKES_TOKO_OBAT" name="pemilikan_pengelola_kemenkes_TOKO OBAT" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">TOKO OBAT PEMPROV</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="jmlTokoObatpemilikan()" v-model="PEMILIKAN_PENGELOLA_PEM_PROV_TOKO_OBAT" name="pemilikan_pengelola_pem_prov_TOKO OBAT" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">TOKO OBAT PEMKAB/KOTA</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="jmlTokoObatpemilikan()" v-model="PEMILIKAN_PENGELOLA_PEM_KAB_KOTA_TOKO_OBAT" name="pemilikan_pengelola_pem_kab_kota_TOKO OBAT" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">TOKO OBAT TNI/POLRI</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="jmlTokoObatpemilikan()" v-model="PEMILIKAN_PENGELOLA_TNI_POLRI_TOKO_OBAT" name="pemilikan_pengelola_tni_polri_TOKO OBAT" placeholder="">
                          </div>
                        </div>                      
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">TOKO OBAT BUMN</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="jmlTokoObatpemilikan()" v-model="PEMILIKAN_PENGELOLA_BUMN_TOKO_OBAT" name="pemilikan_pengelola_bumn_TOKO OBAT" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">TOKO OBAT SWASTA</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="jmlTokoObatpemilikan()" v-model="PEMILIKAN_PENGELOLA_SWASTA_TOKO_OBAT" name="pemilikan_pengelola_swasta_TOKO OBAT" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">JUMLAH</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="PEMILIKAN_PENGELOLA_JUMLAH_TOKO_OBAT" name="pemilikan_pengelola_jumlah_TOKO OBAT" placeholder="" disabled="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">TOKO ALKES Kemenkes</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="jmlTokoAlkespemilikan()" v-model="PEMILIKAN_PENGELOLA_KEMENKES_TOKO_ALKES" name="pemilikan_pengelola_kemenkes_TOKO_ALKES" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">TOKO ALKES PEMPROV</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="jmlTokoAlkespemilikan()" v-model="PEMILIKAN_PENGELOLA_PEM_PROV_TOKO_ALKES" name="pemilikan_pengelola_pem_prov_TOKO_ALKES" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">TOKO ALKES PEMKAB/KOTA</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="jmlTokoAlkespemilikan()" v-model="PEMILIKAN_PENGELOLA_PEM_KAB_KOTA_TOKO_ALKES" name="pemilikan_pengelola_pem_kab_kota_TOKO_ALKES" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">TOKO ALKES TNI/POLRI</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="jmlTokoAlkespemilikan()" v-model="PEMILIKAN_PENGELOLA_TNI_POLRI_TOKO_ALKES" name="pemilikan_pengelola_tni_polri_TOKO_ALKES" placeholder="">
                          </div>
                        </div>                      
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">TOKO ALKES BUMN</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="jmlTokoAlkespemilikan()" v-model="PEMILIKAN_PENGELOLA_BUMN_TOKO_ALKES" name="pemilikan_pengelola_bumn_TOKO_ALKES" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">TOKO ALKES SWASTA</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-on:blur="jmlTokoAlkespemilikan()" v-model="PEMILIKAN_PENGELOLA_SWASTA_TOKO_ALKES" name="pemilikan_pengelola_swasta_TOKO_ALKES" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label">JUMLAH</label>
                          <div class="col-sm-4">
                            <input type="text" class="form-control" id="" v-model="PEMILIKAN_PENGELOLA_JUMLAH_TOKO_ALKES" name="pemilikan_pengelola_jumlah_TOKO_ALKES" placeholder="" disabled="">
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
            <router-link to="/table16"><a class="btn btn-success btn-md"><i class="fa fa-fw fa-arrow-left"></i> Kembali</a></router-link>
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
  name: 'Table4',
  data() {
    return {
      USERNAME: '',
      JENIS_RS: '',
      PILIH_BULAN: '1',
      PILIH_TAHUN: '2019',
      PUSKESMAS: '', 
      PEMILIKAN_PENGELOLA_KEMENKES_RUMAH_SAKIT_UMUM: 0,
      PEMILIKAN_PENGELOLA_KEMENKES_RUMAH_SAKIT_KHUSUS: 0,
      PEMILIKAN_PENGELOLA_KEMENKES_PUSKESMAS_RAWAT_INAP: 0,
      PEMILIKAN_PENGELOLA_KEMENKES_PUSKESMAS_NON_RAWAT_INAP: 0,
      PEMILIKAN_PENGELOLA_KEMENKES_PUSKESMAS_KELILING: 0,
      PEMILIKAN_PENGELOLA_KEMENKES_PUSKESMAS_PEMBANTU: 0,
      PEMILIKAN_PENGELOLA_KEMENKES_RUMAH_BERSALIN: 0,
      PEMILIKAN_PENGELOLA_KEMENKES_KLINIK_PRATAMA: 0,
      PEMILIKAN_PENGELOLA_KEMENKES_KLINIK_UTAMA: 0,
      PEMILIKAN_PENGELOLA_KEMENKES_BALAI_PENGOBATAN: 0,
      PEMILIKAN_PENGELOLA_KEMENKES_PRAKTIK_DOKTER_BERSAMA: 0,
      PEMILIKAN_PENGELOLA_KEMENKES_PRAKTIK_DOKTER_UMUM_PERORANGAN: 0,
      PEMILIKAN_PENGELOLA_KEMENKES_PRAKTIK_DOKTER_GIGI_PERORANGAN: 0,
      PEMILIKAN_PENGELOLA_KEMENKES_PRAKTIK_DOKTER_SPESIALIS_PERORANGAN: 0,
      PEMILIKAN_PENGELOLA_KEMENKES_PRAKTIK_PENGOBATAN_TRADISIONAL: 0,
      PEMILIKAN_PENGELOLA_KEMENKES_BANK_DARAH_RUMAH_SAKIT: 0,
      PEMILIKAN_PENGELOLA_KEMENKES_UNIT_TRANSFUSI_DARAH: 0,
      PEMILIKAN_PENGELOLA_KEMENKES_LABORATORIUM_KESEHATAN: 0,
      PEMILIKAN_PENGELOLA_KEMENKES_INDUSTRI_FARMASI: 0,
      PEMILIKAN_PENGELOLA_KEMENKES_INDUSTRI_OBAT_TRADISIONAL: 0,
      PEMILIKAN_PENGELOLA_KEMENKES_USAHA_MIKRO_OBAT_TRADISIONAL: 0,
      PEMILIKAN_PENGELOLA_KEMENKES_PRODUKSI_ALAT_KESEHATAN: 0,
      PEMILIKAN_PENGELOLA_KEMENKES_PEDAGANG_BESAR_FARMASI: 0,
      PEMILIKAN_PENGELOLA_KEMENKES_APOTEK: 0,
      PEMILIKAN_PENGELOLA_KEMENKES_APOTEK_PRB: 0,
      PEMILIKAN_PENGELOLA_KEMENKES_TOKO_OBAT: 0,
      PEMILIKAN_PENGELOLA_KEMENKES_TOKO_ALKES: 0,
      PEMILIKAN_PENGELOLA_PEM_PROV_RUMAH_SAKIT_UMUM: 0,
      PEMILIKAN_PENGELOLA_PEM_PROV_RUMAH_SAKIT_KHUSUS: 0,
      PEMILIKAN_PENGELOLA_PEM_PROV_PUSKESMAS_RAWAT_INAP: 0,
      PEMILIKAN_PENGELOLA_PEM_PROV_PUSKESMAS_NON_RAWAT_INAP: 0,
      PEMILIKAN_PENGELOLA_PEM_PROV_PUSKESMAS_KELILING: 0,
      PEMILIKAN_PENGELOLA_PEM_PROV_PUSKESMAS_PEMBANTU: 0,
      PEMILIKAN_PENGELOLA_PEM_PROV_RUMAH_BERSALIN: 0,
      PEMILIKAN_PENGELOLA_PEM_PROV_KLINIK_PRATAMA: 0,
      PEMILIKAN_PENGELOLA_PEM_PROV_KLINIK_UTAMA: 0,
      PEMILIKAN_PENGELOLA_PEM_PROV_BALAI_PENGOBATAN: 0,
      PEMILIKAN_PENGELOLA_PEM_PROV_PRAKTIK_DOKTER_BERSAMA: 0,
      PEMILIKAN_PENGELOLA_PEM_PROV_PRAKTIK_DOKTER_UMUM_PERORANGAN: 0,
      PEMILIKAN_PENGELOLA_PEM_PROV_PRAKTIK_DOKTER_GIGI_PERORANGAN: 0,
      PEMILIKAN_PENGELOLA_PEM_PROV_PRAKTIK_DOKTER_SPESIALIS_PERORANGAN: 0,
      PEMILIKAN_PENGELOLA_PEM_PROV_PRAKTIK_PENGOBATAN_TRADISIONAL: 0,
      PEMILIKAN_PENGELOLA_PEM_PROV_BANK_DARAH_RUMAH_SAKIT: 0,
      PEMILIKAN_PENGELOLA_PEM_PROV_UNIT_TRANSFUSI_DARAH: 0,
      PEMILIKAN_PENGELOLA_PEM_PROV_LABORATORIUM_KESEHATAN: 0,
      PEMILIKAN_PENGELOLA_PEM_PROV_INDUSTRI_FARMASI: 0,
      PEMILIKAN_PENGELOLA_PEM_PROV_INDUSTRI_OBAT_TRADISIONAL: 0,
      PEMILIKAN_PENGELOLA_PEM_PROV_USAHA_MIKRO_OBAT_TRADISIONAL: 0,
      PEMILIKAN_PENGELOLA_PEM_PROV_PRODUKSI_ALAT_KESEHATAN: 0,
      PEMILIKAN_PENGELOLA_PEM_PROV_PEDAGANG_BESAR_FARMASI: 0,
      PEMILIKAN_PENGELOLA_PEM_PROV_APOTEK: 0,
      PEMILIKAN_PENGELOLA_PEM_PROV_APOTEK_PRB: 0,
      PEMILIKAN_PENGELOLA_PEM_PROV_TOKO_OBAT: 0,
      PEMILIKAN_PENGELOLA_PEM_PROV_TOKO_ALKES: 0,
      PEMILIKAN_PENGELOLA_PEM_KAB_KOTA_RUMAH_SAKIT_UMUM: 0,
      PEMILIKAN_PENGELOLA_PEM_KAB_KOTA_RUMAH_SAKIT_KHUSUS: 0,
      PEMILIKAN_PENGELOLA_PEM_KAB_KOTA_PUSKESMAS_RAWAT_INAP: 0,
      PEMILIKAN_PENGELOLA_PEM_KAB_KOTA_PUSKESMAS_NON_RAWAT_INAP: 0,
      PEMILIKAN_PENGELOLA_PEM_KAB_KOTA_PUSKESMAS_KELILING: 0,
      PEMILIKAN_PENGELOLA_PEM_KAB_KOTA_PUSKESMAS_PEMBANTU: 0,
      PEMILIKAN_PENGELOLA_PEM_KAB_KOTA_RUMAH_BERSALIN: 0,
      PEMILIKAN_PENGELOLA_PEM_KAB_KOTA_KLINIK_PRATAMA: 0,
      PEMILIKAN_PENGELOLA_PEM_KAB_KOTA_KLINIK_UTAMA: 0,
      PEMILIKAN_PENGELOLA_PEM_KAB_KOTA_BALAI_PENGOBATAN: 0,
      PEMILIKAN_PENGELOLA_PEM_KAB_KOTA_PRAKTIK_DOKTER_BERSAMA: 0,
      PEMILIKAN_PENGELOLA_PEM_KAB_KOTA_PRAKTIK_DOKTER_UMUM_PERORANGAN: 0,
      PEMILIKAN_PENGELOLA_PEM_KAB_KOTA_PRAKTIK_DOKTER_GIGI_PERORANGAN: 0,
      PEMILIKAN_PENGELOLA_PEM_KAB_KOTA_PRAKTIK_DOKTER_SPESIALIS_PERORANGAN: 0,
      PEMILIKAN_PENGELOLA_PEM_KAB_KOTA_PRAKTIK_PENGOBATAN_TRADISIONAL: 0,
      PEMILIKAN_PENGELOLA_PEM_KAB_KOTA_BANK_DARAH_RUMAH_SAKIT: 0,
      PEMILIKAN_PENGELOLA_PEM_KAB_KOTA_UNIT_TRANSFUSI_DARAH: 0,
      PEMILIKAN_PENGELOLA_PEM_KAB_KOTA_LABORATORIUM_KESEHATAN: 0,
      PEMILIKAN_PENGELOLA_PEM_KAB_KOTA_INDUSTRI_FARMASI: 0,
      PEMILIKAN_PENGELOLA_PEM_KAB_KOTA_INDUSTRI_OBAT_TRADISIONAL: 0,
      PEMILIKAN_PENGELOLA_PEM_KAB_KOTA_USAHA_MIKRO_OBAT_TRADISIONAL: 0,
      PEMILIKAN_PENGELOLA_PEM_KAB_KOTA_PRODUKSI_ALAT_KESEHATAN: 0,
      PEMILIKAN_PENGELOLA_PEM_KAB_KOTA_PEDAGANG_BESAR_FARMASI: 0,
      PEMILIKAN_PENGELOLA_PEM_KAB_KOTA_APOTEK: 0,
      PEMILIKAN_PENGELOLA_PEM_KAB_KOTA_APOTEK_PRB: 0,
      PEMILIKAN_PENGELOLA_PEM_KAB_KOTA_TOKO_OBAT: 0,
      PEMILIKAN_PENGELOLA_PEM_KAB_KOTA_TOKO_ALKES: 0,
      PEMILIKAN_PENGELOLA_TNI_POLRI_RUMAH_SAKIT_UMUM: 0,
      PEMILIKAN_PENGELOLA_TNI_POLRI_RUMAH_SAKIT_KHUSUS: 0,
      PEMILIKAN_PENGELOLA_TNI_POLRI_PUSKESMAS_RAWAT_INAP: 0,
      PEMILIKAN_PENGELOLA_TNI_POLRI_PUSKESMAS_NON_RAWAT_INAP: 0,
      PEMILIKAN_PENGELOLA_TNI_POLRI_PUSKESMAS_KELILING: 0,
      PEMILIKAN_PENGELOLA_TNI_POLRI_PUSKESMAS_PEMBANTU: 0,
      PEMILIKAN_PENGELOLA_TNI_POLRI_RUMAH_BERSALIN: 0,
      PEMILIKAN_PENGELOLA_TNI_POLRI_KLINIK_PRATAMA: 0,
      PEMILIKAN_PENGELOLA_TNI_POLRI_KLINIK_UTAMA: 0,
      PEMILIKAN_PENGELOLA_TNI_POLRI_BALAI_PENGOBATAN: 0,
      PEMILIKAN_PENGELOLA_TNI_POLRI_PRAKTIK_DOKTER_BERSAMA: 0,
      PEMILIKAN_PENGELOLA_TNI_POLRI_PRAKTIK_DOKTER_UMUM_PERORANGAN: 0,
      PEMILIKAN_PENGELOLA_TNI_POLRI_PRAKTIK_DOKTER_GIGI_PERORANGAN: 0,
      PEMILIKAN_PENGELOLA_TNI_POLRI_PRAKTIK_DOKTER_SPESIALIS_PERORANGAN: 0,
      PEMILIKAN_PENGELOLA_TNI_POLRI_PRAKTIK_PENGOBATAN_TRADISIONAL: 0,
      PEMILIKAN_PENGELOLA_TNI_POLRI_BANK_DARAH_RUMAH_SAKIT: 0,
      PEMILIKAN_PENGELOLA_TNI_POLRI_UNIT_TRANSFUSI_DARAH: 0,
      PEMILIKAN_PENGELOLA_TNI_POLRI_LABORATORIUM_KESEHATAN: 0,
      PEMILIKAN_PENGELOLA_TNI_POLRI_INDUSTRI_FARMASI: 0,
      PEMILIKAN_PENGELOLA_TNI_POLRI_INDUSTRI_OBAT_TRADISIONAL: 0,
      PEMILIKAN_PENGELOLA_TNI_POLRI_USAHA_MIKRO_OBAT_TRADISIONAL: 0,
      PEMILIKAN_PENGELOLA_TNI_POLRI_PRODUKSI_ALAT_KESEHATAN: 0,
      PEMILIKAN_PENGELOLA_TNI_POLRI_PEDAGANG_BESAR_FARMASI: 0,
      PEMILIKAN_PENGELOLA_TNI_POLRI_APOTEK: 0,
      PEMILIKAN_PENGELOLA_TNI_POLRI_APOTEK_PRB: 0,
      PEMILIKAN_PENGELOLA_TNI_POLRI_TOKO_OBAT: 0,
      PEMILIKAN_PENGELOLA_TNI_POLRI_TOKO_ALKES: 0,
      PEMILIKAN_PENGELOLA_BUMN_RUMAH_SAKIT_UMUM: 0,
      PEMILIKAN_PENGELOLA_BUMN_RUMAH_SAKIT_KHUSUS: 0,
      PEMILIKAN_PENGELOLA_BUMN_PUSKESMAS_RAWAT_INAP: 0,
      PEMILIKAN_PENGELOLA_BUMN_PUSKESMAS_NON_RAWAT_INAP: 0,
      PEMILIKAN_PENGELOLA_BUMN_PUSKESMAS_KELILING: 0,
      PEMILIKAN_PENGELOLA_BUMN_PUSKESMAS_PEMBANTU: 0,
      PEMILIKAN_PENGELOLA_BUMN_RUMAH_BERSALIN: 0,
      PEMILIKAN_PENGELOLA_BUMN_KLINIK_PRATAMA: 0,
      PEMILIKAN_PENGELOLA_BUMN_KLINIK_UTAMA: 0,
      PEMILIKAN_PENGELOLA_BUMN_BALAI_PENGOBATAN: 0,
      PEMILIKAN_PENGELOLA_BUMN_PRAKTIK_DOKTER_BERSAMA: 0,
      PEMILIKAN_PENGELOLA_BUMN_PRAKTIK_DOKTER_UMUM_PERORANGAN: 0,
      PEMILIKAN_PENGELOLA_BUMN_PRAKTIK_DOKTER_GIGI_PERORANGAN: 0,
      PEMILIKAN_PENGELOLA_BUMN_PRAKTIK_DOKTER_SPESIALIS_PERORANGAN: 0,
      PEMILIKAN_PENGELOLA_BUMN_PRAKTIK_PENGOBATAN_TRADISIONAL: 0,
      PEMILIKAN_PENGELOLA_BUMN_BANK_DARAH_RUMAH_SAKIT: 0,
      PEMILIKAN_PENGELOLA_BUMN_UNIT_TRANSFUSI_DARAH: 0,
      PEMILIKAN_PENGELOLA_BUMN_LABORATORIUM_KESEHATAN: 0,
      PEMILIKAN_PENGELOLA_BUMN_INDUSTRI_FARMASI: 0,
      PEMILIKAN_PENGELOLA_BUMN_INDUSTRI_OBAT_TRADISIONAL: 0,
      PEMILIKAN_PENGELOLA_BUMN_USAHA_MIKRO_OBAT_TRADISIONAL: 0,
      PEMILIKAN_PENGELOLA_BUMN_PRODUKSI_ALAT_KESEHATAN: 0,
      PEMILIKAN_PENGELOLA_BUMN_PEDAGANG_BESAR_FARMASI: 0,
      PEMILIKAN_PENGELOLA_BUMN_APOTEK: 0,
      PEMILIKAN_PENGELOLA_BUMN_APOTEK_PRB: 0,
      PEMILIKAN_PENGELOLA_BUMN_TOKO_OBAT: 0,
      PEMILIKAN_PENGELOLA_BUMN_TOKO_ALKES: 0,
      PEMILIKAN_PENGELOLA_SWASTA_RUMAH_SAKIT_UMUM: 0,
      PEMILIKAN_PENGELOLA_SWASTA_RUMAH_SAKIT_KHUSUS: 0,
      PEMILIKAN_PENGELOLA_SWASTA_PUSKESMAS_RAWAT_INAP: 0,
      PEMILIKAN_PENGELOLA_SWASTA_PUSKESMAS_NON_RAWAT_INAP: 0,
      PEMILIKAN_PENGELOLA_SWASTA_PUSKESMAS_KELILING: 0,
      PEMILIKAN_PENGELOLA_SWASTA_PUSKESMAS_PEMBANTU: 0,
      PEMILIKAN_PENGELOLA_SWASTA_RUMAH_BERSALIN: 0,
      PEMILIKAN_PENGELOLA_SWASTA_KLINIK_PRATAMA: 0,
      PEMILIKAN_PENGELOLA_SWASTA_KLINIK_UTAMA: 0,
      PEMILIKAN_PENGELOLA_SWASTA_BALAI_PENGOBATAN: 0,
      PEMILIKAN_PENGELOLA_SWASTA_PRAKTIK_DOKTER_BERSAMA: 0,
      PEMILIKAN_PENGELOLA_SWASTA_PRAKTIK_DOKTER_UMUM_PERORANGAN: 0,
      PEMILIKAN_PENGELOLA_SWASTA_PRAKTIK_DOKTER_GIGI_PERORANGAN: 0,
      PEMILIKAN_PENGELOLA_SWASTA_PRAKTIK_DOKTER_SPESIALIS_PERORANGAN: 0,
      PEMILIKAN_PENGELOLA_SWASTA_PRAKTIK_PENGOBATAN_TRADISIONAL: 0,
      PEMILIKAN_PENGELOLA_SWASTA_BANK_DARAH_RUMAH_SAKIT: 0,
      PEMILIKAN_PENGELOLA_SWASTA_UNIT_TRANSFUSI_DARAH: 0,
      PEMILIKAN_PENGELOLA_SWASTA_LABORATORIUM_KESEHATAN: 0,
      PEMILIKAN_PENGELOLA_SWASTA_INDUSTRI_FARMASI: 0,
      PEMILIKAN_PENGELOLA_SWASTA_INDUSTRI_OBAT_TRADISIONAL: 0,
      PEMILIKAN_PENGELOLA_SWASTA_USAHA_MIKRO_OBAT_TRADISIONAL: 0,
      PEMILIKAN_PENGELOLA_SWASTA_PRODUKSI_ALAT_KESEHATAN: 0,
      PEMILIKAN_PENGELOLA_SWASTA_PEDAGANG_BESAR_FARMASI: 0,
      PEMILIKAN_PENGELOLA_SWASTA_APOTEK: 0,
      PEMILIKAN_PENGELOLA_SWASTA_APOTEK_PRB: 0,
      PEMILIKAN_PENGELOLA_SWASTA_TOKO_OBAT: 0,
      PEMILIKAN_PENGELOLA_SWASTA_TOKO_ALKES: 0,
      PEMILIKAN_PENGELOLA_JUMLAH_RUMAH_SAKIT_UMUM: 0,
      PEMILIKAN_PENGELOLA_JUMLAH_RUMAH_SAKIT_KHUSUS: 0,
      PEMILIKAN_PENGELOLA_JUMLAH_PUSKESMAS_RAWAT_INAP: 0,
      PEMILIKAN_PENGELOLA_JUMLAH_PUSKESMAS_NON_RAWAT_INAP: 0,
      PEMILIKAN_PENGELOLA_JUMLAH_PUSKESMAS_KELILING: 0,
      PEMILIKAN_PENGELOLA_JUMLAH_PUSKESMAS_PEMBANTU: 0,
      PEMILIKAN_PENGELOLA_JUMLAH_RUMAH_BERSALIN: 0,
      PEMILIKAN_PENGELOLA_JUMLAH_KLINIK_PRATAMA: 0,
      PEMILIKAN_PENGELOLA_JUMLAH_KLINIK_UTAMA: 0,
      PEMILIKAN_PENGELOLA_JUMLAH_BALAI_PENGOBATAN: 0,
      PEMILIKAN_PENGELOLA_JUMLAH_PRAKTIK_DOKTER_BERSAMA: 0,
      PEMILIKAN_PENGELOLA_JUMLAH_PRAKTIK_DOKTER_UMUM_PERORANGAN: 0,
      PEMILIKAN_PENGELOLA_JUMLAH_PRAKTIK_DOKTER_GIGI_PERORANGAN: 0,
      PEMILIKAN_PENGELOLA_JUMLAH_PRAKTIK_DOKTER_SPESIALIS_PERORANGAN: 0,
      PEMILIKAN_PENGELOLA_JUMLAH_PRAKTIK_PENGOBATAN_TRADISIONAL: 0,
      PEMILIKAN_PENGELOLA_JUMLAH_BANK_DARAH_RUMAH_SAKIT: 0,
      PEMILIKAN_PENGELOLA_JUMLAH_UNIT_TRANSFUSI_DARAH: 0,
      PEMILIKAN_PENGELOLA_JUMLAH_LABORATORIUM_KESEHATAN: 0,
      PEMILIKAN_PENGELOLA_JUMLAH_INDUSTRI_FARMASI: 0,
      PEMILIKAN_PENGELOLA_JUMLAH_INDUSTRI_OBAT_TRADISIONAL: 0,
      PEMILIKAN_PENGELOLA_JUMLAH_USAHA_MIKRO_OBAT_TRADISIONAL: 0,
      PEMILIKAN_PENGELOLA_JUMLAH_PRODUKSI_ALAT_KESEHATAN: 0,
      PEMILIKAN_PENGELOLA_JUMLAH_PEDAGANG_BESAR_FARMASI: 0,
      PEMILIKAN_PENGELOLA_JUMLAH_APOTEK: 0,
      PEMILIKAN_PENGELOLA_JUMLAH_APOTEK_PRB: 0,
      PEMILIKAN_PENGELOLA_JUMLAH_TOKO_OBAT: 0,
      PEMILIKAN_PENGELOLA_JUMLAH_TOKO_ALKES: 0,    

      isUpdate: false  
    }
  },
  methods: {
    initialData: function() {
      return {
        PEMILIKAN_PENGELOLA_KEMENKES_RUMAH_SAKIT_UMUM: 0,
        PEMILIKAN_PENGELOLA_KEMENKES_RUMAH_SAKIT_KHUSUS: 0,
        PEMILIKAN_PENGELOLA_KEMENKES_PUSKESMAS_RAWAT_INAP: 0,
        PEMILIKAN_PENGELOLA_KEMENKES_PUSKESMAS_NON_RAWAT_INAP: 0,
        PEMILIKAN_PENGELOLA_KEMENKES_PUSKESMAS_KELILING: 0,
        PEMILIKAN_PENGELOLA_KEMENKES_PUSKESMAS_PEMBANTU: 0,
        PEMILIKAN_PENGELOLA_KEMENKES_RUMAH_BERSALIN: 0,
        PEMILIKAN_PENGELOLA_KEMENKES_KLINIK_PRATAMA: 0,
        PEMILIKAN_PENGELOLA_KEMENKES_KLINIK_UTAMA: 0,
        PEMILIKAN_PENGELOLA_KEMENKES_BALAI_PENGOBATAN: 0,
        PEMILIKAN_PENGELOLA_KEMENKES_PRAKTIK_DOKTER_BERSAMA: 0,
        PEMILIKAN_PENGELOLA_KEMENKES_PRAKTIK_DOKTER_UMUM_PERORANGAN: 0,
        PEMILIKAN_PENGELOLA_KEMENKES_PRAKTIK_DOKTER_GIGI_PERORANGAN: 0,
        PEMILIKAN_PENGELOLA_KEMENKES_PRAKTIK_DOKTER_SPESIALIS_PERORANGAN: 0,
        PEMILIKAN_PENGELOLA_KEMENKES_PRAKTIK_PENGOBATAN_TRADISIONAL: 0,
        PEMILIKAN_PENGELOLA_KEMENKES_BANK_DARAH_RUMAH_SAKIT: 0,
        PEMILIKAN_PENGELOLA_KEMENKES_UNIT_TRANSFUSI_DARAH: 0,
        PEMILIKAN_PENGELOLA_KEMENKES_LABORATORIUM_KESEHATAN: 0,
        PEMILIKAN_PENGELOLA_KEMENKES_INDUSTRI_FARMASI: 0,
        PEMILIKAN_PENGELOLA_KEMENKES_INDUSTRI_OBAT_TRADISIONAL: 0,
        PEMILIKAN_PENGELOLA_KEMENKES_USAHA_MIKRO_OBAT_TRADISIONAL: 0,
        PEMILIKAN_PENGELOLA_KEMENKES_PRODUKSI_ALAT_KESEHATAN: 0,
        PEMILIKAN_PENGELOLA_KEMENKES_PEDAGANG_BESAR_FARMASI: 0,
        PEMILIKAN_PENGELOLA_KEMENKES_APOTEK: 0,
        PEMILIKAN_PENGELOLA_KEMENKES_APOTEK_PRB: 0,
        PEMILIKAN_PENGELOLA_KEMENKES_TOKO_OBAT: 0,
        PEMILIKAN_PENGELOLA_KEMENKES_TOKO_ALKES: 0,
        PEMILIKAN_PENGELOLA_PEM_PROV_RUMAH_SAKIT_UMUM: 0,
        PEMILIKAN_PENGELOLA_PEM_PROV_RUMAH_SAKIT_KHUSUS: 0,
        PEMILIKAN_PENGELOLA_PEM_PROV_PUSKESMAS_RAWAT_INAP: 0,
        PEMILIKAN_PENGELOLA_PEM_PROV_PUSKESMAS_NON_RAWAT_INAP: 0,
        PEMILIKAN_PENGELOLA_PEM_PROV_PUSKESMAS_KELILING: 0,
        PEMILIKAN_PENGELOLA_PEM_PROV_PUSKESMAS_PEMBANTU: 0,
        PEMILIKAN_PENGELOLA_PEM_PROV_RUMAH_BERSALIN: 0,
        PEMILIKAN_PENGELOLA_PEM_PROV_KLINIK_PRATAMA: 0,
        PEMILIKAN_PENGELOLA_PEM_PROV_KLINIK_UTAMA: 0,
        PEMILIKAN_PENGELOLA_PEM_PROV_BALAI_PENGOBATAN: 0,
        PEMILIKAN_PENGELOLA_PEM_PROV_PRAKTIK_DOKTER_BERSAMA: 0,
        PEMILIKAN_PENGELOLA_PEM_PROV_PRAKTIK_DOKTER_UMUM_PERORANGAN: 0,
        PEMILIKAN_PENGELOLA_PEM_PROV_PRAKTIK_DOKTER_GIGI_PERORANGAN: 0,
        PEMILIKAN_PENGELOLA_PEM_PROV_PRAKTIK_DOKTER_SPESIALIS_PERORANGAN: 0,
        PEMILIKAN_PENGELOLA_PEM_PROV_PRAKTIK_PENGOBATAN_TRADISIONAL: 0,
        PEMILIKAN_PENGELOLA_PEM_PROV_BANK_DARAH_RUMAH_SAKIT: 0,
        PEMILIKAN_PENGELOLA_PEM_PROV_UNIT_TRANSFUSI_DARAH: 0,
        PEMILIKAN_PENGELOLA_PEM_PROV_LABORATORIUM_KESEHATAN: 0,
        PEMILIKAN_PENGELOLA_PEM_PROV_INDUSTRI_FARMASI: 0,
        PEMILIKAN_PENGELOLA_PEM_PROV_INDUSTRI_OBAT_TRADISIONAL: 0,
        PEMILIKAN_PENGELOLA_PEM_PROV_USAHA_MIKRO_OBAT_TRADISIONAL: 0,
        PEMILIKAN_PENGELOLA_PEM_PROV_PRODUKSI_ALAT_KESEHATAN: 0,
        PEMILIKAN_PENGELOLA_PEM_PROV_PEDAGANG_BESAR_FARMASI: 0,
        PEMILIKAN_PENGELOLA_PEM_PROV_APOTEK: 0,
        PEMILIKAN_PENGELOLA_PEM_PROV_APOTEK_PRB: 0,
        PEMILIKAN_PENGELOLA_PEM_PROV_TOKO_OBAT: 0,
        PEMILIKAN_PENGELOLA_PEM_PROV_TOKO_ALKES: 0,
        PEMILIKAN_PENGELOLA_PEM_KAB_KOTA_RUMAH_SAKIT_UMUM: 0,
        PEMILIKAN_PENGELOLA_PEM_KAB_KOTA_RUMAH_SAKIT_KHUSUS: 0,
        PEMILIKAN_PENGELOLA_PEM_KAB_KOTA_PUSKESMAS_RAWAT_INAP: 0,
        PEMILIKAN_PENGELOLA_PEM_KAB_KOTA_PUSKESMAS_NON_RAWAT_INAP: 0,
        PEMILIKAN_PENGELOLA_PEM_KAB_KOTA_PUSKESMAS_KELILING: 0,
        PEMILIKAN_PENGELOLA_PEM_KAB_KOTA_PUSKESMAS_PEMBANTU: 0,
        PEMILIKAN_PENGELOLA_PEM_KAB_KOTA_RUMAH_BERSALIN: 0,
        PEMILIKAN_PENGELOLA_PEM_KAB_KOTA_KLINIK_PRATAMA: 0,
        PEMILIKAN_PENGELOLA_PEM_KAB_KOTA_KLINIK_UTAMA: 0,
        PEMILIKAN_PENGELOLA_PEM_KAB_KOTA_BALAI_PENGOBATAN: 0,
        PEMILIKAN_PENGELOLA_PEM_KAB_KOTA_PRAKTIK_DOKTER_BERSAMA: 0,
        PEMILIKAN_PENGELOLA_PEM_KAB_KOTA_PRAKTIK_DOKTER_UMUM_PERORANGAN: 0,
        PEMILIKAN_PENGELOLA_PEM_KAB_KOTA_PRAKTIK_DOKTER_GIGI_PERORANGAN: 0,
        PEMILIKAN_PENGELOLA_PEM_KAB_KOTA_PRAKTIK_DOKTER_SPESIALIS_PERORANGAN: 0,
        PEMILIKAN_PENGELOLA_PEM_KAB_KOTA_PRAKTIK_PENGOBATAN_TRADISIONAL: 0,
        PEMILIKAN_PENGELOLA_PEM_KAB_KOTA_BANK_DARAH_RUMAH_SAKIT: 0,
        PEMILIKAN_PENGELOLA_PEM_KAB_KOTA_UNIT_TRANSFUSI_DARAH: 0,
        PEMILIKAN_PENGELOLA_PEM_KAB_KOTA_LABORATORIUM_KESEHATAN: 0,
        PEMILIKAN_PENGELOLA_PEM_KAB_KOTA_INDUSTRI_FARMASI: 0,
        PEMILIKAN_PENGELOLA_PEM_KAB_KOTA_INDUSTRI_OBAT_TRADISIONAL: 0,
        PEMILIKAN_PENGELOLA_PEM_KAB_KOTA_USAHA_MIKRO_OBAT_TRADISIONAL: 0,
        PEMILIKAN_PENGELOLA_PEM_KAB_KOTA_PRODUKSI_ALAT_KESEHATAN: 0,
        PEMILIKAN_PENGELOLA_PEM_KAB_KOTA_PEDAGANG_BESAR_FARMASI: 0,
        PEMILIKAN_PENGELOLA_PEM_KAB_KOTA_APOTEK: 0,
        PEMILIKAN_PENGELOLA_PEM_KAB_KOTA_APOTEK_PRB: 0,
        PEMILIKAN_PENGELOLA_PEM_KAB_KOTA_TOKO_OBAT: 0,
        PEMILIKAN_PENGELOLA_PEM_KAB_KOTA_TOKO_ALKES: 0,
        PEMILIKAN_PENGELOLA_TNI_POLRI_RUMAH_SAKIT_UMUM: 0,
        PEMILIKAN_PENGELOLA_TNI_POLRI_RUMAH_SAKIT_KHUSUS: 0,
        PEMILIKAN_PENGELOLA_TNI_POLRI_PUSKESMAS_RAWAT_INAP: 0,
        PEMILIKAN_PENGELOLA_TNI_POLRI_PUSKESMAS_NON_RAWAT_INAP: 0,
        PEMILIKAN_PENGELOLA_TNI_POLRI_PUSKESMAS_KELILING: 0,
        PEMILIKAN_PENGELOLA_TNI_POLRI_PUSKESMAS_PEMBANTU: 0,
        PEMILIKAN_PENGELOLA_TNI_POLRI_RUMAH_BERSALIN: 0,
        PEMILIKAN_PENGELOLA_TNI_POLRI_KLINIK_PRATAMA: 0,
        PEMILIKAN_PENGELOLA_TNI_POLRI_KLINIK_UTAMA: 0,
        PEMILIKAN_PENGELOLA_TNI_POLRI_BALAI_PENGOBATAN: 0,
        PEMILIKAN_PENGELOLA_TNI_POLRI_PRAKTIK_DOKTER_BERSAMA: 0,
        PEMILIKAN_PENGELOLA_TNI_POLRI_PRAKTIK_DOKTER_UMUM_PERORANGAN: 0,
        PEMILIKAN_PENGELOLA_TNI_POLRI_PRAKTIK_DOKTER_GIGI_PERORANGAN: 0,
        PEMILIKAN_PENGELOLA_TNI_POLRI_PRAKTIK_DOKTER_SPESIALIS_PERORANGAN: 0,
        PEMILIKAN_PENGELOLA_TNI_POLRI_PRAKTIK_PENGOBATAN_TRADISIONAL: 0,
        PEMILIKAN_PENGELOLA_TNI_POLRI_BANK_DARAH_RUMAH_SAKIT: 0,
        PEMILIKAN_PENGELOLA_TNI_POLRI_UNIT_TRANSFUSI_DARAH: 0,
        PEMILIKAN_PENGELOLA_TNI_POLRI_LABORATORIUM_KESEHATAN: 0,
        PEMILIKAN_PENGELOLA_TNI_POLRI_INDUSTRI_FARMASI: 0,
        PEMILIKAN_PENGELOLA_TNI_POLRI_INDUSTRI_OBAT_TRADISIONAL: 0,
        PEMILIKAN_PENGELOLA_TNI_POLRI_USAHA_MIKRO_OBAT_TRADISIONAL: 0,
        PEMILIKAN_PENGELOLA_TNI_POLRI_PRODUKSI_ALAT_KESEHATAN: 0,
        PEMILIKAN_PENGELOLA_TNI_POLRI_PEDAGANG_BESAR_FARMASI: 0,
        PEMILIKAN_PENGELOLA_TNI_POLRI_APOTEK: 0,
        PEMILIKAN_PENGELOLA_TNI_POLRI_APOTEK_PRB: 0,
        PEMILIKAN_PENGELOLA_TNI_POLRI_TOKO_OBAT: 0,
        PEMILIKAN_PENGELOLA_TNI_POLRI_TOKO_ALKES: 0,
        PEMILIKAN_PENGELOLA_BUMN_RUMAH_SAKIT_UMUM: 0,
        PEMILIKAN_PENGELOLA_BUMN_RUMAH_SAKIT_KHUSUS: 0,
        PEMILIKAN_PENGELOLA_BUMN_PUSKESMAS_RAWAT_INAP: 0,
        PEMILIKAN_PENGELOLA_BUMN_PUSKESMAS_NON_RAWAT_INAP: 0,
        PEMILIKAN_PENGELOLA_BUMN_PUSKESMAS_KELILING: 0,
        PEMILIKAN_PENGELOLA_BUMN_PUSKESMAS_PEMBANTU: 0,
        PEMILIKAN_PENGELOLA_BUMN_RUMAH_BERSALIN: 0,
        PEMILIKAN_PENGELOLA_BUMN_KLINIK_PRATAMA: 0,
        PEMILIKAN_PENGELOLA_BUMN_KLINIK_UTAMA: 0,
        PEMILIKAN_PENGELOLA_BUMN_BALAI_PENGOBATAN: 0,
        PEMILIKAN_PENGELOLA_BUMN_PRAKTIK_DOKTER_BERSAMA: 0,
        PEMILIKAN_PENGELOLA_BUMN_PRAKTIK_DOKTER_UMUM_PERORANGAN: 0,
        PEMILIKAN_PENGELOLA_BUMN_PRAKTIK_DOKTER_GIGI_PERORANGAN: 0,
        PEMILIKAN_PENGELOLA_BUMN_PRAKTIK_DOKTER_SPESIALIS_PERORANGAN: 0,
        PEMILIKAN_PENGELOLA_BUMN_PRAKTIK_PENGOBATAN_TRADISIONAL: 0,
        PEMILIKAN_PENGELOLA_BUMN_BANK_DARAH_RUMAH_SAKIT: 0,
        PEMILIKAN_PENGELOLA_BUMN_UNIT_TRANSFUSI_DARAH: 0,
        PEMILIKAN_PENGELOLA_BUMN_LABORATORIUM_KESEHATAN: 0,
        PEMILIKAN_PENGELOLA_BUMN_INDUSTRI_FARMASI: 0,
        PEMILIKAN_PENGELOLA_BUMN_INDUSTRI_OBAT_TRADISIONAL: 0,
        PEMILIKAN_PENGELOLA_BUMN_USAHA_MIKRO_OBAT_TRADISIONAL: 0,
        PEMILIKAN_PENGELOLA_BUMN_PRODUKSI_ALAT_KESEHATAN: 0,
        PEMILIKAN_PENGELOLA_BUMN_PEDAGANG_BESAR_FARMASI: 0,
        PEMILIKAN_PENGELOLA_BUMN_APOTEK: 0,
        PEMILIKAN_PENGELOLA_BUMN_APOTEK_PRB: 0,
        PEMILIKAN_PENGELOLA_BUMN_TOKO_OBAT: 0,
        PEMILIKAN_PENGELOLA_BUMN_TOKO_ALKES: 0,
        PEMILIKAN_PENGELOLA_SWASTA_RUMAH_SAKIT_UMUM: 0,
        PEMILIKAN_PENGELOLA_SWASTA_RUMAH_SAKIT_KHUSUS: 0,
        PEMILIKAN_PENGELOLA_SWASTA_PUSKESMAS_RAWAT_INAP: 0,
        PEMILIKAN_PENGELOLA_SWASTA_PUSKESMAS_NON_RAWAT_INAP: 0,
        PEMILIKAN_PENGELOLA_SWASTA_PUSKESMAS_KELILING: 0,
        PEMILIKAN_PENGELOLA_SWASTA_PUSKESMAS_PEMBANTU: 0,
        PEMILIKAN_PENGELOLA_SWASTA_RUMAH_BERSALIN: 0,
        PEMILIKAN_PENGELOLA_SWASTA_KLINIK_PRATAMA: 0,
        PEMILIKAN_PENGELOLA_SWASTA_KLINIK_UTAMA: 0,
        PEMILIKAN_PENGELOLA_SWASTA_BALAI_PENGOBATAN: 0,
        PEMILIKAN_PENGELOLA_SWASTA_PRAKTIK_DOKTER_BERSAMA: 0,
        PEMILIKAN_PENGELOLA_SWASTA_PRAKTIK_DOKTER_UMUM_PERORANGAN: 0,
        PEMILIKAN_PENGELOLA_SWASTA_PRAKTIK_DOKTER_GIGI_PERORANGAN: 0,
        PEMILIKAN_PENGELOLA_SWASTA_PRAKTIK_DOKTER_SPESIALIS_PERORANGAN: 0,
        PEMILIKAN_PENGELOLA_SWASTA_PRAKTIK_PENGOBATAN_TRADISIONAL: 0,
        PEMILIKAN_PENGELOLA_SWASTA_BANK_DARAH_RUMAH_SAKIT: 0,
        PEMILIKAN_PENGELOLA_SWASTA_UNIT_TRANSFUSI_DARAH: 0,
        PEMILIKAN_PENGELOLA_SWASTA_LABORATORIUM_KESEHATAN: 0,
        PEMILIKAN_PENGELOLA_SWASTA_INDUSTRI_FARMASI: 0,
        PEMILIKAN_PENGELOLA_SWASTA_INDUSTRI_OBAT_TRADISIONAL: 0,
        PEMILIKAN_PENGELOLA_SWASTA_USAHA_MIKRO_OBAT_TRADISIONAL: 0,
        PEMILIKAN_PENGELOLA_SWASTA_PRODUKSI_ALAT_KESEHATAN: 0,
        PEMILIKAN_PENGELOLA_SWASTA_PEDAGANG_BESAR_FARMASI: 0,
        PEMILIKAN_PENGELOLA_SWASTA_APOTEK: 0,
        PEMILIKAN_PENGELOLA_SWASTA_APOTEK_PRB: 0,
        PEMILIKAN_PENGELOLA_SWASTA_TOKO_OBAT: 0,
        PEMILIKAN_PENGELOLA_SWASTA_TOKO_ALKES: 0,
        PEMILIKAN_PENGELOLA_JUMLAH_RUMAH_SAKIT_UMUM: 0,
        PEMILIKAN_PENGELOLA_JUMLAH_RUMAH_SAKIT_KHUSUS: 0,
        PEMILIKAN_PENGELOLA_JUMLAH_PUSKESMAS_RAWAT_INAP: 0,
        PEMILIKAN_PENGELOLA_JUMLAH_PUSKESMAS_NON_RAWAT_INAP: 0,
        PEMILIKAN_PENGELOLA_JUMLAH_PUSKESMAS_KELILING: 0,
        PEMILIKAN_PENGELOLA_JUMLAH_PUSKESMAS_PEMBANTU: 0,
        PEMILIKAN_PENGELOLA_JUMLAH_RUMAH_BERSALIN: 0,
        PEMILIKAN_PENGELOLA_JUMLAH_KLINIK_PRATAMA: 0,
        PEMILIKAN_PENGELOLA_JUMLAH_KLINIK_UTAMA: 0,
        PEMILIKAN_PENGELOLA_JUMLAH_BALAI_PENGOBATAN: 0,
        PEMILIKAN_PENGELOLA_JUMLAH_PRAKTIK_DOKTER_BERSAMA: 0,
        PEMILIKAN_PENGELOLA_JUMLAH_PRAKTIK_DOKTER_UMUM_PERORANGAN: 0,
        PEMILIKAN_PENGELOLA_JUMLAH_PRAKTIK_DOKTER_GIGI_PERORANGAN: 0,
        PEMILIKAN_PENGELOLA_JUMLAH_PRAKTIK_DOKTER_SPESIALIS_PERORANGAN: 0,
        PEMILIKAN_PENGELOLA_JUMLAH_PRAKTIK_PENGOBATAN_TRADISIONAL: 0,
        PEMILIKAN_PENGELOLA_JUMLAH_BANK_DARAH_RUMAH_SAKIT: 0,
        PEMILIKAN_PENGELOLA_JUMLAH_UNIT_TRANSFUSI_DARAH: 0,
        PEMILIKAN_PENGELOLA_JUMLAH_LABORATORIUM_KESEHATAN: 0,
        PEMILIKAN_PENGELOLA_JUMLAH_INDUSTRI_FARMASI: 0,
        PEMILIKAN_PENGELOLA_JUMLAH_INDUSTRI_OBAT_TRADISIONAL: 0,
        PEMILIKAN_PENGELOLA_JUMLAH_USAHA_MIKRO_OBAT_TRADISIONAL: 0,
        PEMILIKAN_PENGELOLA_JUMLAH_PRODUKSI_ALAT_KESEHATAN: 0,
        PEMILIKAN_PENGELOLA_JUMLAH_PEDAGANG_BESAR_FARMASI: 0,
        PEMILIKAN_PENGELOLA_JUMLAH_APOTEK: 0,
        PEMILIKAN_PENGELOLA_JUMLAH_APOTEK_PRB: 0,
        PEMILIKAN_PENGELOLA_JUMLAH_TOKO_OBAT: 0,
        PEMILIKAN_PENGELOLA_JUMLAH_TOKO_ALKES: 0,       
      }
    },        
    jmlRSUpemilikan: function() {      
      this.PEMILIKAN_PENGELOLA_JUMLAH_RUMAH_SAKIT_UMUM = 
        parseInt((this.PEMILIKAN_PENGELOLA_KEMENKES_RUMAH_SAKIT_UMUM == '') ? 0 : this.PEMILIKAN_PENGELOLA_KEMENKES_RUMAH_SAKIT_UMUM)+
        parseInt((this.PEMILIKAN_PENGELOLA_PEM_PROV_RUMAH_SAKIT_UMUM == '') ? 0 : this.PEMILIKAN_PENGELOLA_PEM_PROV_RUMAH_SAKIT_UMUM)+  
        parseInt((this.PEMILIKAN_PENGELOLA_PEM_KAB_KOTA_RUMAH_SAKIT_UMUM == '') ? 0 : this.PEMILIKAN_PENGELOLA_PEM_KAB_KOTA_RUMAH_SAKIT_UMUM)+   
        parseInt((this.PEMILIKAN_PENGELOLA_TNI_POLRI_RUMAH_SAKIT_UMUM == '') ? 0 : this.PEMILIKAN_PENGELOLA_TNI_POLRI_RUMAH_SAKIT_UMUM)+   
        parseInt((this.PEMILIKAN_PENGELOLA_BUMN_RUMAH_SAKIT_UMUM == '') ? 0 : this.PEMILIKAN_PENGELOLA_BUMN_RUMAH_SAKIT_UMUM)+
        parseInt((this.PEMILIKAN_PENGELOLA_SWASTA_RUMAH_SAKIT_UMUM == '') ? 0 : this.PEMILIKAN_PENGELOLA_SWASTA_RUMAH_SAKIT_UMUM);    
    },
    jmlRSkpemilikan: function() {      
      this.PEMILIKAN_PENGELOLA_JUMLAH_RUMAH_SAKIT_KHUSUS = 
        parseInt((this.PEMILIKAN_PENGELOLA_KEMENKES_RUMAH_SAKIT_KHUSUS == '') ? 0 : this.PEMILIKAN_PENGELOLA_KEMENKES_RUMAH_SAKIT_KHUSUS)+
        parseInt((this.PEMILIKAN_PENGELOLA_PEM_PROV_RUMAH_SAKIT_KHUSUS == '') ? 0 : this.PEMILIKAN_PENGELOLA_PEM_PROV_RUMAH_SAKIT_KHUSUS)+  
        parseInt((this.PEMILIKAN_PENGELOLA_PEM_KAB_KOTA_RUMAH_SAKIT_KHUSUS == '') ? 0 : this.PEMILIKAN_PENGELOLA_PEM_KAB_KOTA_RUMAH_SAKIT_KHUSUS)+   
        parseInt((this.PEMILIKAN_PENGELOLA_TNI_POLRI_RUMAH_SAKIT_KHUSUS == '') ? 0 : this.PEMILIKAN_PENGELOLA_TNI_POLRI_RUMAH_SAKIT_KHUSUS)+   
        parseInt((this.PEMILIKAN_PENGELOLA_BUMN_RUMAH_SAKIT_KHUSUS == '') ? 0 : this.PEMILIKAN_PENGELOLA_BUMN_RUMAH_SAKIT_KHUSUS)+
        parseInt((this.PEMILIKAN_PENGELOLA_SWASTA_RUMAH_SAKIT_KHUSUS == '') ? 0 : this.PEMILIKAN_PENGELOLA_SWASTA_RUMAH_SAKIT_KHUSUS);    
    },
    jmlpkmRIpemilikan: function() {      
      this.PEMILIKAN_PENGELOLA_JUMLAH_PUSKESMAS_RAWAT_INAP = 
        parseInt((this.PEMILIKAN_PENGELOLA_KEMENKES_PUSKESMAS_RAWAT_INAP == '') ? 0 : this.PEMILIKAN_PENGELOLA_KEMENKES_PUSKESMAS_RAWAT_INAP)+
        parseInt((this.PEMILIKAN_PENGELOLA_PEM_PROV_PUSKESMAS_RAWAT_INAP == '') ? 0 : this.PEMILIKAN_PENGELOLA_PEM_PROV_PUSKESMAS_RAWAT_INAP)+  
        parseInt((this.PEMILIKAN_PENGELOLA_PEM_KAB_KOTA_PUSKESMAS_RAWAT_INAP == '') ? 0 : this.PEMILIKAN_PENGELOLA_PEM_KAB_KOTA_PUSKESMAS_RAWAT_INAP)+   
        parseInt((this.PEMILIKAN_PENGELOLA_TNI_POLRI_PUSKESMAS_RAWAT_INAP == '') ? 0 : this.PEMILIKAN_PENGELOLA_TNI_POLRI_PUSKESMAS_RAWAT_INAP)+   
        parseInt((this.PEMILIKAN_PENGELOLA_BUMN_PUSKESMAS_RAWAT_INAP == '') ? 0 : this.PEMILIKAN_PENGELOLA_BUMN_PUSKESMAS_RAWAT_INAP)+
        parseInt((this.PEMILIKAN_PENGELOLA_SWASTA_PUSKESMAS_RAWAT_INAP == '') ? 0 : this.PEMILIKAN_PENGELOLA_SWASTA_PUSKESMAS_RAWAT_INAP);    
    }, 
    jmlpkmNRIpemilikan: function() {      
      this.PEMILIKAN_PENGELOLA_JUMLAH_PUSKESMAS_NON_RAWAT_INAP = 
        parseInt((this.PEMILIKAN_PENGELOLA_KEMENKES_PUSKESMAS_NON_RAWAT_INAP == '') ? 0 : this.PEMILIKAN_PENGELOLA_KEMENKES_PUSKESMAS_NON_RAWAT_INAP)+
        parseInt((this.PEMILIKAN_PENGELOLA_PEM_PROV_PUSKESMAS_NON_RAWAT_INAP == '') ? 0 : this.PEMILIKAN_PENGELOLA_PEM_PROV_PUSKESMAS_NON_RAWAT_INAP)+  
        parseInt((this.PEMILIKAN_PENGELOLA_PEM_KAB_KOTA_PUSKESMAS_NON_RAWAT_INAP == '') ? 0 : this.PEMILIKAN_PENGELOLA_PEM_KAB_KOTA_PUSKESMAS_NON_RAWAT_INAP)+   
        parseInt((this.PEMILIKAN_PENGELOLA_TNI_POLRI_PUSKESMAS_NON_RAWAT_INAP == '') ? 0 : this.PEMILIKAN_PENGELOLA_TNI_POLRI_PUSKESMAS_NON_RAWAT_INAP)+   
        parseInt((this.PEMILIKAN_PENGELOLA_BUMN_PUSKESMAS_NON_RAWAT_INAP == '') ? 0 : this.PEMILIKAN_PENGELOLA_BUMN_PUSKESMAS_NON_RAWAT_INAP)+
        parseInt((this.PEMILIKAN_PENGELOLA_SWASTA_PUSKESMAS_NON_RAWAT_INAP == '') ? 0 : this.PEMILIKAN_PENGELOLA_SWASTA_PUSKESMAS_NON_RAWAT_INAP);    
    },
    jmlpkmKelilingpemilikan: function() {      
      this.PEMILIKAN_PENGELOLA_JUMLAH_PUSKESMAS_KELILING = 
        parseInt((this.PEMILIKAN_PENGELOLA_KEMENKES_PUSKESMAS_KELILING == '') ? 0 : this.PEMILIKAN_PENGELOLA_KEMENKES_PUSKESMAS_KELILING)+
        parseInt((this.PEMILIKAN_PENGELOLA_PEM_PROV_PUSKESMAS_KELILING == '') ? 0 : this.PEMILIKAN_PENGELOLA_PEM_PROV_PUSKESMAS_KELILING)+  
        parseInt((this.PEMILIKAN_PENGELOLA_PEM_KAB_KOTA_PUSKESMAS_KELILING == '') ? 0 : this.PEMILIKAN_PENGELOLA_PEM_KAB_KOTA_PUSKESMAS_KELILING)+   
        parseInt((this.PEMILIKAN_PENGELOLA_TNI_POLRI_PUSKESMAS_KELILING == '') ? 0 : this.PEMILIKAN_PENGELOLA_TNI_POLRI_PUSKESMAS_KELILING)+   
        parseInt((this.PEMILIKAN_PENGELOLA_BUMN_PUSKESMAS_KELILING == '') ? 0 : this.PEMILIKAN_PENGELOLA_BUMN_PUSKESMAS_KELILING)+
        parseInt((this.PEMILIKAN_PENGELOLA_SWASTA_PUSKESMAS_KELILING == '') ? 0 : this.PEMILIKAN_PENGELOLA_SWASTA_PUSKESMAS_KELILING);    
    },    
    jmlpkmPembantupemilikan: function() {      
      this.PEMILIKAN_PENGELOLA_JUMLAH_PUSKESMAS_PEMBANTU = 
        parseInt((this.PEMILIKAN_PENGELOLA_KEMENKES_PUSKESMAS_PEMBANTU == '') ? 0 : this.PEMILIKAN_PENGELOLA_KEMENKES_PUSKESMAS_PEMBANTU)+
        parseInt((this.PEMILIKAN_PENGELOLA_PEM_PROV_PUSKESMAS_PEMBANTU == '') ? 0 : this.PEMILIKAN_PENGELOLA_PEM_PROV_PUSKESMAS_PEMBANTU)+  
        parseInt((this.PEMILIKAN_PENGELOLA_PEM_KAB_KOTA_PUSKESMAS_PEMBANTU == '') ? 0 : this.PEMILIKAN_PENGELOLA_PEM_KAB_KOTA_PUSKESMAS_PEMBANTU)+   
        parseInt((this.PEMILIKAN_PENGELOLA_TNI_POLRI_PUSKESMAS_PEMBANTU == '') ? 0 : this.PEMILIKAN_PENGELOLA_TNI_POLRI_PUSKESMAS_PEMBANTU)+   
        parseInt((this.PEMILIKAN_PENGELOLA_BUMN_PUSKESMAS_PEMBANTU == '') ? 0 : this.PEMILIKAN_PENGELOLA_BUMN_PUSKESMAS_PEMBANTU)+
        parseInt((this.PEMILIKAN_PENGELOLA_SWASTA_PUSKESMAS_PEMBANTU == '') ? 0 : this.PEMILIKAN_PENGELOLA_SWASTA_PUSKESMAS_PEMBANTU);    
    }, 
    jmlRumahBersalinpemilikan: function() {      
      this.PEMILIKAN_PENGELOLA_JUMLAH_RUMAH_BERSALIN = 
        parseInt((this.PEMILIKAN_PENGELOLA_KEMENKES_RUMAH_BERSALIN == '') ? 0 : this.PEMILIKAN_PENGELOLA_KEMENKES_RUMAH_BERSALIN)+
        parseInt((this.PEMILIKAN_PENGELOLA_PEM_PROV_RUMAH_BERSALIN == '') ? 0 : this.PEMILIKAN_PENGELOLA_PEM_PROV_RUMAH_BERSALIN)+  
        parseInt((this.PEMILIKAN_PENGELOLA_PEM_KAB_KOTA_RUMAH_BERSALIN == '') ? 0 : this.PEMILIKAN_PENGELOLA_PEM_KAB_KOTA_RUMAH_BERSALIN)+   
        parseInt((this.PEMILIKAN_PENGELOLA_TNI_POLRI_RUMAH_BERSALIN == '') ? 0 : this.PEMILIKAN_PENGELOLA_TNI_POLRI_RUMAH_BERSALIN)+   
        parseInt((this.PEMILIKAN_PENGELOLA_BUMN_RUMAH_BERSALIN == '') ? 0 : this.PEMILIKAN_PENGELOLA_BUMN_RUMAH_BERSALIN)+
        parseInt((this.PEMILIKAN_PENGELOLA_SWASTA_RUMAH_BERSALIN == '') ? 0 : this.PEMILIKAN_PENGELOLA_SWASTA_RUMAH_BERSALIN);    
    },
    jmlKlinikPratampemilikan: function() {      
      this.PEMILIKAN_PENGELOLA_JUMLAH_KLINIK_PRATAMA = 
        parseInt((this.PEMILIKAN_PENGELOLA_KEMENKES_KLINIK_PRATAMA == '') ? 0 : this.PEMILIKAN_PENGELOLA_KEMENKES_KLINIK_PRATAMA)+
        parseInt((this.PEMILIKAN_PENGELOLA_PEM_PROV_KLINIK_PRATAMA == '') ? 0 : this.PEMILIKAN_PENGELOLA_PEM_PROV_KLINIK_PRATAMA)+  
        parseInt((this.PEMILIKAN_PENGELOLA_PEM_KAB_KOTA_KLINIK_PRATAMA == '') ? 0 : this.PEMILIKAN_PENGELOLA_PEM_KAB_KOTA_KLINIK_PRATAMA)+   
        parseInt((this.PEMILIKAN_PENGELOLA_TNI_POLRI_KLINIK_PRATAMA == '') ? 0 : this.PEMILIKAN_PENGELOLA_TNI_POLRI_KLINIK_PRATAMA)+   
        parseInt((this.PEMILIKAN_PENGELOLA_BUMN_KLINIK_PRATAMA == '') ? 0 : this.PEMILIKAN_PENGELOLA_BUMN_KLINIK_PRATAMA)+
        parseInt((this.PEMILIKAN_PENGELOLA_SWASTA_KLINIK_PRATAMA == '') ? 0 : this.PEMILIKAN_PENGELOLA_SWASTA_KLINIK_PRATAMA);    
    }, 
    jmlKlinikUtamapemilikan: function() {      
      this.PEMILIKAN_PENGELOLA_JUMLAH_KLINIK_UTAMA = 
        parseInt((this.PEMILIKAN_PENGELOLA_KEMENKES_KLINIK_UTAMA == '') ? 0 : this.PEMILIKAN_PENGELOLA_KEMENKES_KLINIK_UTAMA)+
        parseInt((this.PEMILIKAN_PENGELOLA_PEM_PROV_KLINIK_UTAMA == '') ? 0 : this.PEMILIKAN_PENGELOLA_PEM_PROV_KLINIK_UTAMA)+  
        parseInt((this.PEMILIKAN_PENGELOLA_PEM_KAB_KOTA_KLINIK_UTAMA == '') ? 0 : this.PEMILIKAN_PENGELOLA_PEM_KAB_KOTA_KLINIK_UTAMA)+   
        parseInt((this.PEMILIKAN_PENGELOLA_TNI_POLRI_KLINIK_UTAMA == '') ? 0 : this.PEMILIKAN_PENGELOLA_TNI_POLRI_KLINIK_UTAMA)+   
        parseInt((this.PEMILIKAN_PENGELOLA_BUMN_KLINIK_UTAMA == '') ? 0 : this.PEMILIKAN_PENGELOLA_BUMN_KLINIK_UTAMA)+
        parseInt((this.PEMILIKAN_PENGELOLA_SWASTA_KLINIK_UTAMA == '') ? 0 : this.PEMILIKAN_PENGELOLA_SWASTA_KLINIK_UTAMA);    
    },
    jmlBalaiPengobatanpemilikan: function() {      
      this.PEMILIKAN_PENGELOLA_JUMLAH_BALAI_PENGOBATAN = 
        parseInt((this.PEMILIKAN_PENGELOLA_KEMENKES_BALAI_PENGOBATAN == '') ? 0 : this.PEMILIKAN_PENGELOLA_KEMENKES_BALAI_PENGOBATAN)+
        parseInt((this.PEMILIKAN_PENGELOLA_PEM_PROV_BALAI_PENGOBATAN == '') ? 0 : this.PEMILIKAN_PENGELOLA_PEM_PROV_BALAI_PENGOBATAN)+  
        parseInt((this.PEMILIKAN_PENGELOLA_PEM_KAB_KOTA_BALAI_PENGOBATAN == '') ? 0 : this.PEMILIKAN_PENGELOLA_PEM_KAB_KOTA_BALAI_PENGOBATAN)+   
        parseInt((this.PEMILIKAN_PENGELOLA_TNI_POLRI_BALAI_PENGOBATAN == '') ? 0 : this.PEMILIKAN_PENGELOLA_TNI_POLRI_BALAI_PENGOBATAN)+   
        parseInt((this.PEMILIKAN_PENGELOLA_BUMN_BALAI_PENGOBATAN == '') ? 0 : this.PEMILIKAN_PENGELOLA_BUMN_BALAI_PENGOBATAN)+
        parseInt((this.PEMILIKAN_PENGELOLA_SWASTA_BALAI_PENGOBATAN == '') ? 0 : this.PEMILIKAN_PENGELOLA_SWASTA_BALAI_PENGOBATAN);    
    },
    jmlPDBpemilikan: function() {      
      this.PEMILIKAN_PENGELOLA_JUMLAH_PRAKTIK_DOKTER_BERSAMA = 
        parseInt((this.PEMILIKAN_PENGELOLA_KEMENKES_PRAKTIK_DOKTER_BERSAMA == '') ? 0 : this.PEMILIKAN_PENGELOLA_KEMENKES_PRAKTIK_DOKTER_BERSAMA)+
        parseInt((this.PEMILIKAN_PENGELOLA_PEM_PROV_PRAKTIK_DOKTER_BERSAMA == '') ? 0 : this.PEMILIKAN_PENGELOLA_PEM_PROV_PRAKTIK_DOKTER_BERSAMA)+  
        parseInt((this.PEMILIKAN_PENGELOLA_PEM_KAB_KOTA_PRAKTIK_DOKTER_BERSAMA == '') ? 0 : this.PEMILIKAN_PENGELOLA_PEM_KAB_KOTA_PRAKTIK_DOKTER_BERSAMA)+   
        parseInt((this.PEMILIKAN_PENGELOLA_TNI_POLRI_PRAKTIK_DOKTER_BERSAMA == '') ? 0 : this.PEMILIKAN_PENGELOLA_TNI_POLRI_PRAKTIK_DOKTER_BERSAMA)+   
        parseInt((this.PEMILIKAN_PENGELOLA_BUMN_PRAKTIK_DOKTER_BERSAMA == '') ? 0 : this.PEMILIKAN_PENGELOLA_BUMN_PRAKTIK_DOKTER_BERSAMA)+
        parseInt((this.PEMILIKAN_PENGELOLA_SWASTA_PRAKTIK_DOKTER_BERSAMA == '') ? 0 : this.PEMILIKAN_PENGELOLA_SWASTA_PRAKTIK_DOKTER_BERSAMA);    
    },
    jmlPDUpemilikan: function() {      
      this.PEMILIKAN_PENGELOLA_JUMLAH_PRAKTIK_DOKTER_UMUM_PERORANGAN = 
        parseInt((this.PEMILIKAN_PENGELOLA_KEMENKES_PRAKTIK_DOKTER_UMUM_PERORANGAN == '') ? 0 : this.PEMILIKAN_PENGELOLA_KEMENKES_PRAKTIK_DOKTER_UMUM_PERORANGAN)+
        parseInt((this.PEMILIKAN_PENGELOLA_PEM_PROV_PRAKTIK_DOKTER_UMUM_PERORANGAN == '') ? 0 : this.PEMILIKAN_PENGELOLA_PEM_PROV_PRAKTIK_DOKTER_UMUM_PERORANGAN)+  
        parseInt((this.PEMILIKAN_PENGELOLA_PEM_KAB_KOTA_PRAKTIK_DOKTER_UMUM_PERORANGAN == '') ? 0 : this.PEMILIKAN_PENGELOLA_PEM_KAB_KOTA_PRAKTIK_DOKTER_UMUM_PERORANGAN)+   
        parseInt((this.PEMILIKAN_PENGELOLA_TNI_POLRI_PRAKTIK_DOKTER_UMUM_PERORANGAN == '') ? 0 : this.PEMILIKAN_PENGELOLA_TNI_POLRI_PRAKTIK_DOKTER_UMUM_PERORANGAN)+   
        parseInt((this.PEMILIKAN_PENGELOLA_BUMN_PRAKTIK_DOKTER_UMUM_PERORANGAN == '') ? 0 : this.PEMILIKAN_PENGELOLA_BUMN_PRAKTIK_DOKTER_UMUM_PERORANGAN)+
        parseInt((this.PEMILIKAN_PENGELOLA_SWASTA_PRAKTIK_DOKTER_UMUM_PERORANGAN == '') ? 0 : this.PEMILIKAN_PENGELOLA_SWASTA_PRAKTIK_DOKTER_UMUM_PERORANGAN);    
    }, 
    jmlPDGpemilikan: function() {      
      this.PEMILIKAN_PENGELOLA_JUMLAH_PRAKTIK_DOKTER_GIGI_PERORANGAN = 
        parseInt((this.PEMILIKAN_PENGELOLA_KEMENKES_PRAKTIK_DOKTER_GIGI_PERORANGAN == '') ? 0 : this.PEMILIKAN_PENGELOLA_KEMENKES_PRAKTIK_DOKTER_GIGI_PERORANGAN)+
        parseInt((this.PEMILIKAN_PENGELOLA_PEM_PROV_PRAKTIK_DOKTER_GIGI_PERORANGAN == '') ? 0 : this.PEMILIKAN_PENGELOLA_PEM_PROV_PRAKTIK_DOKTER_GIGI_PERORANGAN)+  
        parseInt((this.PEMILIKAN_PENGELOLA_PEM_KAB_KOTA_PRAKTIK_DOKTER_GIGI_PERORANGAN == '') ? 0 : this.PEMILIKAN_PENGELOLA_PEM_KAB_KOTA_PRAKTIK_DOKTER_GIGI_PERORANGAN)+   
        parseInt((this.PEMILIKAN_PENGELOLA_TNI_POLRI_PRAKTIK_DOKTER_GIGI_PERORANGAN == '') ? 0 : this.PEMILIKAN_PENGELOLA_TNI_POLRI_PRAKTIK_DOKTER_GIGI_PERORANGAN)+   
        parseInt((this.PEMILIKAN_PENGELOLA_BUMN_PRAKTIK_DOKTER_GIGI_PERORANGAN == '') ? 0 : this.PEMILIKAN_PENGELOLA_BUMN_PRAKTIK_DOKTER_GIGI_PERORANGAN)+
        parseInt((this.PEMILIKAN_PENGELOLA_SWASTA_PRAKTIK_DOKTER_GIGI_PERORANGAN == '') ? 0 : this.PEMILIKAN_PENGELOLA_SWASTA_PRAKTIK_DOKTER_GIGI_PERORANGAN);    
    },
    jmlPDSpemilikan: function() {      
      this.PEMILIKAN_PENGELOLA_JUMLAH_PRAKTIK_DOKTER_SPESIALIS_PERORANGAN = 
        parseInt((this.PEMILIKAN_PENGELOLA_KEMENKES_PRAKTIK_DOKTER_SPESIALIS_PERORANGAN == '') ? 0 : this.PEMILIKAN_PENGELOLA_KEMENKES_PRAKTIK_DOKTER_SPESIALIS_PERORANGAN)+
        parseInt((this.PEMILIKAN_PENGELOLA_PEM_PROV_PRAKTIK_DOKTER_SPESIALIS_PERORANGAN == '') ? 0 : this.PEMILIKAN_PENGELOLA_PEM_PROV_PRAKTIK_DOKTER_SPESIALIS_PERORANGAN)+  
        parseInt((this.PEMILIKAN_PENGELOLA_PEM_KAB_KOTA_PRAKTIK_DOKTER_SPESIALIS_PERORANGAN == '') ? 0 : this.PEMILIKAN_PENGELOLA_PEM_KAB_KOTA_PRAKTIK_DOKTER_SPESIALIS_PERORANGAN)+   
        parseInt((this.PEMILIKAN_PENGELOLA_TNI_POLRI_PRAKTIK_DOKTER_SPESIALIS_PERORANGAN == '') ? 0 : this.PEMILIKAN_PENGELOLA_TNI_POLRI_PRAKTIK_DOKTER_SPESIALIS_PERORANGAN)+   
        parseInt((this.PEMILIKAN_PENGELOLA_BUMN_PRAKTIK_DOKTER_SPESIALIS_PERORANGAN == '') ? 0 : this.PEMILIKAN_PENGELOLA_BUMN_PRAKTIK_DOKTER_SPESIALIS_PERORANGAN)+
        parseInt((this.PEMILIKAN_PENGELOLA_SWASTA_PRAKTIK_DOKTER_SPESIALIS_PERORANGAN == '') ? 0 : this.PEMILIKAN_PENGELOLA_SWASTA_PRAKTIK_DOKTER_SPESIALIS_PERORANGAN);    
    },
    jmlPPTpemilikan: function() {      
      this.PEMILIKAN_PENGELOLA_JUMLAH_PRAKTIK_PENGOBATAN_TRADISIONAL = 
        parseInt((this.PEMILIKAN_PENGELOLA_KEMENKES_PRAKTIK_PENGOBATAN_TRADISIONAL == '') ? 0 : this.PEMILIKAN_PENGELOLA_KEMENKES_PRAKTIK_PENGOBATAN_TRADISIONAL)+
        parseInt((this.PEMILIKAN_PENGELOLA_PEM_PROV_PRAKTIK_PENGOBATAN_TRADISIONAL == '') ? 0 : this.PEMILIKAN_PENGELOLA_PEM_PROV_PRAKTIK_PENGOBATAN_TRADISIONAL)+  
        parseInt((this.PEMILIKAN_PENGELOLA_PEM_KAB_KOTA_PRAKTIK_PENGOBATAN_TRADISIONAL == '') ? 0 : this.PEMILIKAN_PENGELOLA_PEM_KAB_KOTA_PRAKTIK_PENGOBATAN_TRADISIONAL)+   
        parseInt((this.PEMILIKAN_PENGELOLA_TNI_POLRI_PRAKTIK_PENGOBATAN_TRADISIONAL == '') ? 0 : this.PEMILIKAN_PENGELOLA_TNI_POLRI_PRAKTIK_PENGOBATAN_TRADISIONAL)+   
        parseInt((this.PEMILIKAN_PENGELOLA_BUMN_PRAKTIK_PENGOBATAN_TRADISIONAL == '') ? 0 : this.PEMILIKAN_PENGELOLA_BUMN_PRAKTIK_PENGOBATAN_TRADISIONAL)+
        parseInt((this.PEMILIKAN_PENGELOLA_SWASTA_PRAKTIK_PENGOBATAN_TRADISIONAL == '') ? 0 : this.PEMILIKAN_PENGELOLA_SWASTA_PRAKTIK_PENGOBATAN_TRADISIONAL);    
    },
    jmlBDRSpemilikan: function() {      
      this.PEMILIKAN_PENGELOLA_JUMLAH_BANK_DARAH_RUMAH_SAKIT = 
        parseInt((this.PEMILIKAN_PENGELOLA_KEMENKES_BANK_DARAH_RUMAH_SAKIT == '') ? 0 : this.PEMILIKAN_PENGELOLA_KEMENKES_BANK_DARAH_RUMAH_SAKIT)+
        parseInt((this.PEMILIKAN_PENGELOLA_PEM_PROV_BANK_DARAH_RUMAH_SAKIT == '') ? 0 : this.PEMILIKAN_PENGELOLA_PEM_PROV_BANK_DARAH_RUMAH_SAKIT)+  
        parseInt((this.PEMILIKAN_PENGELOLA_PEM_KAB_KOTA_BANK_DARAH_RUMAH_SAKIT == '') ? 0 : this.PEMILIKAN_PENGELOLA_PEM_KAB_KOTA_BANK_DARAH_RUMAH_SAKIT)+   
        parseInt((this.PEMILIKAN_PENGELOLA_TNI_POLRI_BANK_DARAH_RUMAH_SAKIT == '') ? 0 : this.PEMILIKAN_PENGELOLA_TNI_POLRI_BANK_DARAH_RUMAH_SAKIT)+   
        parseInt((this.PEMILIKAN_PENGELOLA_BUMN_BANK_DARAH_RUMAH_SAKIT == '') ? 0 : this.PEMILIKAN_PENGELOLA_BUMN_BANK_DARAH_RUMAH_SAKIT)+
        parseInt((this.PEMILIKAN_PENGELOLA_SWASTA_BANK_DARAH_RUMAH_SAKIT == '') ? 0 : this.PEMILIKAN_PENGELOLA_SWASTA_BANK_DARAH_RUMAH_SAKIT);    
    }, 
    jmlUTDpemilikan: function() {      
      this.PEMILIKAN_PENGELOLA_JUMLAH_UNIT_TRANSFUSI_DARAH = 
        parseInt((this.PEMILIKAN_PENGELOLA_KEMENKES_UNIT_TRANSFUSI_DARAH == '') ? 0 : this.PEMILIKAN_PENGELOLA_KEMENKES_UNIT_TRANSFUSI_DARAH)+
        parseInt((this.PEMILIKAN_PENGELOLA_PEM_PROV_UNIT_TRANSFUSI_DARAH == '') ? 0 : this.PEMILIKAN_PENGELOLA_PEM_PROV_UNIT_TRANSFUSI_DARAH)+  
        parseInt((this.PEMILIKAN_PENGELOLA_PEM_KAB_KOTA_UNIT_TRANSFUSI_DARAH == '') ? 0 : this.PEMILIKAN_PENGELOLA_PEM_KAB_KOTA_UNIT_TRANSFUSI_DARAH)+   
        parseInt((this.PEMILIKAN_PENGELOLA_TNI_POLRI_UNIT_TRANSFUSI_DARAH == '') ? 0 : this.PEMILIKAN_PENGELOLA_TNI_POLRI_UNIT_TRANSFUSI_DARAH)+   
        parseInt((this.PEMILIKAN_PENGELOLA_BUMN_UNIT_TRANSFUSI_DARAH == '') ? 0 : this.PEMILIKAN_PENGELOLA_BUMN_UNIT_TRANSFUSI_DARAH)+
        parseInt((this.PEMILIKAN_PENGELOLA_SWASTA_UNIT_TRANSFUSI_DARAH == '') ? 0 : this.PEMILIKAN_PENGELOLA_SWASTA_UNIT_TRANSFUSI_DARAH);    
    },
    jmlLabkespemilikan: function() {      
      this.PEMILIKAN_PENGELOLA_JUMLAH_LABORATORIUM_KESEHATAN = 
        parseInt((this.PEMILIKAN_PENGELOLA_KEMENKES_LABORATORIUM_KESEHATAN == '') ? 0 : this.PEMILIKAN_PENGELOLA_KEMENKES_LABORATORIUM_KESEHATAN)+
        parseInt((this.PEMILIKAN_PENGELOLA_PEM_PROV_LABORATORIUM_KESEHATAN == '') ? 0 : this.PEMILIKAN_PENGELOLA_PEM_PROV_LABORATORIUM_KESEHATAN)+  
        parseInt((this.PEMILIKAN_PENGELOLA_PEM_KAB_KOTA_LABORATORIUM_KESEHATAN == '') ? 0 : this.PEMILIKAN_PENGELOLA_PEM_KAB_KOTA_LABORATORIUM_KESEHATAN)+   
        parseInt((this.PEMILIKAN_PENGELOLA_TNI_POLRI_LABORATORIUM_KESEHATAN == '') ? 0 : this.PEMILIKAN_PENGELOLA_TNI_POLRI_LABORATORIUM_KESEHATAN)+   
        parseInt((this.PEMILIKAN_PENGELOLA_BUMN_LABORATORIUM_KESEHATAN == '') ? 0 : this.PEMILIKAN_PENGELOLA_BUMN_LABORATORIUM_KESEHATAN)+
        parseInt((this.PEMILIKAN_PENGELOLA_SWASTA_LABORATORIUM_KESEHATAN == '') ? 0 : this.PEMILIKAN_PENGELOLA_SWASTA_LABORATORIUM_KESEHATAN);    
    },
    jmlIndustriFarmasipemilikan: function() {      
      this.PEMILIKAN_PENGELOLA_JUMLAH_INDUSTRI_FARMASI = 
        parseInt((this.PEMILIKAN_PENGELOLA_KEMENKES_INDUSTRI_FARMASI == '') ? 0 : this.PEMILIKAN_PENGELOLA_KEMENKES_INDUSTRI_FARMASI)+
        parseInt((this.PEMILIKAN_PENGELOLA_PEM_PROV_INDUSTRI_FARMASI == '') ? 0 : this.PEMILIKAN_PENGELOLA_PEM_PROV_INDUSTRI_FARMASI)+  
        parseInt((this.PEMILIKAN_PENGELOLA_PEM_KAB_KOTA_INDUSTRI_FARMASI == '') ? 0 : this.PEMILIKAN_PENGELOLA_PEM_KAB_KOTA_INDUSTRI_FARMASI)+   
        parseInt((this.PEMILIKAN_PENGELOLA_TNI_POLRI_INDUSTRI_FARMASI == '') ? 0 : this.PEMILIKAN_PENGELOLA_TNI_POLRI_INDUSTRI_FARMASI)+   
        parseInt((this.PEMILIKAN_PENGELOLA_BUMN_INDUSTRI_FARMASI == '') ? 0 : this.PEMILIKAN_PENGELOLA_BUMN_INDUSTRI_FARMASI)+
        parseInt((this.PEMILIKAN_PENGELOLA_SWASTA_INDUSTRI_FARMASI == '') ? 0 : this.PEMILIKAN_PENGELOLA_SWASTA_INDUSTRI_FARMASI);    
    },
    jmlIndustriOTpemilikan: function() {      
      this.PEMILIKAN_PENGELOLA_JUMLAH_INDUSTRI_OBAT_TRADISIONAL = 
        parseInt((this.PEMILIKAN_PENGELOLA_KEMENKES_INDUSTRI_OBAT_TRADISIONAL == '') ? 0 : this.PEMILIKAN_PENGELOLA_KEMENKES_INDUSTRI_OBAT_TRADISIONAL)+
        parseInt((this.PEMILIKAN_PENGELOLA_PEM_PROV_INDUSTRI_OBAT_TRADISIONAL == '') ? 0 : this.PEMILIKAN_PENGELOLA_PEM_PROV_INDUSTRI_OBAT_TRADISIONAL)+  
        parseInt((this.PEMILIKAN_PENGELOLA_PEM_KAB_KOTA_INDUSTRI_OBAT_TRADISIONAL == '') ? 0 : this.PEMILIKAN_PENGELOLA_PEM_KAB_KOTA_INDUSTRI_OBAT_TRADISIONAL)+   
        parseInt((this.PEMILIKAN_PENGELOLA_TNI_POLRI_INDUSTRI_OBAT_TRADISIONAL == '') ? 0 : this.PEMILIKAN_PENGELOLA_TNI_POLRI_INDUSTRI_OBAT_TRADISIONAL)+   
        parseInt((this.PEMILIKAN_PENGELOLA_BUMN_INDUSTRI_OBAT_TRADISIONAL == '') ? 0 : this.PEMILIKAN_PENGELOLA_BUMN_INDUSTRI_OBAT_TRADISIONAL)+
        parseInt((this.PEMILIKAN_PENGELOLA_SWASTA_INDUSTRI_OBAT_TRADISIONAL == '') ? 0 : this.PEMILIKAN_PENGELOLA_SWASTA_INDUSTRI_OBAT_TRADISIONAL);    
    },
    jmlUMOTpemilikan: function() {      
      this.PEMILIKAN_PENGELOLA_JUMLAH_USAHA_MIKRO_OBAT_TRADISIONAL = 
        parseInt((this.PEMILIKAN_PENGELOLA_KEMENKES_USAHA_MIKRO_OBAT_TRADISIONAL == '') ? 0 : this.PEMILIKAN_PENGELOLA_KEMENKES_USAHA_MIKRO_OBAT_TRADISIONAL)+
        parseInt((this.PEMILIKAN_PENGELOLA_PEM_PROV_USAHA_MIKRO_OBAT_TRADISIONAL == '') ? 0 : this.PEMILIKAN_PENGELOLA_PEM_PROV_USAHA_MIKRO_OBAT_TRADISIONAL)+  
        parseInt((this.PEMILIKAN_PENGELOLA_PEM_KAB_KOTA_USAHA_MIKRO_OBAT_TRADISIONAL == '') ? 0 : this.PEMILIKAN_PENGELOLA_PEM_KAB_KOTA_USAHA_MIKRO_OBAT_TRADISIONAL)+   
        parseInt((this.PEMILIKAN_PENGELOLA_TNI_POLRI_USAHA_MIKRO_OBAT_TRADISIONAL == '') ? 0 : this.PEMILIKAN_PENGELOLA_TNI_POLRI_USAHA_MIKRO_OBAT_TRADISIONAL)+   
        parseInt((this.PEMILIKAN_PENGELOLA_BUMN_USAHA_MIKRO_OBAT_TRADISIONAL == '') ? 0 : this.PEMILIKAN_PENGELOLA_BUMN_USAHA_MIKRO_OBAT_TRADISIONAL)+
        parseInt((this.PEMILIKAN_PENGELOLA_SWASTA_USAHA_MIKRO_OBAT_TRADISIONAL == '') ? 0 : this.PEMILIKAN_PENGELOLA_SWASTA_USAHA_MIKRO_OBAT_TRADISIONAL);    
    },
    jmlPAKpemilikan: function() {      
      this.PEMILIKAN_PENGELOLA_JUMLAH_PRODUKSI_ALAT_KESEHATAN = 
        parseInt((this.PEMILIKAN_PENGELOLA_KEMENKES_PRODUKSI_ALAT_KESEHATAN == '') ? 0 : this.PEMILIKAN_PENGELOLA_KEMENKES_PRODUKSI_ALAT_KESEHATAN)+
        parseInt((this.PEMILIKAN_PENGELOLA_PEM_PROV_PRODUKSI_ALAT_KESEHATAN == '') ? 0 : this.PEMILIKAN_PENGELOLA_PEM_PROV_PRODUKSI_ALAT_KESEHATAN)+  
        parseInt((this.PEMILIKAN_PENGELOLA_PEM_KAB_KOTA_PRODUKSI_ALAT_KESEHATAN == '') ? 0 : this.PEMILIKAN_PENGELOLA_PEM_KAB_KOTA_PRODUKSI_ALAT_KESEHATAN)+   
        parseInt((this.PEMILIKAN_PENGELOLA_TNI_POLRI_PRODUKSI_ALAT_KESEHATAN == '') ? 0 : this.PEMILIKAN_PENGELOLA_TNI_POLRI_PRODUKSI_ALAT_KESEHATAN)+   
        parseInt((this.PEMILIKAN_PENGELOLA_BUMN_PRODUKSI_ALAT_KESEHATAN == '') ? 0 : this.PEMILIKAN_PENGELOLA_BUMN_PRODUKSI_ALAT_KESEHATAN)+
        parseInt((this.PEMILIKAN_PENGELOLA_SWASTA_PRODUKSI_ALAT_KESEHATAN == '') ? 0 : this.PEMILIKAN_PENGELOLA_SWASTA_PRODUKSI_ALAT_KESEHATAN);    
    },
    jmlPBFpemilikan: function() {      
      this.PEMILIKAN_PENGELOLA_JUMLAH_PEDAGANG_BESAR_FARMASI = 
        parseInt((this.PEMILIKAN_PENGELOLA_KEMENKES_PEDAGANG_BESAR_FARMASI == '') ? 0 : this.PEMILIKAN_PENGELOLA_KEMENKES_PEDAGANG_BESAR_FARMASI)+
        parseInt((this.PEMILIKAN_PENGELOLA_PEM_PROV_PEDAGANG_BESAR_FARMASI == '') ? 0 : this.PEMILIKAN_PENGELOLA_PEM_PROV_PEDAGANG_BESAR_FARMASI)+  
        parseInt((this.PEMILIKAN_PENGELOLA_PEM_KAB_KOTA_PEDAGANG_BESAR_FARMASI == '') ? 0 : this.PEMILIKAN_PENGELOLA_PEM_KAB_KOTA_PEDAGANG_BESAR_FARMASI)+   
        parseInt((this.PEMILIKAN_PENGELOLA_TNI_POLRI_PEDAGANG_BESAR_FARMASI == '') ? 0 : this.PEMILIKAN_PENGELOLA_TNI_POLRI_PEDAGANG_BESAR_FARMASI)+   
        parseInt((this.PEMILIKAN_PENGELOLA_BUMN_PEDAGANG_BESAR_FARMASI == '') ? 0 : this.PEMILIKAN_PENGELOLA_BUMN_PEDAGANG_BESAR_FARMASI)+
        parseInt((this.PEMILIKAN_PENGELOLA_SWASTA_PEDAGANG_BESAR_FARMASI == '') ? 0 : this.PEMILIKAN_PENGELOLA_SWASTA_PEDAGANG_BESAR_FARMASI);    
    }, 
    jmlApotekpemilikan: function() {      
      this.PEMILIKAN_PENGELOLA_JUMLAH_APOTEK = 
        parseInt((this.PEMILIKAN_PENGELOLA_KEMENKES_APOTEK == '') ? 0 : this.PEMILIKAN_PENGELOLA_KEMENKES_APOTEK)+
        parseInt((this.PEMILIKAN_PENGELOLA_PEM_PROV_APOTEK == '') ? 0 : this.PEMILIKAN_PENGELOLA_PEM_PROV_APOTEK)+  
        parseInt((this.PEMILIKAN_PENGELOLA_PEM_KAB_KOTA_APOTEK == '') ? 0 : this.PEMILIKAN_PENGELOLA_PEM_KAB_KOTA_APOTEK)+
        parseInt((this.PEMILIKAN_PENGELOLA_TNI_POLRI_APOTEK == '') ? 0 : this.PEMILIKAN_PENGELOLA_TNI_POLRI_APOTEK)+   
        parseInt((this.PEMILIKAN_PENGELOLA_BUMN_APOTEK == '') ? 0 : this.PEMILIKAN_PENGELOLA_BUMN_APOTEK)+
        parseInt((this.PEMILIKAN_PENGELOLA_SWASTA_APOTEK == '') ? 0 : this.PEMILIKAN_PENGELOLA_SWASTA_APOTEK);    
    },
    jmlApotekPRBpemilikan: function() {      
      this.PEMILIKAN_PENGELOLA_JUMLAH_APOTEK_PRB = 
        parseInt((this.PEMILIKAN_PENGELOLA_KEMENKES_APOTEK_PRB == '') ? 0 : this.PEMILIKAN_PENGELOLA_KEMENKES_APOTEK_PRB)+
        parseInt((this.PEMILIKAN_PENGELOLA_PEM_PROV_APOTEK_PRB == '') ? 0 : this.PEMILIKAN_PENGELOLA_PEM_PROV_APOTEK_PRB)+  
        parseInt((this.PEMILIKAN_PENGELOLA_PEM_KAB_KOTA_APOTEK_PRB == '') ? 0 : this.PEMILIKAN_PENGELOLA_PEM_KAB_KOTA_APOTEK_PRB)+
        parseInt((this.PEMILIKAN_PENGELOLA_TNI_POLRI_APOTEK_PRB == '') ? 0 : this.PEMILIKAN_PENGELOLA_TNI_POLRI_APOTEK_PRB)+   
        parseInt((this.PEMILIKAN_PENGELOLA_BUMN_APOTEK_PRB == '') ? 0 : this.PEMILIKAN_PENGELOLA_BUMN_APOTEK_PRB)+
        parseInt((this.PEMILIKAN_PENGELOLA_SWASTA_APOTEK_PRB == '') ? 0 : this.PEMILIKAN_PENGELOLA_SWASTA_APOTEK_PRB);    
    },
    jmlTokoObatpemilikan: function() {      
      this.PEMILIKAN_PENGELOLA_JUMLAH_TOKO_OBAT = 
        parseInt((this.PEMILIKAN_PENGELOLA_KEMENKES_TOKO_OBAT == '') ? 0 : this.PEMILIKAN_PENGELOLA_KEMENKES_TOKO_OBAT)+
        parseInt((this.PEMILIKAN_PENGELOLA_PEM_PROV_TOKO_OBAT == '') ? 0 : this.PEMILIKAN_PENGELOLA_PEM_PROV_TOKO_OBAT)+  
        parseInt((this.PEMILIKAN_PENGELOLA_PEM_KAB_KOTA_TOKO_OBAT == '') ? 0 : this.PEMILIKAN_PENGELOLA_PEM_KAB_KOTA_TOKO_OBAT)+
        parseInt((this.PEMILIKAN_PENGELOLA_TNI_POLRI_TOKO_OBAT == '') ? 0 : this.PEMILIKAN_PENGELOLA_TNI_POLRI_TOKO_OBAT)+   
        parseInt((this.PEMILIKAN_PENGELOLA_BUMN_TOKO_OBAT == '') ? 0 : this.PEMILIKAN_PENGELOLA_BUMN_TOKO_OBAT)+
        parseInt((this.PEMILIKAN_PENGELOLA_SWASTA_TOKO_OBAT == '') ? 0 : this.PEMILIKAN_PENGELOLA_SWASTA_TOKO_OBAT);    
    },
    jmlTokoAlkespemilikan: function() {      
      this.PEMILIKAN_PENGELOLA_JUMLAH_TOKO_ALKES = 
        parseInt((this.PEMILIKAN_PENGELOLA_KEMENKES_TOKO_ALKES == '') ? 0 : this.PEMILIKAN_PENGELOLA_KEMENKES_TOKO_ALKES)+
        parseInt((this.PEMILIKAN_PENGELOLA_PEM_PROV_TOKO_ALKES == '') ? 0 : this.PEMILIKAN_PENGELOLA_PEM_PROV_TOKO_ALKES)+  
        parseInt((this.PEMILIKAN_PENGELOLA_PEM_KAB_KOTA_TOKO_ALKES == '') ? 0 : this.PEMILIKAN_PENGELOLA_PEM_KAB_KOTA_TOKO_ALKES)+
        parseInt((this.PEMILIKAN_PENGELOLA_TNI_POLRI_TOKO_ALKES == '') ? 0 : this.PEMILIKAN_PENGELOLA_TNI_POLRI_TOKO_ALKES)+   
        parseInt((this.PEMILIKAN_PENGELOLA_BUMN_TOKO_ALKES == '') ? 0 : this.PEMILIKAN_PENGELOLA_BUMN_TOKO_ALKES)+
        parseInt((this.PEMILIKAN_PENGELOLA_SWASTA_TOKO_ALKES == '') ? 0 : this.PEMILIKAN_PENGELOLA_SWASTA_TOKO_ALKES);    
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