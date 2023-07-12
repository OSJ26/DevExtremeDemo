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
                        }
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