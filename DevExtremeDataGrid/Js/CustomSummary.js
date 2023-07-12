$(() => {
    $("#grid").dxDataGrid({
        dataSource: orders,
        keyExpr: "ID",
        showBorders: true,
        showColumnLines: true,
        showRowLines: true,
        rowAlternationEnabled: true,
        editing: {
            allowUpdating: true,
            allowAdding: true,
            mode: 'row'
        },
        grouping: {
            contextMenuEnabled: true,
            expandMode: 'rowClick'
        },
        groupPanel: {
            emptyPanelText: "Drag and Drop column here to group by that Column",
            visible: true,
        },
        /*
        Sorting Start
        */
        sorting: {
            mode: 'multiple',
            ascendingText: 'Make Ascending',
            descendingText: 'Make Descending',
            clearText: 'Remove Me',
            showSortIndex: true,
        },
        /*
        Sorting End
        */
        /*
        State Storing Code
        */
        stateStoring: {
            enabled: true,
            type: "sessionStorage",
            storageKey: "StateStoring",
            savingTimeout: 5000,
        },
        /*
        State Storing End
        */
        /*
        Summary 
        */
        sortByGroupSummaryInfo: [{
            summaryItem: 'count',
        }],
        summary: {
            //totalItems: [
            //    {
            //        name: 'SelectedRowsSummary',
            //        showInColumn: 'SaleAmount',
            //        displayFormat: 'Sum: {0}',
            //        valueFormat: 'currency',
            //        summaryType: 'custom',
            //    },
            //],
            //calculateCustomSummary(options) {
            //    console.log(options);
            //    if (options.name === 'SelectedRowsSummary') {
            //        if (options.summaryProcess === 'start') {
            //            options.totalValue = 0;
            //        }
            //        if (options.summaryProcess === "calculate") {
            //            if (options.component.isRowSelected(options.value.ID)) {
            //                options.totalValue += options.value.SaleAmount;
            //            }
            //        }
            //    }
            //},

            groupItems: [{
                column: 'OrderNumber',
                summaryType: 'count',
                displayFormat: '{0} orders',
            },
            {
                column: 'SaleAmount',
                summaryType: 'max',
                valueFormat: 'currency',
                showInGroupFooter: false,
                alignByColumn: true,
            },
            {
                column: 'TotalAmount',
                summaryType: 'max',
                valueFormat: 'currency',
                showInGroupFooter: false,
                alignByColumn: true,
            },
            {
                column: 'TotalAmount',
                summaryType: 'sum',
                valueFormat: 'currency',
                displayFormat: 'Total: {0}',
                showInGroupFooter: true,
            }]
        },
        /*
        Summary End
        */
        selectedRowKeys: [1, 4, 7],
        onSelectionChanged(e) {
            e.component.refresh(true);
        },
        columns: [{
            dataField: 'OrderNumber',
            width: 130,
            caption: 'Invoice Number',
        }, {
            width: 160,
            dataField: 'OrderDate',
            dataType: 'date',
        },
        {
            dataField: 'TotalAmount',
            alignment: 'right',
            format: 'currency',
        },
        {
            dataField: 'Employee',
            groupIndex: 0,
        },
        {
            caption: 'City',
            dataField: 'CustomerStoreCity',
        }, {
            caption: 'State',
            dataField: 'CustomerStoreState',
        }, {
            dataField: 'SaleAmount',
            alignment: 'right',
            format: 'currency',
        },
        ],

    });
})