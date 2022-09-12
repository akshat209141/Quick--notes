/*global chrome*/

import React, {useState} from 'react'
import '../styles/points.css'
import styled from 'styled-components'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';

function Points({currentFile}) {

    const [pointsData, setpointsData] = useState([])

    chrome.storage.sync.get("allFilesData", (obj) => {
        if(obj.allFilesData){
            const data = obj.allFilesData.filter((file) => {
                return file.name === currentFile
            })
            setpointsData(data[0].data)
        }
    })

    const deletePoint = (index) => {

        chrome.storage.sync.get("allFilesData", (filesData) => {
            const oldFileData = filesData.allFilesData.filter((file) => {
                return file.name === currentFile
            })
            const updatedFilesData = filesData.allFilesData.filter((file) => {
                if(file.name === currentFile){
                    const newFiledata = file.data.filter((file, indexOfthis) => {
                        return indexOfthis!=index
                    })
                    file.data = newFiledata
                }
                return file
            })
            chrome.storage.sync.set({"allFilesData":updatedFilesData})
            setpointsData(updatedFilesData)
        })       
    }

    return (
        <>
        <div className='header'>
                <div className='filenameTitle'>{currentFile}</div>
        </div>
        <div className='pointsTab'>
            {
                pointsData?
                    pointsData.map((point,index) => (
                        <div key={index} className="note">
                            <input type="checkbox" style={{display:"none"}} id={`#${index}-note-title-label-check`} />
                            <label className="note-title-label" htmlFor={`#${index}-note-title-label-check`}>{`${index+1}. ${(point.length > 35)?`${point.slice(0,35)}...`:point}`}</label>
                            <div className="note-text">{point}</div>
                            <DeleteIcon onClick={() =>  deletePoint(index)} />
                        </div>
                    ))
                    :null
            }
        </div>
        </>
    )
}

const DeleteIcon = styled(DeleteForeverIcon)`
    position: absolute;
    right: 0;
    top: 2px;
    cursor: pointer;
    padding-right: 2px;
    &:hover{
        color: #000;
    }
`

export default Points