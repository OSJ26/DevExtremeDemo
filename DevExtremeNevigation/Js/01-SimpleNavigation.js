$(() => {

    $("#menu1").dxMenu({
        dataSource: menuData,
        displayExpr : 'name',
        //orientation: 'vertical',
        showFirstSubmenuMode: {
            name: 'onHover',
            delay: { show: 0, hide: 500 },
        },
        //submenuDirection:'rightOrBottom' not working 
        onItemClick: (e) => {
            console.log("Items Selected is: " +e.itemData.name);
        },
        onSubmenuHidden: (e) => {
            console.log("Exited From: " +e.rootItem[0].innerText);
        },
        onSubmenuHiding: (e) => {
            console.log('Exiting From: ' + e.rootItem[0].innerText);
        },
        onSubmenuShowing: (e) => {
            console.log("Sub Menu Item: " + e.submenu._userOptions.items[0].name);
        },
        onSubmenuShown: (e) => {
            console.log("Root Element Texte: " + e.rootItem[0].innerText);
        }
    })
})