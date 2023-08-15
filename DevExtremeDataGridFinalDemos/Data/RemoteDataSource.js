function isNotEmpty(value) {
    return value !== undefined && value !== '' && value !== null;
}
export const data = new DevExpress.data.CustomStore({
    key: 'Id',
    loadMode: 'processed',
    load: (loadOptions) => {
        const deferred = $.Deferred();
        const args = {};
        console.log(loadOptions);

        const { sort, filter, group, totalSummary, ...filteredOptions } = loadOptions;

        const options = ['skip', 'take', 'requireTotalCount', 'requireGroupCount', 'sort','filter', 'totalSummary', 'group', 'groupSummary'];
        options.forEach((i) => {
            if (i in filteredOptions && isNotEmpty(loadOptions[i])) {
                args[i] = JSON.stringify(loadOptions[i]);
            }
        });

        $.ajax({
            url: 'https://js.devexpress.com/Demos/WidgetsGalleryDataService/api/Sales',
            dataType: 'json',
            data: args,
            success: (result) => {
                console.log("Hello");
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