$(() => {

    ///Function for the async rule
    const sendRequest = (value) => {
        const inValidEmail = 'test@dx-gmail.com';
        const d = $.Deferred();
        setTimeout(() => {
            d.resolve(value !== inValidEmail);
        }, 1000);

        return d.promise();
    }

    const validateMe = (param) => {
        const value = param.value;
        const regex = "/^[A-Za-z][A-Za-z0-9_]{7,29}$/";
        if (value == '') {
            name.option("validationStatus", "invalid");
            name.focus();
        }
        else if (value.matches(regex)) {
            name.option("validationStatus", "invalid");
            name.focus();
        }
    }

    const name = $('#dxName').dxTextBox({
        accessKey: "n",
        activeStateEnabled: true,
        focusStateEnabled: true,
        label: "UserName",
        labelMode: "floating",
        inputAttr: { 'aria-label': 'Name' },
        stylingMode: "outlined",
        hint: "UserName",
        maxLength: 30,
        mode: "text",
        width: "500px",

    }).dxValidator({
        validationRules: [
            {
                type: "custom",
                validationCallback: validateMe,
                reevaluate: true,
                message: "Name must be contain 8 character"
            }]
    }).dxTextBox("instance");

    name.on("focusOut", () => {
        $('#dxName').dxValidator("validate");
    });

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
        showClearButton: true,

        onInput: function (e) {
            console.log(e);
            $("#dxPassword").dxTextBox("instance").option("validationStatus", "pending");
        },

        onValueChanged: (e) => {
            var newVal = password.option("value");
            console.log(e);
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
        },
        width: "500px"

    }).dxValidator({
        validationRules: [{
            type: "required",
            message: "Password Requiered"
        }]
    }).dxTextBox("instance");

    /////Confirm Password start
    const cnfPassword = $('#dxCnfPassword').dxTextBox({
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
        label: "Confirm Password",
        labelMode: "floating",
        mode: "password",
        maxLength: 16,
        inputAttr: {
            id: "dxcnfTxtPass"
        },
        showClearButton: true,
        validationMessagePosition: "bottom",
        onInput: function () {
            $("#dxCnfPassword").dxTextBox("instance").option("validationStatus", "pending");
        },
        width: "500px"
        //onFocusOut: (e) => {
        //    var value = cnfPassword.option("value");
        //    console.log(value);
        //    if (value == "") {
        //        cnfPassword.option("validationStatus", "invalid");
        //    } else if (password.option("value") == value) {
        //        cnfPassword.option("validationStatus", "valid");
        //    }
        //}
    }).dxValidator({
        validationRules: [{
            type: "compare",
            comparisonTarget() {
                if (password) {
                    cnfPassword.option("validationStatus", "valid");
                    return password.option("value");
                }
                return null;
            },
            message: "password and Confirm Password Not Matched"
        }]
    }).dxTextBox("instance");
    /////Confirm Password end

    const myAddress = $("#dxMyAddress").dxTextArea({
        accessKey: "A",
        activeStateEnabled: true,
        label: "Address",
        labelMode: "floating",
        minHeight: "30px",
        maxHeight: "40px",
        maxLength: 50,
        name: "Address",
        stylingMode: "outlined",
        autoResizedEnabled: true,
        inputAttr: {
            id: "myAddress"
        },

        onFocusOut: () => {
            let address = myAddress.option("value");
            console.log(address);

            if (address == "") {
                myAddress.option("validationStatus", "invalid");
            }
        },
        width: "500px"

    }).dxValidator({
        validationRules: [{
            type: "required",
            message: "Address Is Requiered"
        }]
    }).dxTextArea("instance");

    const country = $("#dxCountry").dxSelectBox({
        dataSource: countries,
        validationMessagePosition: 'bottom',
        placeholder: "Select Country",
        searchEnabled: true,
        showClearButton: true,
        width: "500px"
    }).dxValidator({
        validationRules: [{
            type: "required",
            message: "Country can not be empty"
        }]
    }).dxSelectBox("instance");

    const city = $('#dxCity').dxTextBox({
        label: "City",
        labelMode: "floating",
        showClearButton: true,
        name: "city",
        width: "500px",
    }).dxValidator({
        rule: 'required',
        message: 'City is Required'
    }).dxTextBox("instance");

    city.on("focusOut", (e) => {
        if (e.event.target.value == '') {
            city.option("validationStatus", "invalid");
            city.focus();
        }
    });

    const email = $('#dxEmail').dxTextBox({
        label: "email",
        labelMode: "floating",
        name: "email",
        onFocusOut: (e) => {
            let emailId = email.option("value");
            console.log(emailId);

            if (emailId == "") {
                email.option("validationStatus", "invalid");
            }
        },
        width: "500px",
        validataionMessageMode: 'auto'
    }).dxValidator({
        validationRules: [{
            type: "required",
            message: "Email is Required"
        },
        {
            type: "email",
            message: "Email is Invalid"
        },

        {
            type: "async",
            message: "Email is already register",
            validationCallback(param) {
                return sendRequest(param.value);
            }
        }
        ]
    }).dxTextBox("instance");

    const termsCheck = $("#dxTerms").dxCheckBox({
        accessKey: "c",
        text: "I agree to the Terms and Conditions",
        name: "MyCheckBox",
        elementAttr: {
            id: "simpleCheck",
            class: "checkMe"
        },
        height: "60px",
        width: "100%",
        iconSize: "20px",
        value: false,
        focusStateEnabled: true,
        visible: true
    }).dxValidator({
        validationRules: [{
            type: 'compare',
            comparisonTarget() { return true; },
            message: 'You must agree to the Terms and Conditions',
        }],
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
        width: "500px",
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
        width: "200px",
        type: "default",
        useSubmitBehavior: true,

        onClick: (e) => {
            const data = {
                name: name.option("value"),
                email: email.option("value"),
                password: password.option("value"),
                cnfpassword: cnfPassword.option("value"),
                address: myAddress.option("value"),
                country: country.option("value"),
                city: city.option("value"),
                birthdate: myDate.option("value")
            }
            console.log(data);
            return $.ajax({
                URL: 'https://localhost:7125/api/User',
                data: data,
                type: "POST",
                success: () => {
                    DevExpress.ui.notify("Register Successfully", 'success', 1000);
                },
                error: () => {

                    DevExpress.ui.notify("Something went wrong", 'error', 1000);
                }
            })
        }
    }).dxButton("instance");

    $("#dxResetButton").dxButton({
        accessKey: "r",
        width: "200px",
        text: "Reset",
        type: "success"
    }).dxButton("instance");

    $("#dxCancelButton").dxButton({
        accessKey: "C",
        width: "200px",
        text: "Cancel",
        type: "danger"
    }).dxButton("instance");
})