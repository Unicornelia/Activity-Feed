import { render, screen } from '@testing-library/react';
import { vi } from 'vitest';
import ActivityFeed from '../ActivityFeed';
import { useInfiniteQuery } from '@tanstack/react-query';
import { Tour } from '../../types';

vi.mock('@tanstack/react-query', () => ({
  useQuery: vi.fn(),
  useInfiniteQuery: vi.fn(),
}));

vi.mock('../../components/ActivityCard', () => ({
  __esModule: true,
  default: ({ name }: { name: string }) => (
    <div data-testid="activity-card">{name}</div>
  ),
}));

const mockTours: Tour[] = [
  {
    id: 1,
    name: 'My drab adventure',
    date: '2024-03-18T12:00:00Z',
    display_name: 'Alice Johnson',
    creator: {
      username: 'alicejohnson',
      avatar: { src: 'avatar1.jpg', templated: true },
    },
    distance: 15000,
    elevation_up: 600,
    elevation_down: 500,
    time_in_motion: 4000,
    images: [{ id: 2, src: 'image1.jpg', templated: true }],
    status: '',
    is_premium: '',
    vector_map_image: {
      src: '',
      attribution: '',
    },
    vector_map_image_preview: {
      src: '',
      attribution: '',
    },
  },
  {
    id: 2,
    name: 'My normal adventure',
    date: '2024-03-19T15:00:00Z',
    display_name: 'Candace Moen',
    creator: {
      username: 'cmoen',
      avatar: { src: 'avatar2.jpg', templated: true },
    },
    distance: 22000,
    elevation_up: 800,
    elevation_down: 750,
    time_in_motion: 5000,
    images: [
      { id: 2, src: 'image3.jpg', templated: true },
      { id: 3, src: 'image4.jpg', templated: true },
    ],
    status: '',
    is_premium: '',
    vector_map_image: {
      src: '',
      attribution: '',
    },
    vector_map_image_preview: {
      src: '',
      attribution: '',
    },
  },
];

describe('ActivityFeed', () => {
  it('renders loading state', () => {
    (useInfiniteQuery as vi.Mock).mockReturnValue({ isLoading: true });

    render(<ActivityFeed />);

    expect(screen.getByText(/loading/i)).toBeInTheDocument();
  });

  it('renders error state', () => {
    (useInfiniteQuery as vi.Mock).mockReturnValue({
      isLoading: false,
      error: new Error('Failed to fetch'),
    });

    render(<ActivityFeed />);

    expect(screen.getByText(/error fetching activities/i)).toBeInTheDocument();
  });

  it('renders activity cards aka tours when data is available', () => {
    (useInfiniteQuery as vi.Mock).mockReturnValue({
      isLoading: false,
      data: { pages: [{ tours: mockTours }] },
    });

    render(<ActivityFeed />);

    expect(screen.getAllByTestId('activity-card')).toHaveLength(
      mockTours.length
    );
    expect(screen.getByText('My drab adventure')).toBeInTheDocument();
    expect(screen.getByText('My normal adventure')).toBeInTheDocument();
  });
});
