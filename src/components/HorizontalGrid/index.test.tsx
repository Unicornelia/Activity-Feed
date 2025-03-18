import { render, screen } from '@testing-library/react';
import HorizontalGrid from '../HorizontalGrid';
import { TourMetric } from '../../types';

describe('HorizontalGrid', () => {
  const mockMetrics: TourMetric[] = [
    { icon: '⏱️', metric: '4h 30m' },
    { icon: '⟷', metric: '15km' },
    { icon: '⌀', metric: '10km/h' },
    { icon: '↗︎', metric: '600m' },
    { icon: '↘︎', metric: '500m' },
  ];

  it('renders all provided metrics', () => {
    render(<HorizontalGrid items={mockMetrics} />);

    mockMetrics.forEach(({ icon, metric }) => {
      expect(
        screen.getByText(
          (content) => content.includes(icon) && content.includes(metric)
        )
      ).toBeInTheDocument();
    });

    expect(screen.getAllByText(/km|h|m/)).toHaveLength(mockMetrics.length);
  });

  it('renders an empty grid when no items are provided', () => {
    render(<HorizontalGrid items={[]} />);

    expect(screen.queryByText(/km|h|m/)).not.toBeInTheDocument();
  });
});
