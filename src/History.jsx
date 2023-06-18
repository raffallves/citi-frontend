import Header from './components/Header/Header'
import Validations from './components/Validations/Validations'

export default function History() {
    return (
        <>
            <Header />
            <main>
                <h1>Histórico de Validações</h1>
                <p>Nenhuma validação registrada.</p>
                {/* <Validations /> */}
            </main>
        </>
    )
}