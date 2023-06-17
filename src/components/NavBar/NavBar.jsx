import './NavBar.css'
import { useLocation } from 'react-router-dom'

export default function NavBar() {
    const location = useLocation()
    return (
        <nav>
            {location.pathname === '/' ?
            <a href={'/historico'}>Histórico</a> :
            <a href={'/'}>Validação</a>}
        </nav>
    )
}