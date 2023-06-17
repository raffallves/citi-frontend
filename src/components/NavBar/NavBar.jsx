import './NavBar.css'
import { useLocation, Link } from 'react-router-dom'

export default function NavBar() {
    const location = useLocation()
    return (
        <nav>
            {location.pathname === '/' ?
            <Link to='historico'>Histórico</Link> :
            <Link to='/'>Validação</Link>}
        </nav>
    )
}