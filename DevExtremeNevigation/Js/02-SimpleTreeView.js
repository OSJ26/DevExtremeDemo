$(() => {
    $("#treeView").dxTreeView({
        //items: products,
        dataSource: data,
        width: 300,
        collapseIcon: 'collapse',
        expandIcon: 'expand',
        hint: 'Products',
        disabledExpr: 'val',
        keyExpr: 'menuId',
        displayExpr:"menuName",
        searchEnabled: true,
        //searchValue:'Video Players',
        searchMode: 'contains',
        selectionMode: 'multiple',
        selectNodesRecursive: false,     
        showCheckBoxesMode: 'selectAll',
        selectAllText: 'Check All',
        virtualModeEnabled: false,
        expandNodesRecursive: true,
        elementAttr: {
            class: 'customize'
        },
        onItemCollapsed: (e) => {
            console.log(e.node);
        },
        onItemExpanded: (e) => {
            console.log("Expanded Items is: " + e.node.text);
        },
        onItemClick: (e) => {
            console.log("Item Clicked is: " +e.node.text);
        },
        onSelectAllValueChanged: (e) => {
            console.log("Select All Value is: "+e.value);
        },
        onSelectionChanged: (e) => {
            console.log("Selection Changed");
        }
    }).dxTreeView("instance");
})