import { loadData } from '../Data/dataSourceOperation.js';
$(() => {

    const loadPanel = $('#loadPanel').dxLoadPanel({
        animation: {
            show: {
                type: 'fade',
                from: 0,
                to: 1
            },
            hide: {
                type: 'fade',
                from: 1,
                to: 0
            }
        },
        shadingColor: 'rgb(0,0,0,0.5)',
        position: { of: '#containor' },
        visible: false,
        shading: true,
        height: 100,
        width: 200,
        hideOnOutsideClick: true,
        showIndicator: true,
        showPane: true,
        indicatorSrc: '../Other/loading.gif',
        message: 'Loading',
    });

    var event;
    const grid = $('#gridFunction').dxDataGrid({
        dataSource: loadData,
        showBorders: true,
        showColumnLines: true,
        showRowLines: true,
        rowAlternationEnabled: true,
        height: 450,
        focusedRowEnabled: true,
        focusedRowIndex: 0,
        autoNavigateToFocusedRow: false,
        editing: {
            allowUpdating: true,
            allowDeleting: true,
            allowAdding: true,
            mode: 'batch'
        },
        columnChooser: {
            enabled: true,
            allowSearch: true,
            mode: 'select',
            search: {
                editorOptions: {
                    placeholder: 'Search column',
                    mode: 'text'
                },
            },
            selection: {
                recusive: true,
                allowSelectAll: true,
                selectByClick: true
            }
        },

        headerFilter: {
            visible: true,
        },
        groupPanel: {
            visible: true,
        },
        loadPanel: {
            enabled: false,
            indicatorSrc: '../Other/loading.gif',
            text: 'Data Loading..'
        },
        searchPanel: {
            visible: true,
            placeholder: 'Search Here',
            highlightSearchText: true,
            highlightCaseSensitive: false,
            width: 200
        },
        filterRow: {
            visible: true,
            resetOperationText: 'ResetMe'
        },
        filterPanel: {
            visible: true,
        },
        pager: {
            allowedPageSizes: [5, 10, 15, 20],
            showInfo: true,
            showNavigationButtons: true,
            showPageSizeSelector: true,
            visible: true
        },
        paging: {
            pageSize: 5
        },
        repaintChangesOnly: true,
        selection: {
            mode: 'single'
        },

        keyboardNavigation: {
            editKeyOption: "startEdit",
            editOnKeyPress: true,
            enterKeyDirection: 'column'
        },

        onOptionChanged: (e) => {
            //debugger;
            //console.log(e);
            //console.log(e.component.option("editing.editRowKey"));
            //console.log(e.component.option("editing.changes"));
        },

        onInitialized: (e) => {
            //console.log(e.component.option("elementAttr", "body"));
            console.log(e);
            $("#body").addClass("body");
        },

        onContentReady: (e) => {
            console.log(e);
        },

        onSelectionChanged: (e) => {
            //console.log(e.component.getDataSource());
            const data = e.selectedRowsData;
            if (data) {
                $("#selectedDetails").addClass("card");
                $("#source").text("Source: " + data[0].source);
                $("#destination").text("Destination: " + data[0].destination);
                $("#price").text("Price: " + data[0].price);
                $("#date").text("Date: " + data[0].date);
                $("#passanger").text("Passanger: " + data[0].max_passanger);
            }
        },

        //onRowPrepared: (e) => {
        //    //console.log(e);
        //    if (e.rowType == 'header') {
        //        e.rowElement[0].bgColor = "#6c7ba1";  
        //        $(".dx-header-row").addClass('header');
        //    }

        //    if (e.rowType == "data") {
        //        $(".dx-texteditor-input").addClass("myEditor");
        //    }
        //},

        onRowInserted: (e) => {
            $("#insertedDetails").addClass("card");
            $("#intitle").text("Inserted Data");
            $("#inkey").text("Id: " + e.data.id);
            $("#insource").text("Source: " + e.data.source);
            $("#indestination").text("Destination: " + e.data.destination);
            $("#inprice").text("Price: " + e.data.price);
            $("#indate").text("Date: " + e.data.date);
            $("#inpassanger").text("Passanger: " + e.data.max_passanger);
        },

        onRowRemoved: (e) => {
            $("#removedRow").addClass("card");
            $("#title").text("Removed Row");
            $("#key").text("Id: " + e.data.id);
            $("#source1").text("Source: " + e.data.source);
            $("#destination1").text("Destination: " + e.data.destination);
            $("#price1").text("Price: " + e.data.price);
            $("#date1").text("Date: " + e.data.date);
            $("#passanger1").text("Passanger: " + e.data.max_passanger);
        },

        onToolbarPreparing: (e) => {
            //console.log(e.toolbarOptions.items[4].widget);
            if (e.toolbarOptions.items[4].widget === "dxSelectBox") {
                $(".dx-texteditor-input").removeClass("myEditor");
            }

        },

        columns: [
            {
                dataField: 'id',
                allowSorting: false,
                allowGrouping: false,
                allowHiding: false,
                allowEditing: false,
                allowFiltering: false,
                showInColumnChooser: false,
                caption: 'BusId',
                width: 150,
                alignment: 'center'
            },
            {
                caption: "Buses",
                alignment: "center",
                columns: [{
                    dataField: 'source',
                    allowHiding: false,
                    caption: 'Source',
                    width: 200,
                    alignment: 'center',
                    validationRules: [{ type: 'required' }],
                },
                {
                    dataField: 'destination',
                    allowHiding: false,
                    caption: 'Destination',
                    width: 200,
                    alignment: 'center',
                    validationRules: [{ type: 'required' }],
                }]
            },
            {
                dataField: 'price',
                caption: 'Amount',
                alignment: 'center',
                validationRules: [{ type: 'required' }],
            },
            {
                dataField: 'stops',
                caption: 'Stations',
                alignment: 'center',
                validationRules: [{ type: 'required' }],
            },
            {
                dataField: 'date',
                caption: 'Date',
                allowHiding: false,
                dataType: 'date',
                alignment: 'center',
                validationRules: [{ type: 'required' }],
            },
            {
                dataField: 'pickup_point',
                caption: 'PickUp',
                alignment: 'center',
                validationRules: [{ type: 'required' }],
            },
            {
                dataField: 'drop_address',
                caption: 'Drop',
                alignment: 'center',
                validationRules: [{ type: 'required' }],
            },
            {
                dataField: 'max_passanger',
                caption: 'Passanger',
                allowFiltering: false,
                alignment: 'center',
                validationRules: [{ type: 'required' }],
            }
        ],
        toolbar: {
            items: [
                "addRowButton",
                "saveButton",
                //"groupPanel",
                {
                    location: 'before',
                    widget: 'dxButton',
                    options: {
                        icon: "showpanel",
                        onClick(e) {
                            const expanding = e.component.option("icon") === "showpanel";
                            grid.option('grouping.autoExpandAll', expanding);
                            e.component.option('icon', expanding ? 'hidepanel' : 'showpanel');
                        }
                    }
                },
                {
                    location: 'after',
                    widget: 'dxButton',
                    options: {
                        icon: 'group',
                        onClick() {
                            grid.clearGrouping();
                            DevExpress.ui.notify("Grouping Cleared Successfully", "Info", 1500);
                        },
                    }
                },
                {
                    location: 'after',
                    widget: 'dxButton',
                    options: {
                        icon: 'revert',
                        name: "myBtn",
                        onClick() {
                            grid.refresh();
                            DevExpress.ui.notify("Data Refreshed Successfully", "Info", 1500);
                        }
                    }
                },
                'columnChooserButton',
                {
                    location: 'before',
                    widget: 'dxSelectBox',
                    options: {
                        width: 300,
                        items: [{
                            value: 'source',
                            text: 'Grouping by Source',
                        }, {
                            value: 'destination',
                            text: 'Grouping by Destination',
                        }, {
                            value: 'price',
                            text: 'Grouping by Price',
                        }],
                        displayExpr: 'text',
                        valueExpr: 'value',
                        value: 'source',
                        onValueChanged(e) {
                            grid.clearGrouping();
                            grid.columnOption(e.value, 'groupIndex', 0);
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
                    column: 'id',
                    summaryType: 'count',
                    recalculateWhileEditing: true,
                    displayFormat: 'Total Bus : {0}',
                },
            ],
        }
    }).dxDataGrid('instance');

    //grid.on("saving", () => {
    //    loadPanel.option("delay", 500);
    //    loadPanel.option("message", "Data Saving...");
    //    loadPanel.show();
    //    setTimeout(() => {
    //        loadPanel.hide();
    //    }, 1000)
    //})

    //grid.on("saved", () => {
    //    loadPanel.option("delay", 1500);
    //    loadPanel.option("message", "Data Saved...");
    //    loadPanel.show();
    //    setTimeout(() => {
    //        loadPanel.hide();
    //    }, 1000)
    //})
    //grid.on("rowUpdated", (e) => {
    //    const key = e.key;
    //    const index = grid.getRowIndexByKey(key);
    //    const row = grid.getRowElement(index);
    //    row.addClass('updatingState');
    //})

    //grid.beginCustomLoading("Data Loading..");
    //export default loadPanel;
});