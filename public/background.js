

var menuItem = {
    "id":"notePoint",
    "title":"Add a point",
    "contexts":["selection"]
}

chrome.contextMenus.create(menuItem);


chrome.contextMenus.onClicked.addListener((clickedData) => {
    if(clickedData.menuItemId === menuItem.id && clickedData.selectionText){

        chrome.storage.sync.get("currentFile", (obj) => {
            let fileName = obj.currentFile;
            if(!fileName){
                const date = new Date();
                let notiOptions = {
                    type:'basic',
                    iconUrl: "./images/icon.png",
                    title:"No file chosen!",
                    message:"You haven't chosen any file to save current point!"
                }
                chrome.notifications.create(`noFileNotif${date}`, notiOptions)
            }
            else{
                chrome.storage.sync.get("allFilesData", (filesData) => {
                    const oldFileData = filesData.allFilesData.filter((file) => {
                        return file.name === fileName
                    })
                    const updatedFilesData = filesData.allFilesData.map((file) => {
                        if(file.name === fileName){
                            file.data = [...oldFileData[0].data, clickedData.selectionText]
                        }
                        return file
                    })
                    chrome.storage.sync.set({"allFilesData":updatedFilesData})
                })
            }
        })
    }
})

