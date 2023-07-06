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
        columns: [{
            dataField: "FirstName",
            validationRules: [{
                type: "required",
                message: "First Name is required"
            }],
        },
        {
            dataField: "LastName",
            validationRules: [{
                type: "required",
                message: "Last Name is required"
            }],
        },
        {
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
        onRowClick: (e) => {
            console.log(e);
        },
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