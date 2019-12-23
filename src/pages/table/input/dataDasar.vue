<template>
<!-- Main content -->
<div class="content">
  <div class="row">        
    <div class="col-md-12">
      <div class="box box-info">
        <div class="box-header with-border">
          <div class="alert alert-info alert-dismissible">
            <button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>
            <h4>Tabel Data Dasar </h4>
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
                  <li class="active"><a href="#tab_1" data-toggle="tab">Rumah Sakit </a></li>
                  <li><a href="#tab_2" data-toggle="tab"> Luas</a></li>                          
                  <li><a href="#tab_3" data-toggle="tab"> Surat Izin</a></li>                          
                  <li><a href="#tab_4" data-toggle="tab"> Penyelenggara</a></li>                          
                  <li><a href="#tab_5" data-toggle="tab"> Akreditas</a></li>                          
                  <li><a href="#tab_6" data-toggle="tab"> Tempat Tidur Menurut Kelas</a></li>                          
                  <li><a href="#tab_7" data-toggle="tab"> Tenaga Dokter</a></li>                          
                  <li><a href="#tab_8" data-toggle="tab"> Tenaga Lainnya</a></li>                          
                </ul>
                <div class="tab-content">
                  <div class="tab-pane active" id="tab_1">
                    <div class="box-body">
                      <div class="col-md-6">
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> Jenis</label>
                          <div class="col-sm-4">
                            <input type="text" v-model="JENIS_RS" class="form-control" id="" name="jenis_rs" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> Kelas </label>
                          <div class="col-sm-4">
                            <input type="text" v-model="KELAS_RS" class="form-control" id="" name="kelas_rs" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> Direktur </label>
                          <div class="col-sm-4">
                            <input type="text" v-model="DIREKTUR_RS" class="form-control" id="" name="direktur_rs" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> Alamat </label>
                          <div class="col-sm-4">
                            <input type="text" v-model="ALAMAT_RS" class="form-control" id="" name="alamat_rs" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> Penyelenggara </label>
                          <div class="col-sm-4">
                            <input type="text" v-model="PENYELENGGARA_RS" class="form-control" id="" name="penyelenggara_rs" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> Kab/Kota </label>
                          <div class="col-sm-4">
                            <input type="text" v-model="KABKOTA_RS" class="form-control" id="" name="kabkota_rs" placeholder="">
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> Kode Pos </label>
                          <div class="col-sm-4">
                            <input type="text" v-model="KODE_POS_RS" class="form-control" id="" name="kode_pos_rs" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> Telepon</label>
                          <div class="col-sm-4">
                            <input type="text" v-model="TELEPON_RS" class="form-control" id="" name="telepon_rs" placeholder="">
                          </div>
                        </div> 
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> FAX </label>
                          <div class="col-sm-4">
                            <input type="text" v-model="FAX_RS" class="form-control" id="" name="fax_rs" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> Email </label>
                          <div class="col-sm-4">
                            <input type="text" v-model="EMAIL_RS" class="form-control" id="" name="email_rs" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> Telepon Humas </label>
                          <div class="col-sm-4">
                            <input type="text" v-model="TELP_HUMAS_RS" class="form-control" id="" name="telp_humas_rs" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> Website </label>
                          <div class="col-sm-4">
                            <input type="text" v-model="WEBSITE_RS" class="form-control" id="" name="website_rs" placeholder="">
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
                          <label for="" class="col-sm-6 control-label"> Luas Tanah </label>
                          <div class="col-sm-4">
                            <input type="text" v-model="LUAS_TANAH_RS" class="form-control" id="" name="luas_tanah_rs" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> Luas Bangunan </label>
                          <div class="col-sm-4">
                            <input type="text" v-model="LUAS_BANGUNAN_RS" class="form-control" id="" name="luas_bangunan_rs" placeholder="">
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
                          <label for="" class="col-sm-6 control-label"> Nomor Surat Izin </label>
                          <div class="col-sm-4">
                            <input type="text" v-model="NO_SURAT_IZIN_RS" class="form-control" id="" name="no_surat_izin_rs" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> Tanggal Surat Izin </label>
                          <div class="col-sm-4">
                            <input type="text" v-model="TANGGAL_SURAT_IZIN_RS" class="form-control" id="" name="tgl_surat_izin_rs" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> Dari Surat Izin </label>
                          <div class="col-sm-4">
                            <input type="text" v-model="DARI_SURAT_IZIN_RS" class="form-control" id="" name="dari_surat_izin_rs" placeholder="">
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">                                
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> Sifat Surat Izin </label>
                          <div class="col-sm-4">
                            <input type="text" v-model="SIFAT_SURAT_IZIN_RS" class="form-control" id="" name="sifat_surat_izin_rs" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> Masa Berlaku Surat Izin </label>
                          <div class="col-sm-4">
                            <input type="text" v-model="MASA_BERLAKU_SURAT_IZIN_RS" class="form-control" id="" name="masa_berlaku_surat_izin_rs" placeholder="">
                          </div>
                        </div>                        
                      </div>
                    </div> 
                  </div>

                  <div class="tab-pane" id="tab_4">
                    <div class="box-body">
                      <div class="col-md-6">
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> Status </label>
                          <div class="col-sm-4">
                            <input type="text" v-model="PENYELENGGARA_STATUS_RS" class="form-control" id="" name="penyelenggara_status_rs" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> Khusus RS Swasta </label>
                          <div class="col-sm-4">
                            <input type="text" v-model="PENYELENGGARA_KHUSUS_RS_SWASTA" class="form-control" id="" name="penyelenggara_khusus_rs_swasta" placeholder="">
                          </div>
                        </div>
                      </div>                                
                    </div> 
                  </div>  

                  <div class="tab-pane" id="tab_5">
                    <div class="box-body">
                      <div class="col-md-6">
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> Pentahapan </label>
                          <div class="col-sm-4">
                            <input type="text" v-model="PENTAHAPAN_AKRE" class="form-control" id="" name="pentahapan_akre" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> Status </label>
                          <div class="col-sm-4">
                            <input type="text" v-model="STATUS_AKRE" class="form-control" id="" name="status_akre" placeholder="">
                          </div>
                        </div>                        
                      </div>         
                    </div> 
                  </div>

                  <div class="tab-pane" id="tab_6">
                    <div class="box-body">
                      <div class="col-md-6">
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> VVIP </label>
                          <div class="col-sm-4">
                            <input type="text" v-model="VVIP_TT_KELAS" class="form-control" id="" name="vvip_tt_kelas" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> VIP </label>
                          <div class="col-sm-4">
                            <input type="text" v-model="VIP_TT_KELAS" class="form-control" id="" name="vip_tt_kelas" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> I </label>
                          <div class="col-sm-4">
                            <input type="text" v-model="I_TT_KELAS" class="form-control" id="" name="i_tt_kelas" placeholder="">
                          </div>
                        </div>
                      </div>         
                      <div class="col-md-6">
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> II </label>
                          <div class="col-sm-4">
                            <input type="text" v-model="II_TT_KELAS" class="form-control" id="" name="ii_tt_kelas" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> III </label>
                          <div class="col-sm-4">
                            <input type="text" v-model="III_TT_KELAS" class="form-control" id="" name="iii_tt_kelas" placeholder="">
                          </div>
                        </div>                                              
                      </div>
                    </div> 
                  </div> 

                  <div class="tab-pane" id="tab_7">
                    <div class="box-body">
                      <div class="col-md-6">
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> SP.A </label>
                          <div class="col-sm-4">
                            <input type="text" v-model="SPA_DOKTER" class="form-control" id="" name="spa_dokter" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> SP.OG </label>
                          <div class="col-sm-4">
                            <input type="text" v-model="SPOG_DOKTER" class="form-control" id="" name="spog_dokter" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> SP.B </label>
                          <div class="col-sm-4">
                            <input type="text" v-model="SPB_DOKTER" class="form-control" id="" name="spb_dokter" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> SP.RAD </label>
                          <div class="col-sm-4">
                            <input type="text" v-model="SPRAD_DOKTER" class="form-control" id="" name="sprad_dokter" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> SP.RM </label>
                          <div class="col-sm-4">
                            <input type="text" v-model="SPRM_DOKTER" class="form-control" id="" name="sprm_dokter" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> SP.AN </label>
                          <div class="col-sm-4">
                            <input type="text" v-model="SPAN_DOKTER" class="form-control" id="" name="span_dokter" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> SP.JP </label>
                          <div class="col-sm-4">
                            <input type="text" v-model="SPJP_DOKTER" class="form-control" id="" name="spjp_dokter" placeholder="">
                          </div>
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> SP.M </label>
                          <div class="col-sm-4">
                            <input type="text" v-model="SPM_DOKTER" class="form-control" id="" name="spm_dokter" placeholder="">
                          </div>
                        </div> 
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> SP.THT </label>
                          <div class="col-sm-4">
                            <input type="text" v-model="SPTHT_DOKTER" class="form-control" id="" name="sptht_dokter" placeholder="">
                          </div>
                        </div> 
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> SP.KJ </label>
                          <div class="col-sm-4">
                            <input type="text" v-model="SPKJ_DOKTER" class="form-control" id="" name="spkj_dokter" placeholder="">
                          </div>
                        </div> 
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> Umum </label>
                          <div class="col-sm-4">
                            <input type="text" v-model="UMUM_DOKTER" class="form-control" id="" name="umum_dokter" placeholder="">
                          </div>
                        </div> 
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> Gigi </label>
                          <div class="col-sm-4">
                            <input type="text" v-model="GIGI_DOKTER" class="form-control" id="" name="gigi_dokter" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> SP.Gigi </label>
                          <div class="col-sm-4">
                            <input type="text" v-model="SPGIGI_DOKTER" class="form-control" id="" name="spgigi_dokter" placeholder="">
                          </div>
                        </div> 
                      </div>         
                    </div> 
                  </div> 

                  <div class="tab-pane" id="tab_8">
                    <div class="box-body">
                      <div class="col-md-6">
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> Perawat </label>
                          <div class="col-sm-4">
                            <input type="text" v-model="PERAWAT_LAINNYA" class="form-control" id="" name="perawat_lainnya" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> Bidan </label>
                          <div class="col-sm-4">
                            <input type="text" v-model="BIDAN_LAINNYA" class="form-control" id="" name="bidan_lainnya" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> Farmasi </label>
                          <div class="col-sm-4">
                            <input type="text" v-model="FARMASI_LAINNYA" class="form-control" id="" name="farmasi_lainnya" placeholder="">
                          </div>
                        </div>
                      </div>  
                      <div class="col-md-6">       
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> Tenaga Kesehatan Lainnya </label>
                          <div class="col-sm-4">
                            <input type="text" v-model="NAKES_LAINNYA" class="form-control" id="" name="nakes_lainnya" placeholder="">
                          </div>
                        </div>
                        <div class="form-group">
                          <label for="" class="col-sm-6 control-label"> Non-Kesehatan </label>
                          <div class="col-sm-4">
                            <input type="text" v-model="NON_KESEHATAN" class="form-control" id="" name="non_kesehatan" placeholder="">
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
            <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#modal-primary"><i class="fa fa-fw fa-recycle"></i>
            Proses
            </button>                
            <router-link to="/dataDasar"><a class="btn btn-success btn-md"><i class="fa fa-fw fa-arrow-left"></i> Kembali</a></router-link>
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
  name: 'DataDasar',
  components: {},
  created() {

  }
}
</script>