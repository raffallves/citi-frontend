import './Status.css'
import { useState } from 'react'
import FileTables from '../FilesTable/FilesTable'

export default function Status() {
    const [selection, setSelection] = useState([
        {
            id: 0,
            selected: false
        }
    ])


    return (
        <>
            <FileTables/>
        </>
    )
}