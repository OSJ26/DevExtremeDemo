$(() => {
    const toast = $('#toast').dxToast({
        animation: {
            show: {
                type: 'fade',
                duration: 400,
                from: 0,
                to: 1
            },
            hide: {
                type: 'fade',
                duration: 400,
                from: 1,
                to: 0
            }
        },
        closeOnClick: true,
        displayTime: 5000,
        height: 50,
        message: 'This is Demo Of Toast',
        position: 'bottom',
        width: 300,
    }).dxToast('instance');

    $('#btn').dxButton({
        text: 'ClickMe',
        onClick: () => {
            toast.show();
        }
    })

})