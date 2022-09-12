/*global chrome*/





export let currFile = '';


    chrome.storage.sync.get("currentFile", (obj) => {
        if(obj.currentFile)
            currFile = obj.currentFile
        console.log(obj, currFile)
    })


export let data = [];

chrome.storage.sync.get("currentFile", (fileObj) => {
    const currentFile = fileObj.currentFile;
    if(currentFile){
        chrome.storage.sync.get('allFilesData', (dataObj) => {
            if(dataObj.allFilesData){
                let fileData = dataObj.allFilesData.filter((file) => {
                    return file.name === currentFile
                })
                data = fileData[0].data
            }               
        })    
    }
})
