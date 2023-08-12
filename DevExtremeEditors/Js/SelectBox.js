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

        dataSource: carDataSource,
        placeholder: "Choose Car",
        showClearButton: true,
        showSelectionControls: true,
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

    async function group(){
        return await $.ajax({
            type: 'GET',
            url: 'https://www.gamerpower.com/api/giveaways?platform=steam&type=loot&sort-by=popularity',
        })
    }

    const fromUngroupedData = new DevExpress.data.DataSource({
        data: group,
        key: 'id',
        group: 'type',
    });

    $("#groupedSelect").dxSelectBox({
        dataSource: new DevExpress.data.DataSource({
            load: group,
            key: 'id',
            type: 'array',
            group: 'type',
        }),
        placeholder: "Select One..",
        showClearButton: true,
        width: "400px",
        searchEnabled: true,
        displayExpr: "title",
        valueExpr: "id",
        //grouped: true
    })
})