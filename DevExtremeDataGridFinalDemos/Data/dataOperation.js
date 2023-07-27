const url = 'https://localhost:44383/api/OneWay';

function fetchData() {
    return $.ajax({
        type: "GET",
        url: url,
        success: (e) => {

            DevExpress.ui.notify("Data Fetched SUccessfully", "success", 500);
        },
        error: (e) => {
            DevExpress.ui.notify("Something went wrong please cehck code!!!", "error", 1000);
        }
    })
}

function insertData(data) {
    return $.ajax({
        type: 'POST',
        url: url,
        data: data,
        success: (e) => {
            DevExpress.ui.notify("Data Inserted SUccessfully", "success", 500);
        },
        error: (e) => {
            DevExpress.ui.notify("Something went wrong please cehck code!!!", "error", 1000);
        }
    })
}

function updateData(key,changes) {
    return $.ajax({
        type: 'PUT',
        url: 'https://localhost:44383/api/OneWay/' + key,
        data: changes,
        success: () => {
            DevExpress.ui.notify("Update Successed", "success", 1000);
        },
        error: () => {
            DevExpress.ui.notify("Data Not Updated", 'error', 1000);
        }
    })
}

function deleteData(key) {
    return $.ajax({
        type: "DELETE",
        url: 'https://localhost:44383/api/DeleteOneWayTour/' + key,
        success: () => {
            DevExpress.ui.notify("Deleted Successfully", "success", 1000);
        },
        error: () => {
            DevExpress.ui.notify("Data Not Deleted", 'error', 1000);
        }
    })
}

const data = new DevExpress.data.DataSource({
    key: 'id',
    load: () => {
        return fetchData();
    },
    insert: (values) => {
        return insertData(values);
    },
    update: (key, changes) => {
        return updateData(key, changes);
    },
    remove: (key) => {
        return deleteData(key);
    } 
});

const isLoading = data.isLoading();
const isLoaded = data.isLoaded();
console.log(isLoading);
console.log(isLoaded);
//if (isLoading) {
//    loadPanel.option("message", "Data Loading....");
//    loadPanel.show();
//}
//if (isLoaded) {
//    loadPanel.option("message", "Data Loaded");
//    loadPanel.hide();
//}
export default data;