import NavBar from './NavBar'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom';

describe('NavBar', () => {
  it('renderiza o componente NavBar', () => {
    render(
      <BrowserRouter>
        <NavBar/>
      </BrowserRouter>
  )

    expect(screen.getByText(/Histórico/)).toBeInTheDocument()
  })
});