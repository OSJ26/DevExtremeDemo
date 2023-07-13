$(() => {
    const dxMenu = $('#menu').dxMenu({
        dataSource: menuData,
        hideSubmenuOnMouseLeave: false,
        displayExpr: 'name',
        onItemClick(data) {
            const item = data.itemData;
            if (item.price) {
                $('#product-details').removeClass('hidden');
                $('#product-details > img').attr('src', item.icon);
                $('#product-details > .price').text(`$${item.price}`);
                $('#product-details > .name').text(item.name);
            }
        },
    }).dxMenu('instance');  
})
