$(() => {
    const popUpTemplate = (e) => {

        //const value = e.component.option('value');
        const $dataGrid = $('<div>').dxDataGrid({
            dataSource: employees,
            hoverStateEnabled: true,
            showRowLines: true,
            showColumnLines: true,
            showBorders: true,
            rowAlternationEnabled: true,
            groupPanel: {
                visible: true
            },
            editing: {
                allowUpdating: true,
            },
            columnChooser: {
                enabled: true,
                allowSearch: true,
                mode: 'select',
                search: {
                    editorOptions: {
                        placeholder: 'Search column',
                        mode: 'text'
                    },
                },
                selection: {
                    recusive: true,
                    allowSelectAll: true,
                    selectByClick: true
                }
            },
            scrolling: { mode: 'virtual' },
            //selectedRowKeys: [value],
            //height: '100%',


            toolbar: {
                items: [
                    {
                        location: 'before',
                        widget: 'dxButton',
                        toolbar: 'bottom',
                        options: {
                            icon: "showpanel",
                            onClick(e) {
                                const expanding = e.component.option("icon") === "showpanel";
                                dataGrid.option('grouping.autoExpandAll', expanding);
                                e.component.option('icon', expanding ? 'hidepanel' : 'showpanel');
                            },
                            elementAttr: {
                                class: 'button'
                            }
                        }
                    },
                    {
                        location: 'after',
                        widget: 'dxButton',
                        toolbar: 'bottom',
                        options: {
                            icon: 'clear',
                            onClick() {
                                dataGrid.clearGrouping();
                            },
                            elementAttr: {
                                class: 'button'
                            }
                        }
                    },
                    {
                        location: 'after',
                        widget: 'dxButton',
                        toolbar: 'bottom',
                        options: {
                            icon: 'refresh',
                            name: "myBtn",
                            onClick() {
                                dataGrid.refresh();
                                DevExpress.ui.notify("Data Refreshed Successfully", "Info", 1500);
                            },
                            elementAttr: {
                                class: 'button'
                            }
                        }
                    },
                    {
                        location: 'before',
                        widget: 'dxSelectBox',
                        options: {
                            width: 300,
                            items: [{
                                value: 'Position',
                                text: 'Grouping by Position',
                            }],
                            displayExpr: 'text',
                            valueExpr: 'value',
                            value: 'State',
                            onValueChanged(e) {
                                dataGrid.clearGrouping();
                                dataGrid.columnOption(e.value, 'groupIndex', 0);
                            },
                            elementAttr: {
                                class: 'select'
                            }
                        },

                    },
                ],
            }
        });

        dataGrid = $dataGrid.dxDataGrid('instance');

        return $dataGrid;

        //return $("<div>").append(
        //    $(`<p>Full Name: <span>${employee.FirstName}</span>
        //                 <span>${employee.LastName}</span></p>`),
        //    $(`<p>Birth Date: <span>${employee.BirthDate}</span></p>`),
        //    $(`<p>Address: <span>${employee.Address}</span></p>`),
        //    $(`<p>Hire Date: <span>${employee.HireDate}</span></p>`),
        //    $(`<p>Position: <span>${employee.Position}</span></p>`),
        //);
    };


    const popup = $('#popup').dxPopup({
        contentTemplate: popUpTemplate,
        dragEnabled: false,
        fullScreen: true,
        //resizeEnabled: true,
        showTitle: true,
        showCloseButton: false,
        title: 'Information',
        visible: false,
        position: {
            at: 'bottom',
            my: 'center',
            collision: 'fit'
        },
        animation: {
            show: {
                type: 'slide',
                duration: 400,
                from: { opacity: 0, top: 100 },
                to: {
                    opacity: 1,
                    position: {
                        my: "top",
                        at: "bottom",
                    }
                }
            },
            hide: {
                type: 'fade',
                duration: 500,
                from: { opacity: 1 },
                to: {
                    opacity: 0,
                }
            }
        },
        toolbarItems: [
            //{
            //    locateInMenu: 'always',
            //    widget: 'dxButton',
            //    toolbar: 'top',
            //    options: {
            //        text: 'More Info',
            //        onClick() {
            //            const message = `More info about ${employee.FirstName} ${employee.LastName}`;

            //            DevExpress.ui.notify({
            //                message,
            //                position: {
            //                    my: 'center top',
            //                    at: 'center top',
            //                },
            //            }, 'success', 3000);
            //        }
            //    }
            //},
            {
                widget: 'dxButton',
                toolbar: 'bottom',
                location: 'before',
                options: {
                    icon: 'email',
                    text: 'Send',
                    onClick() {
                        const message = `Email is sent to ${employee.FirstName} ${employee.LastName}`;
                        DevExpress.ui.notify({
                            message,
                            position: {
                                my: 'center top',
                                at: 'center top',
                            },
                        }, 'success', 3000);
                    }
                },
            }, {
                widget: 'dxButton',
                toolbar: 'bottom',
                location: 'after',
                options: {
                    text: 'Close',
                    onClick() {
                        popup.hide();
                    }
                }
            }
        ]
    }).dxPopup('instance');

    employees.forEach((currentEmployee) => {
        $('<li>').append(
            $('<img>').attr('src', currentEmployee.Picture).attr('id', `image${currentEmployee.ID}`),
            $('<br>'),
            $('<span>').html(`<i>${currentEmployee.FirstName}</i>`),
            $('<span>').html(` <i>${currentEmployee.LastName}</i>`),
            $('<br>'),
            $('<div>')
                .addClass('button-info')
                .dxButton({
                    text: 'Details',
                    onClick() {
                        employee = currentEmployee;
                        popup.option({
                            contentTemplate: () => popUpTemplate(),
                            'position.of': `#image${employee.ID}`,
                        });
                        popup.show();
                    },
                }),
        ).appendTo($('#employees'));
    });
})