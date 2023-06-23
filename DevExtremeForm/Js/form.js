$(() => {
    const name = $('#dxName').dxTextBox({
        accessKey: "n",
        activeStateEnabled: true,
        focusStateEnabled: false,
        label: "UserName",
        labelMode: "floating",
        inputAttr: { 'aria-label': 'Name' },
        stylingMode: "outlined",
        hint: "UserName",
        maxLength: 30,
        mode: "text"
    }).dxTextBox("instance");

    const password = $('#dxPassword').dxTextBox({
        accessKey: 'p',
        buttons: [{
            name: "show",
            loaction: "after",
            options: {
                icon: '../img/eye.png',
                onClick() {
                    password.option('mode', password.option('mode') === 'text' ? 'password' : 'text');
                }
            },
        }],
        label: "Password",
        labelMode: "floating",
        mode: "password",
        maxLength: 16,
        inputAttr: {
            id: "dxTxtPass"
        },
        showClearButton: true
    }).dxTextBox("instance");

    const number = $('#dxNumber').dxTextBox({
        label: "Phone",
        isValid: true,
        maxLength: 10,
        labelMode: "floating",
    }).dxTextBox("instance");

    const email = $('#dxEmail').dxTextBox({
        label: "email",
        labelMode: "floating",
        name: "email",
    }).dxTextBox("instance");

    const panCheck = $("#dxPanCheck").dxCheckBox({
        accessKey: "c",
        text: "PanCard",
        name: "MyCheckBox",
        elementAttr: {
            id: "simpleCheck",
            class: "checkMe"
        },
        height: "60px",
        width: "100px",
        iconSize: "20px",
        enableThreeStateBehavior: true,
        focusStateEnabled: true,
        visible: true
    }).dxCheckBox("instance");

    const aadharCheck = $("#dxAdharCheck").dxCheckBox({
        accessKey: "c",
        text: "AadharCard",
        name: "MyCheckBox",
        elementAttr: {
            id: "simpleCheck",
            class: "checkMe"
        },
        height: "60px",
        width: "100px",
        iconSize: "20px",
        enableThreeStateBehavior: true,
        focusStateEnabled: true,
        visible: true
    }).dxCheckBox("instance");

    const myDate = $("#dxBirthDate").dxDateBox({
        acceptCustomValue: true,
        accessKey: "d",
        applyButtonText: "Submit",
        cancelButtonText: "Decline",
        dateOutOfRange: "Value is out of range",
        type: "date",
        max: new Date(2023, 12, 1),
        min: new Date(1990, 0, 1),
        dateSerializationFormat: "yyyy-MM-ddTHH:mm:ss",
        elementAttr: {
            id: "myDateBox",
            class: "letsGoForDate"
        },
        height: "50px",
        width: "300px",
        hint: "BirthDate",
        invalidDateMessage: "You must need to add only date",
        label: "BirthDate",
        labelMode: "floating",
        name: "MyDate",
        showClearButton: true
    }).dxDateBox("instance");

    $("#dxSubmitButton").dxButton({
        accessKey: "b",
        text: "Register",
    }).dxButton("instance");

    $("#dxRestButton").dxButton({
        accessKey: "b",
        text: "Reset",
    }).dxButton("instance");
})