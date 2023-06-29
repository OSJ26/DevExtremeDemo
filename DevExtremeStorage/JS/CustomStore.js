$(async function(){

    let myStore;
    myStore = new DevExpress.data.CustomStore({
        key: "d01F01",
        cacheRawData: true,
        load: () => {
            return $.ajax({
                type: "GET",
                url: "https://localhost:7238/api/USED01",
                success: (e) => {
                    console.log(e);
                    DevExpress.ui.notify("Data Fetched SUccessfully", "success", 500);
                },
                error: (e) => {
                    console.log(e);
                    DevExpress.ui.notify("Something went wrong please cehck code!!!", "error", 1000);
                }
            })
        },
        loadMode: "raw",
    });

    await $('#myList').dxSelectBox({
        dataSource: myStore,
        acceptCustomValue: true,
        displayExpr: 'd01F02',
        valueExpr: 'd01F01',
        height: '100%',
        width: '300px',
        hint: 'Employee List',
        showClearButton: true,
    });

})