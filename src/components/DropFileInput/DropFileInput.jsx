import './DropFileInput.css'
import { useState, useRef } from 'react'

export default function DropFileInput() {
    const [fileList, setFileList] = useState([])
    const wrapperRef = useRef(null)

    const onDragEnter = () => wrapperRef.current.classList.add('dragover')

    const onDragLeave = () => wrapperRef.current.classList.remove('dragover')

    const onDrop = () => wrapperRef.current.classList.remove('dragover')

    const onFileDrop = e => {
        const newFile = e.target.files[0]
        if (newFile) {
            const updatedList = [...fileList, newFile]
            setFileList(updatedList)
        }
    }
    return (
        <div 
        className='drop-file-input' 
        ref={wrapperRef}
        onDragEnter={onDragEnter}
        onDragLeave={onDragLeave}
        onDrop={onDrop}
        >
            <div className='drop-file-input__label'>
                <p>Arraste os arquivos para cá ou clique no botão abaixo.</p>
            </div>
            <input type="file" defaultValue="" onChange={onFileDrop}/>
        </div>
    )
}