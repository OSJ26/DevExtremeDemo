$(() => {

    const carDataSource = [{
        id: 1,
        name: "Baleno"
    },
    {
        id: 2,
        name: "Ciaz"
    },
    {
        id: 3,
        name: "Defender"
    },
    {
        id: 4,
        name: "Supra"
    }
    ];

    $("#dxSelectBox").dxSelectBox({

        items: carDataSource,
        placeholder: "Choose Car",
        showClearButton: true,
        showSelectionControls : true,
        hint: "Cars",
        width: "200px",
        inputAttr: {
            id: "selectBox"
        },
        displayExpr: "name",
        searchEnabled: true,
        onInitialized: (e) => {
            console.log(e);
        },
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