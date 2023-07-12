$(() => {

    let employee = new DevExpress.data.CustomStore({
        key: 'd01F01',
        load: () => {
            return $.ajax({
                type: "GET",
                url: "https://localhost:7125/api/SEMP",
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
    let key;
    let tasks = new DevExpress.data.CustomStore({
        key: 'd02F01',
        load: () => {
            return $.ajax({
                type: "GET",
                url: "https://localhost:7125/api/STAS" + d02F04,
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

    $("#masterGrid").dxDataGrid({
        dataSource: employee,
        keyExpr: 'd01F01',
        columns: [
            {
                dataField: 'd01F01',
                width: 20
            }, 'd01F02', 'd01F03', 'd01F04', 'd01F05', 'd01F06'
        ],
        masterDetail: {
            enabled: true,
            template(containor, options) {
                console.log(options);
                $("<div>").dxDataGrid({
                    columnAutoWidth: true,
                    showBorders: true,
                    columns: [
                        {
                            dataField: 'd02F02',
                            caption: 'Task'
                        },
                        {
                            dataField: 'd02F03',
                            caption: 'Priority'
                        },
                        
                        {
                            caption: 'Completed',
                            dataType: 'boolean',
                            calculateCellValue(rowData) {
                                return rowData.d02F05 === 'Completed';
                            },
                        }
                    ],
                    dataSource: tasks,
                    
                }).appendTo(containor);
            }
        }
    })
})