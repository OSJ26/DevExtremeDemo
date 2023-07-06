$(() => {
    $("#myGrid").dxDataGrid({
        dataSource: employees,
        keyExpr: 'ID',
        showBorders: true,
        editing: {
            allowUpdating: true,
            allowAdding: true,
            mode: 'row'
        },
        onEditorPreparing(e) {
            if (e.parentType === 'dataRow' && e.dataField === 'CityID') {
                e.editorOptions.disabled = (typeof e.row.data.StateID !== 'number');
            }
        },
        columns: ["FirstName", "LastName", "position", {
            dataField: "StateID",
            caption: "State",
            lookup: {
                dataSource: states,
                valueExpr: "ID",
                displayExpr: "Name"
            }

        }, {
                dataField: "CityID",
                caption: "City",
                lookup: {
                    dataSource(options) {
                        return {
                            store: cities,
                            filter: options.data ? ['StateID', "=", options.data.StateID] : null,
                        };
                    },
                    valueExpr: "ID",
                    displayExpr: "Name"
                }
            },]
    })
})