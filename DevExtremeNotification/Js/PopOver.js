$(() => {
	$('#popover1').dxPopover({
		target: '#link1',
		showEvent: 'mouseenter',
		hideEvent: 'mouseleave',
		width: 400,
		height: 200,
		position: 'top',
		onShowing() {
			console.log('PopOver Showing Event Is Fiered');
		},
		onShown() {
			console.log('PopOver Is Showned');
		},
		onHiding() {
			console.log('PopOver Is Going To Hide');
		},
		onHidden() {
			console.log('PopOver Is Hidden');
		},
		animation: {
			show: {
				type: 'pop',
				from: { scale: 0 },
				to: { scale: 1 }
			},
			hide: {
				type: 'pop',
				from: { scale: 1 },
				to: { scale: 0 }
			}
		}
	})
})