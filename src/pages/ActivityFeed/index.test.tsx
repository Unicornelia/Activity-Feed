import { render, screen, waitFor } from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import ActivityFeed from './index.tsx';

beforeEach(() => {
  fetchMock.resetMocks();
});

test('renders activity feed', async () => {
  fetchMock.mockResponseOnce(
    JSON.stringify({
      tours: [{ id: 1, name: 'My adventure', creator: 'John Doe', images: [] }],
    })
  );

  const queryClient = new QueryClient();

  render(
    <QueryClientProvider client={queryClient}>
      <ActivityFeed />
    </QueryClientProvider>
  );

  await waitFor(() => {
    expect(screen.getByText(/Activities/i)).toBeInTheDocument();
  });
});
