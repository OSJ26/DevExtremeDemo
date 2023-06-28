$(() => {

    $("#myAddress").dxTextArea({
        accessKey: "A",
        activeStateEnabled: true,
        label: "Address",
        labelMode: "floating",
        height:"auto",
        minHeight: "20px",
        maxHeight: 200,
        maxLength: 500,
        name: "Address",
        stylingMode: "outlined",
        autoResizedEnabled: true,
        inputAttr: {
            id: "myAddress"
        },

        onInput: () => {
            console.log("Inpute changes");
        },
        valueChangeEvent: "keyup",
        onValueChanged()  {
            DevExpress.ui.notify("The value has been changed");
        }
    }).dxTextArea("instance");
})