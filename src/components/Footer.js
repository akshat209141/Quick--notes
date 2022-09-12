/*global chrome*/

import React from 'react'
import '../styles/footer.css'
import { generatePDF } from '../scripts/generatePDF'

function Footer({currentFile, setcurrentFile}) {
  const backToHome = () => {
    chrome.storage.sync.set({"currentFile":''})
    setcurrentFile('')
  }

  const makePDF = () => {
    chrome.storage.sync.get("allFilesData", (obj) => {
      const fileData = obj.allFilesData.filter((file) => {
        return file.name === currentFile
      })

      generatePDF(fileData[0].data, currentFile)
    })
  }

  const deleteDocument = () => {
    chrome.storage.sync.get('allFilesData', (obj) => {
      const newFileData = obj.allFilesData.filter((file) => {
        return file.name !==currentFile
      });

      chrome.storage.sync.set({"allFilesData":newFileData})
      chrome.storage.sync.get("fileNames", (obj) => {
        const newFileNames = obj.fileNames.filter((file) => {
            return file !== currentFile
        })
          chrome.storage.sync.set({"fileNames": newFileNames}, () => {
            setcurrentFile('')
          })
      })
    })
  }

  return (
    <div class="footer">
      <div className='btns backButton' onClick={backToHome}>Back</div>
      <div className='btns saveButton' onClick={makePDF}>Save PDF</div>
      <div className='btns deleteButton' onClick={deleteDocument}> Delete </div>
    </div>
  )
}

export default Footer