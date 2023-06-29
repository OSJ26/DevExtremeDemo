$(() => {
    $("#button").dxButton({
        text: "Click To Load",
        onClick: async function() {
            await $.ajax({
                type: "GET",
                url: "https://localhost:7238/api/USED01",
                success: (e) => {
                    console.log(e);
                     data = new DevExpress.data.LocalStore({
                        data: e,
                        key: "id",
                        immediate: true,
                        name: "myStorage"
                    })
                    DevExpress.ui.notify("Data Inserted Successfully In Local Storage", "success", 1000);
                    var local = localStorage.getItem("dx-data-localStore-myStorage");
                    console.log(local);
                },
                error: (e) => {
                    console.log(e);
                    DevExpress.ui.notify("Something went wrong please cehck code!!!", "error", 1000);
                }
            })
        }
    });

   
})