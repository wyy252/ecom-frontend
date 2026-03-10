import React from 'react'
import { test, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import App from './App'

test('renders main title', () => {
  render(<App />)
  expect(screen.getByText('Microservices E-Commerce Platform')).toBeTruthy()
})