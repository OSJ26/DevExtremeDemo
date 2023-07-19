$(() => {
	const showLoadPanel = function () {
		loadPanel.show();
		showEmployeeInfo({});
	};

	const showEmployeeInfo = (employee) => {
		$('.birth-date').text(employee.Birth_Date);
		$('.city').text(employee.City);
		$('.zipcode').text(employee.Zipcode);
		$('.address-info').text(employee.Address);
		$('.mobile-phone').text(employee.Mobile_Phone);
		$('.email').text(employee.Email);
	}

	$('.show-panel').dxButton({
		text: 'Load Data',
		onClick: showLoadPanel,
	});

	const loadPanel = $('#loadPanel').dxLoadPanel({
		animation: {
			show: {
				type: 'fade',
				from: 0,
				to: 1
			},
			hide: {
				type: 'fade',
				from: 1,
				to: 0
			}
		},
		shadingColor: 'rgb(0,0,0,0.5)',
		position: { of: '#containor' },
		visible: false,
		shading: true,
		hideOnOutsideClick: true,
		showIndicator: true,
		showPane: true,
		indicatorSrc:'../Other/loading.gif',
		message: 'Indicator Demo',
		onShowing(e) {
			console.log('Showing Method is Called');
		},
		onShown() {
			console.log('Shown Method is InProgress');
			setTimeout(() => {
				loadPanel.hide();
			}, 3000);
		},
		onHiding(e) {
			// console.log(e);
			console.log('Load Panel is Hiding');
		},
		onHidden() {
			showEmployeeInfo(employee);
			console.log('Load Panel Is Hidden');
		}
	}).dxLoadPanel('instance');
})