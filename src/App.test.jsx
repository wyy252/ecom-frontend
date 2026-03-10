import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import App from './App'

test('renders main title', () => {
  render(<App />)
  expect(screen.getByText('Microservices E-Commerce Platform')).toBeInTheDocument()
})