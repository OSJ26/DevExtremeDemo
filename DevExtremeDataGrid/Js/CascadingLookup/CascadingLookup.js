$(() => {
    $("#myGrid").dxDataGrid({
        dataSource: employees,
        keyExpr: 'ID',
        showBorders: true,
        editing: {
            allowUpdating: true,
            allowAdding: true,
            mode: 'form'
        },
        onEditorPreparing(e) {
            if (e.parentType === 'dataRow' && e.dataField === 'CityID') {
                e.editorOptions.disabled = (typeof e.row.data.StateID !== 'number');
            }
        },
        columns: ["FirstName", "LastName", "Position", {
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
            },],
        onEditingStart: () => {
            console.log("Editing started");
        },

        onEditCanceling: (e) => {
            console.log("Editing Canceling Decision");
        },
        onEditCanceled: () => {
            console.log("Editing canceled by user");
        },
        onEditorPrepared: (e) => {
            //console.log(e);
            console.log("Editor is prepered for editing");
        },
        onEditorPreparing: () => {
            console.log("Editor is prepering");
        }
    })
})