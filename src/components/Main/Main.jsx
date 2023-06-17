import './Main.css'
import DropFileInput from '../DropFileInput/DropFileInput'
import ButtonInput from '../ButtonInput/ButtonInput'

export default function Main() {
    return (
       <main data-testid='page-main'>
            <section className='file-handler'>
                <div className='main-copy'>
                    <h1>Valide Sua Remessa</h1>
                    <p>É rápido e fácil! Escolha os arquivos a serem validados e tenha sua resposta em segundos.</p>
                </div>
                <div className='main-file-input'>
                    <DropFileInput />
                    <ButtonInput />
                </div>
            </section>
            <section className='handler-status'>
                <h2>Status</h2>
                <p>O status de sua requisição aparecerá aqui.</p>
            </section>
       </main> 
    )
}