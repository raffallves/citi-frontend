import './FilesTable.css'
import { useRef } from 'react'

export default function FilesTable({ fileList }) {
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

    if (fileList.length === 0) return <p>Sem dados.</p>
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
                    {fileList.map((element, i) => {
                        if (i === 0) {
                            return (
                                <tr>
                                    <td><input type='checkbox'/></td>
                                    <td>Bradesco</td>
                                    <td>359.785.621-89</td>
                                    <td>18/06/2023</td>
                                    <td>Não</td>
                                </tr>
                            )
                        } else {
                            return (
                                <tr>
                                    <td><input type='checkbox'/></td>
                                    <td>Santander</td>
                                    <td>368.953.652-11</td>
                                    <td>18/06/2023</td>
                                    <td>Sim</td>
                                </tr>
                            )
                        }
                    })}
                </tbody>
            </table>
        </>
    )
}