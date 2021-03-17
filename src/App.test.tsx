import React from 'react'
import {render, screen} from '@testing-library/react'
import TabBar from './pages/TabBar'

test('renders learn react link', () => {
  render(<TabBar />)
  const linkElement = screen.getByText(/learn react/i)
  expect(linkElement).toBeInTheDocument()
})
