$(() => {
    let dataModel;
    let mySotre;
    mySotre = new DevExpress.data.CustomStore({
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
        insert: (e) => {
            console.log(e);
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
        onRowInserted: (e) => {
            console.log(e);
            let d01F01 = null;
            let d01F02 = e.data.d01F02;
            let d01F03 = e.data.d01F03;
            let d01F04 = e.data.d01F04;
            let d01F05 = e.data.d01F05;
            let d01F06 = e.data.d01F06;
            dataModel = {
                d01F01,
                d01F02,
                d01F03,
                d01F04,
                d01F05,
                d01F06
            };
            console.log(dataModel);
            const deferred = $.Deferred();
            const promptPromise = DevExpress.ui.dialog.confirm("Are you sure?", "Confirm changes");
            promptPromise.done((dialogResult) => {
                if (dialogResult) {
                    $.ajax({
                        url: "https://localhost:7238/api/USED01",
                        type: "POST",
                        dataType: "json",
                        contentType: "application/json",
                        data:  dataModel,
                        success: function (validationResult) {
                            if (validationResult.errorText) {
                                deferred.reject(validationResult.errorText);
                            } else {
                                deferred.resolve(false);
                            }
                            myStore.insert(dataModel);
                        },
                        error: function () {
                            deferred.reject("Data Loading Error");
                        },
                        timeout: 5000
                    });
                } else {
                    deferred.resolve(true);
                }
            });
            e.cancel = deferred.promise();
        },
        onSaving: (e) =>{
            console.log(e);
            if (e.changes.length) {
                e.component.refresh(true)
            }
        }
    });
})