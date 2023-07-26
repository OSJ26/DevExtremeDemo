$(() => {
    const now = new Date();
    const myDate = $("#simpleDateBox").dxDateBox({
        acceptCustomValue: true,
        accessKey: "d",
        applyButtonText: "Submit",
        cancelButtonText: "Decline",
        dateOutOfRange: "Value is out of range",
        type: "datetime",
        max: new Date(2023, 12, 1),
        min: new Date(1990, 0, 1),
        dateSerializationFormat: "yyyy-MM-ddTHH:mm:ss",
        disabled: false,
        disabledDates: [
            new Date("07/20/2023"),
            new Date("07/21/2023"),
            new Date("06/30/2023"),
            new Date("07/27/2023")
        ],
        useMaskedBehaviour: true,
        displayFormat: "dd:MM:yyy",
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
        showAnalogClock: false,
        showClearButton: true,

        onContentReady: () => {
            console.log("DateBox is Ready to go");
        },

        onFocusIn: () => {
            focusInCall();
        },

        onValueChanged:  (e) => {
            console.log(e.value);
            console.log(e.previousValue);
        },

        onFocusOut: () => {
            focusOutCall();

        },

        onChange: () => {
            console.log("Date Changed");
        },

        onClose: () => {
            console.log("DropDownColsed");
        },


    }).dxDateBox("instance");

    function focusInCall() {
        myDate.open();
    }

    function focusOutCall() {
        myDate.close();
    }
})