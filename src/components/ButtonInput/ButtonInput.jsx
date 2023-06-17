import './ButtonInput.css'

export default function ButtonInput() {
    return (
        <button>
            Enviar Arquivos
            <input type="file" defaultValue=""/>
        </button>
    )
}