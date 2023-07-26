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
        height: 140,
        width: 140,
        hideOnOutsideClick: true,
        showIndicator: true,
        showPane: true,
        indicatorSrc: '../Other/loading.gif',
        message: 'Loading',
    }).dxLoadPanel('instance');

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
        onSaving(e) {
            loadPanel.show();
        },
        onSaved() {
            setTimeout(() => {
                loadPanel.hide();
            }, 3000);
        },
        selection: {
            mode: 'multiple'
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

    var state = grid.state();
    console.log(state);
    //grid.beginCustomLoading("Data Loading..");
})