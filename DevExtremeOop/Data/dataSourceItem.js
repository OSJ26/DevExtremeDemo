const url = 'https://localhost:44383/api/OneWay';
//import  myLoadPanel  from '../JS/TestCase.js';

export const loadData = new DevExpress.data.CustomStore({
    key: 'id',
    load: (e) => {
        console.log(e);
        var d = new $.Deferred();
        return $.ajax({
            type: "GET",
            url: url,
            success: () => {
                d.resolve();
                DevExpress.ui.notify("Data Fetched SUccessfully", "success", 500);
            },
            error: (e) => {
                console.log(e);
                DevExpress.ui.notify("Something went wrong please cehck code!!!", "error", 1000);
            }
        })
    },

    insert: (e) => {
        console.log(e);
        return $.ajax({
            type: 'POST',
            url: url,
            data: e,
            success: () => {
                DevExpress.ui.notify("Data Inserted SUccessfully", "success", 500);
            },
            error: () => {
                DevExpress.ui.notify("Something went wrong please cehck code!!!", "error", 1000);
            }
        })
    },

    update: (key, values) => {
        console.log(values);
        return $.ajax({
            type: 'PUT',
            url: 'https://localhost:44383/api/OneWay/' + key,
            data: values,
            success: (e) => {
                console.log(e);
                DevExpress.ui.notify("Data Updated SUccessfully", "success", 500);
            },
            error: (e) => {
                console.log(e);
                DevExpress.ui.notify("Something went wrong please cehck code!!!", "error", 1000);
            }
        })
    },

    remove: (key) => {
        return $.ajax({
            type: 'DELETE',
            url: 'https://localhost:44383/api/DeleteOneWayTour/' + key,
            success: () => {
                DevExpress.ui.notify("Data Deleted SUccessfully", "success", 500);
            },
            error: () => {
                DevExpress.ui.notify("Cannot Able to Delete!!!", "error", 1000);
            }
        })
    }
});
