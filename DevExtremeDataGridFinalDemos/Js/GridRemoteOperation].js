import { data } from '../Data/remoteDataSource.js';

$(() => {
    $("#grid").dxDataGrid({
        dataSource: data,
        showBorders: true,
        showColumnLines: true,
        showRowLines: true,
        onInitialized: () => {
            $("#view").addClass("body");
        },
        //pager: {
        //    visible: true,
        //    allowedPageSize: [5, 10, 15, 20],
        //    showInfo: true,
        //    showPageSizeSelector: true,
        //},
        //paging: {
        //    pageSize: 10,
        //    pageIndex:4,
        //},
        filterPanel: {
            visible: true
        },
        headerFilter: {
            visible: true
        },
        groupPanel: {
            visible: true
        },
        grouping: {
            autoExpandAll: false,
        },
        remoteOperations: {
            groupPaging: true,  
            paging: true,
            summary: true,
            sorting: true,
            grouping: true,
            filtering: true
        },
        columns: [{
            dataField: 'OrderNumber',
            dataType: 'number',
        }, {
            dataField: 'OrderDate',
            dataType: 'date',
        }, {
            dataField: 'StoreCity',
            dataType: 'string',
        }, {
            dataField: 'StoreState',
            dataType: 'string',
        }, {
            dataField: 'Employee',
            dataType: 'string',
        }, {
            dataField: 'SaleAmount',
            dataType: 'number',
            format: 'currency',
        }],
        summary: {
            groupItems: [{
                column: 'OrderNumber',
                summaryType: 'count',
                //displayFormat: "Total:{0}"
            }],
            totalItems: [
                {
                    column: 'OrderNumber',
                    summaryType: 'count',
                    //displayFormat: "Toatal : {0}"
                },
                {
                    column: 'SaleAmount',
                    summaryType: 'sum',
                    //displayFormat: "Total: {0}"
                }
            ]
        },
    });
})