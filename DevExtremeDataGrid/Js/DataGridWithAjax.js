window.jsPDF = window.jspdf.jsPDF;
$(() => {

    let myStore = new DevExpress.data.CustomStore({
        key: "d01F01",
        load: async function () {
            return await $.ajax({
                type: "GET",
                url: "https://localhost:7238/api/USED01",
                success: (e) => {
                    DevExpress.ui.notify("Data Fetched Successfully", "success", 500);
                },
                error: (e) => {
                    DevExpress.ui.notify("Data Not Fetched", "Error", 500);
                }

            })
        }
    });

    $("#dxGrid").dxDataGrid({
        dataSource: myStore,
        cacheEnabled: true,
        showBorder: true,
        columnMinWidth: 100,
        selection: {
            mode: 'multiple'
        },
        columnChooser: {
            enabled: true,
            emptyPanelText: "Let's Hide Some Column",
            mode: "select",
            search: {
                editorOptions: {
                    placeholder: "Search Column",
                    mode: "text"
                },
                enabled: true,
            },
            title: "Confidential Column",
        },
        columnResizingMode: "nextColumn",
        key: "d01F01",
        allowColumnResizing: true,
        allowColumnReordering: true,
        showBorders: true,
        columns: [{
            dataField: "d01F01",
            caption: "User Id",
            sortOrdder: 'asc',
            width: "160px",
            alignment: "center",
            showInColumnChooser: false
        },
        {
            caption: "Personal Details",
            alignment: "center",
            columns: [{
                dataField: "d01F02",
                caption: "User First Name",
                showInColumnChooser: false,
                allowEditing: true,
                width: "200px",
                alignment: "center",
            },
            {
                dataField: "d01F03",
                caption: "User Last Name",
                showInColumnChooser: false,
                width: "200px",
                alignment: "center",
            },
            {
                dataField: "d01F04",
                caption: "User Address",
                width: "200px",
                alignment: "center",
            },]
        },
        {
            caption: "Contact Details",
            alignment: "center",
            columns: [{
                dataField: "d01F05",
                caption: "User phone number",
                width: "120px",
                alignment: "center",
            },
            {
                dataField: "d01F06",
                caption: "User Email",
                showInColumnChooser: false,
                width: "400px",
                alignment: "center",
            },]
        },

        {
            dataField: "d01F07",
            caption: "User Password",
            width: "500px",
            alignment: "center",
            showInColumnChooser: false,
            visible: false
        }
        ],
        pager: {
            allowedPageSizes: [5, 8, 15, 30],
            showInfo: true,
            showNavigationButtons: true,
            showPageSizeSelector: true,
            visible: true,
        },
        paging: {
            pageSize: 10
        },
        editing: {
            allowAdding: true,
            allowDeleting: true,
            allowUpdating: true
        },
        export: {
            enabled: true,
            formats: ['pdf'],
            allowExportSelectedData: true,
        },
        onExporting: (e) => {
            const doc = new jsPDF();
            const lastPoint = { x: 0, y: 0 };
            DevExpress.pdfExporter.exportDataGrid({
                jsPDFDocument: doc,
                component: e.component,
                indent: 5,
                customizeCell({ gridCell, pdfCell }) {
                    if (gridCell.rowType === "header") {
                        pdfCell.backgroundColor = '#BEDFE6';
                        pdfCell.font.style = 'italic';
                        pdfCell.font.color = '#00000';
                    }
                },
                customDrawCell({ rect }) {
                    if (lastPoint.x < rect.x + rect.w) {
                        lastPoint.x = rect.x + rect.w;
                    }
                    if (lastPoint.y < rect.y + rect.h) {
                        lastPoint.y = rect.y + rect.h;
                    }
                },
            }).then(() => {
                const header = 'Employee Personal Details';
                const pageWidth = doc.internal.pageSize.getWidth();
                console.log("pageWidth" + pageWidth);
                doc.setFontSize(16);
                const headerWidth = doc.getTextDimensions(header).w;
                console.log("Header Width" + headerWidth);
                doc.text(header, (pageWidth - headerWidth) / 2, 10);

                const footer = "it's Osj®";
                doc.setFontSize(12);
                doc.setTextColor("#cccccc");
                const footerWidth = doc.getTextDimensions(footer).w;
                doc.text(footer, (lastPoint.x - footerWidth), lastPoint.y + 8);
                doc.save('DataGrid.pdf');
                console.log(doc);
            })
        }
    }).dxDataGrid("instance");


})