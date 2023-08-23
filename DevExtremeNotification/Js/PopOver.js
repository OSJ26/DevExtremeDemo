$(() => {
    const popUpTemplate = (e) => {

        //const value = e.component.option('value');
        //const $dataGrid = $('<div>').dxDataGrid({
        //    dataSource: employees,
        //    hoverStateEnabled: true,
        //    showRowLines: true,
        //    showColumnLines: true,
        //    showBorders: true,
        //    rowAlternationEnabled: true,
        //    groupPanel: {
        //        visible: true
        //    },
        //    editing: {
        //        allowUpdating: true,
        //    },
        //    columnChooser: {
        //        enabled: true,
        //        allowSearch: true,
        //        mode: 'select',
        //        search: {
        //            editorOptions: {
        //                placeholder: 'Search column',
        //                mode: 'text'
        //            },
        //        },
        //        selection: {
        //            recusive: true,
        //            allowSelectAll: true,
        //            selectByClick: true
        //        }
        //    },
        //    scrolling: { mode: 'virtual' },
        //    //selectedRowKeys: [value],
        //    //height: '100%',


        //    toolbar: {
        //        items: [
        //            {
        //                location: 'before',
        //                widget: 'dxButton',
        //                toolbar: 'bottom',
        //                options: {
        //                    icon: "showpanel",
        //                    onClick(e) {
        //                        const expanding = e.component.option("icon") === "showpanel";
        //                        dataGrid.option('grouping.autoExpandAll', expanding);
        //                        e.component.option('icon', expanding ? 'hidepanel' : 'showpanel');
        //                    },
        //                    elementAttr: {
        //                        class: 'button'
        //                    }
        //                }
        //            },
        //            {
        //                location: 'after',
        //                widget: 'dxButton',
        //                toolbar: 'bottom',
        //                options: {
        //                    icon: 'clear',
        //                    onClick() {
        //                        dataGrid.clearGrouping();
        //                    },
        //                    elementAttr: {
        //                        class: 'button'
        //                    }
        //                }
        //            },
        //            {
        //                location: 'after',
        //                widget: 'dxButton',
        //                toolbar: 'bottom',
        //                options: {
        //                    icon: 'refresh',
        //                    name: "myBtn",
        //                    onClick() {
        //                        dataGrid.refresh();
        //                        DevExpress.ui.notify("Data Refreshed Successfully", "Info", 1500);
        //                    },
        //                    elementAttr: {
        //                        class: 'button'
        //                    }
        //                }
        //            },
        //            {
        //                location: 'before',
        //                widget: 'dxSelectBox',
        //                options: {
        //                    width: 300,
        //                    items: [{
        //                        value: 'Position',
        //                        text: 'Grouping by Position',
        //                    }],
        //                    displayExpr: 'text',
        //                    valueExpr: 'value',
        //                    value: 'State',
        //                    onValueChanged(e) {
        //                        dataGrid.clearGrouping();
        //                        dataGrid.columnOption(e.value, 'groupIndex', 0);
        //                    },
        //                    elementAttr: {
        //                        class: 'select'
        //                    }
        //                },

        //            },
        //        ],
        //    }
        //});

        //dataGrid = $dataGrid.dxDataGrid('instance');

        //return $dataGrid;

        //return $("<div>").append(
        //    $(`<p>Full Name: <span>${employee.FirstName}</span>
        //                 <span>${employee.LastName}</span></p>`),
        //    $(`<p>Birth Date: <span>${employee.BirthDate}</span></p>`),
        //    $(`<p>Address: <span>${employee.Address}</span></p>`),
        //    $(`<p>Hire Date: <span>${employee.HireDate}</span></p>`),
        //    $(`<p>Position: <span>${employee.Position}</span></p>`),
        //);

        return $("<div>").dxForm({
            validationGroup: 'testCase',
            items: [{
                itemType: "group",
                caption: 'Personal Details',
                items: [
                    {
                        dataField: 'Name',
                        validationRules: [{
                            type: 'required',
                            message: 'Name is required'
                        }],
                        elementAttr: {
                            id: 'testCase'
                        }
                    },
                    {
                        dataField: 'email',
                        validationRules: [
                            {
                                type: 'required',
                                message: 'Email is required'
                            },
                            {
                                type: 'email',
                                message: 'Email Format is not valid'
                            }
                        ],
                        elementAttr: {
                            id: 'testCase1'
                        }
                    },
                    {
                        dataField: 'PhoneNumber',
                        validationRules: [
                            {
                                type: 'required',
                                message: 'Number is required'
                            },
                            {
                                type: 'numeric',
                                message: 'Number Format is not valid'
                            }
                        ],
                        elementAttr: {
                            id: 'testCase1'
                        }
                    }
                ]
            },
            {
                itemType: 'button',
                horizontalAlignment: 'Center',
                buttonOptions: {
                    text: 'Register',
                    type: 'success',
                    useSubmitBehavior: true,
                    onClick(e) {
                        const flag = e.validationGroup.validate().isValid;
                        if (flag) {
                            popup.option("showCloseButton", true);
                            DevExpress.ui.notify("Popup closed", "success", 1000);
                        }
                        else {

                            DevExpress.ui.notify("Need To Fillup the Form", "error", 1000);
                        }
                    }
                }
            }]
        })

    };

	$('#popover1').dxPopover({
        target: '#link1',
        contentTemplate: popUpTemplate,
		showEvent: 'mouseenter',
		//hideEvent: 'mouseleave',
        hideEvent: 'dxclick',
		width: 400,
        height: 400,
        shading: true,
		position: 'top',
		onShowing(e) {
			console.log(e);
		},
		onShown(e) {
			console.log(e);
		},
		onHiding(e) {
			console.log(e);
		},
		onHidden(e) {
			console.log(e);
		},
		animation: {
			show: {
				type: 'pop',
				from: { scale: 0 },
				to: { scale: 1 }
			}
		}
    })

    $('#popover2').dxPopover({
        target: '#link2',
        contentTemplate: popUpTemplate,
        showEvent: 'mouseenter',
        //hideEvent: 'mouseleave',
        hideEvent: 'dxclick',
        width: 400,
        height: 400,
        shading: true,
        position: 'top',
        onShowing(e) {
            console.log(e);
        },
        onShown(e) {
            console.log(e);
        },
        onHiding(e) {
            console.log(e);
        },
        onHidden(e) {
            console.log(e);
        },
        animation: {
            show: {
                type: 'pop',
                from: { scale: 0 },
                to: { scale: 1 }
            }
        }
    })
})