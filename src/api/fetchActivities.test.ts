import { fetchActivities } from './fetchActivities.ts';
import { vi } from 'vitest';
import createFetchMock from 'vitest-fetch-mock';

const fetchMock = createFetchMock(vi);
fetchMock.enableMocks();

describe('fetchActivities', () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  test('fetches activities successfully', async () => {
    const mockResponse = {
      links: {
        self: '/',
        next: '/?after=someLetters',
      },
      page: {
        size: 20,
        number: 0,
      },
      tours: [{ id: 1, name: 'My adventure', creator: 'Jane Doe', images: [] }],
    };

    fetchMock.mockResponseOnce(JSON.stringify(mockResponse));

    const data = await fetchActivities();

    expect(data).toEqual(mockResponse);
    expect(fetchMock).toHaveBeenCalledTimes(1);
    expect(fetchMock).toHaveBeenCalledWith(import.meta.env.VITE_API_URL);
  });

  test('throws an error on a failed response', async () => {
    fetchMock.mockResponseOnce('', { status: 500 });

    await expect(fetchActivities()).rejects.toThrow(
      'HTTP response returned 500'
    );

    expect(fetchMock).toHaveBeenCalledTimes(1);
  });
});
