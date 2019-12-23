export function manageRekapPuskesmas (arrayValue, initData) {

    const dataDesa = arrayValue.listDesa;
    const dataCollection = value.insideData.data;
    const dataInit = initData;
    const newDesa = [];

    dataDesa.forEach((el, index) => {
        // NEW DEFINITION OF VILLAGE WADAW HOHOHOHOH
        newDesa[index] = { 'ID_DESA': el._id };

        Object.keys(dataInit).forEach((elem, ind) => {
            newDesa[index][elem] = 0;
        })

        dataCollection.forEach((e, i) => {
            Object.keys(dataInit).forEach((elem, ind) => {
                if (e.NAMA_FIELD == elem && newDesa[index].ID_DESA == e.ID_DESA) {
                    newDesa[index][elem] += parseInt(e.VALUE);
                }
            })
        });
    });

    return newDesa;
    
}