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

    $("#dxSelectBox").dxSelectBox({

        items: carDataSource,
        placeholder: "Choose Car",
        showClearButton: true,
        hint: "Cars",
        width: "200px",
        inputAttr: {
            id: "selectBox"
        },
        searchEnabled: true,

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