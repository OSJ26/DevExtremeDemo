$(() => {

    let myStore = new DevExpress.data.CustomStore({
        key: "d01F01",
        cacheRawData: true,
        load: async function () {
            return await $.ajax({
                type: "GET",
                url: "https://localhost:7125/api/PROD01",
                success: (e) => {
                    DevExpress.ui.notify("Data Fetched Successfully", "success", 500);
                },
                error: (e) => {
                    DevExpress.ui.notify("Data Not Fetched", "Error", 500);
                }

            })
        }
    })


    $("#myGrid").dxDataGrid({
        dataSource: myStore,
        keyExpr: "d01F01",
        showBorders: true,
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
        Filtering Start
        */
        filterRow: {
            visible: true,
            resetOperationText: 'Reset Filter'
        },
        filterPanel: { visible: true },
        headerFilter: {
            visible: true,
            allowSearch: true
        },
        filterValue: [["d01F02", "=", "Lettuce - Romaine, Heart"]], //generate filtered grid
        /*
        Filtering End
        */

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

        columns: [
            {
                dataField: "d01F01",
                caption: "Product Id",
                allowGrouping: false,
                allowSorting: false,
                alignment: "center",
            },
            {
                dataField: "d01F02",
                caption: "Produt Name",
                alignment: "center",

            },
            {
                dataField: "d01F03",
                caption: "Product Price",
                alignment: "center",

            },
            {
                dataField: "d01F04",
                caption: "Product Quantity",
                alignment: "center",

                //groupIndex: 0,
            },
            {
                dataField: "d01F05",
                caption: "Ordered Date",
                alignment: "center",

                sortOrder: "asc",
                validationRules: [{
                    type: "required"
                }]
            }
        ]
    });

    $("#myButton").dxButton({
        text: "Clear Sorting",
        onClick: () => {
            $("#myGrid").dxDataGrid("instance").clearSorting();
        }
    })
    $("#clGroup").dxButton({
        text: "Clear Grouping",
        onClick: () => {
            $("#myGrid").dxDataGrid("instance").clearGrouping();
        }
    })
})