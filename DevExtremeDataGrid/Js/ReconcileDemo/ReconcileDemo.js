$(() => {
    $('#reconcileWork').dxDataGrid({
        dataSource: employees,
        keyExpr: 'ID',
        allowColumnReordering: true,
        allowColumnResizing: true,
        cloumnAutoWidth: true,
        showBorders: true,
        focusedRowEnabled: true,
        rowAlterationEnabled: true,
        showColumnLine: true,
        showRowLine: true,
        columnChooser: {
            enabled: true,
            allowSearch: true,
            mode: 'select',
            search: {
                editorOptions: {
                    placeholder: 'Search column',
                    mode: 'text'
                },
            },
            selection: {
                recusive: true,
                allowSelectAll: true,
                selectByClick: true
            }
        },
        columnFixing: {
            enabled: true
        },

        editing: {
            mode: 'row',
            allowUpdating: true,
            allowDeleting: true,
            allowAdding: true,
        },

        columns: [{
            caption: 'Employee',
            width: 230,
            allowHiding: false,
            fixed: true,
            calculateCellValue(data) {
                return [data.Title,
                data.FirstName, data.LastName]
                    .join(' ');
            },
        }, {
            dataField: 'BirthDate',
            showEditorAlways: true,
            dataType: 'date',
        }, {
            dataField: 'HireDate',
            dataType: 'date',
            showEditorAlways: true,
        }, {
            dataField: 'Position',
            alignment: 'right',
        }, {
            dataField: 'Address',
            width: 230,
        }, 'City', 'State', {
            dataField: 'Zipcode',
            visible: false,
        }, 'HomePhone', 'MobilePhone', 'Skype', 'Email'],
    })
})