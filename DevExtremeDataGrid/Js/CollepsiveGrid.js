$(function () {

    let myStore = new DevExpress.data.CustomStore({
        key: "d04F01",
        cacheRawData: true,
        load: async function () {
            return await $.ajax({
                type: "GET",
                url: "https://localhost:7125/api/USED04",
                success: (e) => {
                    DevExpress.ui.notify("Data Fetched Successfully", "success", 500);
                },
                error: (e) => {
                    DevExpress.ui.notify("Data Not Fetched", "Error", 500);
                }

            })
        }
    })

    const dataGrid = $("#dataGrid").dxDataGrid({
        dataSource: myStore,
        keyExpr: "d04F01",
        allowColumnResizing: true,
        columnAutoWidth: true,
        columnFixing: {
            enabled: true
        },
        allowColumnReordering: true,
        columnChooser: { enabled: true },
        columns: [{
            dataField: "d04F02",
            caption: "Employee First Name",
            validationRules: [{
                type: "required"
            }],
            fixed: true
        }, {
            dataField: "d04F03",
            caption: "Employee Last Name",
            validationRules: [{
                type: "required"
            }]
        }, {
            dataField: "d04F04",
            groupIndex: 0,
            caption: "Employee Designation",
            validationRules: [{
                type: "required"
            }]
        }, {
            dataField: "d04F05",
            caption: "State",
            sortOrder: "asc",
            validationRules: [{
                type: "required"
            }]
        }],
        filterRow: { visible: true },
        searchPanel: { visible: true },
        groupPanel: { visible: true },
        selection: { mode: "single" },
        onSelectionChanged: function (e) {
            e.component.byKey(e.currentSelectedRowKeys[0]).done(employee => {
                if (employee) {
                    $("#selected-employee").text(`Selected employee: ${employee.FullName}`);
                }
            });
        },
        editing: {
            mode: "popup",
            allowUpdating: true,
            allowDeleting: true,
            allowAdding: true
        },
        toolbar: {
            items: [
                "groupPanel",
                {
                    location: "after",
                    widget: "dxButton",
                    options: {
                        text: "Collapse All",
                        width: 136,
                        onClick(e) {
                            const expanding = e.component.option("text") === "Expand All";
                            dataGrid.option("grouping.autoExpandAll", expanding);
                            e.component.option("text", expanding ? "Collapse All" : "Expand All");
                        },
                    },
                },
                {
                    name: "addRowButton",
                    showText: "always"
                },
                "exportButton",
                "columnChooserButton",
                "searchPanel"
            ]
        },
        
    }).dxDataGrid("instance");
});