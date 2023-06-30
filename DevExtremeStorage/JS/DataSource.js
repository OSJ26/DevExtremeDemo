$(async function(){ 
    let data = null;
    await $.ajax({
        type: "GET",
        url: "https://localhost:7238/api/USED01",
        success: (e) => {
            console.log(e);
            data = new DevExpress.data.DataSource({
                store: {
                    data: e,
                    type: 'array',
                    key: 'd01F01'
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
    data.filter(["d01F01", "<", 5]);
    data.sort('d01F02', 'asc');
    data.load().done((filteredData)=>{
         $("#mySelect").dxSelectBox({
            dataSource: filteredData,
            acceptCustomValue: true,
            placeholder: "Choose Employee",
            showClearButton: true,
            searchExpr: ['d01F02', 'd01F03'],
            searchOperation: "contains",
            hint: "Employee Name",
            width: "400px",
            inputAttr: {
                id: "selectBox"
            },
            searchEnabled: true,
            displayExpr: 'd01F02',
            valueExpr: 'd01F01',

            onCustomItemCreating: (e) => {
                if (!e.text) {
                    e.customItem = null;
                    return;
                }

                const employeeId = employeeName.map((item) => item.ID);
                const incrementedId = Math.max.apply(null, employeeId) + 1;
                const newItem = {
                    d01F02: e.text,
                    d01F01: incrementedId,
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
    
})