window.jsPDF = window.jspdf.jsPDF;

$(() => {

    $("#tabPanel").dxTabPanel({
        dataSource: [{
            title: "EmployeeDetail",
            template() {
                return $("<div id='simpleEmployee'>").dxDataGrid({
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
                                console.log(containor);
                                console.log(option);
                                $("<div>").append($("<img>", { src: option.value })).appendTo(containor);
                            }
                        },
                        {
                            dataField: "Prefix",
                            caption: "Title",
                            width: 80
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
            }
        }, {
            title: "EmployeeDetailsWithNotes",
            template() {
                return $("<div id= 'notes'>").dxDataGrid({
                    dataSource: employees,
                    keyExpr: "ID",
                    showBorders: true,
                    rowAlternationEnabled: true,
                    dataRowTemplate: (conatinor, item) => {
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
                            width: 80
                        },
                        "FirstName", "LastName", "Position",
                        {
                            dataField: 'BirthDate',
                            dataType: 'date',
                        }, {
                            dataField: 'HireDate',
                            dataType: 'date',
                        },
                    ],
                    itemTitleTemplate(itemData, itemIndex, itemElement) {
                        itemElement.append(`<span class='dx-tab-text'>${itemData.title}</span>`);
                    },
                    deferRendering: false,
                })
            }
        }]
    })

    $("#exportButton").dxButton({
        text: 'Export Multiple',
        icon: 'exportpdf',
        onClick() {
            const doc = new jsPDF();

            const simpleGrid = $("#simpleEmployee").dxDataGrid("instance");
            console.log(simpleGrid);
            DevExpress.pdfExporter.exportDataGrid({
                jsPDFDocument: doc,
                component: simpleGrid,
                topLeft: { x: 7, y: 5 },
                onRowExporting: (e) => {
                    const isHeader = e.rowCells[0].text === 'Picture';
                    if (!isHeader) {
                        e.rowHeight = 18;
                    }
                },
                customDrawCell: (e) => {
                    if (e.gridCell.rowType === 'data' && e.gridCell.column.dataField === 'Picture') {
                        doc.addImage(e.gridCell.value, 'PNG', e.rect.x, e.rect.y, e.rect.w, e.rect.h);
                        e.cancel = true;
                    }
                },
            }).then(() => {
                doc.addPage();
            })

            const notes = $("#notes").dxDataGrid("instance");
            console.log(notes);
            DevExpress.pdfExporter.exportDataGrid({
                jsPDFDocument: doc,
                component: notes,
                topLeft: { x: 7, y: 5 },
                onRowExporting: (e) => {
                    const isHeader = e.rowCells[0].text === 'Picture';
                    if (!isHeader) {
                        e.rowHeight = 18;
                    }
                },
                customDrawCell: (e) => {
                    if (e.gridCell.rowType === 'data' && e.gridCell.column.dataField === 'Picture') {
                        doc.addImage(e.gridCell.value, 'PNG', e.rect.x, e.rect.y, e.rect.w, e.rect.h);
                        e.cancel = true;
                    }
                },
            }).then(() => {
                doc.save('MultipleGrid.pdf');
            })
        }
    })
    //$("#gridContainor").dxDataGrid({
    //    dataSource: employees,
    //    keyExpr: "ID",
    //    showBorders: true,
    //    rowAlternationEnabled: true,
    //    columns: [
    //        {
    //            dataField: "Picture",
    //            width: 150,
    //            allowSorting: false,
    //            allowFiltering: false,
    //            allowGrouping: false,
    //            cellTemplate: (containor, option) => {
    //                console.log(option);
    //                $("<div>").append($("<img>", { src: option.value })).appendTo(containor);
    //            }
    //        },
    //        {
    //            dataField: "Prefix",
    //            caption: "Title",
    //            width: 60
    //        },
    //        "FirstName", "LastName", "Position",
    //        {
    //            dataField: 'BirthDate',
    //            dataType: 'date',
    //        }, {
    //            dataField: 'HireDate',
    //            dataType: 'date',
    //        },
    //    ]
    //})

    //$("#gridContainor1").dxDataGrid({
    //    dataSource: employees,
    //    keyExpr: "ID",
    //    showBorders: true,
    //    rowAlternationEnabled: true,
    //    dataRowTemplate: (conatinor, item) =>{
    //        const { data } = item;
    //        const markUp = '<tr class= \' main-row\'>'
    //            + `<td rowspan='2'><img src='${data.Picture}' /></td>`
    //            + `<td>${data.Prefix}</td>`
    //            + `<td>${data.FirstName}</td>`
    //            + `<td>${data.LastName}</td>`
    //            + `<td>${data.Position}</td>`
    //            + '</tr>'
    //            + '<tr class=\'notes-row\'>'
    //            + `<td colspan='6'><div>${data.Notes}</div></td>`
    //            + '</tr>';

    //        conatinor.append(markUp);
    //    },
    //    columns: [
    //        {
    //            dataField: "Picture",
    //            width: 150,
    //            allowSorting: false,
    //            allowFiltering: false,
    //            allowGrouping: false,
    //        },
    //        {
    //            dataField: "Prefix",
    //            caption: "Title",
    //            width: 60
    //        },
    //        "FirstName", "LastName", "Position",
    //        {
    //            dataField: 'BirthDate',
    //            dataType: 'date',
    //        }, {
    //            dataField: 'HireDate',
    //            dataType: 'date',
    //        },
    //    ]
    //})
})