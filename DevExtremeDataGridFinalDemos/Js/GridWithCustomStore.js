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
    }).dxLoadPanel('instance');

    var event;
    const grid = $('#gridFunction').dxDataGrid({
        dataSource: loadData,
        showBorder: true,
        showColumnLines: true,
        showRowLines: true,
        rowAlternationEnabled: true,

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
            text:'Data Loading..'
        },
        searchPanel: {
            visible: true,
            placeholder: 'Search Here',
            highlightSearchText: true,
            highlightCaseSensitive: false,
            width: 300
        },
        filterRow: {
            visible: true,
            resetOperationText: 'ResetMe'
        },
        filterPanel: {
            visible: true,
        },
        repaintChangesOnly: true,
        selection: {
            mode: 'single'
        },
        onSelectionChanged: (e) => {
            const data = e.selectedRowsData;
            if (data) {
                $("#selectedDetails").addClass("card");
                $("#source").text("Source: " + data[0].source);
                $("#destination").text("Destination: " + data[0].destination);
                $("#price").text("Price: " + data[0].price);
                $("#date").text("Date: " + data[0].date);
                $("#passanger").text("Passanger: " + data[0].max_passanger  );
            }
        },
        onRowPrepared: (e) =>{
            if (e.rowType == 'header') {
                e.rowElement[0].bgColor = "#BEDFE6";
            }
        },
        onInitNewRow: (e) => {
            console.log(e);
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
        columns: [
            {
                dataField: 'id',
                allowSorting: false,
                allowGrouping: false,
                allowHiding: false,
                allowEditing: false,
                caption: 'TourId',
                width: 100,
                alignment: 'center'
            },
            {
                dataField: 'source',
                allowHiding: false,
                caption: 'Source',
                alignment: 'center',
                validationRules: [{ type: 'required' }],
            },
            {
                dataField: 'destination',
                allowHiding: false,
                caption: 'Destination',
                alignment: 'center',
                validationRules: [{ type: 'required' }],
            },
            {
                dataField: 'price',
                caption: 'Price',
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
                dataType: 'datetime',
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
                alignment: 'center',
                validationRules: [{ type: 'required' }],
            }
        ],
        //toolbar: {
        //    items: [
        //        {
        //            location: 'before',
        //            widget: 'dxButton',
        //            options: {
        //                icon: "showpanel",
        //                onClick(e) {
        //                    const expanding = e.component.option("icon") === "showpanel";
        //                    grid.option('grouping.autoExpandAll', expanding);
        //                    e.component.option('icon', expanding ? 'hidepanel' : 'showpanel');
        //                },
        //                elementAttr: {
        //                    class: "button"
        //                }
        //            }
        //        },

        //        {
        //            location: 'after',
        //            widget: 'dxButton',
        //            options: {
        //                icon: 'clear',
        //                elementAttr: {
        //                    class: "button"
        //                },
        //                onClick() {
        //                    grid.clearGrouping();
        //                    DevExpress.ui.notify("Grouping Cleared Successfully", "Info", 1500);
        //                },
        //            }
        //        },
        //        {
        //            location: 'after',
        //            widget: 'dxButton',
        //            options: {
        //                icon: 'refresh',
        //                name: "myBtn",
        //                onClick() {
        //                    grid.refresh();
        //                    DevExpress.ui.notify("Data Refreshed Successfully", "Info", 1500);
        //                },
        //                elementAttr: {
        //                    class: "button"
        //                }
        //            }
        //        },
        //        {
        //            location: 'before',
        //            widget: 'dxSelectBox',
        //            options: {
        //                width: 300,
        //                items: [{
        //                    value: 'source',
        //                    text: 'Grouping by Source',
        //                }, {
        //                    value: 'destination',
        //                    text: 'Grouping by Destination',
        //                }, {
        //                    value: 'price',
        //                    text: 'Grouping by Price',
        //                }],
        //                displayExpr: 'text',
        //                valueExpr: 'value',
        //                value: 'source',
        //                onValueChanged(e) {
        //                    grid.clearGrouping();
        //                    grid.columnOption(e.value, 'groupIndex', 0);
        //                },
        //                elementAttr: {
        //                    class: "select"
        //                }
        //            },

        //        },
        //    ],


        //},
        summary: {
            totalItems: [
                {
                    column: 'id',
                    summaryType: 'count',
                    displayFormat: 'Total Bus : {0}',
                },
            ],
        }
    }).dxDataGrid('instance');

    grid.on("saving", () => {
        loadPanel.option("delay", 500);
        loadPanel.option("message", "Data Saving...");
        loadPanel.show();
        setTimeout(() => {
            loadPanel.hide();
        }, 1000)
    })

    grid.on("saved", () => {
        loadPanel.option("delay", 1500);
        loadPanel.option("message", "Data Saved...");
        loadPanel.show();
        setTimeout(() => {
            loadPanel.hide();
        },1000)
    })
    grid.on("rowUpdated", (e) => {
        const key = e.key;
        const index = grid.getRowIndexByKey(key);
        const row = grid.getRowElement(index);
        row.addClass('updatingState');
    })

    //grid.beginCustomLoading("Data Loading..");
})