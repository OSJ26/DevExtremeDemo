$(() => {

    $("#menu").dxMenu({
        dataSource: menuData,
        displayExpr: 'name',
        orientation: 'vertical',
    })
})