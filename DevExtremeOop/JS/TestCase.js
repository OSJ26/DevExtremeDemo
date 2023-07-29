import { loadData } from '../Data/dataSourceItem.js';

class myLoadPanel {
    constructor(ele) {
        this.element = ele
    }

    setLoadPanel() {
        const loadPanel = new DevExpress.ui.dxLoadPanel($("#loadPanelEle"), {
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
            height: "auto",
            width: "200px",
            hideOnOutsideClick: true,
            showIndicator: true,
            showPane: true,
            indicatorSrc: '../Other/loading.gif',
        })
    }

    showLoadPanel() {
        loadPanel.show();
    }

    hideLoadPanel() {
        loadPanel.hide();
    }
}

const objLoad = new myLoadPanel($("#loadPanelEle"));
//objLoad.setLoadPanel();

class MyGrid extends myLoadPanel {
    constructor(element) {
        super();
        //super.setLoadPanel($("#loadPanelEle"));
        this.element = element;
    }

    setGrid() {
        this.dataGrid = new DevExpress.ui.dxDataGrid($("#gridOop"), {
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
            repaintChangesOnly: true,
            selection: {
                mode: 'single'
            },  
            onInitialized: () => {
                debugger;
                console.log(this);
                //this.loadPanel.show();
            },
            onContentReady: () => {
                console.log(this);
                //this.loadPanel.hide();
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
                    //dataType: 'datetime',
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
        })
    }
}

const obj = new MyGrid($("#gridOop"));
obj.setGrid();
//obj.setLoadPanel();
debugger;