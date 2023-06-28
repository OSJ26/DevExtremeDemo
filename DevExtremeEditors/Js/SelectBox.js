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

    const unGrouped = [{
        ID: 1,
        Name: 'Om',
        Category: 'Admin',
    },
    {
        ID: 2,
        Name: 'Kishan',
        Category: 'Admin',
    },
    {
        ID: 3,
        Name: 'Hemangi',
        Category: 'User',
    },
    {
        ID: 4,
        Name: 'Shivam',
        Category: 'User',
    },
    {
        ID: 5,
        Name: 'Akhil',
        Category: 'User',
    }
    ]

    const fromUngroupedData = new DevExpress.data.DataSource({
        store: {
            type: 'array',
            data: unGrouped,
            key: 'ID',
        },
        group: 'Category',
    });

    $("#groupedSelect").dxSelectBox({
        dataSource: fromUngroupedData,
        placeholder: "Choose User",
        showClearButton: true,
        width: "200px",
        searchEnabled: true,
        displayExpr: "Name",
        valueExpr: "id",
        grouped: true
    })
})