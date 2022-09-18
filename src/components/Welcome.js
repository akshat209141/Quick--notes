/*global chrome*/
import React, {useState} from 'react'
import styled from 'styled-components'
import '../styles/welcome.css'
import TextSnippetIcon from '@mui/icons-material/TextSnippet';
import NoteAddIcon from '@mui/icons-material/NoteAdd';

function Welcome({setcurrentFile}) {

  // state to manage an array of all file names
  const [files, setFiles] = useState([])

  chrome.storage.sync.get("fileNames", (obj) => {
    if(obj.fileNames)
      setFiles(obj.fileNames)
  })

  // function to set the file in use/active-state
  const currFileSet = (fileName) => {
      chrome.storage.sync.set({"currentFile": fileName}, () => {
        setcurrentFile(fileName)
      })
  }

  // function to create a new file and add to list of file
  const addNewFile = () => {
    chrome.storage.sync.get("fileNames", (obj) => {
        let a = prompt("Enter name of your file")
        if(a === null || a===''){
          alert("You didn't entered any name")
        }
        else{
          let allFiles = obj.fileNames;

          if(allFiles){
            if(allFiles.includes(a)){
              alert(`A file with name '${a}' already exist.`)
            }
            else{
              setFiles([...allFiles, a])
              chrome.storage.sync.set({"fileNames": [...allFiles, a]})
              chrome.storage.sync.get("allFilesData", (obj) => {
                  const filesData = obj.allFilesData
                  chrome.storage.sync.set({"allFilesData": [...filesData, {name:a, data:[]}]})
              })  
            }
          }
          else{
            setFiles([a])
            chrome.storage.sync.set({"fileNames": [a]})
            chrome.storage.sync.set({"allFilesData": [{name:a, data:[]}]})
          }
        }

        chrome.storage.sync.get("fileNames", (obj) => {
          console.log("fileNames:",obj)
        })
        chrome.storage.sync.get("allFilesData", (obj) => {
          console.log("allFilesData:",obj)
        })
        })
    }




  return (
    <div className='welcome'>
      <div className='title'>
          Quicky Notes
      </div>
      <div class='welcome-tab'>
          <div>
          <NewFileIcon onClick={addNewFile}/>
          <div className="fileName">New File</div>     
          </div>
          {
            files.map((fileName, index) => (
              <div>
                <FileIcon  key={index} onClick={() => currFileSet(fileName)}/>
                <div className="fileName">{(fileName.length > 10)?`${fileName.slice(0,10)}...`:fileName}</div>
              </div>
            ))
          }
      </div>
    </div>
   
  )
}


const FileIcon = styled(TextSnippetIcon)`
  transform: scaleY(1.12) scale(4);
  margin: 23px 33px;
  cursor: pointer;
  color: #fff;

  &:hover{
    color: rgb(234, 0, 255);
  }
`
const NewFileIcon = styled(NoteAddIcon)`
  margin: 23px 33px;
  cursor: pointer;
  transform: scale(4);
  color: rgb(0 238 255);
  
  &:hover{
    color: rgb(234, 0, 255);
}
`
export default Welcome