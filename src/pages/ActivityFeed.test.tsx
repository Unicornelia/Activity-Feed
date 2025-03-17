import { render, screen } from '@testing-library/react'
import ActivityFeed from './ActivityFeed'

test('renders image with correct title', () => {
  render(<ActivityFeed />)

  expect(screen.getByText('Activities')).toBeInTheDocument()
})
