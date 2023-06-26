$(() => {
    const car = ["Baleno", "Ciaz", "Jimnny", "Thar", "Elantra"];

    $("#myDrop").dxDropDown({
        contentTemplate: (e) => {
            const $list = $("<div>").dxList({
                car,
                allowItemDeleting: true,
                onItemDeleting: (e) => {
                    if (dataSource.length === 1) {
                        e.cancel = true;
                    }
                }
            })
            list = $list.dxList('instance');
            return $list;
        }
    })
})