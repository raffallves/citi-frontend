import Header from './Header'
import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom';

describe('Header', () => {
  it('renderiza o componente Header', () => {
    render(
      <BrowserRouter>
        <Header/>
      </BrowserRouter>
    )

    expect(screen.getByTestId("page-header")).toBeInTheDocument()
  })
});