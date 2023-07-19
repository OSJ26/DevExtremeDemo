$(() => {
    const popUpTemplate = (e) => {

        //const value = e.component.option('value');
        const $dataGrid = $('<div>').dxDataGrid({
            dataSource: employees,
            hoverStateEnabled: true,
            columnChooser: {
                enabled: true,
                allowSearch: true,
                mode: 'dragAndDrop',
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
            paging: { enabled: true, pageSize: 10 },
            filterRow: { visible: true },
            scrolling: { mode: 'virtual' },
            selection: { mode: 'single' },
            //selectedRowKeys: [value],
            height: '100%',
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
                    },
                },
            }, {
                widget: 'dxButton',
                toolbar: 'bottom',
                location: 'after',
                options: {
                    text: 'Close',
                    onClick() {
                        popup.hide();
                    },
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