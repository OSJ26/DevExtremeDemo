$(() => {

    let mySotre = new DevExpress.data.CustomStore({
        key: "d04F01",
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

    $('#grid').dxDataGrid({
        dataSource: mySotre,
        showBorders: true,
        rowAlterationEnabled: true,
        keyExpr: "d04F01",
        columns: [
            {
                dataField: "d04F01",
                caption: "Employee Id",
                widht: 100,
                alignment: 'center'
            },
            {
                dataField: "d04F02",
                caption: "First Name",
                alignment: 'center'
            },
            {
                dataField: "d04F03",
                alignment: 'center',
                caption: "Last Name",
            },
            {
                alignment: 'center',
                dataField: "d04F04",
                caption: "Designation",
            },
            {
                dataField: "d04F05",
                alignment: 'center',
                caption: "State",
            }
        ],

        toolbar: {
            items: [
                {
                    location: 'before',
                    widget: 'dxButton',
                    options: {
                        text: "Collepse All",
                        width: 136,
                        onClick(e) {
                            const expanding = e.component.option("text") === "Expand All";
                            $('#grid').dxDataGrid("instance").option('grouping.autoExpandAll', expanding);
                            e.component.option('text', expanding ? 'Collapse All' : 'Expand All');
                        },
                        inputAttr: {
                            id: "myButton"
                        },
                        onInitialized: () => {
                            $('#myButton').addClass("button");
                        },
                    }
                },

                {
                    location: 'after',
                    widget: 'dxButton',
                    options: {
                        icon: 'clear',
                        text: "clear grouping",
                        onClick() {
                            $('#grid').dxDataGrid("instance").clearGrouping();
                        },
                    }
                },
                {
                    location: 'after',
                    widget: 'dxButton',
                    options: {
                        icon: 'refresh',
                        name: "myBtn",
                        onClick() {
                            $('#grid').dxDataGrid("instance").refresh();
                            DevExpress.ui.notify("Data Refreshed Successfully", "Info", 1500);
                        },
                    }
                },
                {
                    location: 'before',
                    widget: 'dxSelectBox',
                    options: {
                        width: 300,
                        items: [{
                            value: 'State',
                            text: 'Grouping by State',
                        }, {
                            value: 'Designation',
                            text: 'Grouping by Designation',
                        }],
                        displayExpr: 'text',
                        valueExpr: 'value',
                        value: 'State',
                        onValueChanged(e) {
                            $('#grid').dxDataGrid("instance").clearGrouping();
                            $('#grid').dxDataGrid("instance").columnOption(e.value, 'groupIndex', 0);
                        },
                    },

                },
            ],
        }
    });

})