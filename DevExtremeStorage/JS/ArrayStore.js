$(() => {
    let tId = $("#dxTextKey").dxTextBox({
        label: "Id",
        labelMode: "floating",
        width: "500px"
    }).dxTextBox("instance");

    let tName = $("#dxTextValue").dxTextBox({
        label: "Name",
        labelMode: "floating",
        width: "500px"
    }).dxTextBox("instance");

    let iButton = $("#dxButtonInsert").dxButton({
        text: "Insert",
        type: "success",
        onClick: () => {
            store.insert({ id: Number(tId.option("text")), name: tName.option("text") });
        }
    });

    let uButton = $("#dxButtonUpdate").dxButton({
        text: "Update",
        type: "default",
        onClick: () => {
            store.update(tId.option("text"), { name: tName.option("text")});
        }
    })

    let dButton = $("#dxButtonDelete").dxButton({
        text: "Delete",
        type: "danger",
        onClick: () => {
            store.remove(tId.option("text"));
        }
    })

    const store = new DevExpress.data.ArrayStore({
        data: employeeName,
        key: "id",

        errorHandler: (e) => {
            console.log(e.message);
        },

        onPush: () => console.log("New data is push in Array Store"),

        onInserted: () => console.log("Item Inserted"),

        onInserting: () => console.log("Item Inserting"),

        onModified: () => console.log("Data Modified Successfully"),

        onModifying: () => console.log("wait a minitue Data was Modifying "),

        onRemoving: () => console.log("Data removing from the arraystore"),

        onRemoved: () => console.log("Data removed from the arraystore"),

    })
})