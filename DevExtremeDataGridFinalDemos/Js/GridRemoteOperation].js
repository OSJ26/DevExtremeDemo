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
        pager: {
            visible: true,
            allowedPageSize: [5, 10, 15, 20],
            showInfo: true,
            showPageSizeSelector: true,
        },
        paging: {
            pageSize: 10
        },
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
            sort: true,
            group: true,
            filter: true
        },
        columns: [
            {
                dataField: "Id",
                alignment: "center"
            },
            {
                dataField: "ProductCategoryName",
                caption: "Category",
                alignment: "center"
            },
            {
                dataField: "ProductSubcategoryName",
                caption: 'SubCategory',
                alignment: "center"
            },
            {
                dataField: "ProductName",
                alignment: "center"
            },
            {
                dataField: "UnitPrice",
                caption: "Price",
                width: 100,
                alignment: "center"
            },
            {
                dataField: "SalesQuantity",
                caption: "Quantity",
                width: 80,
                alignment: "center"
            },
            {
                dataField: "SalesAmount",
                alignment: "center"
            },
            {
                dataField: "StoreName",
                alignment:"center"
            }
        ],
        summary: {
            groupItems: [{
                column: 'Id',
                summaryType: 'count',
                displayFormat: "Total:{0}"
            }],
            totalItems: [
                {
                    column: 'Id',
                    summaryType: 'count',
                    displayFormat: "Toatal : {0}"
                },
                {
                    column: 'SalesAmount',
                    summaryType: 'sum',
                    displayFormat: "Total: {0}"
                }
            ]
        },
    });
})