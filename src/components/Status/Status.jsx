import './Status.css'
import { useState } from 'react'
import FileTables from '../FilesTable/FilesTable'

export default function Status({ fileList }) {
    const [selection, setSelection] = useState([
        {
            id: 0,
            selected: false
        }
    ])


    return (
        <>
            <FileTables fileList={fileList}/>
        </>
    )
}