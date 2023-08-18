$(() => {

    var arrayStore = new DevExpress.data.ArrayStore({
        key: 'ID',
        data: customers
    });

    let basicGrid = $('#basicGrid').dxDataGrid({
        //Binding DataSource 
        dataSource: arrayStore,

        //common property
        height: 480,

        //Adaptility
        columnHidingEnabled: true,

        //DataGrid View
        showBorders: true,
        showColumnLines: true,
        showRowLine: true,
        rowAlternationEnabled: true,

        //Grouping Enabled
        groupPanel: {
            visible: true
        },

        //Selection
        selection: {
            mode: 'multiple',
            selectAllMode: 'page'
        },

        //paging Binding
        pager: {
            allowedPageSizes: [5, 8, 15, 30],
            showInfo: true,
            showNavigationButtons: true,
            showPageSizeSelector: true,
            visible: true,
        },
        paging: {
            pageSize: 5
        },

        //Filter Binding
        filterRow: {
            visible: true,
            resetOperationText: 'ResetMe',
        },
        headerFilter: {
            visible: true
        },
        filterPanel: {
            visible: true,
        },

        //searchPanel 
        searchPanel: {
            visible: true,
            width: 240,
            placeholder: 'Search...',
        },

        //sorting
        sorting: {
            mode: 'single',
            clearText: 'Clear Sorting'
        },

        //editing
        editing: {
            allowUpdating: true,
            allowDeleting: true,
            mode: 'row'
        },

        //scrolling
        //scrolling: {
        //    columnRenderingMode: "virtual",
        //    mode: "virtual",
        //    preLoadEnabled: true,
        //    rowRenderingMode: "standard",
        //    useNative: false,
        //    showScrollbar: "onScroll"
        //},

        //Binding ColumnChooser
        columnChooser: {
            enabled: true,
        },

        //onCellPrepared: (e) => {
        //    console.log(e);
        //    if (e.rowType == "data" && e.isAltRow) {
        //        e.cellElement.css("background-color", "green");
        //    }
        //},

        onRowPrepared: (gridCell) => {
            console.log(gridCell);
            if (gridCell.rowType == "data") {
                if (gridCell.data.State == "Texas" || gridCell.data.State == "Minnesota") {
                    gridCell.rowElement.css("background-color", "red");
                }
            }
        },

        //Defining Columns
        columns: [
            {
                dataField: 'CompanyName',
                allowGrouping: false,
                allowHiding: false,
                alignment: 'center',
            },
            {
                dataField: 'Address',
                allowGrouping: false,
                alignment: 'center',
            },
            {
                dataField: 'City',
                alignment: 'center',
            },
            {
                dataField: 'State',
                alignment: 'center',
            },
            {
                dataField: 'Zipcode',
                alignment: 'center',
                gridIndex: 0
            },
            {
                dataField: 'Phone',
                allowGrouping: false,
                alignment: 'center',
            }
        ],

        //ToolBar 
        toolbar: {
            items: [
                //"groupPanel",
                {
                    location: 'before',
                    widget: 'dxButton',
                    options: {
                        icon: "showpanel",
                        onClick(e) {
                            const expanding = e.component.option("icon") === "showpanel";
                            basicGrid.option('grouping.autoExpandAll', expanding);
                            e.component.option('icon', expanding ? 'hidepanel' : 'showpanel');
                        },
                        elementAttr: {
                            class: "button"
                        }
                    }
                },

                {
                    location: 'after',
                    widget: 'dxButton',
                    options: {
                        icon: 'clear',
                        elementAttr: {
                            class: "button"
                        },
                        onClick() {
                            basicGrid.clearGrouping();
                            DevExpress.ui.notify("Grouping Cleared Successfully", "Info", 1500);
                        },
                    }
                },
                {
                    location: 'after',
                    widget: 'dxButton',
                    options: {
                        icon: 'refresh',
                        name: "myBtn",
                        onClick() {
                            basicGrid.refresh();
                            DevExpress.ui.notify("Data Refreshed Successfully", "Info", 1500);
                        },
                        elementAttr: {
                            class: "button"
                        }
                    }
                },
                {
                    location: 'before',
                    widget: 'dxSelectBox',
                    options: {
                        width: 300,
                        items: [{
                            value: 'State',
                            text: 'Grouping by State',
                        }, {
                            value: 'City',
                            text: 'Grouping by City',
                        }, {
                            value: 'Zipcode',
                            text: 'Grouping by ZipCode',
                        }],
                        displayExpr: 'text',
                        valueExpr: 'value',
                        //value: 'State',
                        onValueChanged(e) {
                            basicGrid.clearGrouping();
                            basicGrid.columnOption(e.value, 'groupIndex', 0);
                        },
                        elementAttr: {
                            class: "select"
                        }
                    },

                },
            ],
        },

        summary: {
            totalItems: [
                {
                    column: 'CompanyName',
                    summaryType: 'count',
                    displayFormat: 'Total Companies : {0}',
                    cssClass: 'summary'
                },
            ],

            groupItems: [{
                column: 'CompanyName',
                summaryType: 'count',
                displayFormat: '{0} Companies',
            },]
        }
    }).dxDataGrid('instance');
})