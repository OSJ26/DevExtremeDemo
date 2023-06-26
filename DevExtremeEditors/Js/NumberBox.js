$(() => {

    const dxNumber = $("#dxNumberBox").dxNumberBox({
        accessKey: "n",
        activeStateEnabled: true,
        format: "#.#",
        height: "30px",
        hint: "Enter Number",
        inputAttr: {
            id: "dxNumber"
        },
        invalidValueMessage: "You entered wrong value",
        label: "Number",
        labelMode: "floating",
        max: 200.300,
        min: 100.100,
        mode: "text",
        name: "Simple Number Box",
        showSpinButtons: true,
        showClearButton: true,
        useLargeSpinButton: true,
        width: "300px",
        onValueChanged(e) {
            if (e.value) {
                DevExpress.ui.notify({
                    message: "Ther number is " + e.value
                })
            }
        },

        onCopy(e) {
            console.log(e);
            DevExpress.ui.notify({
                message: "Value is Copied"
            })
        },

        onInitialized(e) {
            console.log(e);
            DevExpress.ui.notify("Component Initialized", "success", 1200),
                DevExpress.ui.notify("Component Initialized", "warning", 1000)
        }
    }).dxNumberBox("instance");

})