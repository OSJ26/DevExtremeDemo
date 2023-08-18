function isNotEmpty(value) {
    return value !== undefined && value !== '' && value !== null;
}
export const data = new DevExpress.data.CustomStore({
    key: 'OrderNumber',
    //loadMode: 'raw',
    load: (loadOptions) => {
        const deferred = $.Deferred();
        const args = {};
        console.log(loadOptions);

        //const { sort, filter, totalSummary, ...filteredOptions } = loadOptions;

        const options = ['skip', 'take', 'requireTotalCount', 'requireGroupCount','sort', 'filter', 'totalSummary', 'group', 'groupSummary'];
        options.forEach((i) => {
            if (i in loadOptions && isNotEmpty(loadOptions[i])) {
                args[i] = JSON.stringify(loadOptions[i]);
            }
        });

        $.ajax({
            url: 'https://js.devexpress.com/Demos/WidgetsGalleryDataService/api/orders',
            dataType: 'json',
            data: args,
            success: (result) => {
                deferred.resolve(result.data, {
                    sort: result.sort,
                    filter: result.filter,
                    totalSummary: result.totalSummary,
                    summary: result.summary,
                    groupSummary: result.groupSummary,
                    totalCount: result.totalCount,
                    groupCount: result.groupCount
                })
            },
            error: () => {
                deferred.reject("Data Loading Error");
            },
            timeout: 5000,
        });
        return deferred.promise();
    }
});