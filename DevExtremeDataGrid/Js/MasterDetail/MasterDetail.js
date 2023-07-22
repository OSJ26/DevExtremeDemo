$(() => {
   
    $("#masterGrid").dxDataGrid({
        dataSource: employees,
        keyExpr: 'ID',
        columns: [
            {
                dataField: 'ID',
                width: 20
            },'Prefix','FirstName', 'LastName', 'Position','State'
        ],
        onRowPrepared: (e) => {
            console.log(e);
        },
        onRowClick: (e) => {
            console.log(e);
        },
        masterDetail: {
            enabled: true,
            template(containor, options) {
                $("<div>").dxDataGrid({
                    columnAutoWidth: true,
                    showBorders: true,
                    columns: [
                        'Subject',
                        {
                            dataField: 'StartDate',
                            dataType: 'date'
                        },
                        {
                            dataField: 'DueDate',
                            dataType: 'date'
                        },'Priority',
                        {
                            caption: 'Completed',
                            dataType: 'boolean',
                            calculateCellValue(rowData) {
                                return rowData.Status === 'Completed';
                            },
                        },'dummy'
                    ],
                    dataSource: new DevExpress.data.DataSource({
                        store: new DevExpress.data.ArrayStore({
                            key: 'ID',
                            data: tasks,
                        }),
                    filter: ['EmployeeID', '=', options.key],
                    })
                }).appendTo(containor);
            }
        }
    })
})