<template>
    <div>
        <div style="max-height: 300px; overflow: auto; border: 1px solid #CCC;" class="col-sm-12">
        <h3>Daftar Desa</h3>
            <ul class="list-group">
                <li class="list-group-item" v-bind:key="item._id" v-for="(item, index) in listItems">
                    {{ index + 1 }}. {{ item.NAMA_DESA }}
                    <span @click="btnHapusDesa(item._id)" style="margin-left: 1em;" class="pull-right btn btn-sm btn-danger">Hapus</span>
                    <span @click="btnEditDesa(index, item._id)" class="pull-right btn btn-sm btn-primary">Edit</span>
                </li>
            </ul>
        </div>
        <div v-show="inputDesaForm">
            <ul class="list-group">
                <li style="list-style: none; font-weight: bold; padding-top: 1em;">
                    Masukan Nama Desa
                    <input type="text" style="width: 100%;" class="form-control" v-model="NAMA_DESA" />
                </li>

            </ul>
        </div>
        <div v-show="tombolProsesDesa">
            <button v-show="tombolTambahDesa" @click="tambahDesa()" style="width: 100%; margin-top: 10px;" type="button" class="btn btn-lg btn-success">{{textTambahDesa}}</button>
        </div>
            <button v-show="tombolTambahDesa" @click="btnClickTambahDesa()" style="width: 100%; margin-top: 10px;" type="button" class="btn btn-lg btn-primary">
                {{ textPop ? 'Tambah Desa' : 'Tutup' }}
            </button>
    </div>
</template>

<script>
export default {
    name: 'ListDesa',
    data() {
        return {
            listItems: [],
            inputBaru: '',
            tombolTambahDesa: true,
            inputDesaForm: false,
            tombolProsesDesa: false,
            ID_PUSKESMAS: '',
            ID_DESA: '',
            NAMA_DESA: '',
            textTambahDesa: 'Proses Desa',
            textPop: true,
            isUpdate: false
        }
    },
    methods: {
        fetchData: function(idPuskesmas) {
            this.$http.get(this.$urlNode + '/desa/getListDesaByPuskesmas?idPus=' + idPuskesmas)
            .then((response) => {
                this.listItems = response.data;
            })
            .catch(function (error) {
                console.log(error);
            });            
        },
        btnEditDesa: function(indexDesa, idDesa) {
            console.log(idDesa)
            this.ID_DESA = idDesa;
            this.inputDesaForm = true; 
            this.tombolProsesDesa = true;
            this.isUpdate = true;
            this.textTambahDesa = 'Edit Desa';
            console.log(this.listItems[indexDesa]);
            this.NAMA_DESA = this.listItems[indexDesa].NAMA_DESA;
        },
        btnHapusDesa: function(id) {
            if(confirm('Apakah anda yakin ingin menghapus desa ini?')) {
                this.$http.get(this.$urlNode + '/desa/hapusDesaById?id=' + id)
                .then((response) => {
                    if(response.data.deletedCount > 0) {
                        return this.fetchData(this.ID_PUSKESMAS)
                    } return alert('Terjadi kesalahan!');
                })
                .catch(function (error) {
                    console.log(error);
                }); 
            }           
        },
        btnClickTambahDesa: function() {
            this.isUpdate = false;
            this.inputDesaForm = !this.inputDesaForm; 
            this.tombolProsesDesa = !this.tombolProsesDesa;
            this.textTambahDesa = 'Proses Tambah Desa';
            this.textPop = !this.textPop;
            // this.tombolTambahDesa = !this.tombolTambahDesa;
        },
        tambahDesa: function() {
            if(this.NAMA_DESA == '') {
                return alert('Nama Desa tidak Boleh Kosong!');
            }
            var dataKirim = {
                'ID_PUSKESMAS' : this.ID_PUSKESMAS,
                'NAMA_DESA' : this.NAMA_DESA
            };

            const URL = (this.isUpdate == true) ? 'updateDesa' : 'inputDesa';

            if(this.isUpdate == true) {
                dataKirim.ID_DESA = this.ID_DESA;
            }

            console.log(dataKirim)
            
            this.$http.post(this.$urlNode + '/desa/' + URL, dataKirim)
                .then(function (response) {
                    console.log(response);
                }).then(() => {
                    this.NAMA_DESA = '';
                    this.fetchData(this.ID_PUSKESMAS)
                }).catch(function (error) {
                    console.log(error);
                });            
        }
    },
    created() {
        const user = JSON.parse(this.$session.get('dataLogin'));
        this.ID_PUSKESMAS = user.KODE_PUSKESMAS;
        this.fetchData(user.KODE_PUSKESMAS)
    }
}
</script>

<style>

</style>