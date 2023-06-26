$(() => {

    $("#myAddress").dxTextArea({
        accessKey: "A",
        activeStateEnabled: true,
        label: "Address",
        labelMode: "floating",
        minHeight: "20px",
        maxHeight: "30px",
        maxLength: 50,
        name: "Address",
        stylingMode: "outlined",
        autoResizedEnabled: true,
        inputAttr: {
            id: "myAddress"
        },

        onInput: () => {
            console.log("Inpute changes");
        }
    }).dxTextArea("instance");
})