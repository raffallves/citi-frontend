import ButtonInput from './ButtonInput'
import { render, screen } from '@testing-library/react'

describe('ButtonInput', () => {
  it('renderiza o componente ButtonInput', () => {
    render(<ButtonInput/>)

    expect(screen.getByText(/Enviar Arquivos/)).toBeInTheDocument()
  })
});