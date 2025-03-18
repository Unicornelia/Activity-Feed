import { render, screen } from '@testing-library/react';
import ActivityCard from '../ActivityCard';
import { Tour } from '../../types';
import { vi } from 'vitest';

vi.mock('../UserCard', () => ({
  __esModule: true,
  default: ({ displayName }: { displayName: string }) => (
    <div data-testid="user-card">{displayName}</div>
  ),
}));

vi.mock('../HorizontalGrid', () => ({
  __esModule: true,
  default: () => <div data-testid="horizontal-grid"></div>,
}));

vi.mock('../ImageGrid', () => ({
  __esModule: true,
  default: () => <div data-testid="image-grid"></div>,
}));

const mockTour: Tour = {
  id: 1,
  status: '',
  is_premium: true,
  vector_map_image: {
    src: '',
    attribution: '',
  },
  vector_map_image_preview: {
    src: '',
    attribution: '',
  },
  name: 'Mountain Adventure',
  date: '2024-03-18T12:00:00Z',
  display_name: 'John Doe',
  creator: {
    username: 'johndoe',
    avatar: { src: 'avatar-url.jpg', templated: true },
  },
  distance: 12000, // meters
  elevation_up: 500,
  elevation_down: 400,
  time_in_motion: 3600, // seconds (1 hour)
  images: [
    { id: 1, src: 'image1.jpg', templated: true },
    { id: 2, src: 'image2.jpg', templated: true },
  ],
};

describe('ActivityCard', () => {
  it('renders activity name', () => {
    render(<ActivityCard {...mockTour} />);
    expect(
      screen.getByRole('heading', { name: /Mountain Adventure/i })
    ).toBeInTheDocument();
  });

  it('renders user card with name', () => {
    render(<ActivityCard {...mockTour} />);
    expect(screen.getByTestId('user-card')).toHaveTextContent('John Doe');
  });

  it('renders horizontal grid and image grid', () => {
    render(<ActivityCard {...mockTour} />);
    expect(screen.getByTestId('horizontal-grid')).toBeInTheDocument();
    expect(screen.getByTestId('image-grid')).toBeInTheDocument();
  });
});
