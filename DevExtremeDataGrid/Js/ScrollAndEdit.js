$(() => {
    let mySotre = new DevExpress.data.CustomStore({
        key: "id",
        load: async function () {
            return await $.ajax({
                type: "GET",
                url: "https://jsonplaceholder.typicode.com/todos",
                success: (e) => {
                    DevExpress.ui.notify("Data Fetched Successfully", "success", 500);
                },
                error: (e) => {
                    DevExpress.ui.notify("Data Not Fetched", "Error", 500);
                }

            })
        }
    })
    $("#dxScrollAndEdit").dxDataGrid({
        dataSource: mySotre,
        showBorders: true,
        scrolling: {
            columnRenderingMode: "virtual",
            mode: "virtual",
            preLoadEnabled: true,
            rowRenderingMode: "standard",
            useNative: false,
            showScrollbar: "onScroll"
        },
        editing: {
            mode: "popup",
            allowUpdating: true,
            allowAdding: true,
            allowDeleting: true,
            newRowPosition: "viewportBottom",
            popup: {
                width: 700,
                height: 270,
            },
            form: {
                items: [{
                    itemType: 'group',
                    caption: 'Task Details',
                    colCount: 2,
                    colSpan: 2,
                    items: ['UserId', 'Id', 'Title', {
                        editorType: "dxCheckBox",
                        editorOption: {
                            iconSize: "20px",
                            name: "status",
                            value: true
                        }
                    }],
                }],
            }
        },
        columns: [{
            dataField: "userId",
            sortOrdder: 'asc',
            width: "170px",
            alignment: "center",
        },
        {
            dataField: "id",
            showInColumnChooser: false,
            allowEditing: true,
            width: "200px",
            alignment: "center",
        },
        {
            dataField: "title",
            showInColumnChooser: false,
            width: "800px",
            alignment: "center",
        },
        {
            dataField: "completed",
            width: "180px",
            alignment: "center",
        }
        ],
        pager: {
            allowedPageSizes: [5, 8, 15, 30],
            showInfo: true,
            showNavigationButtons: true,
            showPageSizeSelector: true,
            visible: true,
        },
        paging: {
            pageSize: 20
        },
    });
})