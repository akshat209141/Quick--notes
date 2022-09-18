/*global chrome*/

// export currentfile on extension popup
export let currFile = '';

chrome.storage.sync.get("currentFile", (obj) => {
    if(obj.currentFile)
        currFile = obj.currentFile
    console.log(obj, currFile)
})

