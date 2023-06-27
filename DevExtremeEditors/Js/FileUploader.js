$(() => {
    $("#dxFileUpload").dxFileUploader({
        multiple: false,
        selectButtonText: "Select File",
        allowCanceling: true,
        //accept: "image/png",
        chunkSize: 200000,
        maxFileSize: 4000000,
        allowCanceling: true,
        allowedFileExtensions: [".png"],
        invalidFileExtensionMessage:"you have to select png file only",
        uploadUrl: 'https://js.devexpress.com/Demos/NetCore/FileUploader/Upload',
        uploadMode: "instantly",
        uploadAbortedMessage:"upload cancelled with all of the heart of user",
        inputAttr: {
            id: "FileIploader"
        },

        onBeforeSend: (e) => {
            console.log(e);
            console.log(e.file.type)
        },

        onFilesUploaded: () => {
            $("#msg").text("File Uploaded");
        },

        onUploadError: (e) => {
            const fileType = e.file.type
            $("#error").text("only" + fileType + "is accepted");
        }
    }).dxFileUploader("instance");

})