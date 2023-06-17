import DropFileInput from './DropFileInput'
import { render, screen } from '@testing-library/react'

describe('DropFileInput', () => {
  it('renderiza o componente DropFileInput', () => {
    render(<DropFileInput/>)

    expect(screen.getByText(/Arraste os arquivos para cá ou clique no botão abaixo./)).toBeInTheDocument()
  })
});