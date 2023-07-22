$(() => {

    const template = () => {
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
    }

    const popup = $('#popup').dxPopup({
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

    const myMenu = $("#menu1").dxMenu({
        accessKey: 'm',
        dataSource: menuData,
        displayExpr: 'name',
        orientation: 'horizontal',
        width: 400,
        //adaptivityEnabled: true,
        hideSubmenuOnMouseLeave: true,
        showFirstSubmenuMode: {
            name: 'onClick',
            delay: { show: 0, hide: 15000 },
        },
        selectionMode: 'single',
        selectedExpr: 'val',
        //selectedItem: 'name',
        //onOptionChanged: (e) => {
        //    console.log(e.component._dataSource._items);
        //},
        onSelectionChanged: (e) => {
            console.log(e);
        },
        onItemClick: (data) => {
            console.log(data.itemData.name);
            console.log(data.itemData.accessKey);
            if (data.itemData.accessKey == 'k') {   
                console.log('firstMenu');
            }

            if (data.itemData.name == 'Projectors') {
                popup.option(
                    {
                        'contentTemplate': template,
                        'visible': true
                    }
                );
            }
            const item = data.itemData;
            if (item.price) {
                $('#product-details').removeClass('hidden');
                $('#product-details > img').attr('src', item.icon);
                $('#product-details > .price').text(`$${item.price}`);
                $('#product-details > .name').text(item.name);
            }
        },
        onSubmenuHidden: (e) => {
            console.log("Exited From: " + e.rootItem[0].innerText);
        },
        onSubmenuHiding: (e) => {
            console.log('Exiting From: ' + e.rootItem[0].innerText);
        },
        onSubmenuShowing: (e) => {
            console.log("Sub Menu Item: " + e.submenu._userOptions.items[0].name);
        },
        onSubmenuShown: (e) => {
            console.log("Root Element Texte: " + e.rootItem[0].innerText);
        }
    }).dxMenu('instance');
})