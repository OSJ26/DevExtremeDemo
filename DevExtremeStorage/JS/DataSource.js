$(() => {
    const dataSrc = new DevExpress.data.DataSource({
        store: {
            data: employeeName,
            type: 'array',
            key: 'id'
        }
    })

    $("#mySelect").dxSelectBox({
        dataSource: dataSrc,
        acceptCustomValue: true,
        placeholder: "Choose Employee",
        showClearButton: true,
        hint: "Employee Name",
        width: "400px",
        inputAttr: {
            id: "selectBox"
        },
        searchEnabled: true,
        displayExpr: 'name',
        valueExpr: 'id',

        onCustomItemCreating: (data) => {
            if (!data.text) {
                data.customItem = null;
                return;
            }

            const employeeId = employeeName.map((item) => item.ID);
            const incrementedId = Math.max.apply(null, employeeId) + 1;
            const newItem = {
                name: data.text,
                id: incrementedId,
            };

            data.customItem = dataSrc.store().insert(newItem)
                .then(() => dataSrc.load())
                .then(() => newItem)
                .catch((error) => {
                    throw error;
                });

            console.log(data);
        },
    });
})