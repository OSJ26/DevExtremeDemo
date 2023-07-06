$(() => {

    let employee = new DevExpress.data.CustomStore({
        key: "d01F01",
        cacheRawData: true,
        load: async function () {
            return await $.ajax({
                type: "GET",
                url: "https://localhost:7125/api/EMPD01",
                success: (e) => {
                    console.log(e);
                    DevExpress.ui.notify("Data Fetched SUccessfully", "success", 500);
                },
                error: (e) => {
                    console.log(e);
                    DevExpress.ui.notify("Something went wrong please cehck code!!!", "error", 1000);
                }
            })
        }
    });

    let state = new DevExpress.data.CustomStore({
        key: "d02F01",
        load: async function () {
            return await $.ajax({
                type: "GET",
                url: "https://localhost:7125/api/STAD02",
                success: (e) => {
                    console.log(e);
                    DevExpress.ui.notify("Data Fetched SUccessfully", "success", 500);
                },
                error: (e) => {
                    console.log(e);
                    DevExpress.ui.notify("Something went wrong please cehck code!!!", "error", 1000);
                }
            })
        }
    });

    let city = new DevExpress.data.CustomStore({
        key: "d03F01",
        load: async function () {
            return await $.ajax({
                type: "GET",
                url: "https://localhost:7125/api/CTAD03",
                success: (e) => {
                    console.log(e);
                    DevExpress.ui.notify("Data Fetched SUccessfully", "success", 500);
                },
                error: (e) => {
                    console.log(e);
                    DevExpress.ui.notify("Something went wrong please cehck code!!!", "error", 1000);
                }
            })
        }
    })
    
    $("#myGrid").dxDataGrid({
        dataSource: employee,
        keyExpr: 'd01F01',
        showBorders: true,
        editing: {
            allowUpdating: true,
            allowAdding: true,
            mode: 'row'
        },
        columns: [
            {
                dataField: "d01F01",
                caption: "Employee Id"
            },
            {
                dataField: "d01F02",
                caption: "Employee First Name"
            },
            {
                dataField: "d01F03",
                caption: "Employee Last Name"
            },
            {
                dataField: "d01F04",
                caption: "State",
                lookup: {
                    dataSource: state,
                    valueExpr: "d02F01",
                    displayExpr: "d02F02"
                }
            },
            {
                dataField: "d01F05",
                caption: "City",
                lookup: {
                    dataSource(options) {
                        return {
                            store: city,
                            filter: options.data ? ['d02F01', "=", options.data.d02F01] : null,
                        };
                    },
                    valueExpr: "d03F01",
                    displayExpr: "d03F02"
                }
            }
        ]
    })
})