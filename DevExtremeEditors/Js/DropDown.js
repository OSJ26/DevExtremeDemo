$(() => {
    const companyArray = (jsonFile) => {
        return new DevExpress.data.CustomStore({
            loadMode: 'raw',
            key: "ID",
            load() {
                return $.getJSON(`../Data/${jsonFile}`);
            }

        })
    }

    $("#myDrop").dxDropDownBox({
        dataSource: companyArray('companyList.json'),
        displayExpr(item) {
            return item && `${item.CompanyName} <${item.Phone}>`;
        },
        contentTemplate: (e) => {
            const value = e.component.option('value');
            const $dataGrid = $('<div>').dxDataGrid({
                dataSource: e.component.getDataSource(),
                columns: ['CompanyName', 'City', 'Phone'],
                filterRow: { visible: true },
                selection: { mode: 'single' },
                selectedRowKeys: [value],
                selectNodesRecursive: false,
                onSelectionChanged(selectedItems) {
                    const keys = selectedItems.selectedRowKeys;
                    const hasSelection = keys.length;

                    e.component.option('value', hasSelection ? keys[0] : null);
                },
            });
            dataGrid = $dataGrid.dxDataGrid('instance');


            e.component.on('valueChanged', (args) => {
                dataGrid.selectRows(args.value, false);
                e.component.close();
            });

            return $dataGrid;
        }
    })  
})