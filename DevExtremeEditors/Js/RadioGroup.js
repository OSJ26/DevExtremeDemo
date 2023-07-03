$(() => {

    const priorities = ['Low', 'Normal', 'Urgent', 'High'];
    const priorityEntities = [
        { id: 0, text: 'Low' },
        { id: 1, text: 'Normal' },
        { id: 2, text: 'Urgent' },
        { id: 3, text: 'High' },
    ];

    const radioGroup = $("#dxRadio").dxRadioGroup({
        //dataSource: ["low","medium","heigh","ignorable"],
        items: priorities,
        value: priorityEntities[0],
        layout: "horizontal",

        onValueChanged: (e) => {
            const previousValue = e.previousValue.text;
            const value = e.value;
            console.log(e);
            console.log("Previoius Value = " + previousValue + " and " + "Currunt value = " + value);
        }
    }).dxRadioGroup("instance");

    radioGroup.registerKeyHandler("enter", (e) => {
        radioGroup.option("valueExpr", priorityEntities[0]);
    })
})