import Main from './Main'
import { render, screen } from '@testing-library/react'

describe('Main', () => {
  it('renderiza o componente Main', () => {
    render(<Main/>)

    expect(screen.getByTestId("page-main")).toBeInTheDocument()
    expect(screen.getByText(/Valide Suas Remessas PIX/)).toBeInTheDocument()
    expect(screen.getByText(/É rápido e fácil! Escolha os arquivos a serem validados e tenha sua resposta em segundos. Todos os dados são processados no padrão CNAB 750./)).toBeInTheDocument()
  })
});