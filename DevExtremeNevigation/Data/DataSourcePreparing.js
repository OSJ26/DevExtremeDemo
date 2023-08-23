export const menuItems = new DevExpress.Data.CustomStore({
    key: 'menuId',
    load: () => {
        $.ajax({
            url: 'https://localhost:44379/api/Menu',
            type: 'GET',
            success: (response) => {
                console.log(response);

                //function transformDataToHierarchy(response, parentId = null) {
                //    const nestedData = [];

                //    for (const item of flatData) {
                //        if (item.parentId === parentId) {
                //            const children = transformDataToHierarchy(flatData, item.id);
                //            if (children.length > 0) {
                //                item.items = children;
                //            }
                //            nestedData.push(item);
                //        }
                //    }

                //    return nestedData;
                //}

                //const hierarchicalMenuData = transformDataToHierarchy(flatMenuData);

                //console.log(hierarchicalMenuData);


            },
            error: () => {
                console.log("something Went wrong");
            }
        })
    }
})