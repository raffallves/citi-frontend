import NavBar from './NavBar'
import { render, screen } from '@testing-library/react'

describe('NavBar', () => {
  it('renderiza o componente NavBar', () => {
    render(NavBar())

    expect(screen.getByText(/Contato/)).toBeInTheDocument()
    expect(screen.getByText(/Home/)).toBeInTheDocument()
    expect(screen.getByText(/Sobre/)).toBeInTheDocument()
    screen.debug()
  })
});