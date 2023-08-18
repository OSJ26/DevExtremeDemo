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
        //rowAlternationEnabled: true,
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
            pageSize: 5,
            pageIndex: 3
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

        onInitialized: (e) => {
            console.log(e);
            $("#body").addClass("body");
        },

        onCellPrepared: (gridCell) => {
            //console.log(gridCell);
            if (gridCell.rowType == "data" && gridCell.column.dataField == "price") {
                gridCell.cellElement.css("background-color", gridCell.data.price >= 50 ? "green" : "");
            }
            if (gridCell.rowType == "group" && gridCell.columnIndex == 1) {
                gridCell.cellElement.html(gridCell.data.key);
                gridCell.cellElement.attr("title", "");
            }
        },

        onRowPrepared: (gridRow) => {
            console.log(gridRow);
            if (gridRow.rowType === "data") {
                if (gridRow.data.stops == "-")
                    gridRow.rowElement.css("background-color", "yellow");
            }
        },
        onContentReady: (e) => {
            console.log(e);
        },

        onSelectionChanged: (e) => {
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
                allowHiding: false,
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
                "groupPanel",
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
                //{
                //    location: 'before',
                //    widget: 'dxSelectBox',
                //    options: {
                //        width: 300,
                //        items: [{
                //            value: 'source',
                //            text: 'Grouping by Source',
                //        }, {
                //            value: 'destination',
                //            text: 'Grouping by Destination',
                //        }, {
                //            value: 'price',
                //            text: 'Grouping by Price',
                //        }],
                //        displayExpr: 'text',
                //        valueExpr: 'value',
                //        value: 'source',
                //        onValueChanged(e) {
                //            grid.clearGrouping();
                //            grid.columnOption(e.value, 'groupIndex', 0);
                //        },
                //        elementAttr: {
                //            class: "select"
                //        }
                //    },

                //},
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

});