$(() => {
    $("#gridContainor").dxDataGrid({
        dataSource: employees,
        keyExpr: "ID",
        showBorders: true,
        rowAlternationEnabled: true,
        columns: [
            {
                dataField: "Picture",
                width: 150,
                allowSorting: false,
                allowFiltering: false,
                allowGrouping: false,
                cellTemplate: (containor, option) => {
                    console.log(option);
                    $("<div>").append($("<img>", { src: option.value })).appendTo(containor);
                }
            },
            {
                dataField: "Prefix",
                caption: "Title",
                width: 60
            },
            "FirstName", "LastName", "Position",
            {
                dataField: 'BirthDate',
                dataType: 'date',
            }, {
                dataField: 'HireDate',
                dataType: 'date',
            },
        ]
    })

    $("#gridContainor1").dxDataGrid({
        dataSource: employees,
        keyExpr: "ID",
        showBorders: true,
        rowAlternationEnabled: true,
        dataRowTemplate: (conatinor, item) =>{
            const { data } = item;
            const markUp = '<tr class= \' main-row\'>'
                + `<td rowspan='2'><img src='${data.Picture}' /></td>`
                + `<td>${data.Prefix}</td>`
                + `<td>${data.FirstName}</td>`
                + `<td>${data.LastName}</td>`
                + `<td>${data.Position}</td>`
                + '</tr>'
                + '<tr class=\'notes-row\'>'
                + `<td colspan='6'><div>${data.Notes}</div></td>`
                + '</tr>';

            conatinor.append(markUp);
        },
        columns: [
            {
                dataField: "Picture",
                width: 150,
                allowSorting: false,
                allowFiltering: false,
                allowGrouping: false,
            },
            {
                dataField: "Prefix",
                caption: "Title",
                width: 60
            },
            "FirstName", "LastName", "Position",
            {
                dataField: 'BirthDate',
                dataType: 'date',
            }, {
                dataField: 'HireDate',
                dataType: 'date',
            },
        ]
    })
})