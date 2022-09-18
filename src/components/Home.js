/*global chrome*/
import React, {useState} from 'react'
import {currFile } from '../scripts/popup'
import '../styles/home.css'
import Footer from './Footer'
import Points from './Points'
import Welcome from './Welcome'

function Home() {
    // state to manage the active/in-use document
    const [currentFile, setcurrentFile] = useState(currFile)
    return (
        <div id="note-page">
            {
                (currentFile === '')?
                    (<Welcome setcurrentFile={setcurrentFile} />)
                    :(
                        <>
                        <Points currentFile={currentFile}/>
                        <Footer currentFile={currentFile} setcurrentFile={setcurrentFile}/>
                        </>         
                    )        
            }
            
            
        </div>
    )
}

export default Home