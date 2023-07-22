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
                showInGroupFooter: true,
                alignByColumn: true,
            },
            {
                column: 'TotalAmount',
                summaryType: 'max',
                valueFormat: 'currency',
                showInGroupFooter: true,
                alignByColumn: true,
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
            alignment: 'center'
        }, {
            width: 160,
            dataField: 'OrderDate',
            dataType: 'date',
            alignment: 'center'
        },
        {
            dataField: 'TotalAmount',
            alignment: 'right',
            format: 'currency',
            alignment: 'center'
        },
        {
            dataField: 'Employee',
            groupIndex: 0,
            alignment: 'center'
        },
        {
            caption: 'City',
            dataField: 'CustomerStoreCity',
            alignment: 'center'
        }, {
            caption: 'State',
            dataField: 'CustomerStoreState',
            alignment: 'center',
            //allowExporting: false
        }, {
            dataField: 'SaleAmount',
            alignment: 'right',
            format: 'currency',
            alignment: 'center'
        },
        ],
        selection: {
            mode: 'multiple'
        },
        export: {
            enabled: true,
            allowExportSelectedData: true,
        },
        onExporting: (e) => {
            const workBook = new ExcelJS.Workbook();
            const worksheet = workBook.addWorksheet('Orders');

            DevExpress.excelExporter.exportDataGrid({
                component: e.component,
                worksheet,
                autoFilterEnabled: true,
                topLeftCell: { row: 4, column: 1 },
                customizeCell(options) {
                    const { gridCell } = options;
                    const { excelCell } = options;
                    if (gridCell.rowType === 'group') {
                        excelCell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'BEDFE6' } };
                    }
                    if (gridCell.rowType === 'totalFooter' && excelCell.value) {
                        excelCell.font.italic = true;
                    }
                }
            }).then((cellRange) => {
                const headerRow = worksheet.getRow(2);
                headerRow.height = 30;
                worksheet.mergeCells(2, 1, 2, 6);

                headerRow.getCell(1).value = "Orders Details with Summary";
                headerRow.getCell(1).font = { name: 'Bell MT', size: 22 };
                headerRow.getCell(1).alignment = { horizontal: 'center' };

                const footerRowIndex = cellRange.to.row + 2;
                const footerRow = worksheet.getRow(footerRowIndex);
                worksheet.mergeCells(footerRowIndex, 1, footerRowIndex, 6);

                footerRow.getCell(1).value = 'Osj Generated Excel';
                footerRow.getCell(1).font = { color: { argb: 'BFBFBF' }, italic: true };
                footerRow.getCell(1).alignment = { horizontal: 'right' };

            }).then(() => {
                workBook.xlsx.writeBuffer().then((buffer) => {
                    saveAs(new Blob([buffer], {type:'applicaiton/octet-stream'}),'CustomExcel.xlsx')
                })
            })
            e.cancel = true;
        }
    });
})