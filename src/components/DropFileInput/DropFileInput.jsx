import './DropFileInput.css'

export default function DropFileInput() {
    return (
        <div className='drop-file-input'>
            <div className='drop-file-input__label'>
                <p>Arraste os arquivos para cá ou clique no botão abaixo.</p>
            </div>
            <input type="file" defaultValue=""/>
        </div>
    )
}