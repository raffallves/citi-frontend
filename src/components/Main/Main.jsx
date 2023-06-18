import './Main.css'
import DropFileInput from '../DropFileInput/DropFileInput'
import ButtonInput from '../ButtonInput/ButtonInput'
import Spinner from '../Spinner/Spinner'
import Status from '../Status/Status'
import Error from '../Error/Error'
import Success from '../Success/Success'
import { useState } from 'react'

export default function Main() {
    const [fileList, setFileList] = useState([])
    return (
       <main data-testid='page-main'>
            <section className='file-handler'>
                <div className='main-copy'>
                    <h1>Valide Suas Remessas PIX</h1>
                    <p>É rápido e fácil! Escolha os arquivos a serem validados e tenha sua resposta em segundos. Todos os dados são processados no padrão CNAB 750.</p>
                </div>
                <div className='main-file-input'>
                    <DropFileInput setFileList={setFileList} fileList={fileList}/>
                    <ButtonInput />
                    {/* <Spinner/> */}
                    {/* <Error /> */}
                    {/* <Success/> */}
                </div>
            </section>
            <section className='handler-status'>
                <h2>Retorno</h2>
                <Status fileList={fileList} />
                <button>Baixar Arquivos</button>
            </section>
       </main> 
    )
}