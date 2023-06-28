$(() => {
    //const arrayStore = new DevExpress.data.ArrayStore({
    //    data: [
    //        {
    //            id: 1,
    //            name: "Om Joshi"
    //        }
    //    ]
    //})

    //$("dxSelect").dxSelectBox();
    //$("dxSelect").dxSelectBox({
    //    dataSource: arrayStore,
    //    width: "200px",
    //    searchEnabled: true,
    //    inputAttr: {
    //        id:"selectBox"
    //    },
    //    placeholder: "Employee Name",
    //    displayExpr: 'name',
    //    valueExpr: 'id',
    //})


    const arrayStore = new DevExpress.data.ArrayStore({
        data: [
            {
                id: 1,
                name: "Om Joshi"
            }
        ]
    })

    $("#dxSelect").dxSelectBox({

        //items: carDataSource,
        dataSource: arrayStore,
        placeholder: "Choose Car",
        showClearButton: true,
        hint: "Cars",
        width: "200px",
        inputAttr: {
            id: "selectBox"
        },
        searchEnabled: true,
        displayExpr: 'Name',
        valueExpr: 'id',
        onSelectionChanged: (e) => {
            console.log(e);
            console.log("value selected", e.selectedItem);
        },

        onValueChanged: (e) => {
            console.log(e);
            console.log("value Changed", e.value);
        }
    })

})