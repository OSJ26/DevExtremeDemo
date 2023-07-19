﻿$(() => {
    function isNotEmpty(value) {
        return value !== undefined && value !== '' && value !== null;
    }

    const store = new DevExpress.data.CustomStore({
        key: 'OrderNumber',
        load(loadOptions) {
            const deferred = $.Deferred();
            const args = {};

            [
                'skip',
                'take',
                'requireTotalCount',
                'requireGroupCount',
                'sort',
                'filter',
                'totalSummary',
                'group',
                'groupSummary',
            ].forEach((i) => {
                if (i in loadOptions && isNotEmpty(loadOptions[i])) {
                    args[i] = JSON.stringify(loadOptions[i]);
                }
            });

            $.ajax({
                url: 'https://js.devexpress.com/Demos/WidgetsGalleryDataService/api/orders',
                dataType: 'json',
                data: args,
                success: (result) => {
                    deferred.resolve(result.data, {
                        sort: result.sort,
                        filter: result.filter,
                        totalCount: result.totalCount,
                        summary: result.summary,
                        groupCount: result.groupCount,  
                    })
                },
                error: () => {
                    deferred.reject("Data Loading Error");
                },
                timeout: 5000,
            });

            return deferred.promise();
        }
    });

    $("#grid").dxDataGrid({
        dataSource: store,
        allowColumnReordering: false,
        alignment: 'center',
        showBorders: true,
        showColumnLines: true,
        showRowLines: true,
        rowAlternationEnabled: true,
        remoteOperations: true,
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
        paging: {
            pageSize: 5,
        },
        pager: {
            showPageSizeSelector: true,
            allowedPageSizes: [8, 10, 15, 20]
        },
        filterRow: {
            visible: true,
            resetOperationText: 'ResetMe',
        },
        filterPanel: {
            visible: true,
        },
        headerFilter: {
            visible: true,
            allowSearch: true,
        },
        groupPanel: {
            visible: true,
        },
        editing: {
            allowUpdating: true,
            allowDeleting: true,
        },
        columns: [{
            dataField: 'OrderNumber',
            dataType: 'number',
            allowHiding: false,
            alignment: 'center',
            allowGrouping: false,
        }, {
            dataField: 'OrderDate',
            dataType: 'date',
            allowHiding: false,
            allowGrouping: false,
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
            alignment: 'center',
            format: 'currency',
            allowHeaderFiltering: false
        }],

    }).dxDataGrid("instance");
})