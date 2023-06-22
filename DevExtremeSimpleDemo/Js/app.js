$(function () {
    ///here we define the DevExtreme Button
    ///using dxButton() we can create button in that we
    ///passes the diffrent property along with that
    ///here we set the onClick property where we can pass function
    ///and perform our logic on click of button
    $("#buttonContainer").dxButton();


    $("#buttonContainer").dxButton().focus(() => {
        console.log("button get the focus second time");
    })

    ///This we get the DevExtreme button from our html file
    var button = $("#buttonContainer").dxButton("instance");

    //This way we can set the multiple property for our widget.
    button.option({
        text: "Click Me",
        onClick: () => {
            console.log("Click one more time");
        }
    });


    //Here we subscribe the event for our button
    //where we use the on method which contains two argument
    //First: method name , seecond: handler
    $("#buttonContainer").dxButton().on("focus", function () {
        console.log("button get the focus");
        button.option({
            height: "30px",
            width: "30px"
        });
    }).on("blur", () => {
        console.log("button losses the focus");
    })


    ///this way we can unsubscibe the event from our ui component
    button.option("onClick", undefined);

    ///This is how we can set the property for any widget
    ///we can set for multiple property using this
    ///synatax option("proerty name","property value")
    //button.option("text", "ClickMe")

    ///option metod is usesd to take the text from the button
    ///we can get and set the different property from the option method
    var buttonText = button.option("text");
    console.log(buttonText);

    //This will return the object of properties.
    //This way we can get the different property of the ui-component.
    var buttonProp = $("#buttonContainer").dxButton("option");
    console.log(buttonProp);

    //This is two way to dispose any component
    //first is remove method and another is dispose
    //while we write remove method the componet from the dom
    //where as dispose method is not remove component from dom
    //$("#buttonContainer").dxButton().remove();
    //$("#buttonContainer").dxButton("dispose");


    //var button1 = new DevExpress.ui.dxButton(document.getElementById("buttonContainer"), {
    //    text: "ClickMe"
    //});

});
