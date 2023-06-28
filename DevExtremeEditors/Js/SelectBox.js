$(() => {

    const carDataSource = [
        "Baleno",
        "Ciaz",
        "Elantra",
        "verna",
        "Honda City",
        "inova",
        "Fortuner",
        "Defender",
        "Supra"
    ];

    const arrayStore = new DevExpress.data.ArrayStore({
        data: [
            {
                id: 1,
                name: "Om Joshi"
            }
        ]
    })

    $("#dxSelectBox").dxSelectBox({

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