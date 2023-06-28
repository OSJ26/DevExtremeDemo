$(async function(){ 
    let data = null;
    await $.ajax({
        type: "GET",
        url: "https://localhost:7256/api/USED01",
        success: (e) => {
            console.log(e);
            data = new DevExpress.data.DataSource({
                store: {
                    data: e,
                    type: 'array',
                    key: 'd01f01'
                }
            })
            DevExpress.ui.notify("Data Fetched SUccessfully","success",500);
        },
        error: (e) => {
            console.log(e);
            DevExpress.ui.notify("Something went wrong please cehck code!!!","error",1000);
        }
    })
    console.log(data);  

    await $("#mySelect").dxSelectBox({
        dataSource: data,
        acceptCustomValue: true,
        placeholder: "Choose Employee",
        showClearButton: true,
        hint: "Employee Name",
        width: "400px",
        inputAttr: {
            id: "selectBox"
        },
        searchEnabled: true,
        displayExpr: 'd01f02',
        valueExpr: 'd01f01',
        
        onCustomItemCreating: (e) => {
            if (!e.text) {
                e.customItem = null;
                return;
            }

            const employeeId = employeeName.map((item) => item.ID);
            const incrementedId = Math.max.apply(null, employeeId) + 1;
            const newItem = {
                name: e.text,
                id: incrementedId,
            };

            e.customItem = data.store().insert(newItem)
                .then(() => data.load())
                .then(() => newItem)
                .catch((error) => {
                    throw error;
                });
        },
    });
})