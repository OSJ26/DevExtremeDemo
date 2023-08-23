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
                allowDeleting: true,
                allowAdding: true,
                mode: 'batch'
            },
            groupCellTemplate: () => {

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
                    "addRowButton",
                    "saveButton",
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
    let popId;
    $("#menu").dxMenu({
        dataSource: menuData,
        displayExpr: 'name',
        orientation: "vertical",
        cssClass: 'menu',
        hideSubmenuOnMouseLeave: true,
        showFirstSubmenuMode: {
            name: 'onHover',
            delay: { show: 0 },
        },
        width: 100,
        onItemContextMenu: (item) => {
            console.log(item);
        },
        onItemClick: function (itemClick) {
            console.log(itemClick);
            popId = "popup" + Date.now();
            // Create a dynamic container for the popup content
            $(`<div id="${popId}"></div>`).appendTo("#popupContent");
            // Generate a DevExtreme popup
            var popup = $(`#${popId}`).dxPopup({
                dragEnabled: true,
                container: '#popupContent',
                showTitle: true,
                height: "inherit",
                width: "inherit",
                resizeEnabled: true,
                showCloseButton: true,
                title: itemClick.itemData.name,
                contentTemplate: template,
                visible: false,
                position: {
                    at: 'center',
                    my: 'center',
                    of: '#popupContent',
                    collision: 'fit'
                },
                animation: {
                    show: {
                        type: 'slide',
                        duration: 400,
                        from: { opacity: 0 },
                        to: {
                            opacity: 1,
                            position: {
                                my: "top",
                                at: "bottom",
                            }
                        }
                    },
                    hide: {
                        type: 'slide',
                        duration: 200,
                        from: { opacity: 1 },
                        to: {
                            opacity: 0,
                        }
                    }
                },
            }).dxPopup("instance");

            if (itemClick.itemData.items == null) {
                popup.show();
            }
        }
    })
})