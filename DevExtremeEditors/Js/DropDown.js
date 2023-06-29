$(() => {

    const fruits = ["Apples", "Oranges", "Lemons", "Pears", "Pineapples"];
    const dataSource = fruits;

    const arrayStore = new DevExpress.data.ArrayStore({
        data: [
            {
                id: 1,
                name: "Om Joshi"
            },
            {
                id: 2,
                name: "Kishan Kakdiya"
            },
            {
                id: 3,
                name: "Shivam Nanda"
            }
        ]
    })

    $("#simpleDrop").dxDropDownBox({
        accessKey: "s",
        acceptCustomValue: true,
        contentTemplate : (e) => {
            const $list = $("<div>").dxList({
                dataSource,
                allowItemDeleting: true,
                onItemDeleting: function (e) {
                    if (dataSource.length === 1) {
                        e.cancel = true;
                    }
                }
            });
            let myList = $list.dxList("instance");
            return $list;
        },
        selectionMode: "single",
        inputAttr: {
            id : "simpleDrop"
        },
        elementAttr: {
            id: "simpleDrop",
            class: "drop"
        },
        openOnFieldClick: false,
        onEnterKey: (e) => {
            dataSource.push(e.component.option("value"));
            e.component.option("value", "");
            myList.reload();
        }
    })

    //const employeeList = (jsonData) => {
    //    return new DevExpress.data.CustomStore({
    //        loadMode: 'raw',
    //        key: "key",
    //        load() {
    //            return $.getJSON(`../Data/${jsonData}`);
    //        }

    //    })
    //}

    $("#groupDrop").dxDropDownBox({
        displayExpr: "item",
        contentTemplate: (e) => {
            const $list = $("<div>").dxList({
                dataSource: employee,
                height: '100%',

                grouped: true,
                collapsibleGroups: true,
                groupTemplate(data) {
                    return $(`<div>Assigned: ${data.key}</div>`);
                },
            });
            let myList = $list.dxList("instance");
            return $list;
        },
    })



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