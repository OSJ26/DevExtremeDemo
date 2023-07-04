$(() => {

    let myStore = new DevExpress.data.CustomStore({
        key: "d01F01",
        load: async function () {
            return await $.ajax({
                type: "GET",
                url: "https://localhost:7238/api/USED01",
                success: (e) => {
                    DevExpress.ui.notify("Data Fetched Successfully", "success", 500);
                },
                error: (e) => {
                    DevExpress.ui.notify("Data Not Fetched", "Error", 500);
                }

            })
        }
    });

    $("#dxGrid").dxDataGrid({
        dataSource: myStore,
        cacheEnabled: true,
        showBorder: true,
        columnMinWidth: 100,
        columnChooser: {
            enabled: true,
            emptyPanelText: "Let's Hide Some Column",
            mode: "select",
            search: {
                editorOptions: {
                    placeholder: "Search Column",
                    mode: "text"
                },
                enabled: true,
            },
            title: "Confidential Column",
        },
        columnResizingMode: "nextColumn",
        key: "d01F01",
        allowColumnResizing: true,
        allowColumnReordering: true,
        showBorders: true,

        columns: [{
            dataField: "d01F01",
            caption: "User Id",
            sortOrdder: 'asc',
            width: "170px",
            alignment: "center",
        },
        {
            dataField: "d01F02",
            caption: "User First Name",
            showInColumnChooser: false,
            allowEditing: true,
            width: "200px",
            alignment: "center",
        },
        {
            dataField: "d01F03",
            caption: "User Last Name",
            showInColumnChooser: false,
            width: "200px",
            alignment: "center",
        },
        {
            dataField: "d01F04",
            caption: "User Address",
            width: "200px",
            alignment: "center",
        },
        {
            dataField: "d01F05",
            caption: "User phone number",
            width: "100px",
            alignment: "center",
        },
        {
            dataField: "d01F06",
            caption: "User Email",
            showInColumnChooser: false,
            width: "400px",
            alignment: "center",
        },
        {
            dataField: "d01F07",
            caption: "User Password",
            width: "500px",
            alignment: "center",
            showInColumnChooser: false,
            visible: false
        },
        ],
        pager: {
            allowedPageSizes: [5, 8, 15, 30],
            //showInfo: true,
            showNavigationButtons: true,
            showPageSizeSelector: true,
            visible: true,
        },
        paging: {
            pageSize: 10
        },
        editing: {
            allowAdding: true,
            allowDeleting: true,
            allowUpdating: true
        }
    }).dxDataGrid("instance");

    
})