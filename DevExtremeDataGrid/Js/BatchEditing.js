﻿$(() => {
    let dtoModel;
    let mySotre = new DevExpress.data.CustomStore({
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
        },
        insert: async function (e) {
            return await $.ajax({
                type: "POST",
                url: "https://localhost:7238/api/USED01",
                data: dtoModel,
                success: (e) => {
                    DevExpress.ui.notify("Data Inserted Successfully", "success", 500);
                },
                error: (e) => {
                    DevExpress.ui.notify("Data Not Inserted", "Error", 500);
                }
            })
        }
    })
    $("#myDataGrid").dxDataGrid({
        dataSource: mySotre,
        showBorders: true,
        editing: {
            mode: 'batch',
            allowUpdating: true,
            allowDeleting: true,
            allowAdding: true,
            selectTextOnEditStart: true
        },
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
            width: "370px",
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
            showInfo: true,
            showNavigationButtons: true,
            showPageSizeSelector: true,
            visible: true,
        },
        paging: {
            pageSize: 20
        },
        onEditCanceled: (e) => {
            console.log("Editing Canceled");
            console.log(e);
        },
        onEditCanceling: (e) => {
            console.log("Editing Canceling");
            console.log(e);
        },
        onRowInserting: (e) => {
            console.log(e);
        },
        onSaving: (e) =>{
            console.log(e);
            if (e.changes.length) {
                e.component.refresh(true)
            }
        }
    });
})