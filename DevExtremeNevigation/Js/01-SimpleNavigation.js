$(() => {

    $("#menu1").dxMenu({
        dataSource: menuData,
        displayExpr : 'name',
        orientation: 'horizontal',
        width: 400,
        adaptivityEnabled: true,
        hideSubmenuOnMouseLeave:true,
        showFirstSubmenuMode: {
            name: 'onHover',
            delay: { show: 0, hide: 500 },
        },
        onItemClick: (data) => {
            const item = data.itemData;
            if (item.price) {
                $('#product-details').removeClass('hidden');
                $('#product-details > img').attr('src', item.icon);
                $('#product-details > .price').text(`$${item.price}`);
                $('#product-details > .name').text(item.name);
            }
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