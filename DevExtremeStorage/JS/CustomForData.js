$(() => {
    let myStore;
    myStore = new DevExpress.data.CustomStore({
        key: "d01F01",
        cacheRawData: true,
        load: () => {
            return $.ajax({
                type: "GET",
                url: "https://localhost:7238/api/USED01",
                success: (e) => {
                    console.log(e);
                    DevExpress.ui.notify("Data Fetched SUccessfully", "success", 500);
                },
                error: (e) => {
                    console.log(e);
                    DevExpress.ui.notify("Something went wrong please cehck code!!!", "error", 1000);
                }
            })
        },
        loadMode: "raw",

        insert: (values) => {
            return $.ajax({
                type: "POST",
                data: values,
                url: "https://localhost:7238/api/USED01",
                success: (e) => {
                    console.log(e);
                    DevExpress.ui.notify("Data Inserted SUccessfully", "success", 500);
                },
                error: (e) => {
                    console.log(e);
                    DevExpress.ui.notify(e.responseJSON.title, "error", 1000);
                }
            })
        },

        update: async function (key, values) {
            return await $.ajax({
                url: "https://localhost:7238/api/USED01?id=" + encodeURIComponent(key),
                method: "PUT",
                data: values
            });
        },

        remove: (key) => {
            return $.ajax({
                type: "DELETE",
                data: values,
                crossDomain: true,
                url: "https://localhost:7238/api/USED01?id=" + encodeURIComponent(key),
                success: (e) => {
                    console.log(e);
                    DevExpress.ui.notify("Data Deleted Successfully", "success", 500);
                },
                error: (e) => {
                    console.log(e);
                    DevExpress.ui.notify("Data Not Deleted", "error", 1000);
                }
            })
        }
    });

    $("#customDataGrid").dxDataGrid({
        accessKey: "d",
        dataSource: myStore,
        key: "d01F01",
        allowColumnResizing: true,
        allowColumnReordering: true,
        showBorders: true,
        column: [{
            dataField: "D01F01",
            caption: "User Id",
            sortOrdder:'asc',
            width: "40px",
            alignment: "center",
        },
        {
            dataField: "D01F02",
            caption: "User First Name",
            width: "100px",
            alignment: "center",
        },
        {
            dataField: "D01F03",
            caption: "User Last Name",
            width: "100px",
            alignment: "center",
        },
        {
            dataField: "D01F04",
            caption: "User Address",
            width: "100px",
            alignment: "center",
        },
        {
            dataField: "D01F05",
            caption: "User phone number",
            width: "100px",
            alignment: "center",
        },
        {
            dataField: "D01F06",
            caption: "User Email",
            width: "200px",
            alignment: "center",
        },
        {
            dataField: "D01F07",
            caption: "User Password",
            width: "200px",
            alignment: "center",
        },
        ],

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