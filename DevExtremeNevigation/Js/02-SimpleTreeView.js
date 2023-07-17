$(() => {
    $("#treeView").dxTreeView({
        items: products,
        width: 300,
        collapseIcon: 'collapse',
        expandIcon: 'expand',
        hint: 'Products',
        searchEnabled: true,
        searchMode: 'startsWith',
        selectionMode: 'multiple',
        selectNodesRecursive: true,
        showCheckBoxesMode: 'selectAll',
        expandAllEnabled: 'e',
        onItemCollapsed: (e) => {
            console.log("Collepsed Items is: " + e.node.text);
        },
        onItemExpanded: (e) => {
            console.log("Expanded Items is: " + e.node.text);
        },
        onItemClick: (e) => {
            console.log("Item Clicked is: " +e.node.text);
        },
        onSelectAllValueChanged: (e) => {
            console.log("Select All Value is: "+e.value);
        }
    }).dxTreeView("instance");
})