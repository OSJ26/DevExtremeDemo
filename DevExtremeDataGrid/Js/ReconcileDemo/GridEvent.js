$(() => {
    $('#gridContainer').dxDataGrid({
        dataSource: employees,
        keyExpr: 'ID',
        showBorders: true,
        rowAlterationEnabled: true,
        showColumnLine: true, 
        showRowLine: true,
        focusedRowEnabled: true,
        paging: {
            enabled: false,
        },
        selection: {
            mode: 'multiple'
        },
        editing: {
            mode: 'batch',
            allowUpdating: true,
            allowDeleting: true,
            allowAdding: true,
        },
        columns: [
            {
                dataField: 'Prefix',
                caption: 'Title',
            }, 'FirstName',
            'LastName', {
                dataField: 'Position',
                width: 130,
            }, {
                dataField: 'StateID',
                caption: 'State',
                width: 125,
                lookup: {
                    dataSource: states,
                    displayExpr: 'Name',
                    valueExpr: 'ID',
                },
            }, {
                dataField: 'BirthDate',
                dataType: 'date',
                width: 125,
            },
        ],
        onEditingStart(e) {
            //console.log(e); //component,element,data,cancel,key
            console.log('EditingStart');
        },
        onInitNewRow(e) {
            console.log(e); //component,element,data{emplty}
            console.log('InitNewRow');
        },
        onRowInserting(e) {
            //console.log(e); //getting data with cancel flag
            console.log('RowInserting');
        },
        onRowInserted(e) {
            //console.log(e); //getting unique key
            console.log('RowInserted');
        },
        onRowUpdating(e) {
            //console.log(e); //new,olddata
            console.log('RowUpdating');
        },
        onRowUpdated(e) {
            //console.log(e); //updated value
            console.log('RowUpdated');
        },
        onRowRemoving(e) {
            console.log(e); //removed row data
            console.log('RowRemoving');
        },
        onRowRemoved(e) {
            //console.log(e); //removed row data
            console.log('RowRemoved');
        },
        onSaving(e) {
            //console.log(e); //cahnges and promise, cancel
            console.log('Saving');
        },
        onSaved(e) {
            var component = e.component;
            var columnOptions = component.columnOption;
            var dataSource = component.getDataSource();
            console.log(columnOptions);
            console.log(dataSource._items); //cahnges array
            console.log('Saved');
        },
        onEditCanceling(e) {
            //console.log(e);
            console.log('EditCanceling');
        },
        onEditCanceled(e) {
            //console.log(e);
            console.log('EditCanceled');
        },
        onEditorPrepared: (e) => {
            //console.log(e); //all the information of editor
            console.log("Editor Prepared");
        },
        onEditorPreparing: (e) => {
            //console.log(e);
            console.log("Editor Preparing");
        },
        onRowPrepared: (e) => {
            //console.log(e); //All the rows with the data 
            console.log("Row Prepared");
        },
        onFocusedCellChanged: (e) => {
            //console.log(e);
            console.log("Cell Focuse Changed")
        },
        onFocusedCellChanging: (e) => {
            //console.log(e);
            console.log("Cell Focuse Changing")
        },
        onFocusedRowChanged: (e) => {
            console.log("Row Losses Focuse");
            //console.log("Focused Row Id is: " + e.row.data.ID);
        },
        onFocusedRowChanging: (e) => {
            //console.log(e);
            console.log("Row Geting the Focuse");
        },
        onRowClick: (e) => {
            //console.log(e);
            console.log("Row Clicked");
            var key = $('#gridContainer').dxDataGrid("instance").getSelectedRowKeys();
            var data = $('#gridContainer').dxDataGrid("instance").getSelectedRowsData();
            console.log(data);
            console.log(key);
        },
    });
});
