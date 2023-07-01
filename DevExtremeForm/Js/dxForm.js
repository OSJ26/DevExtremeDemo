$(() => {
    $("#dxForm").dxForm({
        items: [{
            itemType: "group",
            cssClass: "first-group",
            colCount: 2,
            items: [{
                template: "<div class='form-avatar'></div>",
            },

            {
                itemType: "group",
                colSpan: 5,
                items: [{
                    dataField: "First Name"
                },
                {
                    dataField: "Last Name"
                },
                {
                    dataField: "BirthDate",
                    editorType: "dxDateBox",
                    editorOption: {
                        width: "100%",
                    }
                }
                ]
            },
            ]
        },
        {
            itemType: 'group',
            cssClass: 'second-group',
            colCount: 2,
            items: [{
                itemType: 'group',
                items: [{
                    dataField: 'Address',
                }, {
                    dataField: 'City',
                }, {
                    dataField: 'Position',
                    editorType: 'dxSelectBox',
                    editorOptions: {
                        value: '',
                    },
                }],
            }, {
                itemType: 'group',
                items: [{
                    dataField: 'State',
                    editorType: 'dxSelectBox',
                    editorOptions: {
                    },
                }, {
                    dataField: 'ZipCode',
                }, {
                    dataField: 'Mobile',
                    label: {
                        text: 'Phone',
                    },
                    editorOptions: {
                        mask: '+1 (000) 000-0000',
                    },
                }],
            }, {
                colSpan: 2,
                dataField: 'Notes',
                editorType: 'dxTextArea',
                editorOptions: {
                    height: 140,
                },
            }],
        }],
    })
})