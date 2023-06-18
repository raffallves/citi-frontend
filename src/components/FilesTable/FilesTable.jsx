import './FilesTable.css'
import { useRef } from 'react'

export default function FilesTable() {
    const tableRef = useRef(null)

    // Seleciona todos os checkbox se o da header for selecionado
    const onChange = e => {
        const tableBody = tableRef.current.children[1]
        if (e.target.checked) {
            if (e.target.id === 'head') {
                for (let i = 0; i < tableBody.children.length; i++) {
                    tableBody.children[i].children[0].children[0].checked = true
                }
            }
        } else {
            for (let i = 0; i < tableBody.children.length; i++) {
                tableBody.children[i].children[0].children[0].checked = false
            }
        }
    }
    return (
        <>
            <table className='table-wrapper' ref={tableRef}>
                <thead>
                    <tr>
                        <td>
                            <input 
                            id="head" 
                            type='checkbox' 
                            onChange={onChange}
                            />
                        </td>
                        <td>ISPB</td>
                        <td>CPF/CNPJ</td>
                        <td>Data de Geração</td>
                        <td>Rejeitada</td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><input type='checkbox'/></td>   
                        <td>5151</td>
                        <td>5151</td>
                        <td>5151</td>
                        <td>5151</td>
                    </tr>
                </tbody>
            </table>
            <p>Sem dados.</p>
        </>
    )
}