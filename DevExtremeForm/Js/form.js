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
        mode: "text",
    }).dxTextBox("instance");

    $('#dxPassword').dxTextBox();
    const password = $('#dxPassword').dxTextBox("instance");
    $('#dxPassword').dxTextBox({
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
        showClearButton: true,

        onInput: function () {
            $("#dxPassword").dxTextBox("instance").option("validationStatus", "pending");
        },

        onValueChanged: (e) => {
            var newVal = password.option("value");
            password.option("validationStatus", "valid");
            if (newVal == cnfPassword.option("value")) {
                cnfPassword.option("validationStatus", "valid");
            } else {
                cnfPassword.option("validationStatus", "invalid");
            }
        },

        onFocusOut: (e) => {
            var value = password.option("value");
            if (value == "") {
                password.option("validationStatus", "invalid");
            }
        }

    }).dxTextBox("instance");

    /////Confirm Password start
    $('#dxCnfPassword').dxTextBox();
    const cnfPassword = $('#dxCnfPassword').dxTextBox("instance");

    $('#dxCnfPassword').dxTextBox({
        accessKey: 'p',
        buttons: [{
            name: "show",
            loaction: "after",
            options: {
                icon: '../img/eye.png',
                onClick() {
                    cnfPassword.option('mode', cnfPassword.option('mode') === 'text' ? 'password' : 'text');
                }
            },
        }],
        label: "Password",
        labelMode: "floating",
        mode: "password",
        maxLength: 16,
        inputAttr: {
            id: "dxcnfTxtPass"
        },
        showClearButton: true,

        onInput: function () {
            $("#dxCnfPassword").dxTextBox("instance").option("validationStatus", "pending");
        },

        onFocusOut: (e) => {
            var value = cnfPassword.option("value");
            console.log(value);
            if (value == "") {
                cnfPassword.option("validationStatus", "invalid");
            } else if (password.option("value") == value) {
                cnfPassword.option("validationStatus", "valid");
            }
        }
    }).dxTextBox("instance");
    /////Confirm Password end


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
        type: "default"
    }).dxButton("instance");

    $("#dxResetButton").dxButton({
        accessKey: "r",
        text: "Reset",
        type: "success"
    }).dxButton("instance");

    $("#dxCancelButton").dxButton({
        accessKey: "C",
        text: "Cancel",
        type: "danger"
    }).dxButton("instance");
})