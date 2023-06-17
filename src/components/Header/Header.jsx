import './Header.css'
import NavBar from '../NavBar/NavBar'

export default function Header() {
    return (
        <header data-testid='page-header'>
            <img src={'https://corporateportal.brazil.citibank.com/resources-responsive/img/header/citi-logo.png'} />
            <NavBar />
        </header>
    )
}