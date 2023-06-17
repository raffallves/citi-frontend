import Main from './Main'
import { render, screen } from '@testing-library/react'

describe('Main', () => {
  it('renderiza o componente Main', () => {
    render(<Main/>)

    expect(screen.getByTestId("page-main")).toBeInTheDocument()
    expect(screen.getByText(/Valide Sua Remessa/)).toBeInTheDocument()
    expect(screen.getByText(/É rápido e fácil! Escolha os arquivos a serem validados e tenha sua resposta em segundos./)).toBeInTheDocument()
  })
});