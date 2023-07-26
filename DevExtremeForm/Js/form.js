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

    //$('#form').on('submit', (e) => {
    //    e.preventDefault();
    //    DevExpress.ui.notify({
    //        message: 'You have submitted the form',
    //        position: {
    //            my: 'center top',
    //            at: 'center top',
    //        },
    //    }, 'success', 3000);

    //});

    $("#dxName").dxTextBox();
    $('#dxName').dxTextBox({
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
        rule: 'required',
        message: 'Name is Required'
    });
    const name = $("#dxName").dxTextBox('instance');

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
    });

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
    });
    /////Confirm Password end

    $('#dxMyAddress').dxTextArea();
    const myAddress = $('#dxMyAddress').dxTextArea("instance")
    $("#dxMyAddress").dxTextArea({
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
    });

    $("#dxCountry").dxSelectBox();
    const country = $("#dxCountry").dxSelectBox("instance");
    $("#dxCountry").dxSelectBox({
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
    })


    $("#dxCity").dxTextBox({
        label: "City",
        labelMode: "floating",
        showClearButton: true,
        name: "city",
        width: "500px"
    }).dxValidator({
        validationRules: [{
            type: "required",
            message: "City can not be empty"
        },
        {
            type: "pattern",
            pattern: '^[^0-9]+$',
            message: "You can not use digit in city"
        },
        {
            type: "stringLength",
            min: 3,
            max: 10,
            message: "City must contain 3 character"
        }
        ]
    });
    const city = $("#dxCity").dxTextBox("instance");

    $("#dxEmail").dxTextBox();
    const email = $("#dxEmail").dxTextBox("instance");
    $('#dxEmail').dxTextBox({
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
    });

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
    });

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