$(() => {
    const name = $('#name').dxTextBox({
        accessKey: "n",
        activeStateEnabled: true,
        focusStateEnabled: false,
        Value: "this is default value",
        labelMode: "floating",
        inputAttr: { 'aria-label': 'Name' },
        stylingMode: "underlined",
        hint: "UserName",
        maxLength: 30,
        mode: "text",
        maskInvalidMessage: "please enter valid value",
        rtlEnabled: false,

        onInitialized: () => {
            console.log("component initialized");
        },

        onContentReady: () => {
            console.log("Component is ready");
        },

        onChange: () => {
            console.log("Data Was Changed");
        },


        onInput: () => {
            console.log("Input event is called");
        },

        //onOptionChanged: () => {
        //    console.log("option was changed");
        //},

        onkeyup: () => {
            console.log("key is released");
        },

        onkeydown: () => {
            console.log("key is pressed");
        },

        onValueChanged: () => {
            console.log("value of name is changed");
        },

        onFocusIn: () => {
            console.log("Username Get the focus");
        },

        onFocusOut: () => {
            console.log("Username losses the focus");
        },

        onEnterKey: () => {
            console.log("Enter key is pressed");
        },

        onDisposing: () => {
            console.log("Username is disposed");
        }

    }).dxTextBox("instance");
    var counter = 0;
    setTimeout(() => {
        name.beginUpdate();
        name.option({
            placeholder: "Enter your name",
            showClearButton: true
        });
        name.endUpdate();
    }, 5000);

    //$("#name").dxTextBox().remove();
    //Returns element 
    console.log(name.element());

    $('#password').dxTextBox();
    const password = $('#password').dxTextBox("instance");
    $('#password').dxTextBox({
        accessKey: "p",
        buttons: [{
            name: 'custom',
            location: 'after',
            options: {
                icon: '../images/eye.png',
                onClick() {
                    password.option('mode', password.option('mode') === 'text' ? 'password' : 'text');
                }
            },
        }],

        onInput: () => {
            password.option("validationStatus", "pending");
        },

        onChange: () => {
            password.option("validationStatus", "valid");
        },

        onFocusOut: () => {
            var value = password.option("value");
            console.log(value);
            if (value == "") {
                password.option("validationStatus", "invalid");
            } 
        },

        label: "Password",
        disable: false,
        labelMode: "floating",
        rtlEnabled: true,
        mode: "password",
        showClearButton: true,
        inputAttr: { 'aria-label': 'Name' },
    }).dxTextBox("instance");

    var textboxElement = document.getElementById("password");
    var textboxGetInstance = DevExpress.ui.dxTextBox.getInstance(textboxElement)
    console.log(textboxGetInstance)

    $('#btn').dxButton({
        text: "reset",
        onClick: () => {
            name.reset()
        }
    }).dxButton("instance");

    $("#resetDefault").dxButton({
        text: "Reset Default",
        onClick: function () {
            let input = name.resetOption("value")
            console.log(input)
        }
    }).dxButton('instance')

    password.registerKeyHandler("enter", (e) => {
        console.log(e.code);
    })

    const number = $('#number').dxTextBox({
        label: "Phone",
        isValid: true,
        labelMode: "floating",
    }).dxTextBox("instance");

    const email = $('#email').dxTextBox({
        label: "email",
        mask: "00\00\0000",
        maskChar: "*",
        useMaskValue: true,
        showMaskMode: "onFocus",
        labelMode: "floating",
        name: "email",
    }).dxTextBox("instance");


    function setInvalidStatus() {
        password.option("validationStatus", "valid");
    }
})