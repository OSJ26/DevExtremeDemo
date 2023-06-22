$(() => {



    const myCheck = $("#simpleCheck").dxCheckBox({
        accessKey: "c",
        text: "Simple Check",
        name: "MyCheckBox",
        elementAttr: {
            id: "simpleCheck",
            class: "checkMe"
        },
        height: "50px",
        width: "120px",
        iconSize: "30px",
        enableThreeStateBehavior: true,
        value: null,
        focusStateEnabled: true,
        hint: "You Need To Check This",
        rtlEnabled: true,
        readOnly: false,
        visible: true
    }).dxCheckBox("instance");


    $("#simpleCheck").dxCheckBox().on("focus", () => {
        console.log("CheckBox Get Focus");
    }).on("blur", () => {
        console.log("CheckBox Losses Focus");
    })

    let element = document.getElementById("simpleCheck");
    let instance = DevExpress.ui.dxCheckBox.getInstance(element);
    console.log(instance);

    myCheck.option({
        text : "Wanna Check?"
    })

    myCheck.registerKeyHandler("enter", (e) => {
        console.log("The Key Pressed is " + e.code);
    });

    $("#simpleBtn").dxButton({
        text: "Reset",
        onClick: () => {
            myCheck.reset()
        }
    }).dxButton("instance");

    $("#resetDefault").dxButton({
        text: "Reset To Default",
        onClick: () => {
            myCheck.resetOption("text");
        }
    }).dxButton("instance");

    //$('#simpleCheck').dxCheckBox().remove();
    //$('#simpleCheck').dxCheckBox("dispose");

    //$("#simplpeCheck").dxCheckBox().dxValidator({
    //    ValidationRule: [{
    //        type: "compare",
    //        comparisonTarget() { return true; },
    //        message: "You must need to select the check box",
    //    }],
    //});
})